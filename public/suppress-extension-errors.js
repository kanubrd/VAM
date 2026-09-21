// Suppress third-party browser extension errors (e.g. Bitdefender TrafficLight / bis_skin_checked) from triggering Next.js dev overlay
(function() {
  if (typeof window === 'undefined') return;

  function shouldSuppress(args) {
    if (!args) return false;
    for (var i = 0; i < args.length; i++) {
      var item = args[i];
      var str = '';
      if (typeof item === 'string') {
        str = item;
      } else if (item && typeof item === 'object') {
        str = (item.message || '') + ' ' + (item.stack || '') + ' ' + (item.componentStack || '') + ' ' + (item.description || '');
      }
      if (
        str.indexOf('bis_skin_checked') !== -1 ||
        str.indexOf('chrome-extension:') !== -1 ||
        str.indexOf('moz-extension:') !== -1 ||
        str.indexOf('M_ID') !== -1 ||
        str.indexOf('TrafficLight') !== -1 ||
        str.indexOf('200.js') !== -1
      ) {
        return true;
      }
    }
    return false;
  }

  // Intercept console.error with getter/setter so dev overlays (Next.js Turbopack) cannot bypass it
  var activeConsoleError = console.error;
  try {
    Object.defineProperty(console, 'error', {
      configurable: true,
      enumerable: true,
      get: function() {
        return function() {
          if (shouldSuppress(arguments)) return;
          return activeConsoleError.apply(console, arguments);
        };
      },
      set: function(fn) {
        activeConsoleError = fn;
      }
    });
  } catch(e) {
    console.error = function() {
      if (shouldSuppress(arguments)) return;
      return activeConsoleError.apply(console, arguments);
    };
  }

  // Intercept window.onerror
  var origOnError = window.onerror;
  window.onerror = function(msg, url, line, col, error) {
    if (shouldSuppress([msg, url, error])) {
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
    if (type === 'error' || type === 'unhandledrejection') {
      var wrapped = function(e) {
        var toCheck = [e && e.message, e && e.filename, e && e.error, e && e.reason];
        if (shouldSuppress(toCheck)) {
          if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
          if (typeof e.preventDefault === 'function') e.preventDefault();
          return;
        }
        return listener.apply(this, arguments);
      };
      return origAddEventListener.call(this, type, wrapped, options);
    }
    return origAddEventListener.apply(this, arguments);
  };

  // Auto-dismiss any Next.js error overlay that is caused by browser extensions or bis_skin_checked
  function dismissExtensionOverlays() {
    var portals = document.querySelectorAll('nextjs-portal');
    for (var i = 0; i < portals.length; i++) {
      var portal = portals[i];
      var shadow = portal.shadowRoot;
      if (shadow) {
        var text = shadow.textContent || '';
        if (
          text.indexOf('bis_skin_checked') !== -1 ||
          text.indexOf('chrome-extension:') !== -1 ||
          text.indexOf('moz-extension:') !== -1 ||
          text.indexOf('M_ID') !== -1 ||
          text.indexOf('TrafficLight') !== -1 ||
          text.indexOf('200.js') !== -1
        ) {
          portal.style.display = 'none';
        }
      }
    }
  }

  if (typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function() {
      dismissExtensionOverlays();
    });

    var targetNode = document.documentElement || document.body;
    if (targetNode) {
      observer.observe(targetNode, { childList: true, subtree: true });
      dismissExtensionOverlays();
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        var el = document.documentElement || document.body;
        if (el) {
          observer.observe(el, { childList: true, subtree: true });
          dismissExtensionOverlays();
        }
      });
    }
  }
})();
