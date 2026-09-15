import os
import sys
import subprocess
import argparse

def get_ffmpeg():
    # Check if ffmpeg is in path
    import shutil
    ffmpeg = shutil.which("ffmpeg")
    if ffmpeg:
        return ffmpeg
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        pass
    default_path = r"C:\Users\shalin rathod\AppData\Local\Programs\Python\Python312\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe"
    if os.path.exists(default_path):
        return default_path
    raise RuntimeError("FFmpeg executable not found.")

def get_video_info(ffmpeg_bin, input_path):
    ffprobe_bin = ffmpeg_bin.replace("ffmpeg", "ffprobe")
    cmd = [ffmpeg_bin, "-i", input_path]
    proc = subprocess.run(cmd, stderr=subprocess.PIPE, stdout=subprocess.PIPE, text=True, errors="replace")
    output = proc.stderr
    
    # Extract resolution
    import re
    match = re.search(r"(\d{3,5})x(\d{3,5})", output)
    if match:
        return int(match.group(1)), int(match.group(2))
    return 1920, 1080

def remove_watermark(input_file, output_file, method="crop", custom_box=None):
    ffmpeg = get_ffmpeg()
    print(f"Using FFmpeg: {ffmpeg}")
    print(f"Input: {input_file}")
    print(f"Output: {output_file}")
    
    width, height = get_video_info(ffmpeg, input_file)
    print(f"Detected dimensions: {width}x{height}")

    if method == "crop":
        # Gemini / Veo watermarks are typically placed in the bottom right corner with some padding.
        # Slight bottom crop or crop+scale removes it cleanly.
        # Crop 5% from bottom:
        crop_h = int(height * 0.93)
        crop_h = crop_h - (crop_h % 2) # Ensure even
        filter_str = f"crop={width}:{crop_h}:0:0,scale={width}:{height}:flags=lanczos"
        print(f"Applying crop filter: {filter_str}")
    elif method == "delogo":
        # Watermark bounding box in bottom-right corner
        # Default for 1920x1080: x=width-220, y=height-80, w=200, h=60
        if custom_box:
            x, y, w, h = custom_box
        else:
            w = int(width * 0.14)
            h = int(height * 0.08)
            x = width - w - int(width * 0.02)
            y = height - h - int(height * 0.02)
        filter_str = f"delogo=x={x}:y={y}:w={w}:h={h}"
        print(f"Applying delogo filter: {filter_str}")
    elif method == "blur":
        if custom_box:
            x, y, w, h = custom_box
        else:
            w = int(width * 0.14)
            h = int(height * 0.08)
            x = width - w - int(width * 0.02)
            y = height - h - int(height * 0.02)
        filter_str = (
            f"[0:v]split[base][overlay_in];"
            f"[overlay_in]crop={w}:{h}:{x}:{y},boxblur=15:5[blurred];"
            f"[base][blurred]overlay={x}:{y}"
        )
        print(f"Applying blur filter: {filter_str}")
    else:
        raise ValueError(f"Unknown method: {method}")

    # Build ffmpeg command with faststart and web optimization
    cmd = [
        ffmpeg,
        "-y",
        "-i", input_file,
        "-vf", filter_str,
        "-c:v", "libx264",
        "-crf", "19",
        "-preset", "slow",
        "-pix_fmt", "yuv420p",
        "-an", # Remove audio for silent background hero video
        "-movflags", "+faststart",
        output_file
    ]

    print("Running command:", " ".join(cmd))
    proc = subprocess.run(cmd, check=True)
    print(f"Successfully created: {output_file}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Remove watermark from video for hero section")
    parser.add_argument("--input", "-i", default=r"public\videos\raw-hero-video.mp4", help="Path to input video")
    parser.add_argument("--output", "-o", default=r"public\videos\hero-video.mp4", help="Path to output video")
    parser.add_argument("--method", "-m", choices=["crop", "delogo", "blur"], default="crop", help="Removal method")
    parser.add_argument("--box", nargs=4, type=int, help="Custom box: x y w h for delogo/blur")

    args = parser.parse_args()
    remove_watermark(args.input, args.output, args.method, args.box)
