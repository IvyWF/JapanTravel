// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/osaka/1.jpg":[function(require,module,exports) {
module.exports = "/1.20deb4b0.jpg";
},{}],"images/osaka/2.jpg":[function(require,module,exports) {
module.exports = "/2.a3a90409.jpg";
},{}],"images/osaka/3.jpg":[function(require,module,exports) {
module.exports = "/3.a7d98bb4.jpg";
},{}],"images/osaka/4.jpg":[function(require,module,exports) {
module.exports = "/4.7cf12fc2.jpg";
},{}],"images/osaka/5.jpg":[function(require,module,exports) {
module.exports = "/5.534041c2.jpg";
},{}],"images/osaka/6.jpg":[function(require,module,exports) {
module.exports = "/6.dfffe6ce.jpg";
},{}],"scripts/gallery.js":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../images/osaka/1.jpg"));
var _2 = _interopRequireDefault(require("../images/osaka/2.jpg"));
var _3 = _interopRequireDefault(require("../images/osaka/3.jpg"));
var _4 = _interopRequireDefault(require("../images/osaka/4.jpg"));
var _5 = _interopRequireDefault(require("../images/osaka/5.jpg"));
var _6 = _interopRequireDefault(require("../images/osaka/6.jpg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var galleryImages = document.querySelectorAll(".galleryPopupOne img");
var getLatestOpenedImage;
var windowWidth = window.innerWidth;
if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      var getImageUrl = image.src;
      getLatestOpenedImage = index + 1;
      var container = document.body;
      var newImageWindow = document.createElement("div");
      container.appendChild(newImageWindow);
      newImageWindow.setAttribute("class", "img-window");
      newImageWindow.addEventListener('click', closeImage);

      //newImageWindow.setAttribute("onclick", closeImage()); => this 'onclick' doesn't work any more. Need to create an addEventListener

      var newImage = document.createElement("img");
      var imageTitle = document.createElement("p");
      newImageWindow.appendChild(newImage);
      newImageWindow.appendChild(imageTitle);
      newImage.setAttribute("src", getImageUrl);
      newImage.setAttribute("id", "current-img");
      newImage.setAttribute("alt", "Morning///00" + (index + 1));
      var alt = newImage.getAttribute('alt');
      imageTitle.textContent = alt;
      newImage.onload = function () {
        var imgWidth = this.width;
        var calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;
        var newNextBtn = document.createElement("a");
        var btnNextText = document.createTextNode(">");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.addEventListener('click', function changeImage() {
          //console.log(setNewImgUrl);
          document.querySelector("#current-img").remove();
          var getImgWindow = document.querySelector(".img-window");
          var newImg = document.createElement("img");
          var imgTitle = document.createElement("p");
          getImgWindow.appendChild(newImg);
          getImgWindow.appendChild(imgTitle);
          imgTitle.style.cssText = "z-index: 100;";
          imgTitle.style.cssText = "background-color: black;";
          var images = _toConsumableArray(document.querySelectorAll("img"));
          // galleryImages.forEach(image, index) {
          //     let getUrl = image.src;
          //     let getUrlPos = getUrl.split("http://localhost:1234/");
          //     let setNewUrl = getUrlPos[1];
          // }
          var calcNewImg = getLatestOpenedImage + 1;
          if (calcNewImg > galleryImages.length) {
            calcNewImg = 1;
          }
          console.log(calcNewImg);
          var getNewImgUrl = images[calcNewImg - 1].src;
          var alT = calcNewImg;
          imgTitle.textContent = "Morning///00".concat(alT);
          newImg.setAttribute("src", getNewImgUrl);
          newImg.setAttribute("id", "current-img");
          getLatestOpenedImage = calcNewImg;
          newImg.onload = function () {
            var imgWidth = this.width;
            var calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;
            var nextBtn = document.querySelector(".img-btn-next");
            nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
          };
        });
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
        var newPrevBtn = document.createElement("a");
        var btnPrevText = document.createTextNode("<");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.addEventListener('click', function changeImage() {
          document.querySelector("#current-img").remove();
          var getImgWindow = document.querySelector(".img-window");
          var newImg = document.createElement("img");
          var imgTitle = document.createElement("p");
          getImgWindow.appendChild(newImg);
          getImgWindow.appendChild(imgTitle);
          imgTitle.style.cssText = "z-index: 100;";
          imgTitle.style.cssText = "background-color: black;";
          var images = _toConsumableArray(document.querySelectorAll("img"));
          var calcNewImg = getLatestOpenedImage - 1;
          if (calcNewImg < 1) {
            calcNewImg = galleryImages.length;
          }
          var getNewImgUrl = images[calcNewImg - 1].src;
          var alT = calcNewImg;
          imgTitle.textContent = "Morning///00".concat(alT);
          newImg.setAttribute("src", getNewImgUrl);
          newImg.setAttribute("id", "current-img");
          getLatestOpenedImage = calcNewImg;
          newImg.onload = function () {
            var imgWidth = this.width;
            var calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;
            var prevBtn = document.querySelector(".img-btn-prev");
            prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
          };
        });
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
      };
    };
  });
}
var galleryTwoImages = document.querySelectorAll(".galleryPopupTwo img");
var getLatestOpenImage;
if (galleryTwoImages) {
  galleryTwoImages.forEach(function (image, index) {
    image.onclick = function () {
      var getImageUrl = image.src;
      getLatestOpenImage = index + 1;
      var container = document.body;
      var newImageWindow = document.createElement("div");
      container.appendChild(newImageWindow);
      newImageWindow.setAttribute("class", "img-window");
      newImageWindow.addEventListener('click', closeImage);

      //newImageWindow.setAttribute("onclick", closeImage()); => this 'onclick' doesn't work any more. Need to create an addEventListener

      var newImage = document.createElement("img");
      var imageTitle = document.createElement("p");
      newImageWindow.appendChild(newImage);
      newImageWindow.appendChild(imageTitle);
      newImage.setAttribute("src", getImageUrl);
      newImage.setAttribute("id", "current-img");
      newImage.setAttribute("alt", "Morning///00" + (index + 1));
      var alt = newImage.getAttribute('alt');
      imageTitle.textContent = alt;
      newImage.onload = function () {
        var imgWidth = this.width;
        var calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;
        var newNextBtn = document.createElement("a");
        var btnNextText = document.createTextNode(">");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.addEventListener('click', function changeImage() {
          //console.log(setNewImgUrl);
          document.querySelector("#current-img").remove();
          var getImgWindow = document.querySelector(".img-window");
          var newImg = document.createElement("img");
          var imgTitle = document.createElement("p");
          getImgWindow.appendChild(newImg);
          getImgWindow.appendChild(imgTitle);
          imgTitle.style.cssText = "z-index: 100;";
          imgTitle.style.cssText = "background-color: black;";
          var images = _toConsumableArray(document.querySelectorAll("img"));
          // galleryImages.forEach(image, index) {
          //     let getUrl = image.src;
          //     let getUrlPos = getUrl.split("http://localhost:1234/");
          //     let setNewUrl = getUrlPos[1];
          // }
          var calcNewImg = getLatestOpenImage + 1;
          if (calcNewImg > galleryTwoImages.length) {
            calcNewImg = 1;
          }
          console.log(calcNewImg);
          var getNewImgUrl = images[calcNewImg - 1].src;
          var alT = calcNewImg;
          imgTitle.textContent = "Morning///00".concat(alT);
          newImg.setAttribute("src", getNewImgUrl);
          newImg.setAttribute("id", "current-img");
          getLatestOpenImage = calcNewImg;
          newImg.onload = function () {
            var imgWidth = this.width;
            var calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;
            var nextBtn = document.querySelector(".img-btn-next");
            nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
          };
        });
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
        var newPrevBtn = document.createElement("a");
        var btnPrevText = document.createTextNode("<");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.addEventListener('click', function changeImage() {
          document.querySelector("#current-img").remove();
          var getImgWindow = document.querySelector(".img-window");
          var newImg = document.createElement("img");
          var imgTitle = document.createElement("p");
          getImgWindow.appendChild(newImg);
          getImgWindow.appendChild(imgTitle);
          imgTitle.style.cssText = "z-index: 100;";
          imgTitle.style.cssText = "background-color: black;";
          var images = _toConsumableArray(document.querySelectorAll("img"));
          var calcNewImg = getLatestOpenImage - 1;
          if (calcNewImg < 1) {
            calcNewImg = galleryTwoImages.length;
          }
          var getNewImgUrl = images[calcNewImg - 1].src;
          var alT = calcNewImg;
          imgTitle.textContent = "Morning///00".concat(alT);
          newImg.setAttribute("src", getNewImgUrl);
          newImg.setAttribute("id", "current-img");
          getLatestOpenedImage = calcNewImg;
          newImg.onload = function () {
            var imgWidth = this.width;
            var calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;
            var prevBtn = document.querySelector(".img-btn-prev");
            prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
          };
        });
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
      };
    };
  });
}
function closeImage() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prev").remove();
}

