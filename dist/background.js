var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

createCommonjsModule(function (module, exports) {
(function (global, factory) {
  {
    factory(module);
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function (module) {

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const CORE_ADDON_ID = "rally-core@mozilla.org";
const SIGNUP_URL = "https://mozilla-rally.github.io/core-addon/";

class Rally {
  /**
   * Initialize the Rally library.
   *
   * @param {String} keyId
   *        The id of the key used to encrypt outgoing data.
   * @param {Object} key
   *        The JSON Web Key (JWK) used to encrypt the outgoing data.
   *        See the RFC 7517 https://tools.ietf.org/html/rfc7517
   *        for additional information. For example:
   *
   *        {
   *          "kty":"EC",
   *          "crv":"P-256",
   *          "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
   *          "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
   *          "kid":"Public key used in JWS spec Appendix A.3 example"
   *        }
   * @param {Boolean} enableDevMode
   *        Whether or not to initialize Rally.js in developer mode.
   *        In this mode we ignore problems when communicating with
   *        core add-on.
   */
  async initialize(keyId, key, enableDevMode) {
    console.debug("Rally.initialize");

    this._validateEncryptionKey(keyId, key);

    this._keyId = keyId;
    this._key = key;
    this._enableDevMode = Boolean(enableDevMode);

    let hasRally = await this._checkRallyCore().then(() => {
      console.debug("Rally.initialize - Found the Core Add-on.");
      return true;
    }).catch(async () => {
      // We did not find the Rally Core Add-on. But maybe we
      // are in developer mode. Do not trigger the sign-up flow
      // if that's the case.
      if (this._enableDevMode) {
        console.warn("Rally.initialize - Executing in developer mode.");
        return true;
      }

      // The Core Add-on was not found and we're not in developer
      // mode.
      await browser.tabs.create({ url: SIGNUP_URL });
      return false;
    });

    if (!hasRally) {
      throw new Error("Rally.initialize - Initialization failed.");
    }

    // Listen for incoming messages from the Core addon.
    browser.runtime.onMessageExternal.addListener(
      (m, s) => this._handleExternalMessage(m, s));

    // We went through the whole init process, it's now safe
    // to use the Rally public APIs.
    this._initialized = true;
  }

  /**
   * Check if the Core addon is installed.
   *
   * @returns {Promise} resolved if the core addon was found and
   *          communication was successful, rejected otherwise.
   */
  async _checkRallyCore() {
    try {
      const msg = {
        type: "core-check",
        data: {}
      };
      let response =
        await browser.runtime.sendMessage(CORE_ADDON_ID, msg, {});

      if (!response
          || response.type !== "core-check-response"
          || response.data.enrolled !== true) {
        throw new Error(`Rally._checkRallyCore - unexpected response returned ${response}`);
      }
    } catch (ex) {
      throw new Error("Rally._checkRallyCore - core addon not found");
    }
  }

  /**
   * Handles messages coming in from external addons.
   *
   * @param {Object} message
   *        The payload of the message.
   * @param {runtime.MessageSender} sender
   *        An object containing informations about who sent
   *        the message.
   * @returns {Promise} The response to the received message.
   *          It can be resolved with a value that is sent to the
   *          `sender`.
   */
  _handleExternalMessage(message, sender) {
    // We only expect messages coming from the core addon.
    if (sender.id != CORE_ADDON_ID) {
      return Promise.reject(
        new Error(`Rally._handleExternalMessage - unexpected sender ${sender.id}`));
    }

    switch (message.type) {
      case "uninstall":
        return browser.management.uninstallSelf({showConfirmDialog: false});
      default:
        return Promise.reject(
          new Error(`Rally._handleExternalMessage - unexpected message type ${message.type}`));
    }
  }

  /**
   * Validate the provided encryption keys.
   *
   * @param {String} keyId
   *        The id of the key used to encrypt outgoing data.
   * @param {Object} key
   *        The JSON Web Key (JWK) used to encrypt the outgoing data.
   *        See the RFC 7517 https://tools.ietf.org/html/rfc7517
   *        for additional information. For example:
   *
   *        {
   *          "kty":"EC",
   *          "crv":"P-256",
   *          "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
   *          "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
   *          "kid":"Public key used in JWS spec Appendix A.3 example"
   *        }
   *
   * @throws {Error} if either the key id or the JWK key object are
   *         invalid.
   */
  _validateEncryptionKey(keyId, key) {
    if (typeof keyId !== "string") {
      throw new Error(`Rally._validateEncryptionKey - Invalid encryption key id ${keyId}`);
    }

    if (typeof key !== "object") {
      throw new Error(`Rally._validateEncryptionKey - Invalid encryption key ${key}`);
    }
  }

  /**
   * Submit an encrypted ping through the Rally Core addon.
   *
   * @param {String} payloadType
   *        The type of the encrypted payload. This will define the
   *        `schemaName` of the ping.
   * @param {Object} payload
   *        A JSON-serializable payload to be sent with the ping.
   */
  async sendPing(payloadType, payload) {
    if (!this._initialized) {
      console.error("Rally.sendPing - Not initialzed, call `initialize()`");
      return;
    }

    // When in developer mode, dump the payload to the console.
    if (this._enableDevMode) {
      console.log(
        `Rally.sendPing - Developer mode. ${payloadType} will not be submitted`,
        payload
      );
      return;
    }

    // Wrap everything in a try block, as we don't really want
    // data collection to be the culprit of a bug hindering user
    // experience.
    try {
      // The unique identifier of the study can be used as the
      // namespace, in order to make sure data is routed to the
      // proper analysis sandbox.
      const studyName = browser.runtime.id;

      // This function may be mistakenly called while init has not
      // finished. Let's be safe and check for key validity again.
      this._validateEncryptionKey(this._keyId, this._key);

      const msg = {
        type: "telemetry-ping",
        data: {
          payloadType: payloadType,
          payload: payload,
          namespace: studyName,
          keyId: this._keyId,
          key: this._key
        }
      };
      await browser.runtime.sendMessage(CORE_ADDON_ID, msg, {});
    } catch (ex) {
      console.error(`Rally.sendPing - error while sending ${payloadType}`, ex);
    }
  }
}

/**
 * This module provides utilities for logging debugging events.
 * The module currently just outputs events with `console.debug`.
 * 
 * @module webScience.debugging
 */

/**
 * A function that outputs a message to `console.debug` in a consistent format.
 * @callback debuggingLogger
 * @param {string} message - The message to output to `console.debug`.
 */

/**
 * Create a debugging logger, a function that logs debugging events (as strings).
 * @param {string} moduleName - A name that uniquely identifies the module
 * generating the debugging events.
 * @returns {debuggingLogger} - A debugging logger.
 */
function getDebuggingLog(moduleName) {
    return ((text) => {
    });
}

/**
 * This module facilitates checking that required permissions are
 * provided in the WebExtensions manifest.
 * 
 * @module webScience.permissions
 */

/**
 * An object where keys are Content Security Policy directive names and values are arrays of directive values.
 * @typedef {Object} ContentSecurityPolicy
 * @example
 * {
 *   "script-src": [ "'self'", "www.example.com"],
 *   "object-src": [ 'self' ]
 * }
 */

/**
 * The Content Security Policy directives specified in the Content Security Policy Level 3 Working Draft.
 * @constant {Set<string>}
 * @private
 */
const contentSecurityPolicyDirectives = new Set([ "child-src", "connect-src", "default-src", "font-src", "frame-src", "img-src", "manifest-src", "media-src", "object-src", "prefetch-src", "script-src", "script-src-elem", "script-src-attr", "style-src", "style-src-attr", "worker-src" ]);

/**
 * The Content Security Policy fallback directives specified in the Content Security Policy Level 3 Working Draft.
 * Property names are directive names and property values are arrays of fallback directive names.
 * @constant {Object}
 * @private
 */
const contentSecurityPolicyDirectiveFallbacks = {
    "script-src-elem": [ "script-src-elem", "script-src", "default-src" ],
    "script-src-attr": [ "script-src-attr", "script-src", "default-src" ],
    "style-src-elem": [ "style-src-elem", "style-src", "default-src" ],
    "style-src-attr": [ "style-src-attr", "style-src", "default-src" ],
    "worker-src": [ "worker-src", "child-src", "script-src", "default-src" ],
    "connect-src": [ "connect-src", "default-src" ],
    "manifest-src": [ "manifest-src", "default-src" ],
    "prefetch-src": [ "prefetch-src", "default-src" ],
    "object-src": [ "object-src", "default-src" ],
    "frame-src": [ "frame-src", "child-src", "default-src" ],
    "media-src": [ "media-src", "default-src" ],
    "font-src": [ "font-src", "default-src" ],
    "img-src": [ "img-src", "default-src" ]
};

/**
 * Parses a Content Security Policy from a string. We do not validate the manifest Content Security Policy because
 * the browser validates it.
 * @param {string} contentSecurityPolicyString - The input Content Security Policy string.
 * @returns {ContentSecurityPolicy} The parsed Content Security Policy.
 * @private
 */
function parseContentSecurityPolicy(contentSecurityPolicyString) {
    const parsedContentSecurityPolicy = {};
    const directiveNameAndValueStrings = contentSecurityPolicyString.split(/;(?: )*/);
    for(const directiveNameAndValueString of directiveNameAndValueStrings) {
        const directiveNameAndValueTokens = directiveNameAndValueString.split(/(?: )+/);
        if(directiveNameAndValueTokens.length > 0) {
            const directiveName = directiveNameAndValueTokens[0];
            const directiveValues = directiveNameAndValueTokens.slice(1);
            if(contentSecurityPolicyDirectives.has(directiveName)) {
                parsedContentSecurityPolicy[directiveName] = directiveValues;
            }
        }
    }
    return parsedContentSecurityPolicy;
}

/**
 * Check that a directive is provided in a Content Security Policy.
 * @param {*} directiveName - The name of the directive to check.
 * @param {*} directiveValue - The value of the directive to check.
 * @param {*} contentSecurityPolicy - The Content Security Policy to check the directive against.
 * @param {boolean} [checkFallbackDirectives=true] - Whether to check the fallback directives for the specified directive.
 * @private
 */
function checkContentSecurityPolicyDirective(directiveName, directiveValue, contentSecurityPolicy, checkFallbackDirectives = true) {
    if(directiveName in contentSecurityPolicy) {
        if(contentSecurityPolicy[directiveName].includes(directiveValue)) {
            return true;
        }
        return false;
    }
    if(checkFallbackDirectives && directiveName in contentSecurityPolicyDirectiveFallbacks) {
        for(const fallbackDirectiveName of contentSecurityPolicyDirectiveFallbacks[directiveName]) {
            if(fallbackDirectiveName in contentSecurityPolicy) {
                if(contentSecurityPolicy[fallbackDirectiveName].includes(directiveValue)) {
                    return true;
                }
                return false;
            }
        }
    }
    return false;
}

/**
 * Check that the WebExtensions manifest includes specified API and origin permissions.
 * @param {Object} options
 * @param {string[]} [options.requiredPermissions=[]] - WebExtensions API permissions that are required.
 * @param {string[]} [options.suggestedPermissions=[]] - WebExtensions API permissions that are recommended.
 * @param {string[]} [options.requiredOrigins=[]] - Origin permissions that are required.
 * @param {string[]} [options.suggestedOrigins=[]] - Origin permissions that are recommended.
 * @param {ContentSecurityPolicy} [options.requiredContentSecurityPolicy = {}] - Content Security Policy directives that are required.
 * @param {ContentSecurityPolicy} [options.suggestedContentSecurityPolicy = {}] - Content Security Policy directives that are recommended.
 * @param {string} [options.warn=true] - Whether to output any permissions errors on console.warn.
 * @param {string} [options.module="moduleNameNotProvided"] - The name of the module having its permissions checked.
 * @returns {boolean} Whether the permissions check passed.
 */
async function check({
    requiredPermissions = [],
    requiredOrigins = [],
    suggestedPermissions = [],
    suggestedOrigins = [],
    requiredContentSecurityPolicy = {},
    suggestedContentSecurityPolicy = {},
    warn = true,
    module = "moduleNameNotProvided"
}) {
    // If this function is called in an environment other than a background script (e.g., a content script),
    // that very likely means the call was left in as a possible side effect during bundling when we wanted
    // it to be tree shaken out. If that's the case, just return true.
    if(!("permissions" in browser)) {
        return true;
    }

    let passed = true;

    // API permissions
    if(requiredPermissions.length > 0) {
        const requiredPermissionsCheck = await browser.permissions.contains({ permissions: requiredPermissions });
        passed = passed && requiredPermissionsCheck;
        if(!requiredPermissionsCheck && warn) {
            console.warn(`${module} is missing required API permissions: ${JSON.stringify(requiredPermissions)}`);
        }
    }
    if(suggestedPermissions.length > 0) {
        const suggestedPermissionsCheck = await browser.permissions.contains({ permissions: suggestedPermissions });
        if(!suggestedPermissionsCheck && warn) {
            console.warn(`${module} is missing recommended API permissions: ${JSON.stringify(suggestedPermissions)}`);
        }
    }

    // Origin permissions
    if(requiredOrigins.length > 0) {
        const requiredOriginsCheck = await browser.permissions.contains({ origins: requiredOrigins });
        passed = passed && requiredOriginsCheck;
        if(!requiredOriginsCheck && warn) {
            console.warn(`${module} is missing required origin permissions: ${JSON.stringify(requiredOrigins)}`);
        }
    }
    if(suggestedOrigins.length > 0) {
        const suggestedOriginsCheck = await browser.permissions.contains({ origins: suggestedOrigins });
        if(!suggestedOriginsCheck && warn) {
            console.warn(`${module} is missing recommended origin permissions: ${JSON.stringify(suggestedOrigins)}`);
        }
    }

    // Content Security Policy directives
    let manifestContentSecurityPolicyString = "";
    const manifest = browser.runtime.getManifest();
    if("content_security_policy" in manifest) {
        manifestContentSecurityPolicyString = manifest["content_security_policy"];
    }
    const manifestContentSecurityPolicy = parseContentSecurityPolicy(manifestContentSecurityPolicyString);
    let passedRequiredContentSecurityPolicy = true;
    for(const directiveName of Object.keys(requiredContentSecurityPolicy)) {
        for(const directiveValue of requiredContentSecurityPolicy[directiveName]) {
            passedRequiredContentSecurityPolicy = passedRequiredContentSecurityPolicy && checkContentSecurityPolicyDirective(directiveName, directiveValue, manifestContentSecurityPolicy);
        }
    }
    passed = passed && passedRequiredContentSecurityPolicy;
    if(!passedRequiredContentSecurityPolicy && warn) {
        console.warn(`${module} is missing required Content Security Policy directives: ${JSON.stringify(requiredContentSecurityPolicy)}`);
    }
    let passedSuggestedContentSecurityPolicy = true;
    for(const directiveName of Object.keys(suggestedContentSecurityPolicy)) {
        for(const directiveValue of suggestedContentSecurityPolicy[directiveName]) {
            passedSuggestedContentSecurityPolicy = passedSuggestedContentSecurityPolicy && checkContentSecurityPolicyDirective(directiveName, directiveValue, manifestContentSecurityPolicy);
        }
    }
    passed = passed && passedSuggestedContentSecurityPolicy;
    if(!passedSuggestedContentSecurityPolicy && warn) {
        console.warn(`${module} is missing recommended Content Security Policy directives: ${JSON.stringify(suggestedContentSecurityPolicy)}`);
    }

    return passed;
}

/**
 * This module provides convenient storage abstractions on top of extension local
 * storage. These abstractions minimize code duplication and opportunities for
 * error, and allow us to switch the underlying storage implementation in future.
 *
 * @module webScience.storage
 */

check({
    module: "webScience.storage",
    requiredPermissions: [ "storage" ],
    suggestedPermissions: [ "unlimitedStorage" ]
});

/**
 * Create a key-value storage area.
 * @param {string} storageAreaName - A name that uniquely identifies the storage area.
 * @returns {KeyValueStorage} The new KeyValueStorage object.
 * @example const exampleStorage = createKeyValueStorage("exampleName"));
 */
function createKeyValueStorage(storageAreaName) {
    return new KeyValueStorage(storageAreaName);
}

/**
 * Class for a key-value storage area, where the key is a string and the value can have
 * any of a number of basic types.
 */
class KeyValueStorage {
    /**
     * Create a key-value storage area. Storage is implemented with extension local storage.
     * @param {string} storageAreaName - A name that uniquely identifies the storage area.
     * @private
     */
    constructor(storageAreaName) {
        this.storageAreaName = storageAreaName;
        return this;
    }

    /**
     * Convert a key used in a storage area to a key in extension local storage. 
     * @param {string} key - The key used in the storage area.
     * @returns {string} A key in extension local storage.
     */
    keyToExtensionLocalStorageKey(key) {
        return `webScience.storage.keyValueStorage.${this.storageAreaName}.${key}`;
    } 

    /**
     * Get a value from storage.
     * @param {string} key - The key to use in the storage area.
     * @returns {*} The value in the storage area, or null if the value is not
     * in the storage area.
     */
    async get(key) {
        const storageResult = await browser.storage.local.get({ [this.keyToExtensionLocalStorageKey(key)]: null });
        return storageResult[this.keyToExtensionLocalStorageKey(key)];
    }

    /**
     * Set a value in storage.
     * @param {string} key - The key to use in the storage area.
     * @param {*} value - The value to store in the storage area for the key.
     */
    async set(key, value) {
        await browser.storage.local.set({ [this.keyToExtensionLocalStorageKey(key)]: value });
    }
}

/**
 * A callback function with no parameters.
 * @callback callbackWithoutParameters
 */

/**
 * A class that provides an event API similar to WebExtensions `events.Event` objects.
 * Use the `createEvent` function to create an Event object.
 * @template EventCallbackFunction
 * @template EventOptions
 */
class Event {
    /**
     * Creates an event instance similar to WebExtensions `events.Event` objects.
     * @param {Object} [options] - A set of options for the event.
     * @param {name} [options.name] - The name of the event.
     * @param {addListenerCallback} [options.addListenerCallback] - A function that is
     * called when a listener function is added.
     * @param {removeListenerCallback} [options.removeListenerCallback] - A function
     * that is called when a listener function is removed.
     * @param {notifyListenersCallback} [options.notifyListenersCallback] - A function
     * that is called before a listener is notified and can filter the notification.
     * @private
     */
    constructor({
        name = null,
        addListenerCallback = null,
        removeListenerCallback = null,
        notifyListenersCallback = null
    } = {
        name: null,
        addListenerCallback: null,
        removeListenerCallback: null,
        notifyListenersCallback: null
    }) {
        this.name = name;
        this.addListenerCallback = addListenerCallback;
        this.removeListenerCallback = removeListenerCallback;
        this.notifyListenersCallback = notifyListenersCallback;
        this.listeners = new Map();
    }

    /**
     * A callback function that is called immediately before a new listener function is added.
     * @callback addListenerCallback
     * @param {EventCallbackFunction} listener - The new listener function.
     * @param {EventOptions} options - The options for the new listener function.
     */

    /**
     * A function that adds an event listener, with optional parameters. If the
     * listener has previously been added for the event, the listener's options
     * (if any) will be updated.
     * @param {EventCallbackFunction} listener - The function to call when the event fires.
     * @param {EventOptions} options - Options for when the listener should be called.
     * The supported option(s) depend on the event type.
     */
    addListener(listener, options) {
        if(this.addListenerCallback !== null) {
            this.addListenerCallback(listener, options);
        }
        this.listeners.set(listener, options);
        // If the event has a name, annotate the listener with the name
        if(typeof this.name === "string") {
            listener.webScienceEventName = this.name;
        }
    }

    /**
     * A callback function that is called immediately after a listener function is removed.
     * @callback removeListenerCallback
     * @param {EventCallbackFunction} listener - The listener function to remove.
     * @param {EventOptions} options - The options that the listener was added with.
     */

    /**
     * A function that removes an event listener.
     * @param {EventCallbackFunction} listener - The listener function to remove.
     */
    removeListener(listener) {
        if(this.removeListenerCallback !== null) {
            this.removeListenerCallback(listener, this.listeners.get(listener));
        }
        this.listeners.delete(listener);
    }

    /**
     * A function that checks whether a particular event listener has been added.
     * @param {EventCallbackFunction} listener - The listener function to check.
     * @returns {boolean} Whether the listener function has been added.
     */
    hasListener(listener) {
        return this.listeners.has(listener);
    }

    /**
     * Checks whether there are any listeners registered.
     * @returns {boolean} Whether there are any listeners
     */
    hasAnyListeners() {
        return this.listeners.size > 0;
    }

    /**
     * A callback function that is called when a listener function may be notified.
     * @callback notifyListenersCallback
     * @param {EventCallbackFunction} listener - The listener function that may be called.
     * @param {Array} listenerArguments - The arguments that would be passed to the listener
     * function.
     * @param {EventOptions} options - The options that the listener was added with.
     * @returns {boolean} Whether to call the listener function.
     */

    /**
     * Notify the listener functions for the event.
     * @param {Array} [listenerArguments=[]] - The arguments that will be passed to listener
     * functions.
     */
    notifyListeners(listenerArguments = []) {
        this.listeners.forEach((options, listener) => {
            try {
                if((this.notifyListenersCallback === null) || this.notifyListenersCallback(listener, listenerArguments, options))
                    listener.apply(null, listenerArguments);
            }
            catch(error) {
            }
        });
    }
}

/**
 * An extension of the Event class that permits only one listener at a time.
 * @template EventCallbackFunction
 * @template EventOptions
 * @extends {Event<EventCallbackFunction, EventOptions>}
 * @private
 */
class EventSingleton extends Event {
    /**
     * A function that adds an event listener, with optional parameters. If the
     * listener has previously been added for the event, the listener's options
     * (if any) will be updated.
     * @param {EventCallbackFunction} listener - The function to call when the event fires.
     * @param {EventOptions} options - Options for when the listener should be called.
     * The supported option(s) depend on the event type.
     * @throws {Error} This function throws an Error if there is already a listener for
     * the event.
     */
    addListener(listener, options) {
        if(this.listeners.size > 0)
            throw new Error("Error: cannot add more than one listener to EventSingleton event.");
        super.addListener(listener, options);
    }
}

/**
 * Create a new Event object that implements WebExtensions event syntax, with the
 * provided options.
 * @param {Object} [options] - The options for the event.
 * @param {string} name - The name of the event.
 * @param {addListenerCallback} [options.addListenerCallback] - A function that is
 * called when a listener function is added.
 * @param {removeListenerCallback} [options.removeListenerCallback] - A function
 * that is called when a listener function is removed.
 * @param {notifyListenersCallback} [options.notifyListenersCallback] - A function
 * that is called before a listener is notified and can filter the notification.
 * @param {boolean} [options.singleton = false] - Whether to allow only one listener
 * for the event.
 * @returns {Event} - The created Event object.
 */
 function createEvent({
    name = null,
    addListenerCallback = null,
    removeListenerCallback = null,
    notifyListenersCallback = null,
    singleton = false
} = {
    name: null,
    addListenerCallback: null,
    removeListenerCallback: null,
    notifyListenersCallback: null,
    singleton: false
}) {
    if(singleton) {
        return new EventSingleton({
            name,
            addListenerCallback,
            removeListenerCallback,
            notifyListenersCallback
        });
    }
    return new Event({
        name,
        addListenerCallback,
        removeListenerCallback,
        notifyListenersCallback
    });
}

/**
 * This module provides functionality for passing messages between the
 * background page and content script environments. Messages between the
 * environments are easily malformed, and minor errors in message handlers
 * can have cascading effects. These problems can be quite difficult to debug.
 * This module addresses these issue by providing a simple message type and
 * type checking system on top of `browser.runtime.onMessage` and
 * `browser.tabs.sendMessage`.
 * 
 * # Messages
 * A message, for purposes of this module, must be an object and must have a
 * type property with a string value.
 * 
 * # Schemas
 * A schema, for purposes of this module, must be an object. Each property in
 * the schema object is a property that is required in a corresponding message
 * object. Each value in the schema object is a string that must match the
 * `typeof` value for that property in a corresponding message.
 * 
 * @module webScience.messaging
 */

/**
 * @constant {debugging.debuggingLogger}
 * @private
 */
const debugLog = getDebuggingLog();

/**
 * A Map that stores message listeners. The keys are message types and the values
 * are Sets of message listeners.
 * @private
 * @constant {Map<string,Set<Function>>}
 */
const messageRouter = new Map();

/**
 * A Map that stores message schemas. The keys are message types and the values
 * are schemas.
 * @private
 * @constant {Map<string,Object>}
 */
const messageSchemas = new Map();

/**
 * Whether the module's `browser.runtime.onMessage` listener has been registered.
 * @private
 * @type {boolean}
 * @default
 */
let initialized = false;

/**
 * Validates that a message is an object with a type string.
 * @param {Object} message - The message.
 * @returns {boolean} Whether the message is an object with a type string.
 * @private
 */
function validateMessageObject(message) {
    // If the message does not have the right type, fail validation.
    if ((typeof message !== "object") || (message === null)) {
        return false;
    }

    // If there is no type string, fail validation.
    if(!("type" in message) || (typeof message.type !== "string")) {
        debugLog(`Unable to validate message object with missing type string: ${JSON.stringify(message)}`);
        return false;
    }

    return true;
}

/**
 * Validates a message against a registered schema. Assumes that the message is an object
 * with a type string. If you cannot guarantee that, call `validateMessageObject` first.
 * @param {Object} message - The message, which must be an object that matches the properties
 * and types specified in the schema.
 * @param {Object} [messageSchema] - The schema to use for validation. If no schema is
 * specified, this function attempts to retrieve the registered schema for the message type.
 * @returns {boolean} Whether the message successfully validated against the schema. Returns
 * `false` if there is a schema mismatch or if there is no schema registered for the message
 * type.
 * @private
 */
function validateMessageAgainstSchema(message, messageSchema)
{
    // If the caller doesn't specify a message schema, attempt to retrieve the registered schema.
    if(messageSchema === undefined) {
        messageSchema = messageSchemas.get(message.type);
        if(messageSchema === undefined) {
            debugLog(`No schema for message with type: ${message.type}`);
            return false;
        }
    }

    // Check the message against the schema.
    for(const field in messageSchema) {
        if (!(field in message) || (typeof message[field] !== messageSchema[field])) {
            debugLog(`Mismatch between message and schema: ${JSON.stringify(message)}`);
            return false;
        }
    }
    return true;
}

/**
 * A listener for `browser.runtime.onMessage` that routes messages to the right
 * listener(s) based on message type. See the documentation for `browser.runtime.onMessage`
 * for detail on the parameters.
 * @returns {Promise} - An optional response to the message.
 * @private
 */
function browserRuntimeListener(message, sender, sendResponse) {
    let messageListeners, messageSchema, browserRuntimeReturnValue;

    // If the message is not in an expected format, ignore it.
    if(!validateMessageObject(message)) {
        debugLog(`browser.runtime message with unexpected format: ${JSON.stringify(message)}`);
        return;
    }

    // If the message does not have at least one registered listener, ignore it.
    if ((messageListeners = messageRouter.get(message.type)) === undefined) {
        debugLog(`browser.runtime message with no listener for message type: ${JSON.stringify(message)}`);
        return;
    }

    // If there is a schema registered for this message type, check the message against the schema.
    if(((messageSchema = messageSchemas.get(message.type)) !== undefined)
         && !validateMessageAgainstSchema(message, messageSchema)) {
             debugLog(`browser.runtime message failed schema validation: ${JSON.stringify(message)}`);
        return;
    }

    for (const messageListener of messageListeners) {
        const messageListenerReturnValue = messageListener(message, sender, sendResponse);
        if ((messageListenerReturnValue !== undefined) && (browserRuntimeReturnValue !== undefined))
            debugLog(`Multiple listener return values for message type: ${message.type}`);
        browserRuntimeReturnValue = messageListenerReturnValue;
    }
    
    return browserRuntimeReturnValue;
}


/**
 * @callback onMessageListener
 * @param {Object} message - The received message with a matching type string.
 */

/**
 * @callback OnMessageAddListener
 * @param {onMessageListener} listener - The listener to add.
 * @param {Object} options - Options for the listener.
 * @param {string} options.type - A unique string that identifies the message type.
 * @param {object} [options.schema] - A schema for validating messages with this type.
 */

/**
 * @callback OnMessageRemoveListener
 * @param {onMessageListener} listener - The listener to remove.
 */

/**
 * @callback OnMessageHasListener
 * @param {onMessageListener} listener - The listener to check.
 * @returns {boolean} Whether the listener has been added for the event.
 */

/**
 * @callback OnMessageHasAnyListeners
 * @returns {boolean} Whether the event has any listeners.
 */

/**
 * @typedef {Object} OnMessageEvent
 * @property {OnMessageAddListener} addListener - Add a listener for messages.
 * @property {OnMessageRemoveListener} removeListener - Remove a listener for messages.
 * @property {OnMessageHasListener} hasListener - Whether a specified listener has been added.
 * @property {OnMessageHasAnyListeners} hasAnyListeners - Whether the event has any listeners.
 */

/**
 * An event that fires when the background script environment receives a message, usually from
 * a content script.
 * @constant {OnMessageEvent}
 */
const onMessage = createEvent({
    name: "webScience.messaging.onMessage",
    addListenerCallback: (listener, options) => {
        registerListener(options.type, listener, "schema" in options ? options.schema : undefined);
    },
    removeListenerCallback: (listener, options) => {
        unregisterListener(options.type, listener);
    },
    notifyListenersCallback: () => { return false; }
});

/**
 * Registers a message listener.
 * @param {string} messageType - The type of message that triggers the listener function.
 * @param {Function} messageListener - The listener function, which receives the same
 * parameters as if it had been called by `browser.runtime.onMessage`, and that can
 * return the same values as a listener to `browser.runtime.onMessage`.
 * @param {Object} [messageSchema] - An optional schema to register for the message type.
 * @private
 */
function registerListener(messageType, messageListener, messageSchema) {
    if (!initialized) {
        initialized = true;
        browser.runtime.onMessage.addListener(browserRuntimeListener);
    }

    let messageListeners = messageRouter.get(messageType);
    if (messageListeners === undefined) {
        messageListeners = new Set();
        messageRouter.set(messageType, messageListeners);
    }
    messageListeners.add(messageListener);

    if(messageSchema !== undefined) {
        registerSchema(messageType, messageSchema);
    }
}

/**
 * Unregisters a message listener.
 * @param {string} messageType - The type of message that triggers the listener function.
 * @param {Function} messageListener - The listener function.
 * @private
 */
function unregisterListener(messageType, messageListener) {
    const messageListeners = messageRouter.get(messageType);
    if(messageListeners !== undefined) {
        messageListeners.delete(messageListener);
        if(messageListeners.size === 0) {
            messageRouter.delete(messageType);
        }
    }
}

/**
 * Registers a schema for a type of message.
 * @param {string} messageType - The type of message that must follow the schema.
 * @param {Object} messageSchema - An object where each field has a value that is
 * a built-in type string.
 */
function registerSchema(messageType, messageSchema) {
    // Check whether the schema has already been registered
    if(messageSchemas.has(messageType)) {
        return;
    }
    messageSchemas.set(messageType, messageSchema);
}

/**
 * Sends a message to a tab after checking the message against the registered
 * schema for the message type. Equivalent to calling `browser.tabs.sendMessage`
 * with a `catch` handler after validating the message against the schema.
 * @param {number} tabId - The ID of the tab that should receive the message.
 * @param {Object} message - The contents of the message.
 * @returns {Promise} - The same return value as `browser.tabs.sendMessage`,
 * or a Promise that resolves to false if there was an errror sending the message.
 */
function sendMessageToTab(tabId, message) {
    // Validate the outbound message against the schema
    if(!validateMessageObject(message) || !validateMessageAgainstSchema(message)) {
        debugLog(`Attempted to send message that fails validation: ${JSON.stringify(message)}`);
        return new Promise((resolve) => { resolve(false); });
    }
    return browser.tabs.sendMessage(tabId, message).catch((reason) => {
        debugLog(`Unable to send message to tab: ${JSON.stringify(message)}`);
        return false;
    });
}

/**
 * This module enables adding browser idle state listeners with
 * varying detection intervals. The module is needed because the
 * WebExtensions `idle` API currently only supports one detection
 * interval per extension.
 * 
 * The implementation of this module combines the WebExtensions `idle`
 * API and `setTimeout`. It configures the `idle` API to use the
 * minimum idle detection interval with `idle.setDetectionInterval()`,
 * adds a listener for the `idle.onStateChanged` event, and then uses
 * `setTimeout` after the browser goes idle to notify idle state
 * listeners with detection intervals greater than the minimum. If there
 * are any pending idle notification timeouts when the browser goes
 * active, those timeouts are cleared.
 * 
 * Some implementation quirks to be aware of for use and future
 * development:
 * 
 *   * This module depends on configuring the detection interval
 *     for the `idle` API to its minimum value. Any subsequent changes to
 *     the idle state detection interval in the `idle` API will result in
 *     unpredictable behavior.
 * 
 *   * Idle state events generated by this module are not guaranteed to
 *     reflect idle state transitions (e.g., a listener might receive
 *     `"active"` followed by `"active"`). We might want to implement this
 *     guarantee eventually.
 * 
 *   * Because the browser idle state resets with each browser session,
 *     it is not a problem that timeouts do not persist between browser
 *     sessions.
 * 
 *   * The module does not directly interact with the Firefox
 *     [`nsIdleService`](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIIdleService),
 *     even though it supports varying idle state detection intervals, in
 *     order to minimize privileged extension code.
 * 
 * @module webScience.idle
 */

check({
    module: "webScience.idle",
    requiredPermissions: [ "idle" ]
});

/**
 * The minimum idle state detection interval (in seconds) supported by
 * the `idle` API.
 * @private
 * @constant {number}
 */
const minimumIdleStateDetectionIntervalInSeconds = 15;

/**
 * Whether we have configured  configured the idle state detection
 * interval, cached the idle state, and added the idle state
 * listener.
 * @private
 * @type {boolean}
 */
let initialized$1 = false;

/**
 * An estimate of the time (in milliseconds since the epoch) when the
 * browser last entered an idle state. Generated by subtracting the
 * idle state detection interval (converted to milliseconds) from the
 * time the browser last fired an idle state notification.
 * @private
 * @type {number}
 */
let lastIdleTime = -1;

/**
 * A cached copy of the browser's current idle state. This caching enables
 * synchronous checking of the current idle state.
 * @private
 * @type {string}
 */
let currentIdleState = "active";

/**
 * A Map that stores browser idle state listeners. The keys are
 * detection intervals in seconds and the values are Sets of
 * browser idle state listeners.
 * @private
 * @constant {Map<number,Set<function>>}
 */
const idleStateListeners = new Map();

/**
 * A Map that stores browser idle state timeouts. The keys are
 * detection intervals in seconds and the values are `timeoutID`
 * values from `setTimeout()`.
 * @private
 * @constant {Map<number,number>}
 */
const idleStateTimeouts = new Map();

/**
 * Configure the idle state detection interval, cache the idle state,
 * and add the idle state listener.
 * @private
 */
async function initialize() {
    if(initialized$1)
        return;
    initialized$1 = true;
    browser.idle.setDetectionInterval(minimumIdleStateDetectionIntervalInSeconds);
    currentIdleState = await browser.idle.queryState(minimumIdleStateDetectionIntervalInSeconds);
    if(currentIdleState === "idle")
        lastIdleTime = Date.now() - (minimumIdleStateDetectionIntervalInSeconds * 1000);
    browser.idle.onStateChanged.addListener(idleOnStateChangedListener);
}

/**
 * Determine whether the browser has been idle for a specified time.
 * This function is synchronous, unlike `idle.queryState`. Note that,
 * if an idle state listener has not been added, this function
 * will always return the default value of active state.
 * @param {number} detectionIntervalInSeconds - The detection interval
 * to use.
 * @returns {string} - The idle state, either "idle" or "active".
 */
function queryState(detectionIntervalInSeconds) {
    if(currentIdleState !== "idle")
        return currentIdleState;

    if(Date.now() >= (lastIdleTime + (detectionIntervalInSeconds * 1000)))
        return "idle";

    return "active";    
}

/**
 * A listener for `idle.onStateChanged` that supports notifying
 * idle state listeners with varying detection intervals.
 * @param {browser.idle.IdleState} - The new browser idle state.
 * @private
 */
function idleOnStateChangedListener(newState) {
    currentIdleState = newState;

    // If the browser idle state transitions to non-idle...
    if(newState !== "idle") {
        // Cancel any pending notification timeouts and forget the timeout IDs
        for(const idleStateTimeoutID of idleStateTimeouts.values())
            clearTimeout(idleStateTimeoutID);
        idleStateTimeouts.clear();

        // Notify all the idle state listeners
        for(const idleStateListenerSet of idleStateListeners.values())
            for(const idleStateListener of idleStateListenerSet)
                idleStateListener(newState.repeat(1));
        return;
    }

    // If the browser idle state transitions to idle...

    // Remember an estimate of when the browser last went into idle state
    lastIdleTime = Date.now() - (minimumIdleStateDetectionIntervalInSeconds * 1000);

    // Set timeouts for all the idle state listeners
    for(const [detectionIntervalInSeconds, idleStateListenersWithDetectionInterval] of idleStateListeners)
        scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds);
}

/**
 * Schedule a timeout for a set of idle state listeners.
 * @param {Set<idleStateChangeListener>} idleStateListenersWithDetectionInterval - The set of idle state listeners.
 * @param {number} detectionIntervalInSeconds - The idle state detection interval (in seconds) for this set of listeners.
 * @returns {number} The timeout ID for the scheduled timeout.
 * @private
 */
function scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds) {
    // Determine how long to delay before firing the listeners
    // If the delay is negative, set it to 0 (i.e., fire as soon as possible)
    const delayTime = Math.max(lastIdleTime + (detectionIntervalInSeconds * 1000) - Date.now(), 0);
    const timeoutId = setTimeout(function() {
        for(const idleStateListener of idleStateListenersWithDetectionInterval)
            idleStateListener("idle");
    }, delayTime);
    idleStateTimeouts.set(detectionIntervalInSeconds, timeoutId);
}

/**
 * @callback idleStateChangeListener
 * @param {string} idleState - The current idle state: "idle" or "active".
 */

/**
 * @callback IdleStateChangeAddListener
 * @param {idleStateChangeListener} listener - The listener to add.
 * @param {Object} options - Options for the listener.
 * @param {number} options.detectionInterval - The idle state detection interval
 * for the listener, in seconds.
 */

/**
 * @callback IdleStateChangeRemoveListener
 * @param {idleStateChangeListener} listener - The listener to remove.
 */

/**
 * @callback IdleStateChangeHasListener
 * @param {idleStateChangeListener} listener - The listener to check.
 * @returns {boolean} Whether the listener has been added for the event.
 */

/**
 * @callback IdleStateChangeHasAnyListeners
 * @returns {boolean} Whether the event has any listeners.
 */

/**
 * @typedef {Object} IdleStateChangeEvent
 * @property {IdleStateChangeAddListener} addListener - Add a listener for idle state changes.
 * @property {IdleStateChangeRemoveListener} removeListener - Remove a listener for idle state changes.
 * @property {IdleStateChangeHasListener} hasListener - Whether a specified listener has been added.
 * @property {IdleStateChangeHasAnyListeners} hasAnyListeners - Whether the event has any listeners.
 */

/**
 * An event that fires when the browser's idle state changes. This event supports multiple idle
 * detection intervals, unlike the WebExtensions idle.onStateChanged event.
 * @constant {IdleStateChangeEvent}
 */
const onStateChanged = createEvent({
    name: "webScience.idle.onStateChanged",
    addListenerCallback: (listener, options) => {
        addListener(listener, options.detectionInterval);
    },
    removeListenerCallback: (listener, options) => {
        removeListener(listener, options.detectionInterval);
    },
    notifyListenersCallback: () => { return false; }
});

/**
 * Add a listener function for browser idle state.
 * @param {idleStateChangeListener} idleStateListener - The listener function.
 * The function will receive the same `browser.idle.IdleState` parameter
 * as if it had subscribed to idle state events with
 * `browser.idle.onStateChanged.addListener`.
 * @param {number} detectionIntervalInSeconds - The detection
 * interval for firing the idle state listener. Note that this
 * time in measured in seconds because that is how the `idle`
 * API is implemented, even though most times in the library
 * are measured in milliseconds.
 * @private
 */
async function addListener(idleStateListener, detectionIntervalInSeconds) {
    await initialize();

    // If we already have at least one idle state listener with this
    // detection interval, add the new listener to the Set of listeners
    // and we're done
    let idleStateListenersWithDetectionInterval = idleStateListeners.get(detectionIntervalInSeconds);
    if(idleStateListenersWithDetectionInterval !== undefined) {
        idleStateListenersWithDetectionInterval.add(idleStateListener);
        return;
    }

    // Create a Set for listeners with this detection interval, including
    // this idle state listener
    idleStateListenersWithDetectionInterval = idleStateListeners.set(detectionIntervalInSeconds, (new Set()).add(idleStateListener));

    // If we're in idle state, and we have been in the state for less time
    // than the detection interval for this listener (i.e., the listener
    // should still receive a state change notification), schedule a
    // notification
    if((currentIdleState === "idle") && (Date.now() < (lastIdleTime + detectionIntervalInSeconds * 1000)))
        scheduleIdleStateTimeout(idleStateListenersWithDetectionInterval, detectionIntervalInSeconds);
}

/**
 * Remove a listener function for browser idle state.
 * @param {idleStateChangeListener} idleStateListener - The listener function.
 * @param {number} detectionIntervalInSeconds - The detection
 * interval for firing the idle state listener.
 * @private
 */
async function removeListener(idleStateListener, detectionIntervalInSeconds) {
    const idleStateListenersWithDetectionInterval = idleStateListeners.get(detectionIntervalInSeconds);
    if(idleStateListenersWithDetectionInterval !== undefined) {
        // Remove the listener
        idleStateListenersWithDetectionInterval.delete(idleStateListener);
        // If there are no other listeners with the same detection interval, remove the set of listeners
        // for the detection interval and clear the timeout (if there is one) for the interval
        if(idleStateListenersWithDetectionInterval.size === 0) {
            idleStateListeners.delete(detectionIntervalInSeconds);
            const idleStateTimeoutID = idleStateTimeouts.get(detectionIntervalInSeconds);
            if(idleStateTimeoutID !== undefined) {
                clearTimeout(idleStateTimeoutID);
                idleStateTimeouts.delete(detectionIntervalInSeconds);
            } 
        }
    }
}

/**
 * This module provides utilities for matching URLs against criteria.
 *
 * # Matching Criteria
 * The module supports two types of criteria:
 *   * Match Patterns (preferred) - a syntax used in the WebExtensions API for expressing possible URL matches.
 *     See: {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns}.
 *   * Domains - a simple list of domain names, which are converted into match patterns.
 * 
 * # Matching Output
 * The module supports three types of output for matching URLs:
 *   * Match Pattern Sets (preferred) - optimized objects that compare a URL against the criteria.
 *   * Regular Expressions - `RegExp` objects that compare a URL against the criteria.
 *   * Regular Expression Strings - strings expressing regular expressions for comparing a URL against the criteria.
 * 
 * # Implementation Notes
 * We use Rollup pure annotations (`@__PURE__` comments) because Rollup assumes that iterators might have side 
 * effects (including subtle cases of iteration like `Array.map` and `Array.join`). Without the annotations, Rollup
 * would mark arguments for many of this module's functions (which might be large string arrays) as tainted by side
 * effects and always include those arguments in bundled output. The pure annotations are associated with either
 * iteration functions or class instantiation to provide clarity about why they're needed.
 *
 * @see {@link https://github.com/rollup/rollup/issues/3127}
 * 
 * @module webScience.matching
 */

/**
 * A RegExp for validating WebExtensions match patterns, using the same regular expressions for manifest
 * validation as Firefox.
 * @see {@link https://searchfox.org/mozilla-central/source/toolkit/components/extensions/schemas/manifest.json}
 * @constant
 * @type {RegExp}
 * @private
 */
const matchPatternValidationRegExp = new RegExp("(^<all_urls>$)|(^(https?|wss?|file|ftp|\\*)://(\\*|\\*\\.[^*/]+|[^*/]+)/.*$)|(^file:///.*$)|(^resource://(\\*|\\*\\.[^*/]+|[^*/]+)/.*$|^about:|^data:)", "i");

/**
 * A Set of URL schemes permitted in WebExtensions match patterns.
 * @see {@link https://searchfox.org/mozilla-central/source/toolkit/components/extensions/MatchPattern.cpp}
 * @constant {Set<string>}
 * @private
 */
const permittedMatchPatternSchemes = new Set(["*", "http", "https", "ws", "wss", "file", "ftp", "data", "file"]);

/**
 * A Set of URL schemes that require a host locator (i.e., are followed by `://` rather than `:`).
 * @see {@link https://searchfox.org/mozilla-central/source/toolkit/components/extensions/MatchPattern.cpp}
 * @constant {Set<string>}
 * @private
 */
const hostLocatorMatchPatternSchemes = new Set(["*", "http", "https", "ws", "wss", "file", "ftp", "moz-extension", "chrome", "resource", "moz", "moz-icon", "moz-gio"]);

/**
 * An internal object that represents a parsed match pattern.
 * @typedef {Object} ParsedMatchPattern
 * @property {boolean} allUrls - Whether the match pattern is the special all URLs match pattern.
 * @property {string} scheme - The scheme for the match pattern. Must be one of: "http", "https", "ws",
 * wss", "file", "ftp", "data", "file", or "*". The special wildcard value "*" matches "http", "https",
 * "ws", or "wss".
 * @property {boolean} matchSubdomains - If this scheme involves a hostname, and the hostname is not the
 * special wildcard value, whether to match any subdomains of the domain.
 * @property {boolean} host - If this scheme involves a hostname, either the hostname for the match pattern
 * or the special wildcard value "*" that matches all domains.
 * @property {string} path - The path for the match pattern. The special wildcard value "/*" matches all
 * paths.
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns}
 * @private
 */

/**
 * Parses a match pattern string into an object that represents the match pattern. We use this internal,
 * intermediate representation to enable constructing efficient matching objects. The parsing logic is
 * nearly identical to the parsing logic in Firefox.
 * @throws {Error} Throws an error if the match pattern is not valid.
 * @param {string} matchPattern - The match pattern string.
 * @returns {ParsedMatchPattern} - The parsed match pattern.
 * @see {@link https://searchfox.org/mozilla-central/source/toolkit/components/extensions/MatchPattern.cpp}
 * @private
 */
function parseMatchPattern(matchPattern) {
    if(!matchPatternValidationRegExp.test(matchPattern))
        throw new Error(`Invalid match pattern, failed validation: ${matchPattern}`);

    const parsedMatchPattern = {
        allUrls: false,
        scheme: "",
        matchSubdomains: false,
        host: "",
        path: ""
    };

    let tail = matchPattern.repeat(1);

    if(matchPattern === "<all_urls>") {
        parsedMatchPattern.allUrls = true;
        return parsedMatchPattern;
    }

    // Parse the scheme
    let index = matchPattern.indexOf(":");
    if(index <= 0)
        throw new Error(`Invalid match pattern, missing : after scheme: ${matchPattern}`);
    const scheme = matchPattern.substr(0, index);
    if(!permittedMatchPatternSchemes.has(scheme))
        throw new Error(`Invalid match pattern, unsupported scheme: ${matchPattern}`);
    const hostLocatorScheme = hostLocatorMatchPatternSchemes.has(scheme);
    parsedMatchPattern.scheme = scheme;

    // Parse the host
    let offset = index + 1;
    tail = matchPattern.substr(offset);
    if(hostLocatorScheme) {
        if(!tail.startsWith("//"))
            throw new Error(`Invalid match pattern, missing // required by scheme: ${matchPattern}`);

        offset += 2;
        tail = matchPattern.substr(offset);
        index = tail.indexOf("/");
        if(index < 0)
            index = tail.length;

        let host = tail.substring(0, index);
        if((host === "") && (scheme !== "file"))
            throw new Error(`Invalid match pattern, missing host required by scheme: ${matchPattern}`);

        offset += index;
        tail = matchPattern.substring(offset);

        if(host !== "*") {
            if(host.startsWith("*.")) {
                host = host.substring(2);
                if(host === "*")
                    throw new Error(`Invalid match pattern, subdomain wildcard with host wildcard: ${matchPattern}`);
                parsedMatchPattern.matchSubdomains = true;
            }
        }
        parsedMatchPattern.host = host;
    }

    // Parse the path
    const path = tail;
    if(path === "")
        throw new Error(`Invalid match pattern, missing path: ${matchPattern}`);
    parsedMatchPattern.path = path;

    return parsedMatchPattern;
}

/**
 * Create a new MatchPatternSet for matching a set of match patterns.
 * @param {string[]} matchPatterns - An array of match pattern strings.
 * @returns {MatchPatternSet} - The new MatchPatternSet.
 */
function createMatchPatternSet(matchPatterns) {
    return /*@__PURE__*/new _MatchPatternSet(matchPatterns);
}

/**
 * @callback MatchPatternSetMatches
 * @param {string} url - The URL to test against the set of match patterns.
 * @returns {boolean} Whether at least one match pattern in the set matches the URL.
 */

/**
 * @callback MatchPatternSetExport
 * @returns {Object} The MatchPatternSet serialized to an object.
 */

/**
 * @typedef {Object} MatchPatternSet
 * An optimized object for matching against match patterns.
 * @property {MatchPatternSetMatches} matches - Test a URL against the set of match patterns.
 * @property {MatchPatternSetExport} export - Export the MatchPatternSet to a serialized object. 
 */

/**
 * An optimized object for matching against match patterns. A `MatchPatternSet` can provide
 * a significant performance improvement in comparison to `RegExp`s, in some instances
 * greater than 100x. A `MatchPatternSet` can also be exported to an object that uses only
 * built-in types, so it can be persisted or passed to content scripts in extension storage.
 *
 * There are several key optimizations in `MatchPatternSet`:
 *   * URLs are parsed with the `URL` class, which has native implementation.
 *   * Match patterns are indexed by hostname in a hash map. Lookups are much faster than
 *     iteratively advancing and backtracking through a complex regular expression, which
 *     is how domain matching currently occurs with the `Irregexp` regular expression
 *     engine in Firefox and Chrome.
 *   * Match patterns with identical scheme, subdomain matching, and host (i.e., that
 *     differ only in path) are combined.
 *   * The only remaining use of regular expressions is in path matching, where expressions
 *     can be (relatively) uncomplicated.
 *
 * Future performance improvements could include:
 *   * Replacing the path matching implementation to eliminate regular expressions entirely.
 *   * Replacing the match pattern index, such as by implementing a trie.
 * @private
 */
class _MatchPatternSet {
    /**
     * Creates a match pattern set from an array of match patterns.
     * @param {string[]} matchPatterns - The match patterns for the set.
     * @private
     */
    constructor(matchPatterns) {
        // Defining the special sets of `<all_url>` and wildcard schemes inside the class so
        // keeping content scripts in sync with this implementation will be easier
        this.allUrls = false;
        this.allUrlsSchemeSet = new Set(["http", "https", "ws", "wss", "ftp", "file", "data"]);
        this.wildcardSchemeSet = new Set(["http", "https", "ws", "wss"]);
        this.patternsByHost = { };
        for(const matchPattern of matchPatterns) {
            const parsedMatchPattern = parseMatchPattern(matchPattern);
            if(parsedMatchPattern.allUrls)
                this.allUrls = true;
            else {
                let hostPatterns = this.patternsByHost[parsedMatchPattern.host];
                if(hostPatterns === undefined) {
                    hostPatterns = [ ];
                    this.patternsByHost[parsedMatchPattern.host] = hostPatterns;
                }
                let addedToHostPattern = false;
                for(const hostPattern of hostPatterns) {
                    if((hostPattern.scheme === parsedMatchPattern.scheme) && (hostPattern.matchSubdomains === parsedMatchPattern.matchSubdomains)) {
                        addedToHostPattern = true;
                        hostPattern.paths.push(parsedMatchPattern.path);
                        break;
                    }
                }
                if(!addedToHostPattern)
                    hostPatterns.push({
                        scheme: parsedMatchPattern.scheme,
                        matchSubdomains: parsedMatchPattern.matchSubdomains,
                        host: parsedMatchPattern.host,
                        paths: [ parsedMatchPattern.path ]
                    });
            }
        }

        for(const host of Object.keys(this.patternsByHost)) {
            const hostPatterns = this.patternsByHost[host];
            for(const hostPattern of hostPatterns) {
                let wildcardPath = false;
                const pathRegExps = hostPattern.paths.map(path => {
                    if(path === "/")
                        return "/";
                    else if(path === "/*") {
                        wildcardPath = true;
                        return "/.*";
                    }
                    else {
                        // Including regular expression special character escaping in
                        // the constructor so keeping content scripts in sync with this
                        // implementation will be easier
                        const escapedPathArray = [ ];
                        for(const c of path) {
                            if(c === "*")
                                escapedPathArray.push(".*");
                            else
                                escapedPathArray.push(c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
                        }
                        return escapedPathArray.join("");
                    }
                });
                if(wildcardPath) {
                    hostPattern.wildcardPath = true;
                }
                else {
                    hostPattern.wildcardPath = false;
                    hostPattern.pathRegExp = new RegExp("^(?:" + pathRegExps.join("|") + ")$");
                }
                delete hostPattern.paths;
            }
        }
    }

    /**
     * Compares a URL string to the match patterns in the set.
     * @param {string} url - The URL string to compare.
     * @returns {boolean} Whether the URL string matches a pattern in the set.
     */
    matches(url) {
        let parsedUrl;
        try {
            parsedUrl = new URL(url);
        } catch {
            // If the target isn't a true URL, it certainly doesn't match
            return false;
        }
        // Remove the trailing : from the parsed protocol
        const scheme = parsedUrl.protocol.substring(0, parsedUrl.protocol.length - 1);
        const host = parsedUrl.hostname;
        const path = parsedUrl.pathname;

        // Check the special `<all_urls>` match pattern
        if(this.allUrls && this.allUrlsSchemeSet.has(scheme))
            return true;

        // Identify candidate match patterns
        let candidatePatterns = [ ];
        // Check each component suffix of the hostname for candidate match patterns
        const hostComponents = parsedUrl.hostname.split(".");
        let hostSuffix = "";
        for(let i = hostComponents.length - 1; i >= 0; i--) {
            hostSuffix = hostComponents[i] + (i < hostComponents.length - 1 ? "." : "") + hostSuffix;
            const hostSuffixPatterns = this.patternsByHost[hostSuffix];
            if(hostSuffixPatterns !== undefined)
                candidatePatterns = candidatePatterns.concat(hostSuffixPatterns);
        }

        // Add match patterns with a wildcard host to the set of candidates
        const hostWildcardPatterns = this.patternsByHost["*"];
        if(hostWildcardPatterns !== undefined)
            candidatePatterns = candidatePatterns.concat(hostWildcardPatterns);

        // Check the scheme, then the host, then the path for a match
        for(const candidatePattern of candidatePatterns) {
            if((candidatePattern.scheme === scheme) ||
               ((candidatePattern.scheme === "*") && this.wildcardSchemeSet.has(scheme))) {
                   if(candidatePattern.matchSubdomains ||
                      (candidatePattern.host === "*") ||
                      (candidatePattern.host === host)) {
                          if(candidatePattern.wildcardPath ||
                             candidatePattern.pathRegExp.test(path))
                             return true;
                      }
               }
        }

        return false;
    }

    /**
     * Exports the internals of the match pattern set for purposes of saving to extension
     * local storage.
     * @returns {object} - An opaque object representing the match pattern set internals.
     */
    export() {
        return {
            allUrls: this.allUrls,
            patternsByHost: this.patternsByHost
        };
    }

    /**
     * Imports the match pattern set from an opaque object previously generated by `export`.
     * @param {exportedInternals} - The previously exported internals for the match pattern set.
     * @private
     */
    import(exportedInternals) {
        this.allUrls = exportedInternals.allUrls;
        this.patternsByHost = exportedInternals.patternsByHost;
    }
}

/**
 * Escapes regular expression special characters in a string.
 * @param {string} string - The input string.
 * @returns {string} The input string with regular expression special characters escaped.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions}
 */
function escapeRegExpString(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Generates a set of match patterns for a set of domains. The match patterns will use the special
 * "*" wildcard scheme (matching "http", "https", "ws", and "wss") and the special "/*" wildcard
 * path (matching any path).
 * @param {string[]} domains - The set of domains to match against.
 * @param {boolean} [matchSubdomains=true] - Whether to match subdomains of domains in the set.
 * @returns {string[]} Match patterns for the domains in the set.
 */
function domainsToMatchPatterns(domains, matchSubdomains = true) {
    return /*@__PURE__*/domains.map(domain => { return `*://${matchSubdomains ? "*." : ""}${domain}/*` });
}

/**
 * Normalizes a URL string for subsequent comparison. Normalization includes the following steps:
 *   * Parse the string as a `URL` object, which will (among other normalization) lowercase the
 *     scheme and hostname.
 *   * Remove the port number, if any. For example, https://www.mozilla.org:443/ becomes https://www.mozilla.org/.
 *   * Remove query parameters, if any. For example, https://www.mozilla.org/?foo becomes https://www.mozilla.org/.
 *   * Remove the fragment identifier, if any. For example, https://www.mozilla.org/#foo becomes https://www.mozilla.org/.
 * @param {string} url - The URL string to normalize.
 * @returns {string} The normalized URL string.
 * @throws {Error} Throws an error if the URL string is not a valid, absolute URL.
 */
function normalizeUrl(url) {
    const urlObj = new URL(url);
    urlObj.port = "";
    urlObj.search = "";
    urlObj.hash = "";
    return urlObj.href;
}

/**
 * This module provides utilities for working with inlined content.
 * 
 * @module webScience.inline
 */

/**
 * Extract the content from a data URL as a string, decoding it from Base64
 * if necessary. Useful for working with content scripts that have been
 * encoded with `@rollup/plugin-url`.
 * @param {string} dataUrl - The data URL.
 * @returns {string} - The content of the URL.
 */
function dataUrlToString(dataUrl) {
    if(!dataUrl.startsWith("data:")) {
        throw new Error("Incorrectly formatted data URL.");
    }
    const commaIndex = dataUrl.indexOf(",");
    if(commaIndex < 0) {
        throw new Error("Incorrectly formatted data URL.");
    }
    // Not currently checking that the MIME type is valid
    const dataUrlMimeTypeAndEncoding = dataUrl.substring(0, commaIndex);
    let content = dataUrl.substring(commaIndex + 1, dataUrl.length);
    if(dataUrlMimeTypeAndEncoding.endsWith("base64")) {
        content = atob(content);
    }
    return content;
}

/**
 * Convert a data URL to a blob object URL. Useful for working with HTML
 * documents that have been encoded with `@rollup/plugin-url`.
 * @param {*} dataUrl - The data URL.
 * @returns {string} - A blob object URL.
 */
function dataUrlToBlobUrl(dataUrl) {
    return URL.createObjectURL(new Blob([ dataUrlToString(dataUrl) ]));
}

var pageManagerContentScript = "data:application/javascript;base64,KGZ1bmN0aW9uICgpIHsKICAndXNlIHN0cmljdCc7CgogIC8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZQogIC8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlcgogIC8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuCiAgdmFyIGdldFJhbmRvbVZhbHVlczsKICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7CiAgZnVuY3Rpb24gcm5nKCkgewogICAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvCiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykgewogICAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgInRoaXMiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLAogICAgICAvLyBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gKG1zQ3J5cHRvKSBvbiBJRTExLgogICAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7CgogICAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykgewogICAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTsKICAgICAgfQogICAgfQoKICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpOwogIH0KCiAgdmFyIFJFR0VYID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOwoKICBmdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7CiAgICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7CiAgfQoKICAvKioKICAgKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybToKICAgKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFgKICAgKi8KCiAgdmFyIGJ5dGVUb0hleCA9IFtdOwoKICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7CiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpKTsKICB9CgogIGZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHsKICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7CiAgICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZQogICAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0CiAgICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZQogICAgLy8gb2YgdGhlIGZvbGxvd2luZzoKICAgIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0bwogICAgLy8gInVuZGVmaW5lZCIgaW4gdGhlIHV1aWQpCiAgICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzCgogICAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkgewogICAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpOwogICAgfQoKICAgIHJldHVybiB1dWlkOwogIH0KCiAgZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHsKICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OwogICAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgCgogICAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDsKICAgIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZAoKICAgIGlmIChidWYpIHsKICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7CgogICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHsKICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldOwogICAgICB9CgogICAgICByZXR1cm4gYnVmOwogICAgfQoKICAgIHJldHVybiBzdHJpbmdpZnkocm5kcyk7CiAgfQoKICAvKioKICAgKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbmFsaXR5IGZvciBnZW5lcmF0aW5nIHJhbmRvbSBpZGVudGlmaWVycy4KICAgKiBTdHVkaWVzIGNhbiB1c2UgdGhlc2UgaWRlbnRpZmllcnMgdG8gdW5pcXVlbHkgbGFiZWwgZXZlbnRzIGFuZCBvdGhlcgogICAqIGl0ZW1zIG9mIGludGVyZXN0LgogICAqIEBtb2R1bGUgd2ViU2NpZW5jZS5pZAogICAqLwoKICAvKioKICAgKiBHZW5lcmF0ZSBhIHJhbmRvbSAodjQpIFVVSUQsIGNvbnNpc3RlbnQgd2l0aCBSRkM0MTIyLiBUaGVzZSB2YWx1ZXMKICAgKiBpbmNsdWRlIDEyMiBiaXRzIG9mIGNyeXB0b2dyYXBoaWMgcmFuZG9tbmVzcy4KICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbmV3IFVVSUQuCiAgICovCiAgZnVuY3Rpb24gZ2VuZXJhdGVJZCgpIHsKICAgICAgcmV0dXJuIHY0KCk7CiAgfQoKICAvKioKICAgKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBmdW5jdGlvbmFsaXR5IGZvciBjb25zdHJ1Y3RpbmcgZXZlbnRzIHNpbWlsYXIgdG8KICAgKiBXZWJFeHRlbnNpb25zIGBldmVudHMuRXZlbnRgIG9iamVjdHMuCiAgICoKICAgKiBAbW9kdWxlIHdlYlNjaWVuY2UuZXZlbnRzCiAgICovCgogIC8qKgogICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBubyBwYXJhbWV0ZXJzLgogICAqIEBjYWxsYmFjayBjYWxsYmFja1dpdGhvdXRQYXJhbWV0ZXJzCiAgICovCgogIC8qKgogICAqIEEgY2xhc3MgdGhhdCBwcm92aWRlcyBhbiBldmVudCBBUEkgc2ltaWxhciB0byBXZWJFeHRlbnNpb25zIGBldmVudHMuRXZlbnRgIG9iamVjdHMuCiAgICogVXNlIHRoZSBgY3JlYXRlRXZlbnRgIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBFdmVudCBvYmplY3QuCiAgICogQHRlbXBsYXRlIEV2ZW50Q2FsbGJhY2tGdW5jdGlvbgogICAqIEB0ZW1wbGF0ZSBFdmVudE9wdGlvbnMKICAgKi8KICBjbGFzcyBFdmVudCB7CiAgICAgIC8qKgogICAgICAgKiBDcmVhdGVzIGFuIGV2ZW50IGluc3RhbmNlIHNpbWlsYXIgdG8gV2ViRXh0ZW5zaW9ucyBgZXZlbnRzLkV2ZW50YCBvYmplY3RzLgogICAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gQSBzZXQgb2Ygb3B0aW9ucyBmb3IgdGhlIGV2ZW50LgogICAgICAgKiBAcGFyYW0ge25hbWV9IFtvcHRpb25zLm5hbWVdIC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50LgogICAgICAgKiBAcGFyYW0ge2FkZExpc3RlbmVyQ2FsbGJhY2t9IFtvcHRpb25zLmFkZExpc3RlbmVyQ2FsbGJhY2tdIC0gQSBmdW5jdGlvbiB0aGF0IGlzCiAgICAgICAqIGNhbGxlZCB3aGVuIGEgbGlzdGVuZXIgZnVuY3Rpb24gaXMgYWRkZWQuCiAgICAgICAqIEBwYXJhbSB7cmVtb3ZlTGlzdGVuZXJDYWxsYmFja30gW29wdGlvbnMucmVtb3ZlTGlzdGVuZXJDYWxsYmFja10gLSBBIGZ1bmN0aW9uCiAgICAgICAqIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBsaXN0ZW5lciBmdW5jdGlvbiBpcyByZW1vdmVkLgogICAgICAgKiBAcGFyYW0ge25vdGlmeUxpc3RlbmVyc0NhbGxiYWNrfSBbb3B0aW9ucy5ub3RpZnlMaXN0ZW5lcnNDYWxsYmFja10gLSBBIGZ1bmN0aW9uCiAgICAgICAqIHRoYXQgaXMgY2FsbGVkIGJlZm9yZSBhIGxpc3RlbmVyIGlzIG5vdGlmaWVkIGFuZCBjYW4gZmlsdGVyIHRoZSBub3RpZmljYXRpb24uCiAgICAgICAqIEBwcml2YXRlCiAgICAgICAqLwogICAgICBjb25zdHJ1Y3Rvcih7CiAgICAgICAgICBuYW1lID0gbnVsbCwKICAgICAgICAgIGFkZExpc3RlbmVyQ2FsbGJhY2sgPSBudWxsLAogICAgICAgICAgcmVtb3ZlTGlzdGVuZXJDYWxsYmFjayA9IG51bGwsCiAgICAgICAgICBub3RpZnlMaXN0ZW5lcnNDYWxsYmFjayA9IG51bGwKICAgICAgfSA9IHsKICAgICAgICAgIG5hbWU6IG51bGwsCiAgICAgICAgICBhZGRMaXN0ZW5lckNhbGxiYWNrOiBudWxsLAogICAgICAgICAgcmVtb3ZlTGlzdGVuZXJDYWxsYmFjazogbnVsbCwKICAgICAgICAgIG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrOiBudWxsCiAgICAgIH0pIHsKICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWU7CiAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyQ2FsbGJhY2sgPSBhZGRMaXN0ZW5lckNhbGxiYWNrOwogICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lckNhbGxiYWNrID0gcmVtb3ZlTGlzdGVuZXJDYWxsYmFjazsKICAgICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzQ2FsbGJhY2sgPSBub3RpZnlMaXN0ZW5lcnNDYWxsYmFjazsKICAgICAgICAgIHRoaXMubGlzdGVuZXJzID0gbmV3IE1hcCgpOwogICAgICB9CgogICAgICAvKioKICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpbW1lZGlhdGVseSBiZWZvcmUgYSBuZXcgbGlzdGVuZXIgZnVuY3Rpb24gaXMgYWRkZWQuCiAgICAgICAqIEBjYWxsYmFjayBhZGRMaXN0ZW5lckNhbGxiYWNrCiAgICAgICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFja0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBuZXcgbGlzdGVuZXIgZnVuY3Rpb24uCiAgICAgICAqIEBwYXJhbSB7RXZlbnRPcHRpb25zfSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgZm9yIHRoZSBuZXcgbGlzdGVuZXIgZnVuY3Rpb24uCiAgICAgICAqLwoKICAgICAgLyoqCiAgICAgICAqIEEgZnVuY3Rpb24gdGhhdCBhZGRzIGFuIGV2ZW50IGxpc3RlbmVyLCB3aXRoIG9wdGlvbmFsIHBhcmFtZXRlcnMuIElmIHRoZQogICAgICAgKiBsaXN0ZW5lciBoYXMgcHJldmlvdXNseSBiZWVuIGFkZGVkIGZvciB0aGUgZXZlbnQsIHRoZSBsaXN0ZW5lcidzIG9wdGlvbnMKICAgICAgICogKGlmIGFueSkgd2lsbCBiZSB1cGRhdGVkLgogICAgICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2tGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBldmVudCBmaXJlcy4KICAgICAgICogQHBhcmFtIHtFdmVudE9wdGlvbnN9IG9wdGlvbnMgLSBPcHRpb25zIGZvciB3aGVuIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgY2FsbGVkLgogICAgICAgKiBUaGUgc3VwcG9ydGVkIG9wdGlvbihzKSBkZXBlbmQgb24gdGhlIGV2ZW50IHR5cGUuCiAgICAgICAqLwogICAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lciwgb3B0aW9ucykgewogICAgICAgICAgaWYodGhpcy5hZGRMaXN0ZW5lckNhbGxiYWNrICE9PSBudWxsKSB7CiAgICAgICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lckNhbGxiYWNrKGxpc3RlbmVyLCBvcHRpb25zKTsKICAgICAgICAgIH0KICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChsaXN0ZW5lciwgb3B0aW9ucyk7CiAgICAgICAgICAvLyBJZiB0aGUgZXZlbnQgaGFzIGEgbmFtZSwgYW5ub3RhdGUgdGhlIGxpc3RlbmVyIHdpdGggdGhlIG5hbWUKICAgICAgICAgIGlmKHR5cGVvZiB0aGlzLm5hbWUgPT09ICJzdHJpbmciKSB7CiAgICAgICAgICAgICAgbGlzdGVuZXIud2ViU2NpZW5jZUV2ZW50TmFtZSA9IHRoaXMubmFtZTsKICAgICAgICAgIH0KICAgICAgfQoKICAgICAgLyoqCiAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgYSBsaXN0ZW5lciBmdW5jdGlvbiBpcyByZW1vdmVkLgogICAgICAgKiBAY2FsbGJhY2sgcmVtb3ZlTGlzdGVuZXJDYWxsYmFjawogICAgICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2tGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdG8gcmVtb3ZlLgogICAgICAgKiBAcGFyYW0ge0V2ZW50T3B0aW9uc30gb3B0aW9ucyAtIFRoZSBvcHRpb25zIHRoYXQgdGhlIGxpc3RlbmVyIHdhcyBhZGRlZCB3aXRoLgogICAgICAgKi8KCiAgICAgIC8qKgogICAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lci4KICAgICAgICogQHBhcmFtIHtFdmVudENhbGxiYWNrRnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIHJlbW92ZS4KICAgICAgICovCiAgICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7CiAgICAgICAgICBpZih0aGlzLnJlbW92ZUxpc3RlbmVyQ2FsbGJhY2sgIT09IG51bGwpIHsKICAgICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyQ2FsbGJhY2sobGlzdGVuZXIsIHRoaXMubGlzdGVuZXJzLmdldChsaXN0ZW5lcikpOwogICAgICAgICAgfQogICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTsKICAgICAgfQoKICAgICAgLyoqCiAgICAgICAqIEEgZnVuY3Rpb24gdGhhdCBjaGVja3Mgd2hldGhlciBhIHBhcnRpY3VsYXIgZXZlbnQgbGlzdGVuZXIgaGFzIGJlZW4gYWRkZWQuCiAgICAgICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFja0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbiB0byBjaGVjay4KICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIGhhcyBiZWVuIGFkZGVkLgogICAgICAgKi8KICAgICAgaGFzTGlzdGVuZXIobGlzdGVuZXIpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5oYXMobGlzdGVuZXIpOwogICAgICB9CgogICAgICAvKioKICAgICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlcmUgYXJlIGFueSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZC4KICAgICAgICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlcmUgYXJlIGFueSBsaXN0ZW5lcnMKICAgICAgICovCiAgICAgIGhhc0FueUxpc3RlbmVycygpIHsKICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVycy5zaXplID4gMDsKICAgICAgfQoKICAgICAgLyoqCiAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBhIGxpc3RlbmVyIGZ1bmN0aW9uIG1heSBiZSBub3RpZmllZC4KICAgICAgICogQGNhbGxiYWNrIG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrCiAgICAgICAqIEBwYXJhbSB7RXZlbnRDYWxsYmFja0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBsaXN0ZW5lciBmdW5jdGlvbiB0aGF0IG1heSBiZSBjYWxsZWQuCiAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGxpc3RlbmVyQXJndW1lbnRzIC0gVGhlIGFyZ3VtZW50cyB0aGF0IHdvdWxkIGJlIHBhc3NlZCB0byB0aGUgbGlzdGVuZXIKICAgICAgICogZnVuY3Rpb24uCiAgICAgICAqIEBwYXJhbSB7RXZlbnRPcHRpb25zfSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgdGhhdCB0aGUgbGlzdGVuZXIgd2FzIGFkZGVkIHdpdGguCiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIHRvIGNhbGwgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uLgogICAgICAgKi8KCiAgICAgIC8qKgogICAgICAgKiBOb3RpZnkgdGhlIGxpc3RlbmVyIGZ1bmN0aW9ucyBmb3IgdGhlIGV2ZW50LgogICAgICAgKiBAcGFyYW0ge0FycmF5fSBbbGlzdGVuZXJBcmd1bWVudHM9W11dIC0gVGhlIGFyZ3VtZW50cyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIGxpc3RlbmVyCiAgICAgICAqIGZ1bmN0aW9ucy4KICAgICAgICovCiAgICAgIG5vdGlmeUxpc3RlbmVycyhsaXN0ZW5lckFyZ3VtZW50cyA9IFtdKSB7CiAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChvcHRpb25zLCBsaXN0ZW5lcikgPT4gewogICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAgIGlmKCh0aGlzLm5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrID09PSBudWxsKSB8fCB0aGlzLm5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrKGxpc3RlbmVyLCBsaXN0ZW5lckFyZ3VtZW50cywgb3B0aW9ucykpCiAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5hcHBseShudWxsLCBsaXN0ZW5lckFyZ3VtZW50cyk7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIGNhdGNoKGVycm9yKSB7CiAgICAgICAgICAgICAgfQogICAgICAgICAgfSk7CiAgICAgIH0KICB9CgogIC8qKgogICAqIEFuIGV4dGVuc2lvbiBvZiB0aGUgRXZlbnQgY2xhc3MgdGhhdCBwZXJtaXRzIG9ubHkgb25lIGxpc3RlbmVyIGF0IGEgdGltZS4KICAgKiBAdGVtcGxhdGUgRXZlbnRDYWxsYmFja0Z1bmN0aW9uCiAgICogQHRlbXBsYXRlIEV2ZW50T3B0aW9ucwogICAqIEBleHRlbmRzIHtFdmVudDxFdmVudENhbGxiYWNrRnVuY3Rpb24sIEV2ZW50T3B0aW9ucz59CiAgICogQHByaXZhdGUKICAgKi8KICBjbGFzcyBFdmVudFNpbmdsZXRvbiBleHRlbmRzIEV2ZW50IHsKICAgICAgLyoqCiAgICAgICAqIEEgZnVuY3Rpb24gdGhhdCBhZGRzIGFuIGV2ZW50IGxpc3RlbmVyLCB3aXRoIG9wdGlvbmFsIHBhcmFtZXRlcnMuIElmIHRoZQogICAgICAgKiBsaXN0ZW5lciBoYXMgcHJldmlvdXNseSBiZWVuIGFkZGVkIGZvciB0aGUgZXZlbnQsIHRoZSBsaXN0ZW5lcidzIG9wdGlvbnMKICAgICAgICogKGlmIGFueSkgd2lsbCBiZSB1cGRhdGVkLgogICAgICAgKiBAcGFyYW0ge0V2ZW50Q2FsbGJhY2tGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBldmVudCBmaXJlcy4KICAgICAgICogQHBhcmFtIHtFdmVudE9wdGlvbnN9IG9wdGlvbnMgLSBPcHRpb25zIGZvciB3aGVuIHRoZSBsaXN0ZW5lciBzaG91bGQgYmUgY2FsbGVkLgogICAgICAgKiBUaGUgc3VwcG9ydGVkIG9wdGlvbihzKSBkZXBlbmQgb24gdGhlIGV2ZW50IHR5cGUuCiAgICAgICAqIEB0aHJvd3Mge0Vycm9yfSBUaGlzIGZ1bmN0aW9uIHRocm93cyBhbiBFcnJvciBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgbGlzdGVuZXIgZm9yCiAgICAgICAqIHRoZSBldmVudC4KICAgICAgICovCiAgICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyLCBvcHRpb25zKSB7CiAgICAgICAgICBpZih0aGlzLmxpc3RlbmVycy5zaXplID4gMCkKICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkVycm9yOiBjYW5ub3QgYWRkIG1vcmUgdGhhbiBvbmUgbGlzdGVuZXIgdG8gRXZlbnRTaW5nbGV0b24gZXZlbnQuIik7CiAgICAgICAgICBzdXBlci5hZGRMaXN0ZW5lcihsaXN0ZW5lciwgb3B0aW9ucyk7CiAgICAgIH0KICB9CgogIC8qKgogICAqIENyZWF0ZSBhIG5ldyBFdmVudCBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIFdlYkV4dGVuc2lvbnMgZXZlbnQgc3ludGF4LCB3aXRoIHRoZQogICAqIHByb3ZpZGVkIG9wdGlvbnMuCiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zIGZvciB0aGUgZXZlbnQuCiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuCiAgICogQHBhcmFtIHthZGRMaXN0ZW5lckNhbGxiYWNrfSBbb3B0aW9ucy5hZGRMaXN0ZW5lckNhbGxiYWNrXSAtIEEgZnVuY3Rpb24gdGhhdCBpcwogICAqIGNhbGxlZCB3aGVuIGEgbGlzdGVuZXIgZnVuY3Rpb24gaXMgYWRkZWQuCiAgICogQHBhcmFtIHtyZW1vdmVMaXN0ZW5lckNhbGxiYWNrfSBbb3B0aW9ucy5yZW1vdmVMaXN0ZW5lckNhbGxiYWNrXSAtIEEgZnVuY3Rpb24KICAgKiB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgbGlzdGVuZXIgZnVuY3Rpb24gaXMgcmVtb3ZlZC4KICAgKiBAcGFyYW0ge25vdGlmeUxpc3RlbmVyc0NhbGxiYWNrfSBbb3B0aW9ucy5ub3RpZnlMaXN0ZW5lcnNDYWxsYmFja10gLSBBIGZ1bmN0aW9uCiAgICogdGhhdCBpcyBjYWxsZWQgYmVmb3JlIGEgbGlzdGVuZXIgaXMgbm90aWZpZWQgYW5kIGNhbiBmaWx0ZXIgdGhlIG5vdGlmaWNhdGlvbi4KICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlXSAtIFdoZXRoZXIgdG8gYWxsb3cgb25seSBvbmUgbGlzdGVuZXIKICAgKiBmb3IgdGhlIGV2ZW50LgogICAqIEByZXR1cm5zIHtFdmVudH0gLSBUaGUgY3JlYXRlZCBFdmVudCBvYmplY3QuCiAgICovCiAgIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KHsKICAgICAgbmFtZSA9IG51bGwsCiAgICAgIGFkZExpc3RlbmVyQ2FsbGJhY2sgPSBudWxsLAogICAgICByZW1vdmVMaXN0ZW5lckNhbGxiYWNrID0gbnVsbCwKICAgICAgbm90aWZ5TGlzdGVuZXJzQ2FsbGJhY2sgPSBudWxsLAogICAgICBzaW5nbGV0b24gPSBmYWxzZQogIH0gPSB7CiAgICAgIG5hbWU6IG51bGwsCiAgICAgIGFkZExpc3RlbmVyQ2FsbGJhY2s6IG51bGwsCiAgICAgIHJlbW92ZUxpc3RlbmVyQ2FsbGJhY2s6IG51bGwsCiAgICAgIG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrOiBudWxsLAogICAgICBzaW5nbGV0b246IGZhbHNlCiAgfSkgewogICAgICBpZihzaW5nbGV0b24pIHsKICAgICAgICAgIHJldHVybiBuZXcgRXZlbnRTaW5nbGV0b24oewogICAgICAgICAgICAgIG5hbWUsCiAgICAgICAgICAgICAgYWRkTGlzdGVuZXJDYWxsYmFjaywKICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lckNhbGxiYWNrLAogICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrCiAgICAgICAgICB9KTsKICAgICAgfQogICAgICByZXR1cm4gbmV3IEV2ZW50KHsKICAgICAgICAgIG5hbWUsCiAgICAgICAgICBhZGRMaXN0ZW5lckNhbGxiYWNrLAogICAgICAgICAgcmVtb3ZlTGlzdGVuZXJDYWxsYmFjaywKICAgICAgICAgIG5vdGlmeUxpc3RlbmVyc0NhbGxiYWNrCiAgICAgIH0pOwogIH0KCiAgLyoqCiAgICogQ29udGVudCBzY3JpcHQgZm9yIHRoZSBwYWdlTWFuYWdlciBtb2R1bGUuIFRoaXMgc2NyaXB0IHByb3ZpZGVzIGEKICAgKiBgd2ViU2NpZW5jZS5wYWdlTWFuYWdlcmAgQVBJIHdpdGggZ2xvYmFsIHNjb3BlIGluIHRoZSBjb250ZW50IHNjcmlwdCBlbnZpcm9ubWVudC4KICAgKiBUaGUgQVBJIGluY2x1ZGVzIHRoZSBmb2xsb3dpbmcgZmVhdHVyZXMuCiAgICogICAqIFBhZ2UgVHJhY2tpbmcKICAgKiAgICAgKiBgcGFnZUlkYCAtIEEgdW5pcXVlIElEIGZvciB0aGUgcGFnZS4KICAgKiAgICAgKiBgdXJsYCAtIFRoZSBVUkwgb2YgdGhlIHBhZ2UsIG9taXR0aW5nIGFueSBoYXNoLgogICAqICAgICAqIGByZWZlcnJlcmAgLSBUaGUgcmVmZXJyZXIgZm9yIHRoZSBwYWdlLgogICAqICAgKiBQYWdlIEV2ZW50cwogICAqICAgICAqIGBvblBhZ2VWaXNpdFN0YXJ0YCAtIEFuIGV2ZW50IHRoYXQgZmlyZXMgd2hlbiBhIHBhZ2UgdmlzaXQgYmVnaW5zLiBOb3RlIHRoYXQKICAgKiAgICAgICB0aGUgcGFnZSB2aXNpdCBzdGFydCBldmVudCBtYXkgaGF2ZSBhbHJlYWR5IGZpcmVkIGJ5IHRoZSB0aW1lIGFub3RoZXIKICAgKiAgICAgICBjb250ZW50IHNjcmlwdCBhdHRhY2hlcyAoc2VlIGRpc2N1c3Npb24gYmVsb3cpLgogICAqICAgICAqIGBvblBhZ2VWaXNpdFN0b3BgIC0gQW4gZXZlbnQgdGhhdCBmaXJlcyB3aGVuIGEgcGFnZSB2aXNpdCBlbmRzLgogICAqICAgICAqIGBvblBhZ2VBdHRlbnRpb25VcGRhdGVgIC0gQW4gZXZlbnQgdGhhdCBmaXJlcyB3aGVuIHRoZSBwYWdlJ3MgYXR0ZW50aW9uIHN0YXRlCiAgICogICAgIGNoYW5nZXMuCiAgICogICAgICogYG9uUGFnZUF1ZGlvVXBkYXRlYCAtIEFuIGV2ZW50IHRoYXQgZmlyZXMgd2hlbiB0aGUgcGFnZSdzIGF1ZGlvIHN0YXRlIGNoYW5nZXMuCiAgICogICAqIFBhZ2UgUHJvcGVydGllcwogICAqICAgICAqIGBwYWdlSGFzQXR0ZW50aW9uYCAtIFdoZXRoZXIgdGhlIHBhZ2UgY3VycmVudGx5IGhhcyB0aGUgdXNlcidzIGF0dGVudGlvbi4KICAgKiAgICAgKiBgcGFnZUhhc0F1ZGlvIC0gV2hldGhlciB0aGVyZSBpcyBjdXJyZW50bHkgYXVkaW8gcGxheWluZyBvbiB0aGUgcGFnZS4KICAgKiAgICAgKiBgcGFnZVZpc2l0U3RhcnRlZGAgLSBXaGV0aGVyIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50IGhhcyBjb21wbGV0ZWQgZmlyaW5nLAogICAqICAgICBzdWNoIHRoYXQgYWxsIGxpc3RlbmVycyBoYXZlIGJlZW4gbm90aWZpZWQuCiAgICogICAgICogYHBhZ2VWaXNpdFN0YXJ0VGltZWAgLSBUaGUgdGltZSB0aGF0IHRoZSBwYWdlIHZpc2l0IHN0YXJ0ZWQuCiAgICoKICAgKiAjIEV2ZW50cwogICAqIFNlZSB0aGUgZG9jdW1lbnRhdGlvbiBpbiB0aGUgcGFnZU1hbmFnZXIgbW9kdWxlIGZvciBkZXRhaWwgb24gdGhlIGV2ZW50IHR5cGVzLgogICAqCiAgICogRWFjaCBldmVudCBpbXBsZW1lbnRzIHRoZSBzdGFuZGFyZCBXZWJFeHRlbnNpb25zIGV2ZW50IGZlYXR1cmVzLgogICAqICAgKiBhZGRMaXN0ZW5lcgogICAqICAgKiByZW1vdmVMaXN0ZW5lcgogICAqICAgKiBoYXNMaXN0ZW5lcgogICAqCiAgICogRXZlbnQgbGlzdGVuZXJzIHJlY2VpdmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0eS4KICAgKiAgICogdGltZVN0YW1wIC0gVGhlIHRpbWUgdGhhdCB0aGUgdW5kZXJseWluZyBicm93c2VyIGV2ZW50IGZpcmVkLgogICAqCiAgICogTGlzdGVuZXJzIGZvciB0aGUgcGFnZSB2aXNpdCBzdGFydCBldmVudCByZWNlaXZlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcKICAgKiBhZGRpdGlvbmFsIHByb3BlcnR5LgogICAqICAgKiBpc0hpc3RvcnlDaGFuZ2UgLSBXaGV0aGVyIHRoZSBwYWdlIHZpc2l0IHdhcyBjYXVzZWQgYnkgYSBjaGFuZ2UgdmlhIHRoZSBIaXN0b3J5IEFQSS4KICAgKgogICAqIEV4YW1wbGUgdXNhZ2U6CiAgICogYGBgCiAgICogd2ViU2NpZW5jZS5wYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0b3AuYWRkTGlzdGVuZXIoKHt0aW1lU3RhbXB9KSA9PiB7CiAgICogICAgIGNvbnNvbGUubG9nKGBQYWdlIHZpc2l0IHN0b3BwZWQgYXQgJHt0aW1lU3RhbXB9IHdpdGggcGFnZSBJRCAke3BhZ2VNYW5hZ2VyLnBhZ2VJZH1gKTsKICAgKiB9KTsKICAgKgogICAqIHdlYlNjaWVuY2UucGFnZU1hbmFnZXIub25QYWdlQXR0ZW50aW9uVXBkYXRlLmFkZExpc3RlbmVyKCh7dGltZVN0YW1wfSkgPT4gewogICAqICAgICBjb25zb2xlLmxvZyhgUGFnZSBhdHRlbnRpb24gdXBkYXRlIGF0ICR7dGltZVN0YW1wfSB3aXRoIGF0dGVudGlvbiBzdGF0ZSAke3BhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb259LmApOwogICAqIH0pOwogICAqIGBgYAogICAqCiAgICogIyBDb250ZW50IFNjcmlwdCBMb2FkIE9yZGVyaW5nCiAgICogIyMgRXhlY3V0aW5nIGEgQ29udGVudCBTY3JpcHQgQWZ0ZXIgdGhlIHBhZ2VNYW5hZ2VyIEFQSSBIYXMgTG9hZGVkCiAgICogTm90ZSB0aGF0IHRoZSBXZWJFeHRlbnNpb25zIGNvbnRlbnQgc2NyaXB0IG1vZGVsIGRvZXMgbm90IGd1YXJhbnRlZSBleGVjdXRpb24KICAgKiBvcmRlciBmb3IgY29udGVudCBzY3JpcHRzLCBzbyBpdCBpcyBwb3NzaWJsZSB0aGF0IHRoZSBBUEkgd2lsbCBub3QgaGF2ZSBsb2FkZWQKICAgKiB3aGVuIGEgY29udGVudCBzY3JpcHQgdGhhdCBkZXBlbmRzIG9uIHRoZSBBUEkgbG9hZHMuIEFzIGEgd29ya2Fyb3VuZCwgdGhpcwogICAqIGNvbnRlbnQgc2NyaXB0IGNoZWNrcyB0aGUgZ2xvYmFsIGBwYWdlTWFuYWdlckhhc0xvYWRlZGAgZm9yIGFuIGFycmF5IG9mCiAgICogZnVuY3Rpb25zIHRvIGNhbGwgYWZ0ZXIgdGhlIGNvbnRlbnQgc2NyaXB0IGhhcyBleGVjdXRlZCwgYnV0IGJlZm9yZSB0aGUgY29udGVudAogICAqIHNjcmlwdCBoYXMgZmlyZWQgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQuCiAgICoKICAgKiBFeGFtcGxlIHVzYWdlOgogICAqIGBgYAogICAqIGZ1bmN0aW9uIG1haW4oKSB7CiAgICogICAgIC8vIENvbnRlbnQgc2NyaXB0IGxvZ2ljIGdvZXMgaGVyZQogICAqIH0KICAgKgogICAqIGlmKCgid2ViU2NpZW5jZSIgaW4gd2luZG93KSAmJiAoInBhZ2VNYW5hZ2VyIiBpbiB3aW5kb3cud2ViU2NpZW5jZSkpCiAgICogICAgIG1haW4oKTsKICAgKiBlbHNlIHsKICAgKiAgICAgaWYoISgicGFnZU1hbmFnZXJIYXNMb2FkZWQiIGluIHdpbmRvdykpCiAgICogICAgICAgICB3aW5kb3cucGFnZU1hbmFnZXJIYXNMb2FkZWQgPSBbXTsKICAgKiAgICAgd2luZG93LnBhZ2VNYW5hZ2VySGFzTG9hZGVkLnB1c2gobWFpbik7CiAgICogfQogICAqIGBgYAogICAqCiAgICogIyMgTGlzdGVuaW5nIGZvciB0aGUgUGFnZSBWaXNpdCBTdGFydCBFdmVudAogICAqIEJlY2F1c2UgdGhlIG9yZGVyIG9mIGNvbnRlbnQgc2NyaXB0IGV4ZWN1dGlvbiBpcyBub3QgZ3VhcmFudGVlZCwgYSBjb250ZW50CiAgICogc2NyaXB0IHRoYXQgdXNlcyB0aGUgcGFnZU1hbmFnZXIgQVBJIG1pZ2h0IG1pc3MgYSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50LiBGb3IKICAgKiBleGFtcGxlLCB0aGUgcGFnZU1hbmFnZXIgY29udGVudCBzY3JpcHQgbWlnaHQgYXR0YWNoIGFuZCBmaXJlIHRoZSBwYWdlIHZpc2l0CiAgICogc3RhcnQgZXZlbnQsIHRoZW4gYW5vdGhlciBjb250ZW50IHNjcmlwdCBhdHRhY2hlcyBhbmQgYmVnaW5zIGxpc3RlbmluZyBmb3IKICAgKiB0aGUgZXZlbnQuIFRoZSBwYWdlTWFuYWdlciBBUEkgYWRkcmVzc2VzIHRoaXMgbGltaXRhdGlvbiBieSBwcm92aWRpbmcgYQogICAqIGBwYWdlVmlzaXRTdGFydGVkYCBib29sZWFuIHJlZmxlY3Rpbmcgd2hldGhlciB0aGUgcGFnZSB2aXNpdCBzdGFydCBldmVudCBoYXMKICAgKiBhbHJlYWR5IGNvbXBsZXRlZCBmaXJpbmcgKGkuZS4sIGFsbCBsaXN0ZW5lcnMgaGF2ZSBiZWVuIG5vdGlmaWVkKS4gQ29udGVudCBzY3JpcHRzCiAgICogdGhhdCB1c2UgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQgd2lsbCBjb21tb25seSB3YW50IHRvIGNhbGwgdGhlaXIgb3duIHBhZ2UgdmlzaXQKICAgKiBzdGFydCBsaXN0ZW5lciBpZiBgcGFnZVZpc2l0U3RhcnRlZGAgaXMgYHRydWVgLgogICAqCiAgICogRXhhbXBsZSB1c2FnZToKICAgKiBgYGAKICAgKiBmdW5jdGlvbiBwYWdlVmlzaXRTdGFydExpc3RlbmVyKHt0aW1lU3RhbXB9KSB7CiAgICogICAgIC8vIFBhZ2UgdmlzaXQgc3RhcnQgbG9naWMgZ29lcyBoZXJlCiAgICogfQogICAqIHdlYlNjaWVuY2UucGFnZU1hbmFnZXIub25QYWdlVmlzaXRTdGFydC5hZGRMaXN0ZW5lcihwYWdlVmlzaXRTdGFydExpc3RlbmVyKTsKICAgKiBpZih3ZWJTY2llbmNlLnBhZ2VNYW5hZ2VyLnBhZ2VWaXNpdFN0YXJ0ZWQpCiAgICogICAgIHBhZ2VWaXNpdFN0YXJ0TGlzdGVuZXIoeyB0aW1lU3RhbXA6IHBhZ2VNYW5hZ2VyLnBhZ2VWaXNpdFN0YXJ0VGltZSB9KTsKICAgKiBgYGAKICAgKgogICAqICMgS25vd24gSXNzdWVzCiAgICogICAqIFdoZW4gc2VuZGluZyBhIHBhZ2UgdmlzaXQgc3RvcCBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdCwgc29tZXRpbWVzCiAgICogICAgIEZpcmVmb3ggZ2VuZXJhdGVzIGFuIGVycm9yICgiUHJvbWlzZSByZXNvbHZlZCB3aGlsZSBjb250ZXh0IGlzIGluYWN0aXZlIikKICAgKiAgICAgYmVjYXVzZSB0aGUgY29udGVudCBzY3JpcHQgZXhlY3V0aW9uIGVudmlyb25tZW50IGlzIHRlcm1pbmF0aW5nIHdoaWxlIHRoZQogICAqICAgICBtZXNzYWdlIHNlbmRpbmcgUHJvbWlzZSByZW1haW5zIG9wZW4uIFRoaXMgZXJyb3IgZG9lcyBub3QgYWZmZWN0IGZ1bmN0aW9uYWxpdHksCiAgICogICAgIGJlY2F1c2Ugd2UgZG8gbm90IGRlcGVuZCBvbiByZXNvbHZpbmcgdGhlIFByb21pc2UgKGkuZS4sIGEgcmVzcG9uc2UgdG8gdGhlCiAgICogICAgIHBhZ2UgdmlzaXQgc3RvcCBtZXNzYWdlKS4KICAgKiBAbW9kdWxlIHdlYlNjaWVuY2UucGFnZU1hbmFnZXIuY29udGVudAogICAqLwoKICAvLyBJSUZFIHdyYXBwZXIgdG8gYWxsb3cgZWFybHkgcmV0dXJuCiAgKGZ1bmN0aW9uICgpIHsKCiAgICAgIC8vIENoZWNrIGlmIHRoZSBwYWdlTWFuYWdlciBjb250ZW50IHNjcmlwdCBoYXMgYWxyZWFkeSBydW4gb24gdGhpcyBwYWdlCiAgICAgIC8vIElmIGl0IGhhcywgYmFpbCBvdXQKICAgICAgaWYoKCJ3ZWJTY2llbmNlIiBpbiB3aW5kb3cpICYmICgicGFnZU1hbmFnZXIiIGluIHdpbmRvdy53ZWJTY2llbmNlKSkgewogICAgICAgICAgcmV0dXJuOwogICAgICB9CgogICAgICAvLyBDb25zdHJ1Y3QgYSB3ZWJTY2llbmNlLnBhZ2VNYW5hZ2VyIG9iamVjdCBvbiB0aGUgYHdpbmRvd2AgZ2xvYmFsCiAgICAgIC8vIEFsbCB0aGUgcHVibGljIHBhZ2VNYW5hZ2VyIGZ1bmN0aW9uYWxpdHkgdGhhdCBpcyBhdmFpbGFibGUgaW4gdGhlIGNvbnRlbnQKICAgICAgLy8gc2NyaXB0IGVudmlyb25tZW50IGlzIGV4cG9zZWQgdGhyb3VnaCB0aGlzIG9iamVjdAogICAgICBpZighKCJ3ZWJTY2llbmNlIiBpbiB3aW5kb3cpKSB7CiAgICAgICAgICB3aW5kb3cud2ViU2NpZW5jZSA9IHsgfTsKICAgICAgfQogICAgICB3aW5kb3cud2ViU2NpZW5jZS5wYWdlTWFuYWdlciA9IHsgfTsKICAgICAgY29uc3QgcGFnZU1hbmFnZXIgPSB3aW5kb3cud2ViU2NpZW5jZS5wYWdlTWFuYWdlcjsKCiAgICAgIC8qKgogICAgICAgKiBSZXR1cm5zIGEgY29weSBvZiB0aGUgVVJMIHN0cmluZyBmcm9tIGB3aW5kb3cubG9jYXRpb24uaHJlZmAsIHdpdGhvdXQgYW55CiAgICAgICAqIGhhc2ggYXQgdGhlIGVuZC4gV2UgY2Fub25pY2FsaXplIFVSTHMgd2l0aG91dCB0aGUgaGFzaCBiZWNhdXNlIGp1bXBpbmcKICAgICAgICogYmV0d2VlbiBwYXJ0cyBvZiBhIHBhZ2UgKGFzIGluZGljYXRlZCBieSBhIGhhc2gpIHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBwYWdlCiAgICAgICAqIG5hdmlnYXRpb24uCiAgICAgICAqIEByZXR1cm5zIHtzdHJpbmd9CiAgICAgICAqLwogICAgICBmdW5jdGlvbiBsb2NhdGlvbkhyZWZXaXRob3V0SGFzaCgpIHsKICAgICAgICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpOwogICAgICAgICAgdXJsT2JqLmhhc2ggPSAiIjsKICAgICAgICAgIHJldHVybiB1cmxPYmouaHJlZjsKICAgICAgfQoKICAgICAgLyoqCiAgICAgICAqIExvZyBhIGRlYnVnZ2luZyBtZXNzYWdlIHRvIGBjb25zb2xlLmRlYnVnYCBpbiBhIHN0YW5kYXJkaXplZCBmb3JtYXQuCiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gVGhlIGRlYnVnZ2luZyBtZXNzYWdlLgogICAgICAgKi8KICAgICAgZnVuY3Rpb24gZGVidWdMb2cobWVzc2FnZSkgewogICAgICAgICAgY29uc29sZS5kZWJ1Zyhgd2ViU2NpZW5jZS5wYWdlTWFuYWdlci5jb250ZW50OiAke21lc3NhZ2V9YCk7CiAgICAgIH0KCiAgICAgIC8qKgogICAgICAgKiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGFuIGV2ZW50LCBjb250YWluaW5nIG9ubHkgYSB0aW1lIHN0YW1wLgogICAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBUaW1lU3RhbXBEZXRhaWxzCiAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGV2ZW50IG9jY3VycmVkLgogICAgICAgKi8KCiAgICAgIC8qKgogICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYSB0aW1lIHN0YW1wIHBhcmFtZXRlci4KICAgICAgICogQGNhbGxiYWNrIGNhbGxiYWNrV2l0aFRpbWVTdGFtcAogICAgICAgKiBAcGFyYW0ge1RpbWVTdGFtcERldGFpbHN9IGRldGFpbHMgLSBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmVudC4KICAgICAgICovCgogICAgICAvKioKICAgICAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCBhIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQuCiAgICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFBhZ2VWaXNpdFN0YXJ0RGV0YWlscwogICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gdGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBldmVudCBvY2N1cnJlZC4KICAgICAgICogQHByb3BlcnR5IHtib29sZWFufSBpc0hpc3RvcnlDaGFuZ2UgLSBXaGV0aGVyIHRoZSBwYWdlIHZpc2l0IHdhcyBjYXVzZWQgYnkgYSBjaGFuZ2UgdmlhIHRoZSBIaXN0b3J5IEFQSS4KICAgICAgICovCgogICAgICAvKioKICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIHBhZ2UgdmlzaXQgc3RhcnQgZXZlbnQuCiAgICAgICAqIEBjYWxsYmFjayBwYWdlVmlzaXRTdGFydENhbGxiYWNrCiAgICAgICAqIEBwYXJhbSB7UGFnZVZpc2l0U3RhcnREZXRhaWxzfSBkZXRhaWxzIC0gQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZlbnQuCiAgICAgICAqLwoKICAgICAgLyoqCiAgICAgICAqIEBjYWxsYmFjayBQYWdlTWFuYWdlckFkZExpc3RlbmVyCiAgICAgICAqIEB0ZW1wbGF0ZSB7TGlzdGVuZXJGdW5jdGlvbn0KICAgICAgICogQHBhcmFtIHtMaXN0ZW5lckZ1bmN0aW9ufSBsaXN0ZW5lcgogICAgICAgKi8KCiAgICAgIC8qKgogICAgICAgKiBAY2FsbGJhY2sgUGFnZU1hbmFnZXJSZW1vdmVMaXN0ZW5lcgogICAgICAgKiBAdGVtcGxhdGUge0xpc3RlbmVyRnVuY3Rpb259CiAgICAgICAqIEBwYXJhbSB7TGlzdGVuZXJGdW5jdGlvbn0gbGlzdGVuZXIKICAgICAgICovCgogICAgICAvKioKICAgICAgICogQGNhbGxiYWNrIFBhZ2VNYW5hZ2VySGFzTGlzdGVuZXIKICAgICAgICogQHRlbXBsYXRlIHtMaXN0ZW5lckZ1bmN0aW9ufQogICAgICAgKiBAcGFyYW0ge0xpc3RlbmVyRnVuY3Rpb259IGxpc3RlbmVyCiAgICAgICAqLwoKICAgICAgLyoqCiAgICAgICAqIEBjYWxsYmFjayBQYWdlTWFuYWdlckhhc0FueUxpc3RlbmVycwogICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0KICAgICAgICovCgogICAgICAvKioKICAgICAgICogQHR5cGVkZWYge09iamVjdH0gUGFnZU1hbmFnZXJFdmVudAogICAgICAgKiBAdGVtcGxhdGUge0xpc3RlbmVyRnVuY3Rpb259CiAgICAgICAqIEBwcm9wZXJ0eSB7UGFnZU1hbmFnZXJBZGRMaXN0ZW5lcjxMaXN0ZW5lckZ1bmN0aW9uPn0gYWRkTGlzdGVuZXIgLSBBZGQgYSBsaXN0ZW5lciBmdW5jdGlvbiBmb3IgdGhlIGV2ZW50LgogICAgICAgKiBAcHJvcGVydHkge1BhZ2VNYW5hZ2VyUmVtb3ZlTGlzdGVuZXI8TGlzdGVuZXJGdW5jdGlvbj59IHJlbW92ZUxpc3RlbmVyIC0gUmVtb3ZlIGEgbGlzdGVuZXIgZnVuY3Rpb24gZm9yIHRoZSBldmVudC4KICAgICAgICogQHByb3BlcnR5IHtQYWdlTWFuYWdlckhhc0xpc3RlbmVyPExpc3RlbmVyRnVuY3Rpb24+fSBoYXNMaXN0ZW5lciAtIFdoZXRoZXIgYSBsaXN0ZW5lciBmdW5jdGlvbiBoYXMgYmVlbiBhZGRlZCBmb3IgdGhlIGV2ZW50LgogICAgICAgKiBAcHJvcGVydHkge1BhZ2VNYW5hZ2VySGFzQW55TGlzdGVuZXJzfSBoYXNBbnlMaXN0ZW5lcnMgLSBXaGV0aGVyIGFueSBsaXN0ZW5lciBmdW5jdGlvbnMgaGF2ZSBiZWVuIGFkZGVkIGZvciB0aGUgZXZlbnQuCiAgICAgICAqLwoKICAgICAgLyoqCiAgICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZmlyZWQgd2hlbiBhIHBhZ2UgdmlzaXQgc3RhcnRzLgogICAgICAgKiBAdHlwZSB7UGFnZU1hbmFnZXJFdmVudDxwYWdlVmlzaXRTdGFydENhbGxiYWNrPn0KICAgICAgICovCiAgICAgIHBhZ2VNYW5hZ2VyLm9uUGFnZVZpc2l0U3RhcnQgPSBjcmVhdGVFdmVudCgpOwoKICAgICAgLyoqCiAgICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZmlyZWQgd2hlbiBhIHBhZ2UgdmlzaXQgc3RvcHMuCiAgICAgICAqIEB0eXBlIHtQYWdlTWFuYWdlckV2ZW50PGNhbGxiYWNrV2l0aFRpbWVTdGFtcD59CiAgICAgICAqLwogICAgICBwYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0b3AgPSBjcmVhdGVFdmVudCgpOwoKICAgICAgLyoqCiAgICAgICAqIEFuIGV2ZW50IHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgcGFnZSBhdHRlbnRpb24gc3RhdGUgY2hhbmdlcy4KICAgICAgICogQHR5cGUge1BhZ2VNYW5hZ2VyRXZlbnQ8Y2FsbGJhY2tXaXRoVGltZVN0YW1wPn0KICAgICAgICovCiAgICAgIHBhZ2VNYW5hZ2VyLm9uUGFnZUF0dGVudGlvblVwZGF0ZSA9IGNyZWF0ZUV2ZW50KCk7CgogICAgICAvKioKICAgICAgICogQW4gZXZlbnQgdGhhdCBpcyBmaXJlZCB3aGVuIHRoZSBwYWdlIGF0dGVudGlvbiBzdGF0ZSBjaGFuZ2VzLgogICAgICAgKiBAdHlwZSB7UGFnZU1hbmFnZXJFdmVudDxjYWxsYmFja1dpdGhUaW1lU3RhbXA+fQogICAgICAgKi8KICAgICAgcGFnZU1hbmFnZXIub25QYWdlQXVkaW9VcGRhdGUgPSBjcmVhdGVFdmVudCgpOwoKICAgICAgLyoqCiAgICAgICAqIFNlbmQgYSBtZXNzYWdlIHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UsIHdpdGggYSBjYXRjaCBiZWNhdXNlIGVycm9ycyBjYW4KICAgICAgICogb2NjdXIgaW4gYGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZWAgd2hlbiB0aGUgcGFnZSBpcyB1bmxvb2FkaW5nLgogICAgICAgKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIHNlbmQsIHdoaWNoIHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aAogICAgICAgKiBhIHR5cGUgc3RyaW5nLgogICAgICAgKi8KICAgICAgcGFnZU1hbmFnZXIuc2VuZE1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7CiAgICAgICAgICB0cnkgewogICAgICAgICAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKS5jYXRjaCgocmVhc29uKSA9PiB7CiAgICAgICAgICAgICAgICAgIGRlYnVnTG9nKGBFcnJvciB3aGVuIHNlbmRpbmcgbWVzc2FnZSBmcm9tIGNvbnRlbnQgc2NyaXB0IHRvIGJhY2tncm91bmQgcGFnZTogJHtKU09OLnN0cmluZ2lmeShtZXNzYWdlKX1gKTsKICAgICAgICAgICAgICB9KTsKICAgICAgICAgIH0KICAgICAgICAgIGNhdGNoKGVycm9yKSB7CiAgICAgICAgICAgICAgZGVidWdMb2coYEVycm9yIHdoZW4gc2VuZGluZyBtZXNzYWdlIGZyb20gY29udGVudCBzY3JpcHQgdG8gYmFja2dyb3VuZCBwYWdlOiAke0pTT04uc3RyaW5naWZ5KG1lc3NhZ2UpfWApOwogICAgICAgICAgfQogICAgICB9OwoKICAgICAgLyoqCiAgICAgICAqIFRoZSBmdW5jdGlvbiBmb3IgZmlyaW5nIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50LCB3aGljaCBydW5zIHdoZW5ldmVyIGEgbmV3IHBhZ2UKICAgICAgICogbG9hZHMuIEEgcGFnZSBsb2FkIG1pZ2h0IGJlIGJlY2F1c2Ugb2Ygb3JkaW5hcnkgd2ViIG5hdmlnYXRpb24gKGkuZS4sIGxvYWRpbmcgYSBuZXcKICAgICAgICogSFRNTCBkb2N1bWVudCB3aXRoIGEgYmFzZSBIVFRQKFMpIHJlcXVlc3QpIG9yIGJlY2F1c2UgdGhlIFVSTCBjaGFuZ2VkIHZpYSB0aGUgSGlzdG9yeQogICAgICAgKiBBUEkuCiAgICAgICAqIEBwcml2YXRlCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGV2ZW50IGZpcmVkLgogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0hpc3RvcnlDaGFuZ2U9ZmFsc2VdIC0gV2hldGhlciB0aGlzIHBhZ2UgbG9hZCB3YXMgY2F1c2VkIGJ5IHRoZQogICAgICAgKiBIaXN0b3J5IEFQSS4KICAgICAgICovCiAgICAgIGZ1bmN0aW9uIHBhZ2VWaXNpdFN0YXJ0KHRpbWVTdGFtcCwgaXNIaXN0b3J5Q2hhbmdlID0gZmFsc2UpIHsKICAgICAgICAgIC8vIEFzc2lnbiBhIG5ldyBwYWdlIElECiAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlSWQgPSBnZW5lcmF0ZUlkKCk7CiAgICAgICAgICAvLyBTdG9yZSBhIGNvcHkgb2YgdGhlIFVSTCwgYmVjYXVzZSB3ZSB1c2UgaXQgdG8gY2hlY2sgZm9yIEhpc3RvcnkgQVBJIHBhZ2UgbG9hZHMKICAgICAgICAgIHBhZ2VNYW5hZ2VyLnVybCA9IGxvY2F0aW9uSHJlZldpdGhvdXRIYXNoKCk7CiAgICAgICAgICAvLyBTdG9yZSBhIGNvcHkgb2YgdGhlIHJlZmVycmVyIGZvciBjb252ZW5pZW5jZQogICAgICAgICAgcGFnZU1hbmFnZXIucmVmZXJyZXIgPSBkb2N1bWVudC5yZWZlcnJlci5yZXBlYXQoMSk7CiAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydFRpbWUgPSB0aW1lU3RhbXA7CiAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgSGlzdG9yeSBBUEkgcGFnZSBsb2FkLCBwZXJzaXN0IHRoZSBzdGF0ZXMgZm9yIGF0dGVudGlvbiBhbmQgYXVkaW8KICAgICAgICAgIHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24gPSBpc0hpc3RvcnlDaGFuZ2UgPyBwYWdlTWFuYWdlci5wYWdlSGFzQXR0ZW50aW9uIDogZmFsc2U7CiAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlSGFzQXVkaW8gPSBpc0hpc3RvcnlDaGFuZ2UgPyBwYWdlTWFuYWdlci5wYWdlSGFzQXVkaW8gOiBmYWxzZTsKICAgICAgICAgIC8vIFN0b3JlIHdoZXRoZXIgdGhlIHBhZ2UgdmlzaXQgZXZlbnQgaGFzIGNvbXBsZXRlZCBmaXJpbmcKICAgICAgICAgIHBhZ2VNYW5hZ2VyLnBhZ2VWaXNpdFN0YXJ0ZWQgPSBmYWxzZTsKCiAgICAgICAgICAvLyBTZW5kIHRoZSBwYWdlIHZpc2l0IHN0YXJ0IGV2ZW50IHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UKICAgICAgICAgIHBhZ2VNYW5hZ2VyLnNlbmRNZXNzYWdlKHsKICAgICAgICAgICAgICB0eXBlOiAid2ViU2NpZW5jZS5wYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydCIsCiAgICAgICAgICAgICAgcGFnZUlkOiBwYWdlTWFuYWdlci5wYWdlSWQsCiAgICAgICAgICAgICAgdXJsOiBwYWdlTWFuYWdlci51cmwsCiAgICAgICAgICAgICAgcmVmZXJyZXI6IHBhZ2VNYW5hZ2VyLnJlZmVycmVyLAogICAgICAgICAgICAgIHRpbWVTdGFtcDogcGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnRUaW1lLAogICAgICAgICAgICAgIHByaXZhdGVXaW5kb3c6IGJyb3dzZXIuZXh0ZW5zaW9uLmluSW5jb2duaXRvQ29udGV4dCwKICAgICAgICAgICAgICBpc0hpc3RvcnlDaGFuZ2UKICAgICAgICAgIH0pOwoKICAgICAgICAgIC8vIE5vdGlmeSB0aGUgcGFnZSB2aXNpdCBzdGFydCBldmVudCBsaXN0ZW5lcnMgaW4gdGhlIGNvbnRlbnQgc2NyaXB0IGVudmlyb25tZW50CiAgICAgICAgICBwYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0YXJ0Lm5vdGlmeUxpc3RlbmVycyhbewogICAgICAgICAgICAgIHRpbWVTdGFtcCwKICAgICAgICAgICAgICBpc0hpc3RvcnlDaGFuZ2UKICAgICAgICAgIH1dKTsKCiAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydGVkID0gdHJ1ZTsKCiAgICAgICAgICBkZWJ1Z0xvZyhgUGFnZSB2aXNpdCBzdGFydDogJHtKU09OLnN0cmluZ2lmeShwYWdlTWFuYWdlcil9YCk7CiAgICAgIH0KCiAgICAgIC8qKgogICAgICAgKiBUaGUgZnVuY3Rpb24gZm9yIGZpcmluZyB0aGUgcGFnZSB2aXNpdCBzdG9wIGV2ZW50LCB3aGljaCBydW5zIHdoZW5ldmVyIGEgcGFnZSBjbG9zZXMuCiAgICAgICAqIFRoYXQgY291bGQgYmUgYmVjYXVzZSBvZiBicm93c2VyIGV4aXQsIHRhYiBjbG9zaW5nLCB0YWIgbmF2aWdhdGlvbiB0byBhIG5ldyBwYWdlLCBvcgogICAgICAgKiBhIG5ldyBwYWdlIGxvYWRpbmcgdmlhIHRoZSBIaXN0b3J5IEFQSS4KICAgICAgICogQHByaXZhdGUKICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVTdGFtcCAtIFRoZSB0aW1lIHdoZW4gdGhlIHVuZGVybHlpbmcgZXZlbnQgZmlyZWQuCiAgICAgICAqLwogICAgICBmdW5jdGlvbiBwYWdlVmlzaXRTdG9wKHRpbWVTdGFtcCkgewogICAgICAgICAgLy8gU2VuZCB0aGUgcGFnZSB2aXNpdCBzdG9wIGV2ZW50IHRvIHRoZSBiYWNrZ3JvdW5kIHBhZ2UKICAgICAgICAgIHBhZ2VNYW5hZ2VyLnNlbmRNZXNzYWdlKHsKICAgICAgICAgICAgICB0eXBlOiAid2ViU2NpZW5jZS5wYWdlTWFuYWdlci5wYWdlVmlzaXRTdG9wIiwKICAgICAgICAgICAgICBwYWdlSWQ6IHBhZ2VNYW5hZ2VyLnBhZ2VJZCwKICAgICAgICAgICAgICB1cmw6IHBhZ2VNYW5hZ2VyLnVybCwKICAgICAgICAgICAgICByZWZlcnJlcjogcGFnZU1hbmFnZXIucmVmZXJyZXIsCiAgICAgICAgICAgICAgdGltZVN0YW1wLAogICAgICAgICAgICAgIHBhZ2VWaXNpdFN0YXJ0VGltZTogcGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnRUaW1lLAogICAgICAgICAgICAgIHByaXZhdGVXaW5kb3c6IGJyb3dzZXIuZXh0ZW5zaW9uLmluSW5jb2duaXRvQ29udGV4dAogICAgICAgICAgfSk7CgogICAgICAgICAgLy8gTm90aWZ5IHRoZSBwYWdlIHZpc2l0IHN0b3AgZXZlbnQgbGlzdGVuZXJzIGluIHRoZSBjb250ZW50IHNjcmlwdCBlbnZpcm9ubWVudAogICAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlVmlzaXRTdG9wLm5vdGlmeUxpc3RlbmVycyhbewogICAgICAgICAgICAgIHRpbWVTdGFtcAogICAgICAgICAgfV0pOwoKICAgICAgICAgIGRlYnVnTG9nKGBQYWdlIHZpc2l0IHN0b3A6ICR7SlNPTi5zdHJpbmdpZnkocGFnZU1hbmFnZXIpfWApOwogICAgICB9CgogICAgICAvKioKICAgICAgICogVGhlIGZ1bmN0aW9uIGZvciBmaXJpbmcgdGhlIHBhZ2UgYXR0ZW50aW9uIHVwZGF0ZSBldmVudCwgd2hpY2ggcnVucyB3aGVuZXZlciB0aGUKICAgICAgICogcGFnZSBhdHRlbnRpb24gc3RhdGUgbWlnaHQgaGF2ZSBjaGFuZ2VkLiBUaGUgZnVuY3Rpb24gY29udGFpbnMgbG9naWMgdG8gdmVyaWZ5CiAgICAgICAqIHRoYXQgdGhlIGF0dGVudGlvbiBzdGF0ZSBhY3R1YWxseSBjaGFuZ2VkIGJlZm9yZSBmaXJpbmcgdGhlIGV2ZW50LgogICAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVN0YW1wIC0gVGhlIHRpbWUgd2hlbiB0aGUgdW5kZXJseWluZyBldmVudCBmaXJlZC4KICAgICAgICogQHBhcmFtIHtib29sZWFufSBwYWdlSGFzQXR0ZW50aW9uIC0gVGhlIGxhdGVzdCBhdHRlbnRpb24gc3RhdGUsIGFjY29yZGluZyB0byB0aGUKICAgICAgICogcGFnZU1hbmFnZXIgbW9kdWxlIHJ1bm5pbmcgaW4gdGhlIGJhY2tncm91bmQgcGFnZS4KICAgICAgICovCiAgICAgIGZ1bmN0aW9uIHBhZ2VBdHRlbnRpb25VcGRhdGUodGltZVN0YW1wLCBwYWdlSGFzQXR0ZW50aW9uKSB7CiAgICAgICAgICBpZihwYWdlTWFuYWdlci5wYWdlSGFzQXR0ZW50aW9uID09PSBwYWdlSGFzQXR0ZW50aW9uKQogICAgICAgICAgICAgIHJldHVybjsKCiAgICAgICAgICBwYWdlTWFuYWdlci5wYWdlSGFzQXR0ZW50aW9uID0gcGFnZUhhc0F0dGVudGlvbjsKCiAgICAgICAgICAvLyBOb3RpZnkgdGhlIHBhZ2UgYXR0ZW50aW9uIHVwZGF0ZSBldmVudCBsaXN0ZW5lcnMgaW4gdGhlIGNvbnRlbnQgc2NyaXB0IGVudmlyb25tZW50CiAgICAgICAgICBwYWdlTWFuYWdlci5vblBhZ2VBdHRlbnRpb25VcGRhdGUubm90aWZ5TGlzdGVuZXJzKFt7CiAgICAgICAgICAgICAgdGltZVN0YW1wCiAgICAgICAgICB9XSk7CgogICAgICAgICAgZGVidWdMb2coYFBhZ2UgYXR0ZW50aW9uIHVwZGF0ZTogJHtKU09OLnN0cmluZ2lmeShwYWdlTWFuYWdlcil9YCk7CiAgICAgIH0KCiAgICAgIC8qKgogICAgICAgKiBUaGUgZnVuY3Rpb24gZm9yIGZpcmluZyB0aGUgcGFnZSBhdWRpbyB1cGRhdGUgZXZlbnQsIHdoaWNoIHJ1bnMgd2hlbmV2ZXIgdGhlCiAgICAgICAqIHBhZ2UgYXVkaW8gc3RhdGUgbWlnaHQgaGF2ZSBjaGFuZ2VkLiBUaGUgZnVuY3Rpb24gY29udGFpbnMgbG9naWMgdG8gdmVyaWZ5CiAgICAgICAqIHRoYXQgdGhlIGF1ZGlvIHN0YXRlIGFjdHVhbGx5IGNoYW5nZWQgYmVmb3JlIGZpcmluZyB0aGUgZXZlbnQuCiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lU3RhbXAgLSBUaGUgdGltZSB3aGVuIHRoZSB1bmRlcmx5aW5nIGV2ZW50IGZpcmVkLgogICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhZ2VIYXNBdWRpbyAtIFRoZSBsYXRlc3QgYXVkaW8gc3RhdGUsIGFjY29yZGluZyB0byB0aGUKICAgICAgICogcGFnZU1hbmFnZXIgbW9kdWxlIHJ1bm5pbmcgaW4gdGhlIGJhY2tncm91bmQgcGFnZS4KICAgICAgICovCiAgICAgIGZ1bmN0aW9uIHBhZ2VBdWRpb1VwZGF0ZSh0aW1lU3RhbXAsIHBhZ2VIYXNBdWRpbykgewogICAgICAgICAgaWYocGFnZU1hbmFnZXIucGFnZUhhc0F1ZGlvID09PSBwYWdlSGFzQXVkaW8pCiAgICAgICAgICAgICAgcmV0dXJuOwoKICAgICAgICAgIHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdWRpbyA9IHBhZ2VIYXNBdWRpbzsKCiAgICAgICAgICAvLyBOb3RpZnkgdGhlIHBhZ2UgYXVkaW8gdXBkYXRlIGV2ZW50IGxpc3RlbmVycyBpbiB0aGUgY29udGVudCBzY3JpcHQgZW52aXJvbm1lbnQKICAgICAgICAgIHBhZ2VNYW5hZ2VyLm9uUGFnZUF1ZGlvVXBkYXRlLm5vdGlmeUxpc3RlbmVycyhbewogICAgICAgICAgICAgIHRpbWVTdGFtcAogICAgICAgICAgfV0pOwoKICAgICAgICAgIGRlYnVnTG9nKGBQYWdlIGF1ZGlvIHVwZGF0ZTogJHtKU09OLnN0cmluZ2lmeShwYWdlTWFuYWdlcil9YCk7CiAgICAgIH0KCiAgICAgIC8vIEhhbmRsZSBldmVudHMgc2VudCBmcm9tIHRoZSBiYWNrZ3JvdW5kIHBhZ2UKICAgICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSkgPT4gewogICAgICAgICAgaWYobWVzc2FnZS50eXBlID09PSAid2ViU2NpZW5jZS5wYWdlTWFuYWdlci5wYWdlQXR0ZW50aW9uVXBkYXRlIikgewogICAgICAgICAgICAgIHBhZ2VBdHRlbnRpb25VcGRhdGUobWVzc2FnZS50aW1lU3RhbXAsIG1lc3NhZ2UucGFnZUhhc0F0dGVudGlvbik7CiAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgfQoKICAgICAgICAgIC8vIElmIHRoZSBiYWNrZ3JvdW5kIHBhZ2UgZGV0ZWN0ZWQgYSBVUkwgY2hhbmdlLCB0aGlzIGNvdWxkIGJlIGJlbGF0ZWQKICAgICAgICAgIC8vIG5vdGlmaWNhdGlvbiBhYm91dCBhIGNvbnZlbnRpb25hbCBuYXZpZ2F0aW9uIG9yIGl0IGNvdWxkIGJlIGEgcGFnZQogICAgICAgICAgLy8gbG9hZCB2aWEgdGhlIEhpc3RvcnkgQVBJCiAgICAgICAgICAvLyBXZSBjYW4gZGlzdGluZ3Vpc2ggdGhlc2UgdHdvIHNjZW5hcmlvcyBieSBjaGVja2luZyB3aGV0aGVyIHRoZSBVUkwKICAgICAgICAgIC8vIHZpc2libGUgdG8gdGhlIHVzZXIgKGB3aW5kb3cubG9jYXRpb24uaHJlZmApIGhhcyBjaGFuZ2VkIHNpbmNlIHRoZQogICAgICAgICAgLy8gcGFnZSB2aXNpdCBzdGFydAogICAgICAgICAgaWYoKG1lc3NhZ2UudHlwZSA9PT0gIndlYlNjaWVuY2UucGFnZU1hbmFnZXIudXJsQ2hhbmdlZCIpICYmCiAgICAgICAgICAgICAgKGxvY2F0aW9uSHJlZldpdGhvdXRIYXNoKCkgIT09IHBhZ2VNYW5hZ2VyLnVybCkpIHsKICAgICAgICAgICAgICBwYWdlVmlzaXRTdG9wKG1lc3NhZ2UudGltZVN0YW1wKTsKICAgICAgICAgICAgICBwYWdlVmlzaXRTdGFydChtZXNzYWdlLnRpbWVTdGFtcCwgdHJ1ZSk7CiAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgfQoKICAgICAgICAgIGlmKG1lc3NhZ2UudHlwZSA9PT0gIndlYlNjaWVuY2UucGFnZU1hbmFnZXIucGFnZUF1ZGlvVXBkYXRlIikgewogICAgICAgICAgICAgIHBhZ2VBdWRpb1VwZGF0ZShtZXNzYWdlLnRpbWVTdGFtcCwgbWVzc2FnZS5wYWdlSGFzQXVkaW8pOwogICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgIH0KICAgICAgfSk7CgogICAgICAvLyBJZiB0aGVyZSBhcmUgYW55IG90aGVyIGNvbnRlbnQgc2NyaXB0cyB0aGF0IGFyZSB3YWl0aW5nIGZvciB0aGUgQVBJIHRvIGxvYWQsCiAgICAgIC8vIGV4ZWN1dGUgdGhlIGNhbGxiYWNrcyBmb3IgdGhvc2UgY29udGVudCBzY3JpcHRzCiAgICAgIGlmKCJwYWdlTWFuYWdlckhhc0xvYWRlZCIgaW4gd2luZG93KSB7CiAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHdpbmRvdy5wYWdlTWFuYWdlckhhc0xvYWRlZCkpCiAgICAgICAgICAgICAgZm9yKGNvbnN0IGNhbGxiYWNrIG9mIHdpbmRvdy5wYWdlTWFuYWdlckhhc0xvYWRlZCkKICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09PSAiZnVuY3Rpb24iKSB7CiAgICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7CiAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICBjYXRjaChlcnJvcikgewogICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnTG9nKGBFcnJvciBpbiBjYWxsYmFjayBmb3IgcGFnZU1hbmFnZXIgbG9hZDogJHtlcnJvcn1gKTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgZGVsZXRlIHdpbmRvdy5wYWdlTWFuYWdlckhhc0xvYWRlZDsKICAgICAgfQoKICAgICAgLy8gU2VuZCB0aGUgcGFnZSB2aXNpdCBzdGFydCBldmVudCBmb3IgdGhlIGZpcnN0IHRpbWUKICAgICAgcGFnZVZpc2l0U3RhcnQoTWF0aC5mbG9vcih3aW5kb3cucGVyZm9ybWFuY2UudGltZU9yaWdpbikpOwoKICAgICAgLy8gU2VuZCB0aGUgcGFnZSB2aXNpdCBzdG9wIGV2ZW50IG9uIHRoZSB3aW5kb3cgdW5sb2FkIGV2ZW50CiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJ1bmxvYWQiLCAoZXZlbnQpID0+IHsKICAgICAgICAgIHBhZ2VWaXNpdFN0b3AoRGF0ZS5ub3coKSk7CiAgICAgIH0pOwogICAgICAKICB9KSgpOwoKfSgpKTsK";

/**
 * # Overview
 * This module addresses several challenges for studying user engagement with web content.
 *   * __Syncing Measurements and Interventions.__ A study that uses `WebScience` will
 *     often involve multiple measurements or interventions on a webpage. The
 *     `pageManager` module enables studies to sync these measurements and interventions
 *     by assigning a random unique identifier to each webpage.
 *   * __Generating Page Lifecycle Events.__ Measurements and interventions are often
 *     linked to specific events in the webpage lifecyle. The `pageManager` module
 *     standardizes a set of webpage lifecycle events.
 *   * __Tracking User Attention.__ Measurements and interventions often depend on user
 *     attention to web content. The `pageManager` module provides a standardized
 *     attention model that incorporates tab switching, window switching, application
 *     switching, locked screens, and user mouse and keyboard input.
 *   * __Generating Audio Events.__ This module provides events for webpage audio,
 *     enabling measurements and interventions based on media playback.
 *   * __Bridging the Background and Content Script Environments.__ WebExtensions
 *     includes two distinct execution environments: background scripts and content
 *     scripts. These execution environments are, unfortunately, only loosely bound
 *     together by tab IDs. As a result, there can be race conditions---the background
 *     and content environments can have mismatched states, such that messages arrive
 *     at the wrong webpage or are attributed to the wrong webpage. This module
 *     provides provides page lifecycle, user attention, and audio events that are
 *     bound to specific webpages.
 *
 * # Pages
 * This module creates an abstraction over webpages as perceived by users (i.e., when
 * content loads with a new HTTP(S) URL in the browser bar or the page visibly reloads).
 * Note that the History API enables web content to modify the URL without loading a new
 * HTML document via HTTP(S) or creating a new Document object. This module treats
 * a URL change via the History API as equivalent to traditional webpage navigation,
 * because (by design) it appears identical to the user. Accounting for the History
 * API is important, because it is used on some exceptionally popular websites (e.g.,
 * YouTube).
 *
 * # Page IDs
 * Each page ID is a random (v4) UUID, consistent with RFC4122.
 *
 * # Page Lifecycle
 * Each webpage has the following lifecycle events, which fire in both the background
 * page and content script environments.
 *   * Page Visit Start - The browser has started to load a webpage in a tab. This
 *     event is fired early in context script execution (i.e., soon after
 *     `document_start`). For a webpage with a new Document, the event is
 *     timestamped with the time the `window` object was created (the time origin
 *     from the High Resolution Time Level 2 API, in ms). For a webpage that does not
 *     have a new Document (i.e., resulting from the History API), the event is
 *     timestamped with the URL change in the WebNavigation API.
 *   * Page Visit Stop - The browser is unloading the webpage. Ordinarily this
 *     event fires and is timestamped with the `window` unload event. When the page
 *     changes via the History API, this event fires and is timestamped with the URL
 *     change in the WebNavigation API.
 *
 * # Attention Tracking
 * Attention to a page is defined as satisfying all of the following conditions.
 *   * The tab is the active tab in its browser window.
 *   * The window containing the tab is the current browser window.
 *   * The current browser window has focus in the operating system.
 *   * The operating system is not displaying a lock screen or screen saver.
 *   * Optional: The user has provided mouse or keyboard input within a specified time
 *     interval.
 *
 * In the content script environment, each page has an attention status, and an event
 * fires when that status changes. Attention update events are timestamped with events
 * from the WebExtensions `tabs`, `windows`, and `idle` APIs.
 *
 * # Audio Events
 * In the content script environment, each page has an audio status, and an event fires
 * when that status changes. Audio update events fire and are timestamped with events
 * from the WebExtensions `tabs` API.
 *
 * # Event Ordering
 * This module guarantees the ordering of page lifecycle, attention, and audio events.
 *   * Page visit start and page visit stop only fire once for each page, in that order.
 *   * Page attention and audio update events will only occur between page visit start
 *     and stop events.
 *
 * # Additional Implementation Notes
 * This module depends on the `idle` API, which has a couple quirks in Firefox:
 *   * There is a five-second interval when polling idle status from the operating
 *     system.
 *   * Depending on the platform, the idle API reports either time since user input to
 *     the browser or time since user input to the operating system.
 *
 * The polling interval coarsens the timing of page attention events related to idle state.
 * As long as the polling interval is relatively short in comparison to the idle threshold,
 * that should not be an issue.
 *
 * The platform-specific meaning of idle state should also not be an issue. There is only a
 * difference between the two meanings of idle state when the user is providing input to
 * another application; if the user is providing input to the browser, or is not providing
 * input at all, the two meanings are identical. In the scenario where the user is providing
 * input to another application, the browser will lose focus in the operating system; this
 * module will detect that with the windows API and fire a page attention event (if needed).
 *
 * Some implementation quirks to be aware of for future development on this module:
 *   * Non-browser windows do not appear in the results of `windows.getAll()`, and calling
 *     `windows.get()` on a non-browser window throws an error. Switching focus to a non-
 *     browser window will, however, fire the `windows.onFocusChanged` event. The module
 *     assumes that if `windows.onFocusChanged` fires with an unknown window, that window
 *     is a non-browser window.
 *   * The module assumes that valid tab IDs and window IDs are always >= 0.
 *
 * # Known Issues
 *   * The background script sends update messages to tabs regardless of whether they
 *     are ordinary tabs or have the pageManager content script running, because the
 *     background script does not track window types or tab content. The errors
 *     generated by this issue are caught in `messaging.sendMessageToTab`, and the
 *     issue should not cause any problems for studies.
 *
 * # Possible Improvements
 *   * Rebuild a page attention update event in the background page environment.
 *   * Rebuild the capability to fire events for pages that are already open when the module
 *     loads.
 *   * Add logic to handle the situation where the content script execution environment crashes,
 *     so the page visit stop message doesn't fire from the associated content script.
 *   * Add an event in the content script for detecting when content has lazily loaded into the
 *     DOM after the various DOM loading events (e.g., on Twitter).
 * @module webScience.pageManager
 */

check({
    module: "webScience.pageManager",
    requiredPermissions: [ "webNavigation" ],
    suggestedOrigins: [ "<all_urls>" ]
});

/**
 * The threshold (in seconds) for determining whether the browser has the user's attention,
 * based on mouse and keyboard input.
 * @private
 * @constant {number}
 * @default
 */
const idleThreshold = 15;

/**
 * Whether to consider user input in determining attention state.
 * @private
 * @constant {boolean}
 * @default
 */
const considerUserInputForAttention = true;

/**
 * Additional information about a page visit start event.
 * @typedef {Object} PageVisitStartDetails
 * @param {number} pageId - The ID for the page, unique across browsing sessions.
 * @param {number} tabId - The ID for the tab containing the page, unique to the browsing session.
 * @param {number} windowId - The ID for the window containing the page, unique to the browsing session.
 * Note that tabs can subsequently move between windows.
 * @param {string} url - The URL of the page loading in the tab, without any hash.
 * @param {string} referrer - The referrer URL for the page loading in the tab, or `""` if
 * there is no referrer.
 * @param {number} pageVisitStartTime - The time when the underlying event fired.
 * @param {boolean} privateWindow - Whether the page is in a private window.
 * @property {boolean} isHistoryChange - Whether the page visit was caused by a change via the History API.
 */

/**
 * A listener function for page visit start events.
 * @callback pageVisitStartListener
 * @param {PageVisitStartDetails} details - Additional information about the page visit start event.
 */

/**
 * Additional information about a page visit start event listener function.
 * @typedef {Object} PageVisitStartListenerOptions
 * @property {boolean} privateWindows - Whether to notify the listener function for events in private windows.
 */

/**
 * An event that is fired when a page visit starts.
 * @constant {Events.Event<pageVisitStartListener, PageVisitStartListenerOptions>}
 */
const onPageVisitStart = createEvent({
    name: "webScience.pageManager.onPageVisitStart",
    // Make sure the module is initialized when a listener is added
    addListenerCallback: listener => initialize$1(),
    // Filter notifications for events in private windows
    notifyListenersCallback: (listener, [ details ], options) => {
        if(!details.privateWindow || (("privateWindows" in options) && options.privateWindows))
            return true;
        return false;
    }
});

/**
 * Notify listeners for the page visit start event.
 * @param {PageVisitStartDetails} details - Additional information about the page visit start event.
 * @private
 */
function pageVisitStart(details) {
    onPageVisitStart.notifyListeners([ details ]);
}

/**
 * Additional information about a page visit stop event.
 * @typedef {Object} PageVisitStopDetails
 * @param {number} pageId - The ID for the page, unique across browsing sessions.
 * @param {string} url - The URL of the page loading in the tab, without any hash.
 * @param {string} referrer - The referrer URL for the page loading in the tab, or `""` if
 * there is no referrer.
 * @param {number} pageVisitStartTime - The time when the page visit started.
 * @param {number} pageVisitStopTime - The time when the underlying event fired.
 * @param {boolean} privateWindow - Whether the page is in a private window.
 */

/**
 * A listener function for page visit stop events.
 * @callback pageVisitStopListener
 * @param {PageVisitStopDetails} details - Additional information about the page visit stop event.
 */

/**
 * Additional information about a page visit start stop listener function.
 * @typedef {Object} PageVisitStopListenerOptions
 * @property {boolean} privateWindows - Whether to notify the listener function for events in private windows.
 */

/**
 * An event that is fired when a page visit starts.
 * @constant {Events.Event<pageVisitStopListener, PageVisitStartListenerOptions>}
 */
const onPageVisitStop = createEvent({
    name: "webScience.pageManager.onPageVisitStop",
    // Make sure the module is initialized when a listener is added
    addListenerCallback: listener => initialize$1(),
    // Filter notifications for events in private windows
    notifyListenersCallback: (listener, [ details ], options) => {
        if(!details.privateWindow || (("privateWindows" in options) && options.privateWindows))
            return true;
        return false;
    }
});

/**
 * Notify listeners for the page visit stop event.
 * @param {PageVisitStopDetails} details - Additional information about the page visit stop event.
 * @private
 */
function pageVisitStop(details) {
    onPageVisitStop.notifyListeners([ details ]);
}

/**
 * Notify a page that its attention state may have changed.
 * @private
 * @param {number} tabId - The tab containing the page, unique to the browsing session.
 * @param {boolean} pageHasAttention - Whether the tab containing the page has the user's
 * attention.
 * @param {number} [timeStamp=Date.now()] - The time when the underlying browser event fired.
 */
function sendPageAttentionUpdate(tabId, pageHasAttention, timeStamp = Date.now()) {
    sendMessageToTab(tabId, {
        type: "webScience.pageManager.pageAttentionUpdate",
        pageHasAttention,
        timeStamp
    });
}

/**
 * The currently active tab in the currently focused browsing window. Has the value -1
 * if there is no such tab.
 * @private
 * @type {number}
 * @default
 */
let currentActiveTab = -1;

/**
 * The currently focused browsing window. Has the value -1 if there is no such window.
 * @private
 * @type {number}
 * @default
 */
let currentFocusedWindow = -1;

/**
 * Checks for the following conditions:
 *   * The tab is the currently active tab in the currently focused window.
 *   * The window is the currently focused window.
 *   * The browser is active (i.e., not idle), if the module is configured to
 *     consider user input in determining the attention state.
 * @private
 * @param {number} tabId - The tab to check.
 * @param {number} windowId - The window to check.
 */
function checkForAttention(tabId, windowId) {
    return ((currentActiveTab === tabId) && (currentFocusedWindow === windowId) && (browserIsActive ));
}

/**
 * @typedef {Object} WindowDetails
 * @property {number} activeTab - The ID of the active tab in the window,
 * or -1 if there is no active tab.
 * @private
 */

/**
 * A Map that tracks the current state of browser windows. We need this cached
 * state to avoid asynchronous queries when the focused window changes. The
 * keys are window IDs and the values are WindowDetails objects.
 * @private
 * @constant {Map<number,WindowDetails>}
 * @default
 */
const windowState = new Map();

/**
 * Update the window state cache with new information about a window.
 * @private
 * @param {number} windowId - The window ID.
 * @param {WindowDetails} windowDetails - The new information about the
 * window.
 */
function updateWindowState(windowId, { activeTab }) {
    let windowDetails = windowState.get(windowId);

    if(windowDetails === undefined) {
        windowDetails = { activeTab: -1 };
        windowState.set(windowId, windowDetails);
    }

    if(activeTab !== undefined)
        windowDetails.activeTab = activeTab;
}

/**
 * Whether the browser is active or idle. Ignored if the module is configured to
 * not consider user input when determining the attention state.
 * @private
 * @type {boolean}
 * @default
 */
let browserIsActive = false;

/**
 * Whether the module is in the process of configuring browser event handlers
 * and caching initial state.
 * @private
 * @type {boolean}
 */
let initializing = false;

/**
 * Whether the module has started configuring browser event handlers and caching
 * initial state.
 * @private
 * @type {boolean}
 */
let initialized$2 = false;

/**
 * Initialize `pageManager` in the background and content script environments. If you are using
 * `pageManager` events in content scripts but not background scripts, you must call this function.
 * If you are using `pageManager` events in background scripts, this function is automatically called
 * when adding a listener for an event. This function configures message passing between the
 * `pageManager` background script and content script, registers browser event handlers, caches
 * initial state, and registers the `pageManager` content script. It runs only once.
 */
async function initialize$1() {
    if(initialized$2 || initializing)
        return;
    initializing = true;

    // Register message listeners and schemas for communicating with the content script

    // The content script sends a webScience.pageManger.pageVisitStart message when
    // there is a page visit start event
    onMessage.addListener((pageVisitStartInfo, sender) => {
        // Notify the content script if it has attention
        // We can't send this message earlier (e.g., when the tab URL changes) because we need to know the content
        // script is ready to receive the message
        if(checkForAttention(sender.tab.id, sender.tab.windowId))
            sendPageAttentionUpdate(sender.tab.id, true, Date.now());

        pageVisitStart({
            pageId: pageVisitStartInfo.pageId,
            tabId: sender.tab.id,
            windowId: sender.tab.windowId,
            url: pageVisitStartInfo.url,
            referrer: pageVisitStartInfo.referrer,
            pageVisitStartTime: pageVisitStartInfo.timeStamp,
            privateWindow: pageVisitStartInfo.privateWindow,
            isHistoryChange: pageVisitStartInfo.isHistoryChange
        });
    }, {
        type: "webScience.pageManager.pageVisitStart",
        schema: {
            pageId: "string",
            url: "string",
            referrer: "string",
            timeStamp: "number",
            privateWindow: "boolean",
            isHistoryChange: "boolean"
        }
    });

    // The content script sends a webScience.pageManger.pageVisitStop message when
    // there is a page visit stop event
    // We don't currently include tab or window information with the page visit stop event
    // because the sender object doesn't include that information when the tab is closing
    onMessage.addListener((pageVisitStopInfo) => {
        pageVisitStop({
            pageId: pageVisitStopInfo.pageId,
            url: pageVisitStopInfo.url,
            referrer: pageVisitStopInfo.referrer,
            pageVisitStartTime: pageVisitStopInfo.timeStamp,
            pageVisitStopTime: pageVisitStopInfo.timeStamp,
            privateWindow: pageVisitStopInfo.privateWindow
        });
    }, {
        type: "webScience.pageManager.pageVisitStop",
        schema: {
            pageId: "string",
            url: "string",
            referrer: "string",
            timeStamp: "number",
            pageVisitStartTime: "number",
            privateWindow: "boolean"
        }
    });

    // The background script sends a webScience.pageManager.pageAttentionUpdate message
    // when the attention state of the page may have changed
    registerSchema("webScience.pageManager.pageAttentionUpdate", {
        timeStamp: "number",
        pageHasAttention: "boolean"
    });

    // The background script sends a webScience.pageManager.urlChanged message when
    // the URL changes for a tab, indicating a possible page load with the History API
    registerSchema("webScience.pageManager.urlChanged", {
        timeStamp: "number"
    });

    // The background script sends a webScience.pageManager.pageAudioUpdate message
    // when the audio state of the page may have changed
    registerSchema("webScience.pageManager.pageAudioUpdate", {
        pageHasAudio: "boolean",
        timeStamp: "number"
    });

    // Register background script event handlers

    // If a tab's audible state changed, send webScience.pageManager.pageAudioUpdate
    browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
        if(!initialized$2)
            return;
        const timeStamp = Date.now();

        sendMessageToTab(tabId, {
            type: "webScience.pageManager.pageAudioUpdate",
            pageHasAudio: changeInfo.audible,
            timeStamp
        });
    }, {
        urls: [ "http://*/*", "https://*/*" ],
        properties: [ "audible" ]
    });

    // If a tab's URL changed because of the History API, send webScience.pageManager.urlChanged
    browser.webNavigation.onHistoryStateUpdated.addListener((details) => {
        if(!initialized$2)
            return;
        const timeStamp = Date.now();

        sendMessageToTab(details.tabId, {
            type: "webScience.pageManager.urlChanged",
            timeStamp
        });
    }, {
        url: [ { schemes: [ "http", "https" ] } ]
    });

    browser.tabs.onRemoved.addListener((tabId, removeInfo) => {
        if(!initialized$2)
            return;

        // We don't have to update the window state here, because either there is
        // another tab in the window that will become active (and tabs.onActivated
        // will fire), or there is no other tab in the window so the window closes
        // (and windows.onRemoved will fire)

        // If this is the active tab, forget it
        if(currentActiveTab === tabId)
            currentActiveTab = -1;
    });

    // Handle when the active tab in a window changes
    browser.tabs.onActivated.addListener(activeInfo => {
        if(!initialized$2)
            return;
        const timeStamp = Date.now();

        // If this is a non-browser tab, ignore it
        if((activeInfo.tabId === browser.tabs.TAB_ID_NONE) || (activeInfo.tabId < 0) ||
            (activeInfo.windowId < 0))
            return;

        // Update the window state cache with the new
        // active tab ID
        updateWindowState(activeInfo.windowId, {
            activeTab: activeInfo.tabId
        });

        // If there isn't a focused window, or the tab update is not in the focused window, ignore it
        if((currentFocusedWindow < 0) || (activeInfo.windowId != currentFocusedWindow))
            return;

        // If the browser is active or (optionally) we are not considering user input,
        // notify the current page with attention that it no longer has attention, and notify
        // the new page with attention that is has attention
        if((browserIsActive || !considerUserInputForAttention)) {
            if((currentActiveTab >= 0) && (currentFocusedWindow >= 0))
                sendPageAttentionUpdate(currentActiveTab, false, timeStamp);
            sendPageAttentionUpdate(activeInfo.tabId, true, timeStamp);
        }

        // Remember the new active tab
        currentActiveTab = activeInfo.tabId;
    });

    browser.windows.onRemoved.addListener(windowId => {
        if(!initialized$2)
            return;

        // If we have cached state for this window, drop it
        windowState.delete(windowId);
    });

    browser.windows.onFocusChanged.addListener(windowId => {
        if(!initialized$2)
            return;
        const timeStamp = Date.now();

        // If the browser is active or (optionally) we are not considering user input, and if
        // if there is an active tab in a focused window, notify the current page with attention
        // that it no longer has attention
        if((browserIsActive || !considerUserInputForAttention) && ((currentActiveTab >= 0) && (currentFocusedWindow >= 0)))
            sendPageAttentionUpdate(currentActiveTab, false, timeStamp);

        // If the browser has lost focus in the operating system, remember
        // tab ID = -1 and window ID = -1, and do not notify any page that it has attention
        // Note that this check should happen before the browser.windows.get await below,
        // because quick sequential events can cause the browser.windows.onFocusChanged
        // listener to run again before the await resolves and trigger errors if currentActiveTab
        // and currentFocusedWindow are not set properly
        if (windowId === browser.windows.WINDOW_ID_NONE) {
            currentActiveTab = -1;
            currentFocusedWindow = -1;
            return;
        }

        // Get information about the focused window from the cached window state
        const focusedWindowDetails = windowState.get(windowId);

        // If we haven't seen this window before, that means it's not a browser window,
        // so remember tab ID = -1 and window ID -1, and do not notify any page that it has attention
        if(focusedWindowDetails === undefined) {
            currentActiveTab = -1;
            currentFocusedWindow = -1;
            return;
        }

        // Otherwise, remember the new active tab and focused window, and if the browser is active
        // or (optionally) we are not considering user input, notify the page in the tab that it
        // has attention
        currentActiveTab = focusedWindowDetails.activeTab;
        currentFocusedWindow = windowId;
        if(browserIsActive || !considerUserInputForAttention)
            sendPageAttentionUpdate(currentActiveTab, true, timeStamp);
    });

    // Handle when the browser activity state changes
    // This listener abstracts the browser activity state into two categories: active and inactive
    // Active means the user has recently provided input to the browser, inactive means any other
    // state (regardless of whether a screensaver or lock screen is enabled)

    // Note that we have to call idle.onStateChanged.addListener before we call
    // idle.queryState, so this comes before caching the initial state
    {
        await onStateChanged.addListener(newState => {
            if(!initialized$2)
                return;
            const timeStamp = Date.now();

            // If the browser is not transitioning between active and inactive states, ignore the event
            if((browserIsActive) === (newState === "active"))
                return;

            // Remember the flipped browser activity state
            browserIsActive = !browserIsActive;

            // If there isn't an active tab in a focused window, we don't need to send attention events
            if((currentActiveTab < 0) || (currentFocusedWindow < 0))
                return;

            // Send an attention state change event to the current active tab, reflecting the browser activity state
            sendPageAttentionUpdate(currentActiveTab, browserIsActive, timeStamp);
        }, idleThreshold);
    }

    // Cache the initial idle, window, and tab state

    browserIsActive = (queryState(idleThreshold) === "active");

    const openWindows = await browser.windows.getAll({
        populate: true
    });
    for(const openWindow of openWindows) {
        // If the window doesn't have a window ID, ignore it
        // This shouldn't happen, but checking anyway since
        // the id property is optional in the windows.Window
        // type
        if(!("id" in openWindow))
            continue;
        // Iterate the tabs in the window to cache tab state
        // and find the active tab in the window
        let activeTabInOpenWindow = -1;
        if("tabs" in openWindow)
            for(const tab of openWindow.tabs) {
                if(tab.active)
                    activeTabInOpenWindow = tab.id;
            }
        updateWindowState(openWindow.id, {
            activeTab: activeTabInOpenWindow
        });

        // If this is the focused window and it is a normal or popup
        // window, remember the window ID and active tab ID (if any)
        // If there is no focused window, or the focused window isn't
        // a normal or popup window, this block will not run and we
        // will retain the default values of tab ID = -1 and window
        // ID = -1
        if(openWindow.focused) {
            currentFocusedWindow = openWindow.id;
            currentActiveTab = activeTabInOpenWindow;
        }
    }

    // Register the pageManager content script for all HTTP(S) URLs
    browser.contentScripts.register({
        matches: [ "http://*/*", "https://*/*" ],
        js: [{
            code: dataUrlToString(pageManagerContentScript)
        }],
        runAt: "document_start"
    });

    initializing = false;
    initialized$2 = true;
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

/**
 * This module provides functionality for generating random identifiers.
 * Studies can use these identifiers to uniquely label events and other
 * items of interest.
 * @module webScience.id
 */

/**
 * Generate a random (v4) UUID, consistent with RFC4122. These values
 * include 122 bits of cryptographic randomness.
 * @returns {string} The new UUID.
 */
function generateId() {
    return v4();
}

/**
 * An array of AMP cache domains, represented as domains and paths.
 * This representation facilitates parsing AMP urls in `LinkResolution`.
 * Note that the Cloudflare cache is deprecated, but we retain it for
 * completeness.
 * @constant {string[]}
 * @see {@link https://cdn.ampproject.org/caches.json}
 * @see {@link https://blog.cloudflare.com/announcing-amp-real-url/}
 */
const ampCacheDomains = [
    "amp.cloudflare.com", // Cloudflare AMP Cache
    "cdn.ampproject.org", // Google AMP Cache
    "www.bing-amp.com" // Microsoft Bing AMP Cache
];

/**
 * An array of AMP viewers, represented as domains with paths.
 * This representation facilitates parsing AMP urls in `LinkResolution`.
 * @constant {string[]}
 * @see {@link https://developers.google.com/search/docs/guides/about-amp}
 */
const ampViewerDomainsAndPaths = [
    "www.google.com/amp" // Google AMP Viewer
];

/**
 * This module provides functionality for resolving shortened and shimmed URLs.
 * @module webScience.linkResolution
 */

check({
    module: "webScience.linkResolution",
    requiredPermissions: [ "webRequest", "webRequestBlocking" ],
    suggestedOrigins: [ "<all_urls>" ]
});

// AMP caches and viewers

/**
 * A RegExp that matches and parses AMP cache and viewer URLs. If there is a match, the RegExp provides several
 * named capture groups.
 *   * AMP Cache Matches
 *     * `ampCacheSubdomain` - The subdomain, which should be either a reformatted version of the
 *       URL domain or a hash of the domain. If there is no subdomain, this capture group
 *       is `undefined`.
 *     * `ampCacheDomain` - The domain for the AMP cache.
 *     * `ampCacheContentType` - The content type, which is either `c` for an HTML document, `i` for
 *        an image, or `r` for another resource.
 *     * `ampCacheIsSecure` - Whether the AMP cache loads the resource via HTTPS. If it does, this
 *        capture group has the value `s/`. If it doesn't, this capture group is `undefined`.
 *     * `ampCacheUrl` - The underlying URL, without a specified scheme (i.e., `http://` or `https://`).
 *  * AMP Viewer Matches
 *     * `ampViewerDomainAndPath` - The domain and path for the AMP viewer.
 *     * `ampViewerUrl` - The underlying URL, without a specified scheme (i.e., `http://` or `https://`).
 * @see {@link https://developers.google.com/amp/cache/overview}
 * @see {@link https://amp.dev/documentation/guides-and-tutorials/learn/amp-caches-and-cors/amp-cache-urls/}
 * @constant {RegExp}
 */
new RegExp(
    // AMP cache regular expression
    `(?:^https?://(?:(?<ampCacheSubdomain>[a-zA-Z0-9\\-\\.]*)\\.)?(?<ampCacheDomain>${ampCacheDomains.map(escapeRegExpString).join("|")})/(?<ampCacheContentType>c|i|r)/(?<ampCacheIsSecure>s/)?(?<ampCacheUrl>.*)$)`
    + `|` +
    // AMP viewer regular expression
    `(?:^https?://(?<ampViewerDomainAndPath>${ampViewerDomainsAndPaths.map(escapeRegExpString).join("|")})/(?<ampViewerUrl>.*)$)`
    , "i");

/**
 * A MatchPatternSet for AMP caches and viewers.
 * @constant {matching.MatchPatternSet}
 */
createMatchPatternSet(
    domainsToMatchPatterns(ampCacheDomains, false).concat(
        ampViewerDomainsAndPaths.map(ampViewerDomainAndPath => `*://${ampViewerDomainAndPath}*`)));

var popupPromptPage = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sPgogICAgPGhlYWQ+CiAgICAgICAgPG1ldGEgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgiIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSI+CiAgICAgICAgPG1ldGEgY29udGVudD0idXRmLTgiIGh0dHAtZXF1aXY9ImVuY29kaW5nIj4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC8qIE1heSBuZWVkIHRvIGFkZCBmb250IGJ1bmRsaW5nIG9yIHJldmlzaXQgdGhlIGZvbnQgY2hvaWNlIGZvciBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuICovCiAgICAgICAgICAgIGJvZHkgewogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5idXR0b24tY29udGFpbmVyIHsKICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlOwogICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTsKICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5idXR0b25CbHVlIHsKICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDVFRTM7CiAgICAgICAgICAgICAgICB3aWR0aDogOTlweDsKICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTsKICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNHB4OwogICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7CiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLmJ1dHRvbkJsdWU6aG92ZXIgewogICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEwNEZCRjsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLmJ1dHRvbkdyYXkgewogICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTsKICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDsKICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjazsKICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNHB4OwogICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7CiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7CiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7CiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLmJ1dHRvbkdyYXk6aG92ZXIgewogICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLmljb24gewogICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4OwogICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDsKICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0OwogICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLnNlcGFyYXRvciB7CiAgICAgICAgICAgICAgICB3aWR0aDogMXB4OwogICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4OwogICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOwogICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7CiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDNkM2QzOwogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KICAgIDxib2R5PgogICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IG1heC13aWR0aDogMjgwcHg7IHBhZGRpbmc6IDEwcHg7Ij4KICAgICAgICAgICAgPGltZyBpZD0iaWNvbiIgY2xhc3M9Imljb24iIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CiAgICAgICAgICAgIDxkaXYgaWQ9ImNvbnRlbnQiIGNsYXNzPSJwYXJhZ3JhcGgiIHN0eWxlPSJwYWRkaW5nLWxlZnQ6IDEwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7Ij48L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJidXR0b24tY29udGFpbmVyIj4KICAgICAgICAgICAgPGEgaHJlZj0iIyIgY2xhc3M9ImJ1dHRvbiBidXR0b25HcmF5IiBuYW1lPSJsYXRlciI+TGF0ZXI8L2E+CiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzZXBhcmF0b3IiPjwvc3Bhbj4KICAgICAgICAgICAgPGEgaHJlZj0iIyIgY2xhc3M9ImJ1dHRvbiBidXR0b25HcmF5IiBuYW1lPSJuZXZlciI+TmV2ZXI8L2E+CiAgICAgICAgICAgIDxhIGhyZWY9IiMiIGNsYXNzPSJidXR0b24gYnV0dG9uQmx1ZSIgbmFtZT0iYWdyZWUiPkNvbnRpbnVlPC9hPgogICAgICAgIDwvZGl2PgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIChhc3luYyBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICAgIC8vIExvYWQgdGhlIG1lc3NhZ2UgZnJvbSBzdG9yYWdlCiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlU3RvcmFnZUtleSA9ICJ3ZWJTY2llbmNlLnVzZXJTdXJ2ZXkucG9wdXBQcm9tcHRNZXNzYWdlIjsKICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VSZXN1bHRzID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChtZXNzYWdlU3RvcmFnZUtleSk7CiAgICAgICAgICAgICAgICBpZihtZXNzYWdlUmVzdWx0c1ttZXNzYWdlU3RvcmFnZUtleV0pIHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250ZW50Iik7CiAgICAgICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlUmVzdWx0c1ttZXNzYWdlU3RvcmFnZUtleV07CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgLy8gTG9hZCBpY29uIFVSTCBmcm9tIHN0b3JhZ2UKICAgICAgICAgICAgICAgIGNvbnN0IGljb25VcmxTdG9yYWdlS2V5ID0gIndlYlNjaWVuY2UudXNlclN1cnZleS5wb3B1cEljb25VcmwiOwogICAgICAgICAgICAgICAgY29uc3QgaWNvblVybFJlc3VsdHMgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGljb25VcmxTdG9yYWdlS2V5KTsKICAgICAgICAgICAgICAgIGlmKGljb25VcmxSZXN1bHRzW2ljb25VcmxTdG9yYWdlS2V5XSkgewogICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImljb24iKTsKICAgICAgICAgICAgICAgICAgICBpY29uRWxlbWVudC5zcmMgPSBpY29uVXJsUmVzdWx0c1tpY29uVXJsU3RvcmFnZUtleV07CiAgICAgICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICJibG9jayI7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgY2xpY2tzIG9uIHRoZSBidXR0b25zCiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsIGFzeW5jIChlKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICJhZ3JlZSIpIHsKICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogIndlYlNjaWVuY2UudXNlclN1cnZleS5vcGVuU3VydmV5IiB9KTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQubmFtZSA9PT0gImxhdGVyIikgewogICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQubmFtZSA9PT0gIm5ldmVyIikgewogICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiAid2ViU2NpZW5jZS51c2VyU3VydmV5LmNhbmNlbFN1cnZleSIgfSk7CiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbG9zZSgpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KSgpOwogICAgICAgIDwvc2NyaXB0PgogICAgPC9ib2R5Pgo8L2h0bWw+IAo=";

var popupNoPromptPage = "data:text/html;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sPgogICAgPGhlYWQ+CiAgICAgICAgPG1ldGEgY29udGVudD0idGV4dC9odG1sO2NoYXJzZXQ9dXRmLTgiIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSI+CiAgICAgICAgPG1ldGEgY29udGVudD0idXRmLTgiIGh0dHAtZXF1aXY9ImVuY29kaW5nIj4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC8qIE1heSBuZWVkIHRvIGFkZCBmb250IGJ1bmRsaW5nIG9yIHJldmlzaXQgdGhlIGZvbnQgY2hvaWNlIGZvciBjcm9zcy1icm93c2VyIGNvbXBhdGliaWxpdHkuICovCiAgICAgICAgICAgIGJvZHkgewogICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5pY29uIHsKICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTBweDsKICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwcHg7CiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDsKICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7IAogICAgICAgICAgICB9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvaGVhZD4KICAgIDxib2R5PgogICAgICAgIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IG1heC13aWR0aDogMjgwcHg7IHBhZGRpbmc6IDEwcHg7Ij4KICAgICAgICAgICAgPGltZyBpZD0iaWNvbiIgY2xhc3M9Imljb24iIHN0eWxlPSJkaXNwbGF5OiBub25lOyI+CiAgICAgICAgICAgIDxkaXYgaWQ9ImNvbnRlbnQiIGNsYXNzPSJwYXJhZ3JhcGgiIHN0eWxlPSJwYWRkaW5nLWxlZnQ6IDEwcHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7Ij48L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8c2NyaXB0PgogICAgICAgICAgICAoYXN5bmMgZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICAvLyBMb2FkIHRoZSBtZXNzYWdlIGZyb20gc3RvcmFnZQogICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZVN0b3JhZ2VLZXkgPSAid2ViU2NpZW5jZS51c2VyU3VydmV5LnBvcHVwTm9Qcm9tcHRNZXNzYWdlIjsKICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VSZXN1bHRzID0gYXdhaXQgYnJvd3Nlci5zdG9yYWdlLmxvY2FsLmdldChtZXNzYWdlU3RvcmFnZUtleSk7CiAgICAgICAgICAgICAgICBpZihtZXNzYWdlUmVzdWx0c1ttZXNzYWdlU3RvcmFnZUtleV0pIHsKICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250ZW50Iik7CiAgICAgICAgICAgICAgICAgICAgY29udGVudEVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlUmVzdWx0c1ttZXNzYWdlU3RvcmFnZUtleV07CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgLy8gTG9hZCBpY29uIFVSTCBmcm9tIHN0b3JhZ2UKICAgICAgICAgICAgICAgIGNvbnN0IGljb25VcmxTdG9yYWdlS2V5ID0gIndlYlNjaWVuY2UudXNlclN1cnZleS5wb3B1cEljb25VcmwiOwogICAgICAgICAgICAgICAgY29uc3QgaWNvblVybFJlc3VsdHMgPSBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KGljb25VcmxTdG9yYWdlS2V5KTsKICAgICAgICAgICAgICAgIGlmKGljb25VcmxSZXN1bHRzW2ljb25VcmxTdG9yYWdlS2V5XSkgewogICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImljb24iKTsKICAgICAgICAgICAgICAgICAgICBpY29uRWxlbWVudC5zcmMgPSBpY29uVXJsUmVzdWx0c1tpY29uVXJsU3RvcmFnZUtleV07CiAgICAgICAgICAgICAgICAgICAgaWNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICJibG9jayI7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pKCk7CiAgICAgICAgPC9zY3JpcHQ+CiAgICA8L2JvZHk+CjwvaHRtbD4gCg==";

/**
 * A module to facilitate surveys of study participants.
 * 
 * # User Experience
 *   * If the user has not been previously prompted for the survey,
 *     the survey will open in a new tab.
 *   * The study's browser action popup will contain either a page
 *     prompting the user to complete the survey (with options to open
 *     the survey or decline the survey), or a neutral page (if the
 *     user has already completed or declined the survey).
 *   * If the user has been previously prompted for the survey, and
 *     has not completed or declined the survey, the user will be
 *     reminded to complete the survey with a browser notification
 *     at a set interval.
 *   * View the documentation for the exported functions for additional
 *     details about usage.
 * 
 * 
 * # Limitations
 * Note that this module is currently very limited: it only supports
 * one survey at a time per study, with few options and a constrained design.
 * We have not yet decided whether to build out this module or implement
 * survey functionality in the Rally core add-on.
 * 
 * # Content Security Policy Requirements
 * This module depends on inline scripts in browser action popups, which
 * require special Content Security Policy permissions in the extension
 * manifest (the `"content_security_policy"` key). Those permissions
 * are currently the following additional `script-src` values.
 *   * `'sha256-csyiOLMfXk2f5pU99mqYFyshgnVYbdp6o9bnQ9hntPA='`
 *   * `'sha256-nYNRfLKTaKqgi4+CK/mcp9hdSsmD8F17GWuo+vQGfqU='`
 * @module webScience.userSurvey
 */

check({
    module: "webScience.userSurvey",
    requiredPermissions: [ "notifications", "webRequest" ],
    requiredContentSecurityPolicy: {
        "script-src": [ "'sha256-csyiOLMfXk2f5pU99mqYFyshgnVYbdp6o9bnQ9hntPA='", "'sha256-nYNRfLKTaKqgi4+CK/mcp9hdSsmD8F17GWuo+vQGfqU='" ]
    }
});

/**
 * A persistent storage space for data about surveys.
 * @type {storage.KeyValueStorage}
 * @private
 */
let storageSpace = null;

/**
 * Whether listeners for this module have already been registered.
 * @type {boolean}
 * @private
 */
let listenersRegistered = false;

/**
 * When we last asked the user to do the survey, either with a browser
 * notification or through opening a tab with the survey.
 * @type {number}
 * @private
 */
let lastSurveyRequest = 0;

/**
 * A fully-qualified URL to an icon file to use for for reminding the
 * user with a notification to complete the survey (is null if there is
 * no such icon).
 * @type {string|null}
 * @private
 */
let reminderIconUrl = null;

/**
 * How often, in seconds, to wait before reminding the user with a
 * notification to participate in the survey.
 * @type {number}
 * @private
 */
let reminderInterval = 0;

/**
 * The message to use for reminding the user with a notification to
 * complete the survey.
 * @type {string}
 * @private
 */
let reminderMessage = "";

/**
 * The title to use for reminding the user with a notification to
 * complete the survey.
 * @type {string}
 * @private
 */
let reminderTitle = "";

/**
 * The URL for the survey on an external platform
 * (e.g., SurveyMonkey, Typeform, Qualtrics, etc.).
 * @type {string}
 * @private
 */
let surveyUrl = "";

const millisecondsPerSecond = 1000;

/**
 * Options for configuring a survey.
 * @typedef {Object} SurveyOptions
 * @param {string} surveyName - A unique name for the survey within the study.
 * @param {string} popupNoPromptMessage - A message to present to the
 * user when there is no survey to prompt.
 * @param {string} popupPromptMessage - A message to present to the user
 * when there is a survey to prompt.
 * @param {string} [popupIcon] - A path to an icon file, relative
 * to the study extension's root, to use for for the browser action popup.
 * This property is optional as the popup does not need to display an icon.
 * @param {string} [reminderIcon] - A path to an icon file, relative
 * to the study extension's root, to use for for reminding the user with a
 * notification to complete the survey. This property is optional as the
 * notification does not need to display an icon.
 * @param {number} reminderInterval - How often, in seconds, to wait before
 * reminding the user with a notification to participate in the survey.
 * @param {string} reminderMessage - The message to use for reminding the
 * user with a notification to complete the survey.
 * @param {string} reminderTitle - The title to use for reminding the
 * user with a notification to complete the survey.
 * @param {string} surveyCompletionUrl - A URL that, when loaded,
 * indicates the user has completed the survey.
 * @param {string} surveyUrl - The URL for the survey on an external
 * platform (e.g., SurveyMonkey, Typeform, Qualtrics, etc.).
 */

/**
 * Opens the survey URL in a new browser tab, appending parameters
 * for the participant's survey ID (surveyID) and timezone offset
 * (timezone).
 * @private
 */
async function openSurveyInNewTab() {
    const surveyId = await getSurveyId();
    const surveyUrlObj = new URL(surveyUrl);
    surveyUrlObj.searchParams.append("surveyId", surveyId);
    surveyUrlObj.searchParams.append("timezone", new Date().getTimezoneOffset());
    browser.tabs.create({
        active: true,
        url: surveyUrlObj.href
    });
}

/**
 * Set a timeout to remind the user to complete the study.
 * @private
 */
function scheduleReminderForUser() {
    setTimeout(remindUser, Math.max((lastSurveyRequest + reminderInterval * millisecondsPerSecond) - Date.now(), 0));
}

/**
 * Remind the user to complete the study, by prompting with a notification.
 * @private
 */
async function remindUser() {
    const surveyCompleted = await storageSpace.get("surveyCompleted");
    const surveyCancelled = await storageSpace.get("surveyCancelled");
    if (surveyCompleted || surveyCancelled) {
        return;
    }
    lastSurveyRequest = Date.now();
    await storageSpace.set("lastSurveyRequest", lastSurveyRequest);
    browser.notifications.create({
        type: "image",
        message: reminderMessage,
        title: reminderTitle,
        iconUrl: reminderIconUrl
    });
    scheduleReminderForUser();
}

/**
 * Set the browser action popup to the survey's no prompt page.
 * @private
 */
function setPopupToNoPromptPage() {
    browser.browserAction.setPopup({
        popup: dataUrlToBlobUrl(popupNoPromptPage)
    });
}

/**
 * Initialize storage for the module.
 * @private
 */
function initializeStorage() {
    if (storageSpace === null) {
        storageSpace = createKeyValueStorage("webScience.userSurvey");
    }
}

/**
 * Listener for webRequest.onBeforeRequest when the URL is the survey
 * completion URL. Sets surveyCompleted to true in storage and changes
 * the browser action popup to the survey's no prompt page.
 * @private
 */
function surveyCompletionUrlListener() {
    storageSpace.set("surveyCompleted", true);
    setPopupToNoPromptPage();
}

/**
 * Prompt the user to respond to a survey. There can only be one survey running at a time.
 * To run a single survey in a study, simply call setSurvey with the specified SurveyOptions object.
 * If there is more than one survey in a study, endSurvey must be called after every survey
 * before starting the next survey.
 * 
 * # Usage Notes
 *   * If there is no active survey, saves the options parameter to storage and
 *     starts the survey based on this parameter.
 *   * If there is an active survey and options.surveyName matches the name of
 *     the active survey, continues the survey based on the options in storage.
 *     This allows for studies with only one survey to simply call this function
 *     with the survey options on study extension startup.
 *   * If there is already an active survey and options.surveyName does not match
 *     the name of the active survey, throws an error as there can only be one
 *     active survey at a time.
 * @param {SurveyOptions} options - The options for the survey.
 */
async function setSurvey(options) {
    initializeStorage();

    let surveyDetails = await storageSpace.get("surveyDetails");

    // If there's no survey in storage, save the parameters in
    //    storage and carry out the survey based on the parameters.
    // If options.surveyName differs from the survey name in storage,
    //    throw an error, because only one survey can be set at a time.
    // Otherwise, options.surveyName is the same as the survey name in
    //    storage. In this case, use the survey attributes from storage.
    if (!surveyDetails) {
        surveyDetails = options;
        await storageSpace.set("surveyDetails", options);
    } else if (surveyDetails.surveyName !== options.surveyName) {
        throw new Error("userSurvey only supports one survey at a time. Complete the survey that has previously been set.");
    }

    const currentTime = Date.now();
    ({surveyUrl,reminderInterval, reminderTitle, reminderMessage } = surveyDetails);
    browser.storage.local.set({
        "webScience.userSurvey.popupPromptMessage": surveyDetails.popupPromptMessage
    });
    browser.storage.local.set({
        "webScience.userSurvey.popupNoPromptMessage": surveyDetails.popupNoPromptMessage
    });
    reminderIconUrl = surveyDetails.reminderIcon ?
        browser.runtime.getURL(surveyDetails.reminderIcon) : null;
    browser.storage.local.set({
        "webScience.userSurvey.popupIconUrl": 
            surveyDetails.popupIcon ? browser.runtime.getURL(surveyDetails.popupIcon) : null
    });

    // Check when we last asked the user to do the survey. If it's null,
    // we've never asked, which means the extension just got installed.
    // Open a tab with the survey, and save this time as the most recent
    // request for participation.
    lastSurveyRequest = await storageSpace.get("lastSurveyRequest");
    const surveyCompleted = await storageSpace.get("surveyCompleted");
    const surveyCancelled = await storageSpace.get("surveyCancelled");

    // Configure the browser action popup page
    if (surveyCompleted || surveyCancelled) {
        setPopupToNoPromptPage();
        return;
    }
    else {
        browser.browserAction.setPopup({
            popup: dataUrlToBlobUrl(popupPromptPage)
        });
    }

    // If this is the first survey request, open the survey in a new tab.
    if (lastSurveyRequest === null) {
        lastSurveyRequest = currentTime;
        await storageSpace.set("lastSurveyRequest", lastSurveyRequest);

        // Since this is the first survey request, initialize the stored
        // completed and cancelled state to false.
        await storageSpace.set("surveyCompleted", false);
        await storageSpace.set("surveyCancelled", false);
        openSurveyInNewTab();
    }

    // Schedule a reminder for the user
    scheduleReminderForUser();

    // Set a listener for the survey completion URL.
    browser.webRequest.onBeforeRequest.addListener(
        surveyCompletionUrlListener,
        { urls: [ (new URL(surveyDetails.surveyCompletionUrl)).href + "*" ] }
    );

    // Listeners for cancel and open survey button click only need to be added once.
    // They do not need to be added again for subsequent calls to setSurvey.
    // These listeners do not need to be removed in endCurrentSurvey because they will
    // not receive messages when the popup is the no prompt page.
    if (!listenersRegistered) {
        // Set listeners for cancel and open survey button clicks in the survey request.
        onMessage.addListener(() => {
            storageSpace.set("surveyCancelled", true);
            setPopupToNoPromptPage();
            browser.webRequest.onBeforeRequest.removeListener(surveyCompletionUrlListener);
        }, { type: "webScience.userSurvey.cancelSurvey" });
        onMessage.addListener(() => {
            openSurveyInNewTab();
        }, { type: "webScience.userSurvey.openSurvey" });
    }

    listenersRegistered = true;
}

/**
 * Each study participant has a persistent survey ID, generated with
 * the id module. The ID is automatically added as a parameter to
 * the survey URL, enabling researchers to import survey data from an
 * external platform and sync it with Rally data. This method returns the
 * survey ID, generating it if it does not already exist.
 * @returns {string} - The participant's survey ID.
 */
async function getSurveyId() {
    initializeStorage();
    let surveyId = await storageSpace.get("surveyId");
    if (surveyId === null) {
        surveyId = generateId();
        await storageSpace.set("surveyId", surveyId);
    }
    return surveyId;
}

/**
 * Gets the status of the current survey. Can be used if a
 * subsequent survey depends on the status of the previous survey.
 * @returns {string|null} - The status of the survey (either "completed",
 * "cancelled", or "active") or null if there is no survey.
 */
async function getSurveyStatus() {
    initializeStorage();

    const surveyDetails = await storageSpace.get("surveyDetails");
    const surveyCompleted = await storageSpace.get("surveyCompleted");
    const surveyCancelled = await storageSpace.get("surveyCancelled");

    if (!surveyDetails) {
        return null;
    } else if(surveyCompleted) {
        return "completed";
    } else if(surveyCancelled) {
        return "cancelled";
    } else {
        return "active";
    }
}

var pageNavigationContentScript = "data:application/javascript;base64,KGZ1bmN0aW9uICgpIHsKICAgICd1c2Ugc3RyaWN0JzsKCiAgICAvKioKICAgICAqIENvbnRlbnQgc2NyaXB0IGZvciB0aGUgcGFnZU5hdmlnYXRpb24gbW9kdWxlLgogICAgICoKICAgICAqICMgS25vd24gSXNzdWVzCiAgICAgKiAgICogV2hlbiBzZW5kaW5nIHBhZ2UgZGF0YSBkdXJpbmcgYSBwYWdlIHZpc2l0IHN0b3AgZXZlbnQsIHNvbWV0aW1lcwogICAgICogICAgIEZpcmVmb3ggZ2VuZXJhdGVzIGFuIGVycm9yICgiUHJvbWlzZSByZXNvbHZlZCB3aGlsZSBjb250ZXh0IGlzIGluYWN0aXZlIikKICAgICAqICAgICBiZWNhdXNlIHRoZSBjb250ZW50IHNjcmlwdCBleGVjdXRpb24gZW52aXJvbm1lbnQgaXMgdGVybWluYXRpbmcgd2hpbGUgdGhlCiAgICAgKiAgICAgbWVzc2FnZSBzZW5kaW5nIFByb21pc2UgcmVtYWlucyBvcGVuLiBUaGlzIGVycm9yIGRvZXMgbm90IGFmZmVjdCBmdW5jdGlvbmFsaXR5LAogICAgICogICAgIGJlY2F1c2Ugd2UgZG8gbm90IGRlcGVuZCBvbiByZXNvbHZpbmcgdGhlIFByb21pc2UgKGkuZS4sIGEgcmVzcG9uc2UgdG8gdGhlCiAgICAgKiAgICAgcGFnZSB2aXNpdCBzdG9wIG1lc3NhZ2UpLgogICAgICogQG1vZHVsZSB3ZWJTY2llbmNlLnBhZ2VOYXZpZ2F0aW9uLmNvbnRlbnQKICAgICAqLwoKICAgIC8vIEZ1bmN0aW9uIGVuY2Fwc3VsYXRpb24gdG8gd2FpdCBmb3IgcGFnZU1hbmFnZXIgbG9hZAogICAgY29uc3QgcGFnZU5hdmlnYXRpb24gPSBmdW5jdGlvbiAoKSB7CgogICAgICAgIC8vIElmIHRoZSBwYWdlTmF2aWdhdGlvbiBjb250ZW50IHNjcmlwdCBpcyBhbHJlYWR5IHJ1bm5pbmcgb24gdGhpcyBwYWdlLCBubyBuZWVkIGZvciB0aGlzIGluc3RhbmNlCiAgICAgICAgaWYoIndlYlNjaWVuY2UiIGluIHdpbmRvdykgewogICAgICAgICAgICBpZigicGFnZU5hdmlnYXRpb25BY3RpdmUiIGluIHdpbmRvdy53ZWJTY2llbmNlKSB7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICAgICAgd2luZG93LndlYlNjaWVuY2UucGFnZU5hdmlnYXRpb25BY3RpdmUgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgd2luZG93LndlYlNjaWVuY2UgPSB7CiAgICAgICAgICAgICAgICBwYWdlTmF2aWdhdGlvbkFjdGl2ZTogdHJ1ZQogICAgICAgICAgICB9OwogICAgICAgIH0KCiAgICAgICAgY29uc3QgcGFnZU1hbmFnZXIgPSB3aW5kb3cud2ViU2NpZW5jZS5wYWdlTWFuYWdlcjsKCiAgICAgICAgLyoqCiAgICAgICAgICogSG93IGxvbmcgdGhlIHBhZ2UgaGFzIGhhZCB0aGUgdXNlcidzIGF0dGVudGlvbi4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGxldCBhdHRlbnRpb25EdXJhdGlvbiA9IDA7CgogICAgICAgIC8qKgogICAgICAgICAqIFdoZW4gdGhlIHBhZ2UgYXR0ZW50aW9uIHN0YXRlIHdhcyBsYXN0IHVwZGF0ZWQuCiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KICAgICAgICBsZXQgbGFzdEF0dGVudGlvblVwZGF0ZVRpbWUgPSAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBIb3cgbG9uZyB0aGUgcGFnZSBoYXMgcGxheWVkIGF1ZGlvLgogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCiAgICAgICAgbGV0IGF1ZGlvRHVyYXRpb24gPSAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBXaGVuIHRoZSBwYWdlIGxhc3QgYmVnYW4gcGxheWluZyBhdWRpby4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGxldCBsYXN0QXVkaW9VcGRhdGVUaW1lID0gMDsKCiAgICAgICAgLyoqCiAgICAgICAgICogSG93IGxvbmcgdGhlIHBhZ2UgaGFzIHNpbXVsdGFuZW91c2x5IGhhZCBhdHRlbnRpb24gYW5kIHBsYXllZCBhdWRpby4gVGhpcyB2YWx1ZSBpcwogICAgICAgICAqIGEgdXNlZnVsIGFwcHJveGltYXRpb24gb2YgdmlkZW8gdmlld2luZyB0aW1lLgogICAgICAgICAqIEB0eXBlIHtudW1iZXJ9CiAgICAgICAgICovCiAgICAgICAgbGV0IGF0dGVudGlvbkFuZEF1ZGlvRHVyYXRpb24gPSAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBIb3cgb2Z0ZW4gKGluIG1pbGxpc2Vjb25kcykgdG8gY2hlY2sgbWF4aW11bSBwYWdlIHNjcm9sbCBkZXB0aC4KICAgICAgICAgKiBAY29uc3RhbnQge251bWJlcn0KICAgICAgICAgKi8KICAgICAgICBjb25zdCBzY3JvbGxEZXB0aFVwZGF0ZUludGVydmFsID0gMTAwMDsKCiAgICAgICAgLyoqCiAgICAgICAgICogSG93IG9mdGVuIChpbiBtaWxsaXNlY29uZHMpIGFmdGVyIHRoZSBmaXJzdCB0aW1lIHRoZSBwYWdlIGdhaW5zIGF0dGVudGlvbiAob3IgYWZ0ZXIKICAgICAgICAgKiBwYWdlIHZpc2l0IHN0YXJ0IGlmIGBzY3JvbGxEZXB0aFdhaXRGb3JBdHRlbnRpb25gIGlzIGBmYWxzZWApIHRvIGJlZ2luIGNoZWNraW5nIHRoZQogICAgICAgICAqIG1heGltdW0gcmVsYXRpdmUgc2Nyb2xsIGRlcHRoLiBBIGRlbGF5IGlzIGhlbHBmdWwgYmVjYXVzZSBzb21lIHBhZ2VzIGhhdmUgcGxhY2Vob2xkZXIKICAgICAgICAgKiBjb250ZW50IHdoaWxlIGxvYWRpbmcgKGUuZy4sIG9uIFlvdVR1YmUpIG9yIGxhemlseSBsb2FkIGNvbnRudCAoZS5nLiwgb24gVHdpdHRlcikuCiAgICAgICAgICogQGNvbnN0YW50IHtudW1iZXJ9CiAgICAgICAgICovCiAgICAgICAgY29uc3Qgc2Nyb2xsRGVwdGhVcGRhdGVEZWxheSA9IDIwMDA7CgogICAgICAgIC8qKgogICAgICAgICAqIFRoZSBtaW5pbXVtIHBhZ2UgaGVpZ2h0IHJlcXVpcmVkIChpbiBwaXhlbHMsIHVzaW5nIHRoZSBtYXhpbXVtIG9mIGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0YAogICAgICAgICAqIGFuZCBgd2luZG93LnNjcm9sbFlgKSB0byBjaGVjayB0aGUgbWF4aW11bSByZWxhdGl2ZSBzY3JvbGwgZGVwdGguIEEgbWluaW11bSBoZWlnaHQgaXMgaGVscGZ1bCBiZWNhdXNlIHNvbWUKICAgICAgICAgKiBwYWdlcyBoYXZlIHBsYWNlaG9sZGVyIGNvbnRlbnQgd2hpbGUgbG9hZGluZyAoZS5nLiwgb24gWW91VHViZSkgb3IgbGF6aWx5IGxvYWQgY29udGVudCAoZS5nLiwgb24gVHdpdHRlcikuCiAgICAgICAgICogV2UgdXNlIGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0YCBiZWNhdXNlIGl0IHR5cGljYWxseSBtZWFzdXJlcyB0aGUgdmVydGljYWwgaGVpZ2h0IG9mIGRvY3VtZW50CiAgICAgICAgICogY29udGVudCwgYW5kIHdlIHVzZSBgd2luZG93LnNjcm9sbFlgIGFzIGEgYmFja3N0b3Agb2YgcmVhbCB1c2VyIHNjcm9sbGluZyBiZWNhdXNlIGluIHVudXN1YWwgbGF5b3V0cyAoZS5nLiwKICAgICAgICAgKiBZb3VUdWJlKSB0aGUgdmFsdWUgb2YgYGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHRgIGlzIDAuIFdlIGRvIG5vdCB1c2UgYHNjcm9sbEhlaWdodGAgb3IKICAgICAgICAgKiBgY2xpZW50SGVpZ2h0YCBiZWNhdXNlIHRob3NlIHZhbHVlcyBhcmUgY2xhbXBlZCB0byBzY3JlZW4gc2l6ZS4KICAgICAgICAgKiBAY29uc3RhbnQge251bWJlcn0KICAgICAgICAgKi8KICAgICAgICBjb25zdCBzY3JvbGxEZXB0aE1pbmltdW1IZWlnaHQgPSA1MDsKCiAgICAgICAgLyoqCiAgICAgICAgICogV2hldGhlciB0byB3YWl0IHVudGlsIHRoZSBmaXJzdCB0aW1lIHRoZSBwYWdlIGdhaW5zIGF0dGVudGlvbiBiZWZvcmUgY2hlY2tpbmcgdGhlIG1heGltdW0gcmVsYXRpdmUKICAgICAgICAgKiBzY3JvbGwgZGVwdGguIERlbGF5aW5nIHVudGlsIHRoZSBmaXJzdCBpbnN0YW5jZSBvZiBhdHRlbnRpb24gaXMgaGVscGZ1bCBiZWNhdXNlIHNvbWUgcGFnZXMgaGF2ZQogICAgICAgICAqIHBsYWNlaG9sZGVyIGNvbnRlbnQgd2hpbGUgbG9hZGluZyAoZS5nLiwgb24gWW91VHViZSkgb3IgbGF6aWx5IGxvYWQgY29udG50IChlLmcuLCBvbiBUd2l0dGVyKS4KICAgICAgICAgKiBAY29uc3RhbnQge2Jvb2xlYW59CiAgICAgICAgICovCiAgICAgICAgY29uc3Qgc2Nyb2xsRGVwdGhXYWl0Rm9yQXR0ZW50aW9uID0gdHJ1ZTsKCiAgICAgICAgLyoqCiAgICAgICAgICogVGhlIGZpcnN0IHRpbWUgdGhlIHBhZ2UgaGFkIGF0dGVudGlvbiwgb3IgMCBpZiB0aGUgcGFnZSBoYXMgbmV2ZXIgaGFkIGF0dGVudGlvbi4KICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfQogICAgICAgICAqLwogICAgICAgIGxldCBmaXJzdEF0dGVudGlvblRpbWUgPSAwOwoKICAgICAgICAvKioKICAgICAgICAgKiBUaGUgbWF4aW11bSByZWxhdGl2ZSBzY3JvbGwgZGVwdGgsIGRlZmluZWQgYXMgdGhlIGRlcHRoIG9mIHRoZSBib3R0b20gb2YKICAgICAgICAgKiB0aGUgY29udGVudCB3aW5kb3cgZGl2aWRlZCBieSB0aGUgZGVwdGggb2YgdGhlIHBhZ2U6CiAgICAgICAgICogKGB3aW5kb3cuc2Nyb2xsWWAgKyBgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodGApIC8gYGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRgLgogICAgICAgICAqIE5vdGUgdGhhdCBgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodGAgYW5kIGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0YAogICAgICAgICAqIGluY2x1ZGUgcGFkZGluZyBidXQgbm90IG1hcmdpbiBvciBib3JkZXIuCiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KICAgICAgICBsZXQgbWF4UmVsYXRpdmVTY3JvbGxEZXB0aCA9IDA7CgogICAgICAgIC8qKgogICAgICAgICAqIEFuIGludGVydmFsIHRpbWVyIElEIGZvciBjaGVja2luZyBzY3JvbGwgZGVwdGguCiAgICAgICAgICogQHR5cGUge251bWJlcn0KICAgICAgICAgKi8KICAgICAgICBsZXQgc2Nyb2xsRGVwdGhJbnRlcnZhbElkID0gMDsKCiAgICAgICAgLyoqCiAgICAgICAgICogQSB0aW1lciB0aWNrIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgbWF4aW11bSByZWxhdGl2ZSBzY3JvbGwgZGVwdGggb24gdGhlIHBhZ2UuCiAgICAgICAgICovCiAgICAgICAgZnVuY3Rpb24gdXBkYXRlTWF4UmVsYXRpdmVTY3JvbGxEZXB0aCgpIHsKICAgICAgICAgICAgLyogRG9uJ3QgbWVhc3VyZSBzY3JvbGwgZGVwdGggaWY6CiAgICAgICAgICAgICAqICAgKiBUaGUgcGFnZSBkb2Vzbid0IGhhdmUgdGhlIHVzZXIncyBhdHRlbnRpb24KICAgICAgICAgICAgICogICAqIFNjcm9sbCBkZXB0aCBtZWFzdXJlbWVudCBkb2Vzbid0IHdhaXQgb24gYXR0ZW50aW9uIGFuZCB0aGUgcGFnZSBsb2FkIGlzIHRvbyByZWNlbnQKICAgICAgICAgICAgICogICAqIFNjcm9sbCBkZXB0aCBtZWFzdXJlbWVudCBkb2VzIHdhaXQgb24gYXR0ZW50aW9uIGFuZCBlaXRoZXIgdGhlIGZpcnN0IGF0dGVudGlvbiBoYXNuJ3QgaGFwcGVuZWQgb3IgaXMgdG9vIHJlY2VudAogICAgICAgICAgICAgKiAgICogVGhlIGNvbnRlbnQgaGVpZ2h0IGFuZCB1c2VyIHNjcm9sbGluZyBhcmUgYmVsb3cgYSBtaW5pbXVtIGFtb3VudAogICAgICAgICAgICAgKi8KICAgICAgICAgICAgaWYoIXBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24gfHwKICAgICAgICAgICAgICAgICghc2Nyb2xsRGVwdGhXYWl0Rm9yQXR0ZW50aW9uICkgfHwgCiAgICAgICAgICAgICAgICAoKChmaXJzdEF0dGVudGlvblRpbWUgPD0gMCkgfHwgKChEYXRlLm5vdygpIC0gZmlyc3RBdHRlbnRpb25UaW1lKSA8IHNjcm9sbERlcHRoVXBkYXRlRGVsYXkpKSkgfHwKICAgICAgICAgICAgICAgIChNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LCB3aW5kb3cuc2Nyb2xsWSkgPCBzY3JvbGxEZXB0aE1pbmltdW1IZWlnaHQpKSB7CiAgICAgICAgICAgICAgICByZXR1cm47CiAgICAgICAgICAgIH0KICAgICAgICAgICAgLy8gU2V0IHRoZSBtYXhpbXVtIHJlbGF0aXZlIHNjcm9sbCBkZXB0aAogICAgICAgICAgICBtYXhSZWxhdGl2ZVNjcm9sbERlcHRoID0gTWF0aC5taW4oCiAgICAgICAgICAgICAgICBNYXRoLm1heChtYXhSZWxhdGl2ZVNjcm9sbERlcHRoLCAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAvIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpLAogICAgICAgICAgICAgICAgMSk7CiAgICAgICAgfQoKICAgICAgICAvKioKICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBwYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0YXJ0LgogICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxzCiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGRldGFpbHMudGltZVN0YW1wIAogICAgICAgICAqLwogICAgICAgIGZ1bmN0aW9uIHBhZ2VWaXNpdFN0YXJ0ICh7IHRpbWVTdGFtcCB9KSB7CiAgICAgICAgICAgIC8vIFJlc2V0IHBhZ2UgYXR0ZW50aW9uIGFuZCBwYWdlIGF1ZGlvIHRyYWNraW5nCiAgICAgICAgICAgIGF0dGVudGlvbkR1cmF0aW9uID0gMDsKICAgICAgICAgICAgbGFzdEF0dGVudGlvblVwZGF0ZVRpbWUgPSB0aW1lU3RhbXA7CiAgICAgICAgICAgIGZpcnN0QXR0ZW50aW9uVGltZSA9IHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24gPyB0aW1lU3RhbXAgOiAwOwogICAgICAgICAgICBhdWRpb0R1cmF0aW9uID0gMDsKICAgICAgICAgICAgbGFzdEF1ZGlvVXBkYXRlVGltZSA9IHRpbWVTdGFtcDsKICAgICAgICAgICAgYXR0ZW50aW9uQW5kQXVkaW9EdXJhdGlvbiA9IDA7CiAgICAgICAgICAgIHNjcm9sbERlcHRoSW50ZXJ2YWxJZCA9IDA7CgogICAgICAgICAgICAvLyBSZXNldCBzY3JvbGwgZGVwdGggdHJhY2tpbmcgYW5kLCBpZiB0aGUgcGFnZSBoYXMgYXR0ZW50aW9uLCBzZXQgYW4gaW50ZXJ2YWwgdGltZXIgZm9yIGNoZWNraW5nIHNjcm9sbCBkZXB0aAogICAgICAgICAgICBtYXhSZWxhdGl2ZVNjcm9sbERlcHRoID0gMDsKICAgICAgICAgICAgaWYocGFnZU1hbmFnZXIucGFnZUhhc0F0dGVudGlvbikgewogICAgICAgICAgICAgICAgc2Nyb2xsRGVwdGhJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlTWF4UmVsYXRpdmVTY3JvbGxEZXB0aCwgc2Nyb2xsRGVwdGhVcGRhdGVJbnRlcnZhbCk7CiAgICAgICAgICAgIH0KICAgICAgICB9CiAgICAgICAgaWYocGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnRlZCkgewogICAgICAgICAgICBwYWdlVmlzaXRTdGFydCh7IHRpbWVTdGFtcDogcGFnZU1hbmFnZXIucGFnZVZpc2l0U3RhcnRUaW1lIH0pOwogICAgICAgIH0KICAgICAgICBwYWdlTWFuYWdlci5vblBhZ2VWaXNpdFN0YXJ0LmFkZExpc3RlbmVyKHBhZ2VWaXNpdFN0YXJ0KTsKCiAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlVmlzaXRTdG9wLmFkZExpc3RlbmVyKCh7IHRpbWVTdGFtcCB9KSA9PiB7CiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgYXR0ZW50aW9uIGFuZCBhdWRpbyBkdXJhdGlvbnMKICAgICAgICAgICAgaWYocGFnZU1hbmFnZXIucGFnZUhhc0F0dGVudGlvbikKICAgICAgICAgICAgICAgIGF0dGVudGlvbkR1cmF0aW9uICs9IHRpbWVTdGFtcCAtIGxhc3RBdHRlbnRpb25VcGRhdGVUaW1lOwogICAgICAgICAgICBpZihwYWdlTWFuYWdlci5wYWdlSGFzQXVkaW8pCiAgICAgICAgICAgICAgICBhdWRpb0R1cmF0aW9uICs9IHRpbWVTdGFtcCAtIGxhc3RBdWRpb1VwZGF0ZVRpbWU7CiAgICAgICAgICAgIGlmKHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24gJiYgcGFnZU1hbmFnZXIucGFnZUhhc0F1ZGlvKQogICAgICAgICAgICAgICAgYXR0ZW50aW9uQW5kQXVkaW9EdXJhdGlvbiArPSB0aW1lU3RhbXAgLSBNYXRoLm1heChsYXN0QXR0ZW50aW9uVXBkYXRlVGltZSwgbGFzdEF1ZGlvVXBkYXRlVGltZSk7CgogICAgICAgICAgICAvLyBDbGVhciB0aGUgaW50ZXJ2YWwgdGltZXIgZm9yIGNoZWNraW5nIHNjcm9sbCBkZXB0aAogICAgICAgICAgICBjbGVhckludGVydmFsKHNjcm9sbERlcHRoSW50ZXJ2YWxJZCk7CgogICAgICAgICAgICAvLyBTZW5kIHBhZ2UgZW5nYWdlbWVudCBkYXRhIHRvIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdAogICAgICAgICAgICBwYWdlTWFuYWdlci5zZW5kTWVzc2FnZSh7CiAgICAgICAgICAgICAgICB0eXBlOiAid2ViU2NpZW5jZS5wYWdlTmF2aWdhdGlvbi5wYWdlRGF0YSIsCiAgICAgICAgICAgICAgICBwYWdlSWQ6IHBhZ2VNYW5hZ2VyLnBhZ2VJZCwKICAgICAgICAgICAgICAgIHVybDogcGFnZU1hbmFnZXIudXJsLAogICAgICAgICAgICAgICAgcmVmZXJyZXI6IHBhZ2VNYW5hZ2VyLnJlZmVycmVyLAogICAgICAgICAgICAgICAgcGFnZVZpc2l0U3RhcnRUaW1lOiBwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydFRpbWUsCiAgICAgICAgICAgICAgICBwYWdlVmlzaXRTdG9wVGltZTogdGltZVN0YW1wLAogICAgICAgICAgICAgICAgYXR0ZW50aW9uRHVyYXRpb24sCiAgICAgICAgICAgICAgICBhdWRpb0R1cmF0aW9uLAogICAgICAgICAgICAgICAgYXR0ZW50aW9uQW5kQXVkaW9EdXJhdGlvbiwKICAgICAgICAgICAgICAgIG1heFJlbGF0aXZlU2Nyb2xsRGVwdGgsCiAgICAgICAgICAgICAgICBwcml2YXRlV2luZG93OiBicm93c2VyLmV4dGVuc2lvbi5pbkluY29nbml0b0NvbnRleHQKICAgICAgICAgICAgfSk7CiAgICAgICAgfSk7CgogICAgICAgIHBhZ2VNYW5hZ2VyLm9uUGFnZUF0dGVudGlvblVwZGF0ZS5hZGRMaXN0ZW5lcigoeyB0aW1lU3RhbXAgfSkgPT4gewogICAgICAgICAgICAvLyBJZiB0aGUgcGFnZSBqdXN0IGdhaW5lZCBhdHRlbnRpb24sIHN0YXJ0IHRoZSB0aW1lciwgYW5kIGlmIHRoaXMKICAgICAgICAgICAgLy8gd2FzIHRoZSBmaXJzdCB1c2VyIGF0dGVudGlvbiBzdG9yZSB0aGUgdGltZXN0YW1wCiAgICAgICAgICAgIGlmKHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdHRlbnRpb24pIHsKICAgICAgICAgICAgICAgIGlmKHNjcm9sbERlcHRoSW50ZXJ2YWxJZCA8PSAwKSB7CiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRGVwdGhJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlTWF4UmVsYXRpdmVTY3JvbGxEZXB0aCwgc2Nyb2xsRGVwdGhVcGRhdGVJbnRlcnZhbCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICBpZihmaXJzdEF0dGVudGlvblRpbWUgPCBwYWdlTWFuYWdlci5wYWdlVmlzaXRTdGFydFRpbWUpIHsKICAgICAgICAgICAgICAgICAgICBmaXJzdEF0dGVudGlvblRpbWUgPSB0aW1lU3RhbXA7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC8vIElmIHRoZSBwYWdlIGp1c3QgbG9zdCBhdHRlbnRpb24sIGFkZCB0byB0aGUgYXR0ZW50aW9uIGR1cmF0aW9uCiAgICAgICAgICAgIC8vIGFuZCBwb3NzaWJseSB0aGUgYXR0ZW50aW9uIGFuZCBhdWRpbyBkdXJhdGlvbiwgYW5kIHN0b3AgdGhlIHRpbWVyCiAgICAgICAgICAgIGlmKCFwYWdlTWFuYWdlci5wYWdlSGFzQXR0ZW50aW9uKSB7CiAgICAgICAgICAgICAgICBhdHRlbnRpb25EdXJhdGlvbiArPSB0aW1lU3RhbXAgLSBsYXN0QXR0ZW50aW9uVXBkYXRlVGltZTsKICAgICAgICAgICAgICAgIGlmKHBhZ2VNYW5hZ2VyLnBhZ2VIYXNBdWRpbykgewogICAgICAgICAgICAgICAgICAgIGF0dGVudGlvbkFuZEF1ZGlvRHVyYXRpb24gKz0gdGltZVN0YW1wIC0gTWF0aC5tYXgobGFzdEF0dGVudGlvblVwZGF0ZVRpbWUsIGxhc3RBdWRpb1VwZGF0ZVRpbWUpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxEZXB0aEludGVydmFsSWQpOwogICAgICAgICAgICAgICAgc2Nyb2xsRGVwdGhJbnRlcnZhbElkID0gMDsKICAgICAgICAgICAgfQogICAgICAgICAgICBsYXN0QXR0ZW50aW9uVXBkYXRlVGltZSA9IHRpbWVTdGFtcDsKICAgICAgICB9KTsKCiAgICAgICAgcGFnZU1hbmFnZXIub25QYWdlQXVkaW9VcGRhdGUuYWRkTGlzdGVuZXIoKHsgdGltZVN0YW1wIH0pID0+IHsKICAgICAgICAgICAgLy8gSWYgdGhlIHBhZ2UganVzdCBsb3N0IGF1ZGlvLCBhZGQgdG8gdGhlIGF1ZGlvIGR1cmF0aW9uCiAgICAgICAgICAgIC8vIGFuZCBwb3NzaWJseSB0aGUgYXR0ZW50aW9uIGFuZCBhdWRpbyBkdXJhdGlvbgogICAgICAgICAgICBpZighcGFnZU1hbmFnZXIucGFnZUhhc0F1ZGlvKSB7CiAgICAgICAgICAgICAgICBhdWRpb0R1cmF0aW9uICs9IHRpbWVTdGFtcCAtIGxhc3RBdWRpb1VwZGF0ZVRpbWU7CiAgICAgICAgICAgICAgICBpZihwYWdlTWFuYWdlci5wYWdlSGFzQXR0ZW50aW9uKSB7CiAgICAgICAgICAgICAgICAgICAgYXR0ZW50aW9uQW5kQXVkaW9EdXJhdGlvbiArPSB0aW1lU3RhbXAgLSBNYXRoLm1heChsYXN0QXR0ZW50aW9uVXBkYXRlVGltZSwgbGFzdEF1ZGlvVXBkYXRlVGltZSk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgbGFzdEF1ZGlvVXBkYXRlVGltZSA9IHRpbWVTdGFtcDsKICAgICAgICB9KTsKICAgIH07CgogICAgLy8gV2FpdCBmb3IgcGFnZU1hbmFnZXIgbG9hZAogICAgaWYgKCgid2ViU2NpZW5jZSIgaW4gd2luZG93KSAmJiAoInBhZ2VNYW5hZ2VyIiBpbiB3aW5kb3cud2ViU2NpZW5jZSkpIHsKICAgICAgICBwYWdlTmF2aWdhdGlvbigpOwogICAgfQogICAgZWxzZSB7CiAgICAgICAgaWYoISgicGFnZU1hbmFnZXJIYXNMb2FkZWQiIGluIHdpbmRvdykpIHsKICAgICAgICAgICAgd2luZG93LnBhZ2VNYW5hZ2VySGFzTG9hZGVkID0gW107CiAgICAgICAgfQogICAgICAgIHdpbmRvdy5wYWdlTWFuYWdlckhhc0xvYWRlZC5wdXNoKHBhZ2VOYXZpZ2F0aW9uKTsKICAgIH0KCn0oKSk7Cg==";

/**
 * This module enables measuring user engagement with webpages. See the `onPageData`
 * event for specifics.
 *
 * @module webScience.pageNavigation
 */

/**
 * Additional information about the page data event.
 * @typedef {Object} PageDataDetails
 * @property {number} pageId - The ID for the page, unique across browsing sessions.
 * @property {string} url - The URL of the page, without any hash.
 * @property {string} referrer - The referrer URL for the page, or `""` if there is no referrer.
 * @property {number} pageVisitStartTime - The time when the page visit started, in ms since
 * the epoch.
 * @property {number} pageVisitStopTime - The time when the page visit ended, in ms since the
 * epoch.
 * @property {number} attentionDuration - The amount of time in ms that the page had user attention.
 * @property {number} audioDuration - The amount of time in ms that the page was playing audio.
 * @property {number} attentionAndAudioDuration - The amount of time in ms that the page both had
 * user attention and was playing audio.
 * @property {number} maxRelativeScrollDepth - The maximum relative scroll depth on the page.
 * @property {boolean} privateWindow - Whether the page loaded in a private window.
 */

/**
 * @callback pageDataListener
 * @param {PageDataDetails} details - Additional information about the page data event.
 */

/**
 * @typedef {Object} PageDataListenerRecord
 * @property {matching.MatchPatternSet} matchPatternSet - The match patterns for the listener.
 * @property {boolean} privateWindows - Whether to notify the listener about pages in private windows.
 * @property {browser.contentScripts.RegisteredContentScript} contentScript - The content
 * script associated with the listener.
 * @private
 */

/**
 * A map where each key is a listener function and each value is a record for that listener function.
 * @constant {Map<pageDataListener, PageDataListenerRecord>}
 * @private
 */
const pageDataListeners = new Map();

/**
 * @callback PageDataAddListener
 * @param {pageDataListener} listener - The listener to add.
 * @param {Object} options - Options for the listener.
 * @param {string[]} options.matchPatterns - The webpages that the listener should be notified about, specified with WebExtensions match patterns.
 * @param {boolean} [options.privateWindows=false] - Whether to measure pages in private windows.
 */

/**
 * @callback PageDataRemoveListener
 * @param {pageDataListener} listener - The listener to remove.
 */

/**
 * @callback PageDataHasListener
 * @param {pageDataListener} listener - The listener to check.
 * @returns {boolean} Whether the listener has been added for the event.
 */

/**
 * @callback PageDataHasAnyListeners
 * @returns {boolean} Whether the event has any listeners.
 */

/**
 * @typedef {Object} PageDataEvent
 * @property {PageDataAddListener} addListener - Add a listener for page data.
 * @property {PageDataRemoveListener} removeListener - Remove a listener for page data.
 * @property {PageDataHasListener} hasListener - Whether a specified listener has been added.
 * @property {PageDataHasAnyListeners} hasAnyListeners - Whether the event has any listeners.
 */

/**
 * An event that fires when a page visit has ended and data about the
 * visit is available.
 * @constant {PageDataEvent}
 */
const onPageData = createEvent({
    name: "webScience.pageNavigation.onPageData",
    addListenerCallback: addListener$1,
    removeListenerCallback: removeListener$1,
    notifyListenersCallback: () => { return false; }
});

/**
 * Whether the module has completed initialization.
 * @type{boolean}
 * @private
 */
let initialized$3 = false;

/**
 * A callback function for adding a page data listener.
 * @param {pageDataCallback} listener - The listener function being added.
 * @param {Object} options - Options for the listener.
 * @param {string[]} options.matchPatterns - The match patterns for pages where the listener should
 * be notified.
 * @param {boolean} [options.privateWindows=false] - Whether the listener should be notified for
 * pages in private windows.
 * @private
 */
async function addListener$1(listener, {
    matchPatterns,
    privateWindows = false
}) {
    // Initialization
    if(!initialized$3) {
        initialized$3 = true;
        await initialize$1();
        onMessage.addListener(messageListener,
            {
                type: "webScience.pageNavigation.pageData",
                schema: {
                    pageId: "string",
                    url: "string",
                    referrer: "string",
                    pageVisitStartTime: "number",
                    pageVisitStopTime: "number",
                    attentionDuration: "number",
                    audioDuration: "number",
                    attentionAndAudioDuration: "number",
                    maxRelativeScrollDepth: "number",
                    privateWindow: "boolean"
                }
            });
    }

    // Compile the match patterns for the listener
    const matchPatternSet = createMatchPatternSet(matchPatterns);
    // Register a content script for the listener
    const contentScript = await browser.contentScripts.register({
        matches: matchPatterns,
        js: [{
            code: dataUrlToString(pageNavigationContentScript)
        }],
        runAt: "document_start"
    });

    // Store a record for the listener
    pageDataListeners.set(listener, {
        matchPatternSet,
        contentScript,
        privateWindows
    });
}

/**
 * A callback function for removing a page data listener.
 * @param {pageDataCallback} listener - The listener that is being removed.
 * @private
 */
 function removeListener$1(listener) {
    // If there is a record of the listener, unregister its content script
    // and delete the record
    const listenerRecord = pageDataListeners.get(listener);
    if(listenerRecord === undefined) {
        return;
    }
    listenerRecord.contentScript.unregister();
    pageDataListeners.delete(listener);
}

/**
 * A callback function for messages from the content script.
 * @param {PageDataDetails} pageData - Information about the page.
 * @private
 */
 function messageListener(pageData) {
    // Remove the type string from the content script message
    delete pageData.type;

    // Notify listeners when the private window and match pattern requirements are met
    for(const [listener, listenerRecord] of pageDataListeners) {
        if((!pageData.privateWindow || listenerRecord.privateWindows)
        && (listenerRecord.matchPatternSet.matches(pageData.url))) {
            listener(pageData);
        }
    }
}

/**
 * This module enables measuring user exposure to linked content. See the
 * `onLinkExposureData` and `onLinkExposureUpdate` events for specifics.
 * There is an important difference between these events: `onLinkExposureData`
 * fires once per page with a complete set of link exposure data, while
 * `onLinkExposureUpdate` fires throughout a page's lifespan as link exposures
 * occur. For most use cases, `onLinkExposureData` is the right event to use.
 *
 * @module webScience.linkExposure
 */

check({
    module: "webScience.linkExposure",
    requiredPermissions: [ "storage" ],
    suggestedPermissions: [ "unlimitedStorage" ]
});

var pageTextContentScript = "data:application/javascript;base64,KGZ1bmN0aW9uICgpIHsKCSd1c2Ugc3RyaWN0JzsKCglmdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbikgewoJICB2YXIgbW9kdWxlID0geyBleHBvcnRzOiB7fSB9OwoJCXJldHVybiBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7Cgl9CgoJLyplc2xpbnQtZW52IGVzNjpmYWxzZSovCgoJdmFyIFJlYWRhYmlsaXR5XzEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7CgkvKgoJICogQ29weXJpZ2h0IChjKSAyMDEwIEFyYzkwIEluYwoJICoKCSAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwoJICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLgoJICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0CgkgKgoJICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoJICoKCSAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKCSAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuICJBUyBJUyIgQkFTSVMsCgkgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KCSAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKCSAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLgoJICovCgoJLyoKCSAqIFRoaXMgY29kZSBpcyBoZWF2aWx5IGJhc2VkIG9uIEFyYzkwJ3MgcmVhZGFiaWxpdHkuanMgKDEuNy4xKSBzY3JpcHQKCSAqIGF2YWlsYWJsZSBhdDogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2FyYzkwbGFicy1yZWFkYWJpbGl0eQoJICovCgoJLyoqCgkgKiBQdWJsaWMgY29uc3RydWN0b3IuCgkgKiBAcGFyYW0ge0hUTUxEb2N1bWVudH0gZG9jICAgICBUaGUgZG9jdW1lbnQgdG8gcGFyc2UuCgkgKiBAcGFyYW0ge09iamVjdH0gICAgICAgb3B0aW9ucyBUaGUgb3B0aW9ucyBvYmplY3QuCgkgKi8KCWZ1bmN0aW9uIFJlYWRhYmlsaXR5KGRvYywgb3B0aW9ucykgewoJICAvLyBJbiBzb21lIG9sZGVyIHZlcnNpb25zLCBwZW9wbGUgcGFzc2VkIGEgVVJJIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gQ29wZToKCSAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kb2N1bWVudEVsZW1lbnQpIHsKCSAgICBkb2MgPSBvcHRpb25zOwoJICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbMl07CgkgIH0gZWxzZSBpZiAoIWRvYyB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCkgewoJICAgIHRocm93IG5ldyBFcnJvcigiRmlyc3QgYXJndW1lbnQgdG8gUmVhZGFiaWxpdHkgY29uc3RydWN0b3Igc2hvdWxkIGJlIGEgZG9jdW1lbnQgb2JqZWN0LiIpOwoJICB9CgkgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OwoKCSAgdGhpcy5fZG9jID0gZG9jOwoJICB0aGlzLl9kb2NKU0RPTVBhcnNlciA9IHRoaXMuX2RvYy5maXJzdENoaWxkLl9fSlNET01QYXJzZXJfXzsKCSAgdGhpcy5fYXJ0aWNsZVRpdGxlID0gbnVsbDsKCSAgdGhpcy5fYXJ0aWNsZUJ5bGluZSA9IG51bGw7CgkgIHRoaXMuX2FydGljbGVEaXIgPSBudWxsOwoJICB0aGlzLl9hcnRpY2xlU2l0ZU5hbWUgPSBudWxsOwoJICB0aGlzLl9hdHRlbXB0cyA9IFtdOwoKCSAgLy8gQ29uZmlndXJhYmxlIG9wdGlvbnMKCSAgdGhpcy5fZGVidWcgPSAhIW9wdGlvbnMuZGVidWc7CgkgIHRoaXMuX21heEVsZW1zVG9QYXJzZSA9IG9wdGlvbnMubWF4RWxlbXNUb1BhcnNlIHx8IHRoaXMuREVGQVVMVF9NQVhfRUxFTVNfVE9fUEFSU0U7CgkgIHRoaXMuX25iVG9wQ2FuZGlkYXRlcyA9IG9wdGlvbnMubmJUb3BDYW5kaWRhdGVzIHx8IHRoaXMuREVGQVVMVF9OX1RPUF9DQU5ESURBVEVTOwoJICB0aGlzLl9jaGFyVGhyZXNob2xkID0gb3B0aW9ucy5jaGFyVGhyZXNob2xkIHx8IHRoaXMuREVGQVVMVF9DSEFSX1RIUkVTSE9MRDsKCSAgdGhpcy5fY2xhc3Nlc1RvUHJlc2VydmUgPSB0aGlzLkNMQVNTRVNfVE9fUFJFU0VSVkUuY29uY2F0KG9wdGlvbnMuY2xhc3Nlc1RvUHJlc2VydmUgfHwgW10pOwoJICB0aGlzLl9rZWVwQ2xhc3NlcyA9ICEhb3B0aW9ucy5rZWVwQ2xhc3NlczsKCSAgdGhpcy5fc2VyaWFsaXplciA9IG9wdGlvbnMuc2VyaWFsaXplciB8fCBmdW5jdGlvbihlbCkgewoJICAgIHJldHVybiBlbC5pbm5lckhUTUw7CgkgIH07CgkgIHRoaXMuX2Rpc2FibGVKU09OTEQgPSAhIW9wdGlvbnMuZGlzYWJsZUpTT05MRDsKCgkgIC8vIFN0YXJ0IHdpdGggYWxsIGZsYWdzIHNldAoJICB0aGlzLl9mbGFncyA9IHRoaXMuRkxBR19TVFJJUF9VTkxJS0VMWVMgfAoJICAgICAgICAgICAgICAgIHRoaXMuRkxBR19XRUlHSFRfQ0xBU1NFUyB8CgkgICAgICAgICAgICAgICAgdGhpcy5GTEFHX0NMRUFOX0NPTkRJVElPTkFMTFk7CgoKCSAgLy8gQ29udHJvbCB3aGV0aGVyIGxvZyBtZXNzYWdlcyBhcmUgc2VudCB0byB0aGUgY29uc29sZQoJICBpZiAodGhpcy5fZGVidWcpIHsKCSAgICBsZXQgbG9nTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHsKCSAgICAgIGlmIChub2RlLm5vZGVUeXBlID09IG5vZGUuVEVYVF9OT0RFKSB7CgkgICAgICAgIHJldHVybiBgJHtub2RlLm5vZGVOYW1lfSAoIiR7bm9kZS50ZXh0Q29udGVudH0iKWA7CgkgICAgICB9CgkgICAgICBsZXQgYXR0clBhaXJzID0gQXJyYXkuZnJvbShub2RlLmF0dHJpYnV0ZXMgfHwgW10sIGZ1bmN0aW9uKGF0dHIpIHsKCSAgICAgICAgcmV0dXJuIGAke2F0dHIubmFtZX09IiR7YXR0ci52YWx1ZX0iYDsKCSAgICAgIH0pLmpvaW4oIiAiKTsKCSAgICAgIHJldHVybiBgPCR7bm9kZS5sb2NhbE5hbWV9ICR7YXR0clBhaXJzfT5gOwoJICAgIH07CgkgICAgdGhpcy5sb2cgPSBmdW5jdGlvbiAoKSB7CgkgICAgICBpZiAodHlwZW9mIGR1bXAgIT09ICJ1bmRlZmluZWQiKSB7CgkgICAgICAgIHZhciBtc2cgPSBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbih4KSB7CgkgICAgICAgICAgcmV0dXJuICh4ICYmIHgubm9kZU5hbWUpID8gbG9nTm9kZSh4KSA6IHg7CgkgICAgICAgIH0pLmpvaW4oIiAiKTsKCSAgICAgICAgZHVtcCgiUmVhZGVyOiAoUmVhZGFiaWxpdHkpICIgKyBtc2cgKyAiXG4iKTsKCSAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICJ1bmRlZmluZWQiKSB7CgkgICAgICAgIGxldCBhcmdzID0gQXJyYXkuZnJvbShhcmd1bWVudHMsIGFyZyA9PiB7CgkgICAgICAgICAgaWYgKGFyZyAmJiBhcmcubm9kZVR5cGUgPT0gdGhpcy5FTEVNRU5UX05PREUpIHsKCSAgICAgICAgICAgIHJldHVybiBsb2dOb2RlKGFyZyk7CgkgICAgICAgICAgfQoJICAgICAgICAgIHJldHVybiBhcmc7CgkgICAgICAgIH0pOwoJICAgICAgICBhcmdzLnVuc2hpZnQoIlJlYWRlcjogKFJlYWRhYmlsaXR5KSIpOwoJICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTsKCSAgICAgIH0KCSAgICB9OwoJICB9IGVsc2UgewoJICAgIHRoaXMubG9nID0gZnVuY3Rpb24gKCkge307CgkgIH0KCX0KCglSZWFkYWJpbGl0eS5wcm90b3R5cGUgPSB7CgkgIEZMQUdfU1RSSVBfVU5MSUtFTFlTOiAweDEsCgkgIEZMQUdfV0VJR0hUX0NMQVNTRVM6IDB4MiwKCSAgRkxBR19DTEVBTl9DT05ESVRJT05BTExZOiAweDQsCgoJICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZS9ub2RlVHlwZQoJICBFTEVNRU5UX05PREU6IDEsCgkgIFRFWFRfTk9ERTogMywKCgkgIC8vIE1heCBudW1iZXIgb2Ygbm9kZXMgc3VwcG9ydGVkIGJ5IHRoaXMgcGFyc2VyLiBEZWZhdWx0OiAwIChubyBsaW1pdCkKCSAgREVGQVVMVF9NQVhfRUxFTVNfVE9fUEFSU0U6IDAsCgoJICAvLyBUaGUgbnVtYmVyIG9mIHRvcCBjYW5kaWRhdGVzIHRvIGNvbnNpZGVyIHdoZW4gYW5hbHlzaW5nIGhvdwoJICAvLyB0aWdodCB0aGUgY29tcGV0aXRpb24gaXMgYW1vbmcgY2FuZGlkYXRlcy4KCSAgREVGQVVMVF9OX1RPUF9DQU5ESURBVEVTOiA1LAoKCSAgLy8gRWxlbWVudCB0YWdzIHRvIHNjb3JlIGJ5IGRlZmF1bHQuCgkgIERFRkFVTFRfVEFHU19UT19TQ09SRTogInNlY3Rpb24saDIsaDMsaDQsaDUsaDYscCx0ZCxwcmUiLnRvVXBwZXJDYXNlKCkuc3BsaXQoIiwiKSwKCgkgIC8vIFRoZSBkZWZhdWx0IG51bWJlciBvZiBjaGFycyBhbiBhcnRpY2xlIG11c3QgaGF2ZSBpbiBvcmRlciB0byByZXR1cm4gYSByZXN1bHQKCSAgREVGQVVMVF9DSEFSX1RIUkVTSE9MRDogNTAwLAoKCSAgLy8gQWxsIG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIGluIHVzZSB3aXRoaW4gcmVhZGFiaWxpdHkuCgkgIC8vIERlZmluZWQgdXAgaGVyZSBzbyB3ZSBkb24ndCBpbnN0YW50aWF0ZSB0aGVtIHJlcGVhdGVkbHkgaW4gbG9vcHMuCgkgIFJFR0VYUFM6IHsKCSAgICAvLyBOT1RFOiBUaGVzZSB0d28gcmVndWxhciBleHByZXNzaW9ucyBhcmUgZHVwbGljYXRlZCBpbgoJICAgIC8vIFJlYWRhYmlsaXR5LXJlYWRlcmFibGUuanMuIFBsZWFzZSBrZWVwIGJvdGggY29waWVzIGluIHN5bmMuCgkgICAgdW5saWtlbHlDYW5kaWRhdGVzOiAvLWFkLXxhaTJodG1sfGJhbm5lcnxicmVhZGNydW1ic3xjb21ieHxjb21tZW50fGNvbW11bml0eXxjb3Zlci13cmFwfGRpc3F1c3xleHRyYXxmb290ZXJ8Z2RwcnxoZWFkZXJ8bGVnZW5kc3xtZW51fHJlbGF0ZWR8cmVtYXJrfHJlcGxpZXN8cnNzfHNob3V0Ym94fHNpZGViYXJ8c2t5c2NyYXBlcnxzb2NpYWx8c3BvbnNvcnxzdXBwbGVtZW50YWx8YWQtYnJlYWt8YWdlZ2F0ZXxwYWdpbmF0aW9ufHBhZ2VyfHBvcHVwfHlvbS1yZW1vdGUvaSwKCSAgICBva01heWJlSXRzQUNhbmRpZGF0ZTogL2FuZHxhcnRpY2xlfGJvZHl8Y29sdW1ufGNvbnRlbnR8bWFpbnxzaGFkb3cvaSwKCgkgICAgcG9zaXRpdmU6IC9hcnRpY2xlfGJvZHl8Y29udGVudHxlbnRyeXxoZW50cnl8aC1lbnRyeXxtYWlufHBhZ2V8cGFnaW5hdGlvbnxwb3N0fHRleHR8YmxvZ3xzdG9yeS9pLAoJICAgIG5lZ2F0aXZlOiAvLWFkLXxoaWRkZW58XmhpZCR8IGhpZCR8IGhpZCB8XmhpZCB8YmFubmVyfGNvbWJ4fGNvbW1lbnR8Y29tLXxjb250YWN0fGZvb3R8Zm9vdGVyfGZvb3Rub3RlfGdkcHJ8bWFzdGhlYWR8bWVkaWF8bWV0YXxvdXRicmFpbnxwcm9tb3xyZWxhdGVkfHNjcm9sbHxzaGFyZXxzaG91dGJveHxzaWRlYmFyfHNreXNjcmFwZXJ8c3BvbnNvcnxzaG9wcGluZ3x0YWdzfHRvb2x8d2lkZ2V0L2ksCgkgICAgZXh0cmFuZW91czogL3ByaW50fGFyY2hpdmV8Y29tbWVudHxkaXNjdXNzfGVbXC1dP21haWx8c2hhcmV8cmVwbHl8YWxsfGxvZ2lufHNpZ258c2luZ2xlfHV0aWxpdHkvaSwKCSAgICBieWxpbmU6IC9ieWxpbmV8YXV0aG9yfGRhdGVsaW5lfHdyaXR0ZW5ieXxwLWF1dGhvci9pLAoJICAgIHJlcGxhY2VGb250czogLzwoXC8/KWZvbnRbXj5dKj4vZ2ksCgkgICAgbm9ybWFsaXplOiAvXHN7Mix9L2csCgkgICAgdmlkZW9zOiAvXC9cLyh3d3dcLik/KChkYWlseW1vdGlvbnx5b3V0dWJlfHlvdXR1YmUtbm9jb29raWV8cGxheWVyXC52aW1lb3x2XC5xcSlcLmNvbXwoYXJjaGl2ZXx1cGxvYWRcLndpa2ltZWRpYSlcLm9yZ3xwbGF5ZXJcLnR3aXRjaFwudHYpL2ksCgkgICAgc2hhcmVFbGVtZW50czogLyhcYnxfKShzaGFyZXxzaGFyZWRhZGR5KShcYnxfKS9pLAoJICAgIG5leHRMaW5rOiAvKG5leHR8d2VpdGVyfGNvbnRpbnVlfD4oW15cfF18JCl8wrsoW15cfF18JCkpL2ksCgkgICAgcHJldkxpbms6IC8ocHJldnxlYXJsfG9sZHxuZXd8PHzCqykvaSwKCSAgICB0b2tlbml6ZTogL1xXKy9nLAoJICAgIHdoaXRlc3BhY2U6IC9eXHMqJC8sCgkgICAgaGFzQ29udGVudDogL1xTJC8sCgkgICAgaGFzaFVybDogL14jLisvLAoJICAgIHNyY3NldFVybDogLyhcUyspKFxzK1tcZC5dK1t4d10pPyhccyooPzosfCQpKS9nLAoJICAgIGI2NERhdGFVcmw6IC9eZGF0YTpccyooW15cczssXSspXHMqO1xzKmJhc2U2NFxzKiwvaSwKCSAgICAvLyBTZWU6IGh0dHBzOi8vc2NoZW1hLm9yZy9BcnRpY2xlCgkgICAganNvbkxkQXJ0aWNsZVR5cGVzOiAvXkFydGljbGV8QWR2ZXJ0aXNlckNvbnRlbnRBcnRpY2xlfE5ld3NBcnRpY2xlfEFuYWx5c2lzTmV3c0FydGljbGV8QXNrUHVibGljTmV3c0FydGljbGV8QmFja2dyb3VuZE5ld3NBcnRpY2xlfE9waW5pb25OZXdzQXJ0aWNsZXxSZXBvcnRhZ2VOZXdzQXJ0aWNsZXxSZXZpZXdOZXdzQXJ0aWNsZXxSZXBvcnR8U2F0aXJpY2FsQXJ0aWNsZXxTY2hvbGFybHlBcnRpY2xlfE1lZGljYWxTY2hvbGFybHlBcnRpY2xlfFNvY2lhbE1lZGlhUG9zdGluZ3xCbG9nUG9zdGluZ3xMaXZlQmxvZ1Bvc3Rpbmd8RGlzY3Vzc2lvbkZvcnVtUG9zdGluZ3xUZWNoQXJ0aWNsZXxBUElSZWZlcmVuY2UkLwoJICB9LAoKCSAgVU5MSUtFTFlfUk9MRVM6IFsgIm1lbnUiLCAibWVudWJhciIsICJjb21wbGVtZW50YXJ5IiwgIm5hdmlnYXRpb24iLCAiYWxlcnQiLCAiYWxlcnRkaWFsb2ciLCAiZGlhbG9nIiBdLAoKCSAgRElWX1RPX1BfRUxFTVM6IG5ldyBTZXQoWyAiQkxPQ0tRVU9URSIsICJETCIsICJESVYiLCAiSU1HIiwgIk9MIiwgIlAiLCAiUFJFIiwgIlRBQkxFIiwgIlVMIiBdKSwKCgkgIEFMVEVSX1RPX0RJVl9FWENFUFRJT05TOiBbIkRJViIsICJBUlRJQ0xFIiwgIlNFQ1RJT04iLCAiUCJdLAoKCSAgUFJFU0VOVEFUSU9OQUxfQVRUUklCVVRFUzogWyAiYWxpZ24iLCAiYmFja2dyb3VuZCIsICJiZ2NvbG9yIiwgImJvcmRlciIsICJjZWxscGFkZGluZyIsICJjZWxsc3BhY2luZyIsICJmcmFtZSIsICJoc3BhY2UiLCAicnVsZXMiLCAic3R5bGUiLCAidmFsaWduIiwgInZzcGFjZSIgXSwKCgkgIERFUFJFQ0FURURfU0laRV9BVFRSSUJVVEVfRUxFTVM6IFsgIlRBQkxFIiwgIlRIIiwgIlREIiwgIkhSIiwgIlBSRSIgXSwKCgkgIC8vIFRoZSBjb21tZW50ZWQgb3V0IGVsZW1lbnRzIHF1YWxpZnkgYXMgcGhyYXNpbmcgY29udGVudCBidXQgdGVuZCB0byBiZQoJICAvLyByZW1vdmVkIGJ5IHJlYWRhYmlsaXR5IHdoZW4gcHV0IGludG8gcGFyYWdyYXBocywgc28gd2UgaWdub3JlIHRoZW0gaGVyZS4KCSAgUEhSQVNJTkdfRUxFTVM6IFsKCSAgICAvLyAiQ0FOVkFTIiwgIklGUkFNRSIsICJTVkciLCAiVklERU8iLAoJICAgICJBQkJSIiwgIkFVRElPIiwgIkIiLCAiQkRPIiwgIkJSIiwgIkJVVFRPTiIsICJDSVRFIiwgIkNPREUiLCAiREFUQSIsCgkgICAgIkRBVEFMSVNUIiwgIkRGTiIsICJFTSIsICJFTUJFRCIsICJJIiwgIklNRyIsICJJTlBVVCIsICJLQkQiLCAiTEFCRUwiLAoJICAgICJNQVJLIiwgIk1BVEgiLCAiTUVURVIiLCAiTk9TQ1JJUFQiLCAiT0JKRUNUIiwgIk9VVFBVVCIsICJQUk9HUkVTUyIsICJRIiwKCSAgICAiUlVCWSIsICJTQU1QIiwgIlNDUklQVCIsICJTRUxFQ1QiLCAiU01BTEwiLCAiU1BBTiIsICJTVFJPTkciLCAiU1VCIiwKCSAgICAiU1VQIiwgIlRFWFRBUkVBIiwgIlRJTUUiLCAiVkFSIiwgIldCUiIKCSAgXSwKCgkgIC8vIFRoZXNlIGFyZSB0aGUgY2xhc3NlcyB0aGF0IHJlYWRhYmlsaXR5IHNldHMgaXRzZWxmLgoJICBDTEFTU0VTX1RPX1BSRVNFUlZFOiBbICJwYWdlIiBdLAoKCSAgLy8gVGhlc2UgYXJlIHRoZSBsaXN0IG9mIEhUTUwgZW50aXRpZXMgdGhhdCBuZWVkIHRvIGJlIGVzY2FwZWQuCgkgIEhUTUxfRVNDQVBFX01BUDogewoJICAgICJsdCI6ICI8IiwKCSAgICAiZ3QiOiAiPiIsCgkgICAgImFtcCI6ICImIiwKCSAgICAicXVvdCI6ICciJywKCSAgICAiYXBvcyI6ICInIiwKCSAgfSwKCgkgIC8qKgoJICAgKiBSdW4gYW55IHBvc3QtcHJvY2VzcyBtb2RpZmljYXRpb25zIHRvIGFydGljbGUgY29udGVudCBhcyBuZWNlc3NhcnkuCgkgICAqCgkgICAqIEBwYXJhbSBFbGVtZW50CgkgICAqIEByZXR1cm4gdm9pZAoJICAqKi8KCSAgX3Bvc3RQcm9jZXNzQ29udGVudDogZnVuY3Rpb24oYXJ0aWNsZUNvbnRlbnQpIHsKCSAgICAvLyBSZWFkYWJpbGl0eSBjYW5ub3Qgb3BlbiByZWxhdGl2ZSB1cmlzIHNvIHdlIGNvbnZlcnQgdGhlbSB0byBhYnNvbHV0ZSB1cmlzLgoJICAgIHRoaXMuX2ZpeFJlbGF0aXZlVXJpcyhhcnRpY2xlQ29udGVudCk7CgoJICAgIHRoaXMuX3NpbXBsaWZ5TmVzdGVkRWxlbWVudHMoYXJ0aWNsZUNvbnRlbnQpOwoKCSAgICBpZiAoIXRoaXMuX2tlZXBDbGFzc2VzKSB7CgkgICAgICAvLyBSZW1vdmUgY2xhc3Nlcy4KCSAgICAgIHRoaXMuX2NsZWFuQ2xhc3NlcyhhcnRpY2xlQ29udGVudCk7CgkgICAgfQoJICB9LAoKCSAgLyoqCgkgICAqIEl0ZXJhdGVzIG92ZXIgYSBOb2RlTGlzdCwgY2FsbHMgYGZpbHRlckZuYCBmb3IgZWFjaCBub2RlIGFuZCByZW1vdmVzIG5vZGUKCSAgICogaWYgZnVuY3Rpb24gcmV0dXJuZWQgYHRydWVgLgoJICAgKgoJICAgKiBJZiBmdW5jdGlvbiBpcyBub3QgcGFzc2VkLCByZW1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gbm9kZSBsaXN0LgoJICAgKgoJICAgKiBAcGFyYW0gTm9kZUxpc3Qgbm9kZUxpc3QgVGhlIG5vZGVzIHRvIG9wZXJhdGUgb24KCSAgICogQHBhcmFtIEZ1bmN0aW9uIGZpbHRlckZuIHRoZSBmdW5jdGlvbiB0byB1c2UgYXMgYSBmaWx0ZXIKCSAgICogQHJldHVybiB2b2lkCgkgICAqLwoJICBfcmVtb3ZlTm9kZXM6IGZ1bmN0aW9uKG5vZGVMaXN0LCBmaWx0ZXJGbikgewoJICAgIC8vIEF2b2lkIGV2ZXIgb3BlcmF0aW5nIG9uIGxpdmUgbm9kZSBsaXN0cy4KCSAgICBpZiAodGhpcy5fZG9jSlNET01QYXJzZXIgJiYgbm9kZUxpc3QuX2lzTGl2ZU5vZGVMaXN0KSB7CgkgICAgICB0aHJvdyBuZXcgRXJyb3IoIkRvIG5vdCBwYXNzIGxpdmUgbm9kZSBsaXN0cyB0byBfcmVtb3ZlTm9kZXMiKTsKCSAgICB9CgkgICAgZm9yICh2YXIgaSA9IG5vZGVMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7CgkgICAgICB2YXIgbm9kZSA9IG5vZGVMaXN0W2ldOwoJICAgICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7CgkgICAgICBpZiAocGFyZW50Tm9kZSkgewoJICAgICAgICBpZiAoIWZpbHRlckZuIHx8IGZpbHRlckZuLmNhbGwodGhpcywgbm9kZSwgaSwgbm9kZUxpc3QpKSB7CgkgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTsKCSAgICAgICAgfQoJICAgICAgfQoJICAgIH0KCSAgfSwKCgkgIC8qKgoJICAgKiBJdGVyYXRlcyBvdmVyIGEgTm9kZUxpc3QsIGFuZCBjYWxscyBfc2V0Tm9kZVRhZyBmb3IgZWFjaCBub2RlLgoJICAgKgoJICAgKiBAcGFyYW0gTm9kZUxpc3Qgbm9kZUxpc3QgVGhlIG5vZGVzIHRvIG9wZXJhdGUgb24KCSAgICogQHBhcmFtIFN0cmluZyBuZXdUYWdOYW1lIHRoZSBuZXcgdGFnIG5hbWUgdG8gdXNlCgkgICAqIEByZXR1cm4gdm9pZAoJICAgKi8KCSAgX3JlcGxhY2VOb2RlVGFnczogZnVuY3Rpb24obm9kZUxpc3QsIG5ld1RhZ05hbWUpIHsKCSAgICAvLyBBdm9pZCBldmVyIG9wZXJhdGluZyBvbiBsaXZlIG5vZGUgbGlzdHMuCgkgICAgaWYgKHRoaXMuX2RvY0pTRE9NUGFyc2VyICYmIG5vZGVMaXN0Ll9pc0xpdmVOb2RlTGlzdCkgewoJICAgICAgdGhyb3cgbmV3IEVycm9yKCJEbyBub3QgcGFzcyBsaXZlIG5vZGUgbGlzdHMgdG8gX3JlcGxhY2VOb2RlVGFncyIpOwoJICAgIH0KCSAgICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZUxpc3QpIHsKCSAgICAgIHRoaXMuX3NldE5vZGVUYWcobm9kZSwgbmV3VGFnTmFtZSk7CgkgICAgfQoJICB9LAoKCSAgLyoqCgkgICAqIEl0ZXJhdGUgb3ZlciBhIE5vZGVMaXN0LCB3aGljaCBkb2Vzbid0IG5hdGl2ZWx5IGZ1bGx5IGltcGxlbWVudCB0aGUgQXJyYXkKCSAgICogaW50ZXJmYWNlLgoJICAgKgoJICAgKiBGb3IgY29udmVuaWVuY2UsIHRoZSBjdXJyZW50IG9iamVjdCBjb250ZXh0IGlzIGFwcGxpZWQgdG8gdGhlIHByb3ZpZGVkCgkgICAqIGl0ZXJhdGUgZnVuY3Rpb24uCgkgICAqCgkgICAqIEBwYXJhbSAgTm9kZUxpc3Qgbm9kZUxpc3QgVGhlIE5vZGVMaXN0LgoJICAgKiBAcGFyYW0gIEZ1bmN0aW9uIGZuICAgICAgIFRoZSBpdGVyYXRlIGZ1bmN0aW9uLgoJICAgKiBAcmV0dXJuIHZvaWQKCSAgICovCgkgIF9mb3JFYWNoTm9kZTogZnVuY3Rpb24obm9kZUxpc3QsIGZuKSB7CgkgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlTGlzdCwgZm4sIHRoaXMpOwoJICB9LAoKCSAgLyoqCgkgICAqIEl0ZXJhdGUgb3ZlciBhIE5vZGVMaXN0LCBhbmQgcmV0dXJuIHRoZSBmaXJzdCBub2RlIHRoYXQgcGFzc2VzCgkgICAqIHRoZSBzdXBwbGllZCB0ZXN0IGZ1bmN0aW9uCgkgICAqCgkgICAqIEZvciBjb252ZW5pZW5jZSwgdGhlIGN1cnJlbnQgb2JqZWN0IGNvbnRleHQgaXMgYXBwbGllZCB0byB0aGUgcHJvdmlkZWQKCSAgICogdGVzdCBmdW5jdGlvbi4KCSAgICoKCSAgICogQHBhcmFtICBOb2RlTGlzdCBub2RlTGlzdCBUaGUgTm9kZUxpc3QuCgkgICAqIEBwYXJhbSAgRnVuY3Rpb24gZm4gICAgICAgVGhlIHRlc3QgZnVuY3Rpb24uCgkgICAqIEByZXR1cm4gdm9pZAoJICAgKi8KCSAgX2ZpbmROb2RlOiBmdW5jdGlvbihub2RlTGlzdCwgZm4pIHsKCSAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChub2RlTGlzdCwgZm4sIHRoaXMpOwoJICB9LAoKCSAgLyoqCgkgICAqIEl0ZXJhdGUgb3ZlciBhIE5vZGVMaXN0LCByZXR1cm4gdHJ1ZSBpZiBhbnkgb2YgdGhlIHByb3ZpZGVkIGl0ZXJhdGUKCSAgICogZnVuY3Rpb24gY2FsbHMgcmV0dXJucyB0cnVlLCBmYWxzZSBvdGhlcndpc2UuCgkgICAqCgkgICAqIEZvciBjb252ZW5pZW5jZSwgdGhlIGN1cnJlbnQgb2JqZWN0IGNvbnRleHQgaXMgYXBwbGllZCB0byB0aGUKCSAgICogcHJvdmlkZWQgaXRlcmF0ZSBmdW5jdGlvbi4KCSAgICoKCSAgICogQHBhcmFtICBOb2RlTGlzdCBub2RlTGlzdCBUaGUgTm9kZUxpc3QuCgkgICAqIEBwYXJhbSAgRnVuY3Rpb24gZm4gICAgICAgVGhlIGl0ZXJhdGUgZnVuY3Rpb24uCgkgICAqIEByZXR1cm4gQm9vbGVhbgoJICAgKi8KCSAgX3NvbWVOb2RlOiBmdW5jdGlvbihub2RlTGlzdCwgZm4pIHsKCSAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChub2RlTGlzdCwgZm4sIHRoaXMpOwoJICB9LAoKCSAgLyoqCgkgICAqIEl0ZXJhdGUgb3ZlciBhIE5vZGVMaXN0LCByZXR1cm4gdHJ1ZSBpZiBhbGwgb2YgdGhlIHByb3ZpZGVkIGl0ZXJhdGUKCSAgICogZnVuY3Rpb24gY2FsbHMgcmV0dXJuIHRydWUsIGZhbHNlIG90aGVyd2lzZS4KCSAgICoKCSAgICogRm9yIGNvbnZlbmllbmNlLCB0aGUgY3VycmVudCBvYmplY3QgY29udGV4dCBpcyBhcHBsaWVkIHRvIHRoZQoJICAgKiBwcm92aWRlZCBpdGVyYXRlIGZ1bmN0aW9uLgoJICAgKgoJICAgKiBAcGFyYW0gIE5vZGVMaXN0IG5vZGVMaXN0IFRoZSBOb2RlTGlzdC4KCSAgICogQHBhcmFtICBGdW5jdGlvbiBmbiAgICAgICBUaGUgaXRlcmF0ZSBmdW5jdGlvbi4KCSAgICogQHJldHVybiBCb29sZWFuCgkgICAqLwoJICBfZXZlcnlOb2RlOiBmdW5jdGlvbihub2RlTGlzdCwgZm4pIHsKCSAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LmNhbGwobm9kZUxpc3QsIGZuLCB0aGlzKTsKCSAgfSwKCgkgIC8qKgoJICAgKiBDb25jYXQgYWxsIG5vZGVsaXN0cyBwYXNzZWQgYXMgYXJndW1lbnRzLgoJICAgKgoJICAgKiBAcmV0dXJuIC4uLk5vZGVMaXN0CgkgICAqIEByZXR1cm4gQXJyYXkKCSAgICovCgkgIF9jb25jYXROb2RlTGlzdHM6IGZ1bmN0aW9uKCkgewoJICAgIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTsKCSAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKTsKCSAgICB2YXIgbm9kZUxpc3RzID0gYXJncy5tYXAoZnVuY3Rpb24obGlzdCkgewoJICAgICAgcmV0dXJuIHNsaWNlLmNhbGwobGlzdCk7CgkgICAgfSk7CgkgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIG5vZGVMaXN0cyk7CgkgIH0sCgoJICBfZ2V0QWxsTm9kZXNXaXRoVGFnOiBmdW5jdGlvbihub2RlLCB0YWdOYW1lcykgewoJICAgIGlmIChub2RlLnF1ZXJ5U2VsZWN0b3JBbGwpIHsKCSAgICAgIHJldHVybiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwodGFnTmFtZXMuam9pbigiLCIpKTsKCSAgICB9CgkgICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgdGFnTmFtZXMubWFwKGZ1bmN0aW9uKHRhZykgewoJICAgICAgdmFyIGNvbGxlY3Rpb24gPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZyk7CgkgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKSA/IGNvbGxlY3Rpb24gOiBBcnJheS5mcm9tKGNvbGxlY3Rpb24pOwoJICAgIH0pKTsKCSAgfSwKCgkgIC8qKgoJICAgKiBSZW1vdmVzIHRoZSBjbGFzcz0iIiBhdHRyaWJ1dGUgZnJvbSBldmVyeSBlbGVtZW50IGluIHRoZSBnaXZlbgoJICAgKiBzdWJ0cmVlLCBleGNlcHQgdGhvc2UgdGhhdCBtYXRjaCBDTEFTU0VTX1RPX1BSRVNFUlZFIGFuZAoJICAgKiB0aGUgY2xhc3Nlc1RvUHJlc2VydmUgYXJyYXkgZnJvbSB0aGUgb3B0aW9ucyBvYmplY3QuCgkgICAqCgkgICAqIEBwYXJhbSBFbGVtZW50CgkgICAqIEByZXR1cm4gdm9pZAoJICAgKi8KCSAgX2NsZWFuQ2xhc3NlczogZnVuY3Rpb24obm9kZSkgewoJICAgIHZhciBjbGFzc2VzVG9QcmVzZXJ2ZSA9IHRoaXMuX2NsYXNzZXNUb1ByZXNlcnZlOwoJICAgIHZhciBjbGFzc05hbWUgPSAobm9kZS5nZXRBdHRyaWJ1dGUoImNsYXNzIikgfHwgIiIpCgkgICAgICAuc3BsaXQoL1xzKy8pCgkgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNscykgewoJICAgICAgICByZXR1cm4gY2xhc3Nlc1RvUHJlc2VydmUuaW5kZXhPZihjbHMpICE9IC0xOwoJICAgICAgfSkKCSAgICAgIC5qb2luKCIgIik7CgoJICAgIGlmIChjbGFzc05hbWUpIHsKCSAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCJjbGFzcyIsIGNsYXNzTmFtZSk7CgkgICAgfSBlbHNlIHsKCSAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCJjbGFzcyIpOwoJICAgIH0KCgkgICAgZm9yIChub2RlID0gbm9kZS5maXJzdEVsZW1lbnRDaGlsZDsgbm9kZTsgbm9kZSA9IG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nKSB7CgkgICAgICB0aGlzLl9jbGVhbkNsYXNzZXMobm9kZSk7CgkgICAgfQoJICB9LAoKCSAgLyoqCgkgICAqIENvbnZlcnRzIGVhY2ggPGE+IGFuZCA8aW1nPiB1cmkgaW4gdGhlIGdpdmVuIGVsZW1lbnQgdG8gYW4gYWJzb2x1dGUgVVJJLAoJICAgKiBpZ25vcmluZyAjcmVmIFVSSXMuCgkgICAqCgkgICAqIEBwYXJhbSBFbGVtZW50CgkgICAqIEByZXR1cm4gdm9pZAoJICAgKi8KCSAgX2ZpeFJlbGF0aXZlVXJpczogZnVuY3Rpb24oYXJ0aWNsZUNvbnRlbnQpIHsKCSAgICB2YXIgYmFzZVVSSSA9IHRoaXMuX2RvYy5iYXNlVVJJOwoJICAgIHZhciBkb2N1bWVudFVSSSA9IHRoaXMuX2RvYy5kb2N1bWVudFVSSTsKCSAgICBmdW5jdGlvbiB0b0Fic29sdXRlVVJJKHVyaSkgewoJICAgICAgLy8gTGVhdmUgaGFzaCBsaW5rcyBhbG9uZSBpZiB0aGUgYmFzZSBVUkkgbWF0Y2hlcyB0aGUgZG9jdW1lbnQgVVJJOgoJICAgICAgaWYgKGJhc2VVUkkgPT0gZG9jdW1lbnRVUkkgJiYgdXJpLmNoYXJBdCgwKSA9PSAiIyIpIHsKCSAgICAgICAgcmV0dXJuIHVyaTsKCSAgICAgIH0KCgkgICAgICAvLyBPdGhlcndpc2UsIHJlc29sdmUgYWdhaW5zdCBiYXNlIFVSSToKCSAgICAgIHRyeSB7CgkgICAgICAgIHJldHVybiBuZXcgVVJMKHVyaSwgYmFzZVVSSSkuaHJlZjsKCSAgICAgIH0gY2F0Y2ggKGV4KSB7CgkgICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHdyb25nLCBqdXN0IHJldHVybiB0aGUgb3JpZ2luYWw6CgkgICAgICB9CgkgICAgICByZXR1cm4gdXJpOwoJICAgIH0KCgkgICAgdmFyIGxpbmtzID0gdGhpcy5fZ2V0QWxsTm9kZXNXaXRoVGFnKGFydGljbGVDb250ZW50LCBbImEiXSk7CgkgICAgdGhpcy5fZm9yRWFjaE5vZGUobGlua3MsIGZ1bmN0aW9uKGxpbmspIHsKCSAgICAgIHZhciBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoImhyZWYiKTsKCSAgICAgIGlmIChocmVmKSB7CgkgICAgICAgIC8vIFJlbW92ZSBsaW5rcyB3aXRoIGphdmFzY3JpcHQ6IFVSSXMsIHNpbmNlCgkgICAgICAgIC8vIHRoZXkgd29uJ3Qgd29yayBhZnRlciBzY3JpcHRzIGhhdmUgYmVlbiByZW1vdmVkIGZyb20gdGhlIHBhZ2UuCgkgICAgICAgIGlmIChocmVmLmluZGV4T2YoImphdmFzY3JpcHQ6IikgPT09IDApIHsKCSAgICAgICAgICAvLyBpZiB0aGUgbGluayBvbmx5IGNvbnRhaW5zIHNpbXBsZSB0ZXh0IGNvbnRlbnQsIGl0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSB0ZXh0IG5vZGUKCSAgICAgICAgICBpZiAobGluay5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSAmJiBsaW5rLmNoaWxkTm9kZXNbMF0ubm9kZVR5cGUgPT09IHRoaXMuVEVYVF9OT0RFKSB7CgkgICAgICAgICAgICB2YXIgdGV4dCA9IHRoaXMuX2RvYy5jcmVhdGVUZXh0Tm9kZShsaW5rLnRleHRDb250ZW50KTsKCSAgICAgICAgICAgIGxpbmsucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodGV4dCwgbGluayk7CgkgICAgICAgICAgfSBlbHNlIHsKCSAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGhhcyBtdWx0aXBsZSBjaGlsZHJlbiwgdGhleSBzaG91bGQgYWxsIGJlIHByZXNlcnZlZAoJICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuX2RvYy5jcmVhdGVFbGVtZW50KCJzcGFuIik7CgkgICAgICAgICAgICB3aGlsZSAobGluay5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHsKCSAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpbmsuY2hpbGROb2Rlc1swXSk7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgICBsaW5rLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbnRhaW5lciwgbGluayk7CgkgICAgICAgICAgfQoJICAgICAgICB9IGVsc2UgewoJICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCJocmVmIiwgdG9BYnNvbHV0ZVVSSShocmVmKSk7CgkgICAgICAgIH0KCSAgICAgIH0KCSAgICB9KTsKCgkgICAgdmFyIG1lZGlhcyA9IHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhhcnRpY2xlQ29udGVudCwgWwoJICAgICAgImltZyIsICJwaWN0dXJlIiwgImZpZ3VyZSIsICJ2aWRlbyIsICJhdWRpbyIsICJzb3VyY2UiCgkgICAgXSk7CgoJICAgIHRoaXMuX2ZvckVhY2hOb2RlKG1lZGlhcywgZnVuY3Rpb24obWVkaWEpIHsKCSAgICAgIHZhciBzcmMgPSBtZWRpYS5nZXRBdHRyaWJ1dGUoInNyYyIpOwoJICAgICAgdmFyIHBvc3RlciA9IG1lZGlhLmdldEF0dHJpYnV0ZSgicG9zdGVyIik7CgkgICAgICB2YXIgc3Jjc2V0ID0gbWVkaWEuZ2V0QXR0cmlidXRlKCJzcmNzZXQiKTsKCgkgICAgICBpZiAoc3JjKSB7CgkgICAgICAgIG1lZGlhLnNldEF0dHJpYnV0ZSgic3JjIiwgdG9BYnNvbHV0ZVVSSShzcmMpKTsKCSAgICAgIH0KCgkgICAgICBpZiAocG9zdGVyKSB7CgkgICAgICAgIG1lZGlhLnNldEF0dHJpYnV0ZSgicG9zdGVyIiwgdG9BYnNvbHV0ZVVSSShwb3N0ZXIpKTsKCSAgICAgIH0KCgkgICAgICBpZiAoc3Jjc2V0KSB7CgkgICAgICAgIHZhciBuZXdTcmNzZXQgPSBzcmNzZXQucmVwbGFjZSh0aGlzLlJFR0VYUFMuc3Jjc2V0VXJsLCBmdW5jdGlvbihfLCBwMSwgcDIsIHAzKSB7CgkgICAgICAgICAgcmV0dXJuIHRvQWJzb2x1dGVVUkkocDEpICsgKHAyIHx8ICIiKSArIHAzOwoJICAgICAgICB9KTsKCgkgICAgICAgIG1lZGlhLnNldEF0dHJpYnV0ZSgic3Jjc2V0IiwgbmV3U3Jjc2V0KTsKCSAgICAgIH0KCSAgICB9KTsKCSAgfSwKCgkgIF9zaW1wbGlmeU5lc3RlZEVsZW1lbnRzOiBmdW5jdGlvbihhcnRpY2xlQ29udGVudCkgewoJICAgIHZhciBub2RlID0gYXJ0aWNsZUNvbnRlbnQ7CgoJICAgIHdoaWxlIChub2RlKSB7CgkgICAgICBpZiAobm9kZS5wYXJlbnROb2RlICYmIFsiRElWIiwgIlNFQ1RJT04iXS5pbmNsdWRlcyhub2RlLnRhZ05hbWUpICYmICEobm9kZS5pZCAmJiBub2RlLmlkLnN0YXJ0c1dpdGgoInJlYWRhYmlsaXR5IikpKSB7CgkgICAgICAgIGlmICh0aGlzLl9pc0VsZW1lbnRXaXRob3V0Q29udGVudChub2RlKSkgewoJICAgICAgICAgIG5vZGUgPSB0aGlzLl9yZW1vdmVBbmRHZXROZXh0KG5vZGUpOwoJICAgICAgICAgIGNvbnRpbnVlOwoJICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2hhc1NpbmdsZVRhZ0luc2lkZUVsZW1lbnQobm9kZSwgIkRJViIpIHx8IHRoaXMuX2hhc1NpbmdsZVRhZ0luc2lkZUVsZW1lbnQobm9kZSwgIlNFQ1RJT04iKSkgewoJICAgICAgICAgIHZhciBjaGlsZCA9IG5vZGUuY2hpbGRyZW5bMF07CgkgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZShub2RlLmF0dHJpYnV0ZXNbaV0ubmFtZSwgbm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlKTsKCSAgICAgICAgICB9CgkgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjaGlsZCwgbm9kZSk7CgkgICAgICAgICAgbm9kZSA9IGNoaWxkOwoJICAgICAgICAgIGNvbnRpbnVlOwoJICAgICAgICB9CgkgICAgICB9CgoJICAgICAgbm9kZSA9IHRoaXMuX2dldE5leHROb2RlKG5vZGUpOwoJICAgIH0KCSAgfSwKCgkgIC8qKgoJICAgKiBHZXQgdGhlIGFydGljbGUgdGl0bGUgYXMgYW4gSDEuCgkgICAqCgkgICAqIEByZXR1cm4gc3RyaW5nCgkgICAqKi8KCSAgX2dldEFydGljbGVUaXRsZTogZnVuY3Rpb24oKSB7CgkgICAgdmFyIGRvYyA9IHRoaXMuX2RvYzsKCSAgICB2YXIgY3VyVGl0bGUgPSAiIjsKCSAgICB2YXIgb3JpZ1RpdGxlID0gIiI7CgoJICAgIHRyeSB7CgkgICAgICBjdXJUaXRsZSA9IG9yaWdUaXRsZSA9IGRvYy50aXRsZS50cmltKCk7CgoJICAgICAgLy8gSWYgdGhleSBoYWQgYW4gZWxlbWVudCB3aXRoIGlkICJ0aXRsZSIgaW4gdGhlaXIgSFRNTAoJICAgICAgaWYgKHR5cGVvZiBjdXJUaXRsZSAhPT0gInN0cmluZyIpCgkgICAgICAgIGN1clRpdGxlID0gb3JpZ1RpdGxlID0gdGhpcy5fZ2V0SW5uZXJUZXh0KGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgidGl0bGUiKVswXSk7CgkgICAgfSBjYXRjaCAoZSkgey8qIGlnbm9yZSBleGNlcHRpb25zIHNldHRpbmcgdGhlIHRpdGxlLiAqL30KCgkgICAgdmFyIHRpdGxlSGFkSGllcmFyY2hpY2FsU2VwYXJhdG9ycyA9IGZhbHNlOwoJICAgIGZ1bmN0aW9uIHdvcmRDb3VudChzdHIpIHsKCSAgICAgIHJldHVybiBzdHIuc3BsaXQoL1xzKy8pLmxlbmd0aDsKCSAgICB9CgoJICAgIC8vIElmIHRoZXJlJ3MgYSBzZXBhcmF0b3IgaW4gdGhlIHRpdGxlLCBmaXJzdCByZW1vdmUgdGhlIGZpbmFsIHBhcnQKCSAgICBpZiAoKC8gW1x8XC1cXFwvPsK7XSAvKS50ZXN0KGN1clRpdGxlKSkgewoJICAgICAgdGl0bGVIYWRIaWVyYXJjaGljYWxTZXBhcmF0b3JzID0gLyBbXFxcLz7Cu10gLy50ZXN0KGN1clRpdGxlKTsKCSAgICAgIGN1clRpdGxlID0gb3JpZ1RpdGxlLnJlcGxhY2UoLyguKilbXHxcLVxcXC8+wrtdIC4qL2dpLCAiJDEiKTsKCgkgICAgICAvLyBJZiB0aGUgcmVzdWx0aW5nIHRpdGxlIGlzIHRvbyBzaG9ydCAoMyB3b3JkcyBvciBmZXdlciksIHJlbW92ZQoJICAgICAgLy8gdGhlIGZpcnN0IHBhcnQgaW5zdGVhZDoKCSAgICAgIGlmICh3b3JkQ291bnQoY3VyVGl0bGUpIDwgMykKCSAgICAgICAgY3VyVGl0bGUgPSBvcmlnVGl0bGUucmVwbGFjZSgvW15cfFwtXFxcLz7Cu10qW1x8XC1cXFwvPsK7XSguKikvZ2ksICIkMSIpOwoJICAgIH0gZWxzZSBpZiAoY3VyVGl0bGUuaW5kZXhPZigiOiAiKSAhPT0gLTEpIHsKCSAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW4gaGVhZGluZyBjb250YWluaW5nIHRoaXMgZXhhY3Qgc3RyaW5nLCBzbyB3ZQoJICAgICAgLy8gY291bGQgYXNzdW1lIGl0J3MgdGhlIGZ1bGwgdGl0bGUuCgkgICAgICB2YXIgaGVhZGluZ3MgPSB0aGlzLl9jb25jYXROb2RlTGlzdHMoCgkgICAgICAgIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaDEiKSwKCSAgICAgICAgZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJoMiIpCgkgICAgICApOwoJICAgICAgdmFyIHRyaW1tZWRUaXRsZSA9IGN1clRpdGxlLnRyaW0oKTsKCSAgICAgIHZhciBtYXRjaCA9IHRoaXMuX3NvbWVOb2RlKGhlYWRpbmdzLCBmdW5jdGlvbihoZWFkaW5nKSB7CgkgICAgICAgIHJldHVybiBoZWFkaW5nLnRleHRDb250ZW50LnRyaW0oKSA9PT0gdHJpbW1lZFRpdGxlOwoJICAgICAgfSk7CgoJICAgICAgLy8gSWYgd2UgZG9uJ3QsIGxldCdzIGV4dHJhY3QgdGhlIHRpdGxlIG91dCBvZiB0aGUgb3JpZ2luYWwgdGl0bGUgc3RyaW5nLgoJICAgICAgaWYgKCFtYXRjaCkgewoJICAgICAgICBjdXJUaXRsZSA9IG9yaWdUaXRsZS5zdWJzdHJpbmcob3JpZ1RpdGxlLmxhc3RJbmRleE9mKCI6IikgKyAxKTsKCgkgICAgICAgIC8vIElmIHRoZSB0aXRsZSBpcyBub3cgdG9vIHNob3J0LCB0cnkgdGhlIGZpcnN0IGNvbG9uIGluc3RlYWQ6CgkgICAgICAgIGlmICh3b3JkQ291bnQoY3VyVGl0bGUpIDwgMykgewoJICAgICAgICAgIGN1clRpdGxlID0gb3JpZ1RpdGxlLnN1YnN0cmluZyhvcmlnVGl0bGUuaW5kZXhPZigiOiIpICsgMSk7CgkgICAgICAgICAgLy8gQnV0IGlmIHdlIGhhdmUgdG9vIG1hbnkgd29yZHMgYmVmb3JlIHRoZSBjb2xvbiB0aGVyZSdzIHNvbWV0aGluZyB3ZWlyZAoJICAgICAgICAgIC8vIHdpdGggdGhlIHRpdGxlcyBhbmQgdGhlIEggdGFncyBzbyBsZXQncyBqdXN0IHVzZSB0aGUgb3JpZ2luYWwgdGl0bGUgaW5zdGVhZAoJICAgICAgICB9IGVsc2UgaWYgKHdvcmRDb3VudChvcmlnVGl0bGUuc3Vic3RyKDAsIG9yaWdUaXRsZS5pbmRleE9mKCI6IikpKSA+IDUpIHsKCSAgICAgICAgICBjdXJUaXRsZSA9IG9yaWdUaXRsZTsKCSAgICAgICAgfQoJICAgICAgfQoJICAgIH0gZWxzZSBpZiAoY3VyVGl0bGUubGVuZ3RoID4gMTUwIHx8IGN1clRpdGxlLmxlbmd0aCA8IDE1KSB7CgkgICAgICB2YXIgaE9uZXMgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImgxIik7CgoJICAgICAgaWYgKGhPbmVzLmxlbmd0aCA9PT0gMSkKCSAgICAgICAgY3VyVGl0bGUgPSB0aGlzLl9nZXRJbm5lclRleHQoaE9uZXNbMF0pOwoJICAgIH0KCgkgICAgY3VyVGl0bGUgPSBjdXJUaXRsZS50cmltKCkucmVwbGFjZSh0aGlzLlJFR0VYUFMubm9ybWFsaXplLCAiICIpOwoJICAgIC8vIElmIHdlIG5vdyBoYXZlIDQgd29yZHMgb3IgZmV3ZXIgYXMgb3VyIHRpdGxlLCBhbmQgZWl0aGVyIG5vCgkgICAgLy8gJ2hpZXJhcmNoaWNhbCcgc2VwYXJhdG9ycyAoXCwgLywgPiBvciDCuykgd2VyZSBmb3VuZCBpbiB0aGUgb3JpZ2luYWwKCSAgICAvLyB0aXRsZSBvciB3ZSBkZWNyZWFzZWQgdGhlIG51bWJlciBvZiB3b3JkcyBieSBtb3JlIHRoYW4gMSB3b3JkLCB1c2UKCSAgICAvLyB0aGUgb3JpZ2luYWwgdGl0bGUuCgkgICAgdmFyIGN1clRpdGxlV29yZENvdW50ID0gd29yZENvdW50KGN1clRpdGxlKTsKCSAgICBpZiAoY3VyVGl0bGVXb3JkQ291bnQgPD0gNCAmJgoJICAgICAgICAoIXRpdGxlSGFkSGllcmFyY2hpY2FsU2VwYXJhdG9ycyB8fAoJICAgICAgICAgY3VyVGl0bGVXb3JkQ291bnQgIT0gd29yZENvdW50KG9yaWdUaXRsZS5yZXBsYWNlKC9bXHxcLVxcXC8+wrtdKy9nLCAiIikpIC0gMSkpIHsKCSAgICAgIGN1clRpdGxlID0gb3JpZ1RpdGxlOwoJICAgIH0KCgkgICAgcmV0dXJuIGN1clRpdGxlOwoJICB9LAoKCSAgLyoqCgkgICAqIFByZXBhcmUgdGhlIEhUTUwgZG9jdW1lbnQgZm9yIHJlYWRhYmlsaXR5IHRvIHNjcmFwZSBpdC4KCSAgICogVGhpcyBpbmNsdWRlcyB0aGluZ3MgbGlrZSBzdHJpcHBpbmcgamF2YXNjcmlwdCwgQ1NTLCBhbmQgaGFuZGxpbmcgdGVycmlibGUgbWFya3VwLgoJICAgKgoJICAgKiBAcmV0dXJuIHZvaWQKCSAgICoqLwoJICBfcHJlcERvY3VtZW50OiBmdW5jdGlvbigpIHsKCSAgICB2YXIgZG9jID0gdGhpcy5fZG9jOwoKCSAgICAvLyBSZW1vdmUgYWxsIHN0eWxlIHRhZ3MgaW4gaGVhZAoJICAgIHRoaXMuX3JlbW92ZU5vZGVzKHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhkb2MsIFsic3R5bGUiXSkpOwoKCSAgICBpZiAoZG9jLmJvZHkpIHsKCSAgICAgIHRoaXMuX3JlcGxhY2VCcnMoZG9jLmJvZHkpOwoJICAgIH0KCgkgICAgdGhpcy5fcmVwbGFjZU5vZGVUYWdzKHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhkb2MsIFsiZm9udCJdKSwgIlNQQU4iKTsKCSAgfSwKCgkgIC8qKgoJICAgKiBGaW5kcyB0aGUgbmV4dCBub2RlLCBzdGFydGluZyBmcm9tIHRoZSBnaXZlbiBub2RlLCBhbmQgaWdub3JpbmcKCSAgICogd2hpdGVzcGFjZSBpbiBiZXR3ZWVuLiBJZiB0aGUgZ2l2ZW4gbm9kZSBpcyBhbiBlbGVtZW50LCB0aGUgc2FtZSBub2RlIGlzCgkgICAqIHJldHVybmVkLgoJICAgKi8KCSAgX25leHROb2RlOiBmdW5jdGlvbiAobm9kZSkgewoJICAgIHZhciBuZXh0ID0gbm9kZTsKCSAgICB3aGlsZSAobmV4dAoJICAgICAgICAmJiAobmV4dC5ub2RlVHlwZSAhPSB0aGlzLkVMRU1FTlRfTk9ERSkKCSAgICAgICAgJiYgdGhpcy5SRUdFWFBTLndoaXRlc3BhY2UudGVzdChuZXh0LnRleHRDb250ZW50KSkgewoJICAgICAgbmV4dCA9IG5leHQubmV4dFNpYmxpbmc7CgkgICAgfQoJICAgIHJldHVybiBuZXh0OwoJICB9LAoKCSAgLyoqCgkgICAqIFJlcGxhY2VzIDIgb3IgbW9yZSBzdWNjZXNzaXZlIDxicj4gZWxlbWVudHMgd2l0aCBhIHNpbmdsZSA8cD4uCgkgICAqIFdoaXRlc3BhY2UgYmV0d2VlbiA8YnI+IGVsZW1lbnRzIGFyZSBpZ25vcmVkLiBGb3IgZXhhbXBsZToKCSAgICogICA8ZGl2PmZvbzxicj5iYXI8YnI+IDxicj48YnI+YWJjPC9kaXY+CgkgICAqIHdpbGwgYmVjb21lOgoJICAgKiAgIDxkaXY+Zm9vPGJyPmJhcjxwPmFiYzwvcD48L2Rpdj4KCSAgICovCgkgIF9yZXBsYWNlQnJzOiBmdW5jdGlvbiAoZWxlbSkgewoJICAgIHRoaXMuX2ZvckVhY2hOb2RlKHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhlbGVtLCBbImJyIl0pLCBmdW5jdGlvbihicikgewoJICAgICAgdmFyIG5leHQgPSBici5uZXh0U2libGluZzsKCgkgICAgICAvLyBXaGV0aGVyIDIgb3IgbW9yZSA8YnI+IGVsZW1lbnRzIGhhdmUgYmVlbiBmb3VuZCBhbmQgcmVwbGFjZWQgd2l0aCBhCgkgICAgICAvLyA8cD4gYmxvY2suCgkgICAgICB2YXIgcmVwbGFjZWQgPSBmYWxzZTsKCgkgICAgICAvLyBJZiB3ZSBmaW5kIGEgPGJyPiBjaGFpbiwgcmVtb3ZlIHRoZSA8YnI+cyB1bnRpbCB3ZSBoaXQgYW5vdGhlciBub2RlCgkgICAgICAvLyBvciBub24td2hpdGVzcGFjZS4gVGhpcyBsZWF2ZXMgYmVoaW5kIHRoZSBmaXJzdCA8YnI+IGluIHRoZSBjaGFpbgoJICAgICAgLy8gKHdoaWNoIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBhIDxwPiBsYXRlcikuCgkgICAgICB3aGlsZSAoKG5leHQgPSB0aGlzLl9uZXh0Tm9kZShuZXh0KSkgJiYgKG5leHQudGFnTmFtZSA9PSAiQlIiKSkgewoJICAgICAgICByZXBsYWNlZCA9IHRydWU7CgkgICAgICAgIHZhciBiclNpYmxpbmcgPSBuZXh0Lm5leHRTaWJsaW5nOwoJICAgICAgICBuZXh0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV4dCk7CgkgICAgICAgIG5leHQgPSBiclNpYmxpbmc7CgkgICAgICB9CgoJICAgICAgLy8gSWYgd2UgcmVtb3ZlZCBhIDxicj4gY2hhaW4sIHJlcGxhY2UgdGhlIHJlbWFpbmluZyA8YnI+IHdpdGggYSA8cD4uIEFkZAoJICAgICAgLy8gYWxsIHNpYmxpbmcgbm9kZXMgYXMgY2hpbGRyZW4gb2YgdGhlIDxwPiB1bnRpbCB3ZSBoaXQgYW5vdGhlciA8YnI+CgkgICAgICAvLyBjaGFpbi4KCSAgICAgIGlmIChyZXBsYWNlZCkgewoJICAgICAgICB2YXIgcCA9IHRoaXMuX2RvYy5jcmVhdGVFbGVtZW50KCJwIik7CgkgICAgICAgIGJyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHAsIGJyKTsKCgkgICAgICAgIG5leHQgPSBwLm5leHRTaWJsaW5nOwoJICAgICAgICB3aGlsZSAobmV4dCkgewoJICAgICAgICAgIC8vIElmIHdlJ3ZlIGhpdCBhbm90aGVyIDxicj48YnI+LCB3ZSdyZSBkb25lIGFkZGluZyBjaGlsZHJlbiB0byB0aGlzIDxwPi4KCSAgICAgICAgICBpZiAobmV4dC50YWdOYW1lID09ICJCUiIpIHsKCSAgICAgICAgICAgIHZhciBuZXh0RWxlbSA9IHRoaXMuX25leHROb2RlKG5leHQubmV4dFNpYmxpbmcpOwoJICAgICAgICAgICAgaWYgKG5leHRFbGVtICYmIG5leHRFbGVtLnRhZ05hbWUgPT0gIkJSIikKCSAgICAgICAgICAgICAgYnJlYWs7CgkgICAgICAgICAgfQoKCSAgICAgICAgICBpZiAoIXRoaXMuX2lzUGhyYXNpbmdDb250ZW50KG5leHQpKQoJICAgICAgICAgICAgYnJlYWs7CgoJICAgICAgICAgIC8vIE90aGVyd2lzZSwgbWFrZSB0aGlzIG5vZGUgYSBjaGlsZCBvZiB0aGUgbmV3IDxwPi4KCSAgICAgICAgICB2YXIgc2libGluZyA9IG5leHQubmV4dFNpYmxpbmc7CgkgICAgICAgICAgcC5hcHBlbmRDaGlsZChuZXh0KTsKCSAgICAgICAgICBuZXh0ID0gc2libGluZzsKCSAgICAgICAgfQoKCSAgICAgICAgd2hpbGUgKHAubGFzdENoaWxkICYmIHRoaXMuX2lzV2hpdGVzcGFjZShwLmxhc3RDaGlsZCkpIHsKCSAgICAgICAgICBwLnJlbW92ZUNoaWxkKHAubGFzdENoaWxkKTsKCSAgICAgICAgfQoKCSAgICAgICAgaWYgKHAucGFyZW50Tm9kZS50YWdOYW1lID09PSAiUCIpCgkgICAgICAgICAgdGhpcy5fc2V0Tm9kZVRhZyhwLnBhcmVudE5vZGUsICJESVYiKTsKCSAgICAgIH0KCSAgICB9KTsKCSAgfSwKCgkgIF9zZXROb2RlVGFnOiBmdW5jdGlvbiAobm9kZSwgdGFnKSB7CgkgICAgdGhpcy5sb2coIl9zZXROb2RlVGFnIiwgbm9kZSwgdGFnKTsKCSAgICBpZiAodGhpcy5fZG9jSlNET01QYXJzZXIpIHsKCSAgICAgIG5vZGUubG9jYWxOYW1lID0gdGFnLnRvTG93ZXJDYXNlKCk7CgkgICAgICBub2RlLnRhZ05hbWUgPSB0YWcudG9VcHBlckNhc2UoKTsKCSAgICAgIHJldHVybiBub2RlOwoJICAgIH0KCgkgICAgdmFyIHJlcGxhY2VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTsKCSAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7CgkgICAgICByZXBsYWNlbWVudC5hcHBlbmRDaGlsZChub2RlLmZpcnN0Q2hpbGQpOwoJICAgIH0KCSAgICBub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VtZW50LCBub2RlKTsKCSAgICBpZiAobm9kZS5yZWFkYWJpbGl0eSkKCSAgICAgIHJlcGxhY2VtZW50LnJlYWRhYmlsaXR5ID0gbm9kZS5yZWFkYWJpbGl0eTsKCgkgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHsKCSAgICAgIHRyeSB7CgkgICAgICAgIHJlcGxhY2VtZW50LnNldEF0dHJpYnV0ZShub2RlLmF0dHJpYnV0ZXNbaV0ubmFtZSwgbm9kZS5hdHRyaWJ1dGVzW2ldLnZhbHVlKTsKCSAgICAgIH0gY2F0Y2ggKGV4KSB7CgkgICAgICAgIC8qIGl0J3MgcG9zc2libGUgZm9yIHNldEF0dHJpYnV0ZSgpIHRvIHRocm93IGlmIHRoZSBhdHRyaWJ1dGUgbmFtZQoJICAgICAgICAgKiBpc24ndCBhIHZhbGlkIFhNTCBOYW1lLiBTdWNoIGF0dHJpYnV0ZXMgY2FuIGhvd2V2ZXIgYmUgcGFyc2VkIGZyb20KCSAgICAgICAgICogc291cmNlIGluIEhUTUwgZG9jcywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93aGF0d2cvaHRtbC9pc3N1ZXMvNDI3NSwKCSAgICAgICAgICogc28gd2UgY2FuIGhpdCB0aGVtIGhlcmUgYW5kIHRoZW4gdGhyb3cuIFdlIGRvbid0IGNhcmUgYWJvdXQgc3VjaAoJICAgICAgICAgKiBhdHRyaWJ1dGVzIHNvIHdlIGlnbm9yZSB0aGVtLgoJICAgICAgICAgKi8KCSAgICAgIH0KCSAgICB9CgkgICAgcmV0dXJuIHJlcGxhY2VtZW50OwoJICB9LAoKCSAgLyoqCgkgICAqIFByZXBhcmUgdGhlIGFydGljbGUgbm9kZSBmb3IgZGlzcGxheS4gQ2xlYW4gb3V0IGFueSBpbmxpbmUgc3R5bGVzLAoJICAgKiBpZnJhbWVzLCBmb3Jtcywgc3RyaXAgZXh0cmFuZW91cyA8cD4gdGFncywgZXRjLgoJICAgKgoJICAgKiBAcGFyYW0gRWxlbWVudAoJICAgKiBAcmV0dXJuIHZvaWQKCSAgICoqLwoJICBfcHJlcEFydGljbGU6IGZ1bmN0aW9uKGFydGljbGVDb250ZW50KSB7CgkgICAgdGhpcy5fY2xlYW5TdHlsZXMoYXJ0aWNsZUNvbnRlbnQpOwoKCSAgICAvLyBDaGVjayBmb3IgZGF0YSB0YWJsZXMgYmVmb3JlIHdlIGNvbnRpbnVlLCB0byBhdm9pZCByZW1vdmluZyBpdGVtcyBpbgoJICAgIC8vIHRob3NlIHRhYmxlcywgd2hpY2ggd2lsbCBvZnRlbiBiZSBpc29sYXRlZCBldmVuIHRob3VnaCB0aGV5J3JlCgkgICAgLy8gdmlzdWFsbHkgbGlua2VkIHRvIG90aGVyIGNvbnRlbnQtZnVsIGVsZW1lbnRzICh0ZXh0LCBpbWFnZXMsIGV0Yy4pLgoJICAgIHRoaXMuX21hcmtEYXRhVGFibGVzKGFydGljbGVDb250ZW50KTsKCgkgICAgdGhpcy5fZml4TGF6eUltYWdlcyhhcnRpY2xlQ29udGVudCk7CgoJICAgIC8vIENsZWFuIG91dCBqdW5rIGZyb20gdGhlIGFydGljbGUgY29udGVudAoJICAgIHRoaXMuX2NsZWFuQ29uZGl0aW9uYWxseShhcnRpY2xlQ29udGVudCwgImZvcm0iKTsKCSAgICB0aGlzLl9jbGVhbkNvbmRpdGlvbmFsbHkoYXJ0aWNsZUNvbnRlbnQsICJmaWVsZHNldCIpOwoJICAgIHRoaXMuX2NsZWFuKGFydGljbGVDb250ZW50LCAib2JqZWN0Iik7CgkgICAgdGhpcy5fY2xlYW4oYXJ0aWNsZUNvbnRlbnQsICJlbWJlZCIpOwoJICAgIHRoaXMuX2NsZWFuKGFydGljbGVDb250ZW50LCAiZm9vdGVyIik7CgkgICAgdGhpcy5fY2xlYW4oYXJ0aWNsZUNvbnRlbnQsICJsaW5rIik7CgkgICAgdGhpcy5fY2xlYW4oYXJ0aWNsZUNvbnRlbnQsICJhc2lkZSIpOwoKCSAgICAvLyBDbGVhbiBvdXQgZWxlbWVudHMgd2l0aCBsaXR0bGUgY29udGVudCB0aGF0IGhhdmUgInNoYXJlIiBpbiB0aGVpciBpZC9jbGFzcyBjb21iaW5hdGlvbnMgZnJvbSBmaW5hbCB0b3AgY2FuZGlkYXRlcywKCSAgICAvLyB3aGljaCBtZWFucyB3ZSBkb24ndCByZW1vdmUgdGhlIHRvcCBjYW5kaWRhdGVzIGV2ZW4gdGhleSBoYXZlICJzaGFyZSIuCgoJICAgIHZhciBzaGFyZUVsZW1lbnRUaHJlc2hvbGQgPSB0aGlzLkRFRkFVTFRfQ0hBUl9USFJFU0hPTEQ7CgoJICAgIHRoaXMuX2ZvckVhY2hOb2RlKGFydGljbGVDb250ZW50LmNoaWxkcmVuLCBmdW5jdGlvbiAodG9wQ2FuZGlkYXRlKSB7CgkgICAgICB0aGlzLl9jbGVhbk1hdGNoZWROb2Rlcyh0b3BDYW5kaWRhdGUsIGZ1bmN0aW9uIChub2RlLCBtYXRjaFN0cmluZykgewoJICAgICAgICByZXR1cm4gdGhpcy5SRUdFWFBTLnNoYXJlRWxlbWVudHMudGVzdChtYXRjaFN0cmluZykgJiYgbm9kZS50ZXh0Q29udGVudC5sZW5ndGggPCBzaGFyZUVsZW1lbnRUaHJlc2hvbGQ7CgkgICAgICB9KTsKCSAgICB9KTsKCgkgICAgdGhpcy5fY2xlYW4oYXJ0aWNsZUNvbnRlbnQsICJpZnJhbWUiKTsKCSAgICB0aGlzLl9jbGVhbihhcnRpY2xlQ29udGVudCwgImlucHV0Iik7CgkgICAgdGhpcy5fY2xlYW4oYXJ0aWNsZUNvbnRlbnQsICJ0ZXh0YXJlYSIpOwoJICAgIHRoaXMuX2NsZWFuKGFydGljbGVDb250ZW50LCAic2VsZWN0Iik7CgkgICAgdGhpcy5fY2xlYW4oYXJ0aWNsZUNvbnRlbnQsICJidXR0b24iKTsKCSAgICB0aGlzLl9jbGVhbkhlYWRlcnMoYXJ0aWNsZUNvbnRlbnQpOwoKCSAgICAvLyBEbyB0aGVzZSBsYXN0IGFzIHRoZSBwcmV2aW91cyBzdHVmZiBtYXkgaGF2ZSByZW1vdmVkIGp1bmsKCSAgICAvLyB0aGF0IHdpbGwgYWZmZWN0IHRoZXNlCgkgICAgdGhpcy5fY2xlYW5Db25kaXRpb25hbGx5KGFydGljbGVDb250ZW50LCAidGFibGUiKTsKCSAgICB0aGlzLl9jbGVhbkNvbmRpdGlvbmFsbHkoYXJ0aWNsZUNvbnRlbnQsICJ1bCIpOwoJICAgIHRoaXMuX2NsZWFuQ29uZGl0aW9uYWxseShhcnRpY2xlQ29udGVudCwgImRpdiIpOwoKCSAgICAvLyByZXBsYWNlIEgxIHdpdGggSDIgYXMgSDEgc2hvdWxkIGJlIG9ubHkgdGl0bGUgdGhhdCBpcyBkaXNwbGF5ZWQgc2VwYXJhdGVseQoJICAgIHRoaXMuX3JlcGxhY2VOb2RlVGFncyh0aGlzLl9nZXRBbGxOb2Rlc1dpdGhUYWcoYXJ0aWNsZUNvbnRlbnQsIFsiaDEiXSksICJoMiIpOwoKCSAgICAvLyBSZW1vdmUgZXh0cmEgcGFyYWdyYXBocwoJICAgIHRoaXMuX3JlbW92ZU5vZGVzKHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhhcnRpY2xlQ29udGVudCwgWyJwIl0pLCBmdW5jdGlvbiAocGFyYWdyYXBoKSB7CgkgICAgICB2YXIgaW1nQ291bnQgPSBwYXJhZ3JhcGguZ2V0RWxlbWVudHNCeVRhZ05hbWUoImltZyIpLmxlbmd0aDsKCSAgICAgIHZhciBlbWJlZENvdW50ID0gcGFyYWdyYXBoLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJlbWJlZCIpLmxlbmd0aDsKCSAgICAgIHZhciBvYmplY3RDb3VudCA9IHBhcmFncmFwaC5nZXRFbGVtZW50c0J5VGFnTmFtZSgib2JqZWN0IikubGVuZ3RoOwoJICAgICAgLy8gQXQgdGhpcyBwb2ludCwgbmFzdHkgaWZyYW1lcyBoYXZlIGJlZW4gcmVtb3ZlZCwgb25seSByZW1haW4gZW1iZWRkZWQgdmlkZW8gb25lcy4KCSAgICAgIHZhciBpZnJhbWVDb3VudCA9IHBhcmFncmFwaC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaWZyYW1lIikubGVuZ3RoOwoJICAgICAgdmFyIHRvdGFsQ291bnQgPSBpbWdDb3VudCArIGVtYmVkQ291bnQgKyBvYmplY3RDb3VudCArIGlmcmFtZUNvdW50OwoKCSAgICAgIHJldHVybiB0b3RhbENvdW50ID09PSAwICYmICF0aGlzLl9nZXRJbm5lclRleHQocGFyYWdyYXBoLCBmYWxzZSk7CgkgICAgfSk7CgoJICAgIHRoaXMuX2ZvckVhY2hOb2RlKHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhhcnRpY2xlQ29udGVudCwgWyJiciJdKSwgZnVuY3Rpb24oYnIpIHsKCSAgICAgIHZhciBuZXh0ID0gdGhpcy5fbmV4dE5vZGUoYnIubmV4dFNpYmxpbmcpOwoJICAgICAgaWYgKG5leHQgJiYgbmV4dC50YWdOYW1lID09ICJQIikKCSAgICAgICAgYnIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChicik7CgkgICAgfSk7CgoJICAgIC8vIFJlbW92ZSBzaW5nbGUtY2VsbCB0YWJsZXMKCSAgICB0aGlzLl9mb3JFYWNoTm9kZSh0aGlzLl9nZXRBbGxOb2Rlc1dpdGhUYWcoYXJ0aWNsZUNvbnRlbnQsIFsidGFibGUiXSksIGZ1bmN0aW9uKHRhYmxlKSB7CgkgICAgICB2YXIgdGJvZHkgPSB0aGlzLl9oYXNTaW5nbGVUYWdJbnNpZGVFbGVtZW50KHRhYmxlLCAiVEJPRFkiKSA/IHRhYmxlLmZpcnN0RWxlbWVudENoaWxkIDogdGFibGU7CgkgICAgICBpZiAodGhpcy5faGFzU2luZ2xlVGFnSW5zaWRlRWxlbWVudCh0Ym9keSwgIlRSIikpIHsKCSAgICAgICAgdmFyIHJvdyA9IHRib2R5LmZpcnN0RWxlbWVudENoaWxkOwoJICAgICAgICBpZiAodGhpcy5faGFzU2luZ2xlVGFnSW5zaWRlRWxlbWVudChyb3csICJURCIpKSB7CgkgICAgICAgICAgdmFyIGNlbGwgPSByb3cuZmlyc3RFbGVtZW50Q2hpbGQ7CgkgICAgICAgICAgY2VsbCA9IHRoaXMuX3NldE5vZGVUYWcoY2VsbCwgdGhpcy5fZXZlcnlOb2RlKGNlbGwuY2hpbGROb2RlcywgdGhpcy5faXNQaHJhc2luZ0NvbnRlbnQpID8gIlAiIDogIkRJViIpOwoJICAgICAgICAgIHRhYmxlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNlbGwsIHRhYmxlKTsKCSAgICAgICAgfQoJICAgICAgfQoJICAgIH0pOwoJICB9LAoKCSAgLyoqCgkgICAqIEluaXRpYWxpemUgYSBub2RlIHdpdGggdGhlIHJlYWRhYmlsaXR5IG9iamVjdC4gQWxzbyBjaGVja3MgdGhlCgkgICAqIGNsYXNzTmFtZS9pZCBmb3Igc3BlY2lhbCBuYW1lcyB0byBhZGQgdG8gaXRzIHNjb3JlLgoJICAgKgoJICAgKiBAcGFyYW0gRWxlbWVudAoJICAgKiBAcmV0dXJuIHZvaWQKCSAgKiovCgkgIF9pbml0aWFsaXplTm9kZTogZnVuY3Rpb24obm9kZSkgewoJICAgIG5vZGUucmVhZGFiaWxpdHkgPSB7ImNvbnRlbnRTY29yZSI6IDB9OwoKCSAgICBzd2l0Y2ggKG5vZGUudGFnTmFtZSkgewoJICAgICAgY2FzZSAiRElWIjoKCSAgICAgICAgbm9kZS5yZWFkYWJpbGl0eS5jb250ZW50U2NvcmUgKz0gNTsKCSAgICAgICAgYnJlYWs7CgoJICAgICAgY2FzZSAiUFJFIjoKCSAgICAgIGNhc2UgIlREIjoKCSAgICAgIGNhc2UgIkJMT0NLUVVPVEUiOgoJICAgICAgICBub2RlLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSArPSAzOwoJICAgICAgICBicmVhazsKCgkgICAgICBjYXNlICJBRERSRVNTIjoKCSAgICAgIGNhc2UgIk9MIjoKCSAgICAgIGNhc2UgIlVMIjoKCSAgICAgIGNhc2UgIkRMIjoKCSAgICAgIGNhc2UgIkREIjoKCSAgICAgIGNhc2UgIkRUIjoKCSAgICAgIGNhc2UgIkxJIjoKCSAgICAgIGNhc2UgIkZPUk0iOgoJICAgICAgICBub2RlLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSAtPSAzOwoJICAgICAgICBicmVhazsKCgkgICAgICBjYXNlICJIMSI6CgkgICAgICBjYXNlICJIMiI6CgkgICAgICBjYXNlICJIMyI6CgkgICAgICBjYXNlICJINCI6CgkgICAgICBjYXNlICJINSI6CgkgICAgICBjYXNlICJINiI6CgkgICAgICBjYXNlICJUSCI6CgkgICAgICAgIG5vZGUucmVhZGFiaWxpdHkuY29udGVudFNjb3JlIC09IDU7CgkgICAgICAgIGJyZWFrOwoJICAgIH0KCgkgICAgbm9kZS5yZWFkYWJpbGl0eS5jb250ZW50U2NvcmUgKz0gdGhpcy5fZ2V0Q2xhc3NXZWlnaHQobm9kZSk7CgkgIH0sCgoJICBfcmVtb3ZlQW5kR2V0TmV4dDogZnVuY3Rpb24obm9kZSkgewoJICAgIHZhciBuZXh0Tm9kZSA9IHRoaXMuX2dldE5leHROb2RlKG5vZGUsIHRydWUpOwoJICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTsKCSAgICByZXR1cm4gbmV4dE5vZGU7CgkgIH0sCgoJICAvKioKCSAgICogVHJhdmVyc2UgdGhlIERPTSBmcm9tIG5vZGUgdG8gbm9kZSwgc3RhcnRpbmcgYXQgdGhlIG5vZGUgcGFzc2VkIGluLgoJICAgKiBQYXNzIHRydWUgZm9yIHRoZSBzZWNvbmQgcGFyYW1ldGVyIHRvIGluZGljYXRlIHRoaXMgbm9kZSBpdHNlbGYKCSAgICogKGFuZCBpdHMga2lkcykgYXJlIGdvaW5nIGF3YXksIGFuZCB3ZSB3YW50IHRoZSBuZXh0IG5vZGUgb3Zlci4KCSAgICoKCSAgICogQ2FsbGluZyB0aGlzIGluIGEgbG9vcCB3aWxsIHRyYXZlcnNlIHRoZSBET00gZGVwdGgtZmlyc3QuCgkgICAqLwoJICBfZ2V0TmV4dE5vZGU6IGZ1bmN0aW9uKG5vZGUsIGlnbm9yZVNlbGZBbmRLaWRzKSB7CgkgICAgLy8gRmlyc3QgY2hlY2sgZm9yIGtpZHMgaWYgdGhvc2UgYXJlbid0IGJlaW5nIGlnbm9yZWQKCSAgICBpZiAoIWlnbm9yZVNlbGZBbmRLaWRzICYmIG5vZGUuZmlyc3RFbGVtZW50Q2hpbGQpIHsKCSAgICAgIHJldHVybiBub2RlLmZpcnN0RWxlbWVudENoaWxkOwoJICAgIH0KCSAgICAvLyBUaGVuIGZvciBzaWJsaW5ncy4uLgoJICAgIGlmIChub2RlLm5leHRFbGVtZW50U2libGluZykgewoJICAgICAgcmV0dXJuIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nOwoJICAgIH0KCSAgICAvLyBBbmQgZmluYWxseSwgbW92ZSB1cCB0aGUgcGFyZW50IGNoYWluICphbmQqIGZpbmQgYSBzaWJsaW5nCgkgICAgLy8gKGJlY2F1c2UgdGhpcyBpcyBkZXB0aC1maXJzdCB0cmF2ZXJzYWwsIHdlIHdpbGwgaGF2ZSBhbHJlYWR5CgkgICAgLy8gc2VlbiB0aGUgcGFyZW50IG5vZGVzIHRoZW1zZWx2ZXMpLgoJICAgIGRvIHsKCSAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7CgkgICAgfSB3aGlsZSAobm9kZSAmJiAhbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcpOwoJICAgIHJldHVybiBub2RlICYmIG5vZGUubmV4dEVsZW1lbnRTaWJsaW5nOwoJICB9LAoKCSAgLy8gY29tcGFyZXMgc2Vjb25kIHRleHQgdG8gZmlyc3Qgb25lCgkgIC8vIDEgPSBzYW1lIHRleHQsIDAgPSBjb21wbGV0ZWx5IGRpZmZlcmVudCB0ZXh0CgkgIC8vIHdvcmtzIHRoZSB3YXkgdGhhdCBpdCBzcGxpdHMgYm90aCB0ZXh0cyBpbnRvIHdvcmRzIGFuZCB0aGVuIGZpbmRzIHdvcmRzIHRoYXQgYXJlIHVuaXF1ZSBpbiBzZWNvbmQgdGV4dAoJICAvLyB0aGUgcmVzdWx0IGlzIGdpdmVuIGJ5IHRoZSBsb3dlciBsZW5ndGggb2YgdW5pcXVlIHBhcnRzCgkgIF90ZXh0U2ltaWxhcml0eTogZnVuY3Rpb24odGV4dEEsIHRleHRCKSB7CgkgICAgdmFyIHRva2Vuc0EgPSB0ZXh0QS50b0xvd2VyQ2FzZSgpLnNwbGl0KHRoaXMuUkVHRVhQUy50b2tlbml6ZSkuZmlsdGVyKEJvb2xlYW4pOwoJICAgIHZhciB0b2tlbnNCID0gdGV4dEIudG9Mb3dlckNhc2UoKS5zcGxpdCh0aGlzLlJFR0VYUFMudG9rZW5pemUpLmZpbHRlcihCb29sZWFuKTsKCSAgICBpZiAoIXRva2Vuc0EubGVuZ3RoIHx8ICF0b2tlbnNCLmxlbmd0aCkgewoJICAgICAgcmV0dXJuIDA7CgkgICAgfQoJICAgIHZhciB1bmlxVG9rZW5zQiA9IHRva2Vuc0IuZmlsdGVyKHRva2VuID0+ICF0b2tlbnNBLmluY2x1ZGVzKHRva2VuKSk7CgkgICAgdmFyIGRpc3RhbmNlQiA9IHVuaXFUb2tlbnNCLmpvaW4oIiAiKS5sZW5ndGggLyB0b2tlbnNCLmpvaW4oIiAiKS5sZW5ndGg7CgkgICAgcmV0dXJuIDEgLSBkaXN0YW5jZUI7CgkgIH0sCgoJICBfY2hlY2tCeWxpbmU6IGZ1bmN0aW9uKG5vZGUsIG1hdGNoU3RyaW5nKSB7CgkgICAgaWYgKHRoaXMuX2FydGljbGVCeWxpbmUpIHsKCSAgICAgIHJldHVybiBmYWxzZTsKCSAgICB9CgoJICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSAhPT0gdW5kZWZpbmVkKSB7CgkgICAgICB2YXIgcmVsID0gbm9kZS5nZXRBdHRyaWJ1dGUoInJlbCIpOwoJICAgICAgdmFyIGl0ZW1wcm9wID0gbm9kZS5nZXRBdHRyaWJ1dGUoIml0ZW1wcm9wIik7CgkgICAgfQoKCSAgICBpZiAoKHJlbCA9PT0gImF1dGhvciIgfHwgKGl0ZW1wcm9wICYmIGl0ZW1wcm9wLmluZGV4T2YoImF1dGhvciIpICE9PSAtMSkgfHwgdGhpcy5SRUdFWFBTLmJ5bGluZS50ZXN0KG1hdGNoU3RyaW5nKSkgJiYgdGhpcy5faXNWYWxpZEJ5bGluZShub2RlLnRleHRDb250ZW50KSkgewoJICAgICAgdGhpcy5fYXJ0aWNsZUJ5bGluZSA9IG5vZGUudGV4dENvbnRlbnQudHJpbSgpOwoJICAgICAgcmV0dXJuIHRydWU7CgkgICAgfQoKCSAgICByZXR1cm4gZmFsc2U7CgkgIH0sCgoJICBfZ2V0Tm9kZUFuY2VzdG9yczogZnVuY3Rpb24obm9kZSwgbWF4RGVwdGgpIHsKCSAgICBtYXhEZXB0aCA9IG1heERlcHRoIHx8IDA7CgkgICAgdmFyIGkgPSAwLCBhbmNlc3RvcnMgPSBbXTsKCSAgICB3aGlsZSAobm9kZS5wYXJlbnROb2RlKSB7CgkgICAgICBhbmNlc3RvcnMucHVzaChub2RlLnBhcmVudE5vZGUpOwoJICAgICAgaWYgKG1heERlcHRoICYmICsraSA9PT0gbWF4RGVwdGgpCgkgICAgICAgIGJyZWFrOwoJICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTsKCSAgICB9CgkgICAgcmV0dXJuIGFuY2VzdG9yczsKCSAgfSwKCgkgIC8qKioKCSAgICogZ3JhYkFydGljbGUgLSBVc2luZyBhIHZhcmlldHkgb2YgbWV0cmljcyAoY29udGVudCBzY29yZSwgY2xhc3NuYW1lLCBlbGVtZW50IHR5cGVzKSwgZmluZCB0aGUgY29udGVudCB0aGF0IGlzCgkgICAqICAgICAgICAgbW9zdCBsaWtlbHkgdG8gYmUgdGhlIHN0dWZmIGEgdXNlciB3YW50cyB0byByZWFkLiBUaGVuIHJldHVybiBpdCB3cmFwcGVkIHVwIGluIGEgZGl2LgoJICAgKgoJICAgKiBAcGFyYW0gcGFnZSBhIGRvY3VtZW50IHRvIHJ1biB1cG9uLiBOZWVkcyB0byBiZSBhIGZ1bGwgZG9jdW1lbnQsIGNvbXBsZXRlIHdpdGggYm9keS4KCSAgICogQHJldHVybiBFbGVtZW50CgkgICoqLwoJICBfZ3JhYkFydGljbGU6IGZ1bmN0aW9uIChwYWdlKSB7CgkgICAgdGhpcy5sb2coIioqKiogZ3JhYkFydGljbGUgKioqKiIpOwoJICAgIHZhciBkb2MgPSB0aGlzLl9kb2M7CgkgICAgdmFyIGlzUGFnaW5nID0gcGFnZSAhPT0gbnVsbDsKCSAgICBwYWdlID0gcGFnZSA/IHBhZ2UgOiB0aGlzLl9kb2MuYm9keTsKCgkgICAgLy8gV2UgY2FuJ3QgZ3JhYiBhbiBhcnRpY2xlIGlmIHdlIGRvbid0IGhhdmUgYSBwYWdlIQoJICAgIGlmICghcGFnZSkgewoJICAgICAgdGhpcy5sb2coIk5vIGJvZHkgZm91bmQgaW4gZG9jdW1lbnQuIEFib3J0LiIpOwoJICAgICAgcmV0dXJuIG51bGw7CgkgICAgfQoKCSAgICB2YXIgcGFnZUNhY2hlSHRtbCA9IHBhZ2UuaW5uZXJIVE1MOwoKCSAgICB3aGlsZSAodHJ1ZSkgewoJICAgICAgdGhpcy5sb2coIlN0YXJ0aW5nIGdyYWJBcnRpY2xlIGxvb3AiKTsKCSAgICAgIHZhciBzdHJpcFVubGlrZWx5Q2FuZGlkYXRlcyA9IHRoaXMuX2ZsYWdJc0FjdGl2ZSh0aGlzLkZMQUdfU1RSSVBfVU5MSUtFTFlTKTsKCgkgICAgICAvLyBGaXJzdCwgbm9kZSBwcmVwcGluZy4gVHJhc2ggbm9kZXMgdGhhdCBsb29rIGNydWRkeSAobGlrZSBvbmVzIHdpdGggdGhlCgkgICAgICAvLyBjbGFzcyBuYW1lICJjb21tZW50IiwgZXRjKSwgYW5kIHR1cm4gZGl2cyBpbnRvIFAgdGFncyB3aGVyZSB0aGV5IGhhdmUgYmVlbgoJICAgICAgLy8gdXNlZCBpbmFwcHJvcHJpYXRlbHkgKGFzIGluLCB3aGVyZSB0aGV5IGNvbnRhaW4gbm8gb3RoZXIgYmxvY2sgbGV2ZWwgZWxlbWVudHMuKQoJICAgICAgdmFyIGVsZW1lbnRzVG9TY29yZSA9IFtdOwoJICAgICAgdmFyIG5vZGUgPSB0aGlzLl9kb2MuZG9jdW1lbnRFbGVtZW50OwoKCSAgICAgIGxldCBzaG91bGRSZW1vdmVUaXRsZUhlYWRlciA9IHRydWU7CgoJICAgICAgd2hpbGUgKG5vZGUpIHsKCSAgICAgICAgdmFyIG1hdGNoU3RyaW5nID0gbm9kZS5jbGFzc05hbWUgKyAiICIgKyBub2RlLmlkOwoKCSAgICAgICAgaWYgKCF0aGlzLl9pc1Byb2JhYmx5VmlzaWJsZShub2RlKSkgewoJICAgICAgICAgIHRoaXMubG9nKCJSZW1vdmluZyBoaWRkZW4gbm9kZSAtICIgKyBtYXRjaFN0cmluZyk7CgkgICAgICAgICAgbm9kZSA9IHRoaXMuX3JlbW92ZUFuZEdldE5leHQobm9kZSk7CgkgICAgICAgICAgY29udGludWU7CgkgICAgICAgIH0KCgkgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGlzIG5vZGUgaXMgYSBieWxpbmUsIGFuZCByZW1vdmUgaXQgaWYgaXQgaXMuCgkgICAgICAgIGlmICh0aGlzLl9jaGVja0J5bGluZShub2RlLCBtYXRjaFN0cmluZykpIHsKCSAgICAgICAgICBub2RlID0gdGhpcy5fcmVtb3ZlQW5kR2V0TmV4dChub2RlKTsKCSAgICAgICAgICBjb250aW51ZTsKCSAgICAgICAgfQoKCSAgICAgICAgaWYgKHNob3VsZFJlbW92ZVRpdGxlSGVhZGVyICYmIHRoaXMuX2hlYWRlckR1cGxpY2F0ZXNUaXRsZShub2RlKSkgewoJICAgICAgICAgIHRoaXMubG9nKCJSZW1vdmluZyBoZWFkZXI6ICIsIG5vZGUudGV4dENvbnRlbnQudHJpbSgpLCB0aGlzLl9hcnRpY2xlVGl0bGUudHJpbSgpKTsKCSAgICAgICAgICBzaG91bGRSZW1vdmVUaXRsZUhlYWRlciA9IGZhbHNlOwoJICAgICAgICAgIG5vZGUgPSB0aGlzLl9yZW1vdmVBbmRHZXROZXh0KG5vZGUpOwoJICAgICAgICAgIGNvbnRpbnVlOwoJICAgICAgICB9CgoJICAgICAgICAvLyBSZW1vdmUgdW5saWtlbHkgY2FuZGlkYXRlcwoJICAgICAgICBpZiAoc3RyaXBVbmxpa2VseUNhbmRpZGF0ZXMpIHsKCSAgICAgICAgICBpZiAodGhpcy5SRUdFWFBTLnVubGlrZWx5Q2FuZGlkYXRlcy50ZXN0KG1hdGNoU3RyaW5nKSAmJgoJICAgICAgICAgICAgICAhdGhpcy5SRUdFWFBTLm9rTWF5YmVJdHNBQ2FuZGlkYXRlLnRlc3QobWF0Y2hTdHJpbmcpICYmCgkgICAgICAgICAgICAgICF0aGlzLl9oYXNBbmNlc3RvclRhZyhub2RlLCAidGFibGUiKSAmJgoJICAgICAgICAgICAgICAhdGhpcy5faGFzQW5jZXN0b3JUYWcobm9kZSwgImNvZGUiKSAmJgoJICAgICAgICAgICAgICBub2RlLnRhZ05hbWUgIT09ICJCT0RZIiAmJgoJICAgICAgICAgICAgICBub2RlLnRhZ05hbWUgIT09ICJBIikgewoJICAgICAgICAgICAgdGhpcy5sb2coIlJlbW92aW5nIHVubGlrZWx5IGNhbmRpZGF0ZSAtICIgKyBtYXRjaFN0cmluZyk7CgkgICAgICAgICAgICBub2RlID0gdGhpcy5fcmVtb3ZlQW5kR2V0TmV4dChub2RlKTsKCSAgICAgICAgICAgIGNvbnRpbnVlOwoJICAgICAgICAgIH0KCgkgICAgICAgICAgaWYgKHRoaXMuVU5MSUtFTFlfUk9MRVMuaW5jbHVkZXMobm9kZS5nZXRBdHRyaWJ1dGUoInJvbGUiKSkpIHsKCSAgICAgICAgICAgIHRoaXMubG9nKCJSZW1vdmluZyBjb250ZW50IHdpdGggcm9sZSAiICsgbm9kZS5nZXRBdHRyaWJ1dGUoInJvbGUiKSArICIgLSAiICsgbWF0Y2hTdHJpbmcpOwoJICAgICAgICAgICAgbm9kZSA9IHRoaXMuX3JlbW92ZUFuZEdldE5leHQobm9kZSk7CgkgICAgICAgICAgICBjb250aW51ZTsKCSAgICAgICAgICB9CgkgICAgICAgIH0KCgkgICAgICAgIC8vIFJlbW92ZSBESVYsIFNFQ1RJT04sIGFuZCBIRUFERVIgbm9kZXMgd2l0aG91dCBhbnkgY29udGVudChlLmcuIHRleHQsIGltYWdlLCB2aWRlbywgb3IgaWZyYW1lKS4KCSAgICAgICAgaWYgKChub2RlLnRhZ05hbWUgPT09ICJESVYiIHx8IG5vZGUudGFnTmFtZSA9PT0gIlNFQ1RJT04iIHx8IG5vZGUudGFnTmFtZSA9PT0gIkhFQURFUiIgfHwKCSAgICAgICAgICAgICBub2RlLnRhZ05hbWUgPT09ICJIMSIgfHwgbm9kZS50YWdOYW1lID09PSAiSDIiIHx8IG5vZGUudGFnTmFtZSA9PT0gIkgzIiB8fAoJICAgICAgICAgICAgIG5vZGUudGFnTmFtZSA9PT0gIkg0IiB8fCBub2RlLnRhZ05hbWUgPT09ICJINSIgfHwgbm9kZS50YWdOYW1lID09PSAiSDYiKSAmJgoJICAgICAgICAgICAgdGhpcy5faXNFbGVtZW50V2l0aG91dENvbnRlbnQobm9kZSkpIHsKCSAgICAgICAgICBub2RlID0gdGhpcy5fcmVtb3ZlQW5kR2V0TmV4dChub2RlKTsKCSAgICAgICAgICBjb250aW51ZTsKCSAgICAgICAgfQoKCSAgICAgICAgaWYgKHRoaXMuREVGQVVMVF9UQUdTX1RPX1NDT1JFLmluZGV4T2Yobm9kZS50YWdOYW1lKSAhPT0gLTEpIHsKCSAgICAgICAgICBlbGVtZW50c1RvU2NvcmUucHVzaChub2RlKTsKCSAgICAgICAgfQoKCSAgICAgICAgLy8gVHVybiBhbGwgZGl2cyB0aGF0IGRvbid0IGhhdmUgY2hpbGRyZW4gYmxvY2sgbGV2ZWwgZWxlbWVudHMgaW50byBwJ3MKCSAgICAgICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gIkRJViIpIHsKCSAgICAgICAgICAvLyBQdXQgcGhyYXNpbmcgY29udGVudCBpbnRvIHBhcmFncmFwaHMuCgkgICAgICAgICAgdmFyIHAgPSBudWxsOwoJICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7CgkgICAgICAgICAgd2hpbGUgKGNoaWxkTm9kZSkgewoJICAgICAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY2hpbGROb2RlLm5leHRTaWJsaW5nOwoJICAgICAgICAgICAgaWYgKHRoaXMuX2lzUGhyYXNpbmdDb250ZW50KGNoaWxkTm9kZSkpIHsKCSAgICAgICAgICAgICAgaWYgKHAgIT09IG51bGwpIHsKCSAgICAgICAgICAgICAgICBwLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7CgkgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzV2hpdGVzcGFjZShjaGlsZE5vZGUpKSB7CgkgICAgICAgICAgICAgICAgcCA9IGRvYy5jcmVhdGVFbGVtZW50KCJwIik7CgkgICAgICAgICAgICAgICAgbm9kZS5yZXBsYWNlQ2hpbGQocCwgY2hpbGROb2RlKTsKCSAgICAgICAgICAgICAgICBwLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7CgkgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0gZWxzZSBpZiAocCAhPT0gbnVsbCkgewoJICAgICAgICAgICAgICB3aGlsZSAocC5sYXN0Q2hpbGQgJiYgdGhpcy5faXNXaGl0ZXNwYWNlKHAubGFzdENoaWxkKSkgewoJICAgICAgICAgICAgICAgIHAucmVtb3ZlQ2hpbGQocC5sYXN0Q2hpbGQpOwoJICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgIHAgPSBudWxsOwoJICAgICAgICAgICAgfQoJICAgICAgICAgICAgY2hpbGROb2RlID0gbmV4dFNpYmxpbmc7CgkgICAgICAgICAgfQoKCSAgICAgICAgICAvLyBTaXRlcyBsaWtlIGh0dHA6Ly9tb2JpbGUuc2xhdGUuY29tIGVuY2xvc2VzIGVhY2ggcGFyYWdyYXBoIHdpdGggYSBESVYKCSAgICAgICAgICAvLyBlbGVtZW50LiBESVZzIHdpdGggb25seSBhIFAgZWxlbWVudCBpbnNpZGUgYW5kIG5vIHRleHQgY29udGVudCBjYW4gYmUKCSAgICAgICAgICAvLyBzYWZlbHkgY29udmVydGVkIGludG8gcGxhaW4gUCBlbGVtZW50cyB0byBhdm9pZCBjb25mdXNpbmcgdGhlIHNjb3JpbmcKCSAgICAgICAgICAvLyBhbGdvcml0aG0gd2l0aCBESVZzIHdpdGggYXJlLCBpbiBwcmFjdGljZSwgcGFyYWdyYXBocy4KCSAgICAgICAgICBpZiAodGhpcy5faGFzU2luZ2xlVGFnSW5zaWRlRWxlbWVudChub2RlLCAiUCIpICYmIHRoaXMuX2dldExpbmtEZW5zaXR5KG5vZGUpIDwgMC4yNSkgewoJICAgICAgICAgICAgdmFyIG5ld05vZGUgPSBub2RlLmNoaWxkcmVuWzBdOwoJICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKTsKCSAgICAgICAgICAgIG5vZGUgPSBuZXdOb2RlOwoJICAgICAgICAgICAgZWxlbWVudHNUb1Njb3JlLnB1c2gobm9kZSk7CgkgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5faGFzQ2hpbGRCbG9ja0VsZW1lbnQobm9kZSkpIHsKCSAgICAgICAgICAgIG5vZGUgPSB0aGlzLl9zZXROb2RlVGFnKG5vZGUsICJQIik7CgkgICAgICAgICAgICBlbGVtZW50c1RvU2NvcmUucHVzaChub2RlKTsKCSAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgbm9kZSA9IHRoaXMuX2dldE5leHROb2RlKG5vZGUpOwoJICAgICAgfQoKCSAgICAgIC8qKgoJICAgICAgICogTG9vcCB0aHJvdWdoIGFsbCBwYXJhZ3JhcGhzLCBhbmQgYXNzaWduIGEgc2NvcmUgdG8gdGhlbSBiYXNlZCBvbiBob3cgY29udGVudC15IHRoZXkgbG9vay4KCSAgICAgICAqIFRoZW4gYWRkIHRoZWlyIHNjb3JlIHRvIHRoZWlyIHBhcmVudCBub2RlLgoJICAgICAgICoKCSAgICAgICAqIEEgc2NvcmUgaXMgZGV0ZXJtaW5lZCBieSB0aGluZ3MgbGlrZSBudW1iZXIgb2YgY29tbWFzLCBjbGFzcyBuYW1lcywgZXRjLiBNYXliZSBldmVudHVhbGx5IGxpbmsgZGVuc2l0eS4KCSAgICAgICoqLwoJICAgICAgdmFyIGNhbmRpZGF0ZXMgPSBbXTsKCSAgICAgIHRoaXMuX2ZvckVhY2hOb2RlKGVsZW1lbnRzVG9TY29yZSwgZnVuY3Rpb24oZWxlbWVudFRvU2NvcmUpIHsKCSAgICAgICAgaWYgKCFlbGVtZW50VG9TY29yZS5wYXJlbnROb2RlIHx8IHR5cGVvZihlbGVtZW50VG9TY29yZS5wYXJlbnROb2RlLnRhZ05hbWUpID09PSAidW5kZWZpbmVkIikKCSAgICAgICAgICByZXR1cm47CgoJICAgICAgICAvLyBJZiB0aGlzIHBhcmFncmFwaCBpcyBsZXNzIHRoYW4gMjUgY2hhcmFjdGVycywgZG9uJ3QgZXZlbiBjb3VudCBpdC4KCSAgICAgICAgdmFyIGlubmVyVGV4dCA9IHRoaXMuX2dldElubmVyVGV4dChlbGVtZW50VG9TY29yZSk7CgkgICAgICAgIGlmIChpbm5lclRleHQubGVuZ3RoIDwgMjUpCgkgICAgICAgICAgcmV0dXJuOwoKCSAgICAgICAgLy8gRXhjbHVkZSBub2RlcyB3aXRoIG5vIGFuY2VzdG9yLgoJICAgICAgICB2YXIgYW5jZXN0b3JzID0gdGhpcy5fZ2V0Tm9kZUFuY2VzdG9ycyhlbGVtZW50VG9TY29yZSwgNSk7CgkgICAgICAgIGlmIChhbmNlc3RvcnMubGVuZ3RoID09PSAwKQoJICAgICAgICAgIHJldHVybjsKCgkgICAgICAgIHZhciBjb250ZW50U2NvcmUgPSAwOwoKCSAgICAgICAgLy8gQWRkIGEgcG9pbnQgZm9yIHRoZSBwYXJhZ3JhcGggaXRzZWxmIGFzIGEgYmFzZS4KCSAgICAgICAgY29udGVudFNjb3JlICs9IDE7CgoJICAgICAgICAvLyBBZGQgcG9pbnRzIGZvciBhbnkgY29tbWFzIHdpdGhpbiB0aGlzIHBhcmFncmFwaC4KCSAgICAgICAgY29udGVudFNjb3JlICs9IGlubmVyVGV4dC5zcGxpdCgiLCIpLmxlbmd0aDsKCgkgICAgICAgIC8vIEZvciBldmVyeSAxMDAgY2hhcmFjdGVycyBpbiB0aGlzIHBhcmFncmFwaCwgYWRkIGFub3RoZXIgcG9pbnQuIFVwIHRvIDMgcG9pbnRzLgoJICAgICAgICBjb250ZW50U2NvcmUgKz0gTWF0aC5taW4oTWF0aC5mbG9vcihpbm5lclRleHQubGVuZ3RoIC8gMTAwKSwgMyk7CgoJICAgICAgICAvLyBJbml0aWFsaXplIGFuZCBzY29yZSBhbmNlc3RvcnMuCgkgICAgICAgIHRoaXMuX2ZvckVhY2hOb2RlKGFuY2VzdG9ycywgZnVuY3Rpb24oYW5jZXN0b3IsIGxldmVsKSB7CgkgICAgICAgICAgaWYgKCFhbmNlc3Rvci50YWdOYW1lIHx8ICFhbmNlc3Rvci5wYXJlbnROb2RlIHx8IHR5cGVvZihhbmNlc3Rvci5wYXJlbnROb2RlLnRhZ05hbWUpID09PSAidW5kZWZpbmVkIikKCSAgICAgICAgICAgIHJldHVybjsKCgkgICAgICAgICAgaWYgKHR5cGVvZihhbmNlc3Rvci5yZWFkYWJpbGl0eSkgPT09ICJ1bmRlZmluZWQiKSB7CgkgICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplTm9kZShhbmNlc3Rvcik7CgkgICAgICAgICAgICBjYW5kaWRhdGVzLnB1c2goYW5jZXN0b3IpOwoJICAgICAgICAgIH0KCgkgICAgICAgICAgLy8gTm9kZSBzY29yZSBkaXZpZGVyOgoJICAgICAgICAgIC8vIC0gcGFyZW50OiAgICAgICAgICAgICAxIChubyBkaXZpc2lvbikKCSAgICAgICAgICAvLyAtIGdyYW5kcGFyZW50OiAgICAgICAgMgoJICAgICAgICAgIC8vIC0gZ3JlYXQgZ3JhbmRwYXJlbnQrOiBhbmNlc3RvciBsZXZlbCAqIDMKCSAgICAgICAgICBpZiAobGV2ZWwgPT09IDApCgkgICAgICAgICAgICB2YXIgc2NvcmVEaXZpZGVyID0gMTsKCSAgICAgICAgICBlbHNlIGlmIChsZXZlbCA9PT0gMSkKCSAgICAgICAgICAgIHNjb3JlRGl2aWRlciA9IDI7CgkgICAgICAgICAgZWxzZQoJICAgICAgICAgICAgc2NvcmVEaXZpZGVyID0gbGV2ZWwgKiAzOwoJICAgICAgICAgIGFuY2VzdG9yLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSArPSBjb250ZW50U2NvcmUgLyBzY29yZURpdmlkZXI7CgkgICAgICAgIH0pOwoJICAgICAgfSk7CgoJICAgICAgLy8gQWZ0ZXIgd2UndmUgY2FsY3VsYXRlZCBzY29yZXMsIGxvb3AgdGhyb3VnaCBhbGwgb2YgdGhlIHBvc3NpYmxlCgkgICAgICAvLyBjYW5kaWRhdGUgbm9kZXMgd2UgZm91bmQgYW5kIGZpbmQgdGhlIG9uZSB3aXRoIHRoZSBoaWdoZXN0IHNjb3JlLgoJICAgICAgdmFyIHRvcENhbmRpZGF0ZXMgPSBbXTsKCSAgICAgIGZvciAodmFyIGMgPSAwLCBjbCA9IGNhbmRpZGF0ZXMubGVuZ3RoOyBjIDwgY2w7IGMgKz0gMSkgewoJICAgICAgICB2YXIgY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tjXTsKCgkgICAgICAgIC8vIFNjYWxlIHRoZSBmaW5hbCBjYW5kaWRhdGVzIHNjb3JlIGJhc2VkIG9uIGxpbmsgZGVuc2l0eS4gR29vZCBjb250ZW50CgkgICAgICAgIC8vIHNob3VsZCBoYXZlIGEgcmVsYXRpdmVseSBzbWFsbCBsaW5rIGRlbnNpdHkgKDUlIG9yIGxlc3MpIGFuZCBiZSBtb3N0bHkKCSAgICAgICAgLy8gdW5hZmZlY3RlZCBieSB0aGlzIG9wZXJhdGlvbi4KCSAgICAgICAgdmFyIGNhbmRpZGF0ZVNjb3JlID0gY2FuZGlkYXRlLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSAqICgxIC0gdGhpcy5fZ2V0TGlua0RlbnNpdHkoY2FuZGlkYXRlKSk7CgkgICAgICAgIGNhbmRpZGF0ZS5yZWFkYWJpbGl0eS5jb250ZW50U2NvcmUgPSBjYW5kaWRhdGVTY29yZTsKCgkgICAgICAgIHRoaXMubG9nKCJDYW5kaWRhdGU6IiwgY2FuZGlkYXRlLCAid2l0aCBzY29yZSAiICsgY2FuZGlkYXRlU2NvcmUpOwoKCSAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0aGlzLl9uYlRvcENhbmRpZGF0ZXM7IHQrKykgewoJICAgICAgICAgIHZhciBhVG9wQ2FuZGlkYXRlID0gdG9wQ2FuZGlkYXRlc1t0XTsKCgkgICAgICAgICAgaWYgKCFhVG9wQ2FuZGlkYXRlIHx8IGNhbmRpZGF0ZVNjb3JlID4gYVRvcENhbmRpZGF0ZS5yZWFkYWJpbGl0eS5jb250ZW50U2NvcmUpIHsKCSAgICAgICAgICAgIHRvcENhbmRpZGF0ZXMuc3BsaWNlKHQsIDAsIGNhbmRpZGF0ZSk7CgkgICAgICAgICAgICBpZiAodG9wQ2FuZGlkYXRlcy5sZW5ndGggPiB0aGlzLl9uYlRvcENhbmRpZGF0ZXMpCgkgICAgICAgICAgICAgIHRvcENhbmRpZGF0ZXMucG9wKCk7CgkgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgIH0KCgkgICAgICB2YXIgdG9wQ2FuZGlkYXRlID0gdG9wQ2FuZGlkYXRlc1swXSB8fCBudWxsOwoJICAgICAgdmFyIG5lZWRlZFRvQ3JlYXRlVG9wQ2FuZGlkYXRlID0gZmFsc2U7CgkgICAgICB2YXIgcGFyZW50T2ZUb3BDYW5kaWRhdGU7CgoJICAgICAgLy8gSWYgd2Ugc3RpbGwgaGF2ZSBubyB0b3AgY2FuZGlkYXRlLCBqdXN0IHVzZSB0aGUgYm9keSBhcyBhIGxhc3QgcmVzb3J0LgoJICAgICAgLy8gV2UgYWxzbyBoYXZlIHRvIGNvcHkgdGhlIGJvZHkgbm9kZSBzbyBpdCBpcyBzb21ldGhpbmcgd2UgY2FuIG1vZGlmeS4KCSAgICAgIGlmICh0b3BDYW5kaWRhdGUgPT09IG51bGwgfHwgdG9wQ2FuZGlkYXRlLnRhZ05hbWUgPT09ICJCT0RZIikgewoJICAgICAgICAvLyBNb3ZlIGFsbCBvZiB0aGUgcGFnZSdzIGNoaWxkcmVuIGludG8gdG9wQ2FuZGlkYXRlCgkgICAgICAgIHRvcENhbmRpZGF0ZSA9IGRvYy5jcmVhdGVFbGVtZW50KCJESVYiKTsKCSAgICAgICAgbmVlZGVkVG9DcmVhdGVUb3BDYW5kaWRhdGUgPSB0cnVlOwoJICAgICAgICAvLyBNb3ZlIGV2ZXJ5dGhpbmcgKG5vdCBqdXN0IGVsZW1lbnRzLCBhbHNvIHRleHQgbm9kZXMgZXRjLikgaW50byB0aGUgY29udGFpbmVyCgkgICAgICAgIC8vIHNvIHdlIGV2ZW4gaW5jbHVkZSB0ZXh0IGRpcmVjdGx5IGluIHRoZSBib2R5OgoJICAgICAgICB2YXIga2lkcyA9IHBhZ2UuY2hpbGROb2RlczsKCSAgICAgICAgd2hpbGUgKGtpZHMubGVuZ3RoKSB7CgkgICAgICAgICAgdGhpcy5sb2coIk1vdmluZyBjaGlsZCBvdXQ6Iiwga2lkc1swXSk7CgkgICAgICAgICAgdG9wQ2FuZGlkYXRlLmFwcGVuZENoaWxkKGtpZHNbMF0pOwoJICAgICAgICB9CgoJICAgICAgICBwYWdlLmFwcGVuZENoaWxkKHRvcENhbmRpZGF0ZSk7CgoJICAgICAgICB0aGlzLl9pbml0aWFsaXplTm9kZSh0b3BDYW5kaWRhdGUpOwoJICAgICAgfSBlbHNlIGlmICh0b3BDYW5kaWRhdGUpIHsKCSAgICAgICAgLy8gRmluZCBhIGJldHRlciB0b3AgY2FuZGlkYXRlIG5vZGUgaWYgaXQgY29udGFpbnMgKGF0IGxlYXN0IHRocmVlKSBub2RlcyB3aGljaCBiZWxvbmcgdG8gYHRvcENhbmRpZGF0ZXNgIGFycmF5CgkgICAgICAgIC8vIGFuZCB3aG9zZSBzY29yZXMgYXJlIHF1aXRlIGNsb3NlZCB3aXRoIGN1cnJlbnQgYHRvcENhbmRpZGF0ZWAgbm9kZS4KCSAgICAgICAgdmFyIGFsdGVybmF0aXZlQ2FuZGlkYXRlQW5jZXN0b3JzID0gW107CgkgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgdG9wQ2FuZGlkYXRlcy5sZW5ndGg7IGkrKykgewoJICAgICAgICAgIGlmICh0b3BDYW5kaWRhdGVzW2ldLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSAvIHRvcENhbmRpZGF0ZS5yZWFkYWJpbGl0eS5jb250ZW50U2NvcmUgPj0gMC43NSkgewoJICAgICAgICAgICAgYWx0ZXJuYXRpdmVDYW5kaWRhdGVBbmNlc3RvcnMucHVzaCh0aGlzLl9nZXROb2RlQW5jZXN0b3JzKHRvcENhbmRpZGF0ZXNbaV0pKTsKCSAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgdmFyIE1JTklNVU1fVE9QQ0FORElEQVRFUyA9IDM7CgkgICAgICAgIGlmIChhbHRlcm5hdGl2ZUNhbmRpZGF0ZUFuY2VzdG9ycy5sZW5ndGggPj0gTUlOSU1VTV9UT1BDQU5ESURBVEVTKSB7CgkgICAgICAgICAgcGFyZW50T2ZUb3BDYW5kaWRhdGUgPSB0b3BDYW5kaWRhdGUucGFyZW50Tm9kZTsKCSAgICAgICAgICB3aGlsZSAocGFyZW50T2ZUb3BDYW5kaWRhdGUudGFnTmFtZSAhPT0gIkJPRFkiKSB7CgkgICAgICAgICAgICB2YXIgbGlzdHNDb250YWluaW5nVGhpc0FuY2VzdG9yID0gMDsKCSAgICAgICAgICAgIGZvciAodmFyIGFuY2VzdG9ySW5kZXggPSAwOyBhbmNlc3RvckluZGV4IDwgYWx0ZXJuYXRpdmVDYW5kaWRhdGVBbmNlc3RvcnMubGVuZ3RoICYmIGxpc3RzQ29udGFpbmluZ1RoaXNBbmNlc3RvciA8IE1JTklNVU1fVE9QQ0FORElEQVRFUzsgYW5jZXN0b3JJbmRleCsrKSB7CgkgICAgICAgICAgICAgIGxpc3RzQ29udGFpbmluZ1RoaXNBbmNlc3RvciArPSBOdW1iZXIoYWx0ZXJuYXRpdmVDYW5kaWRhdGVBbmNlc3RvcnNbYW5jZXN0b3JJbmRleF0uaW5jbHVkZXMocGFyZW50T2ZUb3BDYW5kaWRhdGUpKTsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIGlmIChsaXN0c0NvbnRhaW5pbmdUaGlzQW5jZXN0b3IgPj0gTUlOSU1VTV9UT1BDQU5ESURBVEVTKSB7CgkgICAgICAgICAgICAgIHRvcENhbmRpZGF0ZSA9IHBhcmVudE9mVG9wQ2FuZGlkYXRlOwoJICAgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICAgIH0KCSAgICAgICAgICAgIHBhcmVudE9mVG9wQ2FuZGlkYXRlID0gcGFyZW50T2ZUb3BDYW5kaWRhdGUucGFyZW50Tm9kZTsKCSAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgaWYgKCF0b3BDYW5kaWRhdGUucmVhZGFiaWxpdHkpIHsKCSAgICAgICAgICB0aGlzLl9pbml0aWFsaXplTm9kZSh0b3BDYW5kaWRhdGUpOwoJICAgICAgICB9CgoJICAgICAgICAvLyBCZWNhdXNlIG9mIG91ciBib251cyBzeXN0ZW0sIHBhcmVudHMgb2YgY2FuZGlkYXRlcyBtaWdodCBoYXZlIHNjb3JlcwoJICAgICAgICAvLyB0aGVtc2VsdmVzLiBUaGV5IGdldCBoYWxmIG9mIHRoZSBub2RlLiBUaGVyZSB3b24ndCBiZSBub2RlcyB3aXRoIGhpZ2hlcgoJICAgICAgICAvLyBzY29yZXMgdGhhbiBvdXIgdG9wQ2FuZGlkYXRlLCBidXQgaWYgd2Ugc2VlIHRoZSBzY29yZSBnb2luZyAqdXAqIGluIHRoZSBmaXJzdAoJICAgICAgICAvLyBmZXcgc3RlcHMgdXAgdGhlIHRyZWUsIHRoYXQncyBhIGRlY2VudCBzaWduIHRoYXQgdGhlcmUgbWlnaHQgYmUgbW9yZSBjb250ZW50CgkgICAgICAgIC8vIGx1cmtpbmcgaW4gb3RoZXIgcGxhY2VzIHRoYXQgd2Ugd2FudCB0byB1bmlmeSBpbi4gVGhlIHNpYmxpbmcgc3R1ZmYKCSAgICAgICAgLy8gYmVsb3cgZG9lcyBzb21lIG9mIHRoYXQgLSBidXQgb25seSBpZiB3ZSd2ZSBsb29rZWQgaGlnaCBlbm91Z2ggdXAgdGhlIERPTQoJICAgICAgICAvLyB0cmVlLgoJICAgICAgICBwYXJlbnRPZlRvcENhbmRpZGF0ZSA9IHRvcENhbmRpZGF0ZS5wYXJlbnROb2RlOwoJICAgICAgICB2YXIgbGFzdFNjb3JlID0gdG9wQ2FuZGlkYXRlLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZTsKCSAgICAgICAgLy8gVGhlIHNjb3JlcyBzaG91bGRuJ3QgZ2V0IHRvbyBsb3cuCgkgICAgICAgIHZhciBzY29yZVRocmVzaG9sZCA9IGxhc3RTY29yZSAvIDM7CgkgICAgICAgIHdoaWxlIChwYXJlbnRPZlRvcENhbmRpZGF0ZS50YWdOYW1lICE9PSAiQk9EWSIpIHsKCSAgICAgICAgICBpZiAoIXBhcmVudE9mVG9wQ2FuZGlkYXRlLnJlYWRhYmlsaXR5KSB7CgkgICAgICAgICAgICBwYXJlbnRPZlRvcENhbmRpZGF0ZSA9IHBhcmVudE9mVG9wQ2FuZGlkYXRlLnBhcmVudE5vZGU7CgkgICAgICAgICAgICBjb250aW51ZTsKCSAgICAgICAgICB9CgkgICAgICAgICAgdmFyIHBhcmVudFNjb3JlID0gcGFyZW50T2ZUb3BDYW5kaWRhdGUucmVhZGFiaWxpdHkuY29udGVudFNjb3JlOwoJICAgICAgICAgIGlmIChwYXJlbnRTY29yZSA8IHNjb3JlVGhyZXNob2xkKQoJICAgICAgICAgICAgYnJlYWs7CgkgICAgICAgICAgaWYgKHBhcmVudFNjb3JlID4gbGFzdFNjb3JlKSB7CgkgICAgICAgICAgICAvLyBBbHJpZ2h0ISBXZSBmb3VuZCBhIGJldHRlciBwYXJlbnQgdG8gdXNlLgoJICAgICAgICAgICAgdG9wQ2FuZGlkYXRlID0gcGFyZW50T2ZUb3BDYW5kaWRhdGU7CgkgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICB9CgkgICAgICAgICAgbGFzdFNjb3JlID0gcGFyZW50T2ZUb3BDYW5kaWRhdGUucmVhZGFiaWxpdHkuY29udGVudFNjb3JlOwoJICAgICAgICAgIHBhcmVudE9mVG9wQ2FuZGlkYXRlID0gcGFyZW50T2ZUb3BDYW5kaWRhdGUucGFyZW50Tm9kZTsKCSAgICAgICAgfQoKCSAgICAgICAgLy8gSWYgdGhlIHRvcCBjYW5kaWRhdGUgaXMgdGhlIG9ubHkgY2hpbGQsIHVzZSBwYXJlbnQgaW5zdGVhZC4gVGhpcyB3aWxsIGhlbHAgc2libGluZwoJICAgICAgICAvLyBqb2luaW5nIGxvZ2ljIHdoZW4gYWRqYWNlbnQgY29udGVudCBpcyBhY3R1YWxseSBsb2NhdGVkIGluIHBhcmVudCdzIHNpYmxpbmcgbm9kZS4KCSAgICAgICAgcGFyZW50T2ZUb3BDYW5kaWRhdGUgPSB0b3BDYW5kaWRhdGUucGFyZW50Tm9kZTsKCSAgICAgICAgd2hpbGUgKHBhcmVudE9mVG9wQ2FuZGlkYXRlLnRhZ05hbWUgIT0gIkJPRFkiICYmIHBhcmVudE9mVG9wQ2FuZGlkYXRlLmNoaWxkcmVuLmxlbmd0aCA9PSAxKSB7CgkgICAgICAgICAgdG9wQ2FuZGlkYXRlID0gcGFyZW50T2ZUb3BDYW5kaWRhdGU7CgkgICAgICAgICAgcGFyZW50T2ZUb3BDYW5kaWRhdGUgPSB0b3BDYW5kaWRhdGUucGFyZW50Tm9kZTsKCSAgICAgICAgfQoJICAgICAgICBpZiAoIXRvcENhbmRpZGF0ZS5yZWFkYWJpbGl0eSkgewoJICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVOb2RlKHRvcENhbmRpZGF0ZSk7CgkgICAgICAgIH0KCSAgICAgIH0KCgkgICAgICAvLyBOb3cgdGhhdCB3ZSBoYXZlIHRoZSB0b3AgY2FuZGlkYXRlLCBsb29rIHRocm91Z2ggaXRzIHNpYmxpbmdzIGZvciBjb250ZW50CgkgICAgICAvLyB0aGF0IG1pZ2h0IGFsc28gYmUgcmVsYXRlZC4gVGhpbmdzIGxpa2UgcHJlYW1ibGVzLCBjb250ZW50IHNwbGl0IGJ5IGFkcwoJICAgICAgLy8gdGhhdCB3ZSByZW1vdmVkLCBldGMuCgkgICAgICB2YXIgYXJ0aWNsZUNvbnRlbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgiRElWIik7CgkgICAgICBpZiAoaXNQYWdpbmcpCgkgICAgICAgIGFydGljbGVDb250ZW50LmlkID0gInJlYWRhYmlsaXR5LWNvbnRlbnQiOwoKCSAgICAgIHZhciBzaWJsaW5nU2NvcmVUaHJlc2hvbGQgPSBNYXRoLm1heCgxMCwgdG9wQ2FuZGlkYXRlLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSAqIDAuMik7CgkgICAgICAvLyBLZWVwIHBvdGVudGlhbCB0b3AgY2FuZGlkYXRlJ3MgcGFyZW50IG5vZGUgdG8gdHJ5IHRvIGdldCB0ZXh0IGRpcmVjdGlvbiBvZiBpdCBsYXRlci4KCSAgICAgIHBhcmVudE9mVG9wQ2FuZGlkYXRlID0gdG9wQ2FuZGlkYXRlLnBhcmVudE5vZGU7CgkgICAgICB2YXIgc2libGluZ3MgPSBwYXJlbnRPZlRvcENhbmRpZGF0ZS5jaGlsZHJlbjsKCgkgICAgICBmb3IgKHZhciBzID0gMCwgc2wgPSBzaWJsaW5ncy5sZW5ndGg7IHMgPCBzbDsgcysrKSB7CgkgICAgICAgIHZhciBzaWJsaW5nID0gc2libGluZ3Nbc107CgkgICAgICAgIHZhciBhcHBlbmQgPSBmYWxzZTsKCgkgICAgICAgIHRoaXMubG9nKCJMb29raW5nIGF0IHNpYmxpbmcgbm9kZToiLCBzaWJsaW5nLCBzaWJsaW5nLnJlYWRhYmlsaXR5ID8gKCJ3aXRoIHNjb3JlICIgKyBzaWJsaW5nLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSkgOiAiIik7CgkgICAgICAgIHRoaXMubG9nKCJTaWJsaW5nIGhhcyBzY29yZSIsIHNpYmxpbmcucmVhZGFiaWxpdHkgPyBzaWJsaW5nLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSA6ICJVbmtub3duIik7CgoJICAgICAgICBpZiAoc2libGluZyA9PT0gdG9wQ2FuZGlkYXRlKSB7CgkgICAgICAgICAgYXBwZW5kID0gdHJ1ZTsKCSAgICAgICAgfSBlbHNlIHsKCSAgICAgICAgICB2YXIgY29udGVudEJvbnVzID0gMDsKCgkgICAgICAgICAgLy8gR2l2ZSBhIGJvbnVzIGlmIHNpYmxpbmcgbm9kZXMgYW5kIHRvcCBjYW5kaWRhdGVzIGhhdmUgdGhlIGV4YW1wbGUgc2FtZSBjbGFzc25hbWUKCSAgICAgICAgICBpZiAoc2libGluZy5jbGFzc05hbWUgPT09IHRvcENhbmRpZGF0ZS5jbGFzc05hbWUgJiYgdG9wQ2FuZGlkYXRlLmNsYXNzTmFtZSAhPT0gIiIpCgkgICAgICAgICAgICBjb250ZW50Qm9udXMgKz0gdG9wQ2FuZGlkYXRlLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSAqIDAuMjsKCgkgICAgICAgICAgaWYgKHNpYmxpbmcucmVhZGFiaWxpdHkgJiYKCSAgICAgICAgICAgICAgKChzaWJsaW5nLnJlYWRhYmlsaXR5LmNvbnRlbnRTY29yZSArIGNvbnRlbnRCb251cykgPj0gc2libGluZ1Njb3JlVGhyZXNob2xkKSkgewoJICAgICAgICAgICAgYXBwZW5kID0gdHJ1ZTsKCSAgICAgICAgICB9IGVsc2UgaWYgKHNpYmxpbmcubm9kZU5hbWUgPT09ICJQIikgewoJICAgICAgICAgICAgdmFyIGxpbmtEZW5zaXR5ID0gdGhpcy5fZ2V0TGlua0RlbnNpdHkoc2libGluZyk7CgkgICAgICAgICAgICB2YXIgbm9kZUNvbnRlbnQgPSB0aGlzLl9nZXRJbm5lclRleHQoc2libGluZyk7CgkgICAgICAgICAgICB2YXIgbm9kZUxlbmd0aCA9IG5vZGVDb250ZW50Lmxlbmd0aDsKCgkgICAgICAgICAgICBpZiAobm9kZUxlbmd0aCA+IDgwICYmIGxpbmtEZW5zaXR5IDwgMC4yNSkgewoJICAgICAgICAgICAgICBhcHBlbmQgPSB0cnVlOwoJICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlTGVuZ3RoIDwgODAgJiYgbm9kZUxlbmd0aCA+IDAgJiYgbGlua0RlbnNpdHkgPT09IDAgJiYKCSAgICAgICAgICAgICAgICAgICAgICAgbm9kZUNvbnRlbnQuc2VhcmNoKC9cLiggfCQpLykgIT09IC0xKSB7CgkgICAgICAgICAgICAgIGFwcGVuZCA9IHRydWU7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgfQoJICAgICAgICB9CgoJICAgICAgICBpZiAoYXBwZW5kKSB7CgkgICAgICAgICAgdGhpcy5sb2coIkFwcGVuZGluZyBub2RlOiIsIHNpYmxpbmcpOwoKCSAgICAgICAgICBpZiAodGhpcy5BTFRFUl9UT19ESVZfRVhDRVBUSU9OUy5pbmRleE9mKHNpYmxpbmcubm9kZU5hbWUpID09PSAtMSkgewoJICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIG5vZGUgdGhhdCBpc24ndCBhIGNvbW1vbiBibG9jayBsZXZlbCBlbGVtZW50LCBsaWtlIGEgZm9ybSBvciB0ZCB0YWcuCgkgICAgICAgICAgICAvLyBUdXJuIGl0IGludG8gYSBkaXYgc28gaXQgZG9lc24ndCBnZXQgZmlsdGVyZWQgb3V0IGxhdGVyIGJ5IGFjY2lkZW50LgoJICAgICAgICAgICAgdGhpcy5sb2coIkFsdGVyaW5nIHNpYmxpbmc6Iiwgc2libGluZywgInRvIGRpdi4iKTsKCgkgICAgICAgICAgICBzaWJsaW5nID0gdGhpcy5fc2V0Tm9kZVRhZyhzaWJsaW5nLCAiRElWIik7CgkgICAgICAgICAgfQoKCSAgICAgICAgICBhcnRpY2xlQ29udGVudC5hcHBlbmRDaGlsZChzaWJsaW5nKTsKCSAgICAgICAgICAvLyBzaWJsaW5ncyBpcyBhIHJlZmVyZW5jZSB0byB0aGUgY2hpbGRyZW4gYXJyYXksIGFuZAoJICAgICAgICAgIC8vIHNpYmxpbmcgaXMgcmVtb3ZlZCBmcm9tIHRoZSBhcnJheSB3aGVuIHdlIGNhbGwgYXBwZW5kQ2hpbGQoKS4KCSAgICAgICAgICAvLyBBcyBhIHJlc3VsdCwgd2UgbXVzdCByZXZpc2l0IHRoaXMgaW5kZXggc2luY2UgdGhlIG5vZGVzCgkgICAgICAgICAgLy8gaGF2ZSBiZWVuIHNoaWZ0ZWQuCgkgICAgICAgICAgcyAtPSAxOwoJICAgICAgICAgIHNsIC09IDE7CgkgICAgICAgIH0KCSAgICAgIH0KCgkgICAgICBpZiAodGhpcy5fZGVidWcpCgkgICAgICAgIHRoaXMubG9nKCJBcnRpY2xlIGNvbnRlbnQgcHJlLXByZXA6ICIgKyBhcnRpY2xlQ29udGVudC5pbm5lckhUTUwpOwoJICAgICAgLy8gU28gd2UgaGF2ZSBhbGwgb2YgdGhlIGNvbnRlbnQgdGhhdCB3ZSBuZWVkLiBOb3cgd2UgY2xlYW4gaXQgdXAgZm9yIHByZXNlbnRhdGlvbi4KCSAgICAgIHRoaXMuX3ByZXBBcnRpY2xlKGFydGljbGVDb250ZW50KTsKCSAgICAgIGlmICh0aGlzLl9kZWJ1ZykKCSAgICAgICAgdGhpcy5sb2coIkFydGljbGUgY29udGVudCBwb3N0LXByZXA6ICIgKyBhcnRpY2xlQ29udGVudC5pbm5lckhUTUwpOwoKCSAgICAgIGlmIChuZWVkZWRUb0NyZWF0ZVRvcENhbmRpZGF0ZSkgewoJICAgICAgICAvLyBXZSBhbHJlYWR5IGNyZWF0ZWQgYSBmYWtlIGRpdiB0aGluZywgYW5kIHRoZXJlIHdvdWxkbid0IGhhdmUgYmVlbiBhbnkgc2libGluZ3MgbGVmdAoJICAgICAgICAvLyBmb3IgdGhlIHByZXZpb3VzIGxvb3AsIHNvIHRoZXJlJ3Mgbm8gcG9pbnQgdHJ5aW5nIHRvIGNyZWF0ZSBhIG5ldyBkaXYsIGFuZCB0aGVuCgkgICAgICAgIC8vIG1vdmUgYWxsIHRoZSBjaGlsZHJlbiBvdmVyLiBKdXN0IGFzc2lnbiBJRHMgYW5kIGNsYXNzIG5hbWVzIGhlcmUuIE5vIG5lZWQgdG8gYXBwZW5kCgkgICAgICAgIC8vIGJlY2F1c2UgdGhhdCBhbHJlYWR5IGhhcHBlbmVkIGFueXdheS4KCSAgICAgICAgdG9wQ2FuZGlkYXRlLmlkID0gInJlYWRhYmlsaXR5LXBhZ2UtMSI7CgkgICAgICAgIHRvcENhbmRpZGF0ZS5jbGFzc05hbWUgPSAicGFnZSI7CgkgICAgICB9IGVsc2UgewoJICAgICAgICB2YXIgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoIkRJViIpOwoJICAgICAgICBkaXYuaWQgPSAicmVhZGFiaWxpdHktcGFnZS0xIjsKCSAgICAgICAgZGl2LmNsYXNzTmFtZSA9ICJwYWdlIjsKCSAgICAgICAgdmFyIGNoaWxkcmVuID0gYXJ0aWNsZUNvbnRlbnQuY2hpbGROb2RlczsKCSAgICAgICAgd2hpbGUgKGNoaWxkcmVuLmxlbmd0aCkgewoJICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChjaGlsZHJlblswXSk7CgkgICAgICAgIH0KCSAgICAgICAgYXJ0aWNsZUNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTsKCSAgICAgIH0KCgkgICAgICBpZiAodGhpcy5fZGVidWcpCgkgICAgICAgIHRoaXMubG9nKCJBcnRpY2xlIGNvbnRlbnQgYWZ0ZXIgcGFnaW5nOiAiICsgYXJ0aWNsZUNvbnRlbnQuaW5uZXJIVE1MKTsKCgkgICAgICB2YXIgcGFyc2VTdWNjZXNzZnVsID0gdHJ1ZTsKCgkgICAgICAvLyBOb3cgdGhhdCB3ZSd2ZSBnb25lIHRocm91Z2ggdGhlIGZ1bGwgYWxnb3JpdGhtLCBjaGVjayB0byBzZWUgaWYKCSAgICAgIC8vIHdlIGdvdCBhbnkgbWVhbmluZ2Z1bCBjb250ZW50LiBJZiB3ZSBkaWRuJ3QsIHdlIG1heSBuZWVkIHRvIHJlLXJ1bgoJICAgICAgLy8gZ3JhYkFydGljbGUgd2l0aCBkaWZmZXJlbnQgZmxhZ3Mgc2V0LiBUaGlzIGdpdmVzIHVzIGEgaGlnaGVyIGxpa2VsaWhvb2Qgb2YKCSAgICAgIC8vIGZpbmRpbmcgdGhlIGNvbnRlbnQsIGFuZCB0aGUgc2lldmUgYXBwcm9hY2ggZ2l2ZXMgdXMgYSBoaWdoZXIgbGlrZWxpaG9vZCBvZgoJICAgICAgLy8gZmluZGluZyB0aGUgLXJpZ2h0LSBjb250ZW50LgoJICAgICAgdmFyIHRleHRMZW5ndGggPSB0aGlzLl9nZXRJbm5lclRleHQoYXJ0aWNsZUNvbnRlbnQsIHRydWUpLmxlbmd0aDsKCSAgICAgIGlmICh0ZXh0TGVuZ3RoIDwgdGhpcy5fY2hhclRocmVzaG9sZCkgewoJICAgICAgICBwYXJzZVN1Y2Nlc3NmdWwgPSBmYWxzZTsKCSAgICAgICAgcGFnZS5pbm5lckhUTUwgPSBwYWdlQ2FjaGVIdG1sOwoKCSAgICAgICAgaWYgKHRoaXMuX2ZsYWdJc0FjdGl2ZSh0aGlzLkZMQUdfU1RSSVBfVU5MSUtFTFlTKSkgewoJICAgICAgICAgIHRoaXMuX3JlbW92ZUZsYWcodGhpcy5GTEFHX1NUUklQX1VOTElLRUxZUyk7CgkgICAgICAgICAgdGhpcy5fYXR0ZW1wdHMucHVzaCh7YXJ0aWNsZUNvbnRlbnQ6IGFydGljbGVDb250ZW50LCB0ZXh0TGVuZ3RoOiB0ZXh0TGVuZ3RofSk7CgkgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmxhZ0lzQWN0aXZlKHRoaXMuRkxBR19XRUlHSFRfQ0xBU1NFUykpIHsKCSAgICAgICAgICB0aGlzLl9yZW1vdmVGbGFnKHRoaXMuRkxBR19XRUlHSFRfQ0xBU1NFUyk7CgkgICAgICAgICAgdGhpcy5fYXR0ZW1wdHMucHVzaCh7YXJ0aWNsZUNvbnRlbnQ6IGFydGljbGVDb250ZW50LCB0ZXh0TGVuZ3RoOiB0ZXh0TGVuZ3RofSk7CgkgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZmxhZ0lzQWN0aXZlKHRoaXMuRkxBR19DTEVBTl9DT05ESVRJT05BTExZKSkgewoJICAgICAgICAgIHRoaXMuX3JlbW92ZUZsYWcodGhpcy5GTEFHX0NMRUFOX0NPTkRJVElPTkFMTFkpOwoJICAgICAgICAgIHRoaXMuX2F0dGVtcHRzLnB1c2goe2FydGljbGVDb250ZW50OiBhcnRpY2xlQ29udGVudCwgdGV4dExlbmd0aDogdGV4dExlbmd0aH0pOwoJICAgICAgICB9IGVsc2UgewoJICAgICAgICAgIHRoaXMuX2F0dGVtcHRzLnB1c2goe2FydGljbGVDb250ZW50OiBhcnRpY2xlQ29udGVudCwgdGV4dExlbmd0aDogdGV4dExlbmd0aH0pOwoJICAgICAgICAgIC8vIE5vIGx1Y2sgYWZ0ZXIgcmVtb3ZpbmcgZmxhZ3MsIGp1c3QgcmV0dXJuIHRoZSBsb25nZXN0IHRleHQgd2UgZm91bmQgZHVyaW5nIHRoZSBkaWZmZXJlbnQgbG9vcHMKCSAgICAgICAgICB0aGlzLl9hdHRlbXB0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7CgkgICAgICAgICAgICByZXR1cm4gYi50ZXh0TGVuZ3RoIC0gYS50ZXh0TGVuZ3RoOwoJICAgICAgICAgIH0pOwoKCSAgICAgICAgICAvLyBCdXQgZmlyc3QgY2hlY2sgaWYgd2UgYWN0dWFsbHkgaGF2ZSBzb21ldGhpbmcKCSAgICAgICAgICBpZiAoIXRoaXMuX2F0dGVtcHRzWzBdLnRleHRMZW5ndGgpIHsKCSAgICAgICAgICAgIHJldHVybiBudWxsOwoJICAgICAgICAgIH0KCgkgICAgICAgICAgYXJ0aWNsZUNvbnRlbnQgPSB0aGlzLl9hdHRlbXB0c1swXS5hcnRpY2xlQ29udGVudDsKCSAgICAgICAgICBwYXJzZVN1Y2Nlc3NmdWwgPSB0cnVlOwoJICAgICAgICB9CgkgICAgICB9CgoJICAgICAgaWYgKHBhcnNlU3VjY2Vzc2Z1bCkgewoJICAgICAgICAvLyBGaW5kIG91dCB0ZXh0IGRpcmVjdGlvbiBmcm9tIGFuY2VzdG9ycyBvZiBmaW5hbCB0b3AgY2FuZGlkYXRlLgoJICAgICAgICB2YXIgYW5jZXN0b3JzID0gW3BhcmVudE9mVG9wQ2FuZGlkYXRlLCB0b3BDYW5kaWRhdGVdLmNvbmNhdCh0aGlzLl9nZXROb2RlQW5jZXN0b3JzKHBhcmVudE9mVG9wQ2FuZGlkYXRlKSk7CgkgICAgICAgIHRoaXMuX3NvbWVOb2RlKGFuY2VzdG9ycywgZnVuY3Rpb24oYW5jZXN0b3IpIHsKCSAgICAgICAgICBpZiAoIWFuY2VzdG9yLnRhZ05hbWUpCgkgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgICAgdmFyIGFydGljbGVEaXIgPSBhbmNlc3Rvci5nZXRBdHRyaWJ1dGUoImRpciIpOwoJICAgICAgICAgIGlmIChhcnRpY2xlRGlyKSB7CgkgICAgICAgICAgICB0aGlzLl9hcnRpY2xlRGlyID0gYXJ0aWNsZURpcjsKCSAgICAgICAgICAgIHJldHVybiB0cnVlOwoJICAgICAgICAgIH0KCSAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgIH0pOwoJICAgICAgICByZXR1cm4gYXJ0aWNsZUNvbnRlbnQ7CgkgICAgICB9CgkgICAgfQoJICB9LAoKCSAgLyoqCgkgICAqIENoZWNrIHdoZXRoZXIgdGhlIGlucHV0IHN0cmluZyBjb3VsZCBiZSBhIGJ5bGluZS4KCSAgICogVGhpcyB2ZXJpZmllcyB0aGF0IHRoZSBpbnB1dCBpcyBhIHN0cmluZywgYW5kIHRoYXQgdGhlIGxlbmd0aAoJICAgKiBpcyBsZXNzIHRoYW4gMTAwIGNoYXJzLgoJICAgKgoJICAgKiBAcGFyYW0gcG9zc2libGVCeWxpbmUge3N0cmluZ30gLSBhIHN0cmluZyB0byBjaGVjayB3aGV0aGVyIGl0cyBhIGJ5bGluZS4KCSAgICogQHJldHVybiBCb29sZWFuIC0gd2hldGhlciB0aGUgaW5wdXQgc3RyaW5nIGlzIGEgYnlsaW5lLgoJICAgKi8KCSAgX2lzVmFsaWRCeWxpbmU6IGZ1bmN0aW9uKGJ5bGluZSkgewoJICAgIGlmICh0eXBlb2YgYnlsaW5lID09ICJzdHJpbmciIHx8IGJ5bGluZSBpbnN0YW5jZW9mIFN0cmluZykgewoJICAgICAgYnlsaW5lID0gYnlsaW5lLnRyaW0oKTsKCSAgICAgIHJldHVybiAoYnlsaW5lLmxlbmd0aCA+IDApICYmIChieWxpbmUubGVuZ3RoIDwgMTAwKTsKCSAgICB9CgkgICAgcmV0dXJuIGZhbHNlOwoJICB9LAoKCSAgLyoqCgkgICAqIENvbnZlcnRzIHNvbWUgb2YgdGhlIGNvbW1vbiBIVE1MIGVudGl0aWVzIGluIHN0cmluZyB0byB0aGVpciBjb3JyZXNwb25kaW5nIGNoYXJhY3RlcnMuCgkgICAqCgkgICAqIEBwYXJhbSBzdHIge3N0cmluZ30gLSBhIHN0cmluZyB0byB1bmVzY2FwZS4KCSAgICogQHJldHVybiBzdHJpbmcgd2l0aG91dCBIVE1MIGVudGl0eS4KCSAgICovCgkgIF91bmVzY2FwZUh0bWxFbnRpdGllczogZnVuY3Rpb24oc3RyKSB7CgkgICAgaWYgKCFzdHIpIHsKCSAgICAgIHJldHVybiBzdHI7CgkgICAgfQoKCSAgICB2YXIgaHRtbEVzY2FwZU1hcCA9IHRoaXMuSFRNTF9FU0NBUEVfTUFQOwoJICAgIHJldHVybiBzdHIucmVwbGFjZSgvJihxdW90fGFtcHxhcG9zfGx0fGd0KTsvZywgZnVuY3Rpb24oXywgdGFnKSB7CgkgICAgICByZXR1cm4gaHRtbEVzY2FwZU1hcFt0YWddOwoJICAgIH0pLnJlcGxhY2UoLyYjKD86eChbMC05YS16XXsxLDR9KXwoWzAtOV17MSw0fSkpOy9naSwgZnVuY3Rpb24oXywgaGV4LCBudW1TdHIpIHsKCSAgICAgIHZhciBudW0gPSBwYXJzZUludChoZXggfHwgbnVtU3RyLCBoZXggPyAxNiA6IDEwKTsKCSAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG51bSk7CgkgICAgfSk7CgkgIH0sCgoJICAvKioKCSAgICogVHJ5IHRvIGV4dHJhY3QgbWV0YWRhdGEgZnJvbSBKU09OLUxEIG9iamVjdC4KCSAgICogRm9yIG5vdywgb25seSBTY2hlbWEub3JnIG9iamVjdHMgb2YgdHlwZSBBcnRpY2xlIG9yIGl0cyBzdWJ0eXBlcyBhcmUgc3VwcG9ydGVkLgoJICAgKiBAcmV0dXJuIE9iamVjdCB3aXRoIGFueSBtZXRhZGF0YSB0aGF0IGNvdWxkIGJlIGV4dHJhY3RlZCAocG9zc2libHkgbm9uZSkKCSAgICovCgkgIF9nZXRKU09OTEQ6IGZ1bmN0aW9uIChkb2MpIHsKCSAgICB2YXIgc2NyaXB0cyA9IHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhkb2MsIFsic2NyaXB0Il0pOwoKCSAgICB2YXIganNvbkxkRWxlbWVudCA9IHRoaXMuX2ZpbmROb2RlKHNjcmlwdHMsIGZ1bmN0aW9uKGVsKSB7CgkgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCJ0eXBlIikgPT09ICJhcHBsaWNhdGlvbi9sZCtqc29uIjsKCSAgICB9KTsKCgkgICAgaWYgKGpzb25MZEVsZW1lbnQpIHsKCSAgICAgIHRyeSB7CgkgICAgICAgIC8vIFN0cmlwIENEQVRBIG1hcmtlcnMgaWYgcHJlc2VudAoJICAgICAgICB2YXIgY29udGVudCA9IGpzb25MZEVsZW1lbnQudGV4dENvbnRlbnQucmVwbGFjZSgvXlxzKjwhXFtDREFUQVxbfFxdXF0+XHMqJC9nLCAiIik7CgkgICAgICAgIHZhciBwYXJzZWQgPSBKU09OLnBhcnNlKGNvbnRlbnQpOwoJICAgICAgICB2YXIgbWV0YWRhdGEgPSB7fTsKCSAgICAgICAgaWYgKAoJICAgICAgICAgICFwYXJzZWRbIkBjb250ZXh0Il0gfHwKCSAgICAgICAgICAhcGFyc2VkWyJAY29udGV4dCJdLm1hdGNoKC9eaHR0cHM/XDpcL1wvc2NoZW1hXC5vcmckLykKCSAgICAgICAgKSB7CgkgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhOwoJICAgICAgICB9CgoJICAgICAgICBpZiAoIXBhcnNlZFsiQHR5cGUiXSAmJiBBcnJheS5pc0FycmF5KHBhcnNlZFsiQGdyYXBoIl0pKSB7CgkgICAgICAgICAgcGFyc2VkID0gcGFyc2VkWyJAZ3JhcGgiXS5maW5kKGZ1bmN0aW9uKGl0KSB7CgkgICAgICAgICAgICByZXR1cm4gKGl0WyJAdHlwZSJdIHx8ICIiKS5tYXRjaCgKCSAgICAgICAgICAgICAgdGhpcy5SRUdFWFBTLmpzb25MZEFydGljbGVUeXBlcwoJICAgICAgICAgICAgKTsKCSAgICAgICAgICB9KTsKCSAgICAgICAgfQoKCSAgICAgICAgaWYgKAoJICAgICAgICAgICFwYXJzZWQgfHwKCSAgICAgICAgICAhcGFyc2VkWyJAdHlwZSJdIHx8CgkgICAgICAgICAgIXBhcnNlZFsiQHR5cGUiXS5tYXRjaCh0aGlzLlJFR0VYUFMuanNvbkxkQXJ0aWNsZVR5cGVzKQoJICAgICAgICApIHsKCSAgICAgICAgICByZXR1cm4gbWV0YWRhdGE7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQubmFtZSA9PT0gInN0cmluZyIpIHsKCSAgICAgICAgICBtZXRhZGF0YS50aXRsZSA9IHBhcnNlZC5uYW1lLnRyaW0oKTsKCSAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyc2VkLmhlYWRsaW5lID09PSAic3RyaW5nIikgewoJICAgICAgICAgIG1ldGFkYXRhLnRpdGxlID0gcGFyc2VkLmhlYWRsaW5lLnRyaW0oKTsKCSAgICAgICAgfQoJICAgICAgICBpZiAocGFyc2VkLmF1dGhvcikgewoJICAgICAgICAgIGlmICh0eXBlb2YgcGFyc2VkLmF1dGhvci5uYW1lID09PSAic3RyaW5nIikgewoJICAgICAgICAgICAgbWV0YWRhdGEuYnlsaW5lID0gcGFyc2VkLmF1dGhvci5uYW1lLnRyaW0oKTsKCSAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGFyc2VkLmF1dGhvcikgJiYgcGFyc2VkLmF1dGhvclswXSAmJiB0eXBlb2YgcGFyc2VkLmF1dGhvclswXS5uYW1lID09PSAic3RyaW5nIikgewoJICAgICAgICAgICAgbWV0YWRhdGEuYnlsaW5lID0gcGFyc2VkLmF1dGhvcgoJICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGF1dGhvcikgewoJICAgICAgICAgICAgICAgIHJldHVybiBhdXRob3IgJiYgdHlwZW9mIGF1dGhvci5uYW1lID09PSAic3RyaW5nIjsKCSAgICAgICAgICAgICAgfSkKCSAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihhdXRob3IpIHsKCSAgICAgICAgICAgICAgICByZXR1cm4gYXV0aG9yLm5hbWUudHJpbSgpOwoJICAgICAgICAgICAgICB9KQoJICAgICAgICAgICAgICAuam9pbigiLCAiKTsKCSAgICAgICAgICB9CgkgICAgICAgIH0KCSAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQuZGVzY3JpcHRpb24gPT09ICJzdHJpbmciKSB7CgkgICAgICAgICAgbWV0YWRhdGEuZXhjZXJwdCA9IHBhcnNlZC5kZXNjcmlwdGlvbi50cmltKCk7CgkgICAgICAgIH0KCSAgICAgICAgaWYgKAoJICAgICAgICAgIHBhcnNlZC5wdWJsaXNoZXIgJiYKCSAgICAgICAgICB0eXBlb2YgcGFyc2VkLnB1Ymxpc2hlci5uYW1lID09PSAic3RyaW5nIgoJICAgICAgICApIHsKCSAgICAgICAgICBtZXRhZGF0YS5zaXRlTmFtZSA9IHBhcnNlZC5wdWJsaXNoZXIubmFtZS50cmltKCk7CgkgICAgICAgIH0KCSAgICAgICAgcmV0dXJuIG1ldGFkYXRhOwoJICAgICAgfSBjYXRjaCAoZXJyKSB7CgkgICAgICAgIHRoaXMubG9nKGVyci5tZXNzYWdlKTsKCSAgICAgIH0KCSAgICB9CgkgICAgcmV0dXJuIHt9OwoJICB9LAoKCSAgLyoqCgkgICAqIEF0dGVtcHRzIHRvIGdldCBleGNlcnB0IGFuZCBieWxpbmUgbWV0YWRhdGEgZm9yIHRoZSBhcnRpY2xlLgoJICAgKgoJICAgKiBAcGFyYW0ge09iamVjdH0ganNvbmxkIOKAlCBvYmplY3QgY29udGFpbmluZyBhbnkgbWV0YWRhdGEgdGhhdAoJICAgKiBjb3VsZCBiZSBleHRyYWN0ZWQgZnJvbSBKU09OLUxEIG9iamVjdC4KCSAgICoKCSAgICogQHJldHVybiBPYmplY3Qgd2l0aCBvcHRpb25hbCAiZXhjZXJwdCIgYW5kICJieWxpbmUiIHByb3BlcnRpZXMKCSAgICovCgkgIF9nZXRBcnRpY2xlTWV0YWRhdGE6IGZ1bmN0aW9uKGpzb25sZCkgewoJICAgIHZhciBtZXRhZGF0YSA9IHt9OwoJICAgIHZhciB2YWx1ZXMgPSB7fTsKCSAgICB2YXIgbWV0YUVsZW1lbnRzID0gdGhpcy5fZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJtZXRhIik7CgoJICAgIC8vIHByb3BlcnR5IGlzIGEgc3BhY2Utc2VwYXJhdGVkIGxpc3Qgb2YgdmFsdWVzCgkgICAgdmFyIHByb3BlcnR5UGF0dGVybiA9IC9ccyooZGN8ZGN0ZXJtfG9nfHR3aXR0ZXIpXHMqOlxzKihhdXRob3J8Y3JlYXRvcnxkZXNjcmlwdGlvbnx0aXRsZXxzaXRlX25hbWUpXHMqL2dpOwoKCSAgICAvLyBuYW1lIGlzIGEgc2luZ2xlIHZhbHVlCgkgICAgdmFyIG5hbWVQYXR0ZXJuID0gL15ccyooPzooZGN8ZGN0ZXJtfG9nfHR3aXR0ZXJ8d2VpYm86KGFydGljbGV8d2VicGFnZSkpXHMqW1wuOl1ccyopPyhhdXRob3J8Y3JlYXRvcnxkZXNjcmlwdGlvbnx0aXRsZXxzaXRlX25hbWUpXHMqJC9pOwoKCSAgICAvLyBGaW5kIGRlc2NyaXB0aW9uIHRhZ3MuCgkgICAgdGhpcy5fZm9yRWFjaE5vZGUobWV0YUVsZW1lbnRzLCBmdW5jdGlvbihlbGVtZW50KSB7CgkgICAgICB2YXIgZWxlbWVudE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgibmFtZSIpOwoJICAgICAgdmFyIGVsZW1lbnRQcm9wZXJ0eSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCJwcm9wZXJ0eSIpOwoJICAgICAgdmFyIGNvbnRlbnQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgiY29udGVudCIpOwoJICAgICAgaWYgKCFjb250ZW50KSB7CgkgICAgICAgIHJldHVybjsKCSAgICAgIH0KCSAgICAgIHZhciBtYXRjaGVzID0gbnVsbDsKCSAgICAgIHZhciBuYW1lID0gbnVsbDsKCgkgICAgICBpZiAoZWxlbWVudFByb3BlcnR5KSB7CgkgICAgICAgIG1hdGNoZXMgPSBlbGVtZW50UHJvcGVydHkubWF0Y2gocHJvcGVydHlQYXR0ZXJuKTsKCSAgICAgICAgaWYgKG1hdGNoZXMpIHsKCSAgICAgICAgICAvLyBDb252ZXJ0IHRvIGxvd2VyY2FzZSwgYW5kIHJlbW92ZSBhbnkgd2hpdGVzcGFjZQoJICAgICAgICAgIC8vIHNvIHdlIGNhbiBtYXRjaCBiZWxvdy4KCSAgICAgICAgICBuYW1lID0gbWF0Y2hlc1swXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xzL2csICIiKTsKCSAgICAgICAgICAvLyBtdWx0aXBsZSBhdXRob3JzCgkgICAgICAgICAgdmFsdWVzW25hbWVdID0gY29udGVudC50cmltKCk7CgkgICAgICAgIH0KCSAgICAgIH0KCSAgICAgIGlmICghbWF0Y2hlcyAmJiBlbGVtZW50TmFtZSAmJiBuYW1lUGF0dGVybi50ZXN0KGVsZW1lbnROYW1lKSkgewoJICAgICAgICBuYW1lID0gZWxlbWVudE5hbWU7CgkgICAgICAgIGlmIChjb250ZW50KSB7CgkgICAgICAgICAgLy8gQ29udmVydCB0byBsb3dlcmNhc2UsIHJlbW92ZSBhbnkgd2hpdGVzcGFjZSwgYW5kIGNvbnZlcnQgZG90cwoJICAgICAgICAgIC8vIHRvIGNvbG9ucyBzbyB3ZSBjYW4gbWF0Y2ggYmVsb3cuCgkgICAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9ccy9nLCAiIikucmVwbGFjZSgvXC4vZywgIjoiKTsKCSAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSBjb250ZW50LnRyaW0oKTsKCSAgICAgICAgfQoJICAgICAgfQoJICAgIH0pOwoKCSAgICAvLyBnZXQgdGl0bGUKCSAgICBtZXRhZGF0YS50aXRsZSA9IGpzb25sZC50aXRsZSB8fAoJICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWyJkYzp0aXRsZSJdIHx8CgkgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbImRjdGVybTp0aXRsZSJdIHx8CgkgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbIm9nOnRpdGxlIl0gfHwKCSAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1sid2VpYm86YXJ0aWNsZTp0aXRsZSJdIHx8CgkgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbIndlaWJvOndlYnBhZ2U6dGl0bGUiXSB8fAoJICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWyJ0aXRsZSJdIHx8CgkgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbInR3aXR0ZXI6dGl0bGUiXTsKCgkgICAgaWYgKCFtZXRhZGF0YS50aXRsZSkgewoJICAgICAgbWV0YWRhdGEudGl0bGUgPSB0aGlzLl9nZXRBcnRpY2xlVGl0bGUoKTsKCSAgICB9CgoJICAgIC8vIGdldCBhdXRob3IKCSAgICBtZXRhZGF0YS5ieWxpbmUgPSBqc29ubGQuYnlsaW5lIHx8CgkgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWyJkYzpjcmVhdG9yIl0gfHwKCSAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbImRjdGVybTpjcmVhdG9yIl0gfHwKCSAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbImF1dGhvciJdOwoKCSAgICAvLyBnZXQgZGVzY3JpcHRpb24KCSAgICBtZXRhZGF0YS5leGNlcnB0ID0ganNvbmxkLmV4Y2VycHQgfHwKCSAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWyJkYzpkZXNjcmlwdGlvbiJdIHx8CgkgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1siZGN0ZXJtOmRlc2NyaXB0aW9uIl0gfHwKCSAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzWyJvZzpkZXNjcmlwdGlvbiJdIHx8CgkgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1sid2VpYm86YXJ0aWNsZTpkZXNjcmlwdGlvbiJdIHx8CgkgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1sid2VpYm86d2VicGFnZTpkZXNjcmlwdGlvbiJdIHx8CgkgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1siZGVzY3JpcHRpb24iXSB8fAoJICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbInR3aXR0ZXI6ZGVzY3JpcHRpb24iXTsKCgkgICAgLy8gZ2V0IHNpdGUgbmFtZQoJICAgIG1ldGFkYXRhLnNpdGVOYW1lID0ganNvbmxkLnNpdGVOYW1lIHx8CgkgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbIm9nOnNpdGVfbmFtZSJdOwoKCSAgICAvLyBpbiBtYW55IHNpdGVzIHRoZSBtZXRhIHZhbHVlIGlzIGVzY2FwZWQgd2l0aCBIVE1MIGVudGl0aWVzLAoJICAgIC8vIHNvIGhlcmUgd2UgbmVlZCB0byB1bmVzY2FwZSBpdAoJICAgIG1ldGFkYXRhLnRpdGxlID0gdGhpcy5fdW5lc2NhcGVIdG1sRW50aXRpZXMobWV0YWRhdGEudGl0bGUpOwoJICAgIG1ldGFkYXRhLmJ5bGluZSA9IHRoaXMuX3VuZXNjYXBlSHRtbEVudGl0aWVzKG1ldGFkYXRhLmJ5bGluZSk7CgkgICAgbWV0YWRhdGEuZXhjZXJwdCA9IHRoaXMuX3VuZXNjYXBlSHRtbEVudGl0aWVzKG1ldGFkYXRhLmV4Y2VycHQpOwoJICAgIG1ldGFkYXRhLnNpdGVOYW1lID0gdGhpcy5fdW5lc2NhcGVIdG1sRW50aXRpZXMobWV0YWRhdGEuc2l0ZU5hbWUpOwoKCSAgICByZXR1cm4gbWV0YWRhdGE7CgkgIH0sCgoJICAvKioKCSAgICogQ2hlY2sgaWYgbm9kZSBpcyBpbWFnZSwgb3IgaWYgbm9kZSBjb250YWlucyBleGFjdGx5IG9ubHkgb25lIGltYWdlCgkgICAqIHdoZXRoZXIgYXMgYSBkaXJlY3QgY2hpbGQgb3IgYXMgaXRzIGRlc2NlbmRhbnRzLgoJICAgKgoJICAgKiBAcGFyYW0gRWxlbWVudAoJICAqKi8KCSAgX2lzU2luZ2xlSW1hZ2U6IGZ1bmN0aW9uKG5vZGUpIHsKCSAgICBpZiAobm9kZS50YWdOYW1lID09PSAiSU1HIikgewoJICAgICAgcmV0dXJuIHRydWU7CgkgICAgfQoKCSAgICBpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGggIT09IDEgfHwgbm9kZS50ZXh0Q29udGVudC50cmltKCkgIT09ICIiKSB7CgkgICAgICByZXR1cm4gZmFsc2U7CgkgICAgfQoKCSAgICByZXR1cm4gdGhpcy5faXNTaW5nbGVJbWFnZShub2RlLmNoaWxkcmVuWzBdKTsKCSAgfSwKCgkgIC8qKgoJICAgKiBGaW5kIGFsbCA8bm9zY3JpcHQ+IHRoYXQgYXJlIGxvY2F0ZWQgYWZ0ZXIgPGltZz4gbm9kZXMsIGFuZCB3aGljaCBjb250YWluIG9ubHkgb25lCgkgICAqIDxpbWc+IGVsZW1lbnQuIFJlcGxhY2UgdGhlIGZpcnN0IGltYWdlIHdpdGggdGhlIGltYWdlIGZyb20gaW5zaWRlIHRoZSA8bm9zY3JpcHQ+IHRhZywKCSAgICogYW5kIHJlbW92ZSB0aGUgPG5vc2NyaXB0PiB0YWcuIFRoaXMgaW1wcm92ZXMgdGhlIHF1YWxpdHkgb2YgdGhlIGltYWdlcyB3ZSB1c2Ugb24KCSAgICogc29tZSBzaXRlcyAoZS5nLiBNZWRpdW0pLgoJICAgKgoJICAgKiBAcGFyYW0gRWxlbWVudAoJICAqKi8KCSAgX3Vud3JhcE5vc2NyaXB0SW1hZ2VzOiBmdW5jdGlvbihkb2MpIHsKCSAgICAvLyBGaW5kIGltZyB3aXRob3V0IHNvdXJjZSBvciBhdHRyaWJ1dGVzIHRoYXQgbWlnaHQgY29udGFpbnMgaW1hZ2UsIGFuZCByZW1vdmUgaXQuCgkgICAgLy8gVGhpcyBpcyBkb25lIHRvIHByZXZlbnQgYSBwbGFjZWhvbGRlciBpbWcgaXMgcmVwbGFjZWQgYnkgaW1nIGZyb20gbm9zY3JpcHQgaW4gbmV4dCBzdGVwLgoJICAgIHZhciBpbWdzID0gQXJyYXkuZnJvbShkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImltZyIpKTsKCSAgICB0aGlzLl9mb3JFYWNoTm9kZShpbWdzLCBmdW5jdGlvbihpbWcpIHsKCSAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1nLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgdmFyIGF0dHIgPSBpbWcuYXR0cmlidXRlc1tpXTsKCSAgICAgICAgc3dpdGNoIChhdHRyLm5hbWUpIHsKCSAgICAgICAgICBjYXNlICJzcmMiOgoJICAgICAgICAgIGNhc2UgInNyY3NldCI6CgkgICAgICAgICAgY2FzZSAiZGF0YS1zcmMiOgoJICAgICAgICAgIGNhc2UgImRhdGEtc3Jjc2V0IjoKCSAgICAgICAgICAgIHJldHVybjsKCSAgICAgICAgfQoKCSAgICAgICAgaWYgKC9cLihqcGd8anBlZ3xwbmd8d2VicCkvaS50ZXN0KGF0dHIudmFsdWUpKSB7CgkgICAgICAgICAgcmV0dXJuOwoJICAgICAgICB9CgkgICAgICB9CgoJICAgICAgaW1nLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1nKTsKCSAgICB9KTsKCgkgICAgLy8gTmV4dCBmaW5kIG5vc2NyaXB0IGFuZCB0cnkgdG8gZXh0cmFjdCBpdHMgaW1hZ2UKCSAgICB2YXIgbm9zY3JpcHRzID0gQXJyYXkuZnJvbShkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIm5vc2NyaXB0IikpOwoJICAgIHRoaXMuX2ZvckVhY2hOb2RlKG5vc2NyaXB0cywgZnVuY3Rpb24obm9zY3JpcHQpIHsKCSAgICAgIC8vIFBhcnNlIGNvbnRlbnQgb2Ygbm9zY3JpcHQgYW5kIG1ha2Ugc3VyZSBpdCBvbmx5IGNvbnRhaW5zIGltYWdlCgkgICAgICB2YXIgdG1wID0gZG9jLmNyZWF0ZUVsZW1lbnQoImRpdiIpOwoJICAgICAgdG1wLmlubmVySFRNTCA9IG5vc2NyaXB0LmlubmVySFRNTDsKCSAgICAgIGlmICghdGhpcy5faXNTaW5nbGVJbWFnZSh0bXApKSB7CgkgICAgICAgIHJldHVybjsKCSAgICAgIH0KCgkgICAgICAvLyBJZiBub3NjcmlwdCBoYXMgcHJldmlvdXMgc2libGluZyBhbmQgaXQgb25seSBjb250YWlucyBpbWFnZSwKCSAgICAgIC8vIHJlcGxhY2UgaXQgd2l0aCBub3NjcmlwdCBjb250ZW50LiBIb3dldmVyIHdlIGFsc28ga2VlcCBvbGQKCSAgICAgIC8vIGF0dHJpYnV0ZXMgdGhhdCBtaWdodCBjb250YWlucyBpbWFnZS4KCSAgICAgIHZhciBwcmV2RWxlbWVudCA9IG5vc2NyaXB0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7CgkgICAgICBpZiAocHJldkVsZW1lbnQgJiYgdGhpcy5faXNTaW5nbGVJbWFnZShwcmV2RWxlbWVudCkpIHsKCSAgICAgICAgdmFyIHByZXZJbWcgPSBwcmV2RWxlbWVudDsKCSAgICAgICAgaWYgKHByZXZJbWcudGFnTmFtZSAhPT0gIklNRyIpIHsKCSAgICAgICAgICBwcmV2SW1nID0gcHJldkVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImltZyIpWzBdOwoJICAgICAgICB9CgoJICAgICAgICB2YXIgbmV3SW1nID0gdG1wLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJpbWciKVswXTsKCSAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmV2SW1nLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHsKCSAgICAgICAgICB2YXIgYXR0ciA9IHByZXZJbWcuYXR0cmlidXRlc1tpXTsKCSAgICAgICAgICBpZiAoYXR0ci52YWx1ZSA9PT0gIiIpIHsKCSAgICAgICAgICAgIGNvbnRpbnVlOwoJICAgICAgICAgIH0KCgkgICAgICAgICAgaWYgKGF0dHIubmFtZSA9PT0gInNyYyIgfHwgYXR0ci5uYW1lID09PSAic3Jjc2V0IiB8fCAvXC4oanBnfGpwZWd8cG5nfHdlYnApL2kudGVzdChhdHRyLnZhbHVlKSkgewoJICAgICAgICAgICAgaWYgKG5ld0ltZy5nZXRBdHRyaWJ1dGUoYXR0ci5uYW1lKSA9PT0gYXR0ci52YWx1ZSkgewoJICAgICAgICAgICAgICBjb250aW51ZTsKCSAgICAgICAgICAgIH0KCgkgICAgICAgICAgICB2YXIgYXR0ck5hbWUgPSBhdHRyLm5hbWU7CgkgICAgICAgICAgICBpZiAobmV3SW1nLmhhc0F0dHJpYnV0ZShhdHRyTmFtZSkpIHsKCSAgICAgICAgICAgICAgYXR0ck5hbWUgPSAiZGF0YS1vbGQtIiArIGF0dHJOYW1lOwoJICAgICAgICAgICAgfQoKCSAgICAgICAgICAgIG5ld0ltZy5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHIudmFsdWUpOwoJICAgICAgICAgIH0KCSAgICAgICAgfQoKCSAgICAgICAgbm9zY3JpcHQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodG1wLmZpcnN0RWxlbWVudENoaWxkLCBwcmV2RWxlbWVudCk7CgkgICAgICB9CgkgICAgfSk7CgkgIH0sCgoJICAvKioKCSAgICogUmVtb3ZlcyBzY3JpcHQgdGFncyBmcm9tIHRoZSBkb2N1bWVudC4KCSAgICoKCSAgICogQHBhcmFtIEVsZW1lbnQKCSAgKiovCgkgIF9yZW1vdmVTY3JpcHRzOiBmdW5jdGlvbihkb2MpIHsKCSAgICB0aGlzLl9yZW1vdmVOb2Rlcyh0aGlzLl9nZXRBbGxOb2Rlc1dpdGhUYWcoZG9jLCBbInNjcmlwdCJdKSwgZnVuY3Rpb24oc2NyaXB0Tm9kZSkgewoJICAgICAgc2NyaXB0Tm9kZS5ub2RlVmFsdWUgPSAiIjsKCSAgICAgIHNjcmlwdE5vZGUucmVtb3ZlQXR0cmlidXRlKCJzcmMiKTsKCSAgICAgIHJldHVybiB0cnVlOwoJICAgIH0pOwoJICAgIHRoaXMuX3JlbW92ZU5vZGVzKHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhkb2MsIFsibm9zY3JpcHQiXSkpOwoJICB9LAoKCSAgLyoqCgkgICAqIENoZWNrIGlmIHRoaXMgbm9kZSBoYXMgb25seSB3aGl0ZXNwYWNlIGFuZCBhIHNpbmdsZSBlbGVtZW50IHdpdGggZ2l2ZW4gdGFnCgkgICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIERJViBub2RlIGNvbnRhaW5zIG5vbi1lbXB0eSB0ZXh0IG5vZGVzCgkgICAqIG9yIGlmIGl0IGNvbnRhaW5zIG5vIGVsZW1lbnQgd2l0aCBnaXZlbiB0YWcgb3IgbW9yZSB0aGFuIDEgZWxlbWVudC4KCSAgICoKCSAgICogQHBhcmFtIEVsZW1lbnQKCSAgICogQHBhcmFtIHN0cmluZyB0YWcgb2YgY2hpbGQgZWxlbWVudAoJICAqKi8KCSAgX2hhc1NpbmdsZVRhZ0luc2lkZUVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIHRhZykgewoJICAgIC8vIFRoZXJlIHNob3VsZCBiZSBleGFjdGx5IDEgZWxlbWVudCBjaGlsZCB3aXRoIGdpdmVuIHRhZwoJICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCAhPSAxIHx8IGVsZW1lbnQuY2hpbGRyZW5bMF0udGFnTmFtZSAhPT0gdGFnKSB7CgkgICAgICByZXR1cm4gZmFsc2U7CgkgICAgfQoKCSAgICAvLyBBbmQgdGhlcmUgc2hvdWxkIGJlIG5vIHRleHQgbm9kZXMgd2l0aCByZWFsIGNvbnRlbnQKCSAgICByZXR1cm4gIXRoaXMuX3NvbWVOb2RlKGVsZW1lbnQuY2hpbGROb2RlcywgZnVuY3Rpb24obm9kZSkgewoJICAgICAgcmV0dXJuIG5vZGUubm9kZVR5cGUgPT09IHRoaXMuVEVYVF9OT0RFICYmCgkgICAgICAgICAgICAgdGhpcy5SRUdFWFBTLmhhc0NvbnRlbnQudGVzdChub2RlLnRleHRDb250ZW50KTsKCSAgICB9KTsKCSAgfSwKCgkgIF9pc0VsZW1lbnRXaXRob3V0Q29udGVudDogZnVuY3Rpb24obm9kZSkgewoJICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSB0aGlzLkVMRU1FTlRfTk9ERSAmJgoJICAgICAgbm9kZS50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoID09IDAgJiYKCSAgICAgIChub2RlLmNoaWxkcmVuLmxlbmd0aCA9PSAwIHx8CgkgICAgICAgbm9kZS5jaGlsZHJlbi5sZW5ndGggPT0gbm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgiYnIiKS5sZW5ndGggKyBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJociIpLmxlbmd0aCk7CgkgIH0sCgoJICAvKioKCSAgICogRGV0ZXJtaW5lIHdoZXRoZXIgZWxlbWVudCBoYXMgYW55IGNoaWxkcmVuIGJsb2NrIGxldmVsIGVsZW1lbnRzLgoJICAgKgoJICAgKiBAcGFyYW0gRWxlbWVudAoJICAgKi8KCSAgX2hhc0NoaWxkQmxvY2tFbGVtZW50OiBmdW5jdGlvbiAoZWxlbWVudCkgewoJICAgIHJldHVybiB0aGlzLl9zb21lTm9kZShlbGVtZW50LmNoaWxkTm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHsKCSAgICAgIHJldHVybiB0aGlzLkRJVl9UT19QX0VMRU1TLmhhcyhub2RlLnRhZ05hbWUpIHx8CgkgICAgICAgICAgICAgdGhpcy5faGFzQ2hpbGRCbG9ja0VsZW1lbnQobm9kZSk7CgkgICAgfSk7CgkgIH0sCgoJICAvKioqCgkgICAqIERldGVybWluZSBpZiBhIG5vZGUgcXVhbGlmaWVzIGFzIHBocmFzaW5nIGNvbnRlbnQuCgkgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0hUTUwvQ29udGVudF9jYXRlZ29yaWVzI1BocmFzaW5nX2NvbnRlbnQKCSAgKiovCgkgIF9pc1BocmFzaW5nQ29udGVudDogZnVuY3Rpb24obm9kZSkgewoJICAgIHJldHVybiBub2RlLm5vZGVUeXBlID09PSB0aGlzLlRFWFRfTk9ERSB8fCB0aGlzLlBIUkFTSU5HX0VMRU1TLmluZGV4T2Yobm9kZS50YWdOYW1lKSAhPT0gLTEgfHwKCSAgICAgICgobm9kZS50YWdOYW1lID09PSAiQSIgfHwgbm9kZS50YWdOYW1lID09PSAiREVMIiB8fCBub2RlLnRhZ05hbWUgPT09ICJJTlMiKSAmJgoJICAgICAgICB0aGlzLl9ldmVyeU5vZGUobm9kZS5jaGlsZE5vZGVzLCB0aGlzLl9pc1BocmFzaW5nQ29udGVudCkpOwoJICB9LAoKCSAgX2lzV2hpdGVzcGFjZTogZnVuY3Rpb24obm9kZSkgewoJICAgIHJldHVybiAobm9kZS5ub2RlVHlwZSA9PT0gdGhpcy5URVhUX05PREUgJiYgbm9kZS50ZXh0Q29udGVudC50cmltKCkubGVuZ3RoID09PSAwKSB8fAoJICAgICAgICAgICAobm9kZS5ub2RlVHlwZSA9PT0gdGhpcy5FTEVNRU5UX05PREUgJiYgbm9kZS50YWdOYW1lID09PSAiQlIiKTsKCSAgfSwKCgkgIC8qKgoJICAgKiBHZXQgdGhlIGlubmVyIHRleHQgb2YgYSBub2RlIC0gY3Jvc3MgYnJvd3NlciBjb21wYXRpYmx5LgoJICAgKiBUaGlzIGFsc28gc3RyaXBzIG91dCBhbnkgZXhjZXNzIHdoaXRlc3BhY2UgdG8gYmUgZm91bmQuCgkgICAqCgkgICAqIEBwYXJhbSBFbGVtZW50CgkgICAqIEBwYXJhbSBCb29sZWFuIG5vcm1hbGl6ZVNwYWNlcyAoZGVmYXVsdDogdHJ1ZSkKCSAgICogQHJldHVybiBzdHJpbmcKCSAgKiovCgkgIF9nZXRJbm5lclRleHQ6IGZ1bmN0aW9uKGUsIG5vcm1hbGl6ZVNwYWNlcykgewoJICAgIG5vcm1hbGl6ZVNwYWNlcyA9ICh0eXBlb2Ygbm9ybWFsaXplU3BhY2VzID09PSAidW5kZWZpbmVkIikgPyB0cnVlIDogbm9ybWFsaXplU3BhY2VzOwoJICAgIHZhciB0ZXh0Q29udGVudCA9IGUudGV4dENvbnRlbnQudHJpbSgpOwoKCSAgICBpZiAobm9ybWFsaXplU3BhY2VzKSB7CgkgICAgICByZXR1cm4gdGV4dENvbnRlbnQucmVwbGFjZSh0aGlzLlJFR0VYUFMubm9ybWFsaXplLCAiICIpOwoJICAgIH0KCSAgICByZXR1cm4gdGV4dENvbnRlbnQ7CgkgIH0sCgoJICAvKioKCSAgICogR2V0IHRoZSBudW1iZXIgb2YgdGltZXMgYSBzdHJpbmcgcyBhcHBlYXJzIGluIHRoZSBub2RlIGUuCgkgICAqCgkgICAqIEBwYXJhbSBFbGVtZW50CgkgICAqIEBwYXJhbSBzdHJpbmcgLSB3aGF0IHRvIHNwbGl0IG9uLiBEZWZhdWx0IGlzICIsIgoJICAgKiBAcmV0dXJuIG51bWJlciAoaW50ZWdlcikKCSAgKiovCgkgIF9nZXRDaGFyQ291bnQ6IGZ1bmN0aW9uKGUsIHMpIHsKCSAgICBzID0gcyB8fCAiLCI7CgkgICAgcmV0dXJuIHRoaXMuX2dldElubmVyVGV4dChlKS5zcGxpdChzKS5sZW5ndGggLSAxOwoJICB9LAoKCSAgLyoqCgkgICAqIFJlbW92ZSB0aGUgc3R5bGUgYXR0cmlidXRlIG9uIGV2ZXJ5IGUgYW5kIHVuZGVyLgoJICAgKiBUT0RPOiBUZXN0IGlmIGdldEVsZW1lbnRzQnlUYWdOYW1lKCopIGlzIGZhc3Rlci4KCSAgICoKCSAgICogQHBhcmFtIEVsZW1lbnQKCSAgICogQHJldHVybiB2b2lkCgkgICoqLwoJICBfY2xlYW5TdHlsZXM6IGZ1bmN0aW9uKGUpIHsKCSAgICBpZiAoIWUgfHwgZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICJzdmciKQoJICAgICAgcmV0dXJuOwoKCSAgICAvLyBSZW1vdmUgYHN0eWxlYCBhbmQgZGVwcmVjYXRlZCBwcmVzZW50YXRpb25hbCBhdHRyaWJ1dGVzCgkgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLlBSRVNFTlRBVElPTkFMX0FUVFJJQlVURVMubGVuZ3RoOyBpKyspIHsKCSAgICAgIGUucmVtb3ZlQXR0cmlidXRlKHRoaXMuUFJFU0VOVEFUSU9OQUxfQVRUUklCVVRFU1tpXSk7CgkgICAgfQoKCSAgICBpZiAodGhpcy5ERVBSRUNBVEVEX1NJWkVfQVRUUklCVVRFX0VMRU1TLmluZGV4T2YoZS50YWdOYW1lKSAhPT0gLTEpIHsKCSAgICAgIGUucmVtb3ZlQXR0cmlidXRlKCJ3aWR0aCIpOwoJICAgICAgZS5yZW1vdmVBdHRyaWJ1dGUoImhlaWdodCIpOwoJICAgIH0KCgkgICAgdmFyIGN1ciA9IGUuZmlyc3RFbGVtZW50Q2hpbGQ7CgkgICAgd2hpbGUgKGN1ciAhPT0gbnVsbCkgewoJICAgICAgdGhpcy5fY2xlYW5TdHlsZXMoY3VyKTsKCSAgICAgIGN1ciA9IGN1ci5uZXh0RWxlbWVudFNpYmxpbmc7CgkgICAgfQoJICB9LAoKCSAgLyoqCgkgICAqIEdldCB0aGUgZGVuc2l0eSBvZiBsaW5rcyBhcyBhIHBlcmNlbnRhZ2Ugb2YgdGhlIGNvbnRlbnQKCSAgICogVGhpcyBpcyB0aGUgYW1vdW50IG9mIHRleHQgdGhhdCBpcyBpbnNpZGUgYSBsaW5rIGRpdmlkZWQgYnkgdGhlIHRvdGFsIHRleHQgaW4gdGhlIG5vZGUuCgkgICAqCgkgICAqIEBwYXJhbSBFbGVtZW50CgkgICAqIEByZXR1cm4gbnVtYmVyIChmbG9hdCkKCSAgKiovCgkgIF9nZXRMaW5rRGVuc2l0eTogZnVuY3Rpb24oZWxlbWVudCkgewoJICAgIHZhciB0ZXh0TGVuZ3RoID0gdGhpcy5fZ2V0SW5uZXJUZXh0KGVsZW1lbnQpLmxlbmd0aDsKCSAgICBpZiAodGV4dExlbmd0aCA9PT0gMCkKCSAgICAgIHJldHVybiAwOwoKCSAgICB2YXIgbGlua0xlbmd0aCA9IDA7CgoJICAgIC8vIFhYWCBpbXBsZW1lbnQgX3JlZHVjZU5vZGVMaXN0PwoJICAgIHRoaXMuX2ZvckVhY2hOb2RlKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImEiKSwgZnVuY3Rpb24obGlua05vZGUpIHsKCSAgICAgIHZhciBocmVmID0gbGlua05vZGUuZ2V0QXR0cmlidXRlKCJocmVmIik7CgkgICAgICB2YXIgY29lZmZpY2llbnQgPSBocmVmICYmIHRoaXMuUkVHRVhQUy5oYXNoVXJsLnRlc3QoaHJlZikgPyAwLjMgOiAxOwoJICAgICAgbGlua0xlbmd0aCArPSB0aGlzLl9nZXRJbm5lclRleHQobGlua05vZGUpLmxlbmd0aCAqIGNvZWZmaWNpZW50OwoJICAgIH0pOwoKCSAgICByZXR1cm4gbGlua0xlbmd0aCAvIHRleHRMZW5ndGg7CgkgIH0sCgoJICAvKioKCSAgICogR2V0IGFuIGVsZW1lbnRzIGNsYXNzL2lkIHdlaWdodC4gVXNlcyByZWd1bGFyIGV4cHJlc3Npb25zIHRvIHRlbGwgaWYgdGhpcwoJICAgKiBlbGVtZW50IGxvb2tzIGdvb2Qgb3IgYmFkLgoJICAgKgoJICAgKiBAcGFyYW0gRWxlbWVudAoJICAgKiBAcmV0dXJuIG51bWJlciAoSW50ZWdlcikKCSAgKiovCgkgIF9nZXRDbGFzc1dlaWdodDogZnVuY3Rpb24oZSkgewoJICAgIGlmICghdGhpcy5fZmxhZ0lzQWN0aXZlKHRoaXMuRkxBR19XRUlHSFRfQ0xBU1NFUykpCgkgICAgICByZXR1cm4gMDsKCgkgICAgdmFyIHdlaWdodCA9IDA7CgoJICAgIC8vIExvb2sgZm9yIGEgc3BlY2lhbCBjbGFzc25hbWUKCSAgICBpZiAodHlwZW9mKGUuY2xhc3NOYW1lKSA9PT0gInN0cmluZyIgJiYgZS5jbGFzc05hbWUgIT09ICIiKSB7CgkgICAgICBpZiAodGhpcy5SRUdFWFBTLm5lZ2F0aXZlLnRlc3QoZS5jbGFzc05hbWUpKQoJICAgICAgICB3ZWlnaHQgLT0gMjU7CgoJICAgICAgaWYgKHRoaXMuUkVHRVhQUy5wb3NpdGl2ZS50ZXN0KGUuY2xhc3NOYW1lKSkKCSAgICAgICAgd2VpZ2h0ICs9IDI1OwoJICAgIH0KCgkgICAgLy8gTG9vayBmb3IgYSBzcGVjaWFsIElECgkgICAgaWYgKHR5cGVvZihlLmlkKSA9PT0gInN0cmluZyIgJiYgZS5pZCAhPT0gIiIpIHsKCSAgICAgIGlmICh0aGlzLlJFR0VYUFMubmVnYXRpdmUudGVzdChlLmlkKSkKCSAgICAgICAgd2VpZ2h0IC09IDI1OwoKCSAgICAgIGlmICh0aGlzLlJFR0VYUFMucG9zaXRpdmUudGVzdChlLmlkKSkKCSAgICAgICAgd2VpZ2h0ICs9IDI1OwoJICAgIH0KCgkgICAgcmV0dXJuIHdlaWdodDsKCSAgfSwKCgkgIC8qKgoJICAgKiBDbGVhbiBhIG5vZGUgb2YgYWxsIGVsZW1lbnRzIG9mIHR5cGUgInRhZyIuCgkgICAqIChVbmxlc3MgaXQncyBhIHlvdXR1YmUvdmltZW8gdmlkZW8uIFBlb3BsZSBsb3ZlIG1vdmllcy4pCgkgICAqCgkgICAqIEBwYXJhbSBFbGVtZW50CgkgICAqIEBwYXJhbSBzdHJpbmcgdGFnIHRvIGNsZWFuCgkgICAqIEByZXR1cm4gdm9pZAoJICAgKiovCgkgIF9jbGVhbjogZnVuY3Rpb24oZSwgdGFnKSB7CgkgICAgdmFyIGlzRW1iZWQgPSBbIm9iamVjdCIsICJlbWJlZCIsICJpZnJhbWUiXS5pbmRleE9mKHRhZykgIT09IC0xOwoKCSAgICB0aGlzLl9yZW1vdmVOb2Rlcyh0aGlzLl9nZXRBbGxOb2Rlc1dpdGhUYWcoZSwgW3RhZ10pLCBmdW5jdGlvbihlbGVtZW50KSB7CgkgICAgICAvLyBBbGxvdyB5b3V0dWJlIGFuZCB2aW1lbyB2aWRlb3MgdGhyb3VnaCBhcyBwZW9wbGUgdXN1YWxseSB3YW50IHRvIHNlZSB0aG9zZS4KCSAgICAgIGlmIChpc0VtYmVkKSB7CgkgICAgICAgIC8vIEZpcnN0LCBjaGVjayB0aGUgZWxlbWVudHMgYXR0cmlidXRlcyB0byBzZWUgaWYgYW55IG9mIHRoZW0gY29udGFpbiB5b3V0dWJlIG9yIHZpbWVvCgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7CgkgICAgICAgICAgaWYgKHRoaXMuUkVHRVhQUy52aWRlb3MudGVzdChlbGVtZW50LmF0dHJpYnV0ZXNbaV0udmFsdWUpKSB7CgkgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgICAgfQoJICAgICAgICB9CgoJICAgICAgICAvLyBGb3IgZW1iZWQgd2l0aCA8b2JqZWN0PiB0YWcsIGNoZWNrIGlubmVyIEhUTUwgYXMgd2VsbC4KCSAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gIm9iamVjdCIgJiYgdGhpcy5SRUdFWFBTLnZpZGVvcy50ZXN0KGVsZW1lbnQuaW5uZXJIVE1MKSkgewoJICAgICAgICAgIHJldHVybiBmYWxzZTsKCSAgICAgICAgfQoJICAgICAgfQoKCSAgICAgIHJldHVybiB0cnVlOwoJICAgIH0pOwoJICB9LAoKCSAgLyoqCgkgICAqIENoZWNrIGlmIGEgZ2l2ZW4gbm9kZSBoYXMgb25lIG9mIGl0cyBhbmNlc3RvciB0YWcgbmFtZSBtYXRjaGluZyB0aGUKCSAgICogcHJvdmlkZWQgb25lLgoJICAgKiBAcGFyYW0gIEhUTUxFbGVtZW50IG5vZGUKCSAgICogQHBhcmFtICBTdHJpbmcgICAgICB0YWdOYW1lCgkgICAqIEBwYXJhbSAgTnVtYmVyICAgICAgbWF4RGVwdGgKCSAgICogQHBhcmFtICBGdW5jdGlvbiAgICBmaWx0ZXJGbiBhIGZpbHRlciB0byBpbnZva2UgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBub2RlICdjb3VudHMnCgkgICAqIEByZXR1cm4gQm9vbGVhbgoJICAgKi8KCSAgX2hhc0FuY2VzdG9yVGFnOiBmdW5jdGlvbihub2RlLCB0YWdOYW1lLCBtYXhEZXB0aCwgZmlsdGVyRm4pIHsKCSAgICBtYXhEZXB0aCA9IG1heERlcHRoIHx8IDM7CgkgICAgdGFnTmFtZSA9IHRhZ05hbWUudG9VcHBlckNhc2UoKTsKCSAgICB2YXIgZGVwdGggPSAwOwoJICAgIHdoaWxlIChub2RlLnBhcmVudE5vZGUpIHsKCSAgICAgIGlmIChtYXhEZXB0aCA+IDAgJiYgZGVwdGggPiBtYXhEZXB0aCkKCSAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZS50YWdOYW1lID09PSB0YWdOYW1lICYmICghZmlsdGVyRm4gfHwgZmlsdGVyRm4obm9kZS5wYXJlbnROb2RlKSkpCgkgICAgICAgIHJldHVybiB0cnVlOwoJICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTsKCSAgICAgIGRlcHRoKys7CgkgICAgfQoJICAgIHJldHVybiBmYWxzZTsKCSAgfSwKCgkgIC8qKgoJICAgKiBSZXR1cm4gYW4gb2JqZWN0IGluZGljYXRpbmcgaG93IG1hbnkgcm93cyBhbmQgY29sdW1ucyB0aGlzIHRhYmxlIGhhcy4KCSAgICovCgkgIF9nZXRSb3dBbmRDb2x1bW5Db3VudDogZnVuY3Rpb24odGFibGUpIHsKCSAgICB2YXIgcm93cyA9IDA7CgkgICAgdmFyIGNvbHVtbnMgPSAwOwoJICAgIHZhciB0cnMgPSB0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgidHIiKTsKCSAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRycy5sZW5ndGg7IGkrKykgewoJICAgICAgdmFyIHJvd3NwYW4gPSB0cnNbaV0uZ2V0QXR0cmlidXRlKCJyb3dzcGFuIikgfHwgMDsKCSAgICAgIGlmIChyb3dzcGFuKSB7CgkgICAgICAgIHJvd3NwYW4gPSBwYXJzZUludChyb3dzcGFuLCAxMCk7CgkgICAgICB9CgkgICAgICByb3dzICs9IChyb3dzcGFuIHx8IDEpOwoKCSAgICAgIC8vIE5vdyBsb29rIGZvciBjb2x1bW4tcmVsYXRlZCBpbmZvCgkgICAgICB2YXIgY29sdW1uc0luVGhpc1JvdyA9IDA7CgkgICAgICB2YXIgY2VsbHMgPSB0cnNbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoInRkIik7CgkgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNlbGxzLmxlbmd0aDsgaisrKSB7CgkgICAgICAgIHZhciBjb2xzcGFuID0gY2VsbHNbal0uZ2V0QXR0cmlidXRlKCJjb2xzcGFuIikgfHwgMDsKCSAgICAgICAgaWYgKGNvbHNwYW4pIHsKCSAgICAgICAgICBjb2xzcGFuID0gcGFyc2VJbnQoY29sc3BhbiwgMTApOwoJICAgICAgICB9CgkgICAgICAgIGNvbHVtbnNJblRoaXNSb3cgKz0gKGNvbHNwYW4gfHwgMSk7CgkgICAgICB9CgkgICAgICBjb2x1bW5zID0gTWF0aC5tYXgoY29sdW1ucywgY29sdW1uc0luVGhpc1Jvdyk7CgkgICAgfQoJICAgIHJldHVybiB7cm93czogcm93cywgY29sdW1uczogY29sdW1uc307CgkgIH0sCgoJICAvKioKCSAgICogTG9vayBmb3IgJ2RhdGEnIChhcyBvcHBvc2VkIHRvICdsYXlvdXQnKSB0YWJsZXMsIGZvciB3aGljaCB3ZSB1c2UKCSAgICogc2ltaWxhciBjaGVja3MgYXMKCSAgICogaHR0cHM6Ly9zZWFyY2hmb3gub3JnL21vemlsbGEtY2VudHJhbC9yZXYvZjgyZDVjNTQ5ZjA0NmNiNjRjZTU2MDJiZmQ4OTRiN2FlODA3YzhmOC9hY2Nlc3NpYmxlL2dlbmVyaWMvVGFibGVBY2Nlc3NpYmxlLmNwcCMxOQoJICAgKi8KCSAgX21hcmtEYXRhVGFibGVzOiBmdW5jdGlvbihyb290KSB7CgkgICAgdmFyIHRhYmxlcyA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoInRhYmxlIik7CgkgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZXMubGVuZ3RoOyBpKyspIHsKCSAgICAgIHZhciB0YWJsZSA9IHRhYmxlc1tpXTsKCSAgICAgIHZhciByb2xlID0gdGFibGUuZ2V0QXR0cmlidXRlKCJyb2xlIik7CgkgICAgICBpZiAocm9sZSA9PSAicHJlc2VudGF0aW9uIikgewoJICAgICAgICB0YWJsZS5fcmVhZGFiaWxpdHlEYXRhVGFibGUgPSBmYWxzZTsKCSAgICAgICAgY29udGludWU7CgkgICAgICB9CgkgICAgICB2YXIgZGF0YXRhYmxlID0gdGFibGUuZ2V0QXR0cmlidXRlKCJkYXRhdGFibGUiKTsKCSAgICAgIGlmIChkYXRhdGFibGUgPT0gIjAiKSB7CgkgICAgICAgIHRhYmxlLl9yZWFkYWJpbGl0eURhdGFUYWJsZSA9IGZhbHNlOwoJICAgICAgICBjb250aW51ZTsKCSAgICAgIH0KCSAgICAgIHZhciBzdW1tYXJ5ID0gdGFibGUuZ2V0QXR0cmlidXRlKCJzdW1tYXJ5Iik7CgkgICAgICBpZiAoc3VtbWFyeSkgewoJICAgICAgICB0YWJsZS5fcmVhZGFiaWxpdHlEYXRhVGFibGUgPSB0cnVlOwoJICAgICAgICBjb250aW51ZTsKCSAgICAgIH0KCgkgICAgICB2YXIgY2FwdGlvbiA9IHRhYmxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJjYXB0aW9uIilbMF07CgkgICAgICBpZiAoY2FwdGlvbiAmJiBjYXB0aW9uLmNoaWxkTm9kZXMubGVuZ3RoID4gMCkgewoJICAgICAgICB0YWJsZS5fcmVhZGFiaWxpdHlEYXRhVGFibGUgPSB0cnVlOwoJICAgICAgICBjb250aW51ZTsKCSAgICAgIH0KCgkgICAgICAvLyBJZiB0aGUgdGFibGUgaGFzIGEgZGVzY2VuZGFudCB3aXRoIGFueSBvZiB0aGVzZSB0YWdzLCBjb25zaWRlciBhIGRhdGEgdGFibGU6CgkgICAgICB2YXIgZGF0YVRhYmxlRGVzY2VuZGFudHMgPSBbImNvbCIsICJjb2xncm91cCIsICJ0Zm9vdCIsICJ0aGVhZCIsICJ0aCJdOwoJICAgICAgdmFyIGRlc2NlbmRhbnRFeGlzdHMgPSBmdW5jdGlvbih0YWcpIHsKCSAgICAgICAgcmV0dXJuICEhdGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKVswXTsKCSAgICAgIH07CgkgICAgICBpZiAoZGF0YVRhYmxlRGVzY2VuZGFudHMuc29tZShkZXNjZW5kYW50RXhpc3RzKSkgewoJICAgICAgICB0aGlzLmxvZygiRGF0YSB0YWJsZSBiZWNhdXNlIGZvdW5kIGRhdGEteSBkZXNjZW5kYW50Iik7CgkgICAgICAgIHRhYmxlLl9yZWFkYWJpbGl0eURhdGFUYWJsZSA9IHRydWU7CgkgICAgICAgIGNvbnRpbnVlOwoJICAgICAgfQoKCSAgICAgIC8vIE5lc3RlZCB0YWJsZXMgaW5kaWNhdGUgYSBsYXlvdXQgdGFibGU6CgkgICAgICBpZiAodGFibGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoInRhYmxlIilbMF0pIHsKCSAgICAgICAgdGFibGUuX3JlYWRhYmlsaXR5RGF0YVRhYmxlID0gZmFsc2U7CgkgICAgICAgIGNvbnRpbnVlOwoJICAgICAgfQoKCSAgICAgIHZhciBzaXplSW5mbyA9IHRoaXMuX2dldFJvd0FuZENvbHVtbkNvdW50KHRhYmxlKTsKCSAgICAgIGlmIChzaXplSW5mby5yb3dzID49IDEwIHx8IHNpemVJbmZvLmNvbHVtbnMgPiA0KSB7CgkgICAgICAgIHRhYmxlLl9yZWFkYWJpbGl0eURhdGFUYWJsZSA9IHRydWU7CgkgICAgICAgIGNvbnRpbnVlOwoJICAgICAgfQoJICAgICAgLy8gTm93IGp1c3QgZ28gYnkgc2l6ZSBlbnRpcmVseToKCSAgICAgIHRhYmxlLl9yZWFkYWJpbGl0eURhdGFUYWJsZSA9IHNpemVJbmZvLnJvd3MgKiBzaXplSW5mby5jb2x1bW5zID4gMTA7CgkgICAgfQoJICB9LAoKCSAgLyogY29udmVydCBpbWFnZXMgYW5kIGZpZ3VyZXMgdGhhdCBoYXZlIHByb3BlcnRpZXMgbGlrZSBkYXRhLXNyYyBpbnRvIGltYWdlcyB0aGF0IGNhbiBiZSBsb2FkZWQgd2l0aG91dCBKUyAqLwoJICBfZml4TGF6eUltYWdlczogZnVuY3Rpb24gKHJvb3QpIHsKCSAgICB0aGlzLl9mb3JFYWNoTm9kZSh0aGlzLl9nZXRBbGxOb2Rlc1dpdGhUYWcocm9vdCwgWyJpbWciLCAicGljdHVyZSIsICJmaWd1cmUiXSksIGZ1bmN0aW9uIChlbGVtKSB7CgkgICAgICAvLyBJbiBzb21lIHNpdGVzIChlLmcuIEtvdGFrdSksIHRoZXkgcHV0IDFweCBzcXVhcmUgaW1hZ2UgYXMgYmFzZTY0IGRhdGEgdXJpIGluIHRoZSBzcmMgYXR0cmlidXRlLgoJICAgICAgLy8gU28sIGhlcmUgd2UgY2hlY2sgaWYgdGhlIGRhdGEgdXJpIGlzIHRvbyBzaG9ydCwganVzdCBtaWdodCBhcyB3ZWxsIHJlbW92ZSBpdC4KCSAgICAgIGlmIChlbGVtLnNyYyAmJiB0aGlzLlJFR0VYUFMuYjY0RGF0YVVybC50ZXN0KGVsZW0uc3JjKSkgewoJICAgICAgICAvLyBNYWtlIHN1cmUgaXQncyBub3QgU1ZHLCBiZWNhdXNlIFNWRyBjYW4gaGF2ZSBhIG1lYW5pbmdmdWwgaW1hZ2UgaW4gdW5kZXIgMTMzIGJ5dGVzLgoJICAgICAgICB2YXIgcGFydHMgPSB0aGlzLlJFR0VYUFMuYjY0RGF0YVVybC5leGVjKGVsZW0uc3JjKTsKCSAgICAgICAgaWYgKHBhcnRzWzFdID09PSAiaW1hZ2Uvc3ZnK3htbCIpIHsKCSAgICAgICAgICByZXR1cm47CgkgICAgICAgIH0KCgkgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGlzIGVsZW1lbnQgaGFzIG90aGVyIGF0dHJpYnV0ZXMgd2hpY2ggY29udGFpbnMgaW1hZ2UuCgkgICAgICAgIC8vIElmIGl0IGRvZXNuJ3QsIHRoZW4gdGhpcyBzcmMgaXMgaW1wb3J0YW50IGFuZCBzaG91bGRuJ3QgYmUgcmVtb3ZlZC4KCSAgICAgICAgdmFyIHNyY0NvdWxkQmVSZW1vdmVkID0gZmFsc2U7CgkgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7CgkgICAgICAgICAgdmFyIGF0dHIgPSBlbGVtLmF0dHJpYnV0ZXNbaV07CgkgICAgICAgICAgaWYgKGF0dHIubmFtZSA9PT0gInNyYyIpIHsKCSAgICAgICAgICAgIGNvbnRpbnVlOwoJICAgICAgICAgIH0KCgkgICAgICAgICAgaWYgKC9cLihqcGd8anBlZ3xwbmd8d2VicCkvaS50ZXN0KGF0dHIudmFsdWUpKSB7CgkgICAgICAgICAgICBzcmNDb3VsZEJlUmVtb3ZlZCA9IHRydWU7CgkgICAgICAgICAgICBicmVhazsKCSAgICAgICAgICB9CgkgICAgICAgIH0KCgkgICAgICAgIC8vIEhlcmUgd2UgYXNzdW1lIGlmIGltYWdlIGlzIGxlc3MgdGhhbiAxMDAgYnl0ZXMgKG9yIDEzM0IgYWZ0ZXIgZW5jb2RlZCB0byBiYXNlNjQpCgkgICAgICAgIC8vIGl0IHdpbGwgYmUgdG9vIHNtYWxsLCB0aGVyZWZvcmUgaXQgbWlnaHQgYmUgcGxhY2Vob2xkZXIgaW1hZ2UuCgkgICAgICAgIGlmIChzcmNDb3VsZEJlUmVtb3ZlZCkgewoJICAgICAgICAgIHZhciBiNjRzdGFydHMgPSBlbGVtLnNyYy5zZWFyY2goL2Jhc2U2NFxzKi9pKSArIDc7CgkgICAgICAgICAgdmFyIGI2NGxlbmd0aCA9IGVsZW0uc3JjLmxlbmd0aCAtIGI2NHN0YXJ0czsKCSAgICAgICAgICBpZiAoYjY0bGVuZ3RoIDwgMTMzKSB7CgkgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgic3JjIik7CgkgICAgICAgICAgfQoJICAgICAgICB9CgkgICAgICB9CgoJICAgICAgLy8gYWxzbyBjaGVjayBmb3IgIm51bGwiIHRvIHdvcmsgYXJvdW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9qc2RvbS9qc2RvbS9pc3N1ZXMvMjU4MAoJICAgICAgaWYgKChlbGVtLnNyYyB8fCAoZWxlbS5zcmNzZXQgJiYgZWxlbS5zcmNzZXQgIT0gIm51bGwiKSkgJiYgZWxlbS5jbGFzc05hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCJsYXp5IikgPT09IC0xKSB7CgkgICAgICAgIHJldHVybjsKCSAgICAgIH0KCgkgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGVsZW0uYXR0cmlidXRlcy5sZW5ndGg7IGorKykgewoJICAgICAgICBhdHRyID0gZWxlbS5hdHRyaWJ1dGVzW2pdOwoJICAgICAgICBpZiAoYXR0ci5uYW1lID09PSAic3JjIiB8fCBhdHRyLm5hbWUgPT09ICJzcmNzZXQiKSB7CgkgICAgICAgICAgY29udGludWU7CgkgICAgICAgIH0KCSAgICAgICAgdmFyIGNvcHlUbyA9IG51bGw7CgkgICAgICAgIGlmICgvXC4oanBnfGpwZWd8cG5nfHdlYnApXHMrXGQvLnRlc3QoYXR0ci52YWx1ZSkpIHsKCSAgICAgICAgICBjb3B5VG8gPSAic3Jjc2V0IjsKCSAgICAgICAgfSBlbHNlIGlmICgvXlxzKlxTK1wuKGpwZ3xqcGVnfHBuZ3x3ZWJwKVxTKlxzKiQvLnRlc3QoYXR0ci52YWx1ZSkpIHsKCSAgICAgICAgICBjb3B5VG8gPSAic3JjIjsKCSAgICAgICAgfQoJICAgICAgICBpZiAoY29weVRvKSB7CgkgICAgICAgICAgLy9pZiB0aGlzIGlzIGFuIGltZyBvciBwaWN0dXJlLCBzZXQgdGhlIGF0dHJpYnV0ZSBkaXJlY3RseQoJICAgICAgICAgIGlmIChlbGVtLnRhZ05hbWUgPT09ICJJTUciIHx8IGVsZW0udGFnTmFtZSA9PT0gIlBJQ1RVUkUiKSB7CgkgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShjb3B5VG8sIGF0dHIudmFsdWUpOwoJICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbS50YWdOYW1lID09PSAiRklHVVJFIiAmJiAhdGhpcy5fZ2V0QWxsTm9kZXNXaXRoVGFnKGVsZW0sIFsiaW1nIiwgInBpY3R1cmUiXSkubGVuZ3RoKSB7CgkgICAgICAgICAgICAvL2lmIHRoZSBpdGVtIGlzIGEgPGZpZ3VyZT4gdGhhdCBkb2VzIG5vdCBjb250YWluIGFuIGltYWdlIG9yIHBpY3R1cmUsIGNyZWF0ZSBvbmUgYW5kIHBsYWNlIGl0IGluc2lkZSB0aGUgZmlndXJlCgkgICAgICAgICAgICAvL3NlZSB0aGUgbnl0aW1lcy0zIHRlc3RjYXNlIGZvciBhbiBleGFtcGxlCgkgICAgICAgICAgICB2YXIgaW1nID0gdGhpcy5fZG9jLmNyZWF0ZUVsZW1lbnQoImltZyIpOwoJICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShjb3B5VG8sIGF0dHIudmFsdWUpOwoJICAgICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChpbWcpOwoJICAgICAgICAgIH0KCSAgICAgICAgfQoJICAgICAgfQoJICAgIH0pOwoJICB9LAoKCSAgX2dldFRleHREZW5zaXR5OiBmdW5jdGlvbihlLCB0YWdzKSB7CgkgICAgdmFyIHRleHRMZW5ndGggPSB0aGlzLl9nZXRJbm5lclRleHQoZSwgdHJ1ZSkubGVuZ3RoOwoJICAgIGlmICh0ZXh0TGVuZ3RoID09PSAwKSB7CgkgICAgICByZXR1cm4gMDsKCSAgICB9CgkgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gMDsKCSAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLl9nZXRBbGxOb2Rlc1dpdGhUYWcoZSwgdGFncyk7CgkgICAgdGhpcy5fZm9yRWFjaE5vZGUoY2hpbGRyZW4sIChjaGlsZCkgPT4gY2hpbGRyZW5MZW5ndGggKz0gdGhpcy5fZ2V0SW5uZXJUZXh0KGNoaWxkLCB0cnVlKS5sZW5ndGgpOwoJICAgIHJldHVybiBjaGlsZHJlbkxlbmd0aCAvIHRleHRMZW5ndGg7CgkgIH0sCgoJICAvKioKCSAgICogQ2xlYW4gYW4gZWxlbWVudCBvZiBhbGwgdGFncyBvZiB0eXBlICJ0YWciIGlmIHRoZXkgbG9vayBmaXNoeS4KCSAgICogIkZpc2h5IiBpcyBhbiBhbGdvcml0aG0gYmFzZWQgb24gY29udGVudCBsZW5ndGgsIGNsYXNzbmFtZXMsIGxpbmsgZGVuc2l0eSwgbnVtYmVyIG9mIGltYWdlcyAmIGVtYmVkcywgZXRjLgoJICAgKgoJICAgKiBAcmV0dXJuIHZvaWQKCSAgICoqLwoJICBfY2xlYW5Db25kaXRpb25hbGx5OiBmdW5jdGlvbihlLCB0YWcpIHsKCSAgICBpZiAoIXRoaXMuX2ZsYWdJc0FjdGl2ZSh0aGlzLkZMQUdfQ0xFQU5fQ09ORElUSU9OQUxMWSkpCgkgICAgICByZXR1cm47CgoJICAgIC8vIEdhdGhlciBjb3VudHMgZm9yIG90aGVyIHR5cGljYWwgZWxlbWVudHMgZW1iZWRkZWQgd2l0aGluLgoJICAgIC8vIFRyYXZlcnNlIGJhY2t3YXJkcyBzbyB3ZSBjYW4gcmVtb3ZlIG5vZGVzIGF0IHRoZSBzYW1lIHRpbWUKCSAgICAvLyB3aXRob3V0IGVmZmVjdGluZyB0aGUgdHJhdmVyc2FsLgoJICAgIC8vCgkgICAgLy8gVE9ETzogQ29uc2lkZXIgdGFraW5nIGludG8gYWNjb3VudCBvcmlnaW5hbCBjb250ZW50U2NvcmUgaGVyZS4KCSAgICB0aGlzLl9yZW1vdmVOb2Rlcyh0aGlzLl9nZXRBbGxOb2Rlc1dpdGhUYWcoZSwgW3RhZ10pLCBmdW5jdGlvbihub2RlKSB7CgkgICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGlzIG5vZGUgSVMgZGF0YSB0YWJsZSwgaW4gd2hpY2ggY2FzZSBkb24ndCByZW1vdmUgaXQuCgkgICAgICB2YXIgaXNEYXRhVGFibGUgPSBmdW5jdGlvbih0KSB7CgkgICAgICAgIHJldHVybiB0Ll9yZWFkYWJpbGl0eURhdGFUYWJsZTsKCSAgICAgIH07CgoJICAgICAgdmFyIGlzTGlzdCA9IHRhZyA9PT0gInVsIiB8fCB0YWcgPT09ICJvbCI7CgkgICAgICBpZiAoIWlzTGlzdCkgewoJICAgICAgICB2YXIgbGlzdExlbmd0aCA9IDA7CgkgICAgICAgIHZhciBsaXN0Tm9kZXMgPSB0aGlzLl9nZXRBbGxOb2Rlc1dpdGhUYWcobm9kZSwgWyJ1bCIsICJvbCJdKTsKCSAgICAgICAgdGhpcy5fZm9yRWFjaE5vZGUobGlzdE5vZGVzLCAobGlzdCkgPT4gbGlzdExlbmd0aCArPSB0aGlzLl9nZXRJbm5lclRleHQobGlzdCkubGVuZ3RoKTsKCSAgICAgICAgaXNMaXN0ID0gbGlzdExlbmd0aCAvIHRoaXMuX2dldElubmVyVGV4dChub2RlKS5sZW5ndGggPiAwLjk7CgkgICAgICB9CgoJICAgICAgaWYgKHRhZyA9PT0gInRhYmxlIiAmJiBpc0RhdGFUYWJsZShub2RlKSkgewoJICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICB9CgoJICAgICAgLy8gTmV4dCBjaGVjayBpZiB3ZSdyZSBpbnNpZGUgYSBkYXRhIHRhYmxlLCBpbiB3aGljaCBjYXNlIGRvbid0IHJlbW92ZSBpdCBhcyB3ZWxsLgoJICAgICAgaWYgKHRoaXMuX2hhc0FuY2VzdG9yVGFnKG5vZGUsICJ0YWJsZSIsIC0xLCBpc0RhdGFUYWJsZSkpIHsKCSAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgfQoKCSAgICAgIGlmICh0aGlzLl9oYXNBbmNlc3RvclRhZyhub2RlLCAiY29kZSIpKSB7CgkgICAgICAgIHJldHVybiBmYWxzZTsKCSAgICAgIH0KCgkgICAgICB2YXIgd2VpZ2h0ID0gdGhpcy5fZ2V0Q2xhc3NXZWlnaHQobm9kZSk7CgoJICAgICAgdGhpcy5sb2coIkNsZWFuaW5nIENvbmRpdGlvbmFsbHkiLCBub2RlKTsKCgkgICAgICB2YXIgY29udGVudFNjb3JlID0gMDsKCgkgICAgICBpZiAod2VpZ2h0ICsgY29udGVudFNjb3JlIDwgMCkgewoJICAgICAgICByZXR1cm4gdHJ1ZTsKCSAgICAgIH0KCgkgICAgICBpZiAodGhpcy5fZ2V0Q2hhckNvdW50KG5vZGUsICIsIikgPCAxMCkgewoJICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm90IHZlcnkgbWFueSBjb21tYXMsIGFuZCB0aGUgbnVtYmVyIG9mCgkgICAgICAgIC8vIG5vbi1wYXJhZ3JhcGggZWxlbWVudHMgaXMgbW9yZSB0aGFuIHBhcmFncmFwaHMgb3Igb3RoZXIKCSAgICAgICAgLy8gb21pbm91cyBzaWducywgcmVtb3ZlIHRoZSBlbGVtZW50LgoJICAgICAgICB2YXIgcCA9IG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoInAiKS5sZW5ndGg7CgkgICAgICAgIHZhciBpbWcgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJpbWciKS5sZW5ndGg7CgkgICAgICAgIHZhciBsaSA9IG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoImxpIikubGVuZ3RoIC0gMTAwOwoJICAgICAgICB2YXIgaW5wdXQgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCJpbnB1dCIpLmxlbmd0aDsKCSAgICAgICAgdmFyIGhlYWRpbmdEZW5zaXR5ID0gdGhpcy5fZ2V0VGV4dERlbnNpdHkobm9kZSwgWyJoMSIsICJoMiIsICJoMyIsICJoNCIsICJoNSIsICJoNiJdKTsKCgkgICAgICAgIHZhciBlbWJlZENvdW50ID0gMDsKCSAgICAgICAgdmFyIGVtYmVkcyA9IHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhub2RlLCBbIm9iamVjdCIsICJlbWJlZCIsICJpZnJhbWUiXSk7CgoJICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVtYmVkcy5sZW5ndGg7IGkrKykgewoJICAgICAgICAgIC8vIElmIHRoaXMgZW1iZWQgaGFzIGF0dHJpYnV0ZSB0aGF0IG1hdGNoZXMgdmlkZW8gcmVnZXgsIGRvbid0IGRlbGV0ZSBpdC4KCSAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGVtYmVkc1tpXS5hdHRyaWJ1dGVzLmxlbmd0aDsgaisrKSB7CgkgICAgICAgICAgICBpZiAodGhpcy5SRUdFWFBTLnZpZGVvcy50ZXN0KGVtYmVkc1tpXS5hdHRyaWJ1dGVzW2pdLnZhbHVlKSkgewoJICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7CgkgICAgICAgICAgICB9CgkgICAgICAgICAgfQoKCSAgICAgICAgICAvLyBGb3IgZW1iZWQgd2l0aCA8b2JqZWN0PiB0YWcsIGNoZWNrIGlubmVyIEhUTUwgYXMgd2VsbC4KCSAgICAgICAgICBpZiAoZW1iZWRzW2ldLnRhZ05hbWUgPT09ICJvYmplY3QiICYmIHRoaXMuUkVHRVhQUy52aWRlb3MudGVzdChlbWJlZHNbaV0uaW5uZXJIVE1MKSkgewoJICAgICAgICAgICAgcmV0dXJuIGZhbHNlOwoJICAgICAgICAgIH0KCgkgICAgICAgICAgZW1iZWRDb3VudCsrOwoJICAgICAgICB9CgoJICAgICAgICB2YXIgbGlua0RlbnNpdHkgPSB0aGlzLl9nZXRMaW5rRGVuc2l0eShub2RlKTsKCSAgICAgICAgdmFyIGNvbnRlbnRMZW5ndGggPSB0aGlzLl9nZXRJbm5lclRleHQobm9kZSkubGVuZ3RoOwoKCSAgICAgICAgdmFyIGhhdmVUb1JlbW92ZSA9CgkgICAgICAgICAgKGltZyA+IDEgJiYgcCAvIGltZyA8IDAuNSAmJiAhdGhpcy5faGFzQW5jZXN0b3JUYWcobm9kZSwgImZpZ3VyZSIpKSB8fAoJICAgICAgICAgICghaXNMaXN0ICYmIGxpID4gcCkgfHwKCSAgICAgICAgICAoaW5wdXQgPiBNYXRoLmZsb29yKHAvMykpIHx8CgkgICAgICAgICAgKCFpc0xpc3QgJiYgaGVhZGluZ0RlbnNpdHkgPCAwLjkgJiYgY29udGVudExlbmd0aCA8IDI1ICYmIChpbWcgPT09IDAgfHwgaW1nID4gMikgJiYgIXRoaXMuX2hhc0FuY2VzdG9yVGFnKG5vZGUsICJmaWd1cmUiKSkgfHwKCSAgICAgICAgICAoIWlzTGlzdCAmJiB3ZWlnaHQgPCAyNSAmJiBsaW5rRGVuc2l0eSA+IDAuMikgfHwKCSAgICAgICAgICAod2VpZ2h0ID49IDI1ICYmIGxpbmtEZW5zaXR5ID4gMC41KSB8fAoJICAgICAgICAgICgoZW1iZWRDb3VudCA9PT0gMSAmJiBjb250ZW50TGVuZ3RoIDwgNzUpIHx8IGVtYmVkQ291bnQgPiAxKTsKCSAgICAgICAgcmV0dXJuIGhhdmVUb1JlbW92ZTsKCSAgICAgIH0KCSAgICAgIHJldHVybiBmYWxzZTsKCSAgICB9KTsKCSAgfSwKCgkgIC8qKgoJICAgKiBDbGVhbiBvdXQgZWxlbWVudHMgdGhhdCBtYXRjaCB0aGUgc3BlY2lmaWVkIGNvbmRpdGlvbnMKCSAgICoKCSAgICogQHBhcmFtIEVsZW1lbnQKCSAgICogQHBhcmFtIEZ1bmN0aW9uIGRldGVybWluZXMgd2hldGhlciBhIG5vZGUgc2hvdWxkIGJlIHJlbW92ZWQKCSAgICogQHJldHVybiB2b2lkCgkgICAqKi8KCSAgX2NsZWFuTWF0Y2hlZE5vZGVzOiBmdW5jdGlvbihlLCBmaWx0ZXIpIHsKCSAgICB2YXIgZW5kT2ZTZWFyY2hNYXJrZXJOb2RlID0gdGhpcy5fZ2V0TmV4dE5vZGUoZSwgdHJ1ZSk7CgkgICAgdmFyIG5leHQgPSB0aGlzLl9nZXROZXh0Tm9kZShlKTsKCSAgICB3aGlsZSAobmV4dCAmJiBuZXh0ICE9IGVuZE9mU2VhcmNoTWFya2VyTm9kZSkgewoJICAgICAgaWYgKGZpbHRlci5jYWxsKHRoaXMsIG5leHQsIG5leHQuY2xhc3NOYW1lICsgIiAiICsgbmV4dC5pZCkpIHsKCSAgICAgICAgbmV4dCA9IHRoaXMuX3JlbW92ZUFuZEdldE5leHQobmV4dCk7CgkgICAgICB9IGVsc2UgewoJICAgICAgICBuZXh0ID0gdGhpcy5fZ2V0TmV4dE5vZGUobmV4dCk7CgkgICAgICB9CgkgICAgfQoJICB9LAoKCSAgLyoqCgkgICAqIENsZWFuIG91dCBzcHVyaW91cyBoZWFkZXJzIGZyb20gYW4gRWxlbWVudC4KCSAgICoKCSAgICogQHBhcmFtIEVsZW1lbnQKCSAgICogQHJldHVybiB2b2lkCgkgICoqLwoJICBfY2xlYW5IZWFkZXJzOiBmdW5jdGlvbihlKSB7CgkgICAgbGV0IGhlYWRpbmdOb2RlcyA9IHRoaXMuX2dldEFsbE5vZGVzV2l0aFRhZyhlLCBbImgxIiwgImgyIl0pOwoJICAgIHRoaXMuX3JlbW92ZU5vZGVzKGhlYWRpbmdOb2RlcywgZnVuY3Rpb24obm9kZSkgewoJICAgICAgbGV0IHNob3VsZFJlbW92ZSA9IHRoaXMuX2dldENsYXNzV2VpZ2h0KG5vZGUpIDwgMDsKCSAgICAgIGlmIChzaG91bGRSZW1vdmUpIHsKCSAgICAgICAgdGhpcy5sb2coIlJlbW92aW5nIGhlYWRlciB3aXRoIGxvdyBjbGFzcyB3ZWlnaHQ6Iiwgbm9kZSk7CgkgICAgICB9CgkgICAgICByZXR1cm4gc2hvdWxkUmVtb3ZlOwoJICAgIH0pOwoJICB9LAoKCSAgLyoqCgkgICAqIENoZWNrIGlmIHRoaXMgbm9kZSBpcyBhbiBIMSBvciBIMiBlbGVtZW50IHdob3NlIGNvbnRlbnQgaXMgbW9zdGx5CgkgICAqIHRoZSBzYW1lIGFzIHRoZSBhcnRpY2xlIHRpdGxlLgoJICAgKgoJICAgKiBAcGFyYW0gRWxlbWVudCAgdGhlIG5vZGUgdG8gY2hlY2suCgkgICAqIEByZXR1cm4gYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBpcyBhIHRpdGxlLWxpa2UgaGVhZGVyLgoJICAgKi8KCSAgX2hlYWRlckR1cGxpY2F0ZXNUaXRsZTogZnVuY3Rpb24obm9kZSkgewoJICAgIGlmIChub2RlLnRhZ05hbWUgIT0gIkgxIiAmJiBub2RlLnRhZ05hbWUgIT0gIkgyIikgewoJICAgICAgcmV0dXJuIGZhbHNlOwoJICAgIH0KCSAgICB2YXIgaGVhZGluZyA9IHRoaXMuX2dldElubmVyVGV4dChub2RlLCBmYWxzZSk7CgkgICAgdGhpcy5sb2coIkV2YWx1YXRpbmcgc2ltaWxhcml0eSBvZiBoZWFkZXI6IiwgaGVhZGluZywgdGhpcy5fYXJ0aWNsZVRpdGxlKTsKCSAgICByZXR1cm4gdGhpcy5fdGV4dFNpbWlsYXJpdHkodGhpcy5fYXJ0aWNsZVRpdGxlLCBoZWFkaW5nKSA+IDAuNzU7CgkgIH0sCgoJICBfZmxhZ0lzQWN0aXZlOiBmdW5jdGlvbihmbGFnKSB7CgkgICAgcmV0dXJuICh0aGlzLl9mbGFncyAmIGZsYWcpID4gMDsKCSAgfSwKCgkgIF9yZW1vdmVGbGFnOiBmdW5jdGlvbihmbGFnKSB7CgkgICAgdGhpcy5fZmxhZ3MgPSB0aGlzLl9mbGFncyAmIH5mbGFnOwoJICB9LAoKCSAgX2lzUHJvYmFibHlWaXNpYmxlOiBmdW5jdGlvbihub2RlKSB7CgkgICAgLy8gSGF2ZSB0byBudWxsLWNoZWNrIG5vZGUuc3R5bGUgYW5kIG5vZGUuY2xhc3NOYW1lLmluZGV4T2YgdG8gZGVhbCB3aXRoIFNWRyBhbmQgTWF0aE1MIG5vZGVzLgoJICAgIHJldHVybiAoIW5vZGUuc3R5bGUgfHwgbm9kZS5zdHlsZS5kaXNwbGF5ICE9ICJub25lIikKCSAgICAgICYmICFub2RlLmhhc0F0dHJpYnV0ZSgiaGlkZGVuIikKCSAgICAgIC8vY2hlY2sgZm9yICJmYWxsYmFjay1pbWFnZSIgc28gdGhhdCB3aWtpbWVkaWEgbWF0aCBpbWFnZXMgYXJlIGRpc3BsYXllZAoJICAgICAgJiYgKCFub2RlLmhhc0F0dHJpYnV0ZSgiYXJpYS1oaWRkZW4iKSB8fCBub2RlLmdldEF0dHJpYnV0ZSgiYXJpYS1oaWRkZW4iKSAhPSAidHJ1ZSIgfHwgKG5vZGUuY2xhc3NOYW1lICYmIG5vZGUuY2xhc3NOYW1lLmluZGV4T2YgJiYgbm9kZS5jbGFzc05hbWUuaW5kZXhPZigiZmFsbGJhY2staW1hZ2UiKSAhPT0gLTEpKTsKCSAgfSwKCgkgIC8qKgoJICAgKiBSdW5zIHJlYWRhYmlsaXR5LgoJICAgKgoJICAgKiBXb3JrZmxvdzoKCSAgICogIDEuIFByZXAgdGhlIGRvY3VtZW50IGJ5IHJlbW92aW5nIHNjcmlwdCB0YWdzLCBjc3MsIGV0Yy4KCSAgICogIDIuIEJ1aWxkIHJlYWRhYmlsaXR5J3MgRE9NIHRyZWUuCgkgICAqICAzLiBHcmFiIHRoZSBhcnRpY2xlIGNvbnRlbnQgZnJvbSB0aGUgY3VycmVudCBkb20gdHJlZS4KCSAgICogIDQuIFJlcGxhY2UgdGhlIGN1cnJlbnQgRE9NIHRyZWUgd2l0aCB0aGUgbmV3IG9uZS4KCSAgICogIDUuIFJlYWQgcGVhY2VmdWxseS4KCSAgICoKCSAgICogQHJldHVybiB2b2lkCgkgICAqKi8KCSAgcGFyc2U6IGZ1bmN0aW9uICgpIHsKCSAgICAvLyBBdm9pZCBwYXJzaW5nIHRvbyBsYXJnZSBkb2N1bWVudHMsIGFzIHBlciBjb25maWd1cmF0aW9uIG9wdGlvbgoJICAgIGlmICh0aGlzLl9tYXhFbGVtc1RvUGFyc2UgPiAwKSB7CgkgICAgICB2YXIgbnVtVGFncyA9IHRoaXMuX2RvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgiKiIpLmxlbmd0aDsKCSAgICAgIGlmIChudW1UYWdzID4gdGhpcy5fbWF4RWxlbXNUb1BhcnNlKSB7CgkgICAgICAgIHRocm93IG5ldyBFcnJvcigiQWJvcnRpbmcgcGFyc2luZyBkb2N1bWVudDsgIiArIG51bVRhZ3MgKyAiIGVsZW1lbnRzIGZvdW5kIik7CgkgICAgICB9CgkgICAgfQoKCSAgICAvLyBVbndyYXAgaW1hZ2UgZnJvbSBub3NjcmlwdAoJICAgIHRoaXMuX3Vud3JhcE5vc2NyaXB0SW1hZ2VzKHRoaXMuX2RvYyk7CgoJICAgIC8vIEV4dHJhY3QgSlNPTi1MRCBtZXRhZGF0YSBiZWZvcmUgcmVtb3Zpbmcgc2NyaXB0cwoJICAgIHZhciBqc29uTGQgPSB0aGlzLl9kaXNhYmxlSlNPTkxEID8ge30gOiB0aGlzLl9nZXRKU09OTEQodGhpcy5fZG9jKTsKCgkgICAgLy8gUmVtb3ZlIHNjcmlwdCB0YWdzIGZyb20gdGhlIGRvY3VtZW50LgoJICAgIHRoaXMuX3JlbW92ZVNjcmlwdHModGhpcy5fZG9jKTsKCgkgICAgdGhpcy5fcHJlcERvY3VtZW50KCk7CgoJICAgIHZhciBtZXRhZGF0YSA9IHRoaXMuX2dldEFydGljbGVNZXRhZGF0YShqc29uTGQpOwoJICAgIHRoaXMuX2FydGljbGVUaXRsZSA9IG1ldGFkYXRhLnRpdGxlOwoKCSAgICB2YXIgYXJ0aWNsZUNvbnRlbnQgPSB0aGlzLl9ncmFiQXJ0aWNsZSgpOwoJICAgIGlmICghYXJ0aWNsZUNvbnRlbnQpCgkgICAgICByZXR1cm4gbnVsbDsKCgkgICAgdGhpcy5sb2coIkdyYWJiZWQ6ICIgKyBhcnRpY2xlQ29udGVudC5pbm5lckhUTUwpOwoKCSAgICB0aGlzLl9wb3N0UHJvY2Vzc0NvbnRlbnQoYXJ0aWNsZUNvbnRlbnQpOwoKCSAgICAvLyBJZiB3ZSBoYXZlbid0IGZvdW5kIGFuIGV4Y2VycHQgaW4gdGhlIGFydGljbGUncyBtZXRhZGF0YSwgdXNlIHRoZSBhcnRpY2xlJ3MKCSAgICAvLyBmaXJzdCBwYXJhZ3JhcGggYXMgdGhlIGV4Y2VycHQuIFRoaXMgaXMgdXNlZCBmb3IgZGlzcGxheWluZyBhIHByZXZpZXcgb2YKCSAgICAvLyB0aGUgYXJ0aWNsZSdzIGNvbnRlbnQuCgkgICAgaWYgKCFtZXRhZGF0YS5leGNlcnB0KSB7CgkgICAgICB2YXIgcGFyYWdyYXBocyA9IGFydGljbGVDb250ZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJwIik7CgkgICAgICBpZiAocGFyYWdyYXBocy5sZW5ndGggPiAwKSB7CgkgICAgICAgIG1ldGFkYXRhLmV4Y2VycHQgPSBwYXJhZ3JhcGhzWzBdLnRleHRDb250ZW50LnRyaW0oKTsKCSAgICAgIH0KCSAgICB9CgoJICAgIHZhciB0ZXh0Q29udGVudCA9IGFydGljbGVDb250ZW50LnRleHRDb250ZW50OwoJICAgIHJldHVybiB7CgkgICAgICB0aXRsZTogdGhpcy5fYXJ0aWNsZVRpdGxlLAoJICAgICAgYnlsaW5lOiBtZXRhZGF0YS5ieWxpbmUgfHwgdGhpcy5fYXJ0aWNsZUJ5bGluZSwKCSAgICAgIGRpcjogdGhpcy5fYXJ0aWNsZURpciwKCSAgICAgIGNvbnRlbnQ6IHRoaXMuX3NlcmlhbGl6ZXIoYXJ0aWNsZUNvbnRlbnQpLAoJICAgICAgdGV4dENvbnRlbnQ6IHRleHRDb250ZW50LAoJICAgICAgbGVuZ3RoOiB0ZXh0Q29udGVudC5sZW5ndGgsCgkgICAgICBleGNlcnB0OiBtZXRhZGF0YS5leGNlcnB0LAoJICAgICAgc2l0ZU5hbWU6IG1ldGFkYXRhLnNpdGVOYW1lIHx8IHRoaXMuX2FydGljbGVTaXRlTmFtZQoJICAgIH07CgkgIH0KCX07CgoJewoJICBtb2R1bGUuZXhwb3J0cyA9IFJlYWRhYmlsaXR5OwoJfQoJfSk7CgoJLyogZXNsaW50LWVudiBlczY6ZmFsc2UgKi8KCgl2YXIgUmVhZGFiaWxpdHlSZWFkZXJhYmxlID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkgewoJLyoKCSAqIENvcHlyaWdodCAoYykgMjAxMCBBcmM5MCBJbmMKCSAqCgkgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsKCSAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4KCSAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoJICoKCSAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCSAqCgkgKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlCgkgKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAoJICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCgkgKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kCgkgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KCSAqLwoKCS8qCgkgKiBUaGlzIGNvZGUgaXMgaGVhdmlseSBiYXNlZCBvbiBBcmM5MCdzIHJlYWRhYmlsaXR5LmpzICgxLjcuMSkgc2NyaXB0CgkgKiBhdmFpbGFibGUgYXQ6IGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9hcmM5MGxhYnMtcmVhZGFiaWxpdHkKCSAqLwoKCXZhciBSRUdFWFBTID0gewoJICAvLyBOT1RFOiBUaGVzZSB0d28gcmVndWxhciBleHByZXNzaW9ucyBhcmUgZHVwbGljYXRlZCBpbgoJICAvLyBSZWFkYWJpbGl0eS5qcy4gUGxlYXNlIGtlZXAgYm90aCBjb3BpZXMgaW4gc3luYy4KCSAgdW5saWtlbHlDYW5kaWRhdGVzOiAvLWFkLXxhaTJodG1sfGJhbm5lcnxicmVhZGNydW1ic3xjb21ieHxjb21tZW50fGNvbW11bml0eXxjb3Zlci13cmFwfGRpc3F1c3xleHRyYXxmb290ZXJ8Z2RwcnxoZWFkZXJ8bGVnZW5kc3xtZW51fHJlbGF0ZWR8cmVtYXJrfHJlcGxpZXN8cnNzfHNob3V0Ym94fHNpZGViYXJ8c2t5c2NyYXBlcnxzb2NpYWx8c3BvbnNvcnxzdXBwbGVtZW50YWx8YWQtYnJlYWt8YWdlZ2F0ZXxwYWdpbmF0aW9ufHBhZ2VyfHBvcHVwfHlvbS1yZW1vdGUvaSwKCSAgb2tNYXliZUl0c0FDYW5kaWRhdGU6IC9hbmR8YXJ0aWNsZXxib2R5fGNvbHVtbnxjb250ZW50fG1haW58c2hhZG93L2ksCgl9OwoKCWZ1bmN0aW9uIGlzTm9kZVZpc2libGUobm9kZSkgewoJICAvLyBIYXZlIHRvIG51bGwtY2hlY2sgbm9kZS5zdHlsZSBhbmQgbm9kZS5jbGFzc05hbWUuaW5kZXhPZiB0byBkZWFsIHdpdGggU1ZHIGFuZCBNYXRoTUwgbm9kZXMuCgkgIHJldHVybiAoIW5vZGUuc3R5bGUgfHwgbm9kZS5zdHlsZS5kaXNwbGF5ICE9ICJub25lIikKCSAgICAmJiAhbm9kZS5oYXNBdHRyaWJ1dGUoImhpZGRlbiIpCgkgICAgLy9jaGVjayBmb3IgImZhbGxiYWNrLWltYWdlIiBzbyB0aGF0IHdpa2ltZWRpYSBtYXRoIGltYWdlcyBhcmUgZGlzcGxheWVkCgkgICAgJiYgKCFub2RlLmhhc0F0dHJpYnV0ZSgiYXJpYS1oaWRkZW4iKSB8fCBub2RlLmdldEF0dHJpYnV0ZSgiYXJpYS1oaWRkZW4iKSAhPSAidHJ1ZSIgfHwgKG5vZGUuY2xhc3NOYW1lICYmIG5vZGUuY2xhc3NOYW1lLmluZGV4T2YgJiYgbm9kZS5jbGFzc05hbWUuaW5kZXhPZigiZmFsbGJhY2staW1hZ2UiKSAhPT0gLTEpKTsKCX0KCgkvKioKCSAqIERlY2lkZXMgd2hldGhlciBvciBub3QgdGhlIGRvY3VtZW50IGlzIHJlYWRlci1hYmxlIHdpdGhvdXQgcGFyc2luZyB0aGUgd2hvbGUgdGhpbmcuCgkgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBDb25maWd1cmF0aW9uIG9iamVjdC4KCSAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5taW5Db250ZW50TGVuZ3RoPTE0MF0gVGhlIG1pbmltdW0gbm9kZSBjb250ZW50IGxlbmd0aCB1c2VkIHRvIGRlY2lkZSBpZiB0aGUgZG9jdW1lbnQgaXMgcmVhZGVyYWJsZS4KCSAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5taW5TY29yZT0yMF0gVGhlIG1pbnVtdW0gY3VtdWxhdGVkICdzY29yZScgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGRvY3VtZW50IGlzIHJlYWRlcmFibGUuCgkgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb3B0aW9ucy52aXNpYmlsaXR5Q2hlY2tlcj1pc05vZGVWaXNpYmxlXSBUaGUgZnVuY3Rpb24gdXNlZCB0byBkZXRlcm1pbmUgaWYgYSBub2RlIGlzIHZpc2libGUuCgkgKiBAcmV0dXJuIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCB3ZSBzdXNwZWN0IFJlYWRhYmlsaXR5LnBhcnNlKCkgd2lsbCBzdWNlZWVkIGF0IHJldHVybmluZyBhbiBhcnRpY2xlIG9iamVjdC4KCSAqLwoJZnVuY3Rpb24gaXNQcm9iYWJseVJlYWRlcmFibGUoZG9jLCBvcHRpb25zID0ge30pIHsKCSAgLy8gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgcmVhc29ucyAnb3B0aW9ucycgY2FuIGVpdGhlciBiZSBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IG9yIHRoZSBmdW5jdGlvbiB1c2VkCgkgIC8vIHRvIGRldGVybWluZSBpZiBhIG5vZGUgaXMgdmlzaWJsZS4KCSAgaWYgKHR5cGVvZiBvcHRpb25zID09ICJmdW5jdGlvbiIpIHsKCSAgICBvcHRpb25zID0geyB2aXNpYmlsaXR5Q2hlY2tlcjogb3B0aW9ucyB9OwoJICB9CgoJICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7IG1pblNjb3JlOiAyMCwgbWluQ29udGVudExlbmd0aDogMTQwLCB2aXNpYmlsaXR5Q2hlY2tlcjogaXNOb2RlVmlzaWJsZSB9OwoJICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7CgoJICB2YXIgbm9kZXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgicCwgcHJlIik7CgoJICAvLyBHZXQgPGRpdj4gbm9kZXMgd2hpY2ggaGF2ZSA8YnI+IG5vZGUocykgYW5kIGFwcGVuZCB0aGVtIGludG8gdGhlIGBub2Rlc2AgdmFyaWFibGUuCgkgIC8vIFNvbWUgYXJ0aWNsZXMnIERPTSBzdHJ1Y3R1cmVzIG1pZ2h0IGxvb2sgbGlrZQoJICAvLyA8ZGl2PgoJICAvLyAgIFNlbnRlbmNlczxicj4KCSAgLy8gICA8YnI+CgkgIC8vICAgU2VudGVuY2VzPGJyPgoJICAvLyA8L2Rpdj4KCSAgdmFyIGJyTm9kZXMgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgiZGl2ID4gYnIiKTsKCSAgaWYgKGJyTm9kZXMubGVuZ3RoKSB7CgkgICAgdmFyIHNldCA9IG5ldyBTZXQobm9kZXMpOwoJICAgIFtdLmZvckVhY2guY2FsbChick5vZGVzLCBmdW5jdGlvbiAobm9kZSkgewoJICAgICAgc2V0LmFkZChub2RlLnBhcmVudE5vZGUpOwoJICAgIH0pOwoJICAgIG5vZGVzID0gQXJyYXkuZnJvbShzZXQpOwoJICB9CgoJICB2YXIgc2NvcmUgPSAwOwoJICAvLyBUaGlzIGlzIGEgbGl0dGxlIGNoZWVreSwgd2UgdXNlIHRoZSBhY2N1bXVsYXRvciAnc2NvcmUnIHRvIGRlY2lkZSB3aGF0IHRvIHJldHVybiBmcm9tCgkgIC8vIHRoaXMgY2FsbGJhY2s6CgkgIHJldHVybiBbXS5zb21lLmNhbGwobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7CgkgICAgaWYgKCFvcHRpb25zLnZpc2liaWxpdHlDaGVja2VyKG5vZGUpKSB7CgkgICAgICByZXR1cm4gZmFsc2U7CgkgICAgfQoKCSAgICB2YXIgbWF0Y2hTdHJpbmcgPSBub2RlLmNsYXNzTmFtZSArICIgIiArIG5vZGUuaWQ7CgkgICAgaWYgKFJFR0VYUFMudW5saWtlbHlDYW5kaWRhdGVzLnRlc3QobWF0Y2hTdHJpbmcpICYmCgkgICAgICAgICFSRUdFWFBTLm9rTWF5YmVJdHNBQ2FuZGlkYXRlLnRlc3QobWF0Y2hTdHJpbmcpKSB7CgkgICAgICByZXR1cm4gZmFsc2U7CgkgICAgfQoKCSAgICBpZiAobm9kZS5tYXRjaGVzKCJsaSBwIikpIHsKCSAgICAgIHJldHVybiBmYWxzZTsKCSAgICB9CgoJICAgIHZhciB0ZXh0Q29udGVudExlbmd0aCA9IG5vZGUudGV4dENvbnRlbnQudHJpbSgpLmxlbmd0aDsKCSAgICBpZiAodGV4dENvbnRlbnRMZW5ndGggPCBvcHRpb25zLm1pbkNvbnRlbnRMZW5ndGgpIHsKCSAgICAgIHJldHVybiBmYWxzZTsKCSAgICB9CgoJICAgIHNjb3JlICs9IE1hdGguc3FydCh0ZXh0Q29udGVudExlbmd0aCAtIG9wdGlvbnMubWluQ29udGVudExlbmd0aCk7CgoJICAgIGlmIChzY29yZSA+IG9wdGlvbnMubWluU2NvcmUpIHsKCSAgICAgIHJldHVybiB0cnVlOwoJICAgIH0KCSAgICByZXR1cm4gZmFsc2U7CgkgIH0pOwoJfQoKCXsKCSAgbW9kdWxlLmV4cG9ydHMgPSBpc1Byb2JhYmx5UmVhZGVyYWJsZTsKCX0KCX0pOwoKCXZhciByZWFkYWJpbGl0eSA9IHsKCSAgUmVhZGFiaWxpdHk6IFJlYWRhYmlsaXR5XzEsCgkgIGlzUHJvYmFibHlSZWFkZXJhYmxlOiBSZWFkYWJpbGl0eVJlYWRlcmFibGUKCX07CgoJLyoqCgkgKiBDb250ZW50IHNjcmlwdCBmb3IgdGhlIHBhZ2VUZXh0IG1vZHVsZS4gVXNlcyBNb3ppbGxhIFJlYWRhYmlsaXR5CgkgKiB0byBwYXJzZSB0ZXh0IGNvbnRlbnQgZnJvbSB0aGUgcGFnZS4KCSAqIEBtb2R1bGUgd2ViU2NpZW5jZS5wYWdlVGV4dC5jb250ZW50CgkgKi8KCgkvLyBJSUZFIHdyYXBwZXIgdG8gYWxsb3cgZWFybHkgcmV0dXJuCgkoZnVuY3Rpb24oKSB7CgkgICAgLy8gSWYgdGhlIHBhZ2VUZXh0IGNvbnRlbnQgc2NyaXB0IGlzIGFscmVhZHkgcnVubmluZyBvbiB0aGlzIHBhZ2UsIG5vIG5lZWQgZm9yIHRoaXMgaW5zdGFuY2UKCSAgICBpZigid2ViU2NpZW5jZSIgaW4gd2luZG93KSB7CgkgICAgICAgIGlmKCJwYWdlVGV4dEFjdGl2ZSIgaW4gd2luZG93LndlYlNjaWVuY2UpIHsKCSAgICAgICAgICAgIHJldHVybjsKCSAgICAgICAgfQoJICAgICAgICB3aW5kb3cud2ViU2NpZW5jZS5wYWdlVGV4dEFjdGl2ZSA9IHRydWU7CgkgICAgfQoJICAgIGVsc2UgewoJICAgICAgICB3aW5kb3cud2ViU2NpZW5jZSA9IHsKCSAgICAgICAgICAgIHBhZ2VUZXh0QWN0aXZlOiB0cnVlCgkgICAgICAgIH07CgkgICAgfQoKCSAgICAvKioKCSAgICAgKiBXaGV0aGVyIHRoZSBwYWdlIGhhcyBiZWVuIHBhcnNlZC4KCSAgICAgKiBAdHlwZSB7Ym9vbGVhbn0KCSAgICAgKi8KCSAgICBsZXQgcGFyc2VkUGFnZSA9IGZhbHNlOwoKCSAgICAvLyBXYWl0IGZvciBwYWdlTWFuYWdlciB0byBsb2FkCgkgICAgZnVuY3Rpb24gcGFnZU1hbmFnZXJMb2FkZWQoKSB7CgkgICAgICAgIGNvbnN0IHBhZ2VNYW5hZ2VyID0gd2luZG93LndlYlNjaWVuY2UucGFnZU1hbmFnZXI7CgkgICAgICAgIC8vIExpc3RlbiBmb3IgdGhlIGJhY2tncm91bmQgc2NyaXB0IHRvIG1lc3NhZ2UgdGhhdCB0aGUgcGFnZSBjYW4gbGlrZWx5IGJlIHBhcnNlZCB3aXRoIFJlYWRhYmlsaXR5CgkgICAgICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IHsKCSAgICAgICAgICAgIC8vIElmIHRoZSBwYWdlIGNhbiBsaWtlbHkgYmUgcGFyc2VkIHdpdGggUmVhZGFiaWxpdHksIHRoZXJlJ3MgYW4gb25nb2luZyBwYWdlIHZpc2l0LCBhbmQKCSAgICAgICAgICAgIC8vIHRoZSBwYWdlIGhhc24ndCBiZWVuIHBhcnNlZCwgcGFyc2UgdGhlIHBhZ2UKCSAgICAgICAgICAgIGlmKChtZXNzYWdlLnR5cGUgPT09ICJ3ZWJTY2llbmNlLnBhZ2VUZXh0LmlzQXJ0aWNsZSIpICYmIAoJICAgICAgICAgICAgbWVzc2FnZS5pc0FydGljbGUgJiYKCSAgICAgICAgICAgIHBhZ2VNYW5hZ2VyLnBhZ2VWaXNpdFN0YXJ0ZWQgJiYKCSAgICAgICAgICAgICFwYXJzZWRQYWdlKSB7CgkgICAgICAgICAgICAgICAgdHJ5IHsKCSAgICAgICAgICAgICAgICAgICAgLy8gUmVhZGFiaWxpdHkgbW9kaWZpZXMgdGhlIERPTSwgc28gY2xvbmUgdGhlIGRvY3VtZW50IGZpcnN0IGFuZCB0aGVuIGNhbGwgUmVhZGFiaWxpdHkKCSAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jdW1lbnRDbG9uZSA9IGRvY3VtZW50LmNsb25lTm9kZSh0cnVlKTsgCgkgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFydGljbGUgPSAobmV3IHJlYWRhYmlsaXR5LlJlYWRhYmlsaXR5KGRvY3VtZW50Q2xvbmUpKS5wYXJzZSgpOwoJICAgICAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIGJhY2tncm91bmQgc2NyaXB0CgkgICAgICAgICAgICAgICAgICAgIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7CgkgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAid2ViU2NpZW5jZS5wYWdlVGV4dC5wYXJzZWRUZXh0IiwKCSAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VJZDogcGFnZU1hbmFnZXIucGFnZUlkLAoJICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBwYWdlTWFuYWdlci51cmwsCgkgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogYXJ0aWNsZS50aXRsZSwKCSAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFydGljbGUuY29udGVudCwKCSAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBhcnRpY2xlLnRleHRDb250ZW50LAoJICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZVdpbmRvdzogYnJvd3Nlci5leHRlbnNpb24uaW5JbmNvZ25pdG9Db250ZXh0CgkgICAgICAgICAgICAgICAgICAgIH0pOwoJICAgICAgICAgICAgICAgICAgICBwYXJzZWRQYWdlID0gdHJ1ZTsKCSAgICAgICAgICAgICAgICB9CgkgICAgICAgICAgICAgICAgLy8gSWdub3JlIGVycm9ycywgc2luY2Ugd2hlbiBSZWFkYWJpbGl0eSBpc24ndCBzdWNjZXNzZnVsIHdlIGp1c3QgZG9uJ3Qgc2VuZCB0ZXh0CgkgICAgICAgICAgICAgICAgY2F0Y2goZXJyb3IpIHsKCSAgICAgICAgICAgICAgICAgICAgcmV0dXJuOwoJICAgICAgICAgICAgICAgIH0KCSAgICAgICAgICAgIH0KCSAgICAgICAgfSk7CgkgICAgICAgIC8vIFdoZW4gYSBwYWdlIHZpc2l0IGVuZHMsIHJlc2V0IHRoZSBmbGFnIHRoYXQgdGhlIHBhZ2UgaGFzIGJlZW4gcGFyc2VkCgkgICAgICAgIHBhZ2VNYW5hZ2VyLm9uUGFnZVZpc2l0U3RvcC5hZGRMaXN0ZW5lcigoKSA9PiB7CgkgICAgICAgICAgICBwYXJzZWRQYWdlID0gZmFsc2U7CgkgICAgICAgIH0pOwoJICAgIH0KCSAgICBpZiAoKCJ3ZWJTY2llbmNlIiBpbiB3aW5kb3cpICYmICgicGFnZU1hbmFnZXIiIGluIHdpbmRvdy53ZWJTY2llbmNlKSkgewoJICAgICAgICBwYWdlTWFuYWdlckxvYWRlZCgpOwoJICAgIH0KCSAgICBlbHNlIHsKCSAgICAgICAgaWYoISgicGFnZU1hbmFnZXJIYXNMb2FkZWQiIGluIHdpbmRvdykpCgkgICAgICAgICAgICB3aW5kb3cucGFnZU1hbmFnZXJIYXNMb2FkZWQgPSBbXTsKCSAgICAgICAgd2luZG93LnBhZ2VNYW5hZ2VySGFzTG9hZGVkLnB1c2gocGFnZU1hbmFnZXJMb2FkZWQpOwoJICAgIH0KCX0pKCk7Cgp9KCkpOwo=";

/**
 * This module enables analyzing the text content of webpages, including with
 * natural language processing methods. The module uses Mozilla Readability
 * in a content script to parse document title and content when possible.
 * 
 * # Training, Testing, and Deploying Natural Language Processing Models
 * A motivating use case for this module is applying natural language
 * processing methods to webpage text. The module provides infrastructure for
 * NLP models, but leaves implementation and evaluation of models to study
 * authors. We recommend using existing toolkits for NLP feature generation
 * (e.g., Natural or NLP.js) and for working with models (e.g., TensorFlow.js,
 * ONNX.js, WebDNN, or sklearn-porter). We also recommend using the same
 * codebase for collecting data (e.g., with web crawls), constructing models,
 * evaluating models, and deploying models in browser-based studies. When
 * maintaining multiple NLP codebases for a browser-based study, subtle
 * inconsistencies are easy to introduce and can call into question NLP model
 * performance.
 * 
 * # Web Crawls to Collect Natural Language Processing Training Data
 * Because WebScience integrates with ordinary browser extensions, you can
 * use this module in a web crawl to collect page text content as NLP training
 * data. All the major browser automation toolkits (e.g., Selenium, Puppeteer,
 * Playwright, and WebdriverIO) support running web crawls with browser
 * extensions installed. We recommend running an online crawl to collect NLP
 * data, using this module to extract webpage text, then training and testing
 * models offline. If you use web crawl data to construct an NLP model for a
 * browser-based study, be sure to carefully consider how the distribution
 * of pages in the crawl compares to the distribution of pages that a user in
 * the study might visit. If a crawl is not representative of user browsing,
 * NLP model performance on crawl data might significantly differ from
 * performance when deployed in a browser-based study.
 * 
 * # Implementing Natural Language Processing in Web Workers
 * Because natural language processing methods can be computationally
 * expensive, it is very important to offload NLP tasks from an extension's
 * main thread. We recommend pairing this module with the `workers` module to 
 * implement NLP tasks inside of Web Workers, which run in separate threads
 * and will not block the extension's main thread. Some NLP toolkits support
 * additional optimizations, such as WebAssembly or WebGL, and we recommend
 * enabling all available optimizations to minimize the possibility of impact
 * on the user's browsing experience. 
 * 
 * @see {@link https://github.com/mozilla/readability}
 * @see {@link https://github.com/NaturalNode/natural}
 * @see {@link https://github.com/axa-group/nlp.js}
 * @see {@link https://www.tensorflow.org/js}
 * @see {@link https://github.com/microsoft/onnxjs}
 * @see {@link https://mil-tokyo.github.io/webdnn/}
 * @see {@link https://github.com/nok/sklearn-porter}
 * @module webScience.pageText
 */

/**
 * Additional information about the page data event.
 * @typedef {Object} TextParsedDetails
 * @property {number} pageId - The ID for the page, unique across browsing sessions.
 * @property {string} url - The URL of the page, without any hash.
 * @property {string} title - The title of the document, parsed by Readability.
 * @property {string} content - The document text content as an HTML string, parsed by Readability.
 * @property {string} textContent - The document text content with HTML tags removed, parsed by Readability.
 * @property {boolean} privateWindow - Whether the page loaded in a private window.
 */

/**
 * @callback textParsedListener
 * @param {TextParsedDetails} details - Additional information about the page data event.
 */

/**
 * @typedef {Object} TextParsedListenerRecord
 * @property {matching.MatchPatternSet} matchPatternSet - The match patterns for the listener.
 * @property {boolean} privateWindows - Whether to notify the listener about pages in private windows.
 * @property {browser.contentScripts.RegisteredContentScript} contentScript - The content
 * script associated with the listener.
 */

/**
 * A map where each key is a listener function and each value is a record for that listener function.
 * @constant {Map<textParsedListener, TextParsedListenerRecord>}
 * @private
 */
const textParsedListeners = new Map();

/**
 * @callback TextParsedAddListener
 * @param {textParsedListener} listener - The listener to add.
 * @param {Object} options - Options for the listener.
 * @param {string[]} options.matchPatterns - The webpages where the listener should be notified about page text.
 * @param {boolean} [options.privateWindows=false] - Whether to notify the listener about pages in private windows.
 */

/**
 * @callback TextParsedRemoveListener
 * @param {textParsedListener} listener - The listener to remove.
 */

/**
 * @callback TextParsedHasListener
 * @param {textParsedListener} listener - The listener to check.
 * @returns {boolean} Whether the listener has been added for the event.
 */

/**
 * @callback TextParsedHasAnyListeners
 * @returns {boolean} Whether the event has any listeners.
 */

/**
 * @typedef {Object} TextParsedEvent
 * @property {TextParsedAddListener} addListener - Add a listener for page text.
 * @property {TextParsedRemoveListener} removeListener - Remove a listener for page text.
 * @property {TextParsedHasListener} hasListener - Whether a specified listener has been added.
 * @property {TextParsedHasAnyListeners} hasAnyListeners - Whether the event has any listeners.
 */

/**
 * An event that fires when a page's text content has been parsed with Readability. If the text
 * content is not parseable, this event does not fire.
 * @constant {TextParsedEvent}
 */
const onTextParsed = createEvent({
    name: "webScience.pageText.onTextParsed",
    addListenerCallback: addListener$2,
    removeListenerCallback: removeListener$2,
    notifyListenersCallback: () => { return false; }
});

/**
 * Whether the module has completed initialization.
 * @type{boolean}
 * @private
 */
let initialized$4 = false;

/**
 * A callback function for adding a text parsed listener.
 * @param {pageDataCallback} listener - The listener function being added.
 * @param {Object} options - Options for the listener.
 * @param {string[]} options.matchPatterns - The match patterns for pages where the listener should
 * be notified.
 * @param {boolean} [options.privateWindows=false] - Whether the listener should be notified for
 * pages in private windows.
 * @private
 */
async function addListener$2(listener, {
    matchPatterns,
    privateWindows = false
}) {
    // Initialization
    if (!initialized$4) {
        initialized$4 = true;
        await initialize$1();
        // Listen for content script messages
        onMessage.addListener(messageListener$1,
            {
                type: "webScience.pageText.parsedText",
                schema: {
                    pageId: "string",
                    url: "string",
                    title: "string",
                    content: "string",
                    textContent: "string",
                    privateWindow: "boolean"
                }
            });
        // Notify the content script when there is a new Readability status
        // for a page and the page URL matches at least one listener
        registerSchema("webScience.pageText.isArticle", {
            isArticle: "boolean"
        });
        browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if("isArticle" in changeInfo && "url" in tab) {
                // Test match patterns here rather than in the tabs.onUpdated
                // listener options so we don't have to manage multiple listeners
                // or remove and add the listener while events might be queued
                for (const listenerRecord of textParsedListeners.values()) {
                    if (listenerRecord.matchPatternSet.matches(tab.url)) {
                        sendMessageToTab(tabId, {
                            type: "webScience.pageText.isArticle",
                            isArticle: tab.isArticle
                        });
                        break;
                    }
                }
            }
        }, {
            urls: [ "<all_urls>" ],
            properties: [ "isArticle" ]
        });
    }

    // Compile the match patterns for the listener
    const matchPatternSet = createMatchPatternSet(matchPatterns);
    // Register a content script for the listener
    const contentScript = await browser.contentScripts.register({
        matches: matchPatterns,
        js: [{
            code: dataUrlToString(pageTextContentScript)
        }],
        runAt: "document_idle"
    });

    // Store a record for the listener
    textParsedListeners.set(listener, {
        matchPatternSet,
        contentScript,
        privateWindows
    });
}

/**
 * A callback function for removing a text parsed listener.
 * @param {pageDataCallback} listener - The listener that is being removed.
 * @private
 */
function removeListener$2(listener) {
    // If there is a record of the listener, unregister its content script
    // and delete the record
    const listenerRecord = textParsedListeners.get(listener);
    if (listenerRecord === undefined) {
        return;
    }
    listenerRecord.contentScript.unregister();
    textParsedListeners.delete(listener);
}

/**
 * A callback function for messages from the content script.
 * @param {TextParsedDetails} textParsedDetails - Details of the text parsed from the
 * page.
 * @private
 */
function messageListener$1(textParsedDetails) {
    // Remove the type string from the content script message
    delete textParsedDetails.type;

    // Notify listeners when the private window and match pattern requirements are met
    for (const [listener, listenerRecord] of textParsedListeners) {
        if ((!textParsedDetails.privateWindow || listenerRecord.privateWindows)
            && (listenerRecord.matchPatternSet.matches(textParsedDetails.url))) {
            listener(textParsedDetails);
        }
    }
}

/**
 * This code gets text content from Articles, based on WebScience's PageText module
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageText
 */
 
 let initialized$5 = false;
 
 /**
  * Start an article contents study.
  * @param {Object} options - A set of options for the study.
  * @param {string[]} [options.domains=[]] - The domains of interest for the study.
  * @param {Object} rally - The Mozilla Rally object for this study, initialized in background.js
  * @param {Boolean} is_dev_mode - Determines where to store data
  */
 async function startMeasurement ({
     domains = [],
     rally: rally,
     is_dev_mode: is_dev_mode
 }) {
   // If this module has been initialized, don't do it again
   if (initialized$5){
     return   
   }
   initialized$5 = true;
 
   // Handle onTextParsed event callbacks
   onTextParsed.addListener(async (pageData) => {
    // Grab the survey status
    let surveyStatus  = await getSurveyStatus();
    
    // If the survey has been completed
    if (surveyStatus=="completed"){
      // Set the type to match other event data schemas
      pageData['type'] = "WebScience.articleContents";
      //pageID here is used as a unique key for local key/value storage
      let pageId = "WebScience.ArticleContents."+pageData.pageId;
      //Grab the User ID and set it in the data
      let userID = await getSurveyId();
      pageData['userID'] = ''+userID;
      // We don't need this field -just textContent
      delete pageData.content;

      // If its dev mode, save locally.  Otherwise, ping rally
      if ( is_dev_mode ){
        browser.storage.local.set({[pageId]:pageData});
      } else {
        rally.sendPing("articleContent", pageData);
      }
    // If the survey isn't completed, send this message and move on.
    } else {
      console.log("Survey not completed");
    }
   }, {
     matchPatterns: domainsToMatchPatterns(domains)
   });
 }

/**
 * This module measures advertisement info on news pages
 *
 * Brian Chivers, 3/19/2021
 * @module WebScience.Measurements.Advertisements
 */

let initialized$6 = false;


/**
 * Start an advertisements study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 * @param {Object} rally - The Mozilla Rally object for this study, initialized in background.js
 * @param {Boolean} is_dev_mode - Changes storage location based on whether this is dev mode or not
 */
async function startMeasurement$1 ({
  domains = [],
  rally: rally,
  is_dev_mode: is_dev_mode
}) {
  // If this module has already been initialized, don't do it again
  if (initialized$6) {
    return
  }
  initialized$6 = true;
  // Make sure the page manager has initialized.  This is used for the PageID
  await initialize$1();

  // Build the URL matching set for content scripts
  let contentScriptMatches = domainsToMatchPatterns(domains, true);

  // Register the content script for measuring advertisement info
  // The CSS selectors file is needed to find ads on the page
  await browser.contentScripts.register ({
    matches: contentScriptMatches,
    js: [
      {
        file: '/src/ad_css_selectors.js'
      },
      {
        file: '/src/content-scripts/page-ads.js'
      }
      ],
    runAt: 'document_start'
  });

  // Handle advertisement callbacks
  onMessage.addListener( async (adInfo, sender, sendResponse) => {
    // Get the survey status
    let surveyStatus  = await getSurveyStatus();

    // If the survey is complete
    if (surveyStatus=="completed"){
      // pageID is a unique ID for the browser key/value storage
      let pageId = "WebScience.Advertisements."+adInfo.pageId;
      //Normalize the URL
      adInfo.url = normalizeUrl(sender.url);
      // Set TabID
      adInfo.tabId = sender.tab.id;
      // Grab the userID from the survey adn set it in the JSON data
      let userID = await getSurveyId();
      adInfo['userID'] = ''+userID;

      // If its dev mode, store locally.  Otherwise, ping rally.
      if (is_dev_mode){
        browser.storage.local.set({[pageId]:adInfo});
      } else {
        rally.sendPing("advertisement", adInfo);
      }
    // If the survey isn't completed, just log this message and move on
    } else {
      console.log("Survey not completed");
    }
  }, {
    type: 'WebScience.advertisements',
    schema:{
      pageId:'string',
      type: 'string',
      url: 'string',
      ads: 'object',
      body: 'object'
  }
  }
  );
}

/**
 * This is a wrapper to store things that WebScience PageNavigation used to
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageNav
 */

let initialized$7 = false;

/**
 * Start a page nav study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 * @param {Object} rally - The Mozilla Rally object, initialized in background.js
 * @param {Boolean} is_dev_mode - Determines where to store data
 */
async function startMeasurement$2 ({
    domains = [],
    rally: rally,
    is_dev_mode: is_dev_mode
}) {
  // If this module has been initialized, don't do it again
  if (initialized$7){
    return   
  }
  initialized$7 = true;

  //Handles PageNavigation callbacks
  onPageData.addListener(async (pageData) => {
    //Get Survey Status
    let surveyStatus  = await getSurveyStatus();
    // If survey is completed
    if (surveyStatus=="completed"){
      // The pageID here is a unique key to be used for local key-value storage
      let pageId = "WebScience.PageNav."+pageData.pageId.toString();
      //Grab userID and set it in JSON
      let userID = await getSurveyId();
      pageData['userID'] = ''+userID;
      //Set the type to match other collection modules
      pageData['type'] = 'WebScience.pageNav';

      //If we're in dev mode, store locally. Otherwise, ping rally.
      if (is_dev_mode){
        browser.storage.local.set({[pageId]:pageData});
      } else {
        rally.sendPing("pageNav", pageData);
      }
    } else {
      console.log("Survey not completed");
    }
  }, {
    matchPatterns: domainsToMatchPatterns(domains)
  });
}

/**
 * This is clone of PageNav.js, but for sensitive sites
 * It strips the URL down to it's base for websites who's URL's might contain identifying info
 * i.e. facebook, twitter, etc
 *
 * Brian Chivers, 3/19/2021
 *
 * @module WebScience.Measurements.PageNavSensitive
 */


let initialized$8 = false;

/**
 * Start a sensitive page nav study.
 * @param {Object} options - A set of options for the study.
 * @param {string[]} [options.domains=[]] - The domains of interest for the study.
 * @param {Object} rally - The Mozilla Rally object initialized in background.js
 * @param {Boolean} is_dev_mode - Determines where to store data
 */
async function startMeasurement$3 ({
    domains = [],
    rally: rally,
    is_dev_mode: is_dev_mode
}) {

  // If already initialized, don't do it again
  if (initialized$8){
    return   
  }
  initialized$8 = true;

  //Handles onPageData callbacks
  onPageData.addListener(async (pageData) => {
    // Get survey status
    let surveyStatus  = await getSurveyStatus();
    // If Completed
    if (surveyStatus=="completed"){
      // PageID here is a unique key for local key-value storage
      let pageId = "WebScience.PageNav."+pageData.pageId.toString();
      // Grab userID and set it in data
      let userID = await getSurveyId();
      pageData['userID'] = ''+userID;
      
      //Trim "url" and "referrer" to their base URL
      trimmedURL = fullURLtoBaseURL(pageData.url);
      delete pageData.url;
      pageData['url'] = trimmedURL;

      trimmedReferrer = fullURLtoBaseURL(pageData.referrer);
      delete pageData.referrer;
      pageData['referrer'] = trimmedReferrer;
      
      //Set page type to match other collection modules
      pageData['type'] = 'WebScience.pageNav';
      // If dev mode, set data locally. Otherwise, ping rally.
      if (is_dev_mode){
        browser.storage.local.set({[pageId]:pageData});
      } else {
        rally.sendPing("pageNav", pageData);
      }
    } else {
      console.log("Survey not completed");
    }
  }, {
    matchPatterns: domainsToMatchPatterns(domains)
  });
}


/**
 * Function: fullURLtoBaseURL
 *  This function splits a URL and returns it's base
 * @param {string} urlString -a URL as a string
 * returns a string, the base URL
 */
function fullURLtoBaseURL(urlString){
  var pathArray = urlString.split( '/' );
  var protocol = pathArray[0];
  var host = pathArray[2];
  var url = protocol + '//' + host;

  return url
}

// domains.js -  Brian Chivers, 3/19/2021
// This file contains two domain lists to control collection
// destinationDomains - this is the main set to collect ads, articleContent, and pageNav info from
// sensitiveDomains -  This set contains domains that need to have their URL's cleared of sensitive info in pageNav.
//                     These domains are only used in "pageNavSensitive"

const sensitiveDomains = [
    "facebook.com",
    "twitter.com",
    "instagram.com"
];


const destinationDomains = [
"1011now.com",
"10news.com",
"10tv.com",
"11alive.com",
"12news.com",
"12newsnow.com",
"12up.com",
"13abc.com",
"13newsnow.com",
"13wham.com",
"13wmaz.com",
"14news.com",
"14wfie.com",
"22thepoint.com",
"247sports.com",
"247wallst.com",
"27east.com",
"2havefun.com",
"35wsee.com",
"397news.com",
"39online.com",
"3dprintingindustry.com",
"3newsnow.com",
"4029tv.com",
"4029tv.com",
"4029tv.com",
"417mag.com",
"47tv.com",
"48north.com",
"4bcaonline.com",
"4utah.com",
"58abc.com",
"5newsonline.com",
"5newsonline.com",
"6abc.com",
"6sqft.com",
"98online.com",
"9and10news.com",
"9and10news.com",
"9news.com",
"9news.com.au",
"a2indy.com",
"abajournal.com",
"abbington.com",
"abbington.com",
"abbington.com",
"abc-11.com",
"abc10.com",
"abc10up.com",
"abc11.com",
"abc12.com",
"abc13.com",
"abc15.com",
"abc18lima.com",
"abc19.tv",
"abc22.com",
"abc22now.com",
"abc22tv.com",
"abc23.com",
"abc24.com",
"abc25.com",
"abc26.com",
"abc27.com",
"abc30.com",
"abc3340.com",
"abc3340.com",
"abc3340.com",
"abc45.com",
"abc53.com",
"abc6.com",
"abc6onyourside.com",
"abc7.com",
"abc7amarillo.com",
"abc7amarillo.com",
"abc7chicago.com",
"abc7news.com",
"abc7ny.com",
"abcactionnews.com",
"abcnews.go.com",
"abcnews4.com",
"abcnewspapers.com",
"abcnewspapers.com",
"abcnewspapers.com",
"abcstlouis.com",
"aberdeennews.com",
"abilene-rc.com",
"aboutstark.com",
"abovethelaw.com",
"abqjournal.com",
"abqjournal.com",
"abqjournal.com",
"abqthemag.com",
"acadianagazette.net",
"accesspress.org",
"accountingtoday.com",
"accuweather.com",
"acfreepress.com",
"ack.net",
"aclj.org",
"aclu.org",
"actionnewsjax.com",
"actionnewsnow.com",
"acuoptimist.com",
"adage.com",
"adaherald.com",
"adaircountyfreepress.com",
"adairprogress.com",
"adairvoice.com",
"adamsc.com",
"addisonindependent.com",
"adelnews.com",
"adirondackdailyenterprise.com",
"adirondackexpress.com",
"adn.com",
"advances.sciencemag.org",
"advancetitan.com",
"advertiser-tribune.com",
"advertiserdemocrat.com",
"advertisergleam.com",
"advertisernewsnorth.com",
"advisor-chronicle.com",
"advocate-news.com",
"advocate-online.net",
"advocate.com",
"advocateanddemocrat.com",
"advocatepress.com",
"adweek.com",
"aei.org",
"aetn.org",
"aetn.org",
"aetn.org",
"aetn.org",
"af.reuters.com",
"afr.com",
"africanarguments.org",
"africanews.com",
"afro.com",
"agalert.com",
"agjournalonline.com",
"agri-pulse.com",
"ahwatukee.com",
"aikenstandard.com",
"ainonline.com",
"ainsworthnews.com",
"ainsworthnews.com",
"ainsworthnews.com",
"airforcetimes.com",
"ajc.com",
"ajc.com",
"ajnews.com",
"akbizmag.com",
"akron.com",
"akronhometowner.com",
"akronlegalnews.com",
"akronlife.com",
"akronnewsreporter.com",
"aksuperstation.com",
"al-monitor.com",
"al.com",
"al.com",
"al.com",
"alabama.travel",
"alabamamessenger.com",
"alabamanews.net",
"alachuatoday.com",
"alamedasun.com",
"alamogordonews.com",
"alamosanews.com",
"alaska broadcast television",
"alaska.edu",
"alaskaadventures.net",
"alaskajournal.com",
"alaskamagazine.com",
"alaskaone.org",
"alaskaoutdoorjournal.com",
"alaskastar.com",
"albanyenterprise.com",
"albanyherald.com",
"albawaba.com",
"albertleatribune.com",
"albianews.com",
"albionnewsonline.com",
"albionnewsonline.com",
"albionpleiad.com",
"alconareview.com",
"aldenadvance.com",
"aldenadvertisernews.com",
"aldianews.com",
"aledotimesrecord.com",
"alestlelive.com",
"aleteia.org",
"alexandriagazette.com",
"alexcityoutlook.com",
"alexcityoutlook.com",
"alextimes.com",
"algona.com",
"alianzanews.com",
"alibi.com",
"alicetx.com",
"aljazeera.com",
"allafrica.com",
"allegannews.com",
"allegannews.com",
"alleghanynews.com",
"alliancetimes.com",
"alligator.org",
"alligator.org",
"allkpop.com",
"allotsego.com",
"allure.com",
"almadentimes.com",
"almanacnews.com",
"alpineavalanche.com",
"alternet.org",
"altnewsban.com",
"altoonamirror.com",
"altpress.com",
"altustimes.com",
"alvareviewcourier.com",
"alvinsun.net",
"am-news.com",
"amarillo.com",
"amboynews.com",
"ameliamonitor.com",
"america.aljazeera.com",
"americamagazine.org",
"americanbanker.com",
"americanbazaaronline.com",
"americanpress.com",
"americanprogress.org",
"americanrivermessenger.com",
"americanthinker.com",
"americateve.com",
"americustimesrecorder.com",
"americusumterobserver.com",
"amestrib.com",
"amherstbee.com",
"amherstbulletin.com",
"amigonews.com",
"amish-heartland.com",
"amisun.com",
"amityvillerecord.com",
"amnesty.org",
"amny.com",
"anchoragepress.com",
"ancient-origins.net",
"andalusiastarnews.com",
"andersonian.com",
"andovertownsman.com",
"andrewscountynews.com",
"annandaleadvocate.com",
"annanews.com",
"annistonstar.com",
"annistonstar.com",
"annistonstar.com",
"annistonstar.com",
"annistonstar.com",
"annistonstar.com",
"ansonrecord.com",
"anthonyrepublicannews.com",
"antigodailyjournal.com",
"antonnews.com",
"antrimreview.net",
"aol.com",
"aopa.org",
"apalachtimes.com",
"apg-wi.com",
"apg-wi.com",
"apg-wi.com",
"apg-wi.com",
"apg-wi.com",
"apnews.com",
"app.com",
"appalachianhighways.com",
"appalachianhighways.com",
"appalachianhighways.com",
"appalachianhighways.com",
"appeal-democrat.com",
"appeal-democrat.com",
"appeal-democrat.com",
"appeal-democrat.com",
"applaudwomen.com",
"appleinsider.com",
"aptv.org",
"aptv.org",
"aptv.org",
"aptv.org",
"aptv.org",
"aptv.org",
"aptv.org",
"aptv.org",
"aptv.org",
"aquinas.edu",
"arabnews.com",
"aransaspassprogress.com",
"arapahoemirror.org",
"arbiteronline.com",
"arcadianews.com",
"archboldbuckeye.com",
"archdaily.com",
"archpaper.com",
"arcolarecordherald.com",
"ardeerhunting.com",
"ardmoreite.com",
"areanewsgroup.com",
"areanewsgroup.com",
"areanewsgroup.com",
"areawidenews.com",
"arenacindependent.com",
"argonautnews.com",
"argus-press.com",
"argusleader.com",
"argusleader.com",
"argusobserver.com",
"argusobserver.com",
"argussunonline.com",
"arizhwys.com",
"arizona.edu",
"arizonaguide.com",
"arkansas.com",
"arkansasbusiness.com",
"arkansasleader.com",
"arkansasonline.com",
"arkansasweekly.com",
"arklatexhomepage.com",
"arklatexhomepage.com",
"arklatexhomepage.com",
"arktimes.com",
"arkvalleynews.com",
"arlingtonconnection.com",
"arlingtonmnnews.com",
"arlingtontimes.com",
"armenianweekly.com",
"armytimes.com",
"arnoldne.org",
"aroundosceola.com",
"arstechnica.com",
"artesianews.com",
"artsy.net",
"artvoice.com",
"arvadapress.com",
"as-coa.org",
"asahi.com",
"ashleycountyledger.com",
"ashleynewsobserver.com",
"ashtongazette.com",
"asia.nikkei.com",
"asianjournal.com",
"asianjournalusa.com",
"asianreporter.com",
"aspendailynews.com",
"aspentimes.com",
"aspentimes.com",
"asu.edu",
"asuchronicle.com",
"asuherald.com",
"asurampage.com",
"atascaderonews.com",
"atchisonglobenow.com",
"athensmessenger.com",
"athensnews.com",
"athensreview.com",
"atholdailynews.com",
"atimes.com",
"atkinschronicle.com",
"atkinschronicle.com",
"atkinsongraphic.com",
"atlanta.net",
"atlantadailyworld.com",
"atlanticbreezes.com",
"atlasobscura.com",
"atmoreadvance.com",
"atmorenews.com",
"auburnjournal.com",
"auburnpub.com",
"augusta.com",
"augusta.com",
"augustafreepress.com",
"augustatimes.net",
"auroraadvertiser.net",
"auroraadvocate.com",
"auroranewsregister.com",
"aurorasentinel.com",
"austinchronicle.com",
"austindailyherald.com",
"austinweeklynews.com",
"autoblog.com",
"avclub.com",
"avenuenews.com",
"avidgolferonline.com",
"avoyellestoday.com",
"avpress.com",
"axios.com",
"azbilingual.com",
"azbw.com",
"azcapitoltimes.com",
"azcardinals.com",
"azcentral.com",
"azcentral.com",
"azcentral.com",
"azcentral.com",
"azdailysun.com",
"azfamily.com",
"azjournal.com",
"azpm.org",
"azpm.org",
"azteca43.tv",
"azteca48.com",
"aztecasd.com",
"aztv.com",
"aztv.com",
"babsonfreepress.com",
"babylonbeacon.com",
"backbaysun.com",
"backroadsnews.com",
"bacone.edu",
"badgerherald.com",
"bainbridgereview.com",
"bajoelsol.com",
"bakercityherald.com",
"bakercountypress.com",
"bakersfield.com",
"bakersfieldnow.com",
"bakersfieldnow.com",
"baldwincity.com",
"balita.com",
"balkaninsight.com",
"ballardnewstribune.com",
"ballstatedaily.com",
"baltimore.cbslocal.com",
"baltimorechronicle.com",
"baltimorepostexaminer.com",
"baltimoreravens.com",
"baltimoresun.com",
"baltimoresun.com",
"baltimoresun.com",
"baltimoresun.com",
"baltimoresun.com",
"baltimoresun.com",
"baltimoretimes-online.com",
"banderabulletin.com",
"bangkokpost.com",
"bangordailynews.com",
"bankerandtradesman.com",
"bankrate.com",
"banksnewstoday.com",
"bannergraphic.com",
"barbertonherald.com",
"barnesville.com",
"barnesvillerecordreview.net",
"barnstablepatriot.com",
"barrons.com",
"barrowcountynews.com",
"barrowjournal.com",
"bartonchronicle.com",
"baruchconnect.com",
"basehorinfo.com",
"bastropenterprise.com",
"batesvilleheraldtribune.com",
"battlecreekenquirer.com",
"baxleynewsbanner.com",
"baxterbulletin.com",
"bayareaobserver.com",
"baycitytribune.com",
"baylorlariat.com",
"baymillsnews.com",
"baysideoc.com",
"baystateparent.com",
"baytownsun.com",
"bayweekly.com",
"bbc.co.uk",
"bbherald.com",
"bccourier.com",
"bcdemocrat.com",
"bcdemocratonline.com",
"bcheights.com",
"bcn-news.com",
"bcrnews.com",
"bctelegraph.com",
"bctribune.com",
"bdemo.com",
"bdtonline.com",
"beachcarolina.com",
"beachcomber.com",
"beachesleader.com",
"beaconhilltimes.com",
"beacononlinenews.com",
"beaconseniornews.com",
"beardstownnewspapers.com",
"beatricedailysun.com",
"beaumontenterprise.com",
"beaumontenterprise.com",
"beaumontenterprise.com",
"beaumontenterprise.com",
"beaumontenterprise.com",
"beaumontenterprise.com",
"beauregarddailynews.net",
"beavercreeknewscurrent.com",
"beckershospitalreview.com",
"becon.tv",
"becon.tv",
"bedfordbulletin.com",
"bedfordtimes-press.com",
"beebenews.com",
"beenews.com",
"belfasttelegraph.co.uk",
"belgrade-news.com",
"belleplaineherald.com",
"bellevilleareaindependent.com",
"bellevuebusinessjournal.com",
"bellevueheraldleader.com",
"bellinghambusinessnews.com",
"bellinghamherald.com",
"belmondnews.com",
"beloitdailynews.com",
"bemidjipioneer.com",
"bemidjipioneer.com",
"bendbulletin.com",
"bendsource.com",
"benewsjournal.com",
"beniciaheraldonline.com",
"benningtonbanner.com",
"bensonnews-sun.com",
"bentonconews.com",
"bentoncountyenterprise.com",
"bentoncourier.com",
"bentoneveningnews.com",
"bentonspiritnews.com",
"berkeley.edu",
"berkeleybeacon.com",
"berkeleydailyplanet.com",
"berkeleyobserver.com",
"berkshireeagle.com",
"berkshirerecord.net",
"berlincitizen.com",
"berlindailysun.com",
"bernewitness.com",
"berthoudrecorder.com",
"berthoudsurveyor.com",
"bestofneworleans.com",
"bet.com",
"bethanyclipper.com",
"bethelcitizen.com",
"bethesdamagazine.com",
"betnahrain.org",
"betterlifetv.tv",
"betterlifetv.tv",
"betweenclasses.org",
"beverlyhillsview.org",
"beverlypress.com",
"beverlyreview.net",
"bgdailynews.com",
"bgnews.com",
"bhcourier.com",
"bhgnews.com",
"bhgnews.com",
"bhgnews.com",
"bhgnews.com",
"bhgnews.com",
"bhgnews.com",
"bhgnews.com",
"bhpioneer.com",
"bhweekly.com",
"bigbeargrizzly.net",
"bigbeargrizzly.net",
"bigbendsentinel.com",
"bigcountryhomepage.com",
"bigcountryhomepage.com",
"bigforkeagle.com",
"bighorncountynews.com",
"bigislandmagazine.com",
"bigsandynews.com",
"bigskypress.com",
"bigspringherald.com",
"bigthink.com",
"bigtimberpioneer.net",
"billboard.com",
"billingsgazette.com",
"billypenn.com",
"biloxi-diberville-press.com",
"binghamtonhomepage.com",
"binghamtonhomepage.com",
"biography.com",
"birminghamtimes.com",
"bismarcktribune.com",
"bisnow.com",
"bitcoinmagazine.com",
"bitterrootstar.com",
"bizjournals.com",
"bizlex.com",
"biztimes.com",
"biztimes.com",
"bizwest.com",
"bjournal.com",
"blabbermouth.net",
"blabtv.com",
"blackforestnews-co.com",
"blackmountainnews.com",
"blackvoicenews.com",
"blackwelljournaltribune.net",
"bladeempire.com",
"bladenjournal.com",
"blissfieldadvance.com",
"blogs.biomedcentral.com",
"blogs.plos.org",
"blogspot.com",
"blogspot.com",
"blogspot.com",
"bloodyelbow.com",
"bloomberg.com",
"bloombergquint.com",
"bloomeradvance.com",
"bloomingprairieonline.com",
"bloomingprairieonline.com",
"bloomingprairieonline.com",
"blountcountian.com",
"blscourierherald.com",
"bluemountaineagle.com",
"blueridgecountry.com",
"blueridgecountry.com",
"blueridgenow.com",
"bluffcountrynews.com",
"bluffcountrynews.com",
"bluffcountrynews.com",
"bluffcountrynews.com",
"bluffcountrynews.com",
"blufftonconnection.com",
"blufftontoday.com",
"blythevillecourier.com",
"blythewoodonline.com",
"bmj.com",
"bna.com",
"bnd.com",
"bnd.com",
"bnd.com",
"bocabeacon.com",
"bocaratontribune.com",
"bocojo.com",
"boernestar.com",
"bogalusadailynews.com",
"bohemian.com",
"boingboing.net",
"boiseweekly.com",
"bolivarcommercial.com",
"bolivarmonews.com",
"bondbuyer.com",
"bonnercountydailybee.com",
"bonnersferryherald.com",
"boonevilledemocrat.com",
"boonvilledailynews.com",
"boonvilleherald.com",
"boothbayregister.com",
"borgernewsherald.com",
"bossierpress.com",
"boston-online.com",
"boston.cbslocal.com",
"boston.com",
"bostonglobe.com",
"bostonherald.com",
"bostonirish.com",
"bostonmagazine.com",
"boulder-monitor.com",
"bouldercityreview.com",
"boulderweekly.com",
"bowdoinorient.com",
"bowienewsonline.com",
"bowlinggreentimes.com",
"boyleheightsbeat.com",
"boynegazette.com",
"bozemandailychronicle.com",
"bpnews.net",
"bradenton.com",
"bradfordera.com",
"bradystandard.com",
"brainerddispatch.com",
"bransontrilakesnews.com",
"bransonwebzine.com",
"braseltonnewstoday.com",
"breakingenergy.com",
"breakingnews.ie",
"breckenridgeamerican.com",
"breezecourier.com",
"breezejmu.org",
"breitbart.com",
"brenhambanner.com",
"brewtonstandard.com",
"bridgemi.com",
"bridgton.com",
"brightonparklife.com",
"brightonpittsfordpost.com",
"brightsidenews.com",
"bristolobserver.com",
"british-weekly.com",
"broadsideonline.com",
"bronx.news12.com",
"brookings.edu",
"brookingsregister.com",
"brooklyndaily.com",
"brooklyneagle.com",
"brooklynreporter.com",
"broomfieldenterprise.com",
"browardpalmbeach.com",
"brown-spectator.com",
"browncountydm.com",
"browndailyherald.com",
"brownfieldonline.com",
"brownsvilleherald.com",
"brownwoodtx.com",
"brproud.com",
"brproud.com",
"brproud.com",
"brproud.com",
"brunswickbeacon.com",
"brushnewstribune.com",
"bryancountynews.net",
"bryantdaily.com",
"bryantimes.com",
"bsu.edu",
"btimesherald.com",
"buchtelite.com",
"buckeyelakebeacon.net",
"buckscountycouriertimes.com",
"buckscountyherald.com",
"bucksportenterprise.com",
"bucyrustelegraphforum.com",
"buffalo.edu",
"buffalobulletin.com",
"buffalohealthyliving.com",
"buffalonews.com",
"buffalonews.com",
"buffaloreflex.com",
"buffaloriverfun.com",
"buffaloriverreview.com",
"buffalostate.edu",
"buglenewspapers.com",
"buglenewspapers.com",
"bulgariasega.com",
"bullardnews.com",
"bulletin-news.com",
"bulletinnewspapers.com",
"bulletinnewspapers.com",
"bulletinnewspapers.com",
"bulletintimesnews.com",
"bullheadcity-bee.com",
"bupipedream.com",
"burkeconnection.com",
"burlington-record.com",
"burlingtoncountytimes.com",
"burlingtonfreepress.com",
"burnetbulletin.com",
"busconews.com",
"business-standard.com",
"business2community.com",
"businessexaminer.com",
"businessinsider.com",
"businessinsider.in",
"businessinsurance.com",
"businessjournaldaily.com",
"businessobserverfl.com",
"businesspulse.com",
"businessreport.com",
"busjournal.com",
"bustle.com",
"butlercountytimesgazette.com",
"butlercountytribune.com",
"butlereagle.com",
"butteamerica.com",
"buvoice.com",
"bvtack.com",
"byronreviewonline.com",
"byu.edu",
"byuh.edu",
"byuiscroll.org",
"c-bstatesman.com",
"c-span.org",
"ca.news.yahoo.com",
"cabinet.com",
"cabinet.com",
"cabinet.com",
"cabinet.com",
"caboolenterprise.com",
"cadillacnews.com",
"cadizrecord.com",
"calaverasenterprise.com",
"caldwelljournal.com",
"caledonianrecord.com",
"calgaryherald.com",
"calgarysun.com",
"calhounchronicle.com",
"calhouncountyjournal.com",
"calhounnewsherald.com",
"californiademocrat.com",
"californiahealthline.org",
"callandpost.com",
"caller.com",
"calmarcourier.com",
"calmatters.org",
"calu.edu",
"calvin.edu",
"camaspostrecord.com",
"cambridgechron.com",
"camdenarknews.com",
"camdencc.edu",
"cameronherald.com",
"cameronpilot.com",
"campbellexpress.com",
"campcountynow.com",
"campustimes.org",
"canadafreepress.com",
"canal63.com",
"canarsiecourier.com",
"canberratimes.com.au",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"candgnews.com",
"cannoncourier.com",
"cannonfalls.com",
"canoncitydailyrecord.com",
"cantondailyledger.com",
"cantonrep.com",
"canyon-news.com",
"canyoncourier.com",
"canyonnews.com",
"cape-coral-daily-breeze.com",
"capecodchronicle.com",
"capecodlife.com",
"capecodtimes.com",
"capecourier.com",
"capegazette.com",
"capemaycountyherald.com",
"capemaytimes.com",
"capenews.net",
"capenews.net",
"capenews.net",
"capenews.net",
"capenews.net",
"capitalcityweekly.com",
"capitalfm.co.ke",
"capitalgazette.com",
"capitalgazette.com",
"capitalpress.com",
"capitalregionscw.com",
"capitolhilltimes.com",
"capitolweekly.net",
"capitolwire.com",
"capjournal.com",
"capradio.org",
"caprockcourier.com",
"captivacurrent.com",
"caravannews.com",
"carbonbrief.org",
"carboncountynews.com",
"carlislemosquito.org",
"carmichaeltimes.com",
"carmitimes.com",
"carnegieendowment.org",
"carolinacoastonline.com",
"carolinacorner.com",
"carolinascw.com",
"carriagetownenews.com",
"carrizospringsjavelin.com",
"carrollconews.com",
"carrollcountycomet.com",
"carrollcountytimes.com",
"carrollcountytimes.com",
"carrollcountytimes.com",
"carrollcountytimes.com",
"carrollspaper.com",
"carscoops.com",
"carthagecourier.com",
"carthagepress.com",
"carycitizen.com",
"cascadebusnews.com",
"cascademontana.com",
"case.edu",
"caseynews.net",
"cashmerevalleyrecord.com",
"casperjournal.com",
"cassville-democrat.com",
"castlerocknewspress.net",
"caswellmessenger.com",
"catholicculture.org",
"catholicnews.com",
"catholicnewsagency.com",
"catholicphilly.com",
"catskillmountainnews.com",
"cavalierdaily.com",
"cbc.ca",
"cbcmagazine.com",
"cblnews.com",
"cbn.com",
"cbr.com",
"cbs12.com",
"cbs17.com",
"cbs19.tv",
"cbs2iowa.com",
"cbs42.com",
"cbs46.com",
"cbs4indy.com",
"cbs4local.com",
"cbs58.com",
"cbs5az.com",
"cbs6albany.com",
"cbs7.com",
"cbs8.com",
"cbsatlanta.com",
"cbsaustin.com",
"cbslima.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbslocal.com",
"cbsnews.com",
"cbssports.com",
"cbstv3.com",
"ccchronicle.net",
"ccenterdispatch.com",
"ccheadliner.com",
"ccheadliner.com",
"cctimesdemocrat.com",
"cdapress.com",
"cdispatch.com",
"cecildaily.com",
"cedarkeybeacon.com",
"cedarrepublican.com",
"cedarspringspost.com",
"celebritynetworth.com",
"cen.acs.org",
"cenlanow.com",
"centennialcitizen.net",
"centerpostdispatch.com",
"centexproud.com",
"centexproud.com",
"centralcitynews.net",
"centralctcommunications.com",
"centralctcommunications.com",
"centralctcommunications.com",
"centraldakotanews.com",
"centralfloridafuture.com",
"centralillinoiscw.com",
"centraljersey.com",
"centraljersey.com",
"centraljersey.com",
"centraljersey.com",
"centraljersey.com",
"centralkitsapreporter.com",
"centralkynews.com",
"centralkynews.com",
"centralkynews.com",
"centralkynews.com",
"centralmaine.com",
"centralmaine.com",
"centralrecorder.com",
"centralwinews.com",
"centralwinews.com",
"centralwinews.com",
"centre-view.com",
"centredaily.com",
"ceoworld.biz",
"cerescourier.com",
"cetconnect.org",
"cfpmidweek.com",
"cfr.org",
"cgsentinel.com",
"ch4549.org",
"ch4549.org",
"chaffeecountytimes.com",
"chagrinvalleytoday.com",
"challismessenger.com",
"chamberlainsun.com",
"championnewspapers.com",
"channel3000.com",
"channel4.com",
"channelnewsasia.com",
"chanute.com",
"charitonleader.com",
"charkoosta.com",
"charlescitypress.com",
"charlestonbusiness.com",
"charlestoncitypaper.com",
"charlestonexpress.com",
"charlestownbridge.com",
"charlotte-sun.com",
"charlotteobserver.com",
"charltoncountyherald.com",
"chathamnewsandrecord.com",
"chattanoogacw.com",
"chattanoogan.com",
"chattanoogapulse.com",
"cheatsheet.com",
"cheboygannews.com",
"cheektowagabee.com",
"chelsearecord.com",
"chemistryworld.com",
"cheneyfreepress.com",
"cherokeescout.com",
"chesapeake-angler.com",
"cheshireherald.com",
"chesterfieldobserver.com",
"chestertelegraph.org",
"chestertontribune.com",
"chetekalert.com",
"chevychaser.com",
"chicago.cbslocal.com",
"chicago.suntimes.com",
"chicagobusiness.com",
"chicagocrusader.com",
"chicagocrusader.com",
"chicagodefender.com",
"chicagogolfreport.com",
"chicagolawbulletin.com",
"chicagomaroon.com",
"chicagoparent.com",
"chicagoreader.com",
"chicagoreporter.com",
"chicagosuburbanfamily.com",
"chicagotribune.com",
"chickashanews.com",
"chicoer.com",
"chiefexecutive.net",
"chieflandcitizen.com",
"chieftain.com",
"chilkatvalleynews.com",
"chillicothegazette.com",
"chillicothenews.com",
"chillicothetimesbulletin.com",
"chinookobserver.com",
"chipleybugle.com",
"chipleypaper.com",
"chipleypaper.com",
"chippewa.com",
"chippewa.com",
"chisagocountypress.com",
"choctawplaindealer.com",
"choctawsun.org",
"choteauacantha.com",
"christianheadlines.com",
"christianitytoday.com",
"christianpost.com",
"christiantoday.com",
"chron.com",
"chron.com",
"chron.com",
"chron.com",
"chron.com",
"chron.com",
"chron.com",
"chron.com",
"chronicle-express.com",
"chronicle-independent.com",
"chronicle-tribune.com",
"chronicle-tribune.com",
"chronicle-tribune.com",
"chronicle-tribune.com",
"chronicle-tribune.com",
"chronicle.com",
"chroniclelive.co.uk",
"chronicleonline.com",
"chroniclet.com",
"chronicletimes.com",
"chronline.com",
"cibolabeacon.com",
"cicourierinc.com",
"cidrap.umn.edu",
"cincinnati.com",
"cincinnatimagazine.com",
"cincymagazine.com",
"ciproud.com",
"ciproud.com",
"circlevilleherald.com",
"cisternyard.com",
"citizen-times.com",
"citizennewspapers.com",
"citizensvoice.com",
"citizentribune.com",
"citrusheightsmessenger.com",
"city-journal.org",
"citybeat.com",
"citylimits.org",
"citymetric.com",
"citynews.ca",
"citypages.com",
"citypaper.com",
"citysuntimes.com",
"cityviewmag.com",
"cityweekly.net",
"civilbeat.org",
"civileats.com",
"cjonline.com",
"cjr.org",
"cknj.com",
"clairemonttimes.com",
"clantonadvertiser.com",
"clarecountyreview.com",
"claremont-courier.com",
"claremoreprogress.com",
"clarencebee.com",
"clarendonlive.com",
"clarindaherald.com",
"clarioncallnews.com",
"clarionherald.info",
"clarionledger.com",
"clarionledger.com",
"clarionledger.com",
"clarionledger.com",
"clarionnewsonline.com",
"clarionpaper.com",
"clarkcountygazette.com",
"clarkecountydemocrat.com",
"clarkecountytrib.com",
"clarkstonnews.com",
"clatl.com",
"claxtonenterprise.com",
"claycity-times.com",
"claytodayonline.com",
"claytoncountyregister.com",
"clclt.com",
"cleantechnica.com",
"clearcreekcourant.com",
"clearwatergazette.com",
"clearwaterprogress.com",
"clearwatertribune.com",
"cleburnetimesreview.com",
"clermontnewsleader.com",
"clermontsun.com",
"cleveland.com",
"cleveland.com",
"cleveland.cbslocal.com/",
"clevelandbanner.com",
"clevelandcountyherald.com",
"clevelandmagazine.com",
"clevescene.com",
"click2houston.com",
"clickondetroit.com",
"clickorlando.com",
"cliftonadvocate.com",
"cliftonrecord.com",
"climatechangenews.com",
"clintonchronicle.com",
"clintoncountyleader.com",
"clintondailyjournal.com",
"clintondailynews.com",
"clintonherald.com",
"clintonnc.com",
"clintonnews.net",
"clipperpubco.com",
"clipperpubco.com",
"clipperpubco.com",
"cljnews.com",
"clreporter.com",
"cm-life.com",
"cnbc.com",
"cnet.com",
"cnjonline.com",
"cnn.com",
"cnn.com",
"cnsnews.com",
"cnycentral.com",
"cnycentral.com",
"cnycentral.com",
"cnyhomepage.com",
"cnyhomepage.com",
"cnyhomepage.com",
"cnyvision.com",
"coalvalleynews.com",
"coastalcourier.com",
"coastaljournal.com",
"coastalpoint.com",
"coastalview.com",
"coastreportonline.com",
"cobbonline.com",
"codyenterprise.com",
"coffeycountyonline.com",
"coindesk.com",
"cointelegraph.com",
"colbsent.com",
"colfaxrecord.com",
"collegian.com",
"collegian.psu.edu",
"collegianonline.com",
"collegiatetimes.com",
"colorado.net",
"coloradoan.com",
"coloradoan.com",
"coloradocountycitizen.com",
"coloradodaily.com",
"coloradoguide.com",
"coloradohometownweekly.com",
"coloradomagazineonline.com",
"coloradoserenity.com",
"coloradoskiauthority.com",
"coloradostatesman.com",
"columbiabasinherald.com",
"columbiabusinesstimes.com",
"columbiachronicle.com",
"columbiacountyobserver.com",
"columbiadailyherald.com",
"columbiagreenemedia.com",
"columbiamissourian.com",
"columbian.com",
"columbianprogress.com",
"columbiaspectator.com",
"columbiatribune.com",
"columbinecourier.com",
"columbusalive.com",
"columbusmonthly.com",
"columbusparent.com",
"columbuspost.com",
"columbustelegram.com",
"columbustelegram.com",
"wsavcw.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comettv.com",
"comicbook.com",
"commdiginews.com",
"commentarymagazine.com",
"commercecitysentinel.com",
"commercejournal.com",
"commercenewstoday.com",
"commercial-news.com",
"commercialappeal.com",
"commercialrecord.com",
"commondreams.org",
"commonwealthmagazine.org",
"commonwealthtimes.org",
"communityadvocate.com",
"communityedtv.org",
"communityedtv.org",
"communityedtv.org",
"communitynewscorp.com",
"communitynewspapergroup.com",
"communitynewspapergroup.com",
"communitynewspapergroup.com",
"communitynewspapergroup.com",
"communitynewspapers.com",
"communitynewspapers.com",
"communityvoiceks.com",
"complianceweek.com",
"computerworld.com.au",
"conchovalleyhomepage.com",
"conchovalleyhomepage.com",
"concordmonitor.com",
"concrete-herald.com",
"conejoscountycitizen.com",
"connecticut.com",
"connecticutmag.com",
"connectoregonwi.com",
"connectsavannah.com",
"connectstatesboro.com",
"conntact.com",
"conquistadornews.com",
"conservativereview.com",
"consumerreports.org",
"conwaydailysun.com",
"cookcountynews-herald.com",
"coopercrier.com",
"copamonitor.com",
"copiahcountycourier.com",
"copperarea.com",
"coppercountrynews.com",
"cordeledispatch.com",
"cordellbeacon.com",
"core-media.org",
"cornellsun.com",
"coronadonewsca.com",
"corpct.com",
"corridormessenger.com",
"corsicanadailysun.com",
"cortlandstandard.net",
"corydondemocrat.com",
"corydontimes.com",
"coshoctontribune.com",
"cosmopolitan.com",
"cottonwoodchronicle.com",
"cottonwoodholladayjournal.com",
"countable.us",
"counton2.com",
"countrymessenger.com",
"countyenews.com",
"countytimes.com",
"courant.com",
"courant.com",
"courier-herald.com",
"courier-journal.com",
"courier-tribune.com",
"courieranywhere.com",
"courierherald.com",
"courierjournal.net",
"couriermail.com.au",
"couriernews.com",
"courierpapers.com",
"courierpapers.com",
"courierpapers.com",
"courierpostonline.com",
"courierpress.com",
"courierstandardenterprise.com",
"couriertribuneonline.com",
"courthousenews.com",
"coveleaderpress.com",
"covingtonleader.com",
"covnews.com",
"coyote-tv.com",
"cozine.com",
"cp24.com",
"cpapracticeadvisor.com",
"cpcnewspapers.com",
"cpcnewspapers.com",
"cpioneer.com",
"cpr.org",
"cptv.org",
"cptv.org",
"cptv.org",
"cptv.org",
"cq9tv.com",
"craigdailypress.com",
"crainscleveland.com",
"crainsdetroit.com",
"crainsnewyork.com",
"crawfordcountyavalanche.com",
"creators.com",
"creightonian.com",
"creightonnews.com",
"crescent-news.com",
"crescotimes.com",
"crestedbuttenews.com",
"crestonnews.com",
"crestviewbulletin.com",
"croftonjournal.com",
"cronicasnewspaper.com",
"crookstontimes.com",
"crosscut.com",
"crossroadschronicle.com",
"crossroadsnews.com",
"crossville-chronicle.com",
"crowleypostsignal.com",
"crowrivermedia.com",
"crowrivermedia.com",
"crozetgazette.com",
"crunchyroll.com",
"cruxnow.com",
"csbj.com",
"csbsjurecord.com",
"csctimes.com",
"csindy.com",
"csmonitor.com",
"csrecord.net",
"csun.edu",
"csuohio.edu",
"ct.com",
"ctmirror.org",
"ctnewsonline.com",
"ctnewsonline.com",
"ctnonline.com",
"ctnow.com",
"ctnow.com",
"ctpost.com",
"ctpost.com",
"ctvn.org",
"ctvn.org",
"ctvnews.ca",
"cuchimes.com",
"cuestonian.com",
"cullmansense.com",
"cullmantimes.com",
"culturadoor.com",
"culvercityobserver.com",
"cumberland-advocate.com",
"cumberlandcountynewspaper.com",
"cumberlink.com",
"cunews.info",
"curbed.com",
"currentargus.com",
"currentincarmel.com",
"currentinfishers.com",
"currentinwestfield.com",
"currentnoblesville.com",
"currentzionsville.com",
"currycountyreporter.com",
"currypilot.com",
"custercountychief.com",
"cutbankpioneerpress.com",
"cutbankpioneerpress.com",
"cutbankpioneerpress.com",
"cutbankpioneerpress.com",
"cvbugle.com",
"cvrnews.com",
"cvt-news.com",
"cw12.com",
"cw14online.com",
"cw15kxvo.com",
"cw18tv.com",
"cw23.com",
"cw23tv.com",
"cw27.com",
"cw30.com",
"cw33.com",
"cw34.com",
"cw47columbia.com",
"cw56.com",
"cw58.tv",
"cw7michigan.com",
"cwalbany.com",
"cwarkansas.com",
"cwaze.com",
"cwbaltimore.com",
"cwcentralpa.com",
"cwcincinnati.com",
"cwcolumbus.com",
"cwlasvegas.com",
"cwlouisville.com",
"cwmontgomery.com",
"cwokc.com",
"cwreno.com",
"cwrichmond.tv",
"cwrochester.com",
"cwtreasurevalley.com",
"cwuobserver.com",
"cychron.com",
"cyclingutah.com",
"cynthianademocrat.com",
"daily-chronicle.com",
"daily-jeff.com",
"daily-journal.com",
"daily-times.com",
"daily-tribune.com",
"daily.jstor.org",
"daily49er.com",
"dailyadvance.com",
"dailyadvocate.com",
"dailyamerican.com",
"dailyastorian.com",
"dailyastorian.com",
"dailyastorian.com",
"dailybarometer.com",
"dailybreeze.com",
"dailybruin.com",
"dailybulletin.com",
"dailycal.org",
"dailycall.com",
"dailycaller.com",
"dailycamera.com",
"dailycampus.com",
"dailychiefunion.com",
"dailycollegian.com",
"dailycomet.com",
"dailycommercial.com",
"dailycorinthian.com",
"dailycourier.com",
"dailydem.com",
"dailydemocrat.com",
"dailydot.com",
"dailyegyptian.com",
"dailyemerald.com",
"dailyfreeman.com",
"dailyfreepress.com",
"dailygalaxy.com",
"dailygamecock.com",
"dailygate.com",
"dailygazette.com",
"dailyhelmsman.com",
"dailyherald.com",
"dailyillini.com",
"dailyindependent.com",
"dailyinterlake.com",
"dailyiowan.com",
"dailyiowegian.com",
"dailyitem.com",
"dailyjournal.com",
"dailyjournal.net",
"dailyjournalonline.com",
"dailyjournalonline.com",
"dailyjournalonline.com",
"dailyleader.com",
"dailyleaderextra.com",
"dailylobo.com",
"dailylocal.com",
"dailymail.co.uk",
"dailymaverick.co.za",
"dailynebraskan.com",
"dailynews.com",
"dailynexus.com",
"dailynorthwestern.com",
"dailyorange.com",
"dailypostathenian.com",
"dailypress.com",
"dailypress.net",
"dailyprincetonian.com",
"dailyprogress.com",
"dailyprogress.com",
"dailyprogress.com",
"dailyprogress.com",
"dailyprogress.com",
"dailyranger.com",
"dailyrecord.co.uk",
"dailyrecord.com",
"dailyrecord.us",
"dailyrecordnews.com",
"dailyregister.com",
"dailyreportonline.com",
"dailyrepublic.com",
"dailyrepublicannews.com",
"dailysentinel.com",
"dailysignal.com",
"dailystandard.com",
"dailystar.co.uk",
"dailystarjournal.com",
"dailysunnews.com",
"dailytargum.com",
"dailytarheel.com",
"dailytexanonline.com",
"dailytidings.com",
"dailytimes.com",
"dailytimesleader.com",
"dailytitan.com",
"dailytoreador.com",
"dailytrib.com",
"dailytribune.com",
"dailytribune.net",
"dailytrojan.com",
"dailyunion.com",
"dailyutahchronicle.com",
"dailywire.com",
"dailyworld.com",
"dailyyonder.com",
"dallasnews.com",
"dallasnews.com",
"dallasobserver.com",
"daltondailycitizen.com",
"danapointtimes.com",
"danbury-ia.com",
"dansvilleonline.com",
"dariennewsonline.com",
"darientimes.com",
"darnews.com",
"dartreview.com",
"dasselcokato.com",
"davidsonian.com",
"davisclipper.com",
"davisenterprise.com",
"dawn.com",
"dawsonnews.com",
"dawsonspringsprogress.com",
"daystar.com",
"daystar.com",
"daystar.com",
"daytonatimes.com",
"daytondailynews.com",
"daytonscw.com",
"dbrnews.com",
"dc.eater.com",
"dc50tv.com",
"dchieftain.com",
"dcourier.com",
"dcourier.com",
"dcpostgazette.com",
"dcpostgazette.com",
"dcspotlight.com",
"dcw50.com",
"dddnews.com",
"ddtonline.com",
"deadline.com",
"deadspin.com",
"deadwoodmagazine.com",
"decanter.com",
"decaturdaily.com",
"decaturdailydemocrat.com",
"decaturtribune.com",
"decorahnewspapers.com",
"defensenews.com",
"defenseone.com",
"delawareonline.com",
"delawarestatenews.net",
"delawaretoday.com",
"delcotimes.com",
"deleonfreepress.com",
"delgazette.com",
"delish.com",
"delmartimes.net",
"delmartimes.net",
"delmartimes.net",
"delmarvanow.com",
"delmarvanow.com",
"delmarvanow.com",
"delmarvanow.com",
"delnorteprospector.com",
"delphosherald.com",
"delraynewspaper.com",
"delraynewspaper.com",
"delrionewsherald.com",
"deltabroadcasting.org",
"deltacountyindependent.com",
"deltadiscovery.com",
"deltanewscitizen.com",
"deltanewsweb.com",
"deltawindonline.com",
"delvalrampages.com",
"demingheadlight.com",
"demo-mo.com",
"democracynow.org",
"democratandchronicle.com",
"democratandchronicle.com",
"democratargus.com",
"democratherald.com",
"democratnewspapers.com",
"democratnewspapers.com",
"democrattribune.com",
"demopolistimes.com",
"dennews.com",
"dentonorator.com",
"dentonrc.com",
"denver.cbslocal.com",
"denverbroncos.com",
"denveriaforum.com",
"denverpost.com",
"denverurbanspectrum.com",
"denvervoice.org",
"depauliaonline.com",
"dequeenbee.com",
"dequincynews.com",
"derbyinformer.com",
"derrynews.com",
"deseretnews.com",
"desertdispatch.com",
"desertnews.com",
"desertstarweekly.com",
"desertsun.com",
"desertsun.com",
"desertsun.com",
"desmoinesregister.com",
"desmoinesregister.com",
"desmoinesregister.com",
"desmoinesregister.com",
"desotoexplorer.com",
"desototimes.com",
"desplainesvalleynews.com",
"destructoid.com",
"detroitlions.com",
"detroitnews.com",
"devilslakejournal.com",
"dewitt-ee.com",
"dewittcountytoday.com",
"dewittobserver.com",
"dexerto.com",
"dglobe.com",
"dhakatribune.com",
"diaadianews.com",
"diamondbackonline.com",
"diariopalmbeach.com",
"dibollfreepress.com",
"dickinsoncountynews.com",
"digbatonrouge.com",
"digital.vpr.net",
"digitalburg.com",
"digitalinformationworld.com",
"digitaljournal.com",
"digitalspy.com",
"dillonheraldonline.com",
"dillontribune.com",
"dioceseoffresno.org",
"dioceseoffresno.org",
"disabilityscoop.com",
"discoveringhawaii.com",
"discovermagazine.com",
"discoverohio.com",
"dispatch.com",
"dispatchnews.com",
"diverseeducation.com",
"dixonpilot.com",
"djc.com",
"djournal.com",
"djournal.com",
"djournal.com",
"djournal.com",
"djournal.com",
"djournal.com",
"djournal.com",
"dl-online.com",
"dln.com",
"dmagazine.com",
"dnaindia.com",
"dnews.com",
"dnews.com",
"dnj.com",
"dnronline.com",
"doaneline.com",
"dodgecountynews.com",
"dodgeglobe.com",
"donaldsonvillechief.com",
"donalsonvillenews.com",
"doniphanherald.com",
"dosmundos.com",
"dothaneagle.com",
"dothaneagle.com",
"dothaneagle.com",
"dothaneagle.com",
"dothanfirst.com",
"dotnews.com",
"douglas-budget.com",
"douglascountyherald.com",
"douglascountynewspress.net",
"douglascountysentinel.com",
"douglasdispatch.com",
"douglasenterprise.net",
"dovebroadcasting.com",
"dovecreekpress.com",
"doverpost.com",
"downeast.com",
"downriversundaytimes.com",
"downtownexpress.com",
"dptribune.com",
"draperjournal.com",
"draugas.org",
"dreamhosters.com",
"dresdenenterprise.com",
"drewacorn.com",
"drurymirror.org",
"dtnpf.com",
"dublincitizen.com",
"duboiscountyherald.com",
"duclarion.com",
"dukechronicle.com",
"duluthbudgeteer.com",
"duluthnewstribune.com",
"duluthshippingnews.com",
"duncanbanner.com",
"dundalkeagle.com",
"dundeeonline.com",
"duquoin.com",
"durangoherald.com",
"durangotelegraph.com",
"durantdemocrat.com",
"durhamskywriter.com",
"dutchnews.nl",
"duxburyclipper.com",
"dvalnews.com",
"dyersvillecommercial.com",
"dysartreporter.com",
"dziennik.com",
"dziennikzwiazkowy.com",
"e360.yale.edu",
"eacourier.com",
"eaglelakeheadlight.com",
"eaglenewsonline.com",
"eaglenewsonline.com",
"eaglenewsonline.com",
"eaglenewsonline.com",
"eagleobserver.com",
"eagletimes.com",
"eagletribune.com",
"earlycountynews.com",
"eastaurorabee.com",
"eastbayexpress.com",
"eastbayri.com",
"eastbayri.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastbaytimes.com",
"eastcountygazette.com",
"eastcountymagazine.org",
"eastcountytimesonline.com",
"easterncoloradoplainsman.com",
"easternecho.com",
"easterneronline.com",
"easterngazette.com",
"easternprogress.com",
"easternshorepost.com",
"easthamptonstar.com",
"eastidahonews.com",
"eastietimes.com",
"eastoncourier.com",
"eastoregonian.com",
"eastpeoriatimescourier.com",
"eastsidereviewnews.com",
"easttennessean.com",
"easttennesseescw.com",
"easttexasmatters.com",
"easttexasmatters.com",
"easttexasmatters.com",
"eastvalleytribune.com",
"easyreadernews.com",
"eater.com",
"ebar.com",
"eccalifornian.com",
"echo-pilot.com",
"echopress.com",
"ecmpostreview.com",
"ecmpublishers.com",
"eco-business.com",
"ecollegetimes.com",
"ecommercebytes.com",
"economictimes.indiatimes.com",
"economist.com",
"ecori.org",
"ecowatch.com",
"ecprogress.com",
"edgefieldadvertiser.com",
"edgertonenterprise.com",
"edmondsun.com",
"edmontonjournal.com",
"edsurge.com",
"eenews.net",
"effinghamdailynews.com",
"effinghamherald.net",
"efortsmith.com",
"egcitizen.com",
"egpnews.com",
"ehextra.com",
"ehgazette.com",
"ehstoday.com",
"einnews.com",
"el-observador.com",
"el.com",
"elba-clipper.com",
"elbertcountynews.net",
"elberton.com",
"elcolombiano.net",
"elcruceronews.com",
"eldianewschicago.com",
"eldoradonews.com",
"eldoradospringsmo.com",
"electronicintifada.net",
"elgincourier.com",
"elginreview.com",
"elheraldonews.com",
"elhispanonews.com",
"elhispanonewspaper.com",
"elizabethton.com",
"elkharttruth.com",
"elkintribune.com",
"elkodaily.com",
"elkvalleytimes.com",
"ellatinoarkansas.com",
"ellatinoonline.com",
"elle.com",
"ellenvillejournal.com",
"ellicottvilletimes.com",
"elliscountypress.com",
"ellsworthamerican.com",
"ellwoodcityledger.com",
"elmundo.net",
"elmundoboston.com",
"elnuevogeorgia.com",
"elnuevoherald.com",
"elonpendulum.com",
"elpais.com",
"elpasoproud.com",
"elpasotimes.com",
"elplaneta.com",
"elpopularnews.com",
"elrenotribune.com",
"elreporterosf.com",
"elsberrydemocrat.com",
"elsoldesalinas.com",
"elsolnews.com",
"eltecolote.org",
"eltiempohispano.com",
"elvaq.com",
"elwoodpublishing.com",
"elwoodpublishing.com",
"elwoodpublishing.com",
"elyecho.com",
"elynews.com",
"emanuelcountylive.com",
"emissourian.com",
"emmetsburgnews.com",
"emmitsburg.com",
"emorywheel.com",
"emporiagazette.com",
"en.wiktionary.org",
"enca.com",
"endeavornews.com",
"enewscourier.com",
"englewoodherald.net",
"englewoodindependent.com",
"enidnews.com",
"ennisdailynews.com",
"enquirerdemocrat.com",
"enquirerjournal.com",
"enterprise-journal.com",
"enterprise-tocsin.com",
"enterprisecourier.com",
"enterprisenews.com",
"enterprisepub.com",
"enterprisepub.com",
"enterprisepub.com",
"enterprisepub.com",
"enterprisepub.com",
"entrepreneur.com",
"environmentalleader.com",
"eonline.com",
"epostpaper.com",
"eptrail.com",
"erienewsnow.com",
"erstarnews.com",
"erwinrecord.net",
"escalontimes.com",
"espn.com",
"esquire.com",
"essence.com",
"essexnewsdaily.com",
"esterrepublic.com",
"esthervilledailynews.com",
"esubulletin.com",
"etonline.com",
"eugeneweekly.com",
"eunicetoday.com",
"euobserver.com",
"euractiv.com",
"eurasianet.org",
"eurekaherald.com",
"eurekalert.org",
"eurekasentinel.com",
"eurekaspringsindependent.com",
"eurekatelevision.tv",
"eurekatelevision.tv",
"eurogamer.net",
"euronews.com",
"evangelinetoday.com",
"evangelinetoday.com",
"evanstonroundtable.com",
"eveningsun.com",
"eveningtribune.com",
"everettindependent.com",
"evergreentimes.com",
"everythinglubbock.com",
"everythinglubbock.com",
"evesun.com",
"ew.com",
"examiner-enterprise.com",
"examiner.net",
"examiner.org",
"examinerpublications.com",
"experiencekc.com",
"explorebigsky.com",
"exploreclarion.com",
"exploregeorgia.org",
"express.co.uk",
"extranews.net",
"extremetech.com",
"factcheck.org",
"fairborndailyherald.com",
"fairburyjournalnews.com",
"fairfaxconnection.com",
"fairfaxtimes.com",
"fairfield-sun.com",
"fairfieldbaynews.com",
"fairfieldcitizenonline.com",
"fairfieldmirror.com",
"fairfieldsuntimes.com",
"fairmontsentinel.com",
"fairobserver.com",
"faithwire.com",
"falloncountyextra.com",
"falmouthoutlook.com",
"family49.com",
"familyvisiontv.com",
"fanninfocusnewspaper.com",
"fanninsentinel.com",
"fansided.com",
"faribaultcountyregister.com",
"farmandranchguide.com",
"farmerpublishing.com",
"farmers-exchange.net",
"farmersvilletimes.com",
"farmingtonindependent.com",
"farmlandnews.com",
"farmvilleherald.com",
"fastcompany.com",
"fauquier.com",
"fayettecountyrecord.com",
"fayettenewspapers.com",
"fayobserver.com",
"fb.org",
"fbherald.com",
"fbnewsleader.com",
"fcjournal.net",
"fcnp.com",
"fdlreporter.com",
"federalwaymirror.com",
"feedstuffs.com",
"ferdinandnews.com",
"ferdinandnews.com",
"fergusfallsjournal.com",
"ferndaleenterprise.us",
"ferrum.edu",
"fgazette.com",
"fhsu.edu",
"fhtimes.com",
"fifa.com",
"filamvoicemaui.com",
"fillmorecountyjournal.com",
"fillmoregazette.com",
"filmschoolrejects.com",
"finance-commerce.com",
"finance.yahoo.com",
"financialexpress.com",
"fireisland-news.com",
"firesideguard.com",
"firstcoastnews.com",
"firstcoastnews.com",
"firstpost.com",
"firstthings.com",
"fishandgame.com",
"fishandgame.com",
"fishandgame.com",
"fit.edu",
"fivethirtyeight.com",
"flagpole.com",
"flathatnews.com",
"flatheadbeacon.com",
"flcourier.com",
"flippinonline.com",
"flkeysnews.com",
"flkeysnews.com",
"florala.net",
"florence-forestnews.com",
"florida.com",
"floridahomesandlifestyles.com",
"floridamagazine.com",
"floridapolitics.com",
"floridasportsman.com",
"floridatoday.com",
"floridatravellife.com",
"floridaweekly.com",
"floridaweekly.com",
"flovalleynews.com",
"floydcountytimes.com",
"fltimes.com",
"fluent-magazine.com",
"fluvannareview.com",
"flyergroup.com",
"flyernews.com",
"focusnewspaper.com",
"foghornnews.com",
"folioweekly.com",
"folsomtelegraph.com",
"folsomtelegraph.com",
"fontanaheraldnews.com",
"foodandwaterwatch.org",
"foodnavigator-usa.com",
"fool.com",
"foothillstrader.com",
"forbes.com",
"foreignpolicy.com",
"foresthillstimes.com",
"forestlaketimes.com",
"forestparkreview.com",
"forksforum.com",
"forsythnews.com",
"fortmeadeleader.com",
"fortmorgantimes.com",
"fortmyersbeach.news",
"fortmyersbeachtalk.com",
"fortstocktonpioneer.com",
"fortune.com",
"fortwaynereader.com",
"fortworthbusiness.com",
"forumfortnightly.com",
"forwardtimesonline.com",
"fosters.com",
"fosters.com",
"fourstateshomepage.com",
"fourstateshomepage.com",
"fourthestatenewspaper.com",
"fowlertribune.com",
"fox10phoenix.com",
"fox10phoenix.com",
"fox10tv.com",
"fox11az.com",
"fox11online.com",
"fox13news.com",
"fox13now.com",
"fox14.tv",
"fox14tv.com",
"fox16.com",
"fox17.com",
"fox17online.com",
"fox18wccb.com",
"fox19.com",
"fox2127.com",
"fox2127.com",
"fox21news.com",
"fox21news.com",
"fox23.com",
"fox23.com",
"fox23albany.com",
"fox23news.com",
"fox24.com",
"fox25fox48.com",
"fox25fox48.com",
"fox26houston.com",
"fox26houston.com",
"fox26medford.com",
"fox28.com",
"fox2840.com",
"fox28iowa.com",
"fox29.com",
"fox2detroit.com",
"fox2now.com",
"fox30jax.com",
"fox32chicago.com",
"fox32chicago.com",
"fox33.com",
"fox35.com",
"fox35orlando.com",
"fox38corpuschristi.com",
"fox39.com",
"fox40.com",
"fox40now.com",
"fox40now.com",
"fox41.com",
"fox43.com",
"fox43.com",
"fox43topeka.com",
"fox44.net",
"fox45.com",
"fox45now.com",
"fox46charlotte.com",
"fox47.com",
"fox47kxlt.com",
"fox47news.com",
"fox49.com",
"fox4beaumont.com",
"fox4florida.com",
"fox4kc.com",
"fox4news.com",
"fox4news.com",
"fox50.com",
"fox51.com",
"fox54.com",
"fox56.com",
"fox56.com",
"fox56.com",
"fox59.com",
"fox5atlanta.com",
"fox5dc.com",
"fox5dc.com",
"fox5ny.com",
"fox5sandiego.com",
"fox5vegas.com",
"fox61.com",
"fox66.tv",
"fox6now.com",
"fox7austin.com",
"fox8.com",
"fox8fox14.com",
"fox8fox14.com",
"fox8live.com",
"fox8tv.com",
"fox9.com",
"fox9.com",
"fox9now.com",
"foxbaltimore.com",
"foxbororeporter.com",
"foxbusiness.com",
"foxcarolina.com",
"foxcharleston.com",
"foxchattanooga.com",
"foxct.com",
"foxillinois.com",
"foxillinois.com",
"foxkansas.com",
"foxkansas.com",
"foxkansas.com",
"foxkansas.com",
"foxkansas.com",
"foxkrbk.com",
"foxla.com",
"foxla.com",
"foxlexington.com",
"foxlima.com",
"foxnebraska.com",
"foxnews.com",
"foxprovidence.com",
"foxreno.com",
"foxrichmond.com",
"foxrochester.com",
"foxsanantonio.com",
"foxsavannah.com",
"foxsports.com",
"foxtoledo.com",
"foxtricities.com",
"france24.com",
"frankenmuthnews.com",
"frankfortstation.com",
"franklincountycitizen.com",
"franklincountytimes.com",
"franklinfavorite.com",
"frankstoncitizen.com",
"franoi.com",
"frazeeforum.com",
"fredericknewspost.com",
"fredericksburg.com",
"fredericksburgstandard.com",
"free-times.com",
"freebeacon.com",
"freeburgtribune.com",
"freedom43tv.com",
"freemanjournal.net",
"freemansd.com",
"freep.com",
"freepresshouston.com",
"freepressnewspapers.com",
"freepressnewspapers.com",
"freepressnewspapers.com",
"freepressonline.com",
"freepressstandard.com",
"freestonecountytimesonline.com",
"freeweekly.com",
"fremonttribune.com",
"fremonttribune.com",
"fresnobee.com",
"fresnobee.com",
"frionaonline.com",
"frontdoorsnews.com",
"fronterasdesk.org",
"frontiersman.com",
"frostillustrated.com",
"fsgnews.com",
"fstribune.com",
"fsunews.com",
"fsutorch.com",
"ft.com",
"ftleavenworthlamp.com",
"ftluptonpress.com",
"fuldafreepress.net",
"fullcoll.edu",
"fullertonobserver.com",
"fultoncountynews.com",
"fultonsun.com",
"futurism.com",
"fvshopper.com",
"fwbusiness.com",
"fwweekly.com",
"gadcotimes.com",
"gadgets.ndtv.com",
"gadsdenmessenger.com",
"gadsdentimes.com",
"gaffneyledger.com",
"gainesville.com",
"gainesvilleregister.com",
"gainesvilletimes.com",
"gainformer.com",
"galaxgazette.com",
"galenagazette.com",
"galesburg.com",
"galioninquirer.com",
"gallatinnews.com",
"gallatinnorthmissourian.com",
"gallup.com",
"gallupindependent.com",
"galtheraldonline.com",
"galvanews.com",
"galvnews.com",
"gamesindustry.biz",
"gamespot.com",
"gantdaily.com",
"gao.gov",
"gardenandgun.com",
"gardenavalleynews.org",
"gardencountynews.com",
"garrardcentralrecord.com",
"gasconadecountyrepublican.com",
"gastongazette.com",
"gateschilipost.com",
"gatesvillemessenger.com",
"gatewaynews.org",
"gatewaytosedona.com",
"gazebogazette.com",
"gazette-tribune.com",
"gazette.com",
"gazettechicago.com",
"gazettenet.com",
"gazetterecord.com",
"gazettes.com",
"gazettetimes.com",
"gazettevandetroit.com",
"gazettextra.com",
"gbpnews.com",
"gbpnews.com",
"gbpnews.com",
"gbpnews.com",
"gbtribune.com",
"gcdailyworld.com",
"gcherald.com",
"gcnews.com",
"gcnewsgazette.com",
"gcrnews.com",
"gcsunade.com",
"gctelegram.com",
"gctimesonline.com",
"gearpatrol.com",
"geekwire.com",
"geeky-gadgets.com",
"geneseorepublic.com",
"geneticliteracyproject.org",
"georgetownvoice.com",
"georgiamagazine.com",
"georgiastatesignal.com",
"geringcitizen.com",
"getreligion.org",
"gettysburgtimes.com",
"gfucrescent.com",
"gilbertsunnews.com",
"gillettenewsrecord.com",
"gilmermirror.com",
"gilroydispatch.com",
"gizmodo.co.uk",
"gizmodo.com",
"gjsentinel.com",
"gladwinmi.com",
"glamour.com",
"glasgowcourier.com",
"glasgowdailytimes.com",
"glcitizen.com",
"glcitizen.com",
"glencoenews.com",
"glendaleregister.com",
"glendalestar.com",
"glennvillesentinel.net",
"glenrockind.com",
"glensfallschronicle.com",
"glenviewlantern.com",
"globalnews.ca",
"globaltimes.cn",
"globegazette.com",
"globegazette.com",
"globegazette.com",
"globegazette.com",
"gloucestertimes.com",
"gmdmedia.net",
"gmdmedia.net",
"gmdmedia.net",
"gmdmedia.net",
"gmnews.com",
"gmnews.com",
"gmnews.com",
"gmnews.com",
"gmnews.com",
"gmnews.com",
"gmnews.com",
"gmnews.com",
"gmtoday.com",
"goal.com",
"gocwtv.com",
"godanriver.com",
"godslearningchannel.com",
"goerie.com",
"gogolfarizona.com",
"gohighlanders.com",
"golaurens.com",
"goldendalesentinel.com",
"goldenstatenewspapers.com",
"goldenstatenewspapers.com",
"goldenstatenewspapers.com",
"goldentranscript.net",
"goldrivermessenger.com",
"goldthwaiteeagle.com",
"goleader.com",
"golfchicago.com",
"golfhouston.com",
"golfohio.com",
"golocalprov.com",
"gonzalesinquirer.com",
"gonzalestribune.com",
"good4utah.com",
"good4utah.com",
"goodtimes.sc",
"google.com",
"gopusa.com",
"gorevillegazette.com",
"gorhamtimes.com",
"gosanangelo.com",
"goshen.edu",
"goshennews.com",
"goskagit.com",
"gothamgazette.com",
"gothamist.com",
"gothenburgtimes.com",
"gotowncrier.com",
"goupstate.com",
"gouverneurtribunepress.com",
"gov.uk",
"governing.com",
"govexec.com",
"govtech.com",
"gowilkes.com",
"gpb.org",
"gpb.org",
"gpb.org",
"gpb.org",
"gpb.org",
"gpb.org",
"gpkmedia.com",
"grafwv.com",
"grahamleader.com",
"grahamstar.com",
"grandcanyonnews.com",
"grandcanyontourguide.com",
"grandforksherald.com",
"grandhaventribune.com",
"grandlakenews.com",
"grandrapidsmn.com",
"granitefallsnews.com",
"grantcountypress.com",
"grantherald.com",
"grantky.com",
"granvilleonline.com",
"grapevine.is",
"graysonrecord.com",
"graziadaily.co.uk",
"grbj.com",
"greatfallsconnection.com",
"greatfallstribune.com",
"greatneckrecord.com",
"greecepost.com",
"greeleytribune.com",
"greenbaypressgazette.com",
"greenbaypressgazette.com",
"greenbeltnewsreview.com",
"greenbiz.com",
"greenecountycommonwealth.com",
"greenecountyheraldonline.com",
"greeneprairiepress.com",
"greenepublishing.com",
"greenevillesun.com",
"greenfieldnews.com",
"greenfieldreporter.com",
"greenfieldvedette.com",
"greenfiretimes.com",
"greenpointstar.com",
"greensboro.com",
"greensboro.com",
"greensburgdailynews.com",
"greenvilleadvocate.com",
"greenvilleadvocate.com",
"greenvilleonline.com",
"greenvilleonline.com",
"greenwich-post.com",
"greenwichmag.com",
"greenwichtime.com",
"greenwooddemocrat.com",
"greercitizen.com",
"grenadastar.com",
"gridleyherald.com",
"griffindailynews.com",
"grist.org",
"grmag.com",
"groesbeckjournal.com",
"grossepointenews.com",
"grtimes.com",
"grundycountyherald.com",
"gsabusiness.com",
"gtrnews.com",
"gtweekly.com",
"guampdn.com",
"guardian.ng",
"guardianlv.com",
"guardonline.com",
"guernseygazette.com",
"gueydantoday.com",
"guilfordgazette.com",
"guilfordian.com",
"gulf-times.com",
"gulfbreezenews.com",
"gulfcoastnews.com",
"gulfcoastnewstoday.com",
"gulfcoastnewstoday.com",
"gulfcoastnewstoday.com",
"gulffishing.com",
"gulflive.com",
"gulfnews.com",
"gulfofmaine.org",
"gunnisontimes.com",
"guns.com",
"gustavus.edu",
"guttenbergpress.com",
"guymondailyherald.com",
"gvnews.com",
"gwcommonwealth.com",
"gwhatchet.com",
"gwinnettcitizen.com",
"gwinnettdailypost.com",
"gyphillpremiere.com",
"haaretz.com",
"haddonfieldsun.com",
"hakaimagazine.com",
"hamburgreporter.com",
"hamiltoncountyexpress.com",
"hamlethub.com",
"hamlethub.com",
"hamlethub.com",
"hamlethub.com",
"hamlethub.com",
"hamlethub.com",
"hamlethub.com",
"hamlethub.com",
"hamlethub.com",
"hamlineoracle.com",
"hammondstar.com",
"hammontongazette.com",
"hampshirereview.com",
"hamptonchronicle.com",
"hamptonroadsmessenger.com",
"hancockclarion.com",
"hanfordsentinel.com",
"hanfordsentinel.com",
"hanfordsentinel.com",
"hanmo.com",
"hannapub.com",
"hannapub.com",
"hannapub.com",
"hannibal.net",
"happyherald.com",
"harborcountry-news.com",
"harborlightnews.com",
"harlandaily.com",
"harlanonline.com",
"harrisburgmagazine.com",
"harrisondaily.com",
"harrisonnewsherald.com",
"harrodsburgherald.com",
"hartfordbusiness.com",
"hartfordcitynewstimes.com",
"hartfordinformer.com",
"hartington.net",
"hartselleenquirer.com",
"harvard.edu",
"harvardindependent.com",
"hastingsbanner.com",
"hastingsreminder.com",
"hastingsstargazette.com",
"hastingstribune.com",
"hattiesburgamerican.com",
"havasunews.com",
"havenews.com",
"havredailynews.com",
"hawaii-golf.com",
"hawaiinewsnow.com",
"hawaiireporter.com",
"hawaiiskindiver.com",
"hawaiistar.com",
"hawaiitribune-herald.com",
"hawleyherald.net",
"hawleyherald.net",
"haysfreepress.com",
"hazard-herald.com",
"hbnews.us",
"hbr.org",
"hccourier.com",
"hceronline.org",
"hcindependent.com",
"hclocal.com",
"hcn.org",
"hcnews.com",
"hcpress.com",
"hdnews.net",
"headlightherald.com",
"headlightnews.com",
"healthcitysun.com",
"heavy.com",
"hebronjournalregister.com",
"heightsobserver.org",
"helena-arkansas.com",
"helenair.com",
"hellogiggles.com",
"hendersondailynews.com",
"hendersondispatch.com",
"henriettapost.com",
"henryherald.com",
"herald-citizen.com",
"herald-dispatch.com",
"herald-journal.com",
"herald-leader.net",
"herald-progress.com",
"herald-publishing.com",
"herald-review.com",
"herald-zeitung.com",
"heraldadvocate.com",
"heraldandnews.com",
"heraldandtribune.com",
"heraldargus.com",
"heraldbanner.com",
"heraldbulletin.com",
"heraldbulletin.com",
"heraldchronicle.com",
"heraldcourier.com",
"heraldcourier.com",
"heralddemocrat.com",
"heraldextra.com",
"heraldguide.com",
"heraldledger.com",
"heraldmailmedia.com",
"heraldnet.com",
"heraldnews.com",
"heraldnewstn.com",
"heraldonline.com",
"heraldonline.com",
"heraldonline.com",
"heraldpalladium.com",
"heraldpub.com",
"heraldpublications.com",
"heraldpublications.com",
"heraldpublications.com",
"heraldpublications.com",
"heraldpublications.com",
"heraldpublications.com",
"heraldpublishingcompany.com",
"heraldpublishingcompany.com",
"heraldpublishingcompany.com",
"heraldpublishingcompany.com",
"heraldpubs.com",
"heraldstandard.com",
"heraldstandard.com",
"heraldstaronline.com",
"heraldsun.com",
"heraldsun.com.au",
"heraldtimesonline.com",
"heraldtribune.com",
"heritage.org",
"hermannadvertisercourier.com",
"hermistonherald.com",
"herndonconnection.com",
"herscherpilot.com",
"hesperianbeacononline.com",
"hesperiastar.com",
"hesstonrecord.com",
"hfherald.com",
"hgazette.com",
"hhcourier.com",
"hhjonline.com",
"hiawathaworldonline.com",
"hibbingmn.com",
"hickoryrecord.com",
"hicksvillenewstribune.com",
"hidesertstar.com",
"highlandernews.com",
"highlandnews.net",
"highlandscurrent.com",
"highlandsnews.com",
"highlandsranchherald.net",
"highplainsobserver.com",
"hightimbertimes.com",
"hillcountryherald.net",
"hillcountrynews.com",
"hillcountrypassport.com",
"hillcountrypassport.com",
"hillcountrypassport.com",
"hillsborofreepress.com",
"hillsdale.net",
"hillsdalecollegian.com",
"hinckleynews.com",
"hindustantimes.com",
"hippopress.com",
"hispanosnews.com",
"hjnews.com",
"hmbreview.com",
"hngnews.com",
"hobbsnews.com",
"hockessincommunitynews.com",
"hodinkee.com",
"hofstrachronicle.com",
"hoinews.com",
"hola-arkansas.com",
"holaciudad.com",
"holaciudad.com",
"hollandsentinel.com",
"hollywoodreporter.com",
"holmescountyherald.com",
"holtindependent.com",
"holtonrecorder.net",
"holtvilletribune.com",
"holyokeenterprise.com",
"homenewshere.com",
"homenewshere.com",
"homenewshere.com",
"homenewshere.com",
"homerhorizon.com",
"homerindex.com",
"homernews.com",
"homertribune.com",
"hometownargus.com",
"hometowndebate.com",
"hometownfocus.us",
"hometownjournal.biz",
"hometownjournal.org",
"hometownlife.com",
"hometownlife.com",
"hometownlife.com",
"hometownlife.com",
"hometownlife.com",
"hondoanvilherald.com",
"hongkongfp.com",
"hoodrivernews.com",
"hookem.com",
"hopestar.com",
"hopewellnews.com",
"hotair.com",
"hotnewhiphop.com",
"hotsr.com",
"houghtonlakeresorter.com",
"houmatoday.com",
"housingwire.com",
"houstonherald.com",
"houstonianonline.com",
"houstonpbs.org",
"houstonpress.com",
"howeenterprise.com",
"hoylosangeles.com",
"hpenews.com",
"hpenews.com",
"hpherald.com",
"hpj.com",
"hplandmark.com",
"hrw.org",
"hsjonline.org",
"hsuoracle.com",
"hsvvoice.com",
"htrnews.com",
"hubcityspokes.com",
"hudsonpg.net",
"hudsonreporter.com",
"hudsonreporter.com",
"hudsonreporter.com",
"hudsonreporter.com",
"hudsonreporter.com",
"hudsonreporter.com",
"hudsonreporter.com",
"hudsonreporter.com",
"hudsonstarobserver.com",
"hudsonvalleyone.com",
"hudsonvalleyone.com",
"huerfanojournal.com",
"huffingtonpost.ca",
"huffingtonpost.com",
"hugonews.com",
"hugotonhermes.com",
"hulltimes.com",
"humboldtbeacon.com",
"humboldtnews.com",
"hungryhorsenews.com",
"huntersdomain.com",
"hunterword.com",
"huntingtoncountytab.com",
"huntingtonnews.net",
"huntnewsnu.com",
"hurherald.com",
"hurriyetdailynews.com",
"hutchnews.com",
"hyperallergic.com",
"i24news.tv",
"iberianet.com",
"ibj.com",
"ibtimes.com",
"icl.coop",
"idacountycourier.com",
"idahobusinessreview.com",
"idahocountyfreepress.com",
"idahoednews.org",
"idahofallsmagazine.com",
"idahomagazine.com",
"idahopress.com",
"idahoptv.org",
"idahoptv.org",
"idahoptv.org",
"idahoseniornews.com",
"idahostatejournal.com",
"idahostatesman.com",
"idahoworld.com",
"identidadlatina.com",
"idfishnhunt.com",
"idsnews.com",
"idyllwildtowncrier.com",
"iecn.com",
"ifallsjournal.com",
"iflscience.com",
"ign.com",
"iheart.com",
"ijr.com",
"illinoistimes.com",
"ilovefc.com",
"impact360.ms",
"impactolatino.com",
"impactousa.com",
"imperialbeachnewsca.com",
"imperialrepublican.com",
"improper.com",
"inarkansas.com",
"inc.com",
"indeonline.com",
"independent.co.uk",
"independent.com",
"independent.ie",
"independentappeal.com",
"independentcollegian.com",
"independentmail.com",
"independentnews.com",
"independentri.com",
"independenttribune.com",
"independentvoice.com",
"indexjournal.com",
"indexnewspaper.com",
"indiabulletinusa.com",
"indiana.edu",
"indiana9.com",
"indianagazette.com",
"indianapolisrecorder.com",
"indianas4.com",
"indianas4.com",
"indianastatesman.com",
"indiancountrytodaymedianetwork.com",
"indianexpress.com",
"indiatoday.in",
"indiewire.com",
"indreg.com",
"indy100.com",
"indyeastend.com",
"indyrepnews.com",
"indystar.com",
"indyweek.com",
"inews.co.uk",
"informermg.com",
"informermg.com",
"informnny.com",
"inforum.com",
"ingrams.com",
"inhnews.com",
"inlander.com",
"inquisitr.com",
"inside-business.com",
"insideclimatenews.org",
"insidecolumbia.net",
"insideedition.com",
"insidehighered.com",
"insideindianabusiness.com",
"insidenorthernnevada.com",
"insidenorthernnevada.com",
"insidenorthernnevada.com",
"insidenova.com",
"insidephilanthropy.com",
"insider.foxnews.com",
"insiderlouisville.com",
"insidesources.com",
"insidethegames.biz",
"insidetucsonbusiness.com",
"insight.kellogg.northwestern.edu",
"insightnews.com",
"insurancejournal.com",
"intertownrecord.com",
"inthesetimes.com",
"intouchweekly.com",
"inverse.com",
"investing.com",
"investmentnews.com",
"investopedia.com",
"investorplace.com",
"investors.com",
"inweekly.net",
"inyoregister.com",
"iol.co.za",
"iolaregister.com",
"iontelevision.com",
"iontelevision.com",
"iontelevision.com",
"iontelevision.com",
"iontelevision.com",
"iontelevision.com",
"iosconews.com",
"iosconews.com",
"iowafarmertoday.com",
"iowan.com",
"iowastatedaily.com",
"ipsnews.net",
"iptv.org",
"iptv.org",
"iptv.org",
"iptv.org",
"iptv.org",
"iptv.org",
"iptv.org",
"irish-herald.com",
"irishamericannews.com",
"irishcentral.com",
"irishecho.com",
"irishexaminer.com",
"irishmirror.ie",
"irishnews.com",
"irishtimes.com",
"ironcountyminer.com",
"ironcountyreporter.com",
"irondequoitpost.com",
"ironmountaindailynews.com",
"irontontribune.com",
"isanti-chisagocountystar.com",
"isanticountynews.com",
"island-reporter.com",
"islandadvantages.com",
"islander.org",
"islandgazette.net",
"islandpacket.com",
"islandpacket.com",
"islandssounder.com",
"islipbulletin.net",
"israelnationalnews.com",
"israeltoday.co.il",
"issaquahpress.com",
"issuu.com",
"isthmus.com",
"isubengal.com",
"itemlive.com",
"itemonline.com",
"ithaca.com",
"ithacajournal.com",
"itpro.co.uk",
"itv.com",
"ivpressonline.com",
"ivpressonline.com",
"iwantabuzz.com",
"jackcentral.com",
"jacksboronewspapers.com",
"jacksonadvocateonline.com",
"jacksoncountypilot.com",
"jacksoncountytimes.net",
"jacksonfreepress.com",
"jacksonheraldtoday.com",
"jacksonholenet.com",
"jacksonnewspapers.com",
"jacksonprogress-argus.com",
"jacksonsun.com",
"jacksontimesvoice.com",
"jacksonville.com",
"jacksonvilleprogress.com",
"jalopnik.com",
"jalrecordonline.com",
"jamaica-gleaner.com",
"jamaicaobserver.com",
"jamaicaplaingazette.com",
"jamestownnews.com",
"jamestownpress.com",
"jamestownsun.com",
"japantimes.co.jp",
"japantoday.com",
"jasonvilleindependent.com",
"jaxdailyrecord.com",
"jcadvocate.com",
"jcfloridan.com",
"jcnews.com",
"jconline.com",
"jdledger.com",
"jdnews.com",
"jdsupra.com",
"jeffcountynews.com",
"jeffcountynews.com",
"jeffersonpost.com",
"jeffersonstarnews.com",
"jenningsdailynews.net",
"jerseycountyjournal.com",
"jesupcitizenherald.com",
"jewishaz.com",
"jewishexponent.com",
"jewishjournal.com",
"jewishobserver-la.com",
"jewishpresspinellas.com",
"jewishvoicesnj.org",
"jezebel.com",
"jg-tc.com",
"jg-tc.com",
"jhnewsandguide.com",
"jhunewsletter.com",
"joeswall.com",
"johnsoncitypress.com",
"johnstoniannews.com",
"johnstoniannews.com",
"jonesborosun.com",
"jonews.com",
"joplinglobe.com",
"joplinindependent.com",
"journal-advocate.com",
"journal-eureka.com",
"journal-news.com",
"journal-news.com",
"journal-news.net",
"journal-republican.com",
"journal-spectator.com",
"journal-times.com",
"journal-topics.com",
"journal-topics.com",
"journal-topics.com",
"journal-topics.com",
"journal-topics.com",
"journal-topics.com",
"journal-topics.com",
"journal-topics.com",
"journalaz.com",
"journalaz.com",
"journaldemocrat.com",
"journalenterprise.com",
"journalexpress.net",
"journalgazette.net",
"journalherald.com",
"journalinquirer.com",
"journalistsresource.org",
"journalmpls.com",
"journalnow.com",
"journalpatriot.com",
"journalpilot.com",
"journalrecord.com",
"journalreview.com",
"journalstandard.com",
"journalstar.com",
"journalstar.com",
"journaltimes.com",
"journaltrib.com",
"journaltribune.com",
"jpinews.com",
"jpinews.com",
"jpost.com",
"jrbj.biz",
"jsonline.com",
"jsu.edu",
"jta.org",
"jtacnews.com",
"julesburgadvocate.com",
"juliannews.com",
"junctioneagle.com",
"juneauempire.com",
"jurist.org",
"jwsim.org",
"k2radio.com",
"k2tv.com",
"k5thehometeam.com",
"kaaltv.com",
"kabb.com",
"kacv.org",
"kadn.com",
"kaef.tv",
"kail.tv",
"kait8.com",
"kake.com",
"kakm.org",
"kalb.com",
"kaleo.org",
"kalonanews.com",
"kalw.org",
"kamc28.com",
"kamr.com",
"kanerepublican.com",
"kansan.com",
"kansas.com",
"kansascity.com",
"kansascity.com",
"kansascw.com",
"kaplantoday.com",
"kapptv.com",
"kard.com",
"kare11.com",
"kark.com",
"kark.com",
"kasa.com",
"kasn.com",
"katc.com",
"katu.com",
"katv.com",
"katytimes.com",
"kaufmanherald.com",
"kauz.com",
"kayutv.com",
"kazq32.org",
"kbcbtv.com",
"kbdi.org",
"kbjr.com",
"kbnt.com",
"kbnztv.com",
"kboi2.com",
"kbsi23.com",
"kbsi23.com",
"kbtc.org",
"kbtx.com",
"kbvotv.com",
"kbyutv.org",
"kbzk.com",
"kcba.com",
"kcbd.com",
"kcby.com",
"kccall.com",
"kcchronicle.com",
"kcchronicle.com",
"kcci.com",
"kcci.com",
"kcentv.com",
"kcet.org",
"kchf.com",
"kchispanicnews.com",
"kckansan.com",
"kcnonline.com",
"kcostv.org",
"kcoy.com",
"kcpo.tv",
"kcpt.org",
"kcra.com",
"kcra.com",
"kcra.com",
"kcra.com",
"kcrg.com",
"kcsg.com",
"kcsm.org",
"kcso33.com",
"kcts.org",
"kctv5.com",
"kctv5.com",
"kcur.org",
"kcvufox20.com",
"kcvufox20.com",
"kdbc.com",
"kdcg.com",
"kdhnews.com",
"kdlt.com",
"kdlt.com",
"kdminer.com",
"kdoc.tv",
"kdrv.com",
"kdrv.com",
"kdsm.com",
"kdvr.com",
"kearneycourier.com",
"kearneyhub.com",
"kearnstimes.com",
"keci.com",
"kedt.org",
"keepmecurrent.com",
"keepmecurrent.com",
"keepmecurrent.com",
"keepmecurrent.com",
"keet.org",
"keizertimes.com",
"kejr40.com",
"keloland.com",
"keloland.com",
"kempercountymessenger.com",
"kendallcountynow.com",
"kenmarend.com",
"kenoshanews.com",
"kens5.com",
"kentonbee.com",
"kentontimes.com",
"kentucky.com",
"kentuckyexplorer.com",
"kentuckyliving.com",
"kentuckymonthly.com",
"kentuckynewera.com",
"kentuckytoday.com",
"kentwired.com",
"kenvtv.com",
"keotaeagle.com",
"keprtv.com",
"kera.org",
"keranews.org",
"kernrivercourier.com",
"kernvalleysun.com",
"kesq.com",
"kesq.com",
"ket.org",
"ket.org",
"ket.org",
"ket.org",
"ket.org",
"ket.org",
"ket.org",
"ket.org",
"ketc.org",
"ketchikandailynews.com",
"ketv.com",
"keyc.tv",
"keyetv.com",
"keypennews.com",
"keysnews.com",
"keyt.com",
"kezi.com",
"kfbb.com",
"kfbimy48.com",
"kfdm.com",
"kfdx.com",
"kff.org",
"kffxtv.com",
"kfor.com",
"kfor.com",
"kfoxtv.com",
"kfsm.com",
"kfvs12.com",
"kfxa.tv",
"kfxp.com",
"kfyrtv.com",
"kgan.com",
"kgbt4.com",
"kgcwtv.com",
"kgeb.net",
"kget.com",
"kgmb.com",
"kgns.tv",
"kgun9.com",
"kgw.com",
"kgwn.tv",
"khaleejtimes.com",
"khastv.com",
"khce.org",
"khmt.com",
"khn.org",
"khon.com",
"khon2.com",
"khou.com",
"khq.com",
"khqa.com",
"khsltv.com",
"kidspot.com.au",
"kiem-tv.com",
"kiiitv.com",
"kikutv.com",
"kilgorenewsherald.com",
"kimatv.com",
"kimt.com",
"king5.com",
"kingcityrustler.com",
"kingfisherpress.net",
"kingsmannews.com",
"kingstreenews.com",
"kingsvillerecord.com",
"kinston.com",
"kint.com",
"kionrightnow.com",
"kiowacountypress.net",
"kiowacountysignal.com",
"kiowanews.com",
"kiplinger.com",
"kirksvilledailyexpress.com",
"kirkwoodstudentmedia.com",
"kiro7.com",
"kirotv.com",
"kitsapsun.com",
"kitsapsun.com",
"kittsonarea.com",
"kitv.com",
"kivitv.com",
"kixe.org",
"kjct8.com",
"kjeotv.com",
"kjrh.com",
"kjtv34.com",
"kjwp2.com",
"kjzz.com",
"kjzz.org",
"kkfx.com",
"kkpm.tv",
"kkpm.tv",
"kkspc.com",
"kktv.com",
"klax-tv.com",
"klbk.com",
"klcs.org",
"kldotv.com",
"klewtv.com",
"klft21.com",
"klfy.com",
"kljb.com",
"klkntv.com",
"klmv68.com",
"klrn.org",
"klrt.com",
"klru.org",
"klsrtvfox.com",
"kltj.org",
"kltv.com",
"klvx.org",
"km3news.com",
"kmaland.com",
"kmbc.com",
"kmbc.com",
"kmbc.com",
"kmbh.org",
"kmci.com",
"kmex.com",
"kmir6.com",
"kmiz.com",
"kmos.org",
"kmov.com",
"kmph-kfre.com",
"kmph.com",
"kmph.com",
"kmsgtv.com",
"kmsgtv.com",
"kmsstv.com",
"kmtp.tv",
"kmtr.com",
"kmvt.com",
"kmys.tv",
"kmyu.tv",
"knct.org",
"kndo.com",
"kndu.com",
"knik.com",
"knlc.tv",
"knlj.tv",
"knmetv.org",
"knoe.com",
"knoxfocus.com",
"knoxnews.com",
"knoxnews.com",
"knoxvilledailysun.com",
"knpb.org",
"knvn.com",
"knwa.com",
"koaa.com",
"koamtv.com",
"koat.com",
"koat.com",
"kob.com",
"kobtv.com",
"koco.com",
"koco.com",
"kodiakdailymirror.com",
"kofytv.com",
"kohd.com",
"koin.com",
"kokomoherald.com",
"kokomoperspective.com",
"kokomotribune.com",
"kold.com",
"kolnkgin.com",
"kolotv.com",
"kolr10.com",
"komonews.com",
"komotv.com",
"komu.com",
"kongtv.com",
"koreatimes.com",
"kotatv.com",
"kotv.com",
"kpax.com",
"kpbs.org",
"kpbt.org",
"kpcnews.com",
"kpcnews.com",
"kpcnews.com",
"kpcnews.com",
"kpcnews.com",
"kpcnews.com",
"kpcnews.com",
"kpcnews.com",
"kpdx.com",
"kpho.com",
"kpic.com",
"kplctv.com",
"kplr11.com",
"kptm.com",
"kpts.org",
"kptv.com",
"kptv.com",
"kpvi.com",
"kpwb.com",
"kpxj21.com",
"kq2.com",
"kqdsfox21.tv",
"kqed.org",
"kqegtv.com",
"kqet.com",
"krbc.tv",
"krcb.org",
"krcg.com",
"krcgtv.com",
"krcrtv.com",
"krdo.com",
"krdotv.com",
"krem.com",
"krem.com",
"krextv.com",
"krgv.com",
"kristv.com",
"krma.org",
"kron.com",
"kron4.com",
"krqe.com",
"krqe.com",
"krqe.com",
"krtv.com",
"krwg-tv.org",
"ksat.com",
"ksawtv.com",
"ksbw.com",
"ksbw.com",
"ksby.com",
"kscetv.com",
"ksdk.com",
"ksee24.com",
"ksfy.com",
"kshb.com",
"kshv.com",
"ksl.com",
"ksla.com",
"ksmq.org",
"ksn.com",
"ksnblocal4.com",
"ksnt.com",
"ksnt.com",
"ksnt.com",
"kspr.com",
"ksps.org",
"kstatecollegian.com",
"kstc45.com",
"kstp.com",
"ksusentinel.com",
"ksvi.com",
"kswo.com",
"kswt.com",
"ktabtv.com",
"ktar.com",
"ktbs.com",
"ktbytv.com",
"ktca.org",
"kteh.org",
"kten.com",
"ktgf.com",
"kticradio.com",
"ktiv.com",
"ktka.tv",
"ktla.com",
"ktlm-tv.com",
"ktmd.com",
"ktmf.com",
"ktnv.com",
"ktnw.org",
"ktoo.org",
"ktre.com",
"ktsf.com",
"ktsm.com",
"kttc.com",
"kttu.com",
"kttw.com",
"kttz.org",
"ktul.com",
"ktuu.com",
"ktva.com",
"ktvb.com",
"ktvh.com",
"ktvh.com",
"ktvl.com",
"ktvm.com",
"ktvn.com",
"ktvo.com",
"ktvq.com",
"ktvu.com",
"ktvu.com",
"ktvz.com",
"ktvz.com",
"ktxs.com",
"kued.org",
"kued.org",
"kulr8.com",
"kunamelbanews.com",
"kunc.org",
"kunptv.com",
"kunptv.com",
"kunstv.com",
"kunwtv.com",
"kunwtv.com",
"kunwtv.com",
"kuow.org",
"kuqitv.com",
"kusi.com",
"kut.org",
"kutower.com",
"kutv.com",
"kuvi45.com",
"kval.com",
"kvcr.org",
"kveo.com",
"kvewtv.com",
"kvia.com",
"kvie.org",
"kvii.com",
"kviqcbs17.com",
"kvmdtv.com",
"kvoa.com",
"kvos.com",
"kvpt.org",
"kvue.com",
"kwbq.com",
"kwbq.com",
"kwbq.com",
"kwbu.org",
"kwce.tv",
"kwch.com",
"kwgn.com",
"kwhb.com",
"kwhe.com",
"kwhs.tv",
"kwhy22.com",
"kwqc.com",
"kwsu.org",
"kwtx.com",
"kwvtsalem.com",
"kwwl.com",
"kwyb.com",
"kx4.com",
"kxan.com",
"kxgn.com",
"kxii.com",
"kxlatv.com",
"kxlf.com",
"kxly.com",
"kxrm.com",
"kxtu.com",
"kxvo.com",
"kxxv.com",
"ky-news.com",
"ky-news.com",
"ky3.com",
"kyes.com",
"kyivpost.com",
"kykernel.com",
"kyma.com",
"kystandard.com",
"kyve.org",
"kzhb.us",
"kztv10.com",
"la-mag.com",
"la.eater.com",
"labornotes.org",
"labusinessjournal.com",
"lacampana.us",
"lacrossetribune.com",
"lacrossetribune.com",
"lacrossetribune.com",
"lacrossetribune.com",
"lacrossetribune.com",
"laderatimes.com",
"ladowntownnews.com",
"ladysmithnews.com",
"lafayettecountypress.com",
"lafayettestudentnews.com",
"lafollettepress.com",
"lagniappemobile.com",
"lagrandeobserver.com",
"lagrangenews.com",
"lagrangepublishing.com",
"lagunabeachindy.com",
"lahainanews.com",
"laist.com",
"lajollalight.com",
"lajuntatribunedemocrat.com",
"lakeandpine.com",
"lakechelanmirror.com",
"lakecityreporter.com",
"lakeconews.com",
"lakecountrysun.com",
"lakecountyexam.com",
"lakecountysuburbanlife.com",
"lakegazette.net",
"lakegenevanews.net",
"lakelandtimes.com",
"lakenewsonline.com",
"lakenormanpublications.com",
"lakenormanpublications.com",
"lakeoconeebreeze.net",
"lakeorionreview.com",
"lakeplacidnews.com",
"lakepowellchronicle.com",
"lakerpioneer.com",
"lakeviewareanewspaper.com",
"lakewoodobserver.com",
"lakewoodsentinel.com",
"lakinindependent.com",
"lakotacountrytimes.com",
"laloyolan.com",
"lamardemocrat.com",
"lamarleader.com",
"lamarledger.com",
"lamesacourier.com",
"lamonitor.com",
"lamorindaweekly.com",
"lampasasdispatchrecord.com",
"lancasterbee.com",
"lancastereaglegazette.com",
"lancasteronline.com",
"lanoticia.com",
"lansesentinel.com",
"lansingstatejournal.com",
"lansingstatejournal.com",
"lanthorn.com",
"laoferta.com",
"laopinion.com",
"laopinion.com",
"lapage.com",
"laprensa-sandiego.org",
"laprensadecolorado.com",
"laprensadelosangeles.com",
"laprensademn.com",
"laprensanwa.com",
"laprensasa.com",
"laprensatoledo.com",
"laprensatoledo.com",
"laramieboomerang.com",
"laraza.com",
"larchmontchronicle.com",
"lareviewofbooks.org",
"laruecountyherald.com",
"lasamericasnews.com",
"lascrucesbulletin.com",
"lasentinel.net",
"laserbuddy.com",
"lassennews.com",
"lasvegasnow.com",
"lasvegasoptic.com",
"lasvegassun.com",
"lasvegastribune.net",
"lasvegasweekly.com",
"lasvegasweekly.com",
"latimes.com",
"latinodetroit.com",
"laughlinentertainer.com",
"laughlinentertainer.com",
"laughspin.com",
"laurelmountainpost.com",
"laureloutlook.com",
"laurelstar.com",
"laurinburgexchange.com",
"laverne.edu",
"lavozarizona.com",
"lavozcolorado.com",
"lavozdeanza.com",
"lavozdebrazoriacounty.com",
"lavozhispanact.com",
"lavozlatinaonline.net",
"lavoznewspapers.com",
"law.com",
"lawattstimes.com",
"lawdailyrecord.com",
"laweekly.com",
"lawfareblog.com",
"lawndalenews.com",
"lawrencecountypress.com",
"lawrentian.com",
"lazocultural.com",
"lbbusinessjournal.com",
"lbccviking.com",
"lbpost.com",
"lccentral.com",
"lcnewschronicle.com",
"lcnme.com",
"lcsun-news.com",
"ldnews.com",
"leader-call.com",
"leader-news.com",
"leaderadvertiser.com",
"leaderandtimes.com",
"leaderherald.com",
"leaderlandnews.com",
"leadernewsroom.com",
"leaderpost.com",
"leaderpub.com",
"leaderpub.com",
"leaderpub.com",
"leadertelegram.com",
"leadertimes.com",
"leaderunion.com",
"leadvilleherald.com",
"leavenworthecho.com",
"leavenworthtimes.com",
"lebanon-express.com",
"lebanondailyrecord.com",
"lebanondemocrat.com",
"lebanonenterprise.com",
"ledger-dispatch.com",
"ledger-enquirer.com",
"ledgertranscript.com",
"leecountyledger.com",
"leelanaunews.com",
"leesvilledailyleader.com",
"legalnews.com",
"legalnews.com",
"legislativegazette.com",
"lehighacrescitizen.com",
"lehighacresgazette.us",
"lehighvalleylive.com",
"lehighvalleylive.com",
"lemarssentinel.com",
"lenconnect.com",
"lennoxnews.com",
"leominsterchamp.com",
"leoweekly.com",
"leroyny.com",
"lesoleildelafloride.com",
"levyjournalonline.com",
"lewisboroledger.com",
"lewiscountyherald.com",
"lewispnj.com",
"lewistonjournal.net",
"lewistownnews.com",
"lewistownsentinel.com",
"lewisvilletexan.com",
"lex18.com",
"lexch.com",
"lexingtonchronicle.com",
"lexingtonleader.com",
"lexology.com",
"lfadvertiser.com",
"lfpress.com",
"lhvc.com",
"libertychampion.com",
"libertycountytimes.net",
"libertyheadlines.com",
"libertylakesplash.com",
"libertytribune.com",
"libn.com",
"liboatingworld.com",
"licjournal.com",
"lifehacker.com",
"lifenews.com",
"lifesitenews.com",
"lifezette.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"liherald.com",
"likethedew.com",
"likethedew.com",
"lillienews.com",
"lillienews.com",
"lillienews.com",
"lillienews.com",
"limaohio.com",
"lincnews.com",
"lincolncountyjournal.com",
"lincolncourier.com",
"lincolndailynews.com",
"lincolnherald.net",
"lincolnjournalonline.com",
"lincolnnewsmessenger.com",
"lincolnsentinel.com",
"lincolntimesnews.com",
"lindalenews-times.com",
"lindenherald.com",
"lindenwood.edu",
"linfield.edu",
"lingleguide.com",
"linkvermont.com",
"linnbenton.edu",
"linncountyleader.com",
"linncountynews.net",
"lionessmagazine.com",
"lionsroar.com",
"lionsroarnews.com",
"littletonindependent.net",
"live5news.com",
"livelytimes.com",
"livemint.com",
"liverpoolecho.co.uk",
"livescience.com",
"livestockweekly.com",
"livingjackson.com",
"livingstondaily.com",
"livingstonenterprise.com",
"livingstonparishnews.com",
"ljworld.com",
"lmgraphic.com",
"lmtonline.com",
"lmtribune.com",
"lobservateur.com",
"local10.com",
"local12.com",
"local15tv.com",
"local21news.com",
"local6.com",
"localdvm.com",
"localheadlinenews.com",
"localkicks.com",
"localmaine.com",
"localmaine.com",
"localmemphis.com",
"localmemphis.com",
"localmemphis.com",
"localnews8.com",
"localnews8.com",
"localnewscomesfirst.com",
"localnewscomesfirst.com",
"localrag.com",
"localsyr.com",
"localtownpages.com",
"localtownpages.com",
"localtownpages.com",
"localtownpages.com",
"localtownpages.com",
"lockhaven.com",
"lockportjournal.com",
"lockportlegend.com",
"lodinews.com",
"loganbanner.com",
"logandaily.com",
"loganwoodbine.com",
"lohud.com",
"lohud.com",
"lombardian.info",
"lompocrecord.com",
"londonderrytimes.net",
"lonesomevalleynewspaper.com",
"lonetreevoice.net",
"long-weekends.com",
"longisland.news12.com",
"longislandadvance.net",
"longislandernews.com",
"longislandpress.com",
"lonokenews.net",
"lonokenews.net",
"lonokenews.net",
"loogooteetribune.com",
"losaltosonline.com",
"losangeles.cbslocal.com",
"losbanosenterprise.com",
"loscerritosnews.net",
"lostcreekguide.com",
"loudountimes.com",
"loudountimes.com",
"louisianapressjournal.com",
"louisianatravel.com",
"louisville.com",
"louisvillecardinal.com",
"lovellchronicle.com",
"lovelycitizen.com",
"lovingtonleaderonline.com",
"lovinlife.com",
"lowcountrytoday.com",
"lowellbuyersguide.com",
"lowellsun.com",
"lowellsun.com",
"lowndessignal.com",
"loyolamaroon.com",
"lpb.org",
"lpb.org",
"lpb.org",
"lpb.org",
"lpb.org",
"lpb.org",
"lpleader.com",
"lsjournal.com",
"lslonline.net",
"lsonews.com",
"lstribune.net",
"lsureveille.com",
"lubbockonline.com",
"lucernevalleyleader.com",
"lufkindailynews.com",
"luminanews.com",
"luskherald.com",
"lyndentribune.com",
"lynnjournal.com",
"lyoncountyreporter.com",
"lyonsrecorder.com",
"maannews.com",
"maceandcrown.com",
"machiasnews.com",
"mackinacislandnews.com",
"macleans.ca",
"macombdaily.com",
"macon.com",
"maconcountytimes.com",
"maconhomepress.com",
"macrumors.com",
"maderatribune.com",
"madison-press.com",
"madison.com",
"madison.com",
"madison.com",
"madisoncountyrecord.com",
"madisoncourier.com",
"madisoniannews.com",
"madisonjournaltoday.com",
"madisonparktimes.com",
"madisonscw.com",
"madriverunion.com",
"magic-city-news.com",
"magicvalley.com",
"magicvalleypublishing.com",
"magicvalleypublishing.com",
"magnatimes.com",
"magnoliabannernews.com",
"magnoliagazette.com",
"magnoliareporter.com",
"mahnomenpioneer.com",
"mahometdaily.com",
"mailtribune.com",
"mainebiz.biz",
"maineboats.com",
"mainecampus.com",
"maineguides.com",
"maineinsights.com",
"mainelymediallc.com",
"mainelymediallc.com",
"mainelymediallc.com",
"mainepublic.org",
"mainesportsman.com",
"mainichi.jp",
"mainlinemedianews.com",
"mainlinemedianews.com",
"mainstreetnews.com",
"maldennews.com",
"malibusurfsidenews.com",
"malibutimes.com",
"malvern-online.com",
"mammothtimes.com",
"manchestereveningnews.co.uk",
"manchesterjournal.com",
"manchesterpress.com",
"manchestertimes.com",
"manhassetpress.com",
"manhattanfreepress.com",
"manitoumessenger.com",
"mankatofreepress.com",
"mansfieldmirror.com",
"mansfieldnewsjournal.com",
"mansionglobal.com",
"mantecabulletin.com",
"maplelakemessenger.com",
"maplight.org",
"maqnews.com",
"marca.com",
"marcoislandflorida.com",
"margatenews.net",
"mariettatimes.com",
"marinecorpstimes.com",
"marinij.com",
"marinscope.com",
"marinscope.com",
"marinscope.com",
"marinscope.com",
"marinscope.com",
"marinscope.com",
"marion-press.com",
"marionrecord.com",
"marionstar.com",
"mariontoday.org",
"mariposagazette.com",
"marketplace.org",
"markets.businessinsider.com",
"marketwatch.com",
"marlboro.edu",
"marlindemocrat.com",
"marquettecountytribune.com",
"marquettewire.org",
"marshallindependent.com",
"marshallnews.com",
"marshallnewsmessenger.com",
"marshallparthenon.com",
"marshalltribune.com",
"marshfieldmail.com",
"marshfieldmail.com",
"marshfieldnewsherald.com",
"martinezgazette.com",
"martinsvillebulletin.com",
"martinsvilledaily.com",
"marysvilleglobe.com",
"marysvillejt.com",
"marysvilleonline.net",
"maryvilledailyforum.com",
"masoncountynews.com",
"massapequaobserver.com",
"massapequapost.com",
"masslive.com",
"masslive.com",
"mauinews.com",
"maysville-online.com",
"mbj.com",
"mcalesternews.com",
"mcall.com",
"mccallstarnews.com",
"mcclatchydc.com",
"mccookgazette.com",
"mcdonoughvoice.com",
"mcdowellnews.com",
"mcduffieprogress.com",
"mcgregormirror.com",
"mchnews.com",
"mcindependentnews.com",
"mcitizen.com",
"mckenzieriverreflectionsnewspaper.com",
"mckinleyvillepress.com",
"mcleanconnection.com",
"mcleansborotimesleader.com",
"mcnairycountynews.com",
"mcnewsonline.com",
"mcphersonsentinel.com",
"mcrecord.com",
"mcrecordonline.com",
"md-update.com",
"mdcoastdispatch.com",
"mdislander.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdjonline.com",
"mdwfp.com",
"meadecountymessenger.com",
"meadvilletribune.com",
"mebaneenterprise.com",
"mecktimes.com",
"mediaite.com",
"mediamatters.org",
"medina-gazette.com",
"medpagetoday.com",
"mega.tv",
"melrosebeacon.com",
"memphisdailynews.com",
"memphisdemocrat.com",
"memphisflyer.com",
"menastar.com",
"mendocinobeacon.com",
"mendonoma.com",
"mendotareporter.com",
"mercedcountytimes.net",
"mercedsunstar.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercurynews.com",
"mercyhurst.edu",
"meridianstar.com",
"merrillfotonews.com",
"mesalegend.com",
"mesquitelocalnews.com",
"messagemedia.co",
"messagemedia.co",
"messenger-index.com",
"messenger-inquirer.com",
"messenger-inquirer.com",
"messengernews.net",
"messengerpaper.com",
"messengerweekly.net",
"methowvalleynews.com",
"metnews.com",
"metro.co.uk",
"metro.us",
"metroactive.com",
"metromonthly.net",
"metropolisplanet.com",
"metrospirit.com",
"metrotimes.com",
"metroweekly.com",
"metrowestdailynews.com",
"metteradvertiser.com",
"metvmilwaukee.com",
"metvnetwork.com",
"mexicoledger.com",
"mg.co.za",
"mhealthintelligence.com",
"mhznetworks.org",
"mhznetworks.org",
"mi-reporter.com",
"miami.cbslocal.com",
"miami.com",
"miamiherald.com",
"miaminewtimes.com",
"miamiok.com",
"miamistudent.net",
"miamitimesonline.com",
"miamitodaynews.com",
"mibiz.com",
"mibiz.com",
"michigandaily.com",
"michigangolfer.com",
"michiganjournal.org",
"michiganmagazine.com",
"michiganradio.org",
"michigansthumb.com",
"michronicleonline.com",
"micromediapubs.com",
"micromediapubs.com",
"micromediapubs.com",
"micromediapubs.com",
"micromediapubs.com",
"micromediapubs.com",
"micromediapubs.com",
"midcountymemo.com",
"middleburycampus.com",
"middlesborodailynews.com",
"middletownpress.com",
"middletowntranscript.com",
"midhudsonnews.com",
"midiaenterprise.com",
"midksnews.com",
"midriversnewsmagazine.com",
"midtod.com",
"midvalleynews.com",
"midweek.com",
"midweeknews.com",
"midwestmessenger.com",
"midwestmessenger.com",
"mihomepaper.com",
"mihomepaper.com",
"mihomepaper.com",
"mihomepaper.com",
"mihomepaper.com",
"mihomepaper.com",
"mihomepaper.com",
"mihomepaper.com",
"mihomepaper.com",
"mihomepaper.com",
"milanmirrorexchange.com",
"milanmirrorexchange.com",
"milescitystar.com",
"milfordbeacon.com",
"milfordchronicle.net",
"milforddailynews.com",
"milfordliving.com",
"milfordmirror.com",
"military.com",
"militarypress.com",
"militarytimes.com",
"millburysutton.com",
"millelacscountytimes.com",
"millercountyliberal.com",
"miltontimes.com",
"milwaukeemagazine.com",
"mineolaamerican.com",
"mineralcountyminer.com",
"mineralwellsindex.com",
"minicassia.com",
"mininggazette.com",
"miningjournal.net",
"miniondas.com",
"minnesota.cbslocal.com",
"minnpost.com",
"minotdailynews.com",
"minutemannewscenter.com",
"minutemannewscenter.com",
"miramesanews.com",
"mirror.co.uk",
"misscotimes.com",
"missionhillgazette.com",
"missiontimescourier.com",
"missionvalleynews.com",
"missloumagazine.com",
"missoulian.com",
"missourifarmertoday.com",
"missourilife.com",
"mit.edu",
"mitchellnews.com",
"mitchellrepublic.com",
"mlb.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlive.com",
"mlssoccer.com",
"mlstargazette.com",
"mndaily.com",
"mnsun.com",
"mnsun.com",
"mnsun.com",
"mnsun.com",
"mnsun.com",
"mnsun.com",
"moabtimes.com",
"moberlymonitor.com",
"mobridgetribune.com",
"modbee.com",
"modernhealthcare.com",
"modocrecord.com",
"mohavedailynews.com",
"mohavedailynews.com",
"mohavedailynews.com",
"mokenamessenger.com",
"molokaiadvertiser-news.com",
"momenceprogressreporter.com",
"mondoviherald.net",
"monett-times.com",
"money.usnews.com",
"monitor.co.ug",
"monroebuzz.com",
"monroecountyappeal.com",
"monroecourier.com",
"monroejournal.com",
"monroelegacy.com",
"monroemonitor.com",
"monroenews.com",
"montanakaimin.com",
"montanamagazine.com",
"montanapbs.org",
"montanapbs.org",
"montecitojournal.net",
"montenews.com",
"montereycountyweekly.com",
"montereyherald.com",
"montevistajournal.com",
"montgomeryadvertiser.com",
"montgomeryadvertiser.com",
"montgomerycountynews.net",
"montgomeryherald.com",
"montgomerynews.com",
"monticelloexpress.com",
"monticellotimes.com",
"montmorencytribune.com",
"montrosepress.com",
"montynews.com",
"moodycountyenterprise.com",
"moorefieldexaminer.com",
"moorenews.com",
"mooresvilletribune.com",
"mor-tv.com",
"mor-tv.com",
"moraminn.com",
"morgancountycitizen.com",
"morganhilltimes.com",
"morganmessenger.com",
"morganton.com",
"morning-times.com",
"morningjournal.com",
"morningjournalnews.com",
"morningstar.com",
"morningsun.net",
"morrisherald-news.com",
"morrissuntribune.com",
"morrissuntribune.com",
"mortontimesnews.com",
"motherboard.vice.com",
"motherjones.com",
"motorsport.com",
"moultonadvertiser.com",
"moultrieobserver.com",
"moundcitynews.com",
"mountain-news.com",
"mountainadvocate.com",
"mountaineagle.com",
"mountainecho.com",
"mountainenterprise.com",
"mountainhomenews.com",
"mountainjackpot.com",
"mountainlake.org",
"mountainmessenger.com",
"mountainmonthly.com",
"mountainstatesman.com",
"mountaintimes.net",
"mountainviewstandard.com",
"mountainx.com",
"mountolivetribune.com",
"mountvernongazette.com",
"mountvernonnews.com",
"movillerecord.com",
"mpacorn.com",
"mpbn.net",
"mpbn.net",
"mpbn.net",
"mpbn.net",
"mpbonline.org",
"mpbonline.org",
"mpbonline.org",
"mpbonline.org",
"mpbonline.org",
"mpcourier.com",
"mpnnow.com",
"mprnews.org",
"mpt.org",
"mpt.org",
"mpt.org",
"mpt.org",
"mptv.org",
"mptv.org",
"mrt.com",
"ms-sportsman.com",
"msadvocate.com",
"msbusiness.com",
"msgr.com",
"msjnews.com",
"msnbc.com",
"mssu.edu",
"mt-peaks.com",
"mt-vernon.com",
"mtairynews.com",
"mtayrnews.com",
"mtcarmelregister.com",
"mtdemocrat.com",
"mteagle.com",
"mtexpress.com",
"mtjulietnews.com",
"mtlakenews.com",
"mtnlaurel.com",
"mtprogress.net",
"mtshastanews.com",
"mtstandard.com",
"mtsusidelines.com",
"mtulode.com",
"mucc.org",
"muhlenbergweekly.com",
"muleshoejournal.com",
"muncievoice.com",
"mundohispanico.com",
"mundohispanotn.com",
"murfreesboropost.com",
"murraycountynews.net",
"murrayjournal.com",
"murrayledger.com",
"muscatinejournal.com",
"mushing.com",
"muskogeephoenix.com",
"mustangdaily.net",
"muwspectator.com",
"mv-voice.com",
"mvlsun.com",
"mvprogress.com",
"mvtelegraph.com",
"mvtimes.com",
"my13palmsprings.com",
"my15wtcn.com",
"my15wtcn.com",
"my16.tv",
"my18.tv",
"my20denver.com",
"my21reno.com",
"my40.tv",
"my43.net",
"my43.tv",
"my48.tv",
"my50.tv",
"my59.tv",
"my64.tv",
"my65orlando.com",
"my9nj.com",
"myajc.com",
"myandrewsjournal.com",
"myarklamiss.com",
"myarklamiss.com",
"myatltv.com",
"mybiglake.com",
"mybrtv.com",
"mybulletinnewspaper.com",
"mycaldwellcounty.com",
"mycameronnews.com",
"mycarrollcountynews.com",
"mycarrollcountynews.com",
"mycbs4.com",
"mycbs4.com",
"mycentraljersey.com",
"mycentraljersey.com",
"mycentx.com",
"mycentx.com",
"mychamplainvalley.com",
"mychamplainvalley.com",
"mycitizensnews.com",
"mycitypaper.com",
"mydailyrecord.com",
"mydailyregister.com",
"mydailysentinel.com",
"mydailytribune.com",
"mydallaspost.com",
"mydaytondailynews.com",
"myeasternshoremd.com",
"myeasternshoremd.com",
"myeasternshoremd.com",
"myeasternshoremd.com",
"myeasternshoremd.com",
"myeldorado.net",
"myetv.org",
"myetv.org",
"myetv.org",
"myeyewitnessnews.com",
"myfox28columbus.com",
"myfox8.com",
"myfoxboston.com",
"myfoxmaine.com",
"myfoxmemphis.com",
"myfoxnepa.com",
"myfoxtallahassee.com",
"myfoxzone.com",
"mygtn.tv",
"myhighplains.com",
"myhighplains.com",
"myhighplains.com",
"myironcountynews.com",
"myjohnstownbreeze.com",
"myjournalcourier.com",
"myksmotv.com",
"mylaredofox.com",
"mylvtv.com",
"mymalonetelegram.com",
"mymcr.net",
"mymetmedia.com",
"mymichianatv.com",
"mymonticellonews.net",
"myndnow.com",
"myndnow.com",
"myndnow.com",
"myndnow.com",
"mynew32.com",
"myneworleans.com",
"mynews3.com",
"mynews4.com",
"mynorth.com",
"mynorthwest.com",
"mynptv.org",
"mynptv.org",
"mynptv.org",
"mynwapaper.com",
"mypanhandle.com",
"myphl17.com",
"myplainview.com",
"myprogressnews.com",
"myrdctv.com",
"myrecordjournal.com",
"myrtlebeachonline.com",
"mysanantonio.com",
"mysanantonio.com",
"mysanfordherald.com",
"mysoutex.com",
"mysoutex.com",
"myspace.com",
"mystateline.com",
"mystateline.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysuburbanlife.com",
"mysullivannews.com",
"mysuncoast.com",
"mytjnow.com",
"mytrimblenews.com",
"mytrpaper.com",
"mytv13.com",
"mytv30web.com",
"mytv4albany.com",
"mytv9web.com",
"mytvbaltimore.com",
"mytvbuffalo.com",
"mytvcharleston.com",
"mytvdayton.com",
"mytvmonterey.com",
"mytvrichmond.com",
"mytvwichita.com",
"mytvwichita.com",
"mytvz.com",
"mytwintiers.com",
"myvalleynews.com",
"myvictoriaonline.com",
"mywabashvalley.com",
"mywabashvalley.com",
"mywaynenews.com",
"mywdka.com",
"mywebtimes.com",
"mywindsornow.com",
"mywnynews.com",
"mywnynews.com",
"naacp.org",
"nadignewspapers.com",
"napavalleyregister.com",
"napavalleyregister.com",
"napavalleyregister.com",
"napavalleyregister.com",
"naplesnews.com",
"naplesnews.com",
"naplesnews.com",
"naplesnews.com",
"nashobavalleyvoice.com",
"nashobavalleyvoice.com",
"nashobavalleyvoice.com",
"nashobavalleyvoice.com",
"nashobavalleyvoice.com",
"nashobavalleyvoice.com",
"nashobavalleyvoice.com",
"nashuatelegraph.com",
"nashvillecitypaper.com",
"nashvillescene.com",
"nassaucountyrecord.com",
"nassauweekly.com",
"natchezdemocrat.com",
"natchitochestimes.com",
"nation.co.ke",
"nationalgeographic.com",
"nationalinterest.org",
"nationalobserver.com",
"nationalpost.com",
"nationalreview.com",
"natlawreview.com",
"nature.com",
"navajotimes.com",
"navarrepress.com",
"navasotaexaminer.com",
"navigatorjournal.com",
"navytimes.com",
"nba.com",
"nbc-2.com",
"nbc11news.com",
"nbc12.com",
"nbc15.com",
"nbc16.com",
"nbc24.com",
"nbc25news.com",
"nbc29.com",
"nbc33tv.com",
"nbc4i.com",
"nbcactionnews.com",
"nbcbayarea.com",
"nbcbayarea.com",
"nbcboston.com",
"nbcchicago.com",
"nbcchicago.com",
"nbcconnecticut.com",
"nbcdfw.com",
"nbcforwyoming.com",
"nbcforwyoming.com",
"nbclosangeles.com",
"nbcmiami.com",
"nbcmontana.com",
"nbcnews.com",
"nbcnewyork.com",
"nbcnewyork.com",
"nbcphiladelphia.com",
"nbcphiladelphia.com",
"nbcsandiego.com",
"nbcsports.com",
"nbcwashington.com",
"ncadvertiser.com",
"ncatregister.com",
"ncbtv.org",
"ncbtv.org",
"nccu.edu",
"ncnewsonline.com",
"ncnewspress.com",
"ncppub.com",
"ncppub.com",
"ncppub.com",
"ncregister.com",
"ncronline.org",
"ncse.com",
"ndhorizons.com",
"ndsmcobserver.com",
"ndsuspectrum.com",
"ndtv.com",
"ne.gov",
"neagle.com",
"nebraska.tv",
"nebraskaland.com",
"nebraskalife.com",
"necn.com",
"nelighnews.com",
"nelighnews.com",
"nemonews.net",
"neoshodailynews.com",
"neotrib.com",
"neowin.net",
"nephitimesnews.com",
"nepr.net",
"nerdwallet.com",
"neshobademocrat.com",
"nesn.com",
"nevadaappeal.com",
"nevadaappeal.com",
"nevadadailymail.com",
"nevadaiowajournal.com",
"nevadamagazine.com",
"nevadaweb.com",
"newarkadvocate.com",
"newarkadvocate.com",
"newarkadvocate.com",
"newarkpostonline.com",
"newbernsj.com",
"newberry-news.com",
"newberryobserver.com",
"newburyportnews.com",
"newcanaandarienmag.com",
"newcanaannewsonline.com",
"newcarlislenews.net",
"newcomerstown-news.com",
"newhampshire.com",
"newhampshire.com",
"newhampshire.com",
"newhampshirelakesandmountains.com",
"newhampshirelakesandmountains.com",
"newhampshirelakesandmountains.com",
"newhampshirelakesandmountains.com",
"newhampshirelakesandmountains.com",
"newhampshirelakesandmountains.com",
"newhampshirelakesandmountains.com",
"newhavenbanner.com",
"newhavenindependent.org",
"newindianexpress.com",
"newjersey.news12.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newjerseyhills.com",
"newkirkherald.com",
"newlenoxpatriot.com",
"newmexicoscw.tv",
"newmilfordspectrum.com",
"neworleans.com",
"neworleanscitybusiness.com",
"newpittsburghcourieronline.com",
"newportindependent.com",
"newportnewstimes.com",
"newportplaintalk.com",
"newportri.com",
"newportri.com",
"newpraguetimes.com",
"newpraguetimes.com",
"newrepublic.com",
"newrichlandstar.com",
"news-banner.com",
"news-bulletin.com",
"news-daily.com",
"news-examiner.net",
"news-expressky.com",
"news-gazette.com",
"news-gazette.com",
"news-graphic.com",
"news-herald.com",
"news-herald.net",
"news-journal.com",
"news-journal.net",
"news-journalonline.com",
"news-leader.com",
"news-medical.net",
"news-press.com",
"news-press.com",
"news-reporter.com",
"news-sentinel.com",
"news-shield.com",
"news-star.com",
"news.abs-cbn.com",
"news.artnet.com",
"news.bitcoin.com",
"news.com.au",
"news.sky.com",
"news.stanford.edu",
"news.stlpublicradio.org",
"news.wjct.org",
"news.yale.edu",
"news10.com",
"news18.com",
"news24.com",
"news3lv.com",
"news4jax.com",
"news4jax.com",
"news4sanantonio.com",
"news4u.me",
"news5cleveland.com",
"news9.com",
"news9.com",
"newsadvance.com",
"newsaegis.com",
"newsandcitizen.com",
"newsandsentinel.com",
"newsandtribune.com",
"newsargus.com",
"newsblade.com",
"newsbtc.com",
"newsbug.info",
"newsbug.info",
"newsbug.info",
"newsbug.info",
"newsbug.info",
"newsbug.info",
"newsbug.info",
"newsbug.info",
"newsbug.info",
"newsbusters.org",
"newschannel10.com",
"newschannel5.com",
"newschannel5.tv",
"newschannel9.com",
"newschief.com",
"newscientist.com",
"newsday.com",
"newsdemocrat.com",
"newsdemocratleader.com",
"newser.com",
"newsexaminer.com",
"newsfixnow.com",
"newsherald.com",
"newsitem.com",
"newsleader.com",
"newsminer.com",
"newsmirror.net",
"newsnet5.com",
"newsobserver.com",
"newsobserver.com",
"newsobserver.com",
"newsobserver.com",
"newsobserver.com",
"newsobserver.com",
"newsoforange.com",
"newsok.com",
"newsok.com",
"oklahoman.com",
"newson6.com",
"newsouthernview.com",
"newspress.com",
"newspressnow.com",
"newsprogress.com",
"newsrecord.org",
"newsregister.com",
"newsrepublican.com",
"newsreview.com",
"newsreview.com",
"newsreview.com",
"newssun.com",
"newstalk.com",
"newstalkflorida.com",
"newstimes.com",
"newstimes.com",
"newstopicnews.com",
"newstrib.com",
"newstribune.com",
"newstribune.info",
"newsvirginian.com",
"newswatch50.com",
"newswatchman.com",
"newsweek.com",
"newswest9.com",
"newsy.com",
"newtimesslo.com",
"newtoncitizen.com",
"newtoncountyappeal.com",
"newtoncountytimes.com",
"newtondailynews.com",
"newtownbee.com",
"newuniversity.org",
"newvision.co.ug",
"newyork.cbslocal.com",
"newyorkbeacon.net",
"newyorker.com",
"newyorkupstate.com",
"nextbigfuture.com",
"nextgov.com",
"nfl.com",
"nganews.com",
"nhbr.com",
"nhgazette.com",
"nhmagazine.com",
"nhonews.com",
"nhpr.org",
"nhregister.com",
"nhtrib.com",
"nhtrib.com",
"niagara-gazette.com",
"niagarafallsreporter.com",
"nichibei.org",
"niemanlab.org",
"nikkeiwest.com",
"nineronline.com",
"niobraratribune.com",
"nique.net",
"nj.com",
"nj.com",
"nj.com",
"nj.com",
"nj.com",
"nj.com",
"nj.com",
"nj1015.com",
"njbiz.com",
"njdiningguide.net",
"njeffersonnews.com",
"njherald.com",
"njitvector.com",
"njmonthly.com",
"njspotlight.com",
"njtoday.net",
"njtvonline.org",
"njtvonline.org",
"njtvonline.org",
"njtvonline.org",
"nkctribune.com",
"nmmagazine.com",
"nmpoliticalreport.com",
"nmsantos.com",
"nmspress.com",
"nmtribune.com",
"nmu.edu",
"nnbw.com",
"nnu.edu",
"noblescountyreview.net",
"nodawaynews.com",
"nogalesinternational.com",
"nogalesinternational.com",
"nola.com",
"nola.com",
"nola38.com",
"nomenugget.net",
"nonpareilonline.com",
"nonprofitquarterly.org",
"noozhawk.com",
"noreast.com",
"norfolkdailynews.com",
"normalite.com",
"normantranscript.com",
"northbaybusinessjournal.com",
"northbaytv.com",
"northbendeagle.com",
"northbrooktower.com",
"northcoastcitizen.com",
"northcoastjournal.com",
"northcoastnow.com",
"northcountrynow.com",
"northcountrypublicradio.org",
"northcountymessenger.com",
"northeastnews.net",
"northendregionalreview.com",
"northern-iowan.org",
"northernexpress.com",
"northernnhmagazine.com",
"northernstar.info",
"northernsunprint.com",
"northernwoodlands.org",
"northfortynews.com",
"northfortynews.com",
"northfulton.com",
"northglenn-thorntonsentinel.com",
"northhawaiinews.com",
"northiowatimes.com",
"northjersey.com",
"northjersey.com",
"northjersey.com",
"northjersey.com",
"northjersey.com",
"northjersey.com",
"northjersey.com",
"northjersey.com",
"northkitsapherald.com",
"northlandsnewscenter.com",
"northlibertyleader.com",
"northplattebulletin.com",
"northscottpress.com",
"northshorenews.com",
"northsidesun.com",
"northstate.news",
"northvalleymagazine.com",
"northwestgeorgianews.com",
"northwestgeorgianews.com",
"northwestgeorgianews.com",
"northwestgeorgianews.com",
"northwestgeorgianews.com",
"northwestgeorgianews.com",
"northwestsignal.net",
"norwalkreflector.com",
"norwichbulletin.com",
"norwoodnews.org",
"noticiasya.com",
"nowthisnews.com",
"npr.org",
"nptelegraph.com",
"nraila.org",
"nrcolumbus.com",
"nrdc.org",
"nrn.com",
"nrtoday.com",
"nsjonline.com",
"nst.com.my",
"nsunews.com",
"ntdaily.com",
"ntxe-news.com",
"nuevosiglo.com",
"nuggetnews.com",
"nujournal.com",
"numbersusa.com",
"nutfieldnews.net",
"nuvo.net",
"nvdaily.com",
"nwahomepage.com",
"nwahomepage.com",
"nwaonline.com",
"nwaonline.com",
"nwaonline.com",
"nwaonline.com",
"nwaonline.com",
"nwaonline.com",
"nwaonline.com",
"nwasianweekly.com",
"nwestiowa.com",
"nwfdailynews.com",
"nwherald.com",
"nwitimes.com",
"nwkansas.com",
"nwkansas.com",
"nwmissourinews.com",
"nwnews.com",
"nwobserver.com",
"nwtntoday.com",
"nwtntoday.com",
"ny.curbed.com",
"ny.eater.com",
"nyartsmagazine.com",
"nyc.gov",
"nydailynews.com",
"nydailynews.com",
"nymag.com",
"nypost.com",
"nysun.com",
"nytimes.com",
"nytimes.com",
"nyunews.com",
"nzherald.co.nz",
"oakdaleleader.com",
"oakhillgazette.com",
"oaklandlakefront.com",
"oaklandpostonline.com",
"oakpark.com",
"oakridger.com",
"oann.com",
"oanow.com",
"oaoa.com",
"oberlinreview.org",
"obsentinel.com",
"observer-me.com",
"observer-reporter.com",
"observer-review.com",
"observer.com",
"observernewsonline.com",
"observertoday.com",
"ocala.com",
"ocbj.com",
"occrp.org",
"oceancitytoday.net",
"och-c.com",
"ocolly.com",
"oconeeenterprise.com",
"ocregister.com",
"ocregister.com",
"ocsentinel.com",
"ocstandard.com",
"octimesnews.com",
"ocweekly.com",
"oeta.tv",
"oeta.tv",
"oeta.tv",
"offbeat.com",
"ogd.com",
"ogdenreporter.com",
"oglecountylife.com",
"oglecountynews.com",
"ohio.com",
"ohiolodgingrentals.com",
"ohiomagazine.com",
"ohiou.edu",
"ohwy.com",
"ojaivalleynews.com",
"ojornal.com",
"okawvilletimes.com",
"okcfox.com",
"okiemagazine.com",
"oklahomacity.com",
"oklahomaconstitution.com",
"oklahomatoday.com",
"okoboji.com",
"okwomanmag.com",
"oldhamera.com",
"oleantimesherald.com",
"olneydailymail.com",
"olneyenterprise.com",
"omaha.com",
"omaha.com",
"omaha.com",
"omaha.com",
"omaha.com",
"omahadailyrecord.com",
"omakchronicle.com",
"omnibusonline.com",
"oneidadispatch.com",
"onenewsnow.com",
"onlineathens.com",
"onlinechester.com",
"onlinemadison.com",
"ontonagonherald.com",
"opb.org",
"opb.org",
"opb.org",
"opb.org",
"opendemocracy.net",
"opensecrets.org",
"opensocietyfoundations.org",
"opinion-tribune.com",
"oppnewsonline.com",
"oppnewsonline.com",
"oppnewsonline.com",
"opprairie.com",
"optv.org",
"optv.org",
"orangeandblueobserver.com",
"orangeleader.com",
"orangevalesun.com",
"orbike.com",
"orchardparkbee.com",
"oregonbusiness.com",
"oregoncitylink.com",
"oregonherald.com",
"oregonlive.com",
"oregonlive.com",
"oregonmag.com",
"oriongazette.com",
"orlando-times.com",
"orlandosentinel.com",
"orlandosentinel.com",
"orlandoweekly.com",
"orovillemr.com",
"ortonvilleindependent.com",
"osceolaiowa.com",
"osceolatimes.com",
"oskaloosa.com",
"ospreyobserver.com",
"osrecord.com",
"osv.com",
"oswegocountynewsnow.com",
"oswegocountytoday.com",
"oswegonews.com",
"oswegonews.com",
"oswegonews.com",
"oswegonews.com",
"otdowntown.com",
"othellooutlook.com",
"otmj.com",
"ottawacitizen.com",
"ottawaherald.com",
"ottumwacourier.com",
"oudaily.com",
"our-hometown.com",
"ouraynews.com",
"ourcommunityfocus.com",
"ourdavie.com",
"ourherald.com",
"ourmaine.com",
"ourmidland.com",
"ourquadcities.com",
"ourquadcities.com",
"ourquadcities.com",
"ourtown.com",
"ourtownnews.com",
"ourtownnewsonline.com",
"ourtownny.com",
"ourvalley.org",
"ourvalley.org",
"ourvalley.org",
"ourvalley.org",
"ourvalley.org",
"ourvalley.org",
"ourvalleyvoice.com",
"out.com",
"outlooknewspapers.com",
"outsideonline.com",
"outsports.com",
"overtoncountynews.com",
"owentonnewsherald.com",
"owossoindependent.com",
"owutranscript.com",
"owyheepublishing.com",
"oxfordeagle.com",
"oxfordleader.com",
"oysterbayguardian.com",
"ozarkcountytimes.com",
"ozarksfirst.com",
"ozarksfirst.com",
"ozarksfirst.com",
"ozarksfn.com",
"ozarkspectator.net",
"ozaukeepress.com",
"ozonastockman.com",
"ozy.com",
"pacbiztimes.com",
"pacepress.org",
"pacesettingtimesonline.com",
"pacific-times.com",
"pacificatribune.com",
"pacificcitizen.org",
"pacificcitysun.com",
"pacificpublishingcompany.com",
"pacificsun.com",
"packet-media.com",
"paducahsun.com",
"page1publications.com",
"page1publications.com",
"page1publications.com",
"page1publications.com",
"pagelandprogressive.com",
"pagesix.com",
"pagosadailypost.com",
"pagosasun.com",
"pahomepage.com",
"pahomepage.com",
"paintsvilleherald.com",
"paisano-online.com",
"pajiba.com",
"pal-item.com",
"palaciosbeacon.com",
"paladinnews.com",
"palatkadailynews.com",
"palestineherald.com",
"palipost.com",
"palmbeachdailynews.com",
"palmbeachpost.com",
"palmbeachpost.com",
"palmswestmonthly.com",
"palmyra-spectator.com",
"paloaltoonline.com",
"pamplinmedia.com",
"pamplinmedia.com",
"pamplinmedia.com",
"pamplinmedia.com",
"pamplinmedia.com",
"pamplinmedia.com",
"pamplinmedia.com",
"panamericanonline.com",
"pananewsonline.net",
"panews.com",
"panolian.com",
"pantagraph.com",
"pantagraph.com",
"pantagraph.com",
"paolinewsrepublican.com",
"papermag.com",
"parade.com",
"paradisepost.com",
"paragoulddailypress.com",
"paramountjournal.org",
"paris-express.com",
"parisbeacon.com",
"parispi.net",
"parkcitiespeople.com",
"parkecountysentinel.com",
"parkerchronicle.net",
"parkerpioneer.net",
"parkrapidsenterprise.com",
"parkrecord.com",
"parkstonadvance.com",
"parkstonadvance.com",
"parsippanyfocus.com",
"parsonssun.com",
"pasadenaindependent.com",
"pasadenajournal.com",
"pasadenanow.com",
"pasadenastarnews.com",
"pasadenaweekly.com",
"pasoroblesdailynews.com",
"pasoroblespress.com",
"pastemagazine.com",
"patch.com",
"patheos.com",
"patriotledger.com",
"paulickreport.com",
"paulsvalleydailydemocrat.com",
"pawneerepublican.com",
"pawpawcourierleader.com",
"pawtuckettimes.com",
"paxtonrecord.net",
"paynesvillearea.com",
"paysonroundup.com",
"pbcommercial.com",
"pbcommercial.com",
"pbn.com",
"pbshawaii.org",
"pbssocal.org",
"pburgmail.com",
"pcccourier.com",
"pcgazette.com",
"pcherald.com",
"pcnr.com",
"pcrecordtimes.com",
"pctribune.com",
"pctribune.com",
"pdclarion.com",
"pe.com",
"peabodykansas.com",
"peacemakeronline.com",
"peachtreetv.com",
"pecos.net",
"pekintimes.com",
"pelhamplus.com",
"pelicanrapidspress.com",
"pellachronicle.com",
"penderthurston.com",
"pendletontimespost.com",
"pendoreillerivervalley.com",
"penfieldpost.com",
"peninsulaclarion.com",
"peninsulaclarion.com",
"peninsuladailynews.com",
"pennlive.com",
"pennlive.com",
"pennlive.com",
"people.com",
"peoplesdefender.com",
"peoriatimes.com",
"pepperdine-graphic.com",
"perhamfocus.com",
"permianbasin360.com",
"perrycountynews.com",
"perrysburg.com",
"perryvillenews.com",
"personcountylife.com",
"peshtigotimes.net",
"petaluma360.com",
"petersburgpilot.com",
"petoskeynews.com",
"petoskeynews.com",
"petoskeynews.com",
"petroleumnews.com",
"pewglobal.org",
"pewresearch.org",
"pewtrusts.org",
"pfaw.org",
"pghcitypaper.com",
"pgpost.com",
"pharostribune.com",
"philadelphia.cbslocal.com",
"philadelphia.cbslocal.com",
"philadelphiaweekly.com",
"philanthropy.com",
"philippinenews.com",
"phillipscountynews.com",
"phillipscountyreview.com",
"philly.com",
"philly.com",
"philly.com",
"phillymag.com",
"phillytrib.com",
"phillyvoice.com",
"philstar.com",
"phl17.com",
"phoenixnewtimes.com",
"phoenixvillenews.com",
"phtimes.net",
"phys.org",
"physicsworld.com",
"piadvance.com",
"piadvance.com",
"picayune-times.com",
"picayuneitem.com",
"pickensprogressonline.com",
"pickenssentinel.com",
"piercecountyherald.com",
"pikecountygeorgia.com",
"pikepress.com",
"pikespeaknewspapers.com",
"pikespeaknewspapers.com",
"pilotonline.com",
"pilotonline.com",
"pineandlakes.com",
"pinecitymn.com",
"pineconearchive.com",
"pineconepresscitizen.com",
"pineisland-eagle.com",
"pineislandnews.com",
"pinejournal.com",
"pinerivertimes.com",
"pinstripealley.com",
"piolog.com",
"piolog.com",
"pioneer-review.com",
"pioneer.org",
"pioneergroup.com",
"pioneergroup.com",
"pioneergroup.com",
"pioneergroup.com",
"pioneergroup.com",
"pioneernews.net",
"pioneertimes-me.com",
"pioneertimeswpu.com",
"pioneertribune.com",
"pipestonestar.com",
"pitch.com",
"pitchfork.com",
"pittnews.com",
"pittsfieldgazette.com",
"pix11.com",
"pjmedia.com",
"pjstar.com",
"pjstar.com",
"placerherald.com",
"placersentinel.com",
"plaindealer-sun.com",
"plainsman.com",
"plaintalk.net",
"plainviewnews.net",
"plainvillecitizen.com",
"planetary.org",
"planetjh.com",
"plaqueminesgazette.com",
"plattechronicle.com",
"plattecountycitizen.com",
"plattecountylandmark.com",
"playbill.com",
"pleasantonexpress.com",
"pleasantonweekly.com",
"plu.edu",
"plumasnews.com",
"plumasnews.com",
"plymouth-review.com",
"pnj.com",
"pntonline.com",
"pocahontastimes.com",
"poconobusinessjournal.com",
"poconorecord.com",
"pogo.org",
"pointandshoreland.com",
"points-east.com",
"polamjournal.com",
"policeone.com",
"politico.com",
"politico.eu",
"politifact.com",
"polkcountydemocrat.com",
"polkcountynewspaper.com",
"polkio.com",
"polygon.com",
"pomeradonews.com",
"pomeradonews.com",
"pomona.edu",
"poncacitynews.com",
"ponchatoula.com",
"pontevedrarecorder.com",
"pontiacdailyleader.com",
"popculture.com",
"popsci.com",
"popularmechanics.com",
"popville.com",
"portasouthjetty.com",
"portclintonnewsherald.com",
"portisabelsouthpadre.com",
"portlandmercury.com",
"portlandobserver.com",
"portlandscw32.com",
"portlandscw32.com",
"portlandtribune.com",
"portlandtribune.com",
"portlandtribune.com",
"portlandtribune.com",
"portlandtribune.com",
"portlavacawave.com",
"portorchardindependent.com",
"portsmouth-dailytimes.com",
"portuguesetimes.com",
"portwashington-news.com",
"poseycountynews.com",
"post-gazette.com",
"post-journal.com",
"post-register.com",
"post-voice.com",
"post-voice.com",
"postandcourier.com",
"postbulletin.com",
"postcrescent.com",
"postindependent.com",
"postindependent.com",
"postnewsgroup.com",
"postregister.com",
"postsignal.com",
"postsouth.com",
"poststar.com",
"potatogrower.com",
"poteaudailynews.com",
"potomacalmanac.com",
"pottsmerc.com",
"poughkeepsiejournal.com",
"powderspringsmessenger.net",
"powelltribune.com",
"poynter.org",
"ppindependent.net",
"prairieadvocate.com",
"prairiepublic.org",
"prairiepublishingmn.com",
"prairiepublishingmn.com",
"prairiepublishingmn.com",
"pratttribune.com",
"precinctreporter.com",
"premiumtimesng.com",
"prensahispanaaz.com",
"prentissheadlight.com",
"press-citizen.com",
"press-citizen.com",
"press-citizen.com",
"press-herald.com",
"press-leader.com",
"press-times.com",
"press-times.com",
"pressandguide.com",
"pressargus.com",
"pressconnects.com",
"pressdemocrat.com",
"pressenterpriseonline.com",
"pressherald.com",
"pressmentor.com",
"pressnews.com",
"pressofatlanticcity.com",
"presspublications.com",
"presspublisher.us",
"presspubs.com",
"presspubs.com",
"presspubs.com",
"presspubs.com",
"presspubs.com",
"presspubs.com",
"presspubs.com",
"presspubs.com",
"pressregister.com",
"pressreporter.com",
"pressrepublican.com",
"presstelegram.com",
"prestoncitizen.com",
"prestonhollowpeople.com",
"pri.org",
"pride.com",
"priestrivertimes.com",
"primepublishers.com",
"primepublishers.com",
"princetonherald.com",
"printroom.com",
"proctorjournal.com",
"progress-index.com",
"progressnewspaper.org",
"progresstimes.net",
"project-syndicate.org",
"propublica.org",
"prospect.org",
"prospectmagazine.co.uk",
"providencejournal.com",
"providenceonline.com",
"pryordailytimes.com",
"psdispatch.com",
"psmag.com",
"pspb.org",
"psu.edu",
"psucollegio.com",
"psuvanguard.com",
"psychologytoday.com",
"ptcbglc.com",
"ptleader.com",
"ptreyeslight.com",
"publicintegrity.org",
"publicnewsservice.org",
"publicopiniononline.com",
"pucchronicle.com",
"pulaskicountymirror.com",
"pulaskinews.net",
"pulaskinews.net",
"pulaskinews.net",
"pulaskinews.net",
"punchng.com",
"punxsutawneyspirit.com",
"purcellregister.com",
"purdueexponent.org",
"putnamcountycourier.com",
"putnamcountyrecord.com",
"putnampresstimes.com",
"putnamsentinel.com",
"pv-magazine.com",
"pvmonews.com",
"pvnews.com",
"pvtimes.com",
"pvtrib.com",
"pvvt.com",
"pvvt.com",
"pymnts.com",
"q13.com",
"q13fox.com",
"qchron.com",
"qconline.com",
"qconline.com",
"qcsunonline.com",
"qctimes.com",
"qctimes.com",
"qgazette.com",
"qns.com",
"qsaltlake.com",
"queenannenews.com",
"queenstribune.com",
"quepasamedia.com",
"quepasanoticias.com",
"quepasanoticias.com",
"quillnewspaper.com",
"quoddytides.com",
"qwestoffice.net",
"qz.com",
"rabble.ca",
"radaronline.com",
"radiotimes.com",
"rafu.com",
"rainscountyleader.com",
"raleigh2.com",
"raleighcw.com",
"rallshe.com",
"ramaponews.com",
"ramcigar.com",
"ramonajournal.com",
"ramonasentinel.com",
"ranchland-news.com",
"ranchocordovaindependent.com",
"ranchosantafereview.com",
"randolphcountyheraldtribune.com",
"randomlengthsnews.com",
"rangerreview.com",
"rankincn.com",
"rantoulpress.com",
"rapidcityjournal.com",
"rapidcityjournal.com",
"rapidcityjournal.com",
"rapidcityjournal.com",
"rappler.com",
"rappnews.com",
"rasmussenreports.com",
"ravallirepublic.com",
"rawlinstimes.com",
"rawstory.com",
"raymondville-chronicle.com",
"raynetoday.com",
"raytowneagle.com",
"rbj.net",
"rblandmark.com",
"rcnky.com",
"rcreader.com",
"rdrnews.com",
"readingeagle.com",
"readinspiredmag.org",
"realclearmarkets.com",
"realclearpolitics.com",
"reason.com",
"record-bee.com",
"record-bee.com",
"record-eagle.com",
"record-herald.com",
"record-review.com",
"recordbulletin.com",
"recordcourier.com",
"recorder.com",
"recordernews.com",
"recorderonline.com",
"recordgazette.net",
"recordherald.com",
"recordjournal.net",
"recordnet.com",
"recordonline.com",
"recordpub.com",
"recordreporter.com",
"recordstar.com",
"redandblack.com",
"redbluffdailynews.com",
"redding.com",
"redeyechicago.com",
"redfieldpress.com",
"redlandsdailyfacts.com",
"redoakexpress.com",
"redriverminer.com",
"redrocknews.com",
"redwoodtimes.com",
"reedleyexponent.com",
"reedleyexponent.com",
"refinery29.com",
"reflector-online.com",
"reflector.com",
"reflejos.com",
"reformer.com",
"region10.com",
"register-herald.com",
"register-news.com",
"register-pajaronian.com",
"registercitizen.com",
"registerguard.com",
"registerherald.com",
"registerstar.com",
"reinbeckcourier.com",
"reliefweb.int",
"religionnews.com",
"remezcla.com",
"reminderusa.net",
"rentonreporter.com",
"rep-am.com",
"reporter-times.com",
"reporter-times.com",
"reporter.net",
"reporterandfarmer.com",
"reporterherald.com",
"reporternews.com",
"reporternewspapers.net",
"reporternewspapers.net",
"reporternewspapers.net",
"republic-online.com",
"republic-online.com",
"republic-online.com",
"republican-eagle.com",
"republican-me.com",
"republican-times.com",
"republicanherald.com",
"republictimes.net",
"resilience.org",
"resorter.com",
"restaurantbusinessonline.com",
"reston-connection.com",
"retrieverweekly.com",
"reuters.com",
"reverejournal.com",
"review-news.com",
"reviewatlas.com",
"reviewjournal.com",
"reviewjournal.com",
"reviewjournal.com",
"reviewjournal.com",
"reviewonline.com",
"reviewtimes.com",
"rewire.news",
"rexburgstandardjournal.com",
"rez-biz.com",
"rfa.org",
"rferl.org",
"rgj.com",
"rgj.com",
"rgj.com",
"rheaheraldnews.com",
"rhinotimes.com",
"ricentral.com",
"ricentral.com",
"ricentral.com",
"ricentral.com",
"ricentral.com",
"ricentral.com",
"ricethresher.org",
"richfieldreaper.com",
"richlandtoday.com",
"richmond-dailynews.com",
"richmond.com",
"richmondregister.com",
"ricochet.com",
"ridgecrestca.com",
"ridgwayrecord.com",
"rimonthly.com",
"riograndesun.com",
"ripleybee.com",
"ripleynews.com",
"ripleynews.com",
"riverdalepress.com",
"riverfallsjournal.com",
"riverfronttimes.com",
"riverhillstraveler.com",
"rivernewsonline.com",
"riverpressnews.com",
"riverreporter.com",
"rivertowns.net",
"rivertownsenterprise.net",
"rmpbs.org",
"rnntv.com",
"road.cc",
"roadandtrack.com",
"roanecounty.com",
"roanoke-chowannewsherald.com",
"roanoke.com",
"robconews.com",
"robdailynews.com",
"robesonian.com",
"rochellenews-leader.com",
"rochesterfirst.com",
"rochesterlavoz.com",
"rochsent.com",
"rockawave.com",
"rockdalecitizen.com",
"rockdalereporter.com",
"rocket-courier.com",
"rocketcitynow.com",
"rocketcitynow.com",
"rocketcitynow.com",
"rockfordsquire.com",
"rocklandtimes.com",
"rockportpilot.com",
"rockrivertimes.com",
"rockstargames.com",
"rockwallheraldbanner.com",
"rockymounttelegram.com",
"roguebyline.com",
"rogueriverpress.com",
"rollcall.com",
"rollingstone.com",
"rollingthunderexpress.com",
"romesentinel.com",
"roscovoice.com",
"rosemounttownpages.com",
"rosevilletoday.com",
"roslyn-news.com",
"rossford.com",
"rossmoornews.com",
"roundupdaily.com",
"roundupweb.com",
"royalpurplenews.com",
"rpi.edu",
"rrdailyherald.com",
"rrecord.com",
"rrhgazette.com",
"rrobserver.com",
"rrstar.com",
"rsu.edu",
"rt.com",
"rte.ie",
"ruidosonews.com",
"rumfordfallstimes.com",
"ruralvermont.com",
"rushlimbaugh.com",
"rushvillerepublican.com",
"russell-publications.com",
"russell-publications.com",
"russell-publications.com",
"russell-publications.com",
"russellcountynewspapers.com",
"russellcountynewspapers.com",
"rustonleader.com",
"rustorian.com",
"rutartan.com",
"rutherfordreader.com",
"rutlandherald.com",
"rvpnews.com",
"sabethaherald.com",
"sabinetoday.com",
"sacbee.com",
"saccityexpress.com",
"sacgazette.com",
"sacobserver.com",
"sacramento.cbslocal.com",
"sacurrent.com",
"safetv.org",
"sagharborexpress.com",
"saladovillagevoice.com",
"salamancapress.com",
"salem-news.com",
"salemleader.com",
"salemnews.com",
"salemnews.net",
"salemweeklynews.com",
"salina.com",
"salisburypost.com",
"salon.com",
"saltyangler.com",
"saludastandard-sentinel.com",
"salyersvilleindependent.com",
"samessenger.com",
"sampan.org",
"sanangelolive.com",
"sanbenitocountytoday.com",
"sanclementetimes.com",
"sandiego.com",
"sandiego6.com",
"sandiegodowntownnews.com",
"sandiegomagazine.com",
"sandiegoreader.com",
"sandiegouniontribune.com",
"sandiegouniontribune.com",
"sandmountainreporter.com",
"sanduskyregister.com",
"sandyjournal.com",
"sanfordherald.com",
"sangrechronicle.com",
"sanibel-captiva-islander.com",
"sanjuanislander.com",
"sanjuanjournal.com",
"sanluisobispo.com",
"sanluisobispo.com",
"sanmarcosrecord.com",
"sanmarinotribune.com",
"sansabanews.com",
"santacruzsentinel.com",
"santafenewmexican.com",
"santamariasun.com",
"santamariatimes.com",
"santansun.com",
"santapaulatimes.com",
"saratogatodaynewspaper.com",
"saratogian.com",
"saukherald.com",
"saukvalley.com",
"saukvalley.com",
"savannahbusinessjournal.com",
"savannahherald.net",
"savannahmagazine.com",
"savannahnow.com",
"savannahtribune.com",
"sbgi.net",
"sbgi.net",
"sbgi.net",
"sbgi.net",
"sbgi.net",
"sbj.net",
"sbmag.net",
"sbnonline.com",
"sbs.com.au",
"sbstatesman.com",
"sbsun.com",
"scaddistrict.com",
"scanews.com",
"scarymommy.com",
"scdailypress.com",
"scdemocratonline.com",
"scenenewspaper.com",
"scenicrangenewsforum.com",
"scetv.org",
"scetv.org",
"scetv.org",
"scetv.org",
"scetv.org",
"sciencealert.com",
"scienceblog.com",
"sciencedaily.com",
"sciencefriday.com",
"sciencemag.org",
"sciencenews.org",
"sciencenordic.com",
"scientificamerican.com",
"scledger.net",
"scliving.coop",
"scmp.com",
"scnews.com",
"scnow.com",
"scnow.com",
"scoop.co.nz",
"scotsman.com",
"scotusblog.com",
"scroll.in",
"scsun-news.com",
"scsuntimes.com",
"sctimes.com",
"sctonline.net",
"sd.gov",
"sdbj.com",
"sdcitybeat.com",
"sdcnn.com",
"sdgnewsgroup.com",
"sdgnewsgroup.com",
"sdgnewsgroup.com",
"sdgnewsgroup.com",
"sdnews.com",
"sdnews.com",
"sdnews.com",
"sdnews.com",
"sdpb.org",
"sdtranscript.com",
"sdvoice.info",
"seacoastecho.com",
"seacoastnh.com",
"seacoastonline.com",
"seacoastonline.com",
"seacoastonline.com",
"seacoastonline.com",
"seacoastonline.com",
"seafordstar.com",
"sealynews.com",
"seattlepi.com",
"seattlespectator.com",
"seattletimes.com",
"seattleweekly.com",
"secaucushomenews.com",
"secondnexus.com",
"sedaliademocrat.com",
"sedona.biz",
"seeker.com",
"seekingalpha.com",
"seeleylake.com",
"seguingazette.com",
"sekvoice.com",
"seldovia.com",
"self.com",
"selmatimesjournal.com",
"seminoleproducer.com",
"seminolesentinel.com",
"semissourian.com",
"seniornewsga.com",
"seniorspectrumnewspaper.com",
"sent-trib.com",
"sentinel-echo.com",
"sentinel-standard.com",
"sentinelandenterprise.com",
"sentinelnews.com",
"sentinelnews.net",
"sentinelnow.com",
"sentinelsource.com",
"sentineltimes.com",
"sequimgazette.com",
"sequoyahcountytimes.com",
"servedaily.com",
"sespesun.com",
"setxhomepage.com",
"sevendaysvt.com",
"sewaneemessenger.com",
"sewardindependent.com",
"sewardindependent.com",
"sewardindependent.com",
"sewardindependent.com",
"sf.curbed.com",
"sfbayview.com",
"sfchronicle.com",
"sfexaminer.com",
"sfgate.com",
"sflcw.com",
"sfltv.net",
"sfreporter.com",
"sfvbj.com",
"sfweekly.com",
"sg.news.yahoo.com",
"sgvtribune.com",
"shannoncountycurrentwave.com",
"sharonherald.com",
"shawanoleader.com",
"shawneedispatch.com",
"shawneemissionpost.com",
"sheboyganpress.com",
"shelburnenews.com",
"shelbycountyreporter.com",
"shelbynews.com",
"shelbystar.com",
"shelbyvilledailyunion.com",
"sheltonherald.com",
"shepherdexpress.com",
"shingletownridgeridernews.com",
"shobannews.com",
"shorelinemedia.net",
"shorelinemedia.net",
"shorelinemedia.net",
"shorelinetimes.com",
"shorenewstoday.com",
"shorenewstoday.com",
"shorenewstoday.com",
"shorenewstoday.com",
"shorenewstoday.com",
"shorenewstoday.com",
"shorenewstoday.com",
"shorenewstoday.com",
"shoshonenewspress.com",
"showmetheozarks.com",
"shreveporttimes.com",
"si.com",
"sidneydailynews.com",
"sidneyherald.com",
"sierrabooster.com",
"sierraclub.org",
"sierracountyprospect.org",
"sierrastar.com",
"sierrasun.com",
"siftingsherald.com",
"signal-enterprise.com",
"signalamerican.org",
"signalscv.com",
"signaturenewspaper.com",
"sigourneynewsreview.com",
"siliconangle.com",
"silive.com",
"silverbelt.com",
"silvertonstandard.com",
"simivalleyacorn.com",
"simpsoncounty.ms",
"siouxcityjournal.com",
"siouxcountynews.com",
"siouxlandnews.com",
"siouxlandnews.com",
"siouxlandnews.com",
"siouxlandnews.com",
"siouxlandproud.com",
"siskiyoudaily.com",
"sissetoncourier.com",
"sitkasentinel.com",
"sitnews.us",
"sj-r.com",
"sjnewsonline.com",
"sjvalley-times.com",
"skagwaynews.com",
"skidmorenews.com",
"skyhidailynews.com",
"skyvalleychronicle.com",
"skywrighter.com",
"slate.com",
"sleepyeyenews.com",
"sleepyeyeonline.com",
"sltrib.com",
"smalltownpapers.com",
"smalltownpapers.com",
"smcitizen.com",
"smdailyjournal.com",
"smdailypress.com",
"smdp.com",
"smh.com.au",
"smileypete.com",
"smithfieldtimes.com",
"smithvilleherald.com",
"smithvillereview.com",
"smmercury.com",
"smmirror.com",
"smobserved.com",
"smokymountainnews.com",
"smudailycampus.com",
"snopes.com",
"snowest.com",
"snyderdailynews.com",
"so-utah.com",
"soaznewsx.com",
"socialistworker.org",
"sohojournal.com",
"soledadbee.com",
"soloneconomist.com",
"somdnews.com",
"somdnews.com",
"somdnews.com",
"somerset-kentucky.com",
"sonomanews.com",
"sonomasun.com",
"sonomawest.com",
"sonomawest.com",
"sonomawest.com",
"sonomawest.com",
"sonorannews.com",
"sooeveningnews.com",
"soompi.com",
"soprissun.com",
"soptv.org",
"soptv.org",
"sourcenewspapers.com",
"southalabamian.com",
"southbeltleader.com",
"southbendtribune.com",
"southcoasttoday.com",
"southcoasttoday.com",
"southcountytimes.com",
"southeastohiomagazine.com",
"southeastsun.com",
"southeastsun.com",
"southernboating.com",
"southerndigest.com",
"southernminn.com",
"southernminn.com",
"southernminn.com",
"southernminn.com",
"southernminn.com",
"southernminn.com",
"southernminn.com",
"southernminn.com",
"southernoregoncw.com",
"southernstandard.com",
"southforktines.com",
"southhaventribune.net",
"southhillenterprise.com",
"southingtoncitizen.com",
"southingtonobserver.com",
"southjerseylocalnews.com",
"southjerseylocalnews.com",
"southlakepress.com",
"southplatteindependent.net",
"southplattesentinel.com",
"southreporter.com",
"southsidebusiness.com",
"southsidemessenger.com",
"southsidermagazine.com",
"southsidervoice.com",
"southstrandnews.com",
"southvalleyjournal.com",
"southwestern.edu",
"southwestjournal.com",
"southwesttimes.com",
"southwhidbeyrecord.com",
"space.com",
"spacecoastdaily.com",
"spacenews.com",
"spanishjournal.com",
"sparkstrib.com",
"spartaindependent.com",
"spartalive.com",
"spartandaily.com",
"spartanecho.org",
"spcitytimes.com",
"speakinoutweeklynews.com",
"spearmanreporter.com",
"spectatornews.com",
"spectrumlocalnews.com",
"spencercountyjournal.com",
"spencerdailyreporter.com",
"spencereveningworld.com",
"spencermagnet.com",
"spiegel.de",
"spiked-online.com",
"spinalcolumnonline.com",
"spiritofjefferson.com",
"splinternews.com",
"spobserver.com",
"spokanejournal.com",
"spokesman-recorder.com",
"spokesman.com",
"spokesman.com",
"sportingjournal.com",
"sportingnews.com",
"sports.yahoo.com",
"sportsandleisuremag.com",
"spotlightnews.com",
"springfield-il.com",
"springfieldap.com",
"springfieldconnection.com",
"springfieldnewssun.com",
"springsvalleyherald.com",
"spsu.edu",
"spudman.com",
"sputniknews.com",
"srpmic-nsn.gov",
"srpressgazette.com",
"ss-times.com",
"ssentinel.com",
"ssir.org",
"ssnewstelegram.com",
"sspmt.com",
"stamfordadvocate.com",
"stamfordadvocate.com",
"stamfordplus.com",
"standard-democrat.com",
"standard-gazette.com",
"standard-journal.com",
"standard.co.uk",
"standard.net",
"standardbanner.com",
"standardmedia.co.ke",
"standardspeaker.com",
"staplesworld.com",
"star-herald.com",
"star-herald.com",
"star-telegram.com",
"star-telegram.com",
"star-telegram.com",
"star64.tv",
"staradvertiser.com",
"starandwave.com",
"starbeacon.com",
"starcourier.com",
"stardem.com",
"starfl.com",
"stargazette.com",
"starherald-me.com",
"starherald.com",
"starherald.com",
"starherald.com",
"starherald.net",
"starheraldnews.com",
"starj.com",
"starkejournal.com",
"starkvilledailynews.com",
"starlocalmedia.com",
"starlocalmedia.com",
"starlocalmedia.com",
"starlocalmedia.com",
"starlocalmedia.com",
"starlocalmedia.com",
"starlocalmedia.com",
"starlocalmedia.com",
"starlocalmedia.com",
"starnewsga.com",
"starnewsgroup.com",
"starnewsonline.com",
"startribune.com",
"starvalleyindependent.com",
"state-journal.com",
"state.id.us",
"state.id.us",
"state.ms.us",
"state.ms.us",
"state.nj.us",
"state.wy.us",
"statecollege.com",
"stategazette.com",
"statehornet.com",
"statejournal.com",
"statenews.com",
"stateportpilot.com",
"statepress.com",
"statesboroherald.com",
"statesman.com",
"statesman.com",
"statesman.com",
"statesman.com",
"statesman.com",
"statesman.com",
"statesman.com",
"statesman.com",
"statesman.com",
"statesmanexaminer.com",
"statesmanjournal.com",
"statesmanjournal.com",
"statesmanjournal.com",
"statesville.com",
"statnews.com",
"staugustine.com",
"stauntonstartimes.com",
"steamboattoday.com",
"steelcountrybee.com",
"stegenherald.com",
"sterlingbulletin.net",
"steubencourier.com",
"stevenspointjournal.com",
"stgeorgemagazine.com",
"stgeorgeutah.com",
"stiglernews.com",
"stignacenews.com",
"stillwatercountynews.com",
"stillwatergazette.com",
"stjamesnews.com",
"stlamerican.com",
"stltoday.com",
"stltoday.com",
"stmarynow.com",
"stmarynow.com",
"stonecountyenterprise.com",
"stonecountyleader.com",
"stormlake.com",
"stormlakepilottribune.com",
"stoutonia-online.com",
"stowetoday.com",
"stowsentry.com",
"straight.com",
"straitstimes.com",
"stratfordstar.com",
"streetinsider.com",
"stripes.com",
"strohmnews.com",
"strohmnews.com",
"strohmnews.com",
"studlife.com",
"stuff.co.nz",
"stuffboston.com",
"sturgisjournal.com",
"stuttgartdailyleader.com",
"stwnewspress.com",
"styleweekly.com",
"suffolkjournal.net",
"suffolknewsherald.com",
"sugarproducer.com",
"suindependent.com",
"sullivan-times.com",
"sulphurdailynews.com",
"sulphurtimes.com",
"sulross.edu",
"summersvillebeacon.com",
"summitdaily.com",
"sumnerpress.com",
"sumtercountytimes.com",
"sun-sentinel.com",
"sun-sentinel.com",
"sunad.com",
"sunburynews.com",
"suncommercial.com",
"suncommunitynews.com",
"sunews.net",
"sungazette.com",
"sunherald.com",
"sunjournal.com",
"sunnews.org",
"sunpatriot.com",
"sunpatriot.com",
"sunpatriot.com",
"sunshineexpressmedia.com",
"sunshinestatenews.com",
"sunstatepost.com",
"suntelegraph.com",
"sunthisweek.com",
"sunthisweek.com",
"sunthisweek.com",
"sunthisweek.com",
"sunthisweek.com",
"suntimes.com",
"suntimes.com",
"suntimes.com",
"super18tv.com",
"superiorne.com",
"superiortelegram.com",
"supermarketnews.com",
"supicket.com",
"sussexcountian.com",
"sussexcountypost.com",
"suunews.com",
"suwanneedemocrat.com",
"suwanneedemocrat.com",
"svherald.com",
"swarkansasnews.com",
"swarkansasnews.com",
"swarthmore.edu",
"swarthmorephoenix.com",
"swcbulletin.com",
"swcolotravel.org",
"sweethomenews.com",
"sweetwaterreporter.com",
"swiftcountymonitor.com",
"swiowanewssource.com",
"swiowanewssource.com",
"swiowanewssource.com",
"swissinfo.ch",
"swjpc.com",
"swmontanamagazine.com",
"swnewsherald.com",
"swnewsmedia.com",
"swnewsmedia.com",
"swnewsmedia.com",
"swnewsmedia.com",
"swnewsmedia.com",
"swnewsmedia.com",
"swnewsmedia.com",
"swnewsmedia.com",
"swoknews.com",
"swtimes.com",
"swvatoday.com",
"swvatoday.com",
"swvatoday.com",
"swvatoday.com",
"swvatoday.com",
"sylvaniaadvantage.com",
"sylvaniatelephone.com",
"syossetjerichotribune.com",
"syracuse.com",
"syracuse.com",
"syvnews.com",
"t-g.com",
"tabletmag.com",
"tacomadailyindex.com",
"tacomaweekly.com",
"taftindependent.com",
"taftmidwaydriller.com",
"tahlequahdailypress.com",
"tahoe.com",
"tahoe.com",
"tahoedailytribune.com",
"tahoedailytribune.com",
"takomavoice.com",
"talkingpointsmemo.com",
"tallahassee.com",
"tallahatchienews.ms",
"tallasseetribune.com",
"talonmarks.com",
"tamatoledonews.com",
"tamatoledonews.com",
"tampabay.com",
"tampabays10.com",
"tamu.edu",
"tangilena.com",
"tangilena.com",
"taosnews.com",
"tapinto.net",
"taskandpurpose.com",
"taterecord.com",
"tattnalljournal.com",
"tauntongazette.com",
"taxfoundation.org",
"taylornews.org",
"taylorpress.net",
"taylorsvillejournal.com",
"taylorsvilletimes.com",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbn.org",
"tbnweekly.com",
"tbnweekly.com",
"tbnweekly.com",
"tbnweekly.com",
"tbnweekly.com",
"tbo.com",
"tbo.com",
"tbo.com",
"tbo.com",
"tbo.com",
"tbrnews.com",
"tbrnewsmedia.com",
"tbrnewsmedia.com",
"tbrnewsmedia.com",
"tbrnewsmedia.com",
"tcnjsignal.net",
"tcpalm.com",
"tcpalm.com",
"tcpalm.com",
"tcpalm.com",
"tct-net.org",
"tct-net.org",
"tct-net.org",
"tct-net.org",
"tct-net.org",
"tctimes.com",
"tcu.edu",
"tcu360.com",
"tdn-net.com",
"tdn.com",
"tdtnews.com",
"teaweekly.com",
"techcrunch.com",
"techetoday.com",
"technewsiit.com",
"technicianonline.com",
"technologyreview.com",
"techrepublic.com",
"tecumsehchieftain.com",
"tecumsehherald.com",
"teenvogue.com",
"tehachapinews.com",
"telegram.com",
"telegram.com",
"telegramnews.net",
"telegraph.co.uk",
"telegraphindia.com",
"telemundo23.com",
"telemundo47.com",
"telemundo48.com",
"telemundo51.com",
"telemundoaustin.com",
"telemundobakersfield.com",
"telemundochicago.com",
"telemundodallas.com",
"telemundola.com",
"televisa.com.mx",
"televisa.com.mx",
"telluridenews.com",
"telluridenews.com",
"telluridenews.com",
"temple-news.com",
"tennessean.com",
"tennessean.com",
"tennessean.com",
"tennessean.com",
"terrelltribune.com",
"terrytribune.com",
"tetonvalleynews.net",
"teutopolispress.com",
"texarkanagazette.com",
"texarkanagazette.com",
"texasbasketball.com",
"texasblazenews.com",
"texasborderbusiness.com",
"texasescapes.com",
"texashighways.com",
"texashuntingnews.com",
"texasmonthly.com",
"texasobserver.org",
"texastribune.org",
"texomashomepage.com",
"texomashomepage.com",
"texomashomepage.com",
"thattvwebsite.com",
"thattvwebsite.com",
"the-american-interest.com",
"the-daily-record.com",
"the-dispatch.com",
"the-independent-news.com",
"the-journal.com",
"the-journal.com",
"the-journal.com",
"the-leader.com",
"the-messenger.com",
"the-papers.com",
"the-papers.com",
"the-review.com",
"the-scientist.com",
"the-standard.org",
"the-star.co.ke",
"the33tv.com",
"the419.com",
"theabingtonjournal.com",
"theacornonline.com",
"theadamscountyrecord.com",
"theadanews.com",
"theadvancenews.com",
"theadvertiser.com",
"theadvocate.com",
"theadvocate.com",
"theadvocate.com",
"theadvocate.com",
"theage.com.au",
"theaggie.org",
"thealbanynews.net",
"theallstate.org",
"thealmatimes.com",
"thealpenanews.com",
"thealpinesun.com",
"theamericanconservative.com",
"theanchoronline.org",
"theandersonnews.com",
"theantlersamerican.com",
"theapopkachief.com",
"theappalachianonline.com",
"thearabtribune.com",
"thearcticsounder.com",
"thearknewspaper.com",
"theasburycollegian.com",
"theatlantavoice.com",
"theatlantic.com",
"theaustinvillager.com",
"theaustralian.com.au",
"theava.com",
"theavion.com",
"theballstonjournal.com",
"thebanner.com",
"thebanneronline.com",
"thebatt.com",
"thebeachsideresident.com",
"thebeacon.net",
"thebellevilletelescope.com",
"thebelzonibanner.com",
"thebisbeeobserver.com",
"theblacksheartimes.com",
"theblaze.com",
"thebluebanner.net",
"thebody.com",
"thebostonchannel.com",
"thebottomlineonline.org",
"thebowtimes.com",
"thebrackencountynews.com",
"thebray.com",
"thebraziltimes.com",
"thebreezeonline.com",
"thebridgeportnews.com",
"thebridgeweekly.com",
"thebrightonblade.com",
"thebristolbaytimes.com",
"thebrunswicknews.com",
"thebuffalocentertribune.com",
"thebulletin.org",
"thebulletinweekly.com",
"thebusinessfarmer.com",
"thebusinesstimes.com",
"thebutlercollegian.com",
"thebv.org",
"thecabin.net",
"thecairocitizen.com",
"thecalaisadvertiser.com",
"thecalifornian.com",
"thecallnews.com",
"thecamarilloacorn.com",
"thecampanil.com",
"thecantoncitizen.com",
"thecapistranodispatch.com",
"thecarrollnews.com",
"thecarthaginian.com",
"thecash-book.com",
"thecatalinaislander.com",
"thecatoctinbanner.com",
"thecentralvirginian.com",
"thechampionnewspaper.com",
"thecharlottepost.com",
"thecharlotteweekly.com",
"thechartonline.com",
"thecherokeean.com",
"thechicagocitizen.com",
"thechiefleader.com",
"thechiefnews.com",
"thechowchillanews.com",
"thechronicle-news.com",
"thechronicle.com",
"thechronicleherald.ca",
"thechronicleofmtjuliet.com",
"thechronicleonline.com",
"thecincinnatiherald.com",
"thecitizen-times.com",
"thecitizen.com",
"theclarion.org",
"theclarionnews.com",
"theclariononline.com",
"theclause.org",
"theclaycountynews.com",
"theclaytonrecordonline.com",
"theclaytontribune.com",
"theclevelandcurrent.com",
"theclinchcountynews.com",
"theclintoncourier.net",
"theclockonline.com",
"thecoalfieldprogress.com",
"thecoalfieldprogress.com",
"thecoastnews.com",
"thecolbyecho.com",
"thecolgatemaroonnews.com",
"thecollegevoice.org",
"thecollegianur.com",
"thecolletonian.com",
"thecolumbiastar.com",
"thecolumbusgazette.com",
"thecommercialrecord.com",
"thecommunityvoice.com",
"theconcordian.org",
"theconcordianonline.com",
"theconversation.com",
"thecordovatimes.com",
"thecornellian.com",
"thecornellreview.com",
"thecortlandnews.com",
"thecountyrecord.net",
"thecourier.com",
"thecourierexpress.com",
"thecourierexpress.com",
"thecourierexpress.com",
"thecouriertimes.com",
"thecowl.com",
"thecr.com",
"thecreole.com",
"thecreswellchronicle.com",
"thecrier.net",
"thecrimson.com",
"thecrite.com",
"thecurrent-online.com",
"thecut.com",
"thecw23.com",
"thecw25.com",
"thecw46.com",
"thecwaustin.com",
"thecwlasvegas.tv",
"thecwtc.com",
"thedahloneganugget.com",
"thedailyaztec.com",
"thedailybeast.com",
"thedailycitizen.com",
"thedailycougar.com",
"thedailycourier.com",
"thedailyjournal.com",
"thedailymail.net",
"thedailynews.cc",
"thedailynewsonline.com",
"thedailyrecord.com",
"thedailyrecord.com",
"thedailyreporter.com",
"thedailyreporteronline.com",
"thedailyreview.com",
"thedailysentinel.com",
"thedailystar.com",
"thedailytimes.com",
"thedailyworld.com",
"thedalharttexan.com",
"thedalleschronicle.com",
"thedaonline.com",
"thedartmouth.com",
"theday.com",
"thedcregister.com",
"thedenverchannel.com",
"thedepauw.com",
"thederrick.com",
"thedestinlog.com",
"thedickinsonian.com",
"thedickinsonpress.com",
"thedigitalcourier.com",
"thedigitalnp.com",
"thedigitel.com",
"thediplomat.com",
"thedmonline.com",
"thedowneypatriot.net",
"thedp.com",
"thedpost.com",
"thedrinksbusiness.com",
"thedrive.com",
"thedrummer.com",
"theduplintimes.com",
"theduquesneduke.com",
"thedutchharborfisherman.com",
"theeagle.com",
"theeaglegroveeagle.com",
"theeagleonline.com",
"theeastafrican.co.ke",
"theeastcarolinian.com",
"theechonews.com",
"theecologist.org",
"theenterprise.net",
"theepitaph.com",
"theepochtimes.com",
"theet.com",
"theeveningleader.com",
"theeveningtimes.com",
"theexaminer.com",
"theexponent.com",
"theexpressnewspaper.com",
"thefacts.com",
"thefader.com",
"thefamuanonline.com",
"thefayettecountyunion.com",
"thefayettecountyunion.com",
"thefayettecountyunion.com",
"thefayettecountyunion.com",
"thefederalist.com",
"thefencepost.com",
"thefloridalawjournal.com",
"thefloridastar.com",
"theflume.com",
"thefoothillsfocus.com",
"thefoothillspaper.com",
"theforecaster.net",
"theforumnews.com",
"thefranklinjournal.com",
"thefranklinnewspost.com",
"thefranklinpress.com",
"thefranklintimes.com",
"thegallatincountynews.com",
"thegardenisland.com",
"thegardnernews.com",
"thegayword.com",
"thegazette.com",
"thegeorgeanne.com",
"thegeorgiastar.com",
"thegilmanstar.com",
"thegleaner.com",
"theglobeandmail.com",
"thegraftonnews.com",
"thegrandviewherald.com",
"thegraphic-advocate.com",
"thegraphic.org",
"thegrawn.com",
"thegreyhound.org",
"thegriffonnews.com",
"thegrio.com",
"thegrundyregister.com",
"theguardian.com",
"theguardianonline.com",
"thegurdontimes.com",
"thehamdenjournal.com",
"thehamiltonherald-news.com",
"thehammontonnews.com",
"thehartwellsun.com",
"thehawaiiherald.com",
"thehawkeye.com",
"thehayride.com",
"thehccrusader.com",
"thehealthjournals.com",
"theheartofnewengland.com",
"thehendrickspioneer.com",
"theherald-news.com",
"theherald.com.au",
"theheraldtimes.com",
"thehill.com",
"thehillnews.org",
"thehilltoponline.com",
"thehindu.com",
"thehindubusinessline.com",
"thehinsdalean.com",
"thehoosiertopics.com",
"thehorse.com",
"thehour.com",
"thehour.com",
"thehoya.com",
"thehudsonian.org",
"thehypemagazine.com",
"theijnews.com",
"theincline.com",
"theindependent.com",
"theindependentobserver.com",
"theindnews.com",
"theindychannel.com",
"theindyonline.com",
"theinertia.com",
"theinquisitor.com",
"theintell.com",
"theintelligencer.com",
"theintelligencer.net",
"theintercept.com",
"theintermountain.com",
"theirregular.com",
"theislanderonline.com",
"theislandnow.com",
"theislandnow.com",
"theitem.com",
"theithacan.org",
"thejakartapost.com",
"thejambar.com",
"thejc.com",
"thejenatimes.net",
"thejournal-news.net",
"thejournal.ie",
"thejournalera.com",
"thejournalonline.com",
"thejustice.org",
"thekansan.com",
"thekansascitychannel.com",
"theknightnews.com",
"thelafayettesun.com",
"thelakenews.com",
"thelaketoday.com",
"thelancasternews.com",
"thelandmark.com",
"thelantern.com",
"thelcn.com",
"theleaderonline.net",
"theleafchronicle.com",
"theledger.com",
"thelelandprogress.com",
"thelickingnews.com",
"thelocal.fr",
"thelocal.it",
"thelocalpaper.com",
"theloomisnews.com",
"theloquitur.com",
"themaconcountynews.com",
"themacweekly.com",
"themaineedge.com",
"themaneater.com",
"themarysue.com",
"themccrearyvoice.com",
"themcgeheetimes.com",
"themercury.com",
"themeteor.com",
"themiamihurricane.com",
"themillennews.com",
"themillerpress.com",
"theminaretonline.com",
"themindencourier.com",
"theminneotamascot.com",
"themississippilink.com",
"themonitor.com",
"themonitor.net",
"themonmouthjournal.com",
"themonroetimes.com",
"themontclarion.org",
"themonticellonews.com",
"themoorecountynews.com",
"themoreheadnews.com",
"themorningsun.com",
"themoscowtimes.com",
"themountaineagle.com",
"themountainmail.com",
"themountainpress.com",
"themsureporter.com",
"themtnear.com",
"thenation.com",
"thenational.ae",
"thenebraskasignal.com",
"theneighbornewspapers.com",
"thenevadaindependent.com",
"thenewamerican.com",
"thenewcivilrightsmovement.com",
"thenews-gazette.com",
"thenews-journal.com",
"thenews-messenger.com",
"thenews.com.pk",
"thenews.org",
"thenewsandfarmer.com",
"thenewsdispatch.com",
"thenewsdispatch.net",
"thenewsenterprise.com",
"thenewsguard.com",
"thenewsharonsun.com",
"thenewsherald.com",
"thenewsjournal.net",
"thenewsleaders.net",
"thenewsminute.com",
"thenewsobserver.com",
"thenewsrecord.com",
"thenewsstar.com",
"thenewstribune.com",
"thenewstribune.com",
"thenewstribune.com",
"thenichollsworth.com",
"thenjsentinel.com",
"thenoise.us",
"thenortheastgeorgian.com",
"thenortherner.com",
"thenorthernlight.com",
"thenorthernlight.org",
"thenorthfieldnews.com",
"thenorthwestern.com",
"theoaklandpress.com",
"theobserver.com",
"theodessan.net",
"theodessan.net",
"theohiocountynews.com",
"theolathenews.com",
"theolympian.com",
"theonion.com",
"theonlinerocket.com",
"theorion.com",
"theosakisreview.com",
"theoutline.com",
"theozarkscw.com",
"thepamliconews.com",
"thepampanews.com",
"thepaper24-7.com",
"thepaperofwabash.com",
"theparisnews.com",
"thepenn.org",
"thepenobscottimes.com",
"thepeoplesentinel.com",
"thepeoplestribune.com",
"theperrisprogress.com",
"theperrychief.com",
"thephoto-news.com",
"thepilot.com",
"thepilotnews.com",
"thepilotnews.com",
"thepilotnews.com",
"thepilotnews.com",
"thepinelog.com",
"thepittsburghchannel.com",
"theplainsman.com",
"theplainsman.com",
"theplainviewnews.com",
"thepolicenews.net",
"thepolypost.com",
"thepostandmail.com",
"thepostnewspaper.net",
"thepostsearchlight.com",
"theprairiestar.com",
"theprairiestar.com",
"thepress-sentinel.com",
"thepress.net",
"thepress.net",
"thepress.net",
"thepress.net",
"thepresstribune.com",
"theprogressnews.com",
"theprogressortimes.com",
"theprogressreview.co",
"theprovince.com",
"theprowersjournal.com",
"thepublicopinion.com",
"thequincysun.com",
"thequint.com",
"theracquet.net",
"therandolphleader.com",
"theravennanews.com",
"thereader.com",
"therecord.com",
"therecordandthursdayprinting.com",
"therecorderonline.com",
"therecordherald.com",
"therecordlive.com",
"thereddingpilot.com",
"thereflector.com",
"theregionalnews.com",
"thereminder.com",
"thereminder.com",
"thereminder.com",
"thereporter.com",
"thereporteronline.com",
"thereporteronline.net",
"therepublic.com",
"therepublicannews.com",
"theretrospect.com",
"thereviewnewspapers.com",
"theridernews.com",
"theridgefieldpress.com",
"theringer.com",
"therip.com",
"theriverbanknews.com",
"theroanoker.com",
"therogersvillereview.com",
"therolladailynews.com",
"theroot.com",
"therotundaonline.com",
"theryder.com",
"thesalemnewsonline.com",
"thesalinepost.com",
"thesandb.com",
"thesangerherald.com",
"thesantaclara.org",
"thesantamonicastar.com",
"thescottishsun.co.uk",
"thescribeonline.com",
"theseahawk.org",
"theseniorvoice.net",
"thesentinel.com",
"thesentinel.com",
"thesetonian.com",
"thesewardphoenixlog.com",
"thesheffieldpress.com",
"thesheffieldpress.com",
"theshelleypioneer.com",
"thesheridanheadlight.com",
"thesheridanpress.com",
"theshoalsnews.com",
"theshorthorn.com",
"thesidellreporter.com",
"thesimpsonian.com",
"thesiuslawnews.com",
"theskanner.com",
"thesmokymountaintimes.com",
"thesmstar.com",
"thesnaponline.com",
"thesnapper.com",
"thesomervillenews.com",
"thesounder.com",
"thesource.com",
"thesouthern.com",
"thesouthernnews.org",
"thesouthernstandard.com",
"thespec.com",
"thespectrum.com",
"thespectrum.com",
"thespringfieldsun.com",
"thestar.com.my",
"thestarnews.com",
"thestarphoenix.com",
"thestarpress.com",
"thestate.com",
"thestbernardvoice.com",
"thestokesnews.com",
"thestranger.com",
"thestreet.com",
"thesturbridgevillager.com",
"thesummervillenews.com",
"thesun.co.uk",
"thesunchronicle.com",
"thesunflower.com",
"thesunontheweb.com",
"thesunrunner.com",
"thesuntimes.com",
"thesuntimesnews.com",
"thesylvaherald.com",
"thesyracusejournal.com",
"thetahoeweekly.com",
"thetallahasseenews.com",
"thetandd.com",
"thetartan.org",
"thetd.com",
"thetechtalk.org",
"thetelegraph.com",
"thethomasvilletimes.com",
"thetigernews.com",
"thetimes-tribune.com",
"thetimes24-7.com",
"thetimesherald.com",
"thetimesnews.com",
"thetimestribune.com",
"thetimesweekly.com",
"thetoccoarecord.com",
"thetomahawk.com",
"thetombstonenews.com",
"thetower.org",
"thetowerlight.com",
"thetown-crier.com",
"thetowntalk.com",
"thetriangle.org",
"thetruecitizen.com",
"thetrumantribune.com",
"thetrussvillenews.com",
"thetundradrums.com",
"thetuskegeenews.com",
"thetyee.ca",
"theunion.com",
"theusdvista.com",
"theutcecho.com",
"thevalleychronicle.com",
"thevalleydispatch.com",
"thevalleygazette.com",
"thevalleyscw.tv",
"thevanguardonline.com",
"thevanhornadvocate.com",
"theverge.com",
"thevermilion.com",
"thevidette.com",
"theviennatimes.com",
"thevillagenews.com",
"thevillager.com",
"thevillagereporter.com",
"thevirginianreview.com",
"thevitalvoice.com",
"thevoice.us",
"thevoiceofkapolei.com",
"thevosm.net",
"thevoyageurpress.com",
"thevsn.net",
"thevwindependent.com",
"thewakullanews.com",
"thewamegosmokesignal.com",
"thewashingtondailynews.com",
"thewaynecountynews.com",
"thewaynedalenews.com",
"theweek.com",
"theweekender.com",
"theweirstimes.com",
"thewellingtonenterprise.com",
"thewesterlysun.com",
"thewesterlysun.com",
"thewesternnews.com",
"thewesterntimes.com",
"thewestfieldnews.com",
"thewestonforum.com",
"thewestsidejournal.com",
"thewetumpkaherald.com",
"thewhitonline.com",
"thewhitworthian.com",
"thewichitan.com",
"thewilliamsrecord.com",
"thewindhameagle.com",
"thewiregrassfarmer.com",
"thewoodstockindependent.com",
"theworldlink.com",
"thewrap.com",
"thexunewswire.com",
"thinkprogress.org",
"thinkstewartville.com",
"thinktv.org",
"thinktv.org",
"thisdaylive.com",
"thisweekhawaii.com",
"thisweekinthepoconos.net",
"thisweeknews.com",
"thisweeknews.com",
"thnews.com",
"thomastontimes.com",
"thonline.com",
"threeriversnews.com",
"threeriverspublishing.com",
"threeriverspublishing.com",
"thrillist.com",
"thumbprintnews.com",
"tidbitsflorida.com",
"tidewaternews.com",
"tidewaternews.com",
"tidewaternews.com",
"tiftongazette.com",
"tillamookheadlightherald.com",
"timberjay.com",
"time.com",
"times-advocate.com",
"times-gazette.com",
"times-georgian.com",
"times-georgian.com",
"times-georgian.com",
"times-herald.com",
"times-journal.com",
"times-news.com",
"times-online.com",
"times-standard.com",
"timesargus.com",
"timesbulletin.com",
"timescall.com",
"timescitizen.com",
"timescitizen.com",
"timescolonist.com",
"timescourier.com",
"timesdaily.com",
"timesdelphic.com",
"timesenterprise.com",
"timesfreepress.com",
"timesgazette.com",
"timesherald.com",
"timesheraldonline.com",
"timesindicator.com",
"timesjournal.com",
"timesjournalonline.com",
"timesleader.com",
"timesleader.net",
"timesleaderonline.com",
"timesledger.com",
"timesnews.net",
"timesobserver.com",
"timesofindia.indiatimes.com",
"timesofisrael.com",
"timesofmalta.com",
"timesonline.com",
"timespublications.com",
"timesrecord.com",
"timesrecordnews.com",
"timesreporter.com",
"timesrepublican.com",
"timesreview.com",
"timesreview.com",
"timessentinel.com",
"timestelegram.com",
"timesunion.com",
"timesuniononline.com",
"timeswv.com",
"tinleyjunction.com",
"tiogapublishing.com",
"tiogapublishing.com",
"tippgazette.com",
"tippnews.com",
"tiptonconservative.com",
"titusvilleherald.com",
"tmj4.com",
"tmnews.com",
"tmonews.com",
"tmz.com",
"tnhonline.com",
"tni-news.com",
"tnonline.com",
"tnsjournal.com",
"tntribune.com",
"toacorn.com",
"tobaccovalleynews.com",
"today.uconn.edu",
"todayonline.com",
"todaysthv.com",
"todaystmj4.com",
"toledoblade.com",
"toledocitypaper.com",
"tolosapressnews.com",
"tolosapressnews.com",
"tolosapressnews.com",
"tomahawkleader.com",
"tompkinsvillenews.com",
"tomsguide.com",
"tonganoxiemirror.com",
"tonicanews.com",
"tooeleonline.com",
"topangamessenger.com",
"topgear.com",
"torchbcc.com",
"torchonline.com",
"torontosun.com",
"torringtontelegram.com",
"townelaker.com",
"townhall.com",
"townscountyherald.net",
"townshipjournal.com",
"towntimes.com",
"towntopics.com",
"townvibe.com",
"tpt.org",
"tr3s.com",
"tr3s.com",
"traerstarclipper.com",
"transparency.org",
"travelandleisure.com",
"traveliowa.com",
"traveloregon.com",
"trcmaine.org",
"treehugger.com",
"trentonian.com",
"trentonsun.net",
"trftimes.com",
"trftimes.com",
"tri-cityherald.com",
"trib.com",
"tribdem.com",
"tribecatrib.com",
"triblive.com",
"triblive.com",
"triblive.com",
"triblive.com",
"triblive.com",
"triblive.com",
"tribstar.com",
"tribtoday.com",
"tribtown.com",
"tribunact.com",
"tribune-georgian.com",
"tribune.com.pk",
"tribune242.com",
"tribunecourier.com",
"tribuneledgernews.com",
"tricitytimes-online.com",
"tricitytrib.com",
"tricocanary.com",
"tricornernews.com",
"tricornernews.com",
"tricornernews.com",
"tricountyleader.com",
"tricountynews.mn",
"tricountysentry.com",
"tricountytimes.com",
"trinidadexpress.com",
"trinityjournal.com",
"tripinfo.com",
"triplepundit.com",
"triplicate.com",
"tristatehomepage.com",
"tristatehomepage.com",
"tritowntimes.net",
"trivalleycentral.com",
"trivalleycentral.com",
"trivalleycentral.com",
"trivalleycentral.com",
"trivalleycentral.com",
"trivalleycentral.com",
"tropnews.com",
"troublesomecreektimes.com",
"troymessenger.com",
"troyrecord.com",
"trtworld.com",
"truewestmagazine.com",
"truman.edu",
"trumbulltimes.com",
"trust.org",
"tryondailybulletin.com",
"tsln.com",
"tsnews.com",
"tsnews.com",
"tsuthemeter.com",
"tucson.com",
"tucson.com",
"tucsoncitizen.com",
"tucsonlocalmedia.com",
"tucsonlocalmedia.com",
"tucsonweekly.com",
"tuftsdaily.com",
"tulanehullabaloo.com",
"tularevoice.com",
"tullahomanews.com",
"tulsaworld.com",
"tulsaworld.com",
"tulsaworld.com",
"tulsaworld.com",
"tulsaworld.com",
"tulsaworld.com",
"tumblr.com",
"tunicatimes.com",
"turley.com",
"turley.com",
"turley.com",
"turley.com",
"turley.com",
"turley.com",
"turley.com",
"turley.com",
"turley.com",
"turlockjournal.com",
"turnagaintimes.com",
"turnto10.com",
"turnto23.com",
"turquoisemagazine.net",
"tuscaloosanews.com",
"tuscolatoday.com",
"tv20.tv",
"tv20detroit.com",
"tv52.org",
"tv7-4.com",
"tv7-4.com",
"tvinsider.com",
"tvline.com",
"tvnz.co.nz",
"tvtv.com",
"tvtv.com",
"twin-citynews.com",
"twincities.com",
"twincitytimes.com",
"twinvalleytimes.com",
"twitchy.com",
"twolanelivin.com",
"tworivertimes.com",
"twptimes.com",
"tylerpaper.com",
"tylertribute.com",
"ua.edu",
"uab.edu",
"uafsunstar.com",
"ualr.edu",
"uatrav.com",
"ubmedia.biz",
"ubspectrum.com",
"ucaecho.net",
"ucdadvocate.com",
"uconn.edu",
"ucsc.edu",
"ucsdguardian.org",
"ucsf.edu",
"ucsf.edu",
"ucsusa.org",
"udel.edu",
"udreview.com",
"uen.org",
"uft.org",
"uga.edu",
"uiargonaut.com",
"uic.edu",
"uisjournal.com",
"uiuc.edu",
"uk.news.yahoo.com",
"uk.reuters.com",
"ukiahdailyjournal.com",
"ultimateclassicrock.com",
"uml.edu",
"uncp.edu",
"unctv.org",
"unctv.org",
"unctv.org",
"unctv.org",
"unctv.org",
"unctv.org",
"unctv.org",
"unctv.org",
"unctv.org",
"unctv.org",
"undark.org",
"unews.com",
"unewsonline.com",
"unfspinnaker.com",
"unian.info",
"unidossc.com",
"union-bulletin.com",
"uniondailytimes.com",
"uniondemocrat.com",
"unioneagle.com",
"unionleader.com",
"unionnewsdaily.com",
"unionrecorder.com",
"unionvillerepublicanonline.com",
"universitychronicle.net",
"universitystar.com",
"univision27.com",
"univisionreno.com",
"univisionseattle.com",
"unlv.edu",
"unlvrebelyell.com",
"unogateway.com",
"upcw5.com",
"upi.com",
"upmatters.com",
"upnorthlive.com",
"upnorthlive.com",
"upnorthlive.com",
"upnorthlive.com",
"uppercumberland.org",
"upressonline.com",
"upstatebusinessjournal.com",
"upstatetoday.com",
"uptownexaminer.com",
"urbanacitizen.com",
"urbanmilwaukee.com",
"usatoday.com",
"usatodayhss.com",
"usf.edu",
"usforacle.com",
"usmfreepress.org",
"usnews.com",
"uspirg.org",
"usustatesman.com",
"utah.com",
"utdailybeacon.com",
"utecountrynews.com",
"utepprospector.com",
"utica.tv",
"utica.tv",
"utica.tv",
"uticaod.com",
"uticaod.com",
"utilitydive.com",
"utm.edu",
"utmpacer.com",
"utv44.com",
"uvaldeleadernews.com",
"uvureview.com",
"uwmpost.com",
"uwpexponent.com",
"uwrfvoice.com",
"uwsp.edu",
"uwtledger.com",
"vagazette.com",
"vaildaily.com",
"vaildaily.com",
"valdezstar.net",
"valdostadailytimes.com",
"valdostamagazine.com",
"valleyadvocate.com",
"valleybreeze.com",
"valleybusinessjournal.com",
"valleycenter.com",
"valleycentral.com",
"valleyjournals.com",
"valleyjournals.com",
"valleymorningstar.com",
"valleynewslive.com",
"valleynewstoday.com",
"valleyplanet.com",
"valleyrecord.com",
"valleyreporter.com",
"valleysentinel.com",
"valleytimes-news.com",
"valleytimesidaho.com",
"valleywidenewspaper.com",
"vanburencountydem.com",
"vancouversun.com",
"vandaliadrummernews.com",
"vandalialeader.com",
"vanderbilthustler.com",
"vanderbiltmich.com",
"vanityfair.com",
"vanzandtnews.com",
"vareview.com",
"variety.com",
"vashonbeachcomber.com",
"vcnewsreview.com",
"vcreporter.com",
"vcstar.com",
"vcyamerica.org",
"vegascommunityonline.com",
"vegasinc.com",
"vegnews.com",
"venicegondolier.com",
"venturebeat.com",
"verdenews.com",
"vermiliontoday.com",
"vermontjournal.com",
"vermontwoman.com",
"vernonpublishing.com",
"vernonpublishing.com",
"vernonpublishing.com",
"vernonpublishing.com",
"vfpnews.com",
"vice.com",
"news.vice.com",
"vicksburgpost.com",
"victoriaadvocate.com",
"victoriagazette.com",
"vidaenelvalle.com",
"videtteonline.com",
"viennaconnection.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagernewspapers.com",
"villagerpublishing.com",
"villages-news.com",
"villagesoup.com",
"villagesoup.com",
"villagesoup.com",
"villagesoup.com",
"villagesoup.com",
"villagesoup.com",
"villagesoup.com",
"villagesoup.com",
"villagesoup.com",
"villagevoice.com",
"vindy.com",
"vineyardgazette.com",
"virginiafirst.com",
"virginiafirst.com",
"virginiamn.com",
"virginiastar.net",
"virginiawind.com",
"visaliatimesdelta.com",
"visaliatimesdelta.com",
"visionhispanausa.com",
"visit-massachusetts.com",
"visit-newhampshire.com",
"visitidaho.org",
"visitidaho.org",
"visitindiana.net",
"visitindiana.net",
"visitnebraska.com",
"visitri.com",
"visualcapitalist.com",
"vivelohoy.com",
"vnews.com",
"voanews.com",
"voice-tribune.com",
"voicenews.com",
"voicenewsnebraska.com",
"voiceoftheozarks.net",
"volanteonline.com",
"volunteertv.com",
"vox.com",
"vp-mi.com",
"vpt.org",
"vsuspectator.com",
"vt-world.com",
"vtdigger.org",
"vtntv.com",
"vtntv.com",
"vulture.com",
"vvdailypress.com",
"vvoh.com",
"vzcountyline.com",
"waaytv.com",
"wabash.edu",
"wabg.com",
"wabi.tv",
"wabm68.com",
"wach.com",
"wacotrib.com",
"wacxtv.com",
"wadenapj.com",
"wafb.com",
"waff.com",
"wagmtv.com",
"wahoo-ashland-waverly.com",
"wahoo-ashland-waverly.com",
"wahoo-ashland-waverly.com",
"wahpetondailynews.com",
"waitsburgtimes.com",
"waka.com",
"wakeweekly.com",
"walb.com",
"waldronnews.com",
"walesonline.co.uk",
"walkermn.com",
"wallowa.com",
"waltonsun.com",
"waltontribune.com",
"wamc.org",
"wamu.org",
"wanderer.com",
"wandtv.com",
"wane.com",
"waow.com",
"wapakdailynews.com",
"wapt.com",
"wapt.com",
"warrencountyrecord.com",
"warrenrecord.com",
"warrensheaf.com",
"warricknews.com",
"wartburgcircuit.org",
"warwickonline.com",
"wasatchwave.com",
"washington.edu",
"washingtonblade.com",
"washingtoncitypaper.com",
"washingtonexaminer.com",
"washingtongolf.com",
"washingtonian.com",
"washingtonian.com",
"washingtonmonthly.com",
"washingtonpost.com",
"washingtontimes.com",
"washingtontimesreporter.com",
"washparkprofile.com",
"washtimesherald.com",
"wataugademocrat.com",
"wataugademocrat.com",
"watc.tv",
"watchdog.org",
"wate.com",
"waterbororeporter.com",
"waterburyobserver.org",
"waterfronttimes.com",
"watertowndailytimes.com",
"watfordcitynd.com",
"waukonstandard.com",
"waunetabreeze.com",
"wausaudailyherald.com",
"wausharaargus.com",
"wave3.com",
"wavenewspapers.com",
"wavy.com",
"wavy.com",
"waxahachietx.com",
"wayne.edu",
"waynecojournalbanner.com",
"waynecojournalbanner.com",
"waynecountynews.com",
"wayneindependent.com",
"waynepost.com",
"waynesvilledailyguide.com",
"wbal.com",
"wbaltv.com",
"wbaltv.com",
"wbay.com",
"wbbjtv.com",
"wbgttv.com",
"wbgu.org",
"wbir.com",
"wbjournal.com",
"wbko.com",
"wbna-21.com",
"wbns10tv.com",
"wbnx.com",
"wboc.com",
"wboy.com",
"wbph.org",
"wbra.org",
"wbrc.com",
"wbre.com",
"wbrz.com",
"wbtv.com",
"wbtw.com",
"wcav.tv",
"wcax.com",
"wcbi.com",
"wcexaminer.com",
"wcfcourier.com",
"wcfn.tv",
"wchstv.com",
"wcia.com",
"wcia.com",
"wciu.com",
"wcjb.com",
"wcmessenger.com",
"wcmla.net",
"wcmu.org",
"wcmu.org",
"wcmu.org",
"wcnc.com",
"wcny.org",
"wcoutlook.com",
"wcov.com",
"wcpo.com",
"wcpo.com",
"wcregisteronline.com",
"wcsh6.com",
"wcte.org",
"wcti12.com",
"wctrib.com",
"wctv.tv",
"wctv6.com",
"wcvb.com",
"wcve.org",
"wcve.org",
"wcve.org",
"wcwb22.com",
"wcwg20.com",
"wcyb.com",
"wdam.com",
"wday.com",
"wdbj7.com",
"wdef.com",
"wdel.com",
"wdfxfox34.com",
"wdhn.com",
"wdio.com",
"wdky56.com",
"wdrb.com",
"wdse.org",
"wdsu.com",
"wdsu.com",
"wdtimes.com",
"wdtn.com",
"wdtv.com",
"wdtv.com",
"wearecentralpa.com",
"wearegreenbay.com",
"weareiowa.com",
"weareiowa.com",
"weartv.com",
"weartv.com",
"weather.com",
"weatherforddemocrat.com",
"weau.com",
"webbweekly.com",
"webcenter11.com",
"webcoast.com",
"webelpuente.com",
"webmd.com",
"webstercountycitizen.com",
"websterjournal.com",
"websterkirkwoodtimes.com",
"websterprogresstimes.com",
"wect.com",
"wedu.org",
"weebly.com",
"weebly.com",
"week.com",
"weeklychoice.com",
"weeklycitizen.com",
"weeklynews.net",
"weeklypacket.com",
"weeklyrecordherald.com",
"weeklyview.net",
"weirtondailytimes.com",
"weiu.net",
"wellingtondailynews.com",
"wellsvilledaily.com",
"wenatcheeworld.com",
"weny.com",
"wesa.fm",
"wesh.com",
"wesh.com",
"wesh.com",
"wesleyanargus.com",
"westbendnews.net",
"westbranchtimes.com",
"westchester.news12.com",
"westchesterguardian.com",
"westchesterwag.com",
"westendword.com",
"westerncarolinian.com",
"westerncourier.com",
"westernfrontonline.net",
"westernherald.com",
"westernitasca.com",
"westernmassnews.com",
"westernnebraskaobserver.net",
"westernoregonjournal.com",
"westernslopenow.com",
"westernslopenow.com",
"westernslopenow.com",
"westernslopewatchdog.com",
"westernstylemagazine.com",
"westessextribune.net",
"westfaironline.com",
"westfaironline.com",
"westfargopioneer.com",
"westfieldrepublican.com",
"westhartfordnews.com",
"westhawaiitoday.com",
"westjordanjournal.com",
"westkentuckystar.com",
"westlibertyindex.com",
"westmilfordmessenger.com",
"westminsterheraldnews.com",
"westminsterwindow.com",
"westmorenews.com",
"westmorenews.com",
"westondemocrat.com",
"westplainsdailyquill.net",
"westport-news.com",
"westportnow.com",
"westsac.com",
"westsacramentosun.com",
"westseattleherald.com",
"westsenecabee.com",
"westsherburnetribune.com",
"westsideconnect.com",
"westsidespirit.com",
"westsidetoday.com",
"westvalleyview.com",
"westword.com",
"weta.org",
"wetmountaintribune.com",
"wetmtv.com",
"wevv.com",
"wfaa.com",
"wfae.org",
"wfft.com",
"wfgc.com",
"wfgxtv.com",
"wfgxtv.com",
"wfla.com",
"wfla.com",
"wflitv.com",
"wflxfox29.com",
"wfmj.com",
"wfmy.com",
"wfmynews2.com",
"wfmz.com",
"wfpl.org",
"wfrv.com",
"wfrv.com",
"wfsb.com",
"wfsu.org",
"wfsu.org",
"wfts.com",
"wftv.com",
"wftv.com",
"wfuogb.com",
"wfwa.org",
"wfxb.com",
"wfxg.com",
"wfxl.com",
"wfxsfox55.com",
"wfyi.org",
"wgal.com",
"wgal.com",
"wgba.com",
"wgbctv.com",
"wgbh.org",
"wgbh.org",
"wgby.org",
"wgcu.org",
"wggb.com",
"wgme.com",
"wgnm.com",
"wgno.com",
"wgno.com",
"wgnradio.com",
"wgnt.com",
"wgntv.com",
"wgrz.com",
"wgtatv.com",
"wgte.org",
"wgtu.com",
"wgtu.com",
"wgvu.org",
"wgvu.org",
"wgxa.tv",
"whartonjournal.com",
"whas11.com",
"whats-on.com",
"whbf.com",
"whbr.org",
"whdh.com",
"whdotv38.com",
"whdt.net",
"wheatridgetranscript.com",
"whec.com",
"wherela.com",
"whidbeyexaminer.com",
"whidbeynewstimes.com",
"whig.com",
"whiotv.com",
"whitecountynews.net",
"whitefishpilot.com",
"whitehalljournal.com",
"whitehallledger.com",
"whitehouse.gov",
"whiterivercurrent.com",
"whitesalmonenterprise.com",
"whitewaterpub.com",
"whitmanpioneer.com",
"whittierdailynews.com",
"whiznews.com",
"whky.com",
"whlt.com",
"whmbtv.com",
"whme.com",
"whno.com",
"whns.com",
"whnt.com",
"whotv.com",
"whotv.com",
"whro.org",
"whsv.com",
"whvoice.com",
"whyy.org",
"whyy.org",
"wibw.com",
"wibx950.com",
"wicd15.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickedlocal.com",
"wickenburg-az.com",
"wickenburgsun.com",
"wics.com",
"wics.com",
"wicu12.com",
"wicz.com",
"wifr.com",
"wilcoonline.com",
"wilcosun.com",
"wilkesbeacon.com",
"willamettecollegian.com",
"willcoxrangenews.com",
"williamsnews.com",
"williamsondailynews.com",
"williamsonherald.com",
"williamspioneerreview.com",
"willistonherald.com",
"willistonpioneer.com",
"willitsnews.com",
"willowglentimes.com",
"willspointchronicle.com",
"wilm-tv.com",
"wilmettebeacon.com",
"wilsoncountynews.com",
"wilsonpost.com",
"wilsontimes.com",
"wiltonbulletin.com",
"wilx.com",
"winchesternewsgazette.com",
"winchesterstar.com",
"windomnews.com",
"windowontheclearwater.com",
"windycitymediagroup.com",
"windycitytimes.com",
"winfieldamerican.com",
"winknews.com",
"winnetkacurrent.com",
"winnipegfreepress.com",
"winnparishenterprise.com",
"winonadailynews.com",
"winonapost.com",
"winonatimes.com",
"winstoncountyjournal.com",
"wintersetmadisonian.com",
"wintersexpress.com",
"winthroptranscript.com",
"wiproud.com",
"wiproud.com",
"wired.co.uk",
"wired.com",
"wiscassetnewspaper.com",
"wiscnews.com",
"wiscnews.com",
"wiscnews.com",
"wiscnews.com",
"wiscnews.com",
"wiscnews.com",
"wisconsinrapidstribune.com",
"wisconsinscw.com",
"wise33.com",
"wishtv.com",
"wisn.com",
"wisn.com",
"wistv.com",
"witf.org",
"witntv.com",
"wivb.com",
"wix.com",
"wix.com",
"wjactv.com",
"wjal.com",
"wjbf.com",
"wjcl.com",
"wjct.org",
"wjeb.org",
"wjeb.org",
"wjettv.com",
"wjfw-nbc12.com",
"wjhg.com",
"wjhl.com",
"wjhnews.com",
"wjla.com",
"wjlp3.com",
"wjtc.com",
"wjtv.com",
"wjwj.org",
"wjystv62.net",
"wjzy.com",
"wkar.org",
"wkbn.com",
"wkbn.com",
"wkbt.com",
"wkbw.com",
"wkcurrent.com",
"wkdh.com",
"wkef22.com",
"wkfk.com",
"wkno.org",
"wkow.com",
"wkowtv.com",
"wkrc.com",
"wkrg.com",
"wkrg.com",
"wkrn.com",
"wkrp.tv",
"wktctv.com",
"wktv.com",
"wkuherald.com",
"wkyc.com",
"wkyt.com",
"wlaj.com",
"wlbt.com",
"wlbz2.com",
"wlfi.com",
"wlio.com",
"wliw.org",
"wljc.com",
"wlky.com",
"wlky.com",
"wlla.com",
"wlmb.com",
"wlns.com",
"wlos.com",
"wlos.com",
"wlov.com",
"wlox.com",
"wlrn.org",
"wltx.com",
"wltz.com",
"wluctv6.com",
"wluf.tv",
"wluk.com",
"wlvt.org",
"wlwt.com",
"wlwt.com",
"wm.edu",
"wmar.com",
"wmbb.com",
"wmbctv.com",
"wmbd.com",
"wmbfnews.com",
"wmbftv.com",
"wmcactionnews5.com",
"wmctv.com",
"wmdntv.com",
"wmdt.com",
"wmfe.org",
"wmgt.com",
"wmht.org",
"wmicentral.com",
"wmlw.com",
"wmtw.com",
"wmtw.com",
"wmur.com",
"wmur.com",
"wmur.com",
"wmyo.com",
"wmyt12.com",
"wnct.com",
"wnd.com",
"wndu.com",
"wndy.com",
"wndytv.com",
"wned.org",
"wnem.com",
"wnep.com",
"wnep.com",
"wnet.org",
"wnewsj.com",
"wngt.com",
"wnin.org",
"wnit.org",
"wnlo.com",
"wnpt.net",
"wnsc.org",
"wnwo.com",
"wnyc.org",
"wnypapers.com",
"wnypapers.com",
"wnypapers.com",
"wnyt.com",
"woai.com",
"wogx.com",
"woitv.com",
"wokr13.tv",
"wolfpointherald.com",
"wolo.com",
"woodburybulletin.com",
"woodfordsun.com",
"woods-n-waternews.com",
"woodsideherald.com",
"woodtv.com",
"woodwardnews.net",
"woonsocketcall.com",
"wooster.edu",
"wordpress.com",
"wordpress.com",
"world.wng.org",
"worldbank.org",
"worldpoliticsreview.com",
"wosu.org",
"wosu.org",
"wothtv.com",
"wotv.com",
"wotv4women.com",
"wotv4women.com",
"woub.org",
"wowktv.com",
"wowt.com",
"wpba.org",
"wpbf.com",
"wpbf.com",
"wpbstv.org",
"wpbt2.org",
"wpde.com",
"wpde.com",
"wpecnews12.com",
"wpgh53.com",
"wpi.edu",
"wpmi.com",
"wpnews.com",
"wpr.org",
"wpri.com",
"wpsdlocal6.com",
"wpt.org",
"wpt.org",
"wpt.org",
"wpt.org",
"wpt.org",
"wpt.org",
"wpta.com",
"wptv.com",
"wptz.com",
"wptz.com",
"wpvi.com",
"wpxi.com",
"wqad.com",
"wqcw.com",
"wqed.org",
"wqln.org",
"wqow.com",
"wqpt.org",
"wral.com",
"wrangellsentinel.com",
"wranglernews.com",
"wrbl.com",
"wrcbtv.com",
"wrdw.com",
"wrdw.com",
"wreg.com",
"wrestlinginc.com",
"wret.org",
"wrex.com",
"wrgb.com",
"wric.com",
"wrightstownspirit.com",
"wrjm.com",
"wroctv.com",
"wrsptv.com",
"wrsptv.com",
"wrvo.org",
"wrxytv.com",
"wsav.com",
"wsaw.com",
"wsaz.com",
"wsbe.org",
"wsbt.com",
"wsbtv.com",
"wschronicle.com",
"wsec.org",
"wset.com",
"wsfa.com",
"wsfx.com",
"wsiltv.com",
"wsiu.org",
"wsj.com",
"wsjk-wkop.org",
"wsjk-wkop.org",
"wsky4.com",
"wsls.com",
"wsmh.com",
"wsmv.com",
"wsoctv.com",
"wsoctv.com",
"wspa.com",
"wsre.org",
"wstm.com",
"wsu.edu",
"wsusignpost.com",
"wsvn.com",
"wswg.tv",
"wsws.org",
"wsyr.com",
"wsyt68.com",
"wsyx6.com",
"wtae.com",
"wtajtv.com",
"wtci-tv45.com",
"wten.com",
"wten.com",
"wtgs.com",
"wthitv.com",
"wthr.com",
"wtkr.com",
"wtkr.com",
"wtlw.com",
"wtnh.com",
"wtnh.com",
"wtnzfox43.com",
"wtoc.com",
"wtoctv.com",
"wtok.com",
"wtol.com",
"wtop.com",
"wtov9.com",
"wtov9.com",
"wtrf.com",
"wtrf.com",
"wtsftv.com",
"wtsp.com",
"wtte28.com",
"wtto21.com",
"wtto21.com",
"wttw.com",
"wtva.com",
"wtvh.com",
"wtvi.org",
"wtvm.com",
"wtvo.com",
"wtvp.org",
"wtvq.com",
"wtvr.com",
"wtvs.org",
"wtvynews4.com",
"wtwc40.com",
"wtwo.com",
"wtxl.com",
"wuacc.edu",
"wucftv.org",
"wuft.org",
"wupltv.com",
"wusa9.com",
"wusfnews.wusf.usf.edu",
"wutv.com",
"wutv29.com",
"wuxp.com",
"wvah.com",
"wvbt.com",
"wvea.org",
"wvec.com",
"wvgazettemail.com",
"wvia.org",
"wviz.org",
"wvmetronews.com",
"wvnewsviews.com",
"wvnstv.com",
"wvobserver.com",
"wvpt.net",
"wvpt.net",
"wvpubcast.org",
"wvpubcast.org",
"wvpublic.org",
"wvtm13.com",
"wvtm13.com",
"wvva.com",
"wwaytv3.com",
"wweek.com",
"wwhotv.com",
"wwlp.com",
"wwltv.com",
"wwmt.com",
"wwnytv.com",
"wwnytv.net",
"wwsb.com",
"wxcw.com",
"wxel.org",
"wxii12.com",
"wxii12.com",
"wxii12.com",
"wxix.com",
"wxow.com",
"wxsp.tv",
"wxtx.com",
"wxvt.com",
"wxxi.org",
"wxxinews.org",
"wxxv25.com",
"wxyz.com",
"wybe.org",
"wycc.org",
"wydctv.com",
"wyes.org",
"wyff4.com",
"wyff4.com",
"wylienews.com",
"wylr.net",
"wymorearborstate.com",
"wymt.com",
"wyo.gov",
"wyodaily.com",
"wyomingnews.com",
"wyomingpublicmedia.org",
"wyoptv.org",
"wyowtv34.com",
"wytv.com",
"wytv.com",
"wyzz43.com",
"wzvntv.com",
"wzzm13.com",
"xeniagazette.com",
"xewt12.com",
"xxlmag.com",
"yadkinripple.com",
"yahoo.com",
"news.yahoo.com",
"entertainment.yahoo.com",
"yakimaherald.com",
"yaleclimateconnections.org",
"yaledailynews.com",
"yaleherald.com",
"yalnews.com",
"yamei-today.com",
"yankeemagazine.com",
"yankton.net",
"yazooherald.net",
"ycobserver.com",
"ydr.com",
"yellowhammernews.com",
"yellowstone.net",
"yellowstone.net",
"yelmonline.com",
"yesmagazine.org",
"yesweekly.com",
"yflyer.com",
"yle.fi",
"ynetnews.com",
"yorkdispatch.com",
"yorknewstimes.com",
"yorkshirepost.co.uk",
"youra.com",
"youralaskalink.com",
"yourbasin.com",
"yourbasin.com",
"yourbigsky.com",
"yourbigsky.com",
"yourcentralvalley.com",
"yourcentralvalley.com",
"yourcw.tv",
"yourcwtv.com",
"yourcwtv.com",
"yourdailyglobe.com",
"yourdailyjournal.com",
"yourdu.net",
"yourerie.com",
"yourerie.com",
"yourgv.com",
"yourobserver.com",
"yourphx.com",
"yourstephenvilletx.com",
"yourstory.com",
"yoursun.com",
"yoursun.com",
"yourwestvalley.com",
"yourwestvalley.com",
"yourwestvalley.com",
"yourxgroup.com",
"ysnews.com",
"yucommentator.org",
"yuobserver.com",
"zacks.com",
"zanesvilletimesrecorder.com",
"zavalacountysentinel.net",
"zdnet.com",
"zeenews.india.com",
"zephyrhillsnewsonline.com",
"zerkalomn.com",
"zion-bentonnews.com",
"zioncanyon.com",
"zip06.com",
"zip06.com",
"zip06.com",
"zip06.com",
"zip06.com",
"zip06.com",
"zip06.com",
"zumbrota.com"
];

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function initialize$2 (rally, is_dev_mode) {
  // Set UserSurvey
  setSurvey({surveyUrl:"https://stanfordgsb.qualtrics.com/jfe/form/SV_5i37rPJXmLD1VDn",
  reminderInterval:60,
  reminderTitle:"Consent Survey Reminder",
  reminderMessage:"Please complete the consent survey!",
  reminderIcon:"",
  popupIcon:"",
  surveyCompletionUrl:"http://stanford-news-study.su.domains/" 
});

   // Start Article Contents Module
   startMeasurement({
    domains: destinationDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  });
  //Start PageNav module
  startMeasurement$2({
    domains: destinationDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  });
  // Start PageNavSensitive module
  startMeasurement$3({
    domains: sensitiveDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  });

 

  // Start Advertisements Module
  startMeasurement$1({
    domains: destinationDomains,
    rally: rally,
    is_dev_mode: is_dev_mode
  });
}

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

// Initialize the Rally object
const rally = new Rally();
const DEV_MODE = true;
rally.initialize(
  // A sample key id used for encrypting data.
  "sample-invalid-key-id",
  // A sample *valid* JWK object for the encryption.
  {
    "kty":"EC",
    "crv":"P-256",
    "x":"f83OJ3D2xF1Bg8vub9tLe1gHMzV76e8Tus9uPHvRVEU",
    "y":"x_FEzRu9m36HLN_tue659LNpXW6pCyStikYjKIWI5a0",
    "kid":"Public key used in JWS spec Appendix A.3 example"
  },
  // The following constant is automatically provided by
  // the build system.
  false,
).then(resolve => {
  // Initialize the study and start it.
  initialize$2(rally, DEV_MODE);
}, reject =>{
  // Do not start the study in this case. Something
  // went wrong.
});
