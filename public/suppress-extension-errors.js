// Suppress third-party browser extension errors (e.g. Bitdefender TrafficLight) from triggering Next.js dev overlay
(function() {
  if (typeof window === 'undefined') return;

  function isExtError(err, filename, message) {
    if (filename && (filename.indexOf('chrome-extension:') !== -1 || filename.indexOf('moz-extension:') !== -1)) return true;
    var str = (message || '') + ' ' + ((err && (err.stack || err.message)) || '');
    return str.indexOf('chrome-extension:') !== -1 || str.indexOf('moz-extension:') !== -1 || str.indexOf('M_ID') !== -1;
  }

  // Intercept window.onerror
  var origOnError = window.onerror;
  window.onerror = function(msg, url, line, col, error) {
    if (isExtError(error, url, msg)) {
      return true; // suppresses the error
    }
    if (typeof origOnError === 'function') {
      return origOnError.apply(this, arguments);
    }
    return false;
  };

  // Intercept addEventListener so Next.js's error listener filters out extension errors
  var origAddEventListener = window.addEventListener;
  window.addEventListener = function(type, listener, options) {
    if (type === 'error') {
      var wrapped = function(e) {
        if (e && isExtError(e.error, e.filename, e.message)) {
          if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
          if (typeof e.preventDefault === 'function') e.preventDefault();
          return;
        }
        return listener.apply(this, arguments);
      };
      return origAddEventListener.call(this, type, wrapped, options);
    }
    if (type === 'unhandledrejection') {
      var wrappedRejection = function(e) {
        if (e && isExtError(e.reason, '', e.reason && e.reason.message)) {
          if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
          if (typeof e.preventDefault === 'function') e.preventDefault();
          return;
        }
        return listener.apply(this, arguments);
      };
      return origAddEventListener.call(this, type, wrappedRejection, options);
    }
    return origAddEventListener.apply(this, arguments);
  };

  // Auto-dismiss any Next.js error overlay that is caused by browser extensions
  function dismissExtensionOverlays() {
    var portals = document.querySelectorAll('nextjs-portal');
    for (var i = 0; i < portals.length; i++) {
      var portal = portals[i];
      var shadow = portal.shadowRoot;
      if (shadow) {
        var text = shadow.textContent || '';
        if (text.indexOf('chrome-extension:') !== -1 || text.indexOf('moz-extension:') !== -1 || text.indexOf('M_ID') !== -1 || text.indexOf('200.js') !== -1) {
          portal.style.display = 'none';
        }
      }
    }
  }

  if (typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function() {
      dismissExtensionOverlays();
    });

    var startObserving = function() {
      if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
        dismissExtensionOverlays();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startObserving);
    } else {
      startObserving();
    }
  }

  // Also intercept console.error to silence extension noise
  var origConsoleError = console.error;
  console.error = function() {
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (typeof arg === 'string' && (arg.indexOf('chrome-extension:') !== -1 || arg.indexOf('M_ID') !== -1 || arg.indexOf('bis_skin_checked') !== -1)) {
        return;
      }
      if (arg && typeof arg === 'object' && isExtError(arg, '', arg.message)) {
        return;
      }
    }
    return origConsoleError.apply(console, arguments);
  };
})();