// Popup modal for 3rd slider
var modal = document.querySelector('.modal');
var titles = document.querySelectorAll('.galleryThree h2');
var imgOpened = document.querySelector('.full-img');
var caption = document.querySelector('.caption');
// Load images into an array for reference
var images = [_.default, _2.default, _3.default, _4.default, _5.default, _6.default];
titles.forEach(function (title, index) {
  title.addEventListener('click', function () {
    modal.classList.add('open');
    imgOpened.classList.add('open');
    var imgOpenedSrc = images[index];
    imgOpened.src = imgOpenedSrc;
    var imgTitle = title.innerHTML;
    caption.textContent = imgTitle;
  });
});
modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    imgOpened.classList.remove('open');
  }
});
imgOpened.addEventListener('click', function (e) {
  if (e.target.classList.contains('full-img')) {
    modal.classList.remove('open');
    imgOpened.classList.remove('open');
  }
});
},{"../images/osaka/1.jpg":"images/osaka/1.jpg","../images/osaka/2.jpg":"images/osaka/2.jpg","../images/osaka/3.jpg":"images/osaka/3.jpg","../images/osaka/4.jpg":"images/osaka/4.jpg","../images/osaka/5.jpg":"images/osaka/5.jpg","../images/osaka/6.jpg":"images/osaka/6.jpg"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50247" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/gallery.js"], null)
//# sourceMappingURL=/gallery.61d82d0d.js.map