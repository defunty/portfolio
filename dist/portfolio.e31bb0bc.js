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
})({"index.js":[function(require,module,exports) {
var shape = document.getElementById("svg"); // media query event handler

if (matchMedia) {
  var mq = window.matchMedia("(min-width: 826px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
} // media query change


function WidthChange(mq) {
  if (mq.matches) {
    shape.setAttribute("viewBox", "0 0 765 587");
    shape.setAttribute("enable-background", "0 0 765 587");
  } else {
    shape.setAttribute("viewBox", "0 0 592 588");
    shape.setAttribute("enable-background", "0 0 592 588");
  }
}

;
var $effect = $("#effect"),
    $circ = $(".iconCircle"),
    isFF = !!window.sidebar,
    $m1 = $(".money .one"),
    $m2 = $(".money .two"),
    $m3 = $(".money .three"),
    $eLine = $(".eLine"),
    $green = "#8DAF82",
    $blue = "#BEEAE6",
    $reg = "#414751",
    $orange = "#F47A57",
    $red = "#931429",
    $yellow = "#F9B458",
    $mReg = "#23262C";
TweenMax.set($(".dialog"), {
  visibility: "visible"
});
TweenMax.set($circ, {
  svgOrigin: "222.2, 154",
  x: 14,
  y: 58
}); //svgOrigin:"321.05, 323.3",

for (var i = 1; i < 15; i++) {
  TweenMax.set($(".d" + i), {
    opacity: 0
  });
} // rotateInfo


function rotateInfo() {
  var tl = new TimelineMax();
  tl.add("likely");
  tl.to($(".p1"), 0.3, {
    scale: 1.3,
    transformOrigin: "50% 100%",
    fill: $blue,
    ease: Bounce.easeOut
  }, "likely").to($effect, 0.3, {
    y: -10,
    ease: Circ.easeOut
  }, "likely").to($eLine, 0.3, {
    stroke: $orange,
    ease: Sine.easeOut
  }, "likely").fromTo($(".d1"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely").to($m1, 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely");
  tl.to($(".p1"), 0.3, {
    scale: 1,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=1.25").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=1.25").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeIn
  }, "likely+=1.25").to($(".d1"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=1.25").to($m1, 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=1.25");
  tl.to($circ, 1, {
    rotation: -22
  }, "likely+=1.25");
  tl.to($(".p2"), 0.3, {
    scale: 1.3,
    transformOrigin: "50% 100%",
    fill: $blue,
    ease: Bounce.easeOut
  }, "likely+=2").to($effect, 0.3, {
    y: -18,
    ease: Circ.easeOut
  }, "likely+=2").to($eLine, 0.3, {
    stroke: $orange,
    ease: Sine.easeOut
  }, "likely+=2").fromTo($(".d2"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=2").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=2");
  tl.to($(".p2"), 0.3, {
    scale: 1,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=3.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=3.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeIn
  }, "likely+=3.5").to($(".d2"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=3.5").to([$m1, $m2], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=3.5");
  tl.to($circ, 1, {
    rotation: -41
  }, "likely+=3.5");
  tl.to($(".p3"), 0.3, {
    scale: 1.3,
    transformOrigin: "50% 100%",
    fill: $blue,
    ease: Bounce.easeOut
  }, "likely+=4").to($effect, 0.3, {
    y: -20,
    ease: Circ.easeOut
  }, "likely+=4").to($eLine, 0.3, {
    stroke: $orange,
    ease: Sine.easeOut
  }, "likely+=4").fromTo($(".d3"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=4").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=4");
  tl.to($(".p3"), 0.3, {
    scale: 1,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=5.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=5.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeIn
  }, "likely+=5.5").to($(".d3"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=5.5").to([$m1, $m2], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=5.5");
  tl.to($circ, 1, {
    rotation: -62
  }, "likely+=5.5");
  tl.to($(".p4"), 0.3, {
    scale: 1.3,
    transformOrigin: "50% 100%",
    fill: $blue,
    ease: Bounce.easeOut
  }, "likely+=6").to($effect, 0.3, {
    y: -20,
    ease: Circ.easeOut
  }, "likely+=6").to($eLine, 0.3, {
    stroke: $orange,
    ease: Sine.easeOut
  }, "likely+=6").fromTo($(".d4"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=6").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=6");
  tl.to($(".p4"), 0.3, {
    scale: 1,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=7.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=7.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeIn
  }, "likely+=7.5").to($(".d4"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=7.5").to([$m1, $m2], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=7.5");
  tl.to($circ, 1, {
    rotation: -84
  }, "likely+=7.5");
  tl.to($(".p5"), 0.3, {
    scale: 1.3,
    transformOrigin: "50% 100%",
    fill: $blue,
    ease: Bounce.easeOut
  }, "likely+=8").to($effect, 0.3, {
    y: -6,
    ease: Circ.easeOut
  }, "likely+=8").fromTo($(".d5"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=8").to([$m1, $m2, $m3], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=8");
  tl.to($(".p5"), 0.3, {
    scale: 1,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=9.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=9.5").to($(".d5"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=9.5").to([$m1, $m2, $m3], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=9.5");
  tl.to($circ, 1, {
    rotation: -103
  }, "likely+=9.5");
  tl.to($(".p6"), 0.3, {
    scale: 1.3,
    transformOrigin: "50% 100%",
    fill: $blue,
    ease: Bounce.easeOut
  }, "likely+=10").to($effect, 0.3, {
    y: -40,
    ease: Circ.easeOut
  }, "likely+=10").to($eLine, 0.3, {
    stroke: $yellow,
    ease: Circ.easeOut
  }, "likely+=10").fromTo($(".d6"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=10").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=10");
  tl.to($(".p6"), 0.3, {
    scale: 1,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=11.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=11.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeOut
  }, "likely+=11.5").to($(".d6"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=11.5").to([$m1, $m2], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=11.5");
  tl.to($circ, 1, {
    rotation: -124
  }, "likely+=11.5");
  tl.to($(".p7"), 0.3, {
    scale: 1.3,
    transformOrigin: "50% 100%",
    fill: $blue,
    x: 10,
    y: 10,
    ease: Bounce.easeOut
  }, "likely+=12").to($effect, 0.3, {
    y: -40,
    ease: Circ.easeOut
  }, "likely+=12").to($eLine, 0.3, {
    stroke: $yellow,
    ease: Circ.easeOut
  }, "likely+=12").fromTo($(".d7"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=12").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=12");
  tl.to($(".p7"), 0.3, {
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=13.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=13.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeOut
  }, "likely+=13.5").to($(".d7"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=13.5").to([$m1, $m2], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=13.5");
  tl.to($circ, 1, {
    rotation: -150
  }, "likely+=13.5");
  tl.to($(".p8"), 0.3, {
    scale: 1.3,
    transformOrigin: "50% 100%",
    fill: $blue,
    x: 10,
    y: 10,
    ease: Bounce.easeOut
  }, "likely+=14").to($effect, 0.3, {
    y: -20,
    ease: Circ.easeOut
  }, "likely+=14").to($eLine, 0.3, {
    stroke: $orange,
    ease: Circ.easeOut
  }, "likely+=14").fromTo($(".d8"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=14").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=14");
  tl.to($(".p8"), 0.3, {
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=15.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=15.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeOut
  }, "likely+=15.5").to($(".d8"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=15.5").to([$m1, $m2], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=15.5");
  tl.to($circ, 1, {
    rotation: -176
  }, "likely+=15.5");
  tl.to($(".p9"), 0.3, {
    scale: 1.3,
    transformOrigin: "100% 100%",
    fill: $blue,
    x: 5,
    y: 10,
    ease: Bounce.easeOut
  }, "likely+=16").to($effect, 0.3, {
    y: -35,
    ease: Circ.easeOut
  }, "likely+=16").to($eLine, 0.3, {
    stroke: $yellow,
    ease: Circ.easeOut
  }, "likely+=16").fromTo($(".d9"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=16").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=16");
  tl.to($(".p9"), 0.3, {
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=17.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=17.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeOut
  }, "likely+=17.5").to($(".d9"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=17.5").to([$m1, $m2], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=17.5");
  tl.to($circ, 1, {
    rotation: -199
  }, "likely+=17.5");
  tl.to($(".p10"), 0.3, {
    scale: 1.3,
    transformOrigin: "100% 100%",
    rotation: 4,
    fill: $blue,
    x: 3,
    y: 10,
    ease: Bounce.easeOut
  }, "likely+=18").to($effect, 0.3, {
    y: -6,
    ease: Circ.easeOut
  }, "likely+=18").fromTo($(".d10"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=18").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=18");
  tl.to($(".p10"), 0.3, {
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=19.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=19.5").to($(".d10"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=19.5").to([$m1, $m2], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=19.5");
  tl.to($circ, 1, {
    rotation: -220
  }, "likely+=19.5");
  tl.to($(".p11"), 0.3, {
    scale: 1.3,
    transformOrigin: "100% 100%",
    fill: $blue,
    x: 5,
    y: 10,
    ease: Bounce.easeOut
  }, "likely+=20").to($effect, 0.3, {
    y: -35,
    ease: Circ.easeOut
  }, "likely+=20").to($eLine, 0.3, {
    stroke: $yellow,
    ease: Circ.easeOut
  }, "likely+=20").fromTo($(".d11"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=20").to($m1, 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=20");
  tl.to($(".p11"), 0.3, {
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=21.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=21.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeOut
  }, "likely+=21.5").to($(".d11"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=21.5").to($m1, 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=21.5");
  tl.to($circ, 1, {
    rotation: -243
  }, "likely+=21.5");
  tl.to($(".p12"), 0.3, {
    scale: 1.3,
    transformOrigin: "100% 100%",
    fill: $blue,
    x: 5,
    y: 10,
    ease: Bounce.easeOut
  }, "likely+=22").to($effect, 0.3, {
    y: -35,
    ease: Circ.easeOut
  }, "likely+=22").to($eLine, 0.3, {
    stroke: $yellow,
    ease: Circ.easeOut
  }, "likely+=22").fromTo($(".d12"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=22").to([$m1, $m2, $m3], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=22");
  tl.to($(".p12"), 0.3, {
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=23.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=23.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeOut
  }, "likely+=23.5").to($(".d12"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=23.5").to([$m1, $m2, $m3], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=23.5");
  tl.to($circ, 1, {
    rotation: -265
  }, "likely+=23.5");
  tl.to($(".p13"), 0.3, {
    scale: 1.3,
    transformOrigin: "100% 100%",
    fill: $blue,
    x: 5,
    y: 10,
    ease: Bounce.easeOut
  }, "likely+=24").to($effect, 0.3, {
    y: -15,
    ease: Circ.easeOut
  }, "likely+=24").to($eLine, 0.3, {
    stroke: $orange,
    ease: Circ.easeOut
  }, "likely+=24").fromTo($(".d13"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=24").to([$m1, $m2, $m3], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=24");
  tl.to($(".p13"), 0.3, {
    scale: 1,
    x: 0,
    y: 0,
    transformOrigin: "50% 100%",
    fill: $reg,
    ease: Back.easeIn
  }, "likely+=25.5").to($effect, 0.3, {
    y: 0,
    ease: Circ.easeIn
  }, "likely+=25.5").to($eLine, 0.3, {
    stroke: $red,
    ease: Sine.easeOut
  }, "likely+=25.5").to($(".d13"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, "likely+=25.5").to([$m1, $m2, $m3], 0.3, {
    fill: $mReg,
    ease: Circ.easeIn
  }, "likely+=25.5");
  tl.to($circ, 1, {
    rotation: -287
  }, "likely+=25.5");
  tl.to($(".p14"), 0.3, {
    scale: 1.3,
    transformOrigin: "100% 100%",
    fill: $blue,
    x: 5,
    y: 10,
    ease: Bounce.easeOut
  }, "likely+=26").to($effect, 0.3, {
    y: -20,
    ease: Circ.easeOut
  }, "likely+=26").to($eLine, 0.3, {
    stroke: $orange,
    ease: Circ.easeOut
  }, "likely+=26").fromTo($(".d14"), 0.3, {
    opacity: 0,
    scale: 0.7
  }, {
    opacity: 1,
    scale: 1,
    ease: Back.easeOut
  }, "likely+=26").to([$m1, $m2], 0.3, {
    fill: $green,
    ease: Circ.easeOut
  }, "likely+=26");
  tl.timeScale(0.7);
  return tl;
}

var master = new TimelineMax();
master.add(rotateInfo(), "rotateInfo"); //master.seek("rotateInfo+=24");

$(document).on('click', 'a.replay', function (e) {
  master.restart();
  e.preventDefault();
});
var slider = $("#slider"),
    sliderValue = {
  value: 0
};
slider.slider({
  range: false,
  min: 0,
  max: 100,
  step: .1,
  start: function start() {
    master.pause();
  },
  slide: function slide(event, ui) {
    master.progress(ui.value / 100);
  },
  stop: function stop() {
    master.play();
  }
});
master.eventCallback("onUpdate", function () {
  sliderValue.value = master.progress() * 100;
  slider.slider(sliderValue);
});
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61937" + '/');

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
      }); // Enable HMR for CSS by default.

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
      } else {
        window.location.reload();
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/portfolio.e31bb0bc.js.map