/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("phenix-web-sdk", [], factory);
	else if(typeof exports === 'object')
		exports["phenix-web-sdk"] = factory();
	else
		root["phenix-web-sdk"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 87);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(86)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(LodashLight) {
    'use strict';

    return LodashLight;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(84)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(assert) {
    return assert;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(a,b){if(true)module.exports=b(__webpack_require__(0),__webpack_require__(31),__webpack_require__(1),__webpack_require__(3),__webpack_require__(8),__webpack_require__(4));else { var d, c; }}(this,function(a,b,c,d,e,f){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a["default"]}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=12)}([function(a,b,c){(function(c){var d,e;d=[],e=function(){"use strict";var a=function(){return"object"==typeof window?window:"object"==typeof c?c:{}};return a()}.apply(b,d),!(void 0!==e&&(a.exports=e))}).call(b,c(5))},function(b,c){b.exports=a},function(a,c){a.exports=b},function(a,b,c){var d,e;d=[c(1),c(7),c(4),c(0),c(13)],e=function(a,b,c,d,e){"use strict";function f(a,d,e,f){var h=this;this._ghost=a,this._stream=d,this._isPhenixPlugin="phenix"===e,this._isFlash="flash"===e,this._options=f||{},this._events={},this._disposables=new b.DisposableList,this._flashPlayer=null;var i=function(a){h._loaded=!0,h._enabled=a===!0,a?l.call(h):q("Failed to create Phenix video element"),h._onReady&&h._onReady(h._enabled)};try{if(this._video=g.call(this),this._video.className=this._ghost.className,this._video.height=this._ghost.height,this._video.width=this._ghost.width,this._ghostInitStyleCssText=this._ghost.style.cssText,this._ghost.style.cssText="visibility:hidden !important;width:0px !important;height:0px !important;margin:0px !important;padding:0px !important;border-style:none !important;border-width:0px !important;max-width:0px !important;max-height:0px !important;outline:none !important",this._disposables.add(new b.Disposable(function(){h._ghost.style.cssText=h._ghostInitStyleCssText})),this._video.onunload=function(){h._loaded=!1},n.call(this),document.body&&document.body.contains||p("document.body.contains is not supported"),document.body&&document.body.contains&&document.body.contains(this._ghost)&&(this._ghost.parentNode.replaceChild(this._video,this._ghost),this._isFlash&&this._flashPlayer&&(this._video=this._flashPlayer.finishInitializationInDom()),this._disposables.add(new b.Disposable(function(){h._video.parentNode&&h._video.parentNode.replaceChild(h._ghost,h._video)}))),!this._isPhenixPlugin)return i(!0);var j=new c;j.waitForReady(this._video,i)}catch(k){q("Error while loading Phenix RTC"+k),i(!1)}}function g(){var a=document.createElement("video");if(this._isPhenixPlugin&&(a=document.createElement("object"),a.type="application/x-phenix-video"),this._isFlash){this._flashPlayer=new e(this._ghost,this._stream,this._options);var c=this;this._disposables.add(new b.Disposable(function(){c._flashPlayer.destroy()})),a=this._flashPlayer.getElement()}return a}function h(a,b,c){if(this._isFlash)return this._flashPlayer.addEventListener(a,b);if(this._isPhenixPlugin){var d=this._events[a];return d||(d=this._events[a]=[],this._loaded&&j.call(this,a)),d.push(b)}return this._video.addEventListener(a,b,c)}function i(a,b,c){if(this._isFlash)return this._flashPlayer.removeEventListener(a,b);{if(!this._isPhenixPlugin)return this._video.removeEventListener(a,b,c);var d=this._events[a];if(d){var e=d.indexOf(b);e>=0&&(d=d.splice(e,1),d.length>0?this._events[a]=d:delete this._events[a])}}}function j(a){function b(){var b=c._events[a];if(b)for(var d=0;d<b.length;d++)b[d].apply(c,arguments)}var c=this;c._video.phenixSetEventListener(a,b)}function k(a,b){var c;document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(b,!0,!0)):(c=document.createEventObject(),c.eventType=b),c.eventName=b,setTimeout(function(){document.createEvent?a.dispatchEvent(c):a.fireEvent("on"+c.eventType,c)})}function l(){for(var a=Object.keys(this._events),b=0;b<a.length;b++)j.call(this,a[b]);this.hookUpEvents(),m.call(this),this._video.id=this._ghost.id,this._video.style.cssText=this._ghostInitStyleCssText,this._video.className=this._ghost.className,this._video.innerHtml=this._ghost.innerHtml,this._video.width=this._ghost.width,this._video.height=this._ghost.height,this._video.autoplay=this._ghost.autoplay,this._video.muted=this._ghost.muted,this._video.defaultMuted=this._ghost.defaultMuted,this._video.volume=this._ghost.volume,this._stream&&!this._isFlash&&(this._video.src=this._stream)}function m(){var c=this,e=["style"];if(a.get(d,["MutationObserver"])){var f=new MutationObserver(function(a){a.forEach(function(a){"attributes"===a.type&&a.target===c._ghost&&e.indexOf(a.attributeName)===-1&&(c._video[a.attributeName]=c._ghost[a.attributeName])})}),g={attributes:!0};f.observe(c._ghost,g),c._disposables.add(new b.Disposable(function(){f.disconnect()}))}else{p("Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.");var h=function(a){c._video[a.target.tagName]=c._ghost[a.target.tagName]};c._ghost.addEventListener?(c._ghost.addEventListener("DOMAttrModified",h,!1),c._disposables.add(new b.Disposable(function(){c._ghost.removeEventListener("DOMAttrModified",h,!1)}))):(c._ghost.attachEvent("onpropertychange",h),c._disposables.add(new b.Disposable(function(){c._ghost.detachEvent("DOMAttrModified",h)})))}}function n(){var c=this;if(a.get(d,["MutationObserver"])){var e=new MutationObserver(function(a){a.forEach(function(a){if("childList"===a.type)for(var b=0;b<a.addedNodes.length;b++){var d=a.addedNodes[b];a.target!==c._video&&(d===c._ghost?(a.target.replaceChild(c._video,c._ghost),l.call(c)):o(a.target,c._ghost)&&(c._ghost.parentNode&&c._ghost.parentNode.replaceChild(c._video,c._ghost),l.call(c)))}})}),f={childList:!0,attributes:!1,characterData:!1,subtree:!0};e.observe(document.body,f),c._disposables.add(new b.Disposable(function(){e.disconnect()}))}else{p("Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.");var g=function(){c._ghost.parentNode&&c._ghost.parentNode.replaceChild(c._video,c._ghost)};c.addEventListener("DOMNodeInserted",g,!1),c._disposables.add(new b.Disposable(function(){c.removeEventListener("DOMNodeInserted",g,!1)}))}}function o(a,b){for(var c=b.parentNode;null!==c;){if(c===a)return!0;c=c.parentNode}return!1}var p=function(){console.log.apply(console,arguments)}||function(){},q=function(){console.error.apply(console,arguments)}||p;return f.prototype.hookUpEvents=function(){var a=this,c=this._ghost,d=function(){k(c,"error")},e=function(){c.muted=a._video.muted,k(c,"mute")},f=function(){c.muted=a._video.muted,k(c,"unmute")},g=function(){c.ended=a._video.ended,k(c,"ended")},h=function(){c.width=a._video.width,c.height=a._video.height,k(c,"loadedmetadata")},i=function(){c.width=a._video.width,c.height=a._video.height,k(c,"loadeddata")},j=function(){c.width=a._video.width,c.height=a._video.height,k(c,"resize")};this.addEventListener("error",d),this.addEventListener("mute",e),this.addEventListener("unmute",f),this.addEventListener("ended",g),this.addEventListener("loadedmetadata",h),this.addEventListener("loadeddata",i),this.addEventListener("resize",j);var l=new b.Disposable(function(){a.removeEventListener("error",d),a.removeEventListener("mute",e),a.removeEventListener("unmute",f),a.removeEventListener("ended",g),a.removeEventListener("loadedmetadata",h),a.removeEventListener("loadeddata",i),a.removeEventListener("resize",j)});return this._disposables.add(l),l},f.prototype.onReady=function(a){var b=this;this._loaded?setTimeout(function(){a(b._enabled)},1):this._onReady=a},f.prototype.getElement=function(){return this._video},f.prototype.addEventListener=function(a,b,c){h.call(this,a,b,c)},f.prototype.removeEventListener=function(a,b,c){i.call(this,a,b,c)},f.prototype.destroy=function(){this._disposables.dispose()},f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(2)],e=function(a){"use strict";function b(a){this._timeout=a||15e3}var c=new a(navigator.userAgent).detect(),d=4,e=function(){console.error.apply(console,arguments)}||console.log;return b.prototype.waitForReadyWithTimeout=function(a,b,f){var g=!1,h=1,i=h,j=function(a){g||(g=!0,b(a))},k=function l(){a.readyState===d?j(!0):a.phenixVersion?j(!0):(h=Math.min(h+1e3,2*h),i+=h,i>f?(e("Timed out while waiting for <object> to load"),j(!1)):setTimeout(l,h))};a.hasOwnProperty&&a.hasOwnProperty("onload")||"IE"!==c.browser&&e("No means of detecting when <object> is loaded"),a.onload=function(){j(!0)},k()},b.prototype.waitForReady=function(a,b){a.phenixVersion?b(!0):this.waitForReadyWithTimeout(a,b,this._timeout)},b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b){var c;c=function(){return this}();try{c=c||Function("return this")()||(0,eval)("this")}catch(d){"object"==typeof window&&(c=window)}a.exports=c},function(a,b){a.exports=c},function(a,b){a.exports=d},function(a,b){a.exports=e},function(a,b,c){var d,e;d=[c(1),c(6),c(8),c(2),c(0),c(15),c(14)],e=function(a,b,c,d,e,f,g){"use strict";function h(){if(a.assign(j,f()),g.isSupported()){j.phenixSupported=!0;var b=new g,c=function(){j.RTCPeerConnection=b.getRTCPeerConnectionConstructor(),j.RTCSessionDescription=b.getRTCSessionDescriptionConstructor(),j.RTCIceCandidate=b.getRTCIceCandidateConstructor(),j.getSources=b.getSourcesDelegate(),j.getUserMedia=b.getUserMediaDelegate(),j.getStats=b.getStatsDelegate(),Function.prototype.bind?(j.attachMediaStream=b.attachMediaStream.bind(b),j.reattachMediaStream=b.reattachMediaStream.bind(b),j.isPhenixEnabled=b.isEnabled.bind(b)):(j.attachMediaStream=function(){b.attachMediaStream.apply(b,arguments)},j.reattachMediaStream=function(){b.reattachMediaStream.apply(b,arguments)},j.isPhenixEnabled=function(){return b.isEnabled()}),j.webrtcSupported=!0,j.phenixSupported=!0,j.phenixVersion=b.getVersion(),j.onLoaded&&j.onLoaded.call()};b.isEnabled()?c():b.onReady(function(a){a&&(c(),j.onload&&"function"==typeof j.onload&&j.onload())}),b.onLoaded(function(){c()})}else j.phenixSupported=!1;return j}var i=new d(navigator.userAgent).detect(),j={browser:i.browser,browserVersion:i.version,phenixSupported:!1,isPhenixEnabled:function(){return!1},onLoaded:void 0,global:e};return a.assign(h(),{shim:h})}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(0)],e=function(a){"use strict";var b=function(b){a.RTCPeerConnection=b.RTCPeerConnection,a.RTCSessionDescription=b.RTCSessionDescription,a.RTCIceCandidate=b.RTCIceCandidate};return b}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){(function(b){var c,c;!function(b){a.exports=b()}(function(){return function a(b,d,e){function f(h,i){if(!d[h]){if(!b[h]){var j="function"==typeof c&&c;if(!i&&j)return c(h,!0);if(g)return c(h,!0);var k=new Error("Cannot find module '"+h+"'");throw k.code="MODULE_NOT_FOUND",k}var l=d[h]={exports:{}};b[h][0].call(l.exports,function(a){var c=b[h][1][a];return f(c?c:a)},l,l.exports,a,b,d,e)}return d[h].exports}for(var g="function"==typeof c&&c,h=0;h<e.length;h++)f(e[h]);return f}({1:[function(a,b,c){},{}],2:[function(a,c,d){(function(b){"use strict";var d=a("./adapter_factory.js");c.exports=d({window:b.window})}).call(this,"undefined"!=typeof b?b:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./adapter_factory.js":3}],3:[function(a,b,c){"use strict";b.exports=function(b,c){var d=b&&b.window,e={shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0};for(var f in c)hasOwnProperty.call(c,f)&&(e[f]=c[f]);var g=a("./utils"),h=g.log,i=g.detectBrowser(d),j={browserDetails:i,extractVersion:g.extractVersion,disableLog:g.disableLog,disableWarnings:g.disableWarnings},k=a("./chrome/chrome_shim")||null,l=a("./edge/edge_shim")||null,m=a("./firefox/firefox_shim")||null,n=a("./safari/safari_shim")||null;switch(i.browser){case"chrome":if(!k||!k.shimPeerConnection||!e.shimChrome)return h("Chrome shim is not included in this adapter release."),j;h("adapter.js shimming chrome."),j.browserShim=k,k.shimGetUserMedia(d),k.shimMediaStream(d),g.shimCreateObjectURL(d),k.shimSourceObject(d),k.shimPeerConnection(d),k.shimOnTrack(d),k.shimAddTrackRemoveTrack(d),k.shimGetSendersWithDtmf(d);break;case"firefox":if(!m||!m.shimPeerConnection||!e.shimFirefox)return h("Firefox shim is not included in this adapter release."),j;h("adapter.js shimming firefox."),j.browserShim=m,m.shimGetUserMedia(d),g.shimCreateObjectURL(d),m.shimSourceObject(d),m.shimPeerConnection(d),m.shimOnTrack(d);break;case"edge":if(!l||!l.shimPeerConnection||!e.shimEdge)return h("MS edge shim is not included in this adapter release."),j;h("adapter.js shimming edge."),j.browserShim=l,l.shimGetUserMedia(d),g.shimCreateObjectURL(d),l.shimPeerConnection(d),l.shimReplaceTrack(d);break;case"safari":if(!n||!e.shimSafari)return h("Safari shim is not included in this adapter release."),j;h("adapter.js shimming safari."),j.browserShim=n,g.shimCreateObjectURL(d),n.shimRTCIceServerUrls(d),n.shimCallbacksAPI(d),n.shimLocalStreamsAPI(d),n.shimRemoteStreamsAPI(d),n.shimGetUserMedia(d);break;default:h("Unsupported browser!")}return j}},{"./chrome/chrome_shim":4,"./edge/edge_shim":1,"./firefox/firefox_shim":6,"./safari/safari_shim":8,"./utils":9}],4:[function(a,b,c){"use strict";var d=a("../utils.js"),e=d.log,f={shimMediaStream:function(a){a.MediaStream=a.MediaStream||a.webkitMediaStream},shimOnTrack:function(a){if("object"==typeof a&&a.RTCPeerConnection&&!("ontrack"in a.RTCPeerConnection.prototype)){Object.defineProperty(a.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(a){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=a)}});var b=a.RTCPeerConnection.prototype.setRemoteDescription;a.RTCPeerConnection.prototype.setRemoteDescription=function(){var c=this;return c._ontrackpoly||(c._ontrackpoly=function(b){b.stream.addEventListener("addtrack",function(d){var e;e=a.RTCPeerConnection.prototype.getReceivers?c.getReceivers().find(function(a){return a.track.id===d.track.id}):{track:d.track};var f=new Event("track");f.track=d.track,f.receiver=e,f.streams=[b.stream],c.dispatchEvent(f)}),b.stream.getTracks().forEach(function(d){var e;e=a.RTCPeerConnection.prototype.getReceivers?c.getReceivers().find(function(a){return a.track.id===d.id}):{track:d};var f=new Event("track");f.track=d,f.receiver=e,f.streams=[b.stream],c.dispatchEvent(f)})},c.addEventListener("addstream",c._ontrackpoly)),b.apply(c,arguments)}}},shimGetSendersWithDtmf:function(a){if("object"==typeof a&&a.RTCPeerConnection&&!("getSenders"in a.RTCPeerConnection.prototype)&&"createDTMFSender"in a.RTCPeerConnection.prototype){var b=function(a,b){return{track:b,get dtmf(){return void 0===this._dtmf&&("audio"===b.kind?this._dtmf=a.createDTMFSender(b):this._dtmf=null),this._dtmf},_pc:a}};if(!a.RTCPeerConnection.prototype.getSenders){a.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};var c=a.RTCPeerConnection.prototype.addTrack;a.RTCPeerConnection.prototype.addTrack=function(a,d){var e=this,f=c.apply(e,arguments);return f||(f=b(e,a),e._senders.push(f)),f};var d=a.RTCPeerConnection.prototype.removeTrack;a.RTCPeerConnection.prototype.removeTrack=function(a){var b=this;d.apply(b,arguments);var c=b._senders.indexOf(a);c!==-1&&b._senders.splice(c,1)}}var e=a.RTCPeerConnection.prototype.addStream;a.RTCPeerConnection.prototype.addStream=function(a){var c=this;c._senders=c._senders||[],e.apply(c,[a]),a.getTracks().forEach(function(a){c._senders.push(b(c,a))})};var f=a.RTCPeerConnection.prototype.removeStream;a.RTCPeerConnection.prototype.removeStream=function(a){var b=this;b._senders=b._senders||[],f.apply(b,[b._streams[a.id]||a]),a.getTracks().forEach(function(a){var c=b._senders.find(function(b){return b.track===a});c&&b._senders.splice(b._senders.indexOf(c),1)})}}else if("object"==typeof a&&a.RTCPeerConnection&&"getSenders"in a.RTCPeerConnection.prototype&&"createDTMFSender"in a.RTCPeerConnection.prototype&&a.RTCRtpSender&&!("dtmf"in a.RTCRtpSender.prototype)){var g=a.RTCPeerConnection.prototype.getSenders;a.RTCPeerConnection.prototype.getSenders=function(){var a=this,b=g.apply(a,[]);return b.forEach(function(b){b._pc=a}),b},Object.defineProperty(a.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}},shimSourceObject:function(a){var b=a&&a.URL;"object"==typeof a&&(!a.HTMLMediaElement||"srcObject"in a.HTMLMediaElement.prototype||Object.defineProperty(a.HTMLMediaElement.prototype,"srcObject",{get:function(){return this._srcObject},set:function(a){var c=this;return this._srcObject=a,this.src&&b.revokeObjectURL(this.src),a?(this.src=b.createObjectURL(a),a.addEventListener("addtrack",function(){c.src&&b.revokeObjectURL(c.src),c.src=b.createObjectURL(a)}),void a.addEventListener("removetrack",function(){c.src&&b.revokeObjectURL(c.src),c.src=b.createObjectURL(a)})):void(this.src="")}}))},shimAddTrackRemoveTrack:function(a){if(!a.RTCPeerConnection.prototype.addTrack){var b=a.RTCPeerConnection.prototype.getLocalStreams;a.RTCPeerConnection.prototype.getLocalStreams=function(){var a=this,c=b.apply(this);return a._reverseStreams=a._reverseStreams||{},c.map(function(b){return a._reverseStreams[b.id]})};var c=a.RTCPeerConnection.prototype.addStream;a.RTCPeerConnection.prototype.addStream=function(b){var d=this;if(d._streams=d._streams||{},d._reverseStreams=d._reverseStreams||{},b.getTracks().forEach(function(a){var b=d.getSenders().find(function(b){return b.track===a});if(b)throw new DOMException("Track already exists.","InvalidAccessError")}),!d._reverseStreams[b.id]){var e=new a.MediaStream(b.getTracks());d._streams[b.id]=e,d._reverseStreams[e.id]=b,b=e}c.apply(d,[b])};var d=a.RTCPeerConnection.prototype.removeStream;a.RTCPeerConnection.prototype.removeStream=function(a){var b=this;b._streams=b._streams||{},b._reverseStreams=b._reverseStreams||{},d.apply(b,[b._streams[a.id]||a]),delete b._reverseStreams[b._streams[a.id]?b._streams[a.id].id:a.id],delete b._streams[a.id]},a.RTCPeerConnection.prototype.addTrack=function(b,c){var d=this;if("closed"===d.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");var e=[].slice.call(arguments,1);if(1!==e.length||!e[0].getTracks().find(function(a){return a===b}))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");var f=d.getSenders().find(function(a){return a.track===b});if(f)throw new DOMException("Track already exists.","InvalidAccessError");d._streams=d._streams||{},d._reverseStreams=d._reverseStreams||{};var g=d._streams[c.id];if(g)g.addTrack(b),d.dispatchEvent(new Event("negotiationneeded"));else{var h=new a.MediaStream([b]);d._streams[c.id]=h,d._reverseStreams[h.id]=c,d.addStream(h)}return d.getSenders().find(function(a){return a.track===b})},a.RTCPeerConnection.prototype.removeTrack=function(a){var b=this;if("closed"===b.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!a._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");var c=a._pc===b;if(!c)throw new DOMException("Sender was not created by this connection.","InvalidAccessError");b._streams=b._streams||{};var d;Object.keys(b._streams).forEach(function(c){var e=b._streams[c].getTracks().find(function(b){return a.track===b});e&&(d=b._streams[c])}),d&&(1===d.getTracks().length?b.removeStream(d):d.removeTrack(a.track),b.dispatchEvent(new Event("negotiationneeded")))}}},shimPeerConnection:function(a){var b=d.detectBrowser(a);if(a.RTCPeerConnection){var c=a.RTCPeerConnection;a.RTCPeerConnection=function(a,b){if(a&&a.iceServers){for(var e=[],f=0;f<a.iceServers.length;f++){var g=a.iceServers[f];!g.hasOwnProperty("urls")&&g.hasOwnProperty("url")?(d.deprecated("RTCIceServer.url","RTCIceServer.urls"),g=JSON.parse(JSON.stringify(g)),g.urls=g.url,e.push(g)):e.push(a.iceServers[f])}a.iceServers=e}return new c(a,b)},a.RTCPeerConnection.prototype=c.prototype,Object.defineProperty(a.RTCPeerConnection,"generateCertificate",{get:function(){return c.generateCertificate}})}else a.RTCPeerConnection=function(b,c){return e("PeerConnection"),b&&b.iceTransportPolicy&&(b.iceTransports=b.iceTransportPolicy),new a.webkitRTCPeerConnection(b,c)},a.RTCPeerConnection.prototype=a.webkitRTCPeerConnection.prototype,a.webkitRTCPeerConnection.generateCertificate&&Object.defineProperty(a.RTCPeerConnection,"generateCertificate",{get:function(){return a.webkitRTCPeerConnection.generateCertificate}});var f=a.RTCPeerConnection.prototype.getStats;a.RTCPeerConnection.prototype.getStats=function(a,b,c){var d=this,e=arguments;if(arguments.length>0&&"function"==typeof a)return f.apply(this,arguments);if(0===f.length&&(0===arguments.length||"function"!=typeof arguments[0]))return f.apply(this,[]);var g=function(a){var b={},c=a.result();return c.forEach(function(a){var c={id:a.id,timestamp:a.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[a.type]||a.type};a.names().forEach(function(b){c[b]=a.stat(b)}),b[c.id]=c}),b},h=function(a){return new Map(Object.keys(a).map(function(b){return[b,a[b]]}))};if(arguments.length>=2){var i=function(a){e[1](h(g(a)))};return f.apply(this,[i,arguments[0]])}return new Promise(function(a,b){f.apply(d,[function(b){a(h(g(b)))},b])}).then(b,c)},b.version<51&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(b){var c=a.RTCPeerConnection.prototype[b];a.RTCPeerConnection.prototype[b]=function(){var a=arguments,b=this,d=new Promise(function(d,e){c.apply(b,[a[0],d,e])});return a.length<2?d:d.then(function(){a[1].apply(null,[])},function(b){a.length>=3&&a[2].apply(null,[b])})}}),b.version<52&&["createOffer","createAnswer"].forEach(function(b){var c=a.RTCPeerConnection.prototype[b];a.RTCPeerConnection.prototype[b]=function(){var a=this;if(arguments.length<1||1===arguments.length&&"object"==typeof arguments[0]){var b=1===arguments.length?arguments[0]:void 0;return new Promise(function(d,e){c.apply(a,[d,e,b])})}return c.apply(this,arguments)}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(b){var c=a.RTCPeerConnection.prototype[b];a.RTCPeerConnection.prototype[b]=function(){return arguments[0]=new("addIceCandidate"===b?a.RTCIceCandidate:a.RTCSessionDescription)(arguments[0]),c.apply(this,arguments)}});var g=a.RTCPeerConnection.prototype.addIceCandidate;a.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?g.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}};b.exports={shimMediaStream:f.shimMediaStream,shimOnTrack:f.shimOnTrack,shimAddTrackRemoveTrack:f.shimAddTrackRemoveTrack,shimGetSendersWithDtmf:f.shimGetSendersWithDtmf,shimSourceObject:f.shimSourceObject,shimPeerConnection:f.shimPeerConnection,shimGetUserMedia:a("./getusermedia")}},{"../utils.js":9,"./getusermedia":5}],5:[function(a,b,c){"use strict";var d=a("../utils.js"),e=d.log;b.exports=function(a){var b=d.detectBrowser(a),c=a&&a.navigator,f=function(a){if("object"!=typeof a||a.mandatory||a.optional)return a;var b={};return Object.keys(a).forEach(function(c){if("require"!==c&&"advanced"!==c&&"mediaSource"!==c){var d="object"==typeof a[c]?a[c]:{ideal:a[c]};void 0!==d.exact&&"number"==typeof d.exact&&(d.min=d.max=d.exact);var e=function(a,b){return a?a+b.charAt(0).toUpperCase()+b.slice(1):"deviceId"===b?"sourceId":b};if(void 0!==d.ideal){b.optional=b.optional||[];var f={};"number"==typeof d.ideal?(f[e("min",c)]=d.ideal,b.optional.push(f),f={},f[e("max",c)]=d.ideal,b.optional.push(f)):(f[e("",c)]=d.ideal,b.optional.push(f))}void 0!==d.exact&&"number"!=typeof d.exact?(b.mandatory=b.mandatory||{},b.mandatory[e("",c)]=d.exact):["min","max"].forEach(function(a){void 0!==d[a]&&(b.mandatory=b.mandatory||{},b.mandatory[e(a,c)]=d[a])})}}),a.advanced&&(b.optional=(b.optional||[]).concat(a.advanced)),b},g=function(a,d){if(a=JSON.parse(JSON.stringify(a)),a&&"object"==typeof a.audio){var g=function(a,b,c){b in a&&!(c in a)&&(a[c]=a[b],delete a[b])};a=JSON.parse(JSON.stringify(a)),g(a.audio,"autoGainControl","googAutoGainControl"),g(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=f(a.audio)}if(a&&"object"==typeof a.video){var h=a.video.facingMode;h=h&&("object"==typeof h?h:{ideal:h});var i=b.version<61;if(h&&("user"===h.exact||"environment"===h.exact||"user"===h.ideal||"environment"===h.ideal)&&(!c.mediaDevices.getSupportedConstraints||!c.mediaDevices.getSupportedConstraints().facingMode||i)){delete a.video.facingMode;var j;if("environment"===h.exact||"environment"===h.ideal?j=["back","rear"]:"user"!==h.exact&&"user"!==h.ideal||(j=["front"]),j)return c.mediaDevices.enumerateDevices().then(function(b){b=b.filter(function(a){return"videoinput"===a.kind});var c=b.find(function(a){return j.some(function(b){return a.label.toLowerCase().indexOf(b)!==-1})});return!c&&b.length&&j.indexOf("back")!==-1&&(c=b[b.length-1]),c&&(a.video.deviceId=h.exact?{exact:c.deviceId}:{ideal:c.deviceId}),a.video=f(a.video),e("chrome: "+JSON.stringify(a)),d(a)})}a.video=f(a.video)}return e("chrome: "+JSON.stringify(a)),d(a)},h=function(a){return{name:{PermissionDeniedError:"NotAllowedError",InvalidStateError:"NotReadableError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotReadableError",MediaDeviceKillSwitchOn:"NotReadableError"}[a.name]||a.name,message:a.message,constraint:a.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}},i=function(a,b,d){g(a,function(a){c.webkitGetUserMedia(a,b,function(a){d(h(a))})})};c.getUserMedia=i;var j=function(a){return new Promise(function(b,d){c.getUserMedia(a,b,d)})};if(c.mediaDevices||(c.mediaDevices={getUserMedia:j,enumerateDevices:function(){return new Promise(function(b){var c={audio:"audioinput",video:"videoinput"};return a.MediaStreamTrack.getSources(function(a){b(a.map(function(a){return{label:a.label,kind:c[a.kind],deviceId:a.id,groupId:""}}))})})},getSupportedConstraints:function(){return{deviceId:!0,echoCancellation:!0,facingMode:!0,frameRate:!0,height:!0,width:!0}}}),c.mediaDevices.getUserMedia){var k=c.mediaDevices.getUserMedia.bind(c.mediaDevices);c.mediaDevices.getUserMedia=function(a){return g(a,function(a){return k(a).then(function(b){if(a.audio&&!b.getAudioTracks().length||a.video&&!b.getVideoTracks().length)throw b.getTracks().forEach(function(a){a.stop()}),new DOMException("","NotFoundError");return b},function(a){return Promise.reject(h(a))})})}}else c.mediaDevices.getUserMedia=function(a){return j(a)};"undefined"==typeof c.mediaDevices.addEventListener&&(c.mediaDevices.addEventListener=function(){e("Dummy mediaDevices.addEventListener called.")}),"undefined"==typeof c.mediaDevices.removeEventListener&&(c.mediaDevices.removeEventListener=function(){e("Dummy mediaDevices.removeEventListener called.")})}},{"../utils.js":9}],6:[function(a,b,c){"use strict";var d=a("../utils"),e={shimOnTrack:function(a){"object"!=typeof a||!a.RTCPeerConnection||"ontrack"in a.RTCPeerConnection.prototype||Object.defineProperty(a.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(a){this._ontrack&&(this.removeEventListener("track",this._ontrack),this.removeEventListener("addstream",this._ontrackpoly)),this.addEventListener("track",this._ontrack=a),this.addEventListener("addstream",this._ontrackpoly=function(a){a.stream.getTracks().forEach(function(b){var c=new Event("track");c.track=b,c.receiver={track:b},c.streams=[a.stream],this.dispatchEvent(c)}.bind(this))}.bind(this))}})},shimSourceObject:function(a){"object"==typeof a&&(!a.HTMLMediaElement||"srcObject"in a.HTMLMediaElement.prototype||Object.defineProperty(a.HTMLMediaElement.prototype,"srcObject",{get:function(){return this.mozSrcObject},set:function(a){this.mozSrcObject=a}}))},shimPeerConnection:function(a){var b=d.detectBrowser(a);if("object"==typeof a&&(a.RTCPeerConnection||a.mozRTCPeerConnection)){a.RTCPeerConnection||(a.RTCPeerConnection=function(c,d){if(b.version<38&&c&&c.iceServers){for(var e=[],f=0;f<c.iceServers.length;f++){var g=c.iceServers[f];if(g.hasOwnProperty("urls"))for(var h=0;h<g.urls.length;h++){var i={url:g.urls[h]};0===g.urls[h].indexOf("turn")&&(i.username=g.username,i.credential=g.credential),e.push(i)}else e.push(c.iceServers[f])}c.iceServers=e}return new a.mozRTCPeerConnection(c,d)},a.RTCPeerConnection.prototype=a.mozRTCPeerConnection.prototype,a.mozRTCPeerConnection.generateCertificate&&Object.defineProperty(a.RTCPeerConnection,"generateCertificate",{get:function(){return a.mozRTCPeerConnection.generateCertificate}}),a.RTCSessionDescription=a.mozRTCSessionDescription,a.RTCIceCandidate=a.mozRTCIceCandidate),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(b){var c=a.RTCPeerConnection.prototype[b];a.RTCPeerConnection.prototype[b]=function(){return arguments[0]=new("addIceCandidate"===b?a.RTCIceCandidate:a.RTCSessionDescription)(arguments[0]),c.apply(this,arguments)}});var c=a.RTCPeerConnection.prototype.addIceCandidate;a.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?c.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())};var e=function(a){var b=new Map;return Object.keys(a).forEach(function(c){b.set(c,a[c]),b[c]=a[c]}),b},f={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},g=a.RTCPeerConnection.prototype.getStats;a.RTCPeerConnection.prototype.getStats=function(a,c,d){return g.apply(this,[a||null]).then(function(a){if(b.version<48&&(a=e(a)),b.version<53&&!c)try{a.forEach(function(a){a.type=f[a.type]||a.type})}catch(d){if("TypeError"!==d.name)throw d;a.forEach(function(b,c){a.set(c,Object.assign({},b,{type:f[b.type]||b.type}))})}return a}).then(c,d)}}}};b.exports={shimOnTrack:e.shimOnTrack,shimSourceObject:e.shimSourceObject,shimPeerConnection:e.shimPeerConnection,shimGetUserMedia:a("./getusermedia")}},{"../utils":9,"./getusermedia":7}],7:[function(a,b,c){"use strict";var d=a("../utils"),e=d.log;b.exports=function(a){var b=d.detectBrowser(a),c=a&&a.navigator,f=a&&a.MediaStreamTrack,g=function(a){return{name:{InternalError:"NotReadableError",NotSupportedError:"TypeError",PermissionDeniedError:"NotAllowedError",SecurityError:"NotAllowedError"}[a.name]||a.name,message:{"The operation is insecure.":"The request is not allowed by the user agent or the platform in the current context."}[a.message]||a.message,constraint:a.constraint,toString:function(){return this.name+(this.message&&": ")+this.message;
}}},h=function(a,d,f){var h=function(a){if("object"!=typeof a||a.require)return a;var b=[];return Object.keys(a).forEach(function(c){if("require"!==c&&"advanced"!==c&&"mediaSource"!==c){var d=a[c]="object"==typeof a[c]?a[c]:{ideal:a[c]};if(void 0===d.min&&void 0===d.max&&void 0===d.exact||b.push(c),void 0!==d.exact&&("number"==typeof d.exact?d.min=d.max=d.exact:a[c]=d.exact,delete d.exact),void 0!==d.ideal){a.advanced=a.advanced||[];var e={};"number"==typeof d.ideal?e[c]={min:d.ideal,max:d.ideal}:e[c]=d.ideal,a.advanced.push(e),delete d.ideal,Object.keys(d).length||delete a[c]}}}),b.length&&(a.require=b),a};return a=JSON.parse(JSON.stringify(a)),b.version<38&&(e("spec: "+JSON.stringify(a)),a.audio&&(a.audio=h(a.audio)),a.video&&(a.video=h(a.video)),e("ff37: "+JSON.stringify(a))),c.mozGetUserMedia(a,d,function(a){f(g(a))})},i=function(a){return new Promise(function(b,c){h(a,b,c)})};if(c.mediaDevices||(c.mediaDevices={getUserMedia:i,addEventListener:function(){},removeEventListener:function(){}}),c.mediaDevices.enumerateDevices=c.mediaDevices.enumerateDevices||function(){return new Promise(function(a){var b=[{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}];a(b)})},b.version<41){var j=c.mediaDevices.enumerateDevices.bind(c.mediaDevices);c.mediaDevices.enumerateDevices=function(){return j().then(void 0,function(a){if("NotFoundError"===a.name)return[];throw a})}}if(b.version<49){var k=c.mediaDevices.getUserMedia.bind(c.mediaDevices);c.mediaDevices.getUserMedia=function(a){return k(a).then(function(b){if(a.audio&&!b.getAudioTracks().length||a.video&&!b.getVideoTracks().length)throw b.getTracks().forEach(function(a){a.stop()}),new DOMException("The object can not be found here.","NotFoundError");return b},function(a){return Promise.reject(g(a))})}}if(!(b.version>55&&"autoGainControl"in c.mediaDevices.getSupportedConstraints())){var l=function(a,b,c){b in a&&!(c in a)&&(a[c]=a[b],delete a[b])},m=c.mediaDevices.getUserMedia.bind(c.mediaDevices);if(c.mediaDevices.getUserMedia=function(a){return"object"==typeof a&&"object"==typeof a.audio&&(a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","mozAutoGainControl"),l(a.audio,"noiseSuppression","mozNoiseSuppression")),m(a)},f&&f.prototype.getSettings){var n=f.prototype.getSettings;f.prototype.getSettings=function(){var a=n.apply(this,arguments);return l(a,"mozAutoGainControl","autoGainControl"),l(a,"mozNoiseSuppression","noiseSuppression"),a}}if(f&&f.prototype.applyConstraints){var o=f.prototype.applyConstraints;f.prototype.applyConstraints=function(a){return"audio"===this.kind&&"object"==typeof a&&(a=JSON.parse(JSON.stringify(a)),l(a,"autoGainControl","mozAutoGainControl"),l(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}c.getUserMedia=function(a,e,f){return b.version<44?h(a,e,f):(d.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),void c.mediaDevices.getUserMedia(a).then(e,f))}}},{"../utils":9}],8:[function(a,b,c){"use strict";var d=a("../utils"),e={shimLocalStreamsAPI:function(a){if("object"==typeof a&&a.RTCPeerConnection){if("getLocalStreams"in a.RTCPeerConnection.prototype||(a.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),"getStreamById"in a.RTCPeerConnection.prototype||(a.RTCPeerConnection.prototype.getStreamById=function(a){var b=null;return this._localStreams&&this._localStreams.forEach(function(c){c.id===a&&(b=c)}),this._remoteStreams&&this._remoteStreams.forEach(function(c){c.id===a&&(b=c)}),b}),!("addStream"in a.RTCPeerConnection.prototype)){var b=a.RTCPeerConnection.prototype.addTrack;a.RTCPeerConnection.prototype.addStream=function(a){this._localStreams||(this._localStreams=[]),this._localStreams.indexOf(a)===-1&&this._localStreams.push(a);var c=this;a.getTracks().forEach(function(d){b.call(c,d,a)})},a.RTCPeerConnection.prototype.addTrack=function(a,c){c&&(this._localStreams?this._localStreams.indexOf(c)===-1&&this._localStreams.push(c):this._localStreams=[c]),b.call(this,a,c)}}"removeStream"in a.RTCPeerConnection.prototype||(a.RTCPeerConnection.prototype.removeStream=function(a){this._localStreams||(this._localStreams=[]);var b=this._localStreams.indexOf(a);if(b!==-1){this._localStreams.splice(b,1);var c=this,d=a.getTracks();this.getSenders().forEach(function(a){d.indexOf(a.track)!==-1&&c.removeTrack(a)})}})}},shimRemoteStreamsAPI:function(a){"object"==typeof a&&a.RTCPeerConnection&&("getRemoteStreams"in a.RTCPeerConnection.prototype||(a.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),"onaddstream"in a.RTCPeerConnection.prototype||Object.defineProperty(a.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(a){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=a),this.addEventListener("track",this._onaddstreampoly=function(a){var b=a.streams[0];if(this._remoteStreams||(this._remoteStreams=[]),!(this._remoteStreams.indexOf(b)>=0)){this._remoteStreams.push(b);var c=new Event("addstream");c.stream=a.streams[0],this.dispatchEvent(c)}}.bind(this))}}))},shimCallbacksAPI:function(a){if("object"==typeof a&&a.RTCPeerConnection){var b=a.RTCPeerConnection.prototype,c=b.createOffer,d=b.createAnswer,e=b.setLocalDescription,f=b.setRemoteDescription,g=b.addIceCandidate;b.createOffer=function(a,b){var d=arguments.length>=2?arguments[2]:arguments[0],e=c.apply(this,[d]);return b?(e.then(a,b),Promise.resolve()):e},b.createAnswer=function(a,b){var c=arguments.length>=2?arguments[2]:arguments[0],e=d.apply(this,[c]);return b?(e.then(a,b),Promise.resolve()):e};var h=function(a,b,c){var d=e.apply(this,[a]);return c?(d.then(b,c),Promise.resolve()):d};b.setLocalDescription=h,h=function(a,b,c){var d=f.apply(this,[a]);return c?(d.then(b,c),Promise.resolve()):d},b.setRemoteDescription=h,h=function(a,b,c){var d=g.apply(this,[a]);return c?(d.then(b,c),Promise.resolve()):d},b.addIceCandidate=h}},shimGetUserMedia:function(a){var b=a&&a.navigator;b.getUserMedia||(b.webkitGetUserMedia?b.getUserMedia=b.webkitGetUserMedia.bind(b):b.mediaDevices&&b.mediaDevices.getUserMedia&&(b.getUserMedia=function(a,c,d){b.mediaDevices.getUserMedia(a).then(c,d)}.bind(b)))},shimRTCIceServerUrls:function(a){var b=a.RTCPeerConnection;a.RTCPeerConnection=function(a,c){if(a&&a.iceServers){for(var e=[],f=0;f<a.iceServers.length;f++){var g=a.iceServers[f];!g.hasOwnProperty("urls")&&g.hasOwnProperty("url")?(d.deprecated("RTCIceServer.url","RTCIceServer.urls"),g=JSON.parse(JSON.stringify(g)),g.urls=g.url,delete g.url,e.push(g)):e.push(a.iceServers[f])}a.iceServers=e}return new b(a,c)},a.RTCPeerConnection.prototype=b.prototype,Object.defineProperty(a.RTCPeerConnection,"generateCertificate",{get:function(){return b.generateCertificate}})}};b.exports={shimCallbacksAPI:e.shimCallbacksAPI,shimLocalStreamsAPI:e.shimLocalStreamsAPI,shimRemoteStreamsAPI:e.shimRemoteStreamsAPI,shimGetUserMedia:e.shimGetUserMedia,shimRTCIceServerUrls:e.shimRTCIceServerUrls}},{"../utils":9}],9:[function(a,b,c){"use strict";var d=!0,e=!0,f={disableLog:function(a){return"boolean"!=typeof a?new Error("Argument type: "+typeof a+". Please use a boolean."):(d=a,a?"adapter.js logging disabled":"adapter.js logging enabled")},disableWarnings:function(a){return"boolean"!=typeof a?new Error("Argument type: "+typeof a+". Please use a boolean."):(e=!a,"adapter.js deprecation warnings "+(a?"disabled":"enabled"))},log:function(){if("object"==typeof window){if(d)return;"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}},deprecated:function(a,b){e&&console.warn(a+" is deprecated, please use "+b+" instead.")},extractVersion:function(a,b,c){var d=a.match(b);return d&&d.length>=c&&parseInt(d[c],10)},detectBrowser:function(a){var b=a&&a.navigator,c={};if(c.browser=null,c.version=null,"undefined"==typeof a||!a.navigator)return c.browser="Not a browser.",c;if(b.mozGetUserMedia)c.browser="firefox",c.version=this.extractVersion(b.userAgent,/Firefox\/(\d+)\./,1);else if(b.webkitGetUserMedia)if(a.webkitRTCPeerConnection)c.browser="chrome",c.version=this.extractVersion(b.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else{if(!b.userAgent.match(/Version\/(\d+).(\d+)/))return c.browser="Unsupported webkit-based browser with GUM support but no WebRTC support.",c;c.browser="safari",c.version=this.extractVersion(b.userAgent,/AppleWebKit\/(\d+)\./,1)}else if(b.mediaDevices&&b.userAgent.match(/Edge\/(\d+).(\d+)$/))c.browser="edge",c.version=this.extractVersion(b.userAgent,/Edge\/(\d+).(\d+)$/,2);else{if(!b.mediaDevices||!b.userAgent.match(/AppleWebKit\/(\d+)\./))return c.browser="Not a supported browser.",c;c.browser="safari",c.version=this.extractVersion(b.userAgent,/AppleWebKit\/(\d+)\./,1)}return c},shimCreateObjectURL:function(a){var b=a&&a.URL;if("object"==typeof a&&a.HTMLMediaElement&&"srcObject"in a.HTMLMediaElement.prototype){var c=b.createObjectURL.bind(b),d=b.revokeObjectURL.bind(b),e=new Map,g=0;b.createObjectURL=function(a){if("getTracks"in a){var b="polyblob:"+ ++g;return e.set(b,a),f.deprecated("URL.createObjectURL(stream)","elem.srcObject = stream"),b}return c(a)},b.revokeObjectURL=function(a){d(a),e["delete"](a)};var h=Object.getOwnPropertyDescriptor(a.HTMLMediaElement.prototype,"src");Object.defineProperty(a.HTMLMediaElement.prototype,"src",{get:function(){return h.get.apply(this)},set:function(a){return this.srcObject=e.get(a)||null,h.set.apply(this,[a])}});var i=a.HTMLMediaElement.prototype.setAttribute;a.HTMLMediaElement.prototype.setAttribute=function(){return 2===arguments.length&&"src"===(""+arguments[0]).toLowerCase()&&(this.srcObject=e.get(arguments[1])||null),i.apply(this,arguments)}}}};b.exports={log:f.log,deprecated:f.deprecated,disableLog:f.disableLog,disableWarnings:f.disableWarnings,extractVersion:f.extractVersion,shimCreateObjectURL:f.shimCreateObjectURL,detectBrowser:f.detectBrowser.bind(f)}},{}]},{},[2])(2)})}).call(b,c(5))},function(a,b,c){"use strict";var d,e;d=[c(9),c(10),c(3)],e=function(a,b,c){return a.PhenixVideo=c,a.onLoaded=function(){b(a)},a.onLoaded(),a}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(1),c(2),c(7),c(16),c(4),c(0)],e=function(a,b,c,d,e,f){"use strict";function g(b,e,f){this._disposables=new c.DisposableList,this._events=new d.NamedEvents,this._isVideo="video"===b.tagName,this._swfSrc=f.swfSrc,this._id=b.id||f.streamId,this._width=b.clientWidth,this._height=b.clientHeight,this._ghost=b,this._element=null,this._eventDisposables=[],this._flashVars=["uid="+this._id,"autoplay="+(!!a.isUndefined(b.autoplay)||b.autoplay),"allowScriptAccess=always","preload=true","src="+JSON.stringify(e)];var g=this;this._disposables.add(new c.Disposable(function(){t.call(g,"fire_stop")}));try{C||D?this._element=i.call(this):this._element=j.call(this),m.call(this)}catch(h){y("Error while loading Flash Player"+h)}}function h(b,c){return a.findIndex(this._eventDisposables,function(a){return a.name===b&&a.listener===c})}function i(){return document.createElement("div")}function j(){var a=document.createElement("embed");return a.setAttribute("id","__"+this._id),a.setAttribute("name","__"+this._id),a.setAttribute("play","true"),a.setAttribute("loop","false"),a.setAttribute("quality","high"),a.setAttribute("bgcolor","#000000"),a.setAttribute("wmode","transparent"),a.setAttribute("allowScriptAccess","always"),a.setAttribute("allowFullScreen","true"),a.setAttribute("type","application/x-shockwave-flash"),a.setAttribute("pluginspage","//www.macromedia.com/go/getflashplayer"),a.setAttribute("src",this._swfSrc),a.setAttribute("flashvars",this._flashVars.join("&")),this._isVideo&&(a.setAttribute("width",this._width.toString()),a.setAttribute("height",this._height.toString())),a}function k(){if(!C&&!D)return this._element;var b=(D?"__"+this._id:this._id)+a.uniqueId(),c=document.createElement("object"),d=document.createElement("div"),e=[l("movie",this._swfSrc+"?x="+a.now()),l("flashvars",this._flashVars.join("&")),l("quality",2),l("bgcolor","#000000"),l("wmode","transparent"),l("allowScriptAccess","always"),l("allowFullScreen","true"),d];return d.innerHTML=E,D?(c.setAttribute("type","application/x-shockwave-flash"),c.setAttribute("data",this._swfSrc),c.setAttribute("id",b),c.setAttribute("width","__"+this._width.toString()),c.setAttribute("height","__"+this._height.toString())):(c.setAttribute("classid","clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"),c.setAttribute("codebase","//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"),c.setAttribute("id",b),c.setAttribute("width",this._width.toString()),c.setAttribute("height",this._height.toString())),c.object?(a.forEach(e,function(b){a.isNullOrUndefined(a.get(c.object,[b.name]))||(c.object[b.name]=b.value)}),c.appendChild(d)):a.forEach(e,function(b){var d=a.find(c.children,function(a){return a.name===b.name});return d?c.replaceChild(b,d):c.appendChild(b)}),this._element.outerHTML=c.outerHTML,f.document.getElementById&&(this._element=f.document.getElementById(b),m.call(this)),this._element}function l(a,b){var c=document.createElement("param");return c.setAttribute("name",a),c.setAttribute("value",b),c}function m(){a.assign(this._element,z,{id:this._id,width:this._width,height:this._height,videoWidth:this._width,videoHeight:this._height}),n.call(this),v.call(this),o.call(this)}function n(){var b=this;f["__event__"+this._id]=function(a,c){var d=u(a,b._element);if(c)try{d.data=JSON.parse(c),d.details.data=d.data}catch(e){d.message=c}switch(a){case"ended":break;case"error":b._element.error=d.data,b._element.dispatchEvent&&b._element.dispatchEvent(new Error(c));break;case"loadeddata":case"loadedmetadata":case"loadstart":b._element.dispatchEvent&&b._element.dispatchEvent(d);break;case"pause":b._element.paused=!0;break;case"play":b._element.paused=!1;break;case"playing":b._element.paused=!1;break;case"progress":case"seeked":case"seeking":case"stalled":case"suspend":b._element.dispatchEvent&&b._element.dispatchEvent(d);break;case"timeupdate":b._element.currentTime=s.call(b,"currentTime"),b._element.dispatchEvent&&b._element.dispatchEvent(d);break;case"volumechange":break;case"waiting":}b._events.fireAsync(a,[d])};var d=this._element.requestFullscreen||this._element.mozRequestFullScreen||this._element.webkitRequestFullScreen||this._element.msRequestFullscreen;this._disposables.add(new c.Disposable(function(){delete f["__event__"+b._id]})),this._element.play=function(){t.call(b,"fire_play")},this._element.load=function(){t.call(b,"fire_load")},this._element.seek=function(){t.call(b,"fire_seek")},this._element.pause=function(){t.call(b,"fire_pause")},this._element.requestFullscreen=function(){if(b._isFullscreen=!0,w.call(b),b._previousHeight=b._element.style.height,b._previousWidth=b._element.style.width,b._previousPosition=b._element.style.position,b._element.style.position="absolute",b._element.style.height="100%",b._element.style.width="100%","undefined"!=typeof f.ActiveXObject){var a=new f("WScript.Shell");null!==a&&a.SendKeys("{F11}")}d.call(b._element)};var e=function(){t.call(b,"set_size",b._isFullscreen?screen.width:b._element.clientWidth,b._isFullscreen?screen.height:b._element.clientHeight)};a.addEventListener(f,"resize",e),this._disposables.add(new c.Disposable(function(){a.removeEventListener(f,"resize",e)}))}function o(){var a=p.call(this),b=q.call(this),d=setInterval(function(){a(),b()},A);this._disposables.add(new c.Disposable(function(){clearInterval(d)}))}function p(){var a=this,b=a._ghost.muted,c=a._element.muted;return function(){var d=a._element.muted,e=a._element.muted;d===b&&e===c||(d!==b&&(b=d,c=d,e=d),e!==c&&(b=d,c=d),a._element.muted=e,a._ghost.muted=e,r.call(a,"muted",e))}}function q(){var a=this,b=a._ghost.volume,c=a._element.volume;return function(){var d=a._element.volume,e=a._element.volume;d===b&&e===c||(d!==b&&(b=d,c=d,e=d),e!==c&&(b=d,c=d),a._element.volume=e,a._ghost.volume=e,r.call(a,"volume",e))}}function r(b,c){var d=this._element["set_"+b]||a.noop;return d.call(this._element,c)}function s(b){var c=this._element["get_"+b]||a.noop;return c.call(this._element)}function t(a){var b=this._element[a];if([].shift.apply(arguments),b)return b.apply(this._element,arguments)}function u(a,b){var c=a.match(/([a-z]+\.([a-z]+))/i),d={target:b};if(null!==c&&(a=c[1],d.namespace=c[2]),"IE"===B.browser&&B.version>8){var e=f.document.createEvent("CustomEvent");return e.initCustomEvent(a,!1,!1,d),e}return f.CustomEvent?new f.CustomEvent(a,{detail:d}):d}function v(){var b=this,d=["currentTime","paused","error","src"];if(a.get(f,["MutationObserver"])){var e=new MutationObserver(function(c){c.forEach(function(c){"attributes"!==c.type||c.target!==b._element||a.includes(d,c.attributeName)||r.call(b,c.attributeName,b._element[c.attributeName])})}),g={attributes:!0};e.observe(b._element,g),b._disposables.add(new c.Disposable(function(){e.disconnect()}))}else{x("Falling back to use of DOM event listeners. This results in degraded performance for further DOM modifications and does not work for IE prior to version 9. See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Mutation_events for details.");var h=function(c){a.includes(d,c.target.tagName)||r.call(b,c.target.tagName,b._element[c.target.tagName])};b._element.addEventListener?(b._element.addEventListener("DOMAttrModified",h,!1),b._disposables.add(new c.Disposable(function(){b._element.removeEventListener("DOMAttrModified",h,!1)}))):(b._element.attachEvent("onpropertychange",h),b._disposables.add(new c.Disposable(function(){b._element.detachEvent("DOMAttrModified",h)})))}}function w(){function a(){document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||document.fullscreenElement||(document.removeEventListener("webkitfullscreenchange",a),document.removeEventListener("mozfullscreenchange",a),document.removeEventListener("fullscreenchange",a),document.removeEventListener("MSFullscreenChange",a),document.removeEventListener("keydown",b),c._isFullscreen=!1,c._element.style.position=c._previousPosition,c._element.style.height=c._previousHeight,c._element.style.width=c._previousWidth)}function b(b){var c=b||f.event,d=!1;d="key"in c?"Escape"===c.key||"Esc"===c.key:27===c.keyCode,d&&a()}var c=this;document.addEventListener("webkitfullscreenchange",a,!1),document.addEventListener("mozfullscreenchange",a,!1),document.addEventListener("fullscreenchange",a,!1),document.addEventListener("MSFullscreenChange",a,!1),document.addEventListener("keydown",b,!1)}var x=function(){console.log.apply(console,arguments)}||function(){},y=function(){console.error.apply(console,arguments)}||x,z={width:480,height:360,videoWidth:480,videoHeight:360,muted:!1,volume:1,currentTime:0,duration:1/0,readyState:0,ended:!1,buffered:null,autoplay:!0},A=300,B=new b(navigator.userAgent).detect(),C="IE"===B.browser&&/(trident|microsoft)/i.test(a.get(f.navigator,["appName"],"")),D="Edge"===B.browser&&a.get(f.navigator,"msLaunchUri")&&!a.get(f.document,"documentMode"),E="You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/";return g.prototype.finishInitializationInDom=function(){return k.call(this)},g.prototype.getElement=function(){return this._element},g.prototype.addEventListener=function(a,b){var c=h.call(this,a,b);if(!(c>-1)){var d=this._events.listen(a,b);this._disposables.add(d),this._eventDisposables.push({name:a,listener:b,disposable:d})}},g.prototype.removeEventListener=function(a,b){var c=h.call(this,a,b);if(c>-1){var d=this._eventDisposables.splice(c,1)[0];d.disposable.dispose()}},g.prototype.destroy=function(){this._disposables.dispose()},g}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(1),c(6),c(8),c(4),c(3)],e=function(a,b,c,d,e){"use strict";function f(){var a=this;this._root=h(),this._version="?";var b=function(b){a._loaded=!0,a._enabled=b===!0,a._version=a._phenixRTC.phenixVersion||"?.?.?.?",q(b?"Phenix RTC "+a._version:"No Phenix RTC"),a._onReady&&a._onReady(a._enabled)};try{this._phenixRTC=i(this._root),this._phenixRTC.onunload=function(){a._loaded=!1};var c=new d;c.waitForReady(this._phenixRTC,b)}catch(e){r("Error while loading Phenix RTC"+e)}}function g(){this._root&&document.getElementById("phenixRTC")!==this._root&&(document.body.appendChild(this._root),this._onLoaded&&this._onLoaded.call(this))}function h(){var a=document.createElement("div");return a.id="phenixRTC",a.style.cssText="visibility:hidden !important;width:0px !important;height:0px !important;margin:0px !important;padding:0px !important;border-style:none !important;border-width:0px !important;max-width:0px !important;max-height:0px !important;outline:none !important",document.body.appendChild(a),a}function i(a){var b=document.createElement("object");return b.type="application/x-phenix-rtc",a.appendChild(b),b}function j(a,b){if(!a)throw new Error("Can not attach a stream to a undefined element");if(a.phenixVersion)return a.src=b,a;var c=new e(a,b,(!0));return c.getElement().phenixPresenter=c,c.getElement()}function k(b){var c=function(){var c=null;switch(arguments.length){case 0:c=new b;break;case 1:c=new b(arguments[0]);break;case 2:c=new b(arguments[0],arguments[1]);break;case 3:c=new b(arguments[0],arguments[1],arguments[2]);break;case 4:c=new b(arguments[0],arguments[1],arguments[2],arguments[3]);break;case 5:c=new b(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);break;default:throw new Error("Unsupported number of arguments in Phenix Object Constructor")}return c.phenixAddEventListener=a.bind(l,c),c.phenixRemoveEventListener=a.bind(m,c),c};return a.forOwn(b,function(a,b){c[b]=a}),c}function l(a,c){b.stringNotEmpty(a,"name"),b.isFunction(c,"listener"),n.call(this,a),o.call(this,a,c)}function m(a,b){p.call(this,a,b)}function n(b){if(!this.events||!this.events[b]){this.events||(this.events={});var d=this.events;d[b]={observable:(new c.Observable).extend({timeout:0}),subscription:null,listeners:[]},this.phenixSetEventListener(b,a.bind(d[b].observable.setValue,d[b].observable)),d[b].subscription=d[b].observable.subscribe(function(c){var e=d[b],f=e.listeners;a.forEach(f,function(a){a(c)})})}}function o(a,b){if(!this.events||!this.events[a])throw new Error("No event observable for event: "+name);this.events[a].listeners.push(b)}function p(b,c){this.events&&this.events.events[b]&&(this.events[b].listeners=a.filter(this.events[b].listeners,function(a){return c!==a}))}var q=function(){console.log.apply(console,arguments)}||function(){},r=function(){console.error.apply(console,arguments)}||q;return f.prototype.onReady=function(a){var b=this;this._loaded?setTimeout(function(){a(b._enabled)},1):this._onReady=a},f.prototype.onLoaded=function(a){this._onLoaded=a},f.prototype.isLoaded=function(){return this._loaded===!0},f.isSupported=function(){if(navigator.plugins)for(var a=navigator.plugins,b=0;b<a.length;b++)if(a[b].name.indexOf("PhenixRTC")>=0)return!0;if(navigator.userAgent&&(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/)))try{return new window.ActiveXObject("PhenixP2P.RTC"),!0}catch(c){return!1}return!1},f.prototype.isEnabled=function(){return g.call(this),this._phenixRTC&&void 0!==this._phenixRTC.phenixVersion},f.prototype.getVersion=function(){return g.call(this),this._version},f.prototype.getRTCPeerConnectionConstructor=function(){return g.call(this),k(this._phenixRTC.RTCPeerConnection)},f.prototype.getRTCSessionDescriptionConstructor=function(){return g.call(this),k(this._phenixRTC.RTCSessionDescription)},f.prototype.getRTCIceCandidateConstructor=function(){return g.call(this),k(this._phenixRTC.RTCIceCandidate)},f.prototype.getSourcesDelegate=function(){var a=this;return function(b){return g.call(a),a._phenixRTC.getSources(b)}},f.prototype.getUserMediaDelegate=function(){var a=this;return function(b,c,d){return g.call(a),a._phenixRTC.getUserMedia(b,c,d)}},f.prototype.getStatsDelegate=function(){return function(a,b,c,d){return a.getStats(b,c,d)}},f.prototype.attachMediaStream=function(a,b){return g.call(this),j.call(this,a,b)},f.prototype.reattachMediaStream=function(a,b){return g.call(this),this.attachMediaStream(a,b.src)},f}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b,c){var d,e;d=[c(1),c(2),c(11),c(0),c(3)],e=function(a,b,c,d,e){"use strict";function f(){if(v=d.RTCPeerConnection,w=d.RTCSessionDescription,x=d.RTCIceCandidate,navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(y=a.bind(k,null,"input")),navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(z=a.bind(k,null,"output")),(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||d.getUserMedia)&&(A=g),!d.RTCPeerConnection)return t("[%s] browser version [%s] does not appear to be WebRTC-capable",u.browser,u.version);switch(u.browser){case"Firefox":t("Firefox detected",u),C=function(a,b){t("Attaching media stream");var c=a.muted;return u.version>57&&(a.srcObject=b),a.mozSrcObject=b,a.play(),c===!0&&(a.muted=!0),a},E=function(a,b){t("Reattaching media stream");var c=a.muted;return u.version>57&&(a.srcObject=b.srcObject),a.mozSrcObject=b.mozSrcObject,a.play(),c===!0&&(a.muted=!0),a},B=function(b,c,d,e){b.getStats(c,a.bind(o,this,b,d),e)},F=!0;break;case"Opera":t("Opera detected",u),C=l,E=n,B=function(b,c,d,e){b.getStats(a.bind(o,this,b,d),c,e)},F=!0;break;case"Chrome":t("Webkit detected",u),C=l,E=n,B=function(b,c,d,e){b.getStats(a.bind(o,this,b,d),c,e)},F=!0;break;case"Edge":t("Edge detected",u),C=l,E=n,B=function(b,c,d,e){b.getStats(c,a.bind(o,this,b,d),e)},F=!0;break;case"Safari":t("Safari detected",u),C=function(b,c){return a.isObject(c)&&(b.__phenixHasPlayedWebRtc=!0),b=l(b,c)},D=function(a,b){return a.__phenixHasPlayedWebRtc?(a=new e(a,b,(!1)).getElement(),a.play(),a):m(a,b)},E=n,B=function(b,c,d,e){b.getStats(c).then(a.bind(o,this,b,d),e)},F=!0;break;case"ReactNative":t("React Native detected",u),C=function(){t("attachMediaStream not supported in React Native environment")},D=function(){t("attachUriStream not supported in React Native environment")},E=function(){t("reattachMediaStream not supported in React Native environment")},B=function(b,c,d,e){b.getStats(c).then(a.bind(o,this,b,d),e)},F=!0;break;default:t("Browser does not appear to be WebRTC-capable",u)}}function g(b,c,e){var f=a.bind(h,this,b,c,e);return navigator&&a.isFunction(navigator.getUserMedia)?navigator.getUserMedia(b,f,e):d&&a.isFunction(d.getUserMedia)?d.getUserMedia(b,f,e):void 0}function h(a,b,c,d){setTimeout(function(){for(var e=d.getTracks(),f=0;f<e.length;f++){var g=e[f];if(g.onended=function(a){t(a.timeStamp,"Track",g.id,g.label,"ended")},t("Track",g.id,g.label,e[f].kind,"readyState=",e[f].readyState),"ended"===g.readyState)return i("User media not available",c,e)}var h=(a.audio?1:0)+(a.video?1:0);return e.length!==h?i("Unable to get all requested user media.",c,e):void b(d)},100)}function i(a,b,c){try{var d=new Error(a);d.code="unavailable",b(d)}finally{j(c)}}function j(a){for(var b=0;b<a.length;b++)a[b].stop()}function k(a,b){if("input"!==a&&"output"!==a)throw new Error("Unsupported device type "+a);navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices().then(function(c){var d=[];c.forEach(function(b){b.kind==="audio"+a?d.push({kind:"audio",id:b.deviceId,label:b.label}):b.kind==="video"+a&&d.push({kind:"video",id:b.deviceId,label:b.label})}),b(d)})}function l(a,b){return"undefined"!=typeof a.srcObject?a.srcObject=b:"undefined"!=typeof a.mozSrcObject?a.mozSrcObject=b:"undefined"!=typeof a.src?a.src=URL.createObjectURL(b):t("Error attaching stream to element."),a.play(),a}function m(a,b){return a.src=b,a.play(),a}function n(a,b){return a.src=b.src,a}function o(a,b,c){b(p(a,c))}function p(b,c){switch(u.browser){case"Edge":c.forEach(function(a){a.mediaType=q(b,a.codecId),a.bytesSent=s(a.packetsSent,a.mediaType),a.bytesReceived=s(a.packetsReceived,a.mediaType)});break;case"Safari":c.forEach(function(b){a.includes(b.id.toLowerCase(),"audio")&&a.includes(b.id.toLowerCase(),"rtp")&&(b.mediaType="audio"),a.includes(b.id.toLowerCase(),"video")&&a.includes(b.id.toLowerCase(),"rtp")&&(b.mediaType="video")})}return c}function q(b,c){if(c){var d;return r(b,function(b){a.startsWith(b,"video")&&a.includes(b.toLowerCase(),c.toLowerCase())&&(d="video"),a.startsWith(b,"audio")&&a.includes(b.toLowerCase(),c.toLowerCase())&&(d="audio")}),d}}function r(b,c){var d=b.localDescription.sdp.split("m="),e=b.remoteDescription.sdp.split("m=");return d.length===e.length&&a.findIndex(d,function(a,b){return c(a,b,e)})}function s(a,b){var c=parseInt(a)||0;return"audio"===b?100*c:"video"===b?1080*c:void 0}var t=function(){console.log.apply(console,arguments)},u=new b(navigator.userAgent).detect(),v=d.RTCPeerConnection,w=d.RTCSessionDescription,x=d.RTCIceCandidate,y=null,z=null,A=null,B=null,C=null,D=null,E=null,F=!1;return function(){f();var a={RTCPeerConnection:v,RTCSessionDescription:w,RTCIceCandidate:x,getSources:y,getDestinations:z,getUserMedia:A,getStats:B,attachMediaStream:C,attachUriStream:D||m,reattachMediaStream:E,webrtcSupported:F};return a.exportGlobal=function(){d.RTCPeerConnection=a.RTCPeerConnection,d.RTCSessionDescription=a.RTCSessionDescription,d.RTCIceCandidate=a.RTCIceCandidate},a}}.apply(b,d),!(void 0!==e&&(a.exports=e))},function(a,b){a.exports=f}])});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(83),
    __webpack_require__(82)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Disposable, DisposableList) {
    return {
        Disposable: Disposable,
        DisposableList: DisposableList
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(29),
    __webpack_require__(79)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Event, NamedEvents) {
    return {
        Event: Event,
        NamedEvents: NamedEvents
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var streamEnums = {
        networkStates: {
            networkEmpty: {
                id: 0,
                name: 'NETWORK_EMPTY'
            },
            networkIdle: {
                id: 1,
                name: 'NETWORK_IDLE'
            },
            networkLoading: {
                id: 2,
                name: 'NETWORK_LOADING'
            },
            networkNoSource: {
                id: 3,
                name: 'NETWORK_NO_SOURCE'
            }
        },
        types: {
            realTime: {
                id: 0,
                name: 'real-time'
            },
            dash: {
                id: 1,
                name: 'dash'
            },
            hls: {
                id: 2,
                name: 'hls'
            },
            rtmp: {
                id: 0,
                name: 'rtmp'
            }
        },
        streamEvents: {
            playerEnded: {
                id: 0,
                name: 'playerended'
            },
            playerError: {
                id: 1,
                name: 'playererror'
            },
            stopped: {
                id: 2,
                name: 'stopped'
            }
        },
        rendererEvents: {
            ended: {
                id: 0,
                name: 'ended'
            },
            error: {
                id: 1,
                name: 'error'
            },
            userActionRequired: {
                id: 2,
                name: 'userActionRequired'
            }
        }
    };

    return streamEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(57)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(http) {
    'use strict';

    return http;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(77)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(getGlobal) {
    'use strict';

    return getGlobal();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(30),
    __webpack_require__(81),
    __webpack_require__(80)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Observable, ObservableArray, ObservableMonitor) {
    'use strict';

    return {
        Observable: Observable,
        ObservableArray: ObservableArray,
        ObservableMonitor: ObservableMonitor
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event) {
    'use strict';

    var defaultPollFrequency = 500;
    var minimumPollFrequency = 15;

    function DimensionsChangedMonitor(logger, options) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._dimensionsChangedEvent = new event.Event();
        this._dimensionsChangedIntervalId = null;
        this._toBeStarted = false;
        this._videoElement = null;
        this._dimensionsChangedData = {
            pollFrequency: defaultPollFrequency,
            previousWidth: 0,
            previousHeight: 0
        };

        if (options && options.pollFrequency) {
            this._dimensionsChangedData.pollFrequency = options.pollFrequency >= minimumPollFrequency ? options.pollFrequency : minimumPollFrequency;
        }

        this._renderer = null;
    }

    DimensionsChangedMonitor.prototype.start = function start(renderer, element) {
        startMonitor.call(this, renderer, element);
    };

    DimensionsChangedMonitor.prototype.stop = function stop() {
        stopMonitor.call(this);
    };

    DimensionsChangedMonitor.prototype.addVideoDisplayDimensionsChangedCallback = function addVideoDisplayDimensionsChangedCallback(callback) {
        assert.isFunction(callback, 'addVideoDisplayDimensionsChangedCallback');
        startInterval.call(this);

        return this._dimensionsChangedEvent.listen(callback);
    };

    DimensionsChangedMonitor.prototype.toString = function() {
        return 'DimensionsChangedMonitor[pollFrequency=' + this._dimensionsChangedData.pollFrequency +
            ', previousHeight=' + this._dimensionsChangedData.previousHeight +
            ', previousWidth=' + this._dimensionsChangedData.previousHeight +
            ', state=' + (this._dimensionsChangedIntervalId ? 'running' : 'stopped') + ']';
    };

    function startMonitor(renderer, element) {
        if (!element || _.isUndefined(element.videoWidth)) {
            this._logger.warn("Attempting to start dimensions changed monitor without providing proper 'video' element.");
        }

        this._renderer = renderer;
        this._videoElement = element;
        this._toBeStarted = true;
        startInterval.call(this);
    }

    function stopMonitor() {
        this._toBeStarted = false;

        if (this._dimensionsChangedIntervalId) {
            clearInterval(this._dimensionsChangedIntervalId);
            this._dimensionsChangedIntervalId = null;
        }

        this._dimensionsChangedEvent.dispose();
    }

    function startInterval() {
        // Return if either:
        // - start hasn't been called yet
        // - the interval is already running
        // - there is no callback yet
        if (!this._toBeStarted || this._dimensionsChangedIntervalId || this._dimensionsChangedEvent.size() === 0) {
            return;
        }

        var that = this;
        this._dimensionsChangedData.previousWidth = this._videoElement.videoWidth;
        this._dimensionsChangedData.previousHeight = this._videoElement.videoHeight;

        this._dimensionsChangedIntervalId = setInterval(function checkVideoDimensions() {
            if (that._videoElement.videoWidth !== that._dimensionsChangedData.previousWidth || that._videoElement.videoHeight !== that._dimensionsChangedData.previousHeight) {
                that._dimensionsChangedData.previousWidth = that._videoElement.videoWidth;
                that._dimensionsChangedData.previousHeight = that._videoElement.videoHeight;

                that._dimensionsChangedEvent.fireAsync([that._renderer, {
                    width: that._videoElement.videoWidth,
                    height: that._videoElement.videoHeight
                }]);
            }
        }, that._dimensionsChangedData.pollFrequency);
    }

    return DimensionsChangedMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(78),
    __webpack_require__(75),
    __webpack_require__(17)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(Logger, ConsoleAppender, logging) {
    'use strict';

    return {
        createLogger: function() {
            return new Logger();
        }, // Base logger with nothing appended
        Logger: Logger,
        ConsoleAppender: ConsoleAppender,
        level: logging.level // Object with log levels
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    return {isSupported: false};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(7),
    __webpack_require__(21),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, rtc, global, PhenixLiveStream, streamEnums) {
    'use strict';

    var defaultFeatures = [
        streamEnums.types.realTime.name,
        streamEnums.types.dash.name,
        streamEnums.types.hls.name
    ];

    function FeatureDetector(features) {
        features = features || defaultFeatures;

        assert.isArray(features, 'features');

        _.forEach(features, function(feature, index) {
            assert.isValidType(feature, streamEnums.types, 'FeatureType[' + index + ']');
        });

        this._features = _.map(features, _.bind(_.getEnumName, _, streamEnums.types));
    }

    FeatureDetector.isFeatureSupported = function(feature) {
        if (feature) {
            assert.isStringNotEmpty(feature, 'feature');
        }

        var featureName = _.getEnumName(streamEnums.types, feature);

        switch (featureName) {
        case streamEnums.types.realTime.name:
            return rtc.webrtcSupported;
        case streamEnums.types.dash.name:
        case streamEnums.types.hls.name:
        case streamEnums.types.rtmp.name:
            return PhenixLiveStream.canPlaybackType(feature);
        default:
            return false;
        }
    };

    FeatureDetector.mapFeatureToPCastCapability = function(feature) {
        if (feature) {
            assert.isStringNotEmpty(feature, 'feature');
        }

        var featureName = _.getEnumName(streamEnums.types, feature);

        switch (featureName) {
        case streamEnums.types.realTime.name:
            return 'real-time';
        case streamEnums.types.dash.name:
        case streamEnums.types.hls.name:
            return 'streaming';
        case streamEnums.types.rtmp.name:
            return 'rtmp';
        default:
            return '';
        }
    };

    FeatureDetector.mapPCastCapabilitiesToFeatures = function(capabilities) {
        assert.isArray(capabilities, 'capabilities');

        return _.reduce(capabilities, function(features, capability) {
            return features.concat(FeatureDetector.mapPCastCapabilityToFeatures(capability));
        }, []);
    };

    FeatureDetector.mapPCastCapabilityToFeatures = function(capability) {
        if (capability) {
            assert.isStringNotEmpty(capability, 'capability');
        }

        if (capability === 'real-time') {
            return [streamEnums.types.realTime.name];
        }

        if (capability === 'streaming') {
            return [streamEnums.types.dash.name, streamEnums.types.dash.name];
        }

        if (capability === 'rtmp') {
            return [streamEnums.types.rtmp.name];
        }

        return [];
    };

    FeatureDetector.prototype.getFeatures = function() {
        return this._features;
    };

    FeatureDetector.prototype.getFeaturePCastCapabilities = function() {
        var capabilities = _.map(this._features, FeatureDetector.mapFeatureToPCastCapability);

        return _.reduce(capabilities, removeDuplicates, []);
    };

    FeatureDetector.prototype.getPreferredFeatureFromPublisherCapabilities = function(capabilities, excludeRealTime) {
        assert.isArray(capabilities, 'capabilities');

        var preferredFeature = _.reduce(this._features, function(candidateFeature, feature) {
            var featureCapability = FeatureDetector.mapFeatureToPCastCapability(feature);
            var isFeatureAvailableAndCanPlayBack = FeatureDetector.isFeatureSupported(feature) && (_.includes(capabilities, featureCapability) || (feature === 'real-time' && !excludeRealTime));
            var nextFeature = isFeatureAvailableAndCanPlayBack ? feature : null;

            return candidateFeature || nextFeature;
        }, null);

        if (preferredFeature === streamEnums.types.dash.name && FeatureDetector.shouldUseNativeHls && _.includes(capabilities, FeatureDetector.mapFeatureToPCastCapability(streamEnums.types.hls.name)) && _.includes(this._features, streamEnums.types.hls.name)) {
            preferredFeature = streamEnums.types.hls.name;
        } else if (preferredFeature === streamEnums.types.hls.name && !FeatureDetector.shouldUseNativeHls && _.includes(capabilities, FeatureDetector.mapFeatureToPCastCapability(streamEnums.types.dash.name)) && _.includes(this._features, streamEnums.types.dash.name)) {
            preferredFeature = streamEnums.types.dash.name;
        }

        return preferredFeature;
    };

    FeatureDetector.shouldUseNativeHls = isIOS() || rtc.browser === 'Safari' || isSamsungBrowser();
    FeatureDetector.isIOS = isIOS;
    FeatureDetector.isSamsungBrowser = isSamsungBrowser;
    FeatureDetector.isAndroid = isAndroid;
    FeatureDetector.isMobile = isMobile;
    FeatureDetector.getIOSVersion = getIOSVersion;

    function isIOS() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        return /iPad|iPhone|iPod/.test(userAgent) && !global.MSStream;
    }

    function isSamsungBrowser() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        return /SamsungBrowser/.test(userAgent);
    }

    function isAndroid() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        return /(android)/i.test(userAgent);
    }

    function isMobile() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        return isIOS() || /Android|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(userAgent);
    }

    function getIOSVersion() {
        var userAgent = _.get(global, ['navigator', 'userAgent'], '');

        if (/iP(hone|od|ad)/.test(userAgent)) {
            var version = userAgent.match(/.*OS (\d+)_(\d+)_?(\d+)? like Mac OS X/);

            return {
                major: parseInt(_.get(version, [1], 0), 10),
                minor: parseInt(_.get(version, [2], 0), 10),
                patch: parseInt(_.get(version, [3], 0), 10)
            };
        }
    }

    function removeDuplicates(list, item) {
        if (!_.includes(list, item)) {
            list.push(item);
        }

        return list;
    }

    return FeatureDetector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(42)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(ApplicationActivityDetector) {
    'use strict';

    return new ApplicationActivityDetector();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, rtc) {
    'use strict';

    // TODO(dy) wrap PC in this class
    function PeerConnection() {

    }

    PeerConnection.convertPeerConnectionStats = function(stats, lastStats) {
        return convertPeerConnectionStats(stats, lastStats);
    };

    function convertPeerConnectionStats(stats, lastStats) {
        if (!stats) {
            return null;
        }

        var newStats = [];
        var normalizedStats = normalizeStatsReport(stats);

        _.forOwn(normalizedStats, function convertStats(statsReport) {
            if (!_.hasIndexOrKey(statsReport, 'ssrc') || !statsReport.ssrc || _.includes(statsReport.id, 'rtcp')) {
                return;
            }

            var id = statsReport.id || statsReport.ssrc;

            if (!_.hasIndexOrKey(lastStats, id)) {
                lastStats[id] = {timestamp: _.now()};
            }

            var direction = '?';
            var timeDelta = parseFloat(statsReport.timestamp) - lastStats[id].timestamp;
            var up = calculateUploadRate(parseFloat(statsReport.bytesSent), lastStats[id].bytesSent, timeDelta);
            var down = calculateDownloadRate(parseFloat(statsReport.bytesReceived), lastStats[id].bytesReceived, timeDelta);
            var framerateMean = calculateFrameRate(parseFloat(statsReport.framesEncoded || statsReport.framesDecoded), lastStats[id].framesEncoded || lastStats[id].framesDecoded, timeDelta);

            if (isOutbound(statsReport)) {
                direction = 'upload';
            }

            if (isInbound(statsReport)) {
                direction = 'download';
            }

            var stat = {
                uploadRate: up,
                downloadRate: down,
                mediaType: statsReport.mediaType,
                ssrc: statsReport.ssrc,
                direction: direction,
                nativeReport: statsReport,
                rtt: statsReport.rtt || statsReport.googRtt || statsReport.roundTripTime || statsReport.currentRoundTripTime || '?',
                bitrateMean: parseInt(statsReport.bitrateMean, 10) || (isOutbound(statsReport) ? up : down) * 1000 || undefined,
                targetDelay: parseInt(statsReport.targetDelay || statsReport.googTargetDelayMs, 10) || undefined,
                currentDelay: parseInt(statsReport.currentDelay || statsReport.currentDelayMs || statsReport.googCurrentDelayMs, 10) || undefined
            };

            _.assign(lastStats[id], statsReport);

            if (statsReport.mediaType === 'video') {
                stat = _.assign(stat, {
                    droppedFrames: parseInt(statsReport.droppedFrames, 10) || 0,
                    framerateMean: parseInt(statsReport.framerateMean || framerateMean, 10) || statsReport.framesPerSecond || 0,
                    cpuLimitedResolution: statsReport.cpuLimitedResolution || statsReport.googCpuLimitedResolution,
                    avgEncode: parseInt(statsReport.avgEncode || statsReport.avgEncodeMs || statsReport.googAvgEncodeMs, 10)
                });
            }

            if (statsReport.mediaType === 'audio') {
                stat = _.assign(stat, {
                    audioInputLevel: statsReport.audioInputLevel || statsReport.googAudioInputLevel,
                    audioOutputLevel: statsReport.audioOutputLevel || statsReport.googAudioOutputLevel,
                    jitter: parseInt(statsReport.jitter || statsReport.jitterReceived || statsReport.googJitterReceived, 10) || undefined,
                    jitterBuffer: parseInt(statsReport.jitterBuffer || statsReport.jitterBufferMs || statsReport.googJitterBufferMs, 10) || undefined
                });
            }

            newStats.push(stat);
        });

        return newStats;
    }

    function calculateUploadRate(bytesSent, prevBytesSent, timeDelta) {
        if (_.isUndefined(prevBytesSent)) {
            return;
        }

        if (bytesSent) {
            var bytesSentBefore = prevBytesSent || 0;

            return 8 * (bytesSent - bytesSentBefore) / timeDelta;
        }

        return 0;
    }

    function calculateDownloadRate(bytesReceived, prevBytesReceived, timeDelta) {
        if (_.isUndefined(prevBytesReceived)) {
            return;
        }

        if (bytesReceived) {
            var bytesReceivedBefore = prevBytesReceived || 0;

            return 8 * (bytesReceived - bytesReceivedBefore) / timeDelta;
        }

        return 0;
    }

    function calculateFrameRate(currentFramesEncoded, lastFramesEncoded, timeDelta) {
        if (_.isUndefined(lastFramesEncoded)) {
            return;
        }

        return (currentFramesEncoded - lastFramesEncoded)
            / (timeDelta / 1000.0);
    }

    function normalizeStatsReport(stats) {
        var normalizedReport = {};

        switch (rtc.browser) {
        case 'Firefox':
            _.forOwn(stats, function(report, key) {
                if (_.includes(key, 'rtcp')) {
                    _.forOwn(stats, function(reportToUpdate, key) {
                        if (_.includes(key, 'rtp') && report.mediaType === reportToUpdate.mediaType) {
                            reportToUpdate.jitter = (report.jitter || reportToUpdate.jitter) * 1000;
                            reportToUpdate.roundTripTime = report.roundTripTime;
                        }
                    });
                }
            });

            return stats;
        case 'IE':
            _.forOwn(stats, function(value, key) {
                if (!_.startsWith(key, 'ssrc')) {
                    return;
                }

                normalizedReport[value.id] = value;
            });

            return normalizedReport;
        case 'Edge':
            stats.forEach(function(report) {
                normalizedReport[report.id] = report;

                if (_.hasIndexOrKey(report, 'jitter')) {
                    report.jitter *= 1000;
                }
            });

            _.forOwn(normalizedReport, function(report) {
                if (report.type === 'track' && _.hasIndexOrKey(report, 'framesPerSecond')) {
                    _.forOwn(normalizedReport, function(reportToUpdate) {
                        if (reportToUpdate.mediaType === 'video') {
                            reportToUpdate.framesPerSecond = parseInt(report.framesPerSecond, 10);
                        }
                    });
                }
            });

            return normalizedReport;
        case 'Safari':
            stats.forEach(function(report) {
                normalizedReport[report.id] = report;
            });

            _.forOwn(normalizedReport, function(report) {
                if (_.hasIndexOrKey(report, 'id') && isInbound(report)) {
                    var candidateSsrc = parseInt(_.get(report.id.split('_'), [1]), 10);

                    report.ssrc = candidateSsrc || report.ssrc; // Ssrc is inaccurate for inbound reports
                }

                if (_.hasIndexOrKey(report, 'jitter')) {
                    report.jitter *= 1000;
                }

                if (report.type === 'candidate-pair') {
                    _.forOwn(normalizedReport, function(reportToUpdate) {
                        if (reportToUpdate.mediaType === 'audio' || reportToUpdate.mediaType === 'video') {
                            reportToUpdate.currentRoundTripTime = report.currentRoundTripTime * 1000;
                        }
                    });
                }

                if (report.type === 'track') {
                    _.forOwn(normalizedReport, function(reportToUpdate) {
                        if (reportToUpdate.mediaType === 'audio' && isInbound(reportToUpdate)) {
                            reportToUpdate.audioOutputLevel = report.audioLevel * 100000;
                        } else if (reportToUpdate.mediaType === 'audio' && isOutbound(reportToUpdate)) {
                            reportToUpdate.audioInputLevel = report.audioLevel * 100000;
                        }
                    });
                }
            });

            return normalizedReport;
        case 'ReactNative':
            var parsedStats = _.isString(stats) ? JSON.parse(stats) : stats;

            parsedStats.forEach(function(report) {
                var normalizedStatistics = {
                    id: report.id,
                    type: report.type
                };

                report.values.forEach(function(value) {
                    _.keys(value).forEach(function(key) {
                        normalizedStatistics[key] = value[key];
                    });
                });

                normalizedReport[normalizedStatistics.id] = normalizedStatistics;
            });

            return normalizedReport;
        case 'Chrome':
        default:
            stats.result().forEach(function(report) {
                var normalizedStatistics = {
                    id: report.id,
                    type: report.type
                };

                report.names().forEach(function(name) {
                    normalizedStatistics[name] = report.stat(name);
                });

                normalizedStatistics.timestamp = report.timestamp.getTime();

                normalizedReport[normalizedStatistics.id] = normalizedStatistics;
            });

            return normalizedReport;
        }
    }

    function isOutbound(statsReport) {
        return _.includes(statsReport.id, 'send') || _.includes(statsReport.id, 'outbound') || statsReport.type === 'outboundrtp' || statsReport.type === 'outbound-rtp' || statsReport.type === 'kOutboundRtp';
    }

    function isInbound(statsReport) {
        return _.includes(statsReport.id, 'recv') || statsReport.type === 'inboundrtp' || statsReport.type === 'inbound-rtp' || statsReport.type === 'kInboundRtp';
    }

    return PeerConnection;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(71),
    __webpack_require__(60),
    __webpack_require__(26)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(MQWebSocket, BatchHttpProto, MQService) {
    return {
        MQWebSocket: MQWebSocket,
        BatchHttpProto: BatchHttpProto,
        MQService: MQService
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    var environment = {};

    environment.parseEnvFromPcastBaseUri = function(uri) {
        uri = uri.toLowerCase();

        if (_.includes(uri, 'local')) {
            return 'local';
        } else if (_.includes(uri, 'stg')) {
            return 'staging';
        }

        return 'production';
    };

    return environment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var logging = {
        level: {
            TRACE: 0,
            DEBUG: 1,
            INFO: 2,
            WARN: 3,
            ERROR: 4,
            FATAL: 5
        }
    };

    return logging;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(6),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, http, disposable) {
    'use strict';

    var networkUnavailableCode = 0;
    var requestMaxTimeout = 20000;
    var defaultRequestOptions = {
        timeout: requestMaxTimeout,
        retryOptions: {
            backoff: 1.5,
            delay: 1000,
            maxAttempts: 3,
            additionalRetryErrorCodes: [networkUnavailableCode]
        }
    };
    var authenticationDataLocations = {
        body: {
            id: 1,
            name: 'body'
        },
        header: {
            id: 2,
            name: 'header'
        }
    };
    var defaultEndpointPaths = {
        createStreamTokenPath: '/stream',
        createAuthTokenPath: '/auth'
    };
    var requestTypes = {
        auth: {
            id: 1,
            name: 'auth'
        },
        stream: {
            id: 2,
            name: 'stream'
        }
    };

    function AdminApiProxyClient() {
        this._requestHandler = null;
        this._backendUri = '';
        this._endpointPaths = defaultEndpointPaths;
        this._authenticationData = {};
        this._authenticationDataLocationInPayload = authenticationDataLocations.body.name;
        this._disposables = new disposable.DisposableList();
    }

    AdminApiProxyClient.prototype.dispose = function() {
        return this._disposables.dispose();
    };

    AdminApiProxyClient.prototype.toString = function() {
        return 'AdminApiProxyClient[' +
            'customRequestHandler=' + (!!this._requestHandler).toString() +
            ',backendUri=' + this._backendUri +
            ',authenticationDataLocationInPayload=' + this._authenticationDataLocationInPayload +
            ',customEndpointPaths=' + (this._endpointPaths === defaultEndpointPaths).toString() +
            ',customAuthenticationData=' + (_.keys(this._authenticationData).length > 0).toString() + ']';
    };

    AdminApiProxyClient.prototype.getBackendUri = function() {
        return this._backendUri;
    };

    AdminApiProxyClient.prototype.setBackendUri = function(backendUri) {
        assert.isString(backendUri, 'backendUri');

        this._backendUri = backendUri;
    };

    AdminApiProxyClient.prototype.getEndpointPaths = function() {
        return _.assign({}, this._endpointPaths);
    };

    AdminApiProxyClient.prototype.setEndpointPaths = function(endpointPaths) {
        assert.isObject(endpointPaths, 'endpointPaths');

        if (endpointPaths.createStreamTokenPath) {
            assert.isStringNotEmpty(endpointPaths.createStreamTokenPath, 'endpointPaths.createStreamTokenPath');
        }

        if (endpointPaths.createAuthTokenPath) {
            assert.isStringNotEmpty(endpointPaths.createAuthTokenPath, 'endpointPaths.createAuthTokenPath');
        }

        this._endpointPaths = _.assign({}, defaultEndpointPaths, endpointPaths);
    };

    AdminApiProxyClient.prototype.getAuthenticationData = function() {
        return _.assign({}, this._authenticationData);
    };

    AdminApiProxyClient.prototype.setAuthenticationData = function(authenticationData) {
        assert.isObject(authenticationData, 'authenticationData');

        this._authenticationData = authenticationData;
    };

    AdminApiProxyClient.prototype.getAuthenticationDataLocationInPayload = function() {
        return this._authenticationDataLocationInPayload;
    };

    AdminApiProxyClient.prototype.setAuthenticationDataLocationInPayload = function(authenticationDataLocationInPayload) {
        assert.isValidType(authenticationDataLocationInPayload, authenticationDataLocations, 'authenticationDataLocationInPayload');

        this._authenticationDataLocationInPayload = authenticationDataLocationInPayload;
    };

    AdminApiProxyClient.prototype.getRequestHandler = function() {
        return this._requestHandler;
    };

    AdminApiProxyClient.prototype.setRequestHandler = function(callback) {
        assert.isFunction(callback, 'callback');

        if (this._backendUri) {
            throw new Error('Conflicting parameter [backendUri]');
        }

        if (_.keys(this._authenticationData).length > 0) {
            throw new Error('Conflicting parameter [authenticationData]');
        }

        if (this._authenticationDataLocationInPayload !== authenticationDataLocations.body.name) {
            throw new Error('Conflicting parameter [authenticationDataLocationInPayload]');
        }

        if (this._endpointPaths !== defaultEndpointPaths) {
            throw new Error('Conflicting parameter [endpointPaths]');
        }

        this._requestHandler = callback;
    };

    AdminApiProxyClient.prototype.createAuthenticationToken = function createAuthenticationToken(callback) {
        if (this._requestHandler) {
            return this._requestHandler(requestTypes.auth.name, {}, _.bind(handleOverrideRequestResponse, this, requestTypes.auth.name, callback));
        }

        var requestWithoutCallback = bindAuthDataAndPrepareRequest.call(this, http.postWithRetry, http, this._backendUri + this._endpointPaths.createAuthTokenPath, {}, defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    AdminApiProxyClient.prototype.createStreamTokenForPublishing = function createStreamTokenForPublishing(sessionId, capabilities, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isObject(capabilities, 'capabilities');

        var data = {
            sessionId: sessionId,
            capabilities: capabilities
        };

        if (this._requestHandler) {
            return this._requestHandler(requestTypes.stream.name, data, _.bind(handleOverrideRequestResponse, this, requestTypes.stream.name, callback));
        }

        var requestWithoutCallback = bindAuthDataAndPrepareRequest.call(this, http.postWithRetry, http, this._backendUri + this._endpointPaths.createStreamTokenPath, data, defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    AdminApiProxyClient.prototype.createStreamTokenForPublishingToExternal = function createStreamTokenForPublishingToExternal(sessionId, capabilities, streamId, callback) {
        this.createStreamTokenForSubscribing(sessionId, capabilities, streamId, null, callback);
    };

    AdminApiProxyClient.prototype.createStreamTokenForSubscribing = function createStreamTokenForSubscribing(sessionId, capabilities, streamId, alternateStreamIds, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isObject(capabilities, 'capabilities');

        if (!_.isNullOrUndefined(alternateStreamIds)) {
            assert.isArray(alternateStreamIds, 'additionalStreamIds');

            _.forEach(alternateStreamIds, function(alternateOriginStreamId) {
                assert.isStringNotEmpty(alternateOriginStreamId, 'alternateOriginStreamId');
            });
        }

        var data = {
            sessionId: sessionId,
            capabilities: capabilities,
            originStreamId: streamId
        };

        if (alternateStreamIds && alternateStreamIds.length > 0) {
            data.alternateOriginStreamIds = alternateStreamIds;
        }

        if (this._requestHandler) {
            return this._requestHandler(requestTypes.stream.name, data, _.bind(handleOverrideRequestResponse, this, requestTypes.stream.name, callback));
        }

        var requestWithoutCallback = bindAuthDataAndPrepareRequest.call(this, http.postWithRetry, http, this._backendUri + this._endpointPaths.createStreamTokenPath, data, defaultRequestOptions);

        return requestWithTimeout.call(this, requestWithoutCallback, callback);
    };

    function requestWithTimeout(requestWithoutCallback, callback) {
        var requestTimeoutId = null;
        var requestDisposable = requestWithoutCallback(_.bind(handleResponse, this, function(error, response) {
            clearTimeout(requestTimeoutId);

            callback(error, response);
        }));

        requestTimeoutId = setTimeout(function() {
            requestDisposable.dispose();
            callback(new Error('timeout'));
        }, requestMaxTimeout);

        this._disposables.add(requestDisposable);
        this._disposables.add(new disposable.Disposable(function() {
            clearTimeout(requestTimeoutId);
        }));

        return requestDisposable;
    }

    function bindAuthDataAndPrepareRequest(method, scope, uri, data, options) {
        switch (this._authenticationDataLocationInPayload) {
        case authenticationDataLocations.body.name:
            data = appendAuthDataTo.call(this, data);

            break;
        case authenticationDataLocations.header.name:
            options = appendAuthHeaders.call(this, options);

            break;
        default:
            throw new Error('Unsupported Authentication Mode ' + this._authenticationDataLocationInPayload);
        }

        return _.bind(method, scope, uri, JSON.stringify(data), options);
    }

    function appendAuthDataTo(data) {
        return _.assign({}, data, this._authenticationData);
    }

    function appendAuthHeaders(options) {
        if (options.headers) {
            options.headers = _.assign({}, this._authenticationData, options.headers);

            return options;
        }

        return _.assign({}, {headers: this._authenticationData}, options);
    }

    function handleResponse(callback, error, response) {
        if (error) {
            return callback(error, {});
        }

        var res = JSON.parse(response.data);

        if (res.status !== 'ok') {
            return callback(null, {status: res.status});
        }

        return callback(null, res);
    }

    function handleOverrideRequestResponse(type, callback, error, token) {
        if (!token || error) {
            return callback(error, {status: 'failed'});
        }

        var response = {status: 'ok'};

        switch(type) {
        case requestTypes.auth.name:
            response.authenticationToken = token;

            break;
        case requestTypes.stream.name:
            response.streamToken = token;

            break;
        default:
            throw new Error('Unsupported request type ' + type);
        }

        return callback(error, response);
    }

    return AdminApiProxyClient;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(34)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, RTC, ResolutionProvider) {
    'use strict';

    function UserMediaResolver(pcast, options) {
        assert.isObject(pcast, 'pcast');

        if (options) {
            assert.isObject(options, 'options');
        }

        if (options && options.screenShare) {
            assert.isFunction(options.screenShare, 'options.screenShare');
        }

        this._pcast = pcast;
        this._logger = pcast.getLogger();
        this._options = options || {};
        this._onScreenShare = _.get(options, ['onScreenShare']);
    }

    UserMediaResolver.prototype.getUserMedia = function getUserMedia(deviceOptions, callback) {
        assert.isObject(deviceOptions, 'deviceOptions');

        var resolutionProvider = new ResolutionProvider(this._options);
        var resolution = resolutionProvider.getDefaultResolution();
        var frameRate = resolutionProvider.getDefaultFrameRate();

        getUserMediaWithOptions.call(this, deviceOptions, resolution, frameRate, resolutionProvider, callback);
    };

    UserMediaResolver.prototype.getVendorSpecificConstraints = function getVendorSpecificConstraints(deviceOptions, resolution, frameRate) {
        resolution = resolution || {};

        if (!deviceOptions || (!deviceOptions.audio && ! deviceOptions.video && !deviceOptions.screen && !deviceOptions.screenAudio)) {
            throw new Error('Invalid device options. Must pass in at least one device option.');
        }

        if ((RTC.browser === 'Firefox' && RTC.browserVersion > 38)
            || (RTC.browser === 'Chrome' && RTC.browserVersion > 52 && !deviceOptions.screen && !deviceOptions.screenAudio)
            || (RTC.browser === 'Safari' && RTC.browserVersion > 10)
            || (RTC.browser === 'Opera' && RTC.browserVersion > 40)) {
            return setUserMediaOptionsForNewerBrowser(deviceOptions, resolution, frameRate);
        }

        if (RTC.browser === 'Edge') {
            return setUserMediaOptionsForEdge(deviceOptions, resolution, frameRate);
        }

        return setUserMediaOptionsForOtherBrowsers(deviceOptions, resolution, frameRate);
    };

    function setUserMediaOptionsForEdge(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                height: {
                    min: height,
                    max: height,
                    exact: height
                },
                width: {
                    min: width,
                    max: width,
                    exact: width
                },
                frameRate: frameRate
            };

            if (video.deviceId) {
                constraints.video.deviceId = video.deviceId;
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.width;
            }

            if (!height) {
                delete constraints.video.height;
            }

            if (!frameRate) {
                delete constraints.video.frameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = true;

            if (audio.deviceId) {
                constraints.audio = {deviceId: audio.deviceId};
            }
        }

        if (screen) {
            constraints.screen = true;
        }

        return constraints;
    }

    function setUserMediaOptionsForNewerBrowser(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var screenAudio = deviceOptions.screenAudio;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                height: {
                    min: height,
                    ideal: height,
                    max: height
                },
                width: {
                    min: width,
                    ideal: width,
                    max: width
                },
                frameRate: {
                    ideal: frameRate,
                    max: frameRate
                }
            };

            if (video.deviceId) {
                constraints.video.deviceId = {exact: video.deviceId};
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (!width) {
                delete constraints.video.width;
            }

            if (!height) {
                delete constraints.video.height;
            }

            if (!frameRate) {
                delete constraints.video.frameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = {};

            if (audio.deviceId) {
                constraints.audio.deviceId = {exact: audio.deviceId};
            }

            if (audio.mediaSource) {
                constraints.audio.mediaSource = audio.mediaSource;
            }

            if (audio.mediaSourceId) {
                constraints.audio.mediaSourceId = audio.mediaSourceId;
            }

            if (!audio.deviceId && !audio.mediaSource && !audio.mediaSourceId) {
                constraints.audio = true;
            }
        }

        if (screenAudio) {
            constraints.screenAudio = {};

            if (screenAudio.deviceId) {
                constraints.screenAudio.deviceId = {exact: screenAudio.deviceId};
            }

            if (screenAudio.mediaSource) {
                constraints.screenAudio.mediaSource = screenAudio.mediaSource;
            }

            if (screenAudio.mediaSourceId) {
                constraints.screenAudio.mediaSourceId = screenAudio.mediaSourceId;
            }

            if (!screenAudio.deviceId && !screenAudio.mediaSource && !screenAudio.mediaSourceId) {
                constraints.screenAudio = true;
            }
        }

        if (screen) {
            constraints.screen = {
                height: {
                    min: height,
                    ideal: height,
                    max: height
                },
                width: {
                    min: width,
                    ideal: width,
                    max: width
                },
                frameRate: {
                    ideal: frameRate,
                    max: frameRate
                }
            };

            if (!width) {
                delete constraints.screen.width;
            }

            if (!height) {
                delete constraints.screen.height;
            }

            if (!frameRate) {
                delete constraints.screen.frameRate;
            }

            if (screen.mediaSource) {
                constraints.screen.mediaSource = screen.mediaSource;
            }

            if (!width && !height && !frameRate && !screen.mediaSource) {
                constraints.screen = true;
            }
        }

        if (screen && video) {
            constraints.screen = true;
        }

        return constraints;
    }

    function setUserMediaOptionsForOtherBrowsers(deviceOptions, resolution, frameRate) {
        var video = deviceOptions.video;
        var audio = deviceOptions.audio;
        var screen = deviceOptions.screen;
        var screenAudio = deviceOptions.screenAudio;
        var width = resolution.width;
        var height = resolution.height;
        var constraints = {};

        if (video) {
            constraints.video = {
                mandatory: {
                    minHeight: height,
                    maxHeight: height,
                    minWidth: width,
                    maxWidth: width,
                    maxFrameRate: frameRate
                }
            };

            if (video.deviceId) {
                constraints.video.mandatory.sourceId = video.deviceId;
            }

            if (video.facingMode) {
                constraints.video.facingMode = video.facingMode;
            }

            if (video.mediaSource) {
                constraints.video.mandatory.mediaSource = video.mediaSource;
            }

            if (video.mediaSourceId) {
                constraints.video.mandatory.mediaSourceId = video.mediaSourceId;
            }

            if (!width) {
                delete constraints.video.mandatory.minWidth;
                delete constraints.video.mandatory.maxWidth;
            }

            if (!height) {
                delete constraints.video.mandatory.minHeight;
                delete constraints.video.mandatory.maxHeight;
            }

            if (!frameRate) {
                delete constraints.video.mandatory.maxFrameRate;
            }

            if (!width && !height && !frameRate && !video.deviceId && !video.facingMode && !video.mediaSource && !video.mediaSourceId) {
                constraints.video = true;
            }
        }

        if (audio) {
            constraints.audio = {mandatory: {}};

            if (audio.deviceId) {
                constraints.audio.mandatory.sourceId = audio.deviceId;
            }

            if (audio.mediaSource) {
                constraints.audio.mandatory.mediaSource = audio.mediaSource;
            }

            if (audio.mediaSourceId) {
                constraints.audio.mandatory.mediaSourceId = audio.mediaSourceId;
            }

            if (!audio.deviceId && !audio.mediaSource && !audio.mediaSourceId) {
                constraints.audio = true;
            }
        }

        if (screenAudio) {
            constraints.screenAudio = {mandatory: {}};

            if (screenAudio.deviceId) {
                constraints.screenAudio.mandatory.sourceId = screenAudio.deviceId;
            }

            if (screenAudio.mediaSource) {
                constraints.screenAudio.mandatory.mediaSource = screenAudio.mediaSource;
            }

            if (screenAudio.mediaSourceId) {
                constraints.screenAudio.mandatory.mediaSourceId = screenAudio.mediaSourceId;
            }

            if (!screenAudio.deviceId && !screenAudio.mediaSource && !screenAudio.mediaSourceId) {
                constraints.screenAudio = true;
            }
        }

        if (screen) {
            constraints.screen = {
                mandatory: {
                    minHeight: height,
                    maxHeight: height,
                    minWidth: width,
                    maxWidth: width,
                    maxFrameRate: frameRate
                }
            };

            if (!width) {
                delete constraints.screen.mandatory.minWidth;
                delete constraints.screen.mandatory.maxWidth;
            }

            if (!height) {
                delete constraints.screen.mandatory.minHeight;
                delete constraints.screen.mandatory.maxHeight;
            }

            if (!frameRate) {
                delete constraints.screen.mandatory.maxFrameRate;
            }

            if (screen.mediaSource) {
                constraints.screen.mandatory.mediaSource = screen.mediaSource;
            }

            if (screen.mediaSourceId) {
                constraints.screen.mandatory.mediaSourceId = screen.mediaSourceId;
            }

            if (!width && !height && !frameRate && !screen.mediaSource) {
                constraints.screen = true;
            }
        }

        if (screen && video) {
            constraints.screen = true;
        }

        return constraints;
    }

    function getUserMediaWithOptions(deviceOptions, resolution, frameRate, resolutionProvider, callback) {
        var constraints = this.getVendorSpecificConstraints(deviceOptions, resolution || {}, frameRate);
        var hasVideo = !!constraints.video;
        var that = this;

        this._pcast.getUserMedia(constraints, function(pcast, status, userMedia, error) {
            if (status === 'ok') {
                return callback(null, {
                    userMedia: userMedia,
                    options: {
                        frameRate: hasVideo ? frameRate : null,
                        resolution: hasVideo ? _.get(resolution, ['height'], null) : null,
                        aspectRatio: hasVideo ? _.get(resolution, ['aspectRatio'], null) : null
                    }
                });
            }

            var nextResolution = resolution;
            var nextFrameRate = frameRate;
            var constraintName = getConstraintNameFromError(error);

            if (error && (
                error.name === 'ConstraintNotSatisfiedError'
                || error.name === 'OverconstrainedError'
                || error.constructor.name === 'OverconstrainedError'
                || (error.code === 'unavailable' && RTC.browser === 'Edge'))
            ) {
                switch (constraintName.toLowerCase()) {
                case 'width':
                case 'height':
                    if (!resolution || !resolutionProvider.canResolveNextResolution()) {
                        break;
                    }

                    that._logger.warn('Unable to get user media with constraint [%s] with height [%s] and width [%s]. Retrying with next closest resolution.',
                        constraintName, nextResolution.height, nextResolution.width);
                    nextResolution = resolutionProvider.getNextResolution(resolution.height, resolution.aspectRatio);

                    return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                case 'framerate':
                default:
                    // Always try without frame rate if constraint name not defined
                    if (frameRate) {
                        that._logger.warn('Unable to get user media with constraint [%s] and framerate [%s]. Retrying without frame rate constraint.', constraintName, frameRate);
                        nextFrameRate = null;

                        return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                    }

                    // Then try to reduce resolution
                    if (!resolution || !resolutionProvider.canResolveNextResolution()) {
                        break;
                    }

                    that._logger.warn('Unable to get user media with constraint [%s] with height [%s] and width [%s]. Retrying with next closest resolution.',
                        constraintName, nextResolution.height, nextResolution.width);
                    nextResolution = resolutionProvider.getNextResolution(resolution.height, resolution.aspectRatio);

                    return getUserMediaWithOptions.call(that, deviceOptions, nextResolution, nextFrameRate, resolutionProvider, callback);
                }
            }

            that._logger.error('Unable to get user media with status [%s]', status, error);

            return callback(error);
        }, function(constraints) {
            var clientConstraints = constraints;

            if (that._onScreenShare && RTC.browser === 'Chrome') {
                var normalizedConstraints = normalizeChromeScreenShareConstraints(constraints);

                clientConstraints = that._onScreenShare(normalizedConstraints);

                var resolution;

                if (clientConstraints.resolutionHeight && clientConstraints.aspectRatio) {
                    resolution = {
                        width: resolutionProvider.calculateWidthByAspectRatio(clientConstraints.resolution, clientConstraints.aspectRatio),
                        height: clientConstraints.resolutionHeight
                    };
                }

                clientConstraints = getChromeScreenShareConstraints.call(that, normalizedConstraints, resolution, clientConstraints.frameRate);
            }

            return clientConstraints;
        });
    }

    function normalizeChromeScreenShareConstraints(constraints) {
        var chromeVideoSource = _.get(constraints, ['video', 'mandatory', 'chromeMediaSource']);
        var chromeAudioSource = _.get(constraints, ['audio', 'mandatory', 'chromeMediaSource']);
        var chromeVideoSourceId = _.get(constraints, ['video', 'mandatory', 'chromeMediaSourceId']);
        var chromeAudioSourceId = _.get(constraints, ['audio', 'mandatory', 'chromeMediaSourceId']);
        var normalizedConstraints = {};

        if (chromeVideoSource || chromeAudioSourceId) {
            _.set(normalizedConstraints, ['screen', 'mediaSource'], chromeVideoSource);
            _.set(normalizedConstraints, ['screen', 'mediaSourceId'], chromeVideoSourceId);
        }

        if (chromeAudioSource || chromeAudioSourceId) {
            _.set(normalizedConstraints, ['screenAudio', 'mediaSource'], chromeAudioSource);
            _.set(normalizedConstraints, ['screenAudio', 'mediaSourceId'], chromeAudioSourceId);
        }

        return normalizedConstraints;
    }

    function getChromeScreenShareConstraints(constraints, resolution, frameRate) {
        var screenShareConstraints = this.getVendorSpecificConstraints(constraints, resolution, frameRate);

        if (screenShareConstraints.screen) {
            screenShareConstraints.video = screenShareConstraints.screen;
            delete screenShareConstraints.screen;
        }

        if (screenShareConstraints.screenAudio) {
            screenShareConstraints.audio = screenShareConstraints.screenAudio;
            delete screenShareConstraints.screenAudio;
        }

        var chromeVideoSource = _.get(screenShareConstraints, ['video', 'mandatory', 'mediaSource']);
        var chromeAudioSource = _.get(screenShareConstraints, ['audio', 'mandatory', 'mediaSource']);
        var chromeVideoSourceId = _.get(screenShareConstraints, ['video', 'mandatory', 'mediaSourceId']);
        var chromeAudioSourceId = _.get(screenShareConstraints, ['audio', 'mandatory', 'mediaSourceId']);

        if (chromeVideoSource || chromeVideoSourceId) {
            _.set(screenShareConstraints, ['video', 'mandatory', 'chromeMediaSource'], chromeVideoSource);
            _.set(screenShareConstraints, ['video', 'mandatory', 'chromeMediaSourceId'], chromeVideoSourceId);
            delete screenShareConstraints.video.mandatory.mediaSource;
            delete screenShareConstraints.video.mandatory.mediaSourceId;
        }

        if (chromeAudioSource || chromeAudioSourceId) {
            _.set(screenShareConstraints, ['audio', 'mandatory', 'chromeMediaSource'], chromeAudioSource);
            _.set(screenShareConstraints, ['audio', 'mandatory', 'chromeMediaSourceId'], chromeAudioSourceId);
            delete screenShareConstraints.audio.mandatory.mediaSource;
            delete screenShareConstraints.audio.mandatory.mediaSourceId;
        }

        return screenShareConstraints;
    }

    function getConstraintNameFromError(error) {
        if (error.constraintName) {
            return error.constraintName;
        }

        if (error.constraint) {
            return error.constraint;
        }

        return '';
    }

    return UserMediaResolver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var maximumBitRateDefault = 3; // 3 x target bitrate

    function BitRateMonitor(name, monitor, getLimit) {
        assert.isStringNotEmpty(name, 'name');
        assert.isObject(monitor, 'monitor');
        assert.isFunction(getLimit, 'getLimit');

        this._name = name;
        this._monitor = monitor;
        this._getLimit = getLimit || _.noop;
    }

    BitRateMonitor.prototype.addThreshold = function(threshold, callback) {
        var thresholds = getThresholdList(threshold);
        var lastThresholdIndex = null;
        var that = this;

        return that._monitor.on('calculatedmetrics', function(metrics) {
            var limit = that._getLimit();
            var totalBitRate = metrics.videoBitRate + metrics.audioBitRate;
            var currentClosestThresholdIndex = getClosestThresholdIndexToButNotBelow(thresholds, totalBitRate / limit);
            var currentRatioThreshold = _.get(thresholds, [currentClosestThresholdIndex]);
            var currentBitRateThreshold = currentRatioThreshold * limit;
            var lastRatioThreshold = _.get(thresholds, [lastThresholdIndex], 1);
            var lastBitRateThreshold = lastRatioThreshold * limit;

            if (limit === 0) {
                return;
            }

            if (lastThresholdIndex === null) {
                return lastThresholdIndex = currentClosestThresholdIndex;
            }

            if (currentClosestThresholdIndex === lastThresholdIndex) {
                return;
            }

            if (currentClosestThresholdIndex < lastThresholdIndex) {
                callback({
                    isIncreasing: false,
                    bitRate: totalBitRate,
                    currentThreshold: currentBitRateThreshold,
                    targetBitRate: limit,
                    index: currentClosestThresholdIndex,
                    lastIndex: lastThresholdIndex,
                    message: that._name + ' bit rate is below ' + currentRatioThreshold + ' * ' + limit + ' threshold of ' + currentBitRateThreshold + ' with a bit rate of ' + totalBitRate
                });
            } else if (currentClosestThresholdIndex > lastThresholdIndex) {
                callback({
                    isIncreasing: true,
                    bitRate: totalBitRate,
                    currentThreshold: lastBitRateThreshold,
                    targetBitRate: limit,
                    index: currentClosestThresholdIndex,
                    lastIndex: lastThresholdIndex,
                    message: that._name + ' bit rate is above ' + lastRatioThreshold + ' * ' + limit + ' threshold of ' + lastBitRateThreshold + ' with a bit rate of ' + totalBitRate
                });
            }

            lastThresholdIndex = currentClosestThresholdIndex;
        });
    };

    function getClosestThresholdIndexToButNotBelow(thresholds, ratio) {
        return _.reduce(thresholds, function(closestIndex, threshold, index) {
            if (closestIndex === null && threshold >= ratio) {
                return index;
            }

            if (threshold < thresholds[closestIndex] && threshold >= ratio) {
                return index;
            }

            return closestIndex;
        }, null);
    }

    function getThresholdList(threshold) {
        var thresholds = [];

        if (_.isArray(threshold)) {
            _.forEach(threshold, function(value) {
                assert.isNumber(value, 'threshold');
            });

            thresholds = threshold.sort();
        } else if (_.isObject(threshold)) {
            assert.isNumber(threshold.levels, 'threshold.levels');

            for (var i = 0; i < threshold.levels; i++) {
                thresholds.push(i / threshold.levels);
            }
        } else {
            assert.isNumber(threshold, 'threshold');

            thresholds.push(threshold);
        }

        thresholds.push(maximumBitRateDefault); // Upper bound

        return thresholds;
    }

    return BitRateMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(2),
    __webpack_require__(11),
    __webpack_require__(39),
    __webpack_require__(38),
    __webpack_require__(37),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, rtc, phenixWebPlayer, ShakaRenderer, PhenixPlayerRenderer, FlashRenderer, streamEnums) {
    'use strict';

    function PhenixLiveStream(type, streamId, uri, streamTelemetry, options, shaka, logger) {
        this._type = type;
        this._streamId = streamId;
        this._uri = uri;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._shaka = shaka;
        this._logger = logger;
        this._renderers = [];
        this._dimensionsChangedMonitor = null;
        this._namedEvents = new event.NamedEvents();
    }

    PhenixLiveStream.prototype.on = function(name, callback) {
        this._namedEvents.listen(name, callback);
    };

    PhenixLiveStream.prototype.createRenderer = function() {
        var renderer = null;

        switch (this._type) {
        case streamEnums.types.dash.name:
            if (this._shaka) {
                renderer = new ShakaRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._shaka, this._logger);
            } else {
                renderer = new PhenixPlayerRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._logger);
            }

            break;
        case streamEnums.types.hls.name:
            renderer = new PhenixPlayerRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._logger);

            break;
        case streamEnums.types.rtmp.name:
            renderer = new FlashRenderer(this._streamId, this._uri, this._streamTelemetry, this._options, this._logger);

            break;
        default:
            throw new Error('Unsupported Live stream Type ' + this._type);
        }

        var that = this;

        renderer.on(streamEnums.rendererEvents.error.name, function(type, error) {
            that._namedEvents.fire(streamEnums.streamEvents.playerError.name, [type, error]);
        });
        renderer.on(streamEnums.rendererEvents.ended.name, function(reason) {
            that._renderers = _.filter(that._renderers, function(storedRenderer) {
                return storedRenderer !== renderer;
            });

            if (that._renderers.length === 0) {
                that._streamTelemetry.stop();
                that._namedEvents.fire(streamEnums.streamEvents.playerEnded.name, [reason]);
            }
        });

        this._renderers.push(renderer);

        return renderer;
    };

    PhenixLiveStream.prototype.select = function select(trackSelectCallback) { // eslint-disable-line no-unused-vars
        this._logger.warn('[%s] selection of tracks not supported for [%s] live streams', this._streamId, this._type);

        return this;
    };

    PhenixLiveStream.prototype.setStreamEndedCallback = function setStreamEndedCallback(callback) {
        assert.isFunction(callback, 'callback');

        this.streamEndedCallback = callback;
    };

    PhenixLiveStream.prototype.setStreamErrorCallback = function setStreamErrorCallback(callback) {
        assert.isFunction(callback, 'callback');

        this.streamErrorCallback = callback;
    };

    PhenixLiveStream.prototype.stop = function stop(reason) {
        if (!this.isActive()) {
            return;
        }

        this._logger.info('[%s] stop [live] media stream with reason [%s]', this._streamId, reason);

        this._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);

        this._isStopped = true;
    };

    PhenixLiveStream.prototype.monitor = function monitor(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
    };

    PhenixLiveStream.prototype.getMonitor = function getMonitor() {
        return null;
    };

    PhenixLiveStream.prototype.addBitRateThreshold = function addBitRateThreshold(threshold, callback) {
        assert.isFunction(callback, 'callback');

        return;
    };

    PhenixLiveStream.prototype.getStream = function getStream() {
        this._logger.debug('[%s] stream not available for [%s] live streams', this._streamId, this._type);

        return null;
    };

    PhenixLiveStream.prototype.isActive = function isActive() {
        return !this._isStopped;
    };

    PhenixLiveStream.prototype.getStreamId = function getStreamId() {
        return this._streamId;
    };

    PhenixLiveStream.prototype.getStats = function getStats() {
        this._logger.debug('[%s] stats not available for [%s] live streams', this._streamId, this._type);

        return null;
    };

    PhenixLiveStream.prototype.getRenderer = function getRenderer() {
        return _.get(this._renderers, [0], null);
    };

    PhenixLiveStream.canPlaybackType = function canPlaybackType(type) {
        switch (type) {
        case streamEnums.types.dash.name:
            return phenixWebPlayer.WebPlayer.deviceSupportsDashPlayback;
        case streamEnums.types.hls.name:
            return phenixWebPlayer.WebPlayer.deviceSupportsHlsPlayback;
        case streamEnums.types.rtmp.name:
            return FlashRenderer.isSupported();
        default:
            return false;
        }
    };

    return PhenixLiveStream;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    var h264ProfileIdRegex = /profile-level-id=[^;\n]*/;
    var vp8Regex = /vp8/i;
    var vp9Regex = /vp9/i;
    var h264Regex = /h264/i;
    var h265Regex = /h265/i;

    function sdpUtil() {

    }

    sdpUtil.prototype.getH264ProfileIds = function getH264ProfileIds(offerSdp) {
        assert.isStringNotEmpty(offerSdp, 'offerSdp');

        var h264ProfileIds = [];
        var h264ProfileIdMatch = offerSdp.match(h264ProfileIdRegex);
        var restOfOffer = offerSdp;

        while (h264ProfileIdMatch) {
            var h264ProfileId = _.get(h264ProfileIdMatch, '0', '');

            h264ProfileIds.push(h264ProfileId.split('=')[1]);

            restOfOffer = restOfOffer.substring(h264ProfileIdMatch.index + h264ProfileId.length, offerSdp.length);
            h264ProfileIdMatch = restOfOffer.match(h264ProfileIdRegex);
        }

        return h264ProfileIds;
    };

    sdpUtil.prototype.replaceH264ProfileId = function replaceH264ProfileId(offerSdp, profileIdToReplace, newProfileId) {
        assert.isStringNotEmpty(offerSdp, 'offerSdp');
        assert.isStringNotEmpty(newProfileId, 'newProfileId');

        var profileIds = this.getH264ProfileIds(offerSdp);

        if (!_.includes(profileIds, profileIdToReplace)) {
            return offerSdp;
        }

        return offerSdp.replace('profile-level-id=' + profileIdToReplace, 'profile-level-id=' + newProfileId);
    };

    sdpUtil.prototype.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel = function(profileIds, replaceProfileId) {
        if (_.includes(profileIds, replaceProfileId)) {
            return replaceProfileId;
        }

        var nextProfileId = _.reduce(profileIds, function(selectedProfileId, profileId) {
            var selectedProfile = parseInt(selectedProfileId.substring(0, 2), 16);
            var selectedLevel = parseInt(selectedProfileId.substring(4, 6), 16);
            var profile = parseInt(profileId.substring(0, 2), 16);
            var level = parseInt(profileId.substring(4, 6), 16);

            // We prefer the profile that we are replacing
            if (selectedProfile !== profile) {
                return selectedProfileId;
            }

            return selectedLevel >= level ? selectedProfileId : profileId;
        }, replaceProfileId);

        return nextProfileId === replaceProfileId ? null : nextProfileId;
    };

    sdpUtil.prototype.getH264ProfileIdWithSameOrHigherProfileAndEqualToOrHigherLevel = function(profileIds, replaceProfileId) {
        var matchingProfile = this.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel(profileIds, replaceProfileId);

        if (matchingProfile) {
            return matchingProfile;
        }

        var nextProfileId = _.reduce(profileIds, function(selectedProfileId, profileId) {
            var selectedProfile = parseInt(selectedProfileId.substring(0, 2), 16);
            var selectedLevel = parseInt(selectedProfileId.substring(4, 6), 16);
            var profile = parseInt(profileId.substring(0, 2), 16);
            var level = parseInt(profileId.substring(4, 6), 16);

            // We prefer the profile that we are replacing
            if (selectedProfile < profile) {
                return profileId;
            } else if (profile < selectedProfile) {
                return selectedProfileId;
            }

            return selectedLevel > level ? selectedProfileId : profileId;
        }, replaceProfileId);

        return nextProfileId === replaceProfileId ? null : nextProfileId;
    };

    sdpUtil.prototype.getSupportedCodecs = function getSupportedCodecs(offerSdp) {
        assert.isStringNotEmpty(offerSdp, 'offerSdp');

        var codecs = [];

        if (vp8Regex.test(offerSdp)) {
            codecs.push('VP8');
        }

        if (vp9Regex.test(offerSdp)) {
            codecs.push('VP9');
        }

        if (h264Regex.test(offerSdp)) {
            codecs.push('H264');
        }

        if (h265Regex.test(offerSdp)) {
            codecs.push('H265');
        }

        return codecs;
    };

    sdpUtil.prototype.hasMediaSectionsInLocalSdp = function hasMediaSectionsInLocalSdp(peerConnection) {
        var indexOfSection = this.findInSdpSections(peerConnection, function(section) {
            return _.startsWith(section, 'video') || _.startsWith(section, 'audio');
        });

        return _.isNumber(indexOfSection);
    };

    sdpUtil.prototype.hasActiveAudio = function hasActiveAudio(peerConnection) {
        var indexOfActiveVideo = this.findInSdpSections(peerConnection, function(section, index, remoteSections) {
            if (_.startsWith(section, 'audio')) {
                return !_.includes(section, 'a=inactive') && !_.includes(remoteSections[index], 'a=inactive');
            }

            return false;
        });

        return _.isNumber(indexOfActiveVideo);
    };

    sdpUtil.prototype.hasActiveVideo = function hasActiveVideo(peerConnection) {
        var indexOfActiveVideo = this.findInSdpSections(peerConnection, function(section, index, remoteSections) {
            if (_.startsWith(section, 'video')) {
                return !_.includes(section, 'a=inactive') && !_.includes(remoteSections[index], 'a=inactive');
            }

            return false;
        });

        return _.isNumber(indexOfActiveVideo);
    };

    sdpUtil.prototype.findInSdpSections = function findInSdpSections(peerConnection, callback) {
        var localSections = this.getLocalSdp(peerConnection).split('m=');
        var remoteSections = this.getRemoteSdp(peerConnection).split('m=');

        if (localSections.length !== remoteSections.length) {
            return false;
        }

        return _.findIndex(localSections, function(section, index) {
            return callback(section, index, remoteSections);
        });
    };

    sdpUtil.prototype.getNumberOfActiveSections = function getNumberOfActiveSections(peerConnection) {
        var sdp = this.getLocalSdp(peerConnection) || this.getRemoteSdp(peerConnection);
        var sections = sdp.split('m=');

        return _.filter(sections, function(section) {
            return !_.includes(section, 'a=inactive') && (_.startsWith(section, 'audio') || _.startsWith(section, 'video'));
        }).length;
    };

    sdpUtil.prototype.getLocalSdp = function getLocalSdp(peerConnection) {
        return _.get(peerConnection, ['localDescription', 'sdp'], '');
    };

    sdpUtil.prototype.getRemoteSdp = function getLocalSdp(peerConnection) {
        return _.get(peerConnection, ['remoteDescription', 'sdp'], '');
    };

    return new sdpUtil();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(2),
    __webpack_require__(22),
    __webpack_require__(14)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, phenixRTC, sdpUtil, PeerConnection) {
    'use strict';

    var defaultMonitoringInterval = 4000;
    var defaultConditionMonitoringInterval = 1500;
    var defaultFrameRateThreshold = 2;
    var defaultAudioBitRateThreshold = 5000;
    var defaultVideoBitRateThreshold = 6000;
    var defaultConditionCountForNotificationThreshold = 3;
    var defaultTimeoutForNoData = 5000;
    var minEdgeMonitoringInterval = 6000;
    var minEdgeConditionCountForNotification = 2;

    function PeerConnectionMonitor(name, peerConnection, logger) {
        assert.isString(name, 'name');
        assert.isObject(peerConnection, 'peerConnection');
        assert.isObject(logger, 'logger');

        this._name = name;
        this._peerConnection = peerConnection;
        this._logger = logger;
        this._lastStats = {};
    }

    PeerConnectionMonitor.prototype.start = function(options, activeCallback, monitorCallback) {
        assert.isObject(options, 'options');
        assert.isFunction(activeCallback, 'activeCallback');
        assert.isFunction(monitorCallback, 'monitorCallback');

        if (options.direction !== 'inbound' && options.direction !== 'outbound') {
            throw new Error('Invalid monitoring direction');
        }

        this._frameRateFailureThreshold = options.frameRateThreshold || defaultFrameRateThreshold;
        this._videoBitRateFailureThreshold = options.videoBitRateThreshold || defaultVideoBitRateThreshold;
        this._audioBitRateFailureThreshold = options.audioBitRateThreshold || defaultAudioBitRateThreshold;
        this._conditionCountForNotificationThreshold = options.conditionCountForNotificationThreshold || defaultConditionCountForNotificationThreshold;
        this._monitoringInterval = options.monitoringInterval || defaultMonitoringInterval;
        this._conditionMonitoringInterval = options.monitoringInterval || defaultConditionMonitoringInterval;
        this._monitorFrameRate = options.hasOwnProperty('monitorFrameRate') ? options.monitorFrameRate : true;
        this._monitorBitRate = options.hasOwnProperty('monitorBitRate') ? options.monitorBitRate : true;
        this._monitorState = options.hasOwnProperty('monitorState') ? options.monitorState : true;
        this._pausedTracks = [];
        this._calculatedMetricsEvent = new event.Event();

        if (phenixRTC.browser === 'Edge') {
            var conditionMaxDuration = this._conditionMonitoringInterval * this._conditionCountForNotificationThreshold;

            this._monitoringInterval = Math.max(this._monitoringInterval, minEdgeMonitoringInterval);
            this._conditionMonitoringInterval = Math.max(this._conditionMonitoringInterval, minEdgeMonitoringInterval);
            this._conditionCountForNotificationThreshold = Math.max(Math.ceil(conditionMaxDuration / this._monitoringInterval), minEdgeConditionCountForNotification);

            this._logger.info('Using modified options for optimal monitoring of PeerConnection on [Edge]. Monitor Interval [%s], Condition Monitor Interval [%s], Condition Count For Notification [%s]',
                this._monitoringInterval, this._conditionMonitoringInterval, this._conditionCountForNotificationThreshold);
        }

        return monitorPeerConnection.call(this, this._name, this._peerConnection, options, activeCallback, monitorCallback);
    };

    PeerConnectionMonitor.prototype.setMonitorTrackState = function(track, state) {
        assert.isObject(track, 'track');
        assert.isBoolean(state, 'state');

        var peerConnectionTracks = getAllTracks.call(this, this._peerConnection);
        var foundTrack = !!_.find(peerConnectionTracks, function(pcTrack) {
            return pcTrack.id === track.id;
        });

        if (!foundTrack) {
            return this._logger.warn('[%s] Unable to find track [%s] [%s] in peer connection', this._name, track.kind, track.id);
        }

        if (!state) {
            this._logger.info('[%s] Pausing monitoring of track [%s] [%s]', this._name, track.kind, track.id);

            return this._pausedTracks.push(track);
        }

        var pausedTrackLength = this._pausedTracks.length;

        this._pausedTracks = _.filter(this._pausedTracks, function(pausedTrack) {
            return pausedTrack.id !== track.id;
        });

        if (pausedTrackLength !== this._pausedTracks.length) {
            this._logger.info('[%s] Starting monitoring of track [%s] [%s] after it was paused', this._name, track.kind, track.id);
        }
    };

    PeerConnectionMonitor.prototype.on = function(eventName, listener) {
        assert.isStringNotEmpty(eventName, 'eventName');
        assert.isFunction(listener, 'listener');

        switch (eventName) {
        case 'calculatedmetrics':
            return this._calculatedMetricsEvent.listen(listener);
        default:
            throw new Error('Unsupported event ' + eventName);
        }
    };

    PeerConnectionMonitor.prototype.toString = function() {
        return 'PeerConnectionMonitor[' + this._name + ']';
    };

    function monitorPeerConnection(name, peerConnection, options, activeCallback, monitorCallback) {
        var that = this;
        var conditionCount = 0;
        var reasons = [];
        var frameRate = undefined;
        var videoBitRate = undefined;
        var audioBitRate = undefined;
        var checkForNoDataTimeout = null;

        function nextCheck(checkForNoData) {
            var selector = null;

            getStats.call(that, peerConnection, options, selector, activeCallback, function successCallback(report) {
                var hasFrameRate = false;
                var hasVideoBitRate = false;
                var hasAudioBitRate = false;

                if (!activeCallback()) {
                    return that._logger.info('[%s] Finished monitoring of peer connection', name);
                }

                function eachStats(stats) {
                    var additionalMessage = '';

                    if (options.direction === 'outbound' && stats.direction === 'upload') {
                        switch (stats.mediaType) {
                        case 'video':
                            if (stats.avgEncode) {
                                additionalMessage += ' with average encoding time [' + stats.avgEncode + '] ms';
                            }

                            if (stats.cpuLimitedResolution) {
                                additionalMessage += ' (CPU limited=[' + stats.cpuLimitedResolution + '])';
                            }

                            that._logger.debug('[%s] [%s] [%s] [%s] with bitrate [%s], droppedFrames [%s] and frame rate [%s] and RTT [%s]' + additionalMessage,
                                name, options.direction, stats.mediaType, stats.ssrc, stats.bitrateMean, stats.droppedFrames, stats.framerateMean, stats.rtt);

                            frameRate = stats.framerateMean;
                            videoBitRate = stats.uploadRate ? stats.uploadRate * 1000 : stats.uploadRate;
                            hasFrameRate = true;
                            hasVideoBitRate = true;

                            if (phenixRTC.browser === 'Edge') {
                                hasFrameRate = false;
                            }

                            break;
                        case 'audio':
                            that._logger.debug('[%s] [%s] [%s] [%s] and RTT [%s] and jitter [%s] and audio input level [%s]',
                                name, options.direction, stats.mediaType, stats.ssrc, stats.rtt, stats.jitter, stats.audioInputLevel);
                            hasAudioBitRate = true;
                            audioBitRate = stats.uploadRate ? stats.uploadRate * 1000 : stats.uploadRate;

                            break;
                        default:
                            break;
                        }
                    }

                    if (options.direction === 'inbound' && stats.direction === 'download') {
                        switch (stats.mediaType) {
                        case 'video':
                            if (stats.currentDelay) {
                                additionalMessage += ' with current delay [' + stats.currentDelay + '] ms';
                            }

                            if (stats.targetDelay) {
                                additionalMessage += ' and target delay [' + stats.targetDelay + '] ms';
                            }

                            that._logger.debug('[%s] [%s] [%s] [%s] with framerate [%s]' + additionalMessage,
                                name, options.direction, stats.mediaType, stats.ssrc, stats.framerateMean);

                            // Inbound frame rate is not calculated correctly
                            hasFrameRate = true;
                            frameRate = stats.framerateMean || 0;
                            hasVideoBitRate = true;
                            videoBitRate = stats.downloadRate ? stats.downloadRate * 1000 : stats.downloadRate;

                            if (phenixRTC.browser === 'Edge') {
                                hasFrameRate = false;
                            }

                            break;
                        case 'audio':
                            if (stats.jitterBuffer) {
                                additionalMessage += ' with jitter buffer [' + stats.jitterBuffer + '] ms';
                            }

                            that._logger.debug('[%s] [%s] [%s] [%s] with jitter [%s]  with output level [%s]' + additionalMessage,
                                name, options.direction, stats.mediaType, stats.ssrc, stats.jitter, stats.audioOutputLevel);
                            hasAudioBitRate = true;
                            audioBitRate = stats.downloadRate ? stats.downloadRate * 1000 : stats.downloadRate;

                            break;
                        default:
                            break;
                        }
                    }
                }

                if (!report) {
                    throw new Error('Report must be a valid PeerConnection.getStats Report');
                }

                _.forEach(report, eachStats);

                if (_.isUndefined(audioBitRate) && _.isUndefined(videoBitRate)) {
                    return setTimeout(nextCheck, that._monitoringInterval); // First measurement
                }

                var hasActiveAudio = sdpUtil.hasActiveAudio(peerConnection);
                var hasActiveVideo = sdpUtil.hasActiveVideo(peerConnection);

                if (hasVideoBitRate && videoBitRate === 0 || hasAudioBitRate && audioBitRate === 0 || hasFrameRate && frameRate === 0) {
                    hasVideoBitRate = hasVideoBitRate && hasActiveVideo;
                    hasAudioBitRate = hasAudioBitRate && hasActiveAudio;
                    hasFrameRate = hasFrameRate && hasActiveVideo;
                }

                if (hasAudioBitRate || hasVideoBitRate || hasFrameRate) {
                    that._logger.debug('[%s] [%s] Current bit rate is [%s] bps for audio and [%s] bps for video with [%s] FPS',
                        name, options.direction, Math.ceil(audioBitRate || 0), Math.ceil(videoBitRate || 0), frameRate || '?');

                    if (_.values(that._lastStats).length > 0) {
                        that._calculatedMetricsEvent.fire([{
                            videoBitRate: videoBitRate,
                            audioBitRate: audioBitRate,
                            frameRate: frameRate
                        }]);
                    }
                }

                if (that._monitorState
                    && (peerConnection.connectionState === 'closed'
                    || peerConnection.connectionState === 'failed'
                    || peerConnection.iceConnectionState === 'failed')) {
                    var active = hasActiveAudio && hasActiveVideo;
                    var tracks = getAllTracks.call(that, peerConnection);

                    if (!active && sdpUtil.hasMediaSectionsInLocalSdp(peerConnection)) {
                        that._logger.info('[%s] [%s] Finished monitoring of peer connection with [%s] inactive tracks', name, options.direction, tracks.length);

                        return;
                    }

                    conditionCount++;
                    reasons.push('connection');
                } else if (that._monitorFrameRate && hasFrameRate && frameRate <= that._frameRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'video')) {
                    conditionCount++;
                    reasons.push('frameRate');
                } else if (that._monitorBitRate && hasAudioBitRate && audioBitRate <= that._audioBitRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'audio')) {
                    conditionCount++;
                    reasons.push('audioBitRate');
                } else if (that._monitorBitRate && hasVideoBitRate && videoBitRate <= that._videoBitRateFailureThreshold && !areAllTracksOfTypePaused.call(that, 'video')) {
                    conditionCount++;
                    reasons.push('videoBitRate');
                } else {
                    conditionCount = 0;
                    reasons = [];
                }

                var isNoData = (videoBitRate === 0 || !hasVideoBitRate) && (audioBitRate === 0 || !hasAudioBitRate) && !areAllTracksPaused.call(that);

                if (isNoData && !checkForNoDataTimeout) {
                    checkForNoDataTimeout = setTimeout(_.bind(nextCheck, this, true), defaultTimeoutForNoData);
                } else if (!isNoData) {
                    clearTimeout(checkForNoDataTimeout);

                    checkForNoDataTimeout = null;
                }

                var isStreamDead = checkForNoData && isNoData && checkForNoDataTimeout;
                var acknowledgeFailure = function acknowledgeFailure() {
                    that._logger.info('[%s] [%s] Failure has been acknowledged', name, options.direction);

                    conditionCount = Number.MIN_VALUE;
                    reasons = [];

                    setTimeout(nextCheck, that._monitoringInterval);
                };

                if (conditionCount >= that._conditionCountForNotificationThreshold || isStreamDead) {
                    var defaultFailureMessage = '[' + name + '] [' + options.direction + '] Failure detected with frame rate [' + frameRate + '] FPS, audio bit rate [' + audioBitRate + '] bps, video bit rate [' + videoBitRate + '] bps, connection state [' + peerConnection.connectionState + '], and ice connection state [' + peerConnection.iceConnectionState + ']';
                    var streamDeadFailureMessage = '[' + name + '] [' + options.direction + '] Failure detected with 0 bps audio and video for [' + (defaultTimeoutForNoData / 1000) + '] seconds';
                    var failureMessage = isStreamDead ? streamDeadFailureMessage : defaultFailureMessage;
                    var monitorEvent = {
                        type: 'condition',
                        reasons: reasons,
                        message: failureMessage,
                        report: report,
                        frameRate: frameRate,
                        videoBitRate: videoBitRate,
                        audioBitRate: audioBitRate,
                        acknowledgeFailure: acknowledgeFailure
                    };

                    if (!monitorCallback(null, monitorEvent)) {
                        that._logger.error(failureMessage + ': [%s]', report);
                    } else {
                        acknowledgeFailure();
                    }
                } else {
                    setTimeout(nextCheck, conditionCount > 0 ? that._conditionMonitoringInterval : that._monitoringInterval);
                }
            }, function errorCallback(error) {
                monitorCallback(error, {
                    type: 'error',
                    message: 'Unable to get Connection statistics. Connection may have failed.'
                });
            });
        }

        setTimeout(nextCheck, that._monitoringInterval);
    }

    function getStats(peerConnection, options, selector, activeCallback, successCallback, errorCallback) {
        if (!activeCallback()) {
            return this._logger.info('[%s] Finished monitoring of peer connection', this._name);
        }

        var that = this;

        phenixRTC.getStats(peerConnection, null, function(response) {
            var report = PeerConnection.convertPeerConnectionStats(response, that._lastStats);

            report = _.filter(report, function(stats) {
                return options.direction === 'inbound' && stats.direction === 'download' || options.direction === 'outbound' && stats.direction === 'upload';
            });

            successCallback(report);
        }, function(error) {
            errorCallback(error);
        });
    }

    function getAllTracks(peerConnection) {
        var localTracks = getLocalTracks(peerConnection);
        var remoteTracks = getRemoteTracks(peerConnection);

        if (localTracks.length !== 0 && remoteTracks.length !== 0) {
            this._logger.error('Invalid State. PeerConnection contains [%s] local and [%s] remote tracks.', localTracks.length, remoteTracks.length);

            throw new Error('Invalid State. PeerConnection contains both local and remote streams.');
        } else if (localTracks.length !== 0) {
            return localTracks;
        } else if (remoteTracks.length !== 0) {
            return remoteTracks;
        }

        return [];
    }

    function getLocalTracks(peerConnection) {
        var tracks = peerConnection.getSenders ? _.map(peerConnection.getSenders(), function(receiver) {
            return receiver.track;
        }) : [];

        tracks = _.filter(tracks, function(track) {
            return !_.isNullOrUndefined(track);
        });

        if (tracks.length === 0) {
            var streams = peerConnection.getLocalStreams ? peerConnection.getLocalStreams() : [];

            return _.reduce(streams, function(tracks, stream) {
                return tracks.concat(stream.getTracks());
            }, []);
        }

        return tracks;
    }

    function getRemoteTracks(peerConnection) {
        var tracks = peerConnection.getReceivers ? _.map(peerConnection.getReceivers(), function(sender) {
            return sender.track;
        }) : [];

        tracks = _.filter(tracks, function(track) {
            return !_.isNullOrUndefined(track);
        });

        if (tracks.length === 0) {
            var streams = peerConnection.getRemoteStreams ? peerConnection.getRemoteStreams() : [];

            return _.reduce(streams, function(tracks, stream) {
                return tracks.concat(stream.getTracks());
            }, []);
        }

        return tracks;
    }

    function areAllTracksPaused() {
        var that = this;

        return _.reduce(getAllTracks.call(this, this._peerConnection), function(areAllPaused, track) {
            if (!areAllPaused) {
                return areAllPaused;
            }

            var isTrackPaused = !!_.find(that._pausedTracks, function(pcTrack) {
                return pcTrack.id === track.id;
            });

            return !track.enabled || isTrackPaused;
        }, true);
    }

    function areAllTracksOfTypePaused(kind) {
        var peerConnectionTracks = getAllTracks.call(this, this._peerConnection);
        var pcTracksOfType = _.filter(peerConnectionTracks, function(track) {
            return track.kind === kind;
        });
        var pausedTracksOfType = _.filter(this._pausedTracks, function(track) {
            return track.kind === kind;
        });

        return _.reduce(pcTracksOfType, function(areAllPaused, track) {
            if (!areAllPaused) {
                return areAllPaused;
            }

            var isTrackPaused = !!_.find(pausedTracksOfType, function(pcTrack) {
                return pcTrack.id === track.id;
            });

            return !track.enabled || isTrackPaused;
        }, true);
    }

    return PeerConnectionMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var telemetryProto = {
        "package": "telemetry",
        "messages": [
            {
                "name": "LogData",
                "fields": [
                    {
                        "rule": "required",
                        "type": "LogLevel",
                        "name": "level",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "timestamp",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "category",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "message",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "source",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "fullQualifiedName",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "userId",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "environment",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "version",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "float",
                        "name": "runtime",
                        "id": 10
                    }
                ]
            },
            {
                "name": "StoreLogRecords",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "LogData",
                        "name": "records",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StoreLogRecordsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "storedRecords",
                        "id": 2
                    }
                ]
            },
            {
                "name": "MetricValue",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "string",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "float",
                        "name": "float",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "uint64",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "int64",
                        "name": "int64",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "bool",
                        "name": "boolean",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "timestamp",
                        "id": 6
                    }
                ]
            },
            {
                "name": "MetricData",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "timestamp",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "source",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "resource",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "kind",
                        "id": 6
                    },
                    {
                        "rule": "required",
                        "type": "Metric",
                        "name": "metric",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "MetricValue",
                        "name": "value",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "MetricValue",
                        "name": "previousValue",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "elapsed",
                        "id": 10
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "fullQualifiedName",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "environment",
                        "id": 12
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "version",
                        "id": 13
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "tool",
                        "id": 14
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "toolVersion",
                        "id": 15
                    },
                    {
                        "rule": "required",
                        "type": "float",
                        "name": "runtime",
                        "id": 16
                    }
                ]
            },
            {
                "name": "SubmitMetricRecords",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "MetricData",
                        "name": "records",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SubmitMetricRecordsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "storedRecords",
                        "id": 2
                    }
                ]
            }
        ],
        "enums": [
            {
                "name": "LogLevel",
                "values": [
                    {
                        "name": "Trace",
                        "id": 0
                    },
                    {
                        "name": "Debug",
                        "id": 1
                    },
                    {
                        "name": "Info",
                        "id": 2
                    },
                    {
                        "name": "Warn",
                        "id": 3
                    },
                    {
                        "name": "Error",
                        "id": 4
                    },
                    {
                        "name": "Fatal",
                        "id": 5
                    }
                ]
            },
            {
                "name": "Metric",
                "values": [
                    {
                        "name": "RoundTripTime",
                        "id": 0
                    },
                    {
                        "name": "DownlinkThroughputCapacity",
                        "id": 26
                    },
                    {
                        "name": "Initialized",
                        "id": 1
                    },
                    {
                        "name": "Provisioned",
                        "id": 2
                    },
                    {
                        "name": "SetupCompleted",
                        "id": 3
                    },
                    {
                        "name": "Offset",
                        "id": 4
                    },
                    {
                        "name": "TimeToFirstFrame",
                        "id": 5
                    },
                    {
                        "name": "Playing",
                        "id": 6
                    },
                    {
                        "name": "Stalled",
                        "id": 7
                    },
                    {
                        "name": "Buffering",
                        "id": 8
                    },
                    {
                        "name": "Seeking",
                        "id": 22
                    },
                    {
                        "name": "Stopped",
                        "id": 9
                    },
                    {
                        "name": "BitRateAdaptation",
                        "id": 10
                    },
                    {
                        "name": "ResolutionChanged",
                        "id": 11
                    },
                    {
                        "name": "DisplayResolutionChanged",
                        "id": 23
                    },
                    {
                        "name": "VideoBitRate",
                        "id": 28
                    },
                    {
                        "name": "AudioBitRate",
                        "id": 29
                    },
                    {
                        "name": "FrameRateChanged",
                        "id": 12
                    },
                    {
                        "name": "FramesDropped",
                        "id": 13
                    },
                    {
                        "name": "PacketsLost",
                        "id": 14
                    },
                    {
                        "name": "PictureLost",
                        "id": 15
                    },
                    {
                        "name": "PlayoutDelayChanged",
                        "id": 16
                    },
                    {
                        "name": "CodecChanged",
                        "id": 17
                    },
                    {
                        "name": "PlayerEvent",
                        "id": 21
                    },
                    {
                        "name": "MetricDropped",
                        "id": 18
                    },
                    {
                        "name": "NetworkOffline",
                        "id": 19
                    },
                    {
                        "name": "NetworkOnline",
                        "id": 20
                    },
                    {
                        "name": "NetworkType",
                        "id": 27
                    },
                    {
                        "name": "ApplicationForeground",
                        "id": 24
                    },
                    {
                        "name": "ApplicationBackground",
                        "id": 25
                    }
                ]
            }
        ]
    };

    return telemetryProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(67),
    __webpack_require__(65),
    __webpack_require__(64)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, Pbf, Schema, mqProto) {
    'use strict';

    function MQProtocol(protocols, apiVersion) {
        var that = this;

        this._schemas = {};

        this._schemas[mqProto.package] = new Schema(mqProto);

        _.forEach(protocols, function(protocol) {
            that._schemas[protocol.package] = new Schema(protocol);
        });

        this._apiVersion = apiVersion || 3;
    }

    MQProtocol.prototype.getApiVersion = function() {
        return this._apiVersion;
    };

    MQProtocol.prototype.encode = function(type, data) {
        if (typeof type !== 'string') {
            throw new Error("'type' must be a string");
        }

        if (typeof data !== 'object') {
            throw new Error("'data' must be an object");
        }

        var typeQuery = type.split('.');
        var namespace = _.get(typeQuery, [0]);
        var subType = _.get(typeQuery, [1]);
        var schema = _.get(this._schemas, [namespace]);
        var message = new Pbf();

        schema.write(subType, data, message);

        return message.finish();
    };

    MQProtocol.prototype.decode = function(type, value) {
        if (typeof type !== 'string') {
            throw new Error("'type' must be a string");
        }

        var typeQuery = type.split('.');
        var namespace = _.get(typeQuery, [0]);
        var subType = _.get(typeQuery, [1]);
        var schema = _.get(this._schemas, [namespace]);
        var message = new Pbf(value);
        var decodedMessage = schema.read(subType, message);

        return decodedMessage;
    };

    return MQProtocol;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(25),
    __webpack_require__(63)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, disposable, MQProtocol, Base64) {
    'use strict';

    var clientRequestIdPrefix = 'C';
    var continuationStatus = 'continuation';
    var continuationPollInterval = 2000;
    var continuationTimeout = 300000;
    var defaultRequestTimeout = 18000;

    function MQService(logger, sendCallback, receiveCallback, protocols, apiVersion) {
        assert.isObject(logger, 'logger');
        assert.isFunction(sendCallback, 'sendCallback');
        assert.isFunction(receiveCallback, 'receiveCallback');

        this._logger = logger;
        this._mqProtocol = new MQProtocol(protocols, apiVersion);

        this._nextRequestId = 0;
        this._namedEvents = new event.NamedEvents();
        this._requests = {};
        this._responses = {};
        this._requestListeners = {};
        this._requestTimeouts = {};
        this._requestTimestamps = {};
        this._continuationTimeouts = {};

        this._receiveCallback = receiveCallback;
        this._sendCallback = sendCallback;

        receiveCallback(_.bind(onMessage, this));
    }

    MQService.prototype.onEvent = function(eventName, handler) {
        if (this._disposed) {
            return this._logger.warn('Proto already disposed of. Unable to listen for event');
        }

        assert.isStringNotEmpty(eventName, 'eventName');
        assert.isFunction(handler, 'handler');

        return this._namedEvents.listen(eventName, handler);
    };

    MQService.prototype.onRequest = function(requestName, handler) {
        if (this._disposed) {
            return this._logger.warn('Proto already disposed of. Unable to listen for request');
        }

        assert.isStringNotEmpty(requestName, 'requestName');
        assert.isFunction(handler, 'handler');

        if (this._requestListeners[requestName]) {
            this._logger.warn('May not set multiple handlers for the same request. Overriding existing handlers for request [%s]', requestName);
        }

        this._requestListeners[requestName] = handler;

        var that = this;

        return new disposable.Disposable(function() {
            that._requestListeners[requestName] = null;
        });
    };

    MQService.prototype.sendRequest = function sendRequest(type, message, callback, settings) {
        if (this._disposed) {
            this._logger.warn('Proto already disposed of. Unable to send request');

            return callback(null, {status: 'proto-disposed'});
        }

        settings = settings || {};

        assert.isStringNotEmpty(type, 'type');
        assert.isObject(message, 'message');
        assert.isObject(settings, 'settings');

        if (callback) {
            assert.isFunction(callback, 'callback');
        }

        if (settings.timeout) {
            assert.isNumber(settings.timeout, 'settings.timeout');
        }

        var requestId = clientRequestIdPrefix + (this._nextRequestId++).toString();
        var request = {
            requestId: requestId,
            type: type,
            payload: this._mqProtocol.encode(type, message),
            messageType: 'Request'
        };

        this._requests[requestId] = _.bind(handleResponseAndContinuations, this, requestId, type, message, settings.timeout, callback);

        return sendRequestWithTimeout.call(this, requestId, request, message, settings.timeout, callback);
    };

    MQService.prototype.sendResponse = function sendResponse(requestId, type, message, callback) {
        if (this._disposed) {
            this._logger.warn('Proto already disposed of. Unable to send response');

            return callback(null, {status: 'proto-disposed'});
        }

        assert.isStringNotEmpty(requestId, 'requestId');
        assert.isStringNotEmpty(type, 'type');
        assert.isObject(message, 'message');

        var start = this._responses[requestId];

        if (!start) {
            this._logger.error('Already responded to request [%s]', requestId);

            callback(new Error('no-response-handler'));
        }

        var response = {
            requestId: requestId,
            type: type,
            payload: this._mqProtocol.encode(type, message),
            messageType: 'Response',
            wallTime: [_.now() - start]
        };

        encodeAndSendMessage.call(this, response, message);

        delete this._responses[requestId];

        return callback(null, {status: 'ok'});
    };

    MQService.prototype.disposeOfRequests = function() {
        _.forOwn(this._requestTimeouts, function(timeout) {
            clearTimeout(timeout);
        });

        _.forOwn(this._continuationTimeouts, function(timeout) {
            clearTimeout(timeout);
        });

        this._requests = {};
        this._responses = {};
        this._requestListeners = {};
        this._requestTimeouts = {};
        this._requestTimestamps = {};
        this._continuationTimeouts = {};
    };

    MQService.prototype.dispose = function() {
        this._disposed = true;
        this._receiveCallback = null;
        this._sendCallback = null;

        this.disposeOfRequests();

        this._namedEvents.dispose();
    };

    MQService.prototype.getApiVersion = function getApiVersion() {
        return this._mqProtocol.getApiVersion();
    };

    MQService.prototype.toString = function() {
        return 'Proto[' + this._webSocket.toString() + ']';
    };

    function triggerEvent(eventName, args) {
        this._namedEvents.fire(eventName, args, this);
    }

    function onMessage(evt) {
        if (this._disposed) {
            return this._logger.warn('Proto already disposed of. Unable process message');
        }

        var message;
        var messageBody;
        var callback;

        try {
            message = this._mqProtocol.decode('mq.Message', Base64.toByteArray(evt.data));
            callback = this._requests[message.requestId];

            this._logger.info('>> [%s] [%s]', message.messageType, message.type);

            messageBody = this._mqProtocol.decode(message.type, message.payload);
        } catch (e) {
            this._logger.error(e);

            if (callback) {
                return callback(e);
            }

            throw e;
        }

        triggerReceivedEvent.call(this, message, messageBody, evt.data.length);

        switch (message.messageType) {
        case 'Response':
            if (messageBody.status !== continuationStatus) {
                delete this._requests[message.requestId];
            }

            clearTimeout(this._requestTimeouts[message.requestId]);

            delete this._requestTimeouts[message.requestId];

            if (!callback) {
                return;
            }

            if (message.type === 'mq.Error') {
                var error = messageBody;

                return callback(error, null);
            }

            return callback(null, messageBody);
        case 'Request':
            var sendResponse = _.bind(this.sendResponse, this, message.requestId, message.type + 'Response');
            var requestListener = this._requestListeners[message.type];

            this._responses[message.requestId] = _.now();

            if (requestListener) {
                requestListener(messageBody, sendResponse);
            } else {
                this._logger.info('Received request without a subscribed listener');
            }

            break;
        case 'Event':
            return triggerEvent.call(this, message.type, [messageBody]);
        default:
            return this._logger.warn('>> Unsupported message type [%s]', message.messageType);
        }
    }

    function handleResponseAndContinuations(requestId, type, message, timeout, callback, error, response) {
        if (response && response.status === continuationStatus) {
            if (!this._continuationTimeouts[requestId] && this._requests[requestId]) {
                this._continuationTimeouts[requestId] = listenForContinuationTimeout.call(this, requestId, callback);
            }

            return sendRequestWithContinuation.call(this, requestId, type, message, response, timeout, callback);
        }

        clearTimeout(this._continuationTimeouts[requestId]);

        delete this._continuationTimeouts[requestId];

        return callback(error, response);
    }

    function sendRequestWithContinuation(requestId, type, message, response, timeout, callback) {
        if (!response || (!response.continuationId && !response.routeKey)) {
            this._logger.warn('Received request for continuation without a continuationId or routeKey');

            return callback();
        }

        var messageWithContinuation = _.assign({}, message, {
            continuationId: response.continuationId,
            routeKey: response.routeKey
        });
        var request = {
            requestId: requestId,
            type: type,
            payload: this._mqProtocol.encode(type, messageWithContinuation),
            messageType: 'Request'
        };
        var that = this;

        return setTimeout(function() {
            if (!that._requests[requestId]) {
                return;
            }

            return sendRequestWithTimeout.call(that, requestId, request, messageWithContinuation, timeout, callback);
        }, continuationPollInterval);
    }

    function sendRequestWithTimeout(requestId, request, payload, timeout, callback) {
        if (this._requestTimeouts[requestId]) {
            clearTimeout(this._requestTimeouts[requestId]);
        }

        var requestTimeout = timeout || defaultRequestTimeout;

        this._requestTimeouts[requestId] = setTimeout(_.bind(handleRequestTimeout, this, requestId, requestTimeout, callback), requestTimeout);

        return encodeAndSendMessage.call(this, request, payload);
    }

    function encodeAndSendMessage(message, payload) {
        var encodedMessage = Base64.toString(this._mqProtocol.encode('mq.Message', message));

        triggerSentEvent.call(this, message, payload, encodedMessage.length);

        return this._sendCallback(encodedMessage);
    }

    function listenForContinuationTimeout(requestId, callback) {
        return setTimeout(_.bind(handleRequestTimeout, this, requestId, continuationTimeout, callback), continuationTimeout);
    }

    function handleRequestTimeout(requestId, timeout, callback) {
        if (!this._requests[requestId]) {
            return;
        }

        triggerTimeoutEvent.call(this, requestId, timeout);

        this._logger.warn('Request [%s] has not completed in [%s] ms. Dropping request.', requestId, timeout);

        delete this._requests[requestId];

        return callback(null, {status: 'timeout'});
    }

    function triggerReceivedEvent(message, payload, bytes) {
        var now = _.now();
        var sentTimestamp = this._requestTimestamps[message.requestId];

        if (_.isNumber(sentTimestamp)) {
            var totalRequestTime = now - sentTimestamp;

            message.wallTime = [totalRequestTime].concat(message.wallTime);
        }

        this._namedEvents.fireAsync('received', [{
            key: message.requestId,
            messageType: message.messageType,
            type: message.type,
            wallTime: message.wallTime,
            received: now,
            bytes: bytes,
            payload: payload
        }]);

        delete this._requestTimestamps[message.requestId];
    }

    function triggerSentEvent(message, payload, bytes) {
        var now = _.now();

        this._requestTimestamps[message.requestId] = now;

        this._namedEvents.fireAsync('sent', [{
            key: message.requestId,
            messageType: message.messageType,
            type: message.type,
            received: now,
            bytes: bytes,
            payload: payload
        }]);
    }

    function triggerTimeoutEvent(requestId, timeout) {
        this._namedEvents.fireAsync('timeout', [{
            key: requestId,
            timeout: timeout
        }]);

        delete this._requestTimestamps[requestId];
    }

    return MQService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(68)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(networkConnectionMonitor) {
    'use strict';

    return networkConnectionMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(3),
    __webpack_require__(74),
    __webpack_require__(6),
    __webpack_require__(16),
    __webpack_require__(55),
    __webpack_require__(54),
    __webpack_require__(51),
    __webpack_require__(48),
    __webpack_require__(47),
    __webpack_require__(23),
    __webpack_require__(9),
    __webpack_require__(46),
    __webpack_require__(44),
    __webpack_require__(43),
    __webpack_require__(14),
    __webpack_require__(40),
    __webpack_require__(21),
    __webpack_require__(36),
    __webpack_require__(12),
    __webpack_require__(5),
    __webpack_require__(20),
    __webpack_require__(2),
    __webpack_require__(22)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, disposable, pcastLoggerFactory, http, environment, AudioContext, PCastProtocol, PCastEndPoint, ScreenShareExtensionManager, UserMediaProvider, PeerConnectionMonitor, DimensionsChangedMonitor, metricsTransmitterFactory, StreamTelemetry, SessionTelemetry, PeerConnection, StreamWrapper, PhenixLiveStream, PhenixRealTimeStream, FeatureDetector, streamEnums, BitRateMonitor, phenixRTC, sdpUtil) {
    'use strict';

    var sdkVersion = '2018-10-15T16:17:53Z';

    function PCast(options) {
        options = options || {};

        assert.isObject(options, 'options');

        if (options.streamingSourceMapping) {
            assert.isObject(options.streamingSourceMapping, 'options.streamingSourceMapping');
            assert.isStringNotEmpty(options.streamingSourceMapping.replacement, 'options.streamingSourceMapping.replacement');

            if (!(options.streamingSourceMapping.patternToReplace instanceof RegExp)) {
                assert.isStringNotEmpty(options.streamingSourceMapping.patternToReplace, 'options.streamingSourceMapping.patternToReplace');
            }
        }

        if (!_.isNullOrUndefined(options.disableMultiplePCastInstanceWarning)) {
            assert.isBoolean(options.disableMultiplePCastInstanceWarning, 'options.disableMultiplePCastInstanceWarning');
        }

        if (!_.isNullOrUndefined(options.disableGlobalErrorListener)) {
            assert.isBoolean(options.disableGlobalErrorListener, 'options.disableGlobalErrorListener');
        }

        if (!_.isNullOrUndefined(options.disableBeforeUnload)) {
            assert.isBoolean(options.disableBeforeUnload, 'options.disableBeforeUnload');
        }

        if (!_.isNullOrUndefined(options.disableConsoleLogging)) {
            assert.isBoolean(options.disableConsoleLogging, 'options.disableConsoleLogging');
        }

        this._observableStatus = new observable.Observable('offline');
        this._baseUri = options.uri || PCastEndPoint.DefaultPCastUri;
        this._deviceId = options.deviceId || '';
        this._version = sdkVersion;
        this._logger = options.logger || pcastLoggerFactory.createPCastLogger(this._baseUri, options.disableConsoleLogging);
        this._metricsTransmitter = options.metricsTransmitter || metricsTransmitterFactory.createMetricsTransmitter(this._baseUri);
        this._screenShareExtensionManager = new ScreenShareExtensionManager(options, this._logger);
        this._shaka = options.shaka;
        this._videojs = options.videojs || phenixRTC.global.videojs;
        this._rtmpOptions = options.rtmp || {};
        this._streamingSourceMapping = options.streamingSourceMapping;
        this._disposables = new disposable.DisposableList();
        this._disableMultiplePCastInstanceWarning = options.disableMultiplePCastInstanceWarning;
        this._canPlaybackAudio = true;
        this._h264ProfileIds = [];
        this._supportedWebrtcCodecs = [];
        this._featureDetector = new FeatureDetector(options.features);

        var that = this;
        var supportedFeatures = _.filter(this._featureDetector.getFeatures(), FeatureDetector.isFeatureSupported);
        var logGlobalError = function logGlobalError(event) {
            that._logger.error('Window Error Event Triggered with pcast in [%s] state', that._observableStatus.getValue(), event ? event.error : 'Unknown Error');
        };

        this._logger.info('Device supports features [%s], user selected [%s]', supportedFeatures, this._featureDetector.getFeatures());

        _.addEventListener(phenixRTC.global, 'unload', function() {
            that._logger.info('Window Unload Event Triggered');

            return that.stop('window-unload');
        });

        if (!options.disableGlobalErrorListener) {
            _.addEventListener(phenixRTC.global, 'error', logGlobalError);

            if (phenixRTC.global.__phenixGlobalErrorListenerDisposable) {
                phenixRTC.global.__phenixGlobalErrorListenerDisposable.dispose();
            }

            phenixRTC.global.__phenixGlobalErrorListenerDisposable = new disposable.Disposable(function() {
                _.removeEventListener(phenixRTC.global, 'unload', logGlobalError);
            });
        }

        if (!options.disableBeforeUnload) {
            _.addEventListener(phenixRTC.global, 'beforeunload', function() {
                that._logger.info('Window Before Unload Event Triggered');

                return that.stop('window-beforeunload');
            });
        }

        if (!phenixRTC.webrtcSupported && phenixRTC.browser === 'ReactNative') {
            phenixRTC.shim();
        }

        if (phenixRTC.webrtcSupported) {
            setEnvironmentCodecDefaults.call(this);
            setAudioState.call(this);
        }
    }

    PCast.prototype.getBaseUri = function() {
        return this._baseUri;
    };

    PCast.prototype.getStatus = function() {
        return this._observableStatus.getValue();
    };

    PCast.prototype.getObservableStatus = function() {
        return this._observableStatus;
    };

    PCast.prototype.isStarted = function() {
        return this._started;
    };

    PCast.prototype.reAuthenticate = function(authToken) {
        assert.isStringNotEmpty(authToken, 'authToken');

        if (this._observableStatus.getValue() === 'online') {
            return this._logger.warn('Already authenticated. Denying request to re-authenticate');
        }

        this._logger.info('Attempting to re-authenticate with new auth token [%s]', authToken);

        this._authToken = authToken;

        reconnected.call(this);
    };

    PCast.prototype.start = function(authToken, authenticationCallback, onlineCallback, offlineCallback) {
        assert.isStringNotEmpty(authToken, 'authToken');
        assert.isFunction(authenticationCallback, 'authenticationCallback');
        assert.isFunction(onlineCallback, 'onlineCallback');
        assert.isFunction(offlineCallback, 'offlineCallback');

        if (this._started) {
            throw new Error('"Already started"');
        }

        if (!_.isNumber(phenixRTC.global.__phenixInstantiatedPCastCount)) {
            phenixRTC.global.__phenixInstantiatedPCastCount = 1;
        } else {
            phenixRTC.global.__phenixInstantiatedPCastCount++;
        }

        if (phenixRTC.global.__phenixInstantiatedPCastCount > 1 && !this._disableMultiplePCastInstanceWarning) {
            this._logger.warn('Avoid using multiple instances of PCast as this uses unnecessary resources and will reduce performance. This is your [%s] simultaneous instance. Remember to dispose all resources when done with them by calling .stop() or .dispose()',
                phenixRTC.global.__phenixInstantiatedPCastCount);
        }

        this._stopped = false;
        this._started = true;
        this._authToken = authToken;
        this._authenticationCallback = authenticationCallback;
        this._onlineCallback = onlineCallback;
        this._offlineCallback = offlineCallback;
        this._sessionTelemetry = new SessionTelemetry(this._logger, this._metricsTransmitter);
        this._endPoint = new PCastEndPoint(this._version, this._baseUri, this._logger, this._sessionTelemetry);

        transitionToStatus.call(this, 'connecting');

        this._peerConnections = {};
        this._mediaStreams = {};
        this._iceCandidateCallbacks = {};
        this._publishers = {};
        this._gumStreams = [];

        this._disposables.add(this._endPoint);
        this._disposables.add(this._sessionTelemetry);

        var that = this;

        that._endPoint.resolveUri(function(err, endPoint) {
            if (err) {
                that._logger.error('Failed to connect to [%s]', that._baseUri, err);

                transitionToStatus.call(that, 'offline');

                switch (err.code) {
                case 0:
                    that._authenticationCallback.call(that, that, 'network-unavailable', '');

                    break;
                case 503:
                    that._authenticationCallback.call(that, that, 'capacity', '');

                    break;
                default:
                    that._authenticationCallback.call(that, that, 'failed', '');

                    break;
                }

                that._stopped = true;
                that._started = false;

                return;
            }

            that._logger.info('Discovered end point [%s] with RTT [%s]', endPoint.uri, endPoint.roundTripTime);

            that._networkOneWayLatency = endPoint.roundTripTime / 2;
            that._resolvedEndPoint = endPoint.uri;

            instantiateProtocol.call(that, endPoint.uri);
        });
    };

    PCast.prototype.stop = function(reason) {
        reason = reason || '';

        assert.isString(reason, 'reason');

        if (!this._started) {
            return;
        }

        this._logger.info('Stopping pcast instance with reason [%s]', reason);

        this._stopped = true;
        this._started = false;

        delete this._authenticationCallback;

        try {
            var that = this;

            _.forOwn(this._mediaStreams, function(mediaStream, streamId) {
                endStream.call(that, streamId, reason);
            });
            _.forOwn(this._publishers, function(publisher, publisherStreamId) {
                endStream.call(that, publisherStreamId, reason);

                if (!_.includes(publisher.getOptions(), 'detached')) {
                    publisher.stop(reason, true);
                }
            });
            _.forOwn(this._peerConnections, function(mediaStream, peerConnectionStreamId) {
                endStream.call(that, peerConnectionStreamId, reason);
            });
            _.forEach(this._gumStreams, function(gumStream) {
                var tracks = gumStream.getTracks();

                _.forEach(tracks, function(track) {
                    track.stop();
                });
            });
        } finally {
            if (this._protocol) {
                this._protocol.disconnect();

                this._protocol = null;
            }

            if (this._logger.setObservableSessionId) {
                this._logger.setObservableSessionId(null);
            }

            if (this._sessionTelemetrySubscription) {
                this._sessionTelemetrySubscription.dispose();
                this._sessionTelemetry.setSessionId(null);
            }

            phenixRTC.global.__phenixInstantiatedPCastCount--;

            this._disposables.dispose();
        }
    };

    PCast.prototype.getUserMedia = function(options, callback, onScreenShare) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Publishing not supported on IE');
        }

        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        if (onScreenShare) {
            assert.isFunction(onScreenShare, 'onScreenShare');
        }

        var userMediaProvider = new UserMediaProvider(this._logger, this._screenShareExtensionManager, onScreenShare);

        return userMediaProvider.getUserMedia(options, callback);
    };

    PCast.prototype.publish = function(streamToken, streamToPublish, callback, tags, options) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Publishing not supported on IE');
        }

        if (!this._started) {
            throw new Error('PCast not started. Unable to publish. Please start pcast first.');
        }

        tags = tags || [];
        options = options || {};

        assert.isStringNotEmpty(streamToken, 'streamToken');
        assert.isFunction(callback, 'callback');
        assert.isArray(tags, 'tags');
        assert.isObject(options, 'options');

        if (!_.isObject(streamToPublish) && !_.isString(streamToPublish)) {
            throw new Error('"streamToPublish" must be an object or URI');
        }

        var that = this;
        var streamType = 'upload';
        var setupStreamOptions = _.assign({}, options, {negotiate: true});

        if (_.isString(streamToPublish)) {
            setupStreamOptions.negotiate = false;
            setupStreamOptions.connectUri = streamToPublish;
        } else {
            setupStreamOptions.connectUri = options.connectUri;
        }

        if (tags.length > 0) {
            setupStreamOptions.tags = tags;
        }

        var streamTelemetry = new StreamTelemetry(this.getProtocol().getSessionId(), this._logger, this._metricsTransmitter);

        streamTelemetry.setProperty('resource', streamType);

        this._protocol.setupStream(streamType, streamToken, setupStreamOptions, that._networkOneWayLatency * 2, function(error, response) {
            if (error) {
                that._logger.error('Failed to create uploader [%s]', error);

                return callback.call(that, that, 'failed');
            } else if (response.status !== 'ok') {
                that._logger.warn('Failed to create uploader, status [%s]', response.status);

                switch (response.status) {
                case 'timeout':
                case 'capacity':
                case 'unauthorized':
                    return callback.call(that, that, response.status);
                default:
                    return callback.call(that, that, 'failed');
                }
            } else {
                var streamId = response.createStreamResponse.streamId;

                streamTelemetry.setStreamId(streamId);
                streamTelemetry.setStartOffset(response.createStreamResponse.offset);
                streamTelemetry.recordMetric('Provisioned');
                streamTelemetry.recordMetric('RoundTripTime', {uint64: that._networkOneWayLatency * 2}, null, {
                    resource: that._resolvedEndPoint,
                    kind: 'https'
                });

                if (setupStreamOptions.negotiate === true) {
                    var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
                    var peerConnectionConfig = applyVendorSpecificLogic(parseProtobufMessage(response.createStreamResponse.rtcConfiguration));

                    if (phenixRTC.browser === 'Opera' && that._h264ProfileIds.length > 0) {
                        // For publishing we need any profile and level that is equal to or greater than the offer's profile and level
                        var profileLevelIdToReplace = _.get(sdpUtil.getH264ProfileIds(offerSdp), [0]);
                        var preferredLevelId = sdpUtil.getH264ProfileIdWithSameProfileAndEqualToOrHigherLevel(that._h264ProfileIds, profileLevelIdToReplace);

                        if (!preferredLevelId) {
                            that._logger.warn('[%s] Unable to find new publisher h264 profile level id to replace [%s]. Rejected environment defaults of [%s]',
                                streamId, profileLevelIdToReplace, that._h264ProfileIds);
                        } else if (profileLevelIdToReplace !== preferredLevelId) {
                            that._logger.info('[%s] Replacing publisher h264 profile level id [%s] with new value [%s] in offer sdp',
                                streamId, profileLevelIdToReplace, preferredLevelId);

                            offerSdp = sdpUtil.replaceH264ProfileId(offerSdp, profileLevelIdToReplace, preferredLevelId);
                        }
                    }

                    return createPublisherPeerConnection.call(that, peerConnectionConfig, streamToPublish, streamId, offerSdp, streamTelemetry, function(phenixPublisher, error) {
                        streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                        if (error) {
                            callback.call(that, that, 'failed', null);
                        } else {
                            callback.call(that, that, 'ok', phenixPublisher);
                        }
                    }, options, response.createStreamResponse.options);
                }

                return createPublisher.call(that, streamId, function(phenixPublisher, error) {
                    streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                    if (error) {
                        callback.call(that, that, 'failed', null);
                    } else {
                        callback.call(that, that, 'ok', phenixPublisher);
                    }
                }, response.createStreamResponse.options);
            }
        });
    };

    PCast.prototype.subscribe = function(streamToken, callback, options) {
        if (!this._started) {
            throw new Error('PCast not started. Unable to subscribe. Please start pcast first.');
        }

        options = options || {};

        assert.isStringNotEmpty(streamToken, 'streamToken');
        assert.isFunction(callback, 'callback');
        assert.isObject(options, 'options');

        var that = this;

        setAudioState.call(that, function() {
            var streamType = 'download';
            var setupStreamOptions = _.assign({}, options, {negotiate: options.negotiate !== false});
            var streamTelemetry = new StreamTelemetry(that.getProtocol().getSessionId(), that._logger, that._metricsTransmitter);
            var createStreamOptions = _.assign({}, options);

            createStreamOptions.canPlaybackAudio = that._canPlaybackAudio;

            if (!that._canPlaybackAudio && options.disableAudioIfNoOutputFound && options.receiveAudio !== false) {
                setupStreamOptions.receiveAudio = false;
                createStreamOptions.receiveAudio = false;
                createStreamOptions.forcedAudioDisabled = true;
            }

            streamTelemetry.setProperty('resource', streamType);

            that._protocol.setupStream(streamType, streamToken, setupStreamOptions, that._networkOneWayLatency * 2, function(error, response) {
                if (error) {
                    that._logger.error('Failed to create downloader [%s]', error);

                    return callback.call(that, that, 'failed');
                } else if (response.status !== 'ok') {
                    that._logger.warn('Failed to create downloader, status [%s]', response.status);

                    switch (response.status) {
                    case 'capacity':
                    case 'stream-ended':
                    case 'origin-stream-ended':
                    case 'streaming-not-available':
                    case 'unauthorized':
                    case 'timeout':
                        return callback.call(that, that, response.status);
                    default:
                        return callback.call(that, that, 'failed');
                    }
                } else {
                    var streamId = response.createStreamResponse.streamId;
                    var offerSdp = response.createStreamResponse.createOfferDescriptionResponse.sessionDescription.sdp;
                    var peerConnectionConfig = applyVendorSpecificLogic(parseProtobufMessage(response.createStreamResponse.rtcConfiguration));
                    var create = _.bind(createViewerPeerConnection, that, peerConnectionConfig);
                    var isNotRealTime = offerSdp.match(/a=x-playlist:/) || offerSdp.match(/a=x-rtmp:/);

                    if (isNotRealTime) {
                        create = createChunkedOrRtmpViewer;
                    }

                    streamTelemetry.setStreamId(streamId);
                    streamTelemetry.setStartOffset(response.createStreamResponse.offset);
                    streamTelemetry.recordMetric('Provisioned');
                    streamTelemetry.recordMetric('RoundTripTime', {uint64: that._networkOneWayLatency * 2}, null, {
                        resource: that.getBaseUri(),
                        kind: 'https'
                    });

                    createStreamOptions.originStartTime = _.now() - response.createStreamResponse.offset + that._networkOneWayLatency;

                    if (!isNotRealTime && ((phenixRTC.browser === 'Chrome' && phenixRTC.browserVersion >= 62 && FeatureDetector.isMobile()) || phenixRTC.browser === 'Opera') && that._h264ProfileIds.length > 0) {
                        // For subscribing we need any profile and level that is equal to or greater than the offer's profile and level
                        var profileLevelIdToReplace = _.get(sdpUtil.getH264ProfileIds(offerSdp), [0]);
                        var preferredLevelId = sdpUtil.getH264ProfileIdWithSameOrHigherProfileAndEqualToOrHigherLevel(that._h264ProfileIds, profileLevelIdToReplace);

                        if (!preferredLevelId) {
                            that._logger.warn('[%s] Unable to find new subscriber h264 profile level id to replace [%s]. Rejected environment defaults of [%s]',
                                streamId, profileLevelIdToReplace, that._h264ProfileIds);
                        } else if (profileLevelIdToReplace !== preferredLevelId) {
                            that._logger.info('[%s] Replacing subscriber h264 profile level id [%s] with new value [%s] in offer sdp',
                                streamId, profileLevelIdToReplace, preferredLevelId);

                            offerSdp = sdpUtil.replaceH264ProfileId(offerSdp, profileLevelIdToReplace, preferredLevelId);
                        }
                    }

                    return create.call(that, streamId, offerSdp, streamTelemetry, function(phenixMediaStream, error) {
                        streamTelemetry.recordMetric('SetupCompleted', {string: error ? 'failed' : 'ok'});

                        if (error) {
                            callback.call(that, that, 'failed', null);
                        } else {
                            callback.call(that, that, 'ok', phenixMediaStream);
                        }
                    }, createStreamOptions);
                }
            });
        });
    };

    PCast.prototype.getProtocol = function() {
        return this._protocol;
    };

    PCast.prototype.getLogger = function() {
        return this._logger;
    };

    PCast.prototype.toString = function() {
        var protocol = this.getProtocol();
        var sessionId = protocol ? protocol.getSessionId() : '';

        return 'PCast[' + sessionId || 'unauthenticated' + ',' + (protocol ? protocol.toString() : 'uninitialized') + ']';
    };

    function instantiateProtocol(uri) {
        this._protocol = new PCastProtocol(uri, this._deviceId, this._version, this._logger);

        this._protocol.onEvent('connected', _.bind(connected, this));
        this._protocol.onEvent('reconnecting', _.bind(reconnecting, this));
        this._protocol.onEvent('reconnected', _.bind(reconnected, this));
        this._protocol.onEvent('disconnected', _.bind(disconnected, this));
        this._protocol.onEvent('pcast.StreamEnded', _.bind(streamEnded, this));
        this._protocol.onEvent('pcast.StreamDataQuality', _.bind(dataQuality, this));

        if (this._logger.setObservableSessionId) {
            this._logger.setObservableSessionId(this._protocol.getObservableSessionId());
        }

        if (this._sessionTelemetrySubscription) {
            this._sessionTelemetrySubscription.dispose();
            this._sessionTelemetry.setSessionId(null);
        }

        this._sessionTelemetrySubscription = this._protocol.getObservableSessionId().subscribe(_.bind(this._sessionTelemetry.setSessionId, this._sessionTelemetry));
    }

    function connected() {
        if (areAllPeerConnectionsOffline.call(this) && this._observableStatus.getValue() === 'offline') {
            this._logger.warn('[PCast] connected after being offline. Going offline.');

            transitionToStatus.call(this, 'critical-network-issue');

            return this.stop('critical-network-issue');
        }

        var that = this;

        this._connected = true;

        if (!that._stopped) {
            that._protocol.authenticate(that._authToken, function(error, response) {
                if (that._authenticationCallback) {
                    if (error) {
                        that._logger.error('Failed to authenticate [%s]', error);
                        transitionToStatus.call(that, 'unauthorized');
                        that._authenticationCallback.call(that, that, 'unauthorized', '');
                    } else if (response.status !== 'ok') {
                        that._logger.warn('Failed to authenticate, status [%s]', response.status);
                        transitionToStatus.call(that, 'unauthorized');
                        that._authenticationCallback.call(that, that, 'unauthorized', '');
                    } else {
                        transitionToStatus.call(that, 'online');

                        that._authenticationCallback.call(that, that, response.status, response.sessionId);
                    }
                }
            });
        }
    }

    function reconnecting() {
        transitionToStatus.call(this, 'reconnecting');
    }

    function reconnected() {
        transitionToStatus.call(this, 'reconnected');

        this._logger.info('Attempting to re-authenticate after reconnect event');

        reAuthenticate.call(this);
    }

    function reAuthenticate() {
        var that = this;

        if (!that._stopped) {
            that._protocol.authenticate(that._authToken, function(error, response) {
                var suppressCallbackIfNeverDisconnected = that._connected === true;

                if (error) {
                    that._logger.error('Unable to authenticate after reconnect to WebSocket [%s]', error);

                    return transitionToStatus.call(that, 'reconnect-failed');
                }

                if (response.status !== 'ok') {
                    that._logger.warn('Unable to authenticate after reconnect to WebSocket, status [%s]', response.status);

                    var reason = response.status === 'capacity' ? response.status : 'reconnect-failed';

                    return transitionToStatus.call(that, reason);
                }

                that._connected = true;

                that._logger.info('Successfully authenticated after reconnect to WebSocket');

                return transitionToStatus.call(that, 'online', null, suppressCallbackIfNeverDisconnected);
            });
        }
    }

    function disconnected() {
        if (areAllPeerConnectionsOffline.call(this) && this._observableStatus.getValue() === 'reconnecting') {
            this._logger.warn('[PCast] disconnected after attempting to reconnect. Going offline.');

            transitionToStatus.call(this, 'critical-network-issue');

            return this.stop('critical-network-issue');
        }

        this._connected = false;
        transitionToStatus.call(this, 'offline');
    }

    function areAllPeerConnectionsOffline() {
        return _.reduce(this._peerConnections, function(isOffline, peerConnection) {
            if (!isOffline) {
                return isOffline;
            }

            return peerConnection.iceConnectionState === 'closed';
        }, true);
    }

    function getStreamEndedReason(value) {
        switch (value) {
        case '':
        case 'none':
        case 'ended':
            return 'ended';
        case 'server-error':
        case 'session-error':
        case 'not-ready':
        case 'error':
        case 'died':
            return 'failed';
        case 'censored':
            return 'censored';
        case 'maintenance':
            return 'maintenance';
        case 'capacity':
            return 'capacity';
        case 'app-background':
            return 'app-background';
        case 'egress-failed':
            return 'egress-failed';
        case 'egress-setup-failed':
            return 'egress-setup-failed';
        default:
            return 'custom';
        }
    }

    function streamEnded(event) {
        var streamId = event.streamId;
        var reason = event.reason;

        return endStream.call(this, streamId, reason);
    }

    function dataQuality(event) {
        var streamId = event.streamId;
        var status = event.status;
        var reason = event.reason;

        var internalMediaStream = this._mediaStreams[streamId];

        if (internalMediaStream) {
            internalMediaStream.dataQualityChangedCallback(status, reason);
        }

        var publisher = this._publishers[streamId];

        if (publisher && _.isFunction(publisher.dataQualityChangedCallback)) {
            publisher.dataQualityChangedCallback(publisher, status, reason);
        }
    }

    function endStream(streamId, reason) {
        this._logger.info('[%s] Stream ended with reason [%s]', streamId, reason);

        var internalMediaStream = this._mediaStreams[streamId];

        if (internalMediaStream) {
            internalMediaStream.streamEndedCallback(getStreamEndedReason(reason), reason, true);
        }

        delete this._mediaStreams[streamId];

        var publisher = this._publishers[streamId];

        if (publisher && _.isFunction(publisher.publisherEndedCallback)) {
            publisher.publisherEndedCallback(publisher, getStreamEndedReason(reason), reason);
        }

        delete this._publishers[streamId];

        var peerConnection = this._peerConnections[streamId];

        if (peerConnection) {
            closePeerConnection.call(this, streamId, peerConnection, 'ended');
        }

        delete this._peerConnections[streamId];
    }

    function setupStreamAddedListener(streamId, state, peerConnection, streamTelemetry, callback, options) {
        var that = this;
        var added = false;
        var setupTimeoutId;
        var streamSetupInterval = 3000;
        var onAddStream = function onAddStream(event) {
            if (state.failed || added) {
                return;
            }

            var numberOfActiveTracks = sdpUtil.getNumberOfActiveSections(peerConnection);
            var masterStream = event.stream || _.get(event, ['streams', 0]);
            var kind = 'real-time';

            if (!masterStream) {
                state.failed = true;
                that._logger.warn('[%s] No remote stream', streamId);

                return callback.call(that, undefined, 'failed');
            }

            if (setupTimeoutId) {
                clearTimeout(setupTimeoutId);
            }

            if (numberOfActiveTracks !== masterStream.getTracks().length) {
                setupTimeoutId = setTimeout(function() {
                    state.failed = true;
                    that._logger.warn('[%s] Did not receive all tracks within [%s] ms', streamId, streamSetupInterval);

                    return callback.call(that, undefined, 'failed');
                }, streamSetupInterval);

                return;
            }

            added = true;

            that._logger.info('[%s] Got remote stream', streamId);

            streamTelemetry.setProperty('kind', kind);

            var streamOptions = _.assign({networkLag: that._networkOneWayLatency}, options);
            var realTimeStream = new PhenixRealTimeStream(streamId, masterStream, peerConnection, streamTelemetry, streamOptions, that._logger);
            var realTimeStreamDecorator = new StreamWrapper(kind, realTimeStream, that._logger);

            var onError = function onError(source, event) {
                that._logger.warn('Phenix Real-Time Stream Error [%s] [%s]', source, event);

                realTimeStreamDecorator.streamErrorCallback(kind, event);
            };

            var onStop = function destroyMasterMediaStream(reason) {
                if (state.stopped || !that._protocol) {
                    return;
                }

                that._logger.info('[%s] media stream has stopped with reason', streamId, reason);

                closePeerConnection.call(that, streamId, peerConnection, 'stop');

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }

                    that._logger.info('[%s] destroyed stream', streamId);
                });

                state.stopped = true;
            };

            realTimeStreamDecorator.on(streamEnums.streamEvents.playerError.name, onError);
            realTimeStreamDecorator.on(streamEnums.streamEvents.stopped.name, onStop);

            that._mediaStreams[streamId] = realTimeStreamDecorator;

            callback.call(that, realTimeStream);
        };

        _.addEventListener(peerConnection, 'addstream', onAddStream);
        _.addEventListener(peerConnection, 'track', onAddStream);
    }

    function setupIceCandidateListener(streamId, peerConnection, callback) {
        var that = this;
        var onIceCandidate = function onIceCandidate(event) {
            var candidate = event.candidate;

            if (candidate) {
                that._logger.info('[%s] ICE candidate: [%s] [%s] [%s]', streamId, candidate.sdpMid, candidate.sdpMLineIndex, candidate.candidate);
            } else {
                that._logger.info('[%s] ICE candidate discovery complete', streamId);
            }

            if (callback) {
                callback(candidate);
            }
        };

        _.addEventListener(peerConnection, 'icecandidate', onIceCandidate);
    }

    function setupStateListener(streamId, peerConnection) {
        var that = this;
        var onNegotiationNeeded = function onNegotiationNeeded(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Negotiation needed');
        };

        var onIceConnectionStateChanged = function onIceConnectionStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] ICE connection state changed [%s]', streamId, peerConnection.iceConnectionState);
        };

        var onIceGatheringStateChanged = function onIceGatheringStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] ICE gathering state changed [%s]', streamId, peerConnection.iceGatheringState);
        };

        var onSignalingStateChanged = function onSignalingStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Signaling state changed [%s]', streamId, peerConnection.signalingState);
        };

        var onConnectionStateChanged = function onConnectionStateChanged(event) { // eslint-disable-line no-unused-vars
            that._logger.info('[%s] Connection state changed [%s]', streamId, peerConnection.connectionState);
        };

        _.addEventListener(peerConnection, 'negotiationneeded', onNegotiationNeeded);
        _.addEventListener(peerConnection, 'iceconnectionstatechange', onIceConnectionStateChanged);
        _.addEventListener(peerConnection, 'icegatheringstatechange ', onIceGatheringStateChanged);
        _.addEventListener(peerConnection, 'signalingstatechange', onSignalingStateChanged);
        _.addEventListener(peerConnection, 'connectionstatechange', onConnectionStateChanged);
    }

    function createPublisher(streamId, callback, streamOptions) {
        var that = this;
        var state = {stopped: false};

        var publisher = {
            getStreamId: function getStreamId() {
                return streamId;
            },

            getStream: function getStream() {
                that._logger.debug('[%s] Unable to get stream on publisher of remote origin.', streamId);

                return null;
            },

            getStats: function getStats() {
                that._logger.debug('[%s] Unable to get stream stats on publisher of remote origin.', streamId);

                return null;
            },

            isActive: function isActive() {
                return !state.stopped;
            },

            hasEnded: function hasEnded() {
                return state.stopped;
            },

            stop: function stop(reason) {
                if (state.stopped) {
                    return;
                }

                that._logger.info('[%s] stopping publisher with reason [%s]', streamId, reason);

                that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                    if (error) {
                        that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                        return;
                    } else if (response.status !== 'ok') {
                        that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                        return;
                    }

                    that._logger.info('[%s] destroyed stream', streamId);
                });

                state.stopped = true;
            },

            setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
                assert.isFunction(callback, 'callback');

                this.publisherEndedCallback = callback;
            },

            setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
                assert.isFunction(callback, 'callback');

                this.dataQualityChangedCallback = callback;
            },

            getOptions: function getOptions() {
                return streamOptions;
            },

            monitor: function monitor(options, callback) {
                assert.isObject(options, 'options');
                assert.isFunction(callback, 'callback');
            },

            getMonitor: function getMonitor() {
                return null;
            }
        };

        that._publishers[streamId] = publisher;

        callback(publisher);
    }

    function setEnvironmentCodecDefaults() {
        var that = this;
        var peerConnection = new phenixRTC.RTCPeerConnection();

        // TODO(DY) remove when updating to webrtc-adapter version 5.0.5 or greater
        if (phenixRTC.browser === 'Safari' && phenixRTC.browserVersion > 10) {
            peerConnection.addTransceiver('audio');
            peerConnection.addTransceiver('video');
        }

        try {
            var handleOffer = function handleOffer(offer) {
                var h264ProfileIds = sdpUtil.getH264ProfileIds(offer.sdp);

                that._supportedWebrtcCodecs = sdpUtil.getSupportedCodecs(offer.sdp);

                that._logger.info('Supported WebRTC video codecs [%s]', that._supportedWebrtcCodecs);

                if (h264ProfileIds.length === 0) {
                    return that._logger.info('Unable to find local h264 profile level id', offer.sdp);
                }

                that._logger.info('Found local h264 profile level ids [%s]', h264ProfileIds, offer.sdp);

                that._h264ProfileIds = h264ProfileIds;

                if (peerConnection.close) {
                    peerConnection.close();
                }
            };

            var handleFailure = function(e) {
                that._logger.error('Unable to create offer to get local h264 profile level id', e);

                if (peerConnection.close) {
                    peerConnection.close();
                }
            };

            var constraints = {
                offerToReceiveAudio: true,
                offerToReceiveVideo: true
            };

            if (typeof phenixRTC.global.Promise === 'function') {
                return peerConnection.createOffer(constraints)
                    .then(handleOffer)
                    .catch(handleFailure);
            }

            peerConnection.createOffer(handleOffer, handleFailure, constraints);
        } catch (e) {
            that._logger.error('Failed to set environment defaults. Creating the Offer failed', e);

            if (peerConnection.close) {
                peerConnection.close();
            }
        }
    }

    function setAudioState(done) {
        var that = this;

        switch (phenixRTC.browser) {
        case 'Edge':
            return phenixRTC.getDestinations(function(destinations) {
                var audioDestinations = _.filter(destinations, function(destination) {
                    return destination.kind === 'audio';
                });

                if (audioDestinations.length === 0) {
                    if (that._canPlaybackAudio) {
                        that._logger.info('Detected no audio devices attached to machine');
                    }

                    that._canPlaybackAudio = false;
                } else {
                    that._canPlaybackAudio = true;
                }

                if (done) {
                    done();
                }
            });
        default:
            if (done) {
                done();
            }

            break;
        }
    }

    function createPublisherPeerConnection(peerConnectionConfig, mediaStream, streamId, offerSdp, streamTelemetry, callback, createOptions, streamOptions) {
        var that = this;
        var state = {
            failed: false,
            stopped: false
        };
        var hasCrypto = offerSdp.match(/a=crypto:/i);
        var hasDataChannel = offerSdp.match(/m=application /i);
        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
            'optional': [
                {DtlsSrtpKeyAgreement: !hasCrypto}, {RtpDataChannels: hasDataChannel}
            ]
        });
        var remoteMediaStream = null;
        var publisherMonitor = null;

        shimPeerConnectionGetStreams(peerConnection);

        that._peerConnections[streamId] = peerConnection;

        peerConnection.addStream(mediaStream);

        if (phenixRTC.browser === 'Firefox' || phenixRTC.browser === 'Edge') {
            if (offerSdp.match(/(\nm=video)/g) && offerSdp.match(/(\nm=audio)/g)) {
                var firstSection = /(a=candidate)((.|\n)*)(?=m=)/g;

                offerSdp = offerSdp.replace(firstSection, offerSdp.match(firstSection) + 'a=end-of-candidates\n');
            }

            offerSdp += 'a=end-of-candidates';

            offerSdp = offerSdp.replace(/(\na=ice-options:trickle)/g, '');
        }

        var onFailure = function onFailure(status) {
            if (state.failed) {
                return;
            }

            state.failed = true;
            state.stopped = true;

            delete that._peerConnections[streamId];
            delete that._publishers[streamId];
            delete that._iceCandidateCallbacks[streamId];

            closePeerConnection.call(that, streamId, peerConnection, 'failure');

            callback.call(that, undefined, status || 'failed');
        };

        var createPublisher = function createPublisher() {
            var bandwidthAttribute = /(b=AS:([0-9]*)[\n\r]*)/gi;
            var video = /(mid:video)([\n\r]*)/gi;
            var limit = 0;
            var bandwithAttribute = bandwidthAttribute.exec(offerSdp);

            if (bandwithAttribute && bandwithAttribute.length >= 3) {
                limit = bandwithAttribute[2] * 1000;
            }

            var publisher = {
                getStreamId: function getStreamId() {
                    return streamId;
                },

                getStream: function getStream() {
                    return mediaStream;
                },

                isActive: function isActive() {
                    return !state.stopped;
                },

                hasEnded: function hasEnded() {
                    switch (peerConnection.iceConnectionState) {
                    case 'new':
                    case 'checking':
                    case 'connected':
                    case 'completed':
                        return false;
                    case 'disconnected':
                    case 'failed':
                    case 'closed':
                        return true;
                    default:
                        return true;
                    }
                },

                stop: function stop(reason) {
                    if (state.stopped || !that._protocol) {
                        return;
                    }

                    that._logger.info('[%s] stopping publisher with reason [%s]', streamId, reason || 'client-action');

                    closePeerConnection.call(that, streamId, peerConnection, 'closed');

                    that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                        if (error) {
                            that._logger.error('[%s] failed to destroy stream [%s]', streamId, error);

                            return;
                        } else if (response.status !== 'ok') {
                            that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                            return;
                        }

                        that._logger.info('[%s] destroyed stream', streamId);
                    });

                    state.stopped = true;
                },

                setPublisherEndedCallback: function setPublisherEndedCallback(callback) {
                    assert.isFunction(callback, 'callback');

                    this.publisherEndedCallback = callback;
                },

                setDataQualityChangedCallback: function setDataQualityChangedCallback(callback) {
                    assert.isFunction(callback, 'callback');

                    this.dataQualityChangedCallback = callback;
                },

                limitBandwidth: function limitBandwidth(bandwidthLimit) {
                    if (phenixRTC.browser === 'Edge') {
                        return that._logger.warn('Limit bandwidth not support on [%s]', phenixRTC.browser);
                    }

                    assert.isNumber(bandwidthLimit, 'bandwidthLimit');

                    var newLimit = limit ? Math.min(bandwidthLimit, limit) : bandwidthLimit;
                    var remoteDescription = peerConnection.remoteDescription;

                    that._logger.info('Changing bandwidth limit to [%s]', newLimit);

                    var updatedSdp = remoteDescription.sdp.replace(bandwidthAttribute, '');

                    // Add new limit in kbps
                    updatedSdp = updatedSdp.replace(video, function(match, videoLine, lineEnding, offset, sdp) { // eslint-disable-line no-unused-vars
                        return [videoLine, lineEnding, 'b=AS:', Math.ceil(newLimit / 1000), lineEnding].join('');
                    });

                    var updatedRemoteDescription = new phenixRTC.RTCSessionDescription({
                        type: remoteDescription.type,
                        sdp: updatedSdp
                    });

                    peerConnection.setRemoteDescription(updatedRemoteDescription);

                    return {
                        dispose: function() {
                            peerConnection.setRemoteDescription(remoteDescription);
                        }
                    };
                },

                getMonitor: function getMonitor() {
                    return publisherMonitor;
                },

                monitor: function monitor(options, callback) {
                    assert.isObject(options, 'options');
                    assert.isFunction(callback, 'callback');

                    var monitor = new PeerConnectionMonitor(streamId, peerConnection, that._logger);

                    options.direction = 'outbound';

                    monitor.start(options, function activeCallback() {
                        return that._publishers[streamId] === publisher && !state.stopped;
                    }, function monitorCallback(error, monitorEvent) {
                        if (error) {
                            that._logger.warn('[%s] Publisher monitor triggered unrecoverable error [%s]', error);
                        }

                        that._logger.warn('[%s] Publisher triggered monitor condition for [%s]', streamId, monitorEvent.reasons);

                        return callback(publisher, 'client-side-failure', monitorEvent);
                    });

                    _.forEach(mediaStream.getTracks(), function(track) {
                        _.addEventListener(track, 'readystatechange', function() {
                            if (track.readyState === 'ended') {
                                that._logger.warn('[%s] Publisher track has failed [%s]', streamId, track);

                                return callback(publisher, 'camera-track-failure', {
                                    type: track.kind + '-track-ended',
                                    message: 'Publisher ' + track.kind + ' track has ended in an unrecoverable way. This may require reconfiguring your camera or microphone.'
                                });
                            }
                        });
                    });

                    publisherMonitor = monitor;

                    return monitor;
                },

                addBitRateThreshold: function addBitRateThreshold(threshold, callback) {
                    var bitRateMonitor = new BitRateMonitor('Publisher', publisherMonitor, function getLimit() {
                        return limit;
                    });

                    return bitRateMonitor.addThreshold(threshold, callback);
                },

                setRemoteMediaStreamCallback: function setRemoteMediaStreamCallback(callback) {
                    assert.isFunction(callback, 'callback');

                    this.remoteMediaStreamCallback = callback;

                    if (remoteMediaStream) {
                        callback(publisher, remoteMediaStream);
                    }
                },

                getOptions: function getOptions() {
                    return streamOptions;
                },

                getStats: function getStats(callback) {
                    assert.isFunction(callback, 'callback');

                    if (!this._lastStats) {
                        this._lastStats = {};
                    }

                    var that = this;

                    return phenixRTC.getStats(peerConnection, null, function(stats) {
                        callback(PeerConnection.convertPeerConnectionStats(stats, that._lastStats));
                    });
                }
            };

            that._publishers[streamId] = publisher;

            callback.call(that, publisher);
        };

        setupStreamAddedListener.call(that, streamId, state, peerConnection, streamTelemetry, function(mediaStream) {
            var publisher = that._publishers[streamId];

            remoteMediaStream = mediaStream;

            if (publisher && publisher.remoteMediaStreamCallback) {
                publisher.remoteMediaStreamCallback(publisher, mediaStream);
            }
        }, createOptions);
        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
            if (that._iceCandidateCallbacks[streamId]) {
                that._iceCandidateCallbacks[streamId](candidate);
            }
        });
        setupStateListener.call(that, streamId, peerConnection);

        var offerSessionDescription = new phenixRTC.RTCSessionDescription({
            type: 'offer',
            sdp: offerSdp
        });
        var mediaConstraints = {mandatory: {}};

        if (phenixRTC.browser === 'Chrome' || phenixRTC.browser === 'ReactNative') {
            mediaConstraints.mandatory.OfferToReceiveVideo = createOptions.receiveVideo === true;
            mediaConstraints.mandatory.OfferToReceiveAudio = createOptions.receiveAudio === true;
        } else {
            mediaConstraints.mandatory.offerToReceiveVideo = createOptions.receiveVideo === true;
            mediaConstraints.mandatory.offerToReceiveAudio = createOptions.receiveAudio === true;
        }

        if (typeof phenixRTC.global.Promise === 'function') {
            return peerConnection.setRemoteDescription(offerSessionDescription)
                .then(_.bind(onSetRemoteDescriptionSuccess, that))
                .then(function() {
                    return peerConnection.createAnswer(mediaConstraints);
                })
                .then(_.bind(onCreateAnswerSuccess, that))
                .then(function(answerSdp) {
                    return new phenixRTC.global.Promise(function(resolve, reject) {
                        setRemoteAnswer.call(that, streamId, answerSdp, resolve, reject);
                    });
                })
                .then(function(sessionDescription) {
                    return peerConnection.setLocalDescription(sessionDescription);
                })
                .then(_.bind(onSetLocalDescriptionSuccess, that))
                .then(createPublisher)
                .catch(onFailure);
        }

        that._logger.info('[%s] Using legacy callback api', streamId);

        peerConnection.setRemoteDescription(offerSessionDescription, function() {
            onSetRemoteDescriptionSuccess.call(that);

            peerConnection.createAnswer(function(answerSdp) {
                onCreateAnswerSuccess.call(that, answerSdp);

                setRemoteAnswer.call(that, streamId, answerSdp, function(sessionDescription) {
                    peerConnection.setLocalDescription(sessionDescription, function() {
                        onSetLocalDescriptionSuccess.call(that);
                        createPublisher();
                    }, onFailure);
                }, onFailure);
            }, onFailure, mediaConstraints);
        }, onFailure);
    }

    function createViewerPeerConnection(peerConnectionConfig, streamId, offerSdp, streamTelemetry, callback, createOptions) {
        if (phenixRTC.browser === 'IE') {
            throw new Error('Subscribing in real-time not supported on IE without the PhenixP2P Plugin');
        }

        var that = this;
        var state = {
            failed: false,
            stopped: false
        };
        var hasCrypto = offerSdp.match(/a=crypto:/i);
        var hasDataChannel = offerSdp.match(/m=application /i);
        var peerConnection = new phenixRTC.RTCPeerConnection(peerConnectionConfig, {
            'optional': [
                {DtlsSrtpKeyAgreement: !hasCrypto}, {RtpDataChannels: hasDataChannel}
            ]
        });

        shimPeerConnectionGetStreams(peerConnection);

        that._peerConnections[streamId] = peerConnection;

        if (phenixRTC.browser === 'Firefox' || phenixRTC.browser === 'Edge') {
            if (offerSdp.match(/(\nm=video)/g) && offerSdp.match(/(\nm=audio)/g)) {
                var firstSection = /(a=candidate)((.|\n)*)(?=m=)/g;

                offerSdp = offerSdp.replace(firstSection, offerSdp.match(firstSection) + 'a=end-of-candidates\n');
            }

            offerSdp += 'a=end-of-candidates';

            offerSdp = offerSdp.replace(/(\na=ice-options:trickle)/g, '');
        }

        if (phenixRTC.browser === 'ReactNative') {
            offerSdp = setGroupLineOrderToMatchMediaSectionOrder(offerSdp);
        }

        var onFailure = function onFailure(status) {
            if (state.failed) {
                return;
            }

            state.failed = true;
            state.stopped = true;

            delete that._peerConnections[streamId];
            delete that._mediaStreams[streamId];
            delete that._iceCandidateCallbacks[streamId];

            closePeerConnection.call(that, streamId, peerConnection, 'failure');

            callback.call(that, undefined, status || 'failed');
        };

        setupStreamAddedListener.call(that, streamId, state, peerConnection, streamTelemetry, callback, createOptions);
        setupIceCandidateListener.call(that, streamId, peerConnection, function onIceCandidate(candidate) {
            if (that._iceCandidateCallbacks[streamId]) {
                that._iceCandidateCallbacks[streamId](candidate);
            }
        });
        setupStateListener.call(that, streamId, peerConnection);

        var offerSessionDescription = new phenixRTC.RTCSessionDescription({
            type: 'offer',
            sdp: offerSdp
        });
        var mediaConstraints = {mandatory: {}};

        if (phenixRTC.browser === 'Chrome' || phenixRTC.browser === 'ReactNative') {
            mediaConstraints.mandatory.OfferToReceiveVideo = createOptions.receiveVideo !== false;
            mediaConstraints.mandatory.OfferToReceiveAudio = createOptions.receiveAudio !== false;
        } else {
            mediaConstraints.mandatory.offerToReceiveVideo = createOptions.receiveVideo !== false;
            mediaConstraints.mandatory.offerToReceiveAudio = createOptions.receiveAudio !== false;
        }

        if (typeof phenixRTC.global.Promise === 'function') {
            return peerConnection.setRemoteDescription(offerSessionDescription)
                .then(_.bind(onSetRemoteDescriptionSuccess, that))
                .then(function() {
                    return peerConnection.createAnswer(mediaConstraints);
                })
                .then(_.bind(onCreateAnswerSuccess, that))
                .then(function(answerSdp) {
                    return new phenixRTC.global.Promise(function(resolve, reject) {
                        setRemoteAnswer.call(that, streamId, answerSdp, resolve, reject);
                    });
                })
                .then(function(sessionDescription) {
                    return peerConnection.setLocalDescription(sessionDescription);
                })
                .then(_.bind(onSetLocalDescriptionSuccess, that))
                .catch(onFailure);
        }

        peerConnection.setRemoteDescription(offerSessionDescription, function() {
            onSetRemoteDescriptionSuccess.call(that);

            peerConnection.createAnswer(function(answerSdp) {
                onCreateAnswerSuccess.call(that, answerSdp);

                setRemoteAnswer.call(that, streamId, answerSdp, function(sessionDescription) {
                    peerConnection.setLocalDescription(sessionDescription, _.bind(onSetLocalDescriptionSuccess, that), onFailure);
                }, onFailure);
            }, onFailure, mediaConstraints);
        }, onFailure);
    }

    function onSetLocalDescriptionSuccess() {
        this._logger.debug('Set local description (answer)');
    }

    function onSetRemoteDescriptionSuccess() {
        this._logger.debug('Set remote description (offer)');
    }

    function onCreateAnswerSuccess(answerSdp) {
        this._logger.info('Created answer [%s]', answerSdp.sdp);

        return answerSdp;
    }

    function setRemoteAnswer(streamId, answerSdp, setRemoteAnswerCallback, onFailure) {
        var that = this;

        that._protocol.setAnswerDescription(streamId, answerSdp.sdp, function(error, response) {
            if (error) {
                that._logger.error('Failed to set answer description [%s]', error);

                return onFailure();
            } else if (response.status !== 'ok') {
                that._logger.warn('Failed to set answer description, status [%s]', response.status);

                return onFailure(response.status);
            }

            if (response && _.includes(response.options, 'ice-candidates')) {
                that._iceCandidateCallbacks = _.bind(onIceCandidate, that, streamId);
            }

            var localSdp = response.sessionDescription.sdp;

            if (FeatureDetector.isIOS()) {
                var version = _.get(FeatureDetector.getIOSVersion(), ['major']);

                that._logger.info('iOS Version is [%s]', version);

                if (version < 11) {
                    localSdp = localSdp.replace('BUNDLE audio video', 'BUNDLE video audio'); // Without this only video-only streams work on iOS 10
                }
            }

            var sessionDescription = new phenixRTC.RTCSessionDescription({
                type: 'answer',
                sdp: localSdp
            });

            setRemoteAnswerCallback(sessionDescription);
        });
    }

    function onIceCandidate(streamId, candidate) {
        var that = this;
        var candidates = [];
        var iceCandidatesOptions = [];

        if (candidate) {
            candidates.push(candidate);
        } else {
            iceCandidatesOptions.push('completed');
        }

        that._protocol.addIceCandidates(streamId, candidate, iceCandidatesOptions, function(error, response) {
            if (error) {
                return that._logger.error('Failed to add ICE candidate [%s]', error);
            } else if (response.status !== 'ok') {
                return that._logger.warn('Failed to add ICE candidate, status [%s]', response.status);
            }

            if (_.includes(response.options, 'cancel')) {
                delete that._iceCandidateCallbacks[streamId];
            }
        });
    }

    function createChunkedOrRtmpViewer(streamId, offerSdp, streamTelemetry, callback, options) {
        var that = this;

        var rtmpQuery = /a=x-rtmp:(rtmp:\/\/[^\n]*)/m;
        var rtmpMatch = offerSdp.match(rtmpQuery);
        var dashMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]mpd\??[^\s]*)/m);
        var hlsMatch = offerSdp.match(/a=x-playlist:([^\n]*[.]m3u8\??[^\s]*)/m);
        var manifestUrl = _.get(dashMatch, [1], '');
        var playlistUrl = _.get(hlsMatch, [1], '');
        var dashManifestOffered = dashMatch && dashMatch.length === 2;
        var hlsPlaylistOffered = hlsMatch && hlsMatch.length === 2;
        var rtmpOffered = !!rtmpMatch;
        var publisherCapabilities = [];

        if (dashManifestOffered || hlsPlaylistOffered) {
            publisherCapabilities.push('streaming');
        }

        if (rtmpOffered) {
            publisherCapabilities.push('rtmp');
        }

        var preferredFeature = this._featureDetector.getPreferredFeatureFromPublisherCapabilities(publisherCapabilities, true);

        if (this._streamingSourceMapping) {
            manifestUrl = manifestUrl.replace(this._streamingSourceMapping.patternToReplace, this._streamingSourceMapping.replacement);
            playlistUrl = playlistUrl.replace(this._streamingSourceMapping.patternToReplace, this._streamingSourceMapping.replacement);
        }

        switch (preferredFeature) {
        case streamEnums.types.rtmp.name:
            var rtmpUris = [];
            var env = environment.parseEnvFromPcastBaseUri(this._baseUri);

            this._logger.info('Selecting flash playback for rtmp.');

            while (rtmpMatch) {
                var rtmpUriAndAttributes = _.get(rtmpMatch, [1], '');
                var rtmpUri = _.get(rtmpUriAndAttributes.match(/(rtmp:\/\/[^\n\s]*)/), [0]);
                var bitrate = _.get(rtmpUriAndAttributes.match(/bitrate=([^\n\s;]*)/), [1]);
                var resolution = _.get(rtmpUriAndAttributes.match(/resolution=([^\n\s;]*)/), [1]);

                offerSdp = offerSdp.replace(rtmpUriAndAttributes, '');

                if (rtmpUri) {
                    rtmpUris.push({
                        uri: rtmpUri,
                        bitrate: bitrate,
                        resolution: resolution
                    });
                }

                rtmpMatch = offerSdp.match(rtmpQuery);
            }

            return createLiveViewerOfKind.call(that, streamId, rtmpUris, streamEnums.types.rtmp.name, streamTelemetry, callback, _.assign({env: env}, this._rtmpOptions, options));
        case streamEnums.types.dash.name:
            this._logger.info('Selecting dash playback for live stream.');

            options.isDrmProtectedContent = /[?&]drmToken=([^&]*)/.test(manifestUrl) || /x-widevine-service-certificate/.test(offerSdp);

            if (options.isDrmProtectedContent) {
                options.widevineServiceCertificateUrl = offerSdp.match(/a=x-widevine-service-certificate:([^\n][^\s]*)/m)[1];
                options.playreadyLicenseUrl = offerSdp.match(/a=x-playready-license-url:([^\n][^\s]*)/m)[1];
            }

            if (this._shaka && !this._shaka.Player.isBrowserSupported()) {
                this._logger.warn('[%s] Shaka does not support this browser', streamId);

                return callback.call(this, undefined, 'browser-unsupported');
            }

            return createLiveViewerOfKind.call(that, streamId, manifestUrl, streamEnums.types.dash.name, streamTelemetry, callback, options);
        case streamEnums.types.hls.name:
            this._logger.info('Selecting hls playback for live stream.');

            options.isDrmProtectedContent = /[?&]drmToken=([^&]*)/.test(playlistUrl);

            if (options.hlsTargetDuration) {
                assert.isNumber(options.hlsTargetDuration, 'options.hlsTargetDuration');

                playlistUrl = playlistUrl + (playlistUrl.indexOf('?') > -1 ? '&' : '?') + 'targetDuration=' + options.hlsTargetDuration;
            }

            return createLiveViewerOfKind.call(that, streamId, playlistUrl, streamEnums.types.hls.name, streamTelemetry, callback, _.assign({preferNative: FeatureDetector.shouldUseNativeHls}, options));
        default:
            break;
        }

        that._logger.warn('[%s] Device does not support [%s] playback. Creating live viewer stream failed.', streamId, FeatureDetector.mapPCastCapabilitiesToFeatures(publisherCapabilities));

        return callback.call(that, undefined, 'failed');
    }

    function createLiveViewerOfKind(streamId, uri, kind, streamTelemetry, callback, options) {
        var that = this;
        var liveStream = new PhenixLiveStream(kind, streamId, uri, streamTelemetry, options, this._shaka, this._logger);
        var liveStreamDecorator = new StreamWrapper(kind, liveStream, this._logger);

        var onPlayerError = function onPlayerError(source, event) {
            that._logger.warn('Phenix Live Stream Player Error [%s] [%s]', source, event);

            liveStreamDecorator.streamErrorCallback(source, event);
        };

        var onStop = function onStop(reason) {
            if (!that._protocol) {
                return that._logger.warn('Unable to destroy stream [%s]', streamId);
            }

            that._protocol.destroyStream(streamId, reason || '', function(error, response) {
                if (error) {
                    that._logger.error('[%s] failed to destroy stream, [%s]', streamId, error);

                    return;
                } else if (response.status !== 'ok') {
                    that._logger.warn('[%s] failed to destroy stream, status [%s]', streamId, response.status);

                    return;
                }
            });
        };

        streamTelemetry.setProperty('kind', kind);

        liveStreamDecorator.on(streamEnums.streamEvents.playerError.name, onPlayerError);
        liveStreamDecorator.on(streamEnums.streamEvents.stopped.name, onStop);

        this._mediaStreams[streamId] = liveStreamDecorator;

        callback.call(this, liveStreamDecorator.getPhenixMediaStream());
    }

    function transitionToStatus(newStatus, reason, suppressCallback) {
        var oldStatus = this.getStatus();

        if (oldStatus !== newStatus && !(isOfflineStatus(oldStatus) && newStatus === 'offline')) {
            this._observableStatus.setValue(newStatus);

            if (suppressCallback) {
                return;
            }

            switch (newStatus) {
            case 'connecting':
            case 'reconnecting':
            case 'reconnected':
                break;
            case 'critical-network-issue':
            case 'unauthorized':
            case 'reconnect-failed':
            case 'offline':
                return this._offlineCallback.call(this);
            case 'online':
                return this._onlineCallback.call(this);
            default:
                break;
            }
        }
    }

    function isOfflineStatus(status) {
        return status === 'critical-network-issue' || status === 'offline';
    }

    function closePeerConnection(streamId, peerConnection, reason) {
        if (peerConnection.signalingState !== 'closed' && !peerConnection.__closing) {
            this._logger.debug('[%s] close peer connection [%s]', streamId, reason);
            peerConnection.close();
            peerConnection.__closing = true;
        }
    }

    function parseProtobufMessage(message) {
        if (!message) {
            return message;
        }

        var parsedMessage = _.isArray(message) ? [] : {};
        var processIndexOrKey = _.bind(removeNullValuesAndParseEnums, null, parsedMessage);

        if (_.isArray(message)) {
            _.forEach(message, processIndexOrKey);
        } else {
            _.forOwn(message, processIndexOrKey);
        }

        return parsedMessage;
    }

    function removeNullValuesAndParseEnums(parsedMessage, value, key) {
        if (value === null) {
            return;
        }

        if (_.isObject(value) || _.isArray(value)) {
            return parsedMessage[key] = parseProtobufMessage(value);
        }

        if (!_.isString(value) || !_.isString(key)) {
            return parsedMessage[key] = value;
        }

        var prefixedByKey = _.startsWith(value.toLowerCase(), key.toLowerCase());
        var valueParsedWithoutKey = prefixedByKey ? value.substring(key.length, value.length).toLowerCase() : value;

        parsedMessage[key] = valueParsedWithoutKey;
    }

    function applyVendorSpecificLogic(config) {
        if (phenixRTC.browser === 'Firefox') {
            removeTurnsServers(config);
        }

        return config;
    }

    function removeTurnsServers(config) {
        if (!config) {
            return config;
        }

        _.forEach(config.iceServers, function(server) {
            server.urls = _.filter(server.urls, function(url) {
                return !_.startsWith(url, 'turns');
            });
        });

        return config;
    }

    var setGroupLineOrderToMatchMediaSectionOrder = function(sdp) {
        var groupLineSegment = sdp.match(/(?=a=group:BUNDLE).*/);
        var mediaSegmentNamesString = _.get(_.get(groupLineSegment, [0], '').split('a=group:BUNDLE '), [1], '');
        var mediaSegmentNames = mediaSegmentNamesString.split(' ');

        var sortedMediaSegmentNames = mediaSegmentNames.sort(function(nameA, nameB) {
            return sdp.indexOf('m=' + nameA) > sdp.indexOf('m=' + nameB);
        });

        if (sortedMediaSegmentNames.length > 0) {
            sdp = sdp.replace(mediaSegmentNamesString, sortedMediaSegmentNames.join(' '));
        }

        return sdp;
    };

    // Shim required. Webrtc adapter successfully shims but breaks Edge.
    var shimPeerConnectionGetStreams = function(peerConnection) {
        if (!_.isUndefined(peerConnection.onaddstream)) {
            return;
        }

        var remoteStreams = [];
        var localStreams = [];

        _.addEventListener(peerConnection, 'track', function(event) {
            _.forEach(event.streams, function(stream) {
                if (!_.includes(remoteStreams, stream)) {
                    remoteStreams.push(stream);
                }
            });
        });

        peerConnection.getRemoteStreams = function getRemoteStreams() {
            return remoteStreams;
        };

        peerConnection.getLocalStreams = function getLocalStreams() {
            return localStreams;
        };

        peerConnection.addStream = function addStream(stream) {
            if (!_.includes(localStreams, stream)) {
                localStreams.push(stream);
            }

            _.forEach(stream.getTracks(), function(track) {
                peerConnection.addTrack(track, stream);
            });
        };
    };

    return PCast;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable) {
    'use strict';

    function Event() {
        this._listeners = [];
    }

    Event.prototype.fire = function(args, context) {
        fireEvent.call(this, args, context);
    };

    Event.prototype.fireAsync = function(args, context, callback) {
        fireEvent.call(this, args, context, callback || function() {});
    };

    Event.prototype.listen = function(listener) {
        var that = this;

        assert.isFunction(listener, 'listener');

        that._listeners.push(listener);

        return new disposable.Disposable(function() {
            that._listeners = _.remove(that._listeners, function(item) {
                return item === listener;
            });
        });
    };

    Event.prototype.size = function() {
        return this._listeners.length;
    };

    Event.prototype.dispose = function() {
        this._listeners = [];
    };

    Event.prototype.toString = function() {
        return 'Event|' + this.size();
    };

    function fireEvent(args, context, asyncCallback) {
        var that = this;

        if (_.isNullOrUndefined(args)) {
            args = [];
        }

        assert.isArray(args, 'args');

        var notifyListeners = function notifyListeners() {
            _.forEach(that._listeners, function(listener) {
                listener.apply(context, args);
            });
        };

        if (asyncCallback) {
            setTimeout(function() {
                notifyListeners();
                asyncCallback();
            }, 0);
        } else {
            notifyListeners();
        }
    }

    return Event;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable) {
    'use strict';

    function Observable(initialValue, beforeChange) {
        this.latestValue = null;
        this.subscribeCallbacks = {};
        this.subscriptionTimeout = 100;
        this.subscriptionCount = 0;
        this.resetOnChange = false;
        this.lastChangeTime = 0;
        this.isPendingChanges = false;
        this.beforeChange = beforeChange;

        setLatestValue.call(this, initialValue);
    }

    Observable.prototype.getValue = function getValue() {
        return clone(this.latestValue);
    };

    Observable.prototype.setValue = function setValue(value) {
        if (value !== this.latestValue) {
            setLatestValue.call(this, value);
            onSubscribeCallback.call(this, this.subscriptionTimeout);
        }
    };

    Observable.prototype.subscribe = function subscribe(callback, options) {
        assert.isFunction(callback, 'callback');

        if (options) {
            assert.isObject(options, 'options');
        }

        var that = this;
        var key = _.uniqueId();
        var listenForChanges;

        that.subscribeCallbacks[key] = callback;
        that.subscriptionCount += 1;

        if (options) {
            if (options.initial === 'notify') {
                onSubscribeCallback.call(that, that.subscriptionTimeout, true);
            }

            if (options.listenForChanges) {
                listenForChanges = setInterval(function() {
                    var valueAtInterval = options.listenForChanges.callback();

                    if (valueAtInterval !== that.latestValue) {
                        that.setValue(valueAtInterval);
                    }
                }, options.listenForChanges.timeout);
            }
        }

        return new disposable.Disposable(function dispose() {
            delete that.subscribeCallbacks[key];

            if (listenForChanges) {
                clearInterval(listenForChanges);

                listenForChanges = null;
            }

            that.subscriptionCount -= 1;
        });
    };

    Observable.prototype.extend = function extend(options) {
        assert.isObject(options, 'options');

        switch (options.method) {
        case 'notifyWhenChangesStop':
            this.subscriptionTimeout = options.timeout;
            this.resetOnChange = true;

            break;
        case 'notifyAtFixedRate':
            this.subscriptionTimeout = options.timeout;

            break;
        default:
            break;
        }

        if (_.isNumber(options.rateLimit)) {
            this.subscriptionTimeout = options.rateLimit;
        }

        return this;
    };

    function clone(value) {
        if (typeof value === 'undefined' || value === null) {
            return value;
        }

        // Necessary for observable array. Subsequent comparison must not be equal in order to trigger updates.
        if (_.isArray(value)) {
            return value.slice();
        }

        return value;
    }

    function setLatestValue(value) {
        var valueToSet = value;

        if (this.beforeChange) {
            valueToSet = this.beforeChange(value);
        }

        this.latestValue = clone(valueToSet);
    }

    function onSubscribeCallback(timeoutLength, noTimeout) {
        this.lastChangeTime = _.now();

        if (!this.isPendingChanges && this.subscriptionCount !== 0) {
            this.isPendingChanges = true;

            if (noTimeout) {
                return notifySubscribers.call(this);
            }

            continueAfterTimeout.call(this, timeoutLength);
        }
    }

    function continueAfterTimeout(timeoutLength) {
        var that = this;

        setTimeout(function() {
            var timeElapsedSinceLastChange = _.now() - that.lastChangeTime;

            if (that.resetOnChange && timeElapsedSinceLastChange < that.subscriptionTimeout) {
                continueAfterTimeout.call(that, that.subscriptionTimeout - timeElapsedSinceLastChange);
            } else {
                notifySubscribers.call(that);
            }
        }, timeoutLength);
    }

    function notifySubscribers() {
        try {
            executeSubscriptionCallbacks.call(this);
        } finally {
            this.isPendingChanges = false;
        }
    }

    function executeSubscriptionCallbacks() {
        var that = this;

        _.forOwn(that.subscribeCallbacks, function(callback) {
            if (_.isFunction(callback)) {
                callback(that.latestValue);
            }
        });
    }

    return Observable;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(85)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(detectBrowser) {
    return detectBrowser;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var shakaEnums = {
        errorSeverity: {
            recoverable: {
                id: 1,
                name: 'RECOVERABLE'
            },
            critical: {
                id: 2,
                name: 'CRITICAL'
            }
        }
    };

    return shakaEnums;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(11),
    __webpack_require__(18),
    __webpack_require__(19),
    __webpack_require__(28),
    __webpack_require__(2),
    __webpack_require__(32)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, phenixWebPlayer, AdminApiProxyClient, UserMediaResolver, PCast, rtc, shakaEnums) {
    'use strict';

    var unauthorizedStatus = 'unauthorized';
    var capacityBackoffTimeout = 1000;
    var defaultPrerollSkipDuration = 500;
    var defaultUserActionOnlineTimeout = 20000;
    var defaultReconnectOptions = {
        maxOfflineTime: 3 * 60 * 1000,
        maxReconnectFrequency: 60 * 1000
    };

    function PCastExpress(options) {
        assert.isObject(options, 'options');

        if (options.authToken) {
            assert.isStringNotEmpty(options.authToken, 'options.authToken');
        }

        if (options.onError) {
            assert.isFunction(options.onError, 'options.onError');
        }

        if (!_.isNullOrUndefined(options.onlineTimeout)) {
            assert.isNumber(options.onlineTimeout, 'options.onlineTimeout');

            if (options.onlineTimeout < 0) {
                throw new Error('"options.onlineTimeout" must be a positive number');
            }
        }

        if (options.reconnectOptions) {
            assert.isObject(options.reconnectOptions, 'options.reconnectOptions');
            assert.isNumber(options.reconnectOptions.maxOfflineTime, 'options.reconnectOptions.maxOfflineTime');
            assert.isNumber(options.reconnectOptions.maxReconnectFrequency, 'options.reconnectOptions.maxReconnectFrequency');
        }

        if (options.adminApiProxyClient) {
            assert.isObject(options.adminApiProxyClient, 'options.adminApiProxyClient');
            assert.isFunction(options.adminApiProxyClient.createAuthenticationToken, 'options.adminApiProxyClient.createAuthenticationToken');
        }

        this._pcastObservable = new observable.Observable(null).extend({rateLimit: 0});
        this._subscribers = {};
        this._publishers = {};
        this._adminApiProxyClient = options.adminApiProxyClient || new AdminApiProxyClient();
        this._isInstantiated = false;
        this._reauthCount = 0;
        this._reconnectCount = 0;
        this._authToken = options.authToken;
        this._onError = options.onError;
        this._options = options;
        this._onlineTimeout = _.isNumber(options.onlineTimeout) ? options.onlineTimeout : defaultUserActionOnlineTimeout;
        this._reconnectOptions = options.reconnectOptions || defaultReconnectOptions;
        this._logger = null;
        this._ignoredStreamEnds = {};

        if (!options.adminApiProxyClient) {
            this._adminApiProxyClient.setBackendUri(options.backendUri);
            this._adminApiProxyClient.setAuthenticationData(options.authenticationData);
        }

        instantiatePCast.call(this);

        // After logger is instantiated
        if (!options.adminApiProxyClient) {
            if (options.backendUri) {
                this._logger.warn('Passing options.backendUri is deprecated. Please create an instance of the sdk.net.AdminApiProxyClient and pass that instead');
            }

            if (options.authenticationData) {
                this._logger.warn('Passing options.authenticationData is deprecated. Please create an instance of the sdk.net.AdminApiProxyClient and pass that instead');
            }
        }
    }

    PCastExpress.prototype.dispose = function dispose() {
        if (this._listedForCriticalNetworkRecoveryDisposable) {
            this._listedForCriticalNetworkRecoveryDisposable.dispose();
            this._listedForCriticalNetworkRecoveryDisposable = null;
        }

        if (this._pcastObservable.getValue()) {
            this._pcastObservable.getValue().stop();
            this._pcastObservable.setValue(null);
        }

        if (_.isNumber(this._instantiatePCastTimeout)) {
            clearTimeout(this._instantiatePCastTimeout);
            this._instantiatePCastTimeout = null;
        }

        this._adminApiProxyClient.dispose();

        this._reconnectCount = 0;
        this._reauthCount = 0;

        this._logger.info('Disposed PCast Express Instance');
    };

    PCastExpress.prototype.getPCast = function getPCast() {
        return this._pcastObservable.getValue();
    };

    PCastExpress.prototype.getPCastObservable = function() {
        return this._pcastObservable;
    };

    PCastExpress.prototype.getAdminAPI = function getAdminAPI() {
        return this._adminApiProxyClient;
    };

    PCastExpress.prototype.getUserMedia = function(options, callback) {
        var that = this;

        assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        assert.isFunction(callback, 'callback');

        if (options.resolution) {
            assert.isNumber(options.resolution, 'options.resolution');
        }

        if (options.frameRate) {
            assert.isNumber(options.frameRate, 'options.frameRate');
        }

        if (options.aspectRatio) {
            assert.isStringNotEmpty(options.aspectRatio, 'options.aspectRatio');
        }

        if (options.onResolveMedia) {
            assert.isFunction(options.onResolveMedia, 'options.onResolveMedia');
        }

        if (options.onScreenShare) {
            assert.isFunction(options.onScreenShare, 'options.onScreenShare');
        }

        if (that._pcastObservable.getValue()) {
            return resolveUserMedia.call(that, that._pcastObservable.getValue(), options, callback);
        }

        var pcastSubscription = that._pcastObservable.subscribe(function(pcast) {
            if (!pcast) {
                return;
            }

            pcastSubscription.dispose();

            resolveUserMedia.call(that, pcast, options, callback);
        });
    };

    PCastExpress.prototype.publish = function publish(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        if (options.mediaConstraints) {
            assert.isObject(options.mediaConstraints, 'options.mediaConstraints');
        } else {
            assert.isObject(options.userMediaStream, 'options.userMediaStream');
        }

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            if (options.userMediaStream) {
                return getStreamingTokenAndPublish.call(that, options.userMediaStream, options, false, callback);
            }

            that.getUserMedia(options, function(error, response) {
                if (error) {
                    return callback(error);
                }

                if (response.status !== 'ok') {
                    return callback(null, response);
                }

                getStreamingTokenAndPublish.call(that, response.userMedia, options, true, callback);
            });
        }, options.isContinuation);
    };

    var connectOptionCapabilities = ['streaming', 'low-latency', 'on-demand', 'uld', 'vvld', 'vld', 'ld', 'sd', 'hd', 'fhd', 'uhd'];

    PCastExpress.prototype.publishRemote = function publishRemote(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isStringNotEmpty(options.streamUri, 'options.streamUri');

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        if (options.mediaConstraints) {
            throw new Error('Invalid argument: mediaConstraints, passed on publishRemote. Local media not allowed when publishing remote content.');
        }

        if (options.videoElement) {
            throw new Error('May not view remote stream publisher. Please subscribe to view.');
        }

        if (options.prerollSkipDuration) {
            assert.isNumber(options.prerollSkipDuration, 'options.prerollSkipDuration');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.frameRate) {
            assert.isObject(options.frameRate, 'options.frameRate');

            if (options.frameRate.exact) {
                assert.isNumber(options.frameRate.exact, 'options.frameRate.exact');
            }

            if (options.frameRate.max) {
                assert.isNumber(options.frameRate.max, 'options.frameRate.max');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var remoteOptions = _.assign({
                connectOptions: [],
                capabilities: []
            }, options);

            if (!_.includes(remoteOptions.capabilities, 'publish-uri')) {
                remoteOptions.capabilities.push('publish-uri');
            }

            _.forEach(connectOptionCapabilities, function(capability) {
                if (_.includes(remoteOptions.capabilities, capability)) {
                    remoteOptions.connectOptions.push('publisher-capability=' + capability);
                }
            });

            if (options.frameRate && options.frameRate.exact) {
                remoteOptions.connectOptions.push('source-uri-video-fps=' + options.frameRate.exact);
            }

            if (options.frameRate && options.frameRate.max) {
                remoteOptions.connectOptions.push('source-uri-video-fps-max=' + options.frameRate.max);
            }

            remoteOptions.connectOptions.push('source-uri-preroll-skip-duration=' + (_.isNumber(options.prerollSkipDuration) ? options.prerollSkipDuration : defaultPrerollSkipDuration).toString());

            getStreamingTokenAndPublish.call(that, remoteOptions.streamUri, remoteOptions, false, callback);
        });
    };

    PCastExpress.prototype.publishStreamToExternal = function publishStreamToExternal(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isStringNotEmpty(options.streamId, 'options.streamId');
        assert.isStringNotEmpty(options.externalUri, 'options.externalUri');

        if (options.capabilities) {
            assert.isArray(options.capabilities, 'options.capabilities');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        if (options.mediaConstraints) {
            throw new Error('Invalid argument: mediaConstraints, passed on publishStreamToExternal. Local media not allowed when publishing remote content.');
        }

        if (options.videoElement) {
            throw new Error('May not view remote stream publisher. Please subscribe to view.');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            var remoteOptions = _.assign({
                connectOptions: [],
                capabilities: []
            }, options);

            if (!_.includes(remoteOptions.capabilities, 'egress')) {
                remoteOptions.capabilities.push('egress');
            }

            if (!_.includes(remoteOptions.capabilities, 'egress-own-stream')) {
                remoteOptions.capabilities.push('egress-own-stream');
            }

            getStreamingTokenAndPublish.call(that, remoteOptions.externalUri, remoteOptions, false, callback);
        });
    };

    PCastExpress.prototype.publishScreen = function publishScreen(options, callback) {
        var publishScreenOptions = _.assign({mediaConstraints: {screen: true}}, options);

        _.set(publishScreenOptions, ['monitor', 'options'], _.assign({}, {
            monitorFrameRate: false,
            videoBitRateThreshold: 100,
            conditionCountForNotificationThreshold: 8
        }, _.get(publishScreenOptions, ['monitor', 'options'], {})));

        return this.publish(publishScreenOptions, callback);
    };

    PCastExpress.prototype.subscribe = function subscribe(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');
        assert.isStringNotEmpty(options.streamId, 'options.streamId');
        assert.isObject(options.capabilities, 'options.capabilities');

        if (options.videoElement) {
            assert.isObject(options.videoElement, 'options.videoElement');
        }

        if (options.monitor) {
            assert.isObject(options.monitor, 'options.monitor');
            assert.isFunction(options.monitor.callback, 'options.monitor.callback');

            if (options.monitor.options) {
                assert.isObject(options.monitor.options, 'options.monitor.options');
            }
        }

        if (options.streamToken) {
            assert.isStringNotEmpty(options.streamToken, 'options.streamToken');
        }

        if (options.subscriberOptions) {
            assert.isObject(options.subscriberOptions, 'options.subscriberOptions');
        }

        var that = this;

        this.waitForOnline(function(error) {
            if (error) {
                that._logger.error('Failed to subscribe after error waiting for online status', error);

                return callback(error);
            }

            if (options.streamToken) {
                return subscribeToStream.call(that, options.streamToken, options, callback);
            }

            that._logger.info('[%s] Generating stream token for subscribing to origin [%s]', that._pcastObservable.getValue().getProtocol().getSessionId(), options.streamId);

            that._adminApiProxyClient.createStreamTokenForSubscribing(that._pcastObservable.getValue().getProtocol().getSessionId(), options.capabilities, options.streamId, null, function(error, response) {
                if (error) {
                    that._logger.error('Failed to create stream token for subscribing', error);

                    return callback(error);
                }

                if (response.status !== 'ok') {
                    that._logger.warn('Failed to create stream token for subscribing with status [%s]', response.status);

                    return callback(null, response);
                }

                subscribeToStream.call(that, response.streamToken, options, callback);
            });
        }, options.isContinuation);
    };

    PCastExpress.prototype.subscribeToScreen = function subscribeToScreen(options, callback) {
        var subscribeToScreenOptions = _.assign({}, options);

        _.set(subscribeToScreenOptions, ['monitor', 'options'], _.assign({}, {
            monitorFrameRate: false,
            videoBitRateThreshold: 100,
            conditionCountForNotificationThreshold: 8
        }, _.get(subscribeToScreenOptions, ['monitor', 'options'], {})));

        return this.subscribe(subscribeToScreenOptions, callback);
    };

    PCastExpress.prototype.waitForOnline = function waitForOnline(callback, isNotUserAction) {
        assert.isFunction(callback, 'callback');

        if (this._pcastObservable.getValue() && this._pcastObservable.getValue().getStatus() === 'online') {
            return callback();
        }

        var that = this;
        var disposeOfWaitTimeout = isNotUserAction ? _.get(that._reconnectOptions, ['maxOfflineTime']) : this._onlineTimeout;
        var pcastSubscription = null;
        var statusSubscription = null;
        var onlineTimeout = setTimeout(function() {
            that._logger.info('Disposing of Express Online listener after [%s] ms', disposeOfWaitTimeout);

            if (pcastSubscription) {
                pcastSubscription.dispose();
            }

            if (statusSubscription) {
                statusSubscription.dispose();
            }

            callback(new Error('timeout'));
        }, disposeOfWaitTimeout);

        this._logger.info('Waiting for Online status before continuing. Timeout set to [%s]', disposeOfWaitTimeout);

        var subscribeToStatusChange = function(pcast) {
            if (statusSubscription) {
                statusSubscription.dispose();
            }

            if (!pcast) {
                return;
            }

            statusSubscription = pcast.getObservableStatus().subscribe(function(status) {
                if (status !== 'online') {
                    return;
                }

                clearTimeout(onlineTimeout);
                statusSubscription.dispose();
                pcastSubscription.dispose();

                return callback();
            }, {initial: 'notify'});
        };

        if (this._pcastObservable.getValue()) {
            subscribeToStatusChange(this._pcastObservable.getValue());
        }

        pcastSubscription = this._pcastObservable.subscribe(subscribeToStatusChange);
    };

    function instantiatePCast() {
        var that = this;

        if (!this._pcastObservable.getValue()) {
            var pcastOptions = _.assign({logger: this._logger}, this._options);

            this._pcastObservable.setValue(new PCast(pcastOptions));
        }

        if (!this._logger) {
            this._logger = this._pcastObservable.getValue().getLogger();
        }

        if (!this._pcastStatusSubscription) {
            this._pcastStatusSubscription = this._pcastObservable.getValue().getObservableStatus().subscribe(_.bind(onPCastStatusChange, this));
        }

        if (this._authToken) {
            return this._pcastObservable.getValue().start(this._authToken, _.noop, _.noop, _.noop);
        }

        this._adminApiProxyClient.createAuthenticationToken(function(error, response) {
            if (error && error.message === 'timeout') {
                return onPCastStatusChange.call(that, error.message);
            }

            if (error) {
                return handleError.call(that, error);
            }

            if (response.status !== 'ok') {
                return onPCastStatusChange.call(that, response.status);
            }

            if (!that._pcastObservable.getValue()) {
                return that._logger.warn('Unable to authenticate. PCast not instantiated.');
            }

            that._pcastObservable.getValue().start(response.authenticationToken, _.noop, _.noop, _.noop);
        });
    }

    function onPCastStatusChange(status) {
        var that = this;

        switch (status) {
        case 'timeout':
        case 'critical-network-issue':
            if (that._pcastObservable.getValue()) {
                that._pcastObservable.getValue().stop('recovery');
                that._pcastObservable.setValue(null);
            }

            if (that._pcastStatusSubscription) {
                that._pcastStatusSubscription.dispose();
                that._pcastStatusSubscription = null;
            }

            that._reconnectCount++;

            return instantiateWithBackoff.call(that);
        case 'reconnect-failed':
        case 'unauthorized':
            delete this._authToken;

            that._reauthCount++;

            if (that._reauthCount > 1) {
                return handleError.call(this, new Error(status));
            }

            that._logger.info('[Express] Attempting to create new authToken and re-connect after [%s] response', unauthorizedStatus);

            return getAuthTokenAndReAuthenticate.call(that);
        case 'capacity':
        case 'network-unavailable':
            that._reconnectCount++;

            return instantiateWithBackoff.call(that);
        case 'online':
            that._reauthCount = 0;
            that._reconnectCount = 0;

            if (!that._isInstantiated) {
                that._logger.info('Express API successfully instantiated');
            }

            that._isInstantiated = true;

            return;
        case 'reconnecting':
        case 'reconnected':
        case 'connecting':
            break; // Everything ok
        case 'offline':
            return;
        case 'failed':
        default:
            return handleError.call(that, new Error(status));
        }
    }

    function instantiateWithBackoff() {
        var that = this;
        var staticTimeout = Math.min(capacityBackoffTimeout * that._reconnectCount * that._reconnectCount, this._reconnectOptions.maxReconnectFrequency);
        var maxOffsetInSeconds = Math.min(staticTimeout / 10000, 5);
        var randomLinearOffset = Math.random() * maxOffsetInSeconds * 1000;
        var timeoutWithRandomOffset = staticTimeout + randomLinearOffset;

        this._logger.info('Waiting for [%s] ms before continuing to attempt to reconnect to PCast', timeoutWithRandomOffset);

        this._instantiatePCastTimeout = setTimeout(function() {
            if (!that._pcastObservable.getValue() || !that._pcastObservable.getValue().isStarted()) {
                return instantiatePCast.call(that);
            }

            return getAuthTokenAndReAuthenticate.call(that);
        }, timeoutWithRandomOffset);
    }

    function getAuthTokenAndReAuthenticate() {
        var that = this;

        this._adminApiProxyClient.createAuthenticationToken(function(error, response) {
            if (error && error.message === 'timeout') {
                return onPCastStatusChange.call(that, error.message);
            }

            if (error) {
                return handleError.call(that, error);
            }

            if (response.status !== 'ok') {
                return onPCastStatusChange.call(that, response.status);
            }

            if (!that._pcastObservable.getValue()) {
                return that._logger.warn('Unable to authenticate. PCast not instantiated.');
            }

            that._pcastObservable.getValue().reAuthenticate(response.authenticationToken);
        });
    }

    function handleError(e) {
        if (!this._onError) {
            throw e;
        }

        this._onError(e);
    }

    function resolveUserMedia(pcast, options, callback) {
        var userMediaResolver = new UserMediaResolver(pcast, {
            aspectRatio: options.aspectRatio,
            resolutionHeight: options.resolution,
            frameRate: options.frameRate,
            resolutionSelectionStrategy: options.resolutionSelectionStrategy,
            onScreenShare: function(screenOptions) {
                screenOptions = options.onScreenShare ? options.onScreenShare(screenOptions) : screenOptions;

                if (screenOptions.resolution) {
                    assert.isNumber(screenOptions.resolution, 'clientOptions.resolution');
                }

                if (screenOptions.frameRate) {
                    assert.isNumber(screenOptions.frameRate, 'screenOptions.frameRate');
                }

                if (screenOptions.aspectRatio) {
                    assert.isStringNotEmpty(screenOptions.aspectRatio, 'screenOptions.aspectRatio');
                }

                return _.assign({resolutionHeight: screenOptions.resolution}, screenOptions);
            }
        });

        userMediaResolver.getUserMedia(options.mediaConstraints, function(error, response) {
            if (error) {
                return callback(error);
            }

            if (options.onResolveMedia) {
                options.onResolveMedia(response.options);
            }

            callback(null, _.assign({status: 'ok'}, response));
        });
    }

    function getStreamingTokenAndPublish(userMediaOrUri, options, cleanUpUserMediaOnStop, callback) {
        var that = this;

        assert.isArray(options.capabilities, 'options.capabilities');

        if (options.streamToken) {
            return publishUserMediaOrUri.call(that, options.streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback);
        }

        that.waitForOnline(function(error) {
            if (error) {
                that._logger.error('Failed to create stream token for publishing after waiting for online status', error);

                return callback(error);
            }

            var sessionId = that._pcastObservable.getValue().getProtocol().getSessionId();
            var isEgress = _.includes(options.capabilities, 'egress');
            var generateStreamToken = _.bind(that._adminApiProxyClient.createStreamTokenForPublishing, that._adminApiProxyClient, sessionId, options.capabilities);

            if (isEgress) {
                generateStreamToken = _.bind(that._adminApiProxyClient.createStreamTokenForPublishingToExternal, that._adminApiProxyClient, sessionId, options.capabilities, options.streamId);
            }

            that._logger.info('[%s] Creating stream token for publishing', sessionId);

            generateStreamToken(function(error, response) {
                if (error) {
                    that._logger.error('[%s] Failed to create stream token for publishing', sessionId, error);

                    return callback(error);
                }

                if (response.status !== 'ok') {
                    that._logger.warn('[%s] Failed to create stream token for publishing with status [%s]', sessionId, response.status);

                    return callback(null, response);
                }

                publishUserMediaOrUri.call(that, response.streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback);
            });
        }, options.isContinuation);
    }

    function publishUserMediaOrUri(streamToken, userMediaOrUri, options, cleanUpUserMediaOnStop, callback) {
        var that = this;
        var hasAlreadyAttachedMedia = false;
        var cachedPublisher = null;

        if (options.tags) {
            assert.isArray(options.tags, 'options.tags');
        }

        if (options.connectOptions) {
            assert.isArray(options.connectOptions, 'options.connectOptions');
        }

        var publishCallback = function publishCallback(pcast, status, publisher) {
            var retryPublisher = function retryPublisher(reason) {
                var placeholder = _.uniqueId();
                var optionsWithToken = _.assign({
                    streamToken: streamToken,
                    isContinuation: true
                }, options);

                that._publishers[placeholder] = true;

                that._logger.warn('Retrying publisher after failure with reason [%s]', reason);

                that._ignoredStreamEnds[publisher.getStreamId()] = true;

                if (reason === 'camera-track-failure') {
                    publisher.stop(reason, false);
                    that.publish(options, callback);
                } else {
                    publisher.stop(reason, true);
                    getStreamingTokenAndPublish.call(that, userMediaOrUri, optionsWithToken, cleanUpUserMediaOnStop, callback);
                }

                delete that._publishers[placeholder];
            };

            if ((status === unauthorizedStatus && (options.streamToken || !options.authFailure)) || status === 'timeout') {
                that._logger.info('[Express] Attempting to create new streamToken and re-publish after [%s] response', unauthorizedStatus);

                var reAuthOptions = _.assign({
                    isContinuation: true,
                    authFailure: true
                }, options);

                delete reAuthOptions.streamToken;

                return getStreamingTokenAndPublish.call(that, userMediaOrUri, reAuthOptions, cleanUpUserMediaOnStop, callback);
            }

            if (status !== 'ok') {
                that._logger.warn('Failure to publish with status [%s]', status);

                if (cachedPublisher) {
                    that._ignoredStreamEnds[cachedPublisher.getStreamId()] = true;
                }

                return callback(null, {status: status});
            }

            delete options.authFailure;

            that._publishers[publisher.getStreamId()] = publisher;

            cachedPublisher = publisher;

            if (options.videoElement && !hasAlreadyAttachedMedia) {
                rtc.attachMediaStream(options.videoElement, userMediaOrUri);

                hasAlreadyAttachedMedia = true;
            }

            var isPublisher = true;
            var noopCallback = function() {};
            var publisherEndedCallback = _.bind(onPublisherOrStreamEnd, that, noopCallback, retryPublisher, isPublisher);

            if (options.monitor) {
                var monitorCallback = _.bind(onMonitorCallback, that, options.monitor.callback, retryPublisher);

                publisher.monitor(options.monitor.options || {}, monitorCallback);

                publisherEndedCallback = _.bind(onPublisherOrStreamEnd, that, options.monitor.callback, retryPublisher, isPublisher);
            }

            publisher.setPublisherEndedCallback(publisherEndedCallback);

            var expressPublisher = createExpressPublisher.call(that, publisher, options.videoElement, cleanUpUserMediaOnStop);

            callback(null, {
                status: 'ok',
                publisher: expressPublisher
            });
        };

        that.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            that._pcastObservable.getValue().publish(streamToken, userMediaOrUri, publishCallback, options.tags, {connectOptions: options.connectOptions});
        }, options.isContinuation);
    }

    function subscribeToStream(streamToken, options, callback) {
        var that = this;
        var cachedSubsciber = null;

        var handleSubscribe = function(pcast, status, subscriber) {
            var retrySubscriber = function retrySubscriber(reason) {
                var placeholder = _.uniqueId();
                var retryOptions = _.assign({isContinuation: true}, options);

                that._subscribers[placeholder] = true;
                that._ignoredStreamEnds[subscriber.getStreamId()] = true;

                subscriber.stop(reason);

                that._logger.warn('[%s] Stream failure occurred with reason [%s]. Attempting to recover from failure.', options.streamId, reason);

                subscribeToStream.call(that, streamToken, retryOptions, callback);

                delete that._subscribers[placeholder];
            };

            if ((status === unauthorizedStatus && (options.streamToken || !options.authFailure)) || status === 'timeout') {
                that._logger.info('[%s] [Express] Attempting to create new streamToken and re-subscribe after [%s] response', options.streamId, unauthorizedStatus);

                var reAuthOptions = _.assign({
                    isContinuation: true,
                    authFailure: true
                }, options);

                delete reAuthOptions.streamToken;

                return that.subscribe(reAuthOptions, callback);
            }

            if (status === 'streaming-not-ready') {
                that._logger.warn('Failure to subscribe with status [%s]. Try again in a few seconds.', status);

                return callback(null, {
                    status: status,
                    retry: _.bind(retrySubscriber, that, status)
                });
            }

            if (status !== 'ok') {
                that._logger.warn('Failure to subscribe with status [%s]', status);

                if (cachedSubsciber) {
                    that._ignoredStreamEnds[cachedSubsciber.getStreamId()] = true;
                }

                return callback(null, {status: status});
            }

            delete options.authFailure;

            that._subscribers[subscriber.getStreamId()] = subscriber;

            var renderer;

            cachedSubsciber = subscriber;

            if (options.videoElement) {
                renderer = subscriber.createRenderer();

                renderer.start(options.videoElement);
            }

            var isPublisher = false;
            var noopCallback = _.noop;
            var subscriberEndedCallback = _.bind(onPublisherOrStreamEnd, that, noopCallback, retrySubscriber, isPublisher);

            if (options.monitor) {
                var monitorCallback = _.bind(onMonitorCallback, that, options.monitor.callback, retrySubscriber);

                subscriber.monitor(options.monitor.options || {}, monitorCallback);

                subscriberEndedCallback = _.bind(onPublisherOrStreamEnd, that, options.monitor.callback, retrySubscriber, isPublisher);
            }

            subscriber.setStreamEndedCallback(subscriberEndedCallback);

            var expressSubscriber = createExpressSubscriber.call(that, subscriber, renderer);
            var subscribeResponse = {
                status: 'ok',
                mediaStream: expressSubscriber
            };

            subscriber.setStreamErrorCallback(function(playerRenderer, errorType, error) {
                if (errorType === 'real-time' && error.message === 'connection-timeout') {
                    return retrySubscriber.call(that, error.message);
                }

                if (errorType === 'shaka' && error.severity !== shakaEnums.errorSeverity.critical.id) {
                    return; // Ignore error
                }

                if (errorType === 'phenix-player' && error.severity === phenixWebPlayer.errors.severity.RECOVERABLE) {
                    that._logger.warn('[%s] Recoverable error occurred while playing stream with Express API. Attempting to subscribe again.', expressSubscriber.getStreamId(), error);

                    var reAuthOptions = _.assign({isContinuation: true}, options);

                    delete reAuthOptions.streamToken;

                    return that.subscribe(reAuthOptions, callback);
                }

                that._logger.warn('[%s] Error occurred while playing stream with Express API. Stopping stream.', expressSubscriber.getStreamId(), error);

                expressSubscriber.stop();

                return callback(error);
            });

            if (renderer) {
                subscribeResponse.renderer = renderer;
            }

            callback(null, subscribeResponse);
        };

        that.waitForOnline(function(error) {
            if (error) {
                return callback(error);
            }

            that._pcastObservable.getValue().subscribe(streamToken, handleSubscribe, options.subscriberOptions);
        }, options.isContinuation);
    }

    function createExpressPublisher(publisher, videoElement, cleanUpUserMediaOnStop) {
        var publisherStop = _.bind(publisher.stop, publisher);

        publisher.stop = function(reason, isInternal) {
            publisherStop(reason);

            if (videoElement) {
                videoElement.src = '';
                videoElement.srcObject = null;
            }

            if (cleanUpUserMediaOnStop && publisher.getStream() && !isInternal) {
                var nativeMediaStream = publisher.getStream();

                if (nativeMediaStream) {
                    nativeMediaStream.getTracks().forEach(function(track) {
                        track.stop();
                    });
                }
            }
        };

        publisher.enableAudio = function() {
            return setStreamAudioTracksState(publisher.getStream(), true);
        };

        publisher.disableAudio = function() {
            return setStreamAudioTracksState(publisher.getStream(), false);
        };

        publisher.enableVideo = function() {
            return setStreamVideoTracksState(publisher.getStream(), true);
        };

        publisher.disableVideo = function() {
            return setStreamVideoTracksState(publisher.getStream(), false);
        };

        // Publisher Ended Callback handled with normal callback route for express
        publisher.setPublisherEndedCallback = function() {};

        return publisher;
    }

    function createExpressSubscriber(subscriber, renderer) {
        var subscriberStop = _.bind(subscriber.stop, subscriber);

        subscriber.stop = function(reason) {
            if (renderer) {
                renderer.stop(reason);
            }

            subscriberStop(reason);
        };

        subscriber.enableAudio = function() {
            return setStreamAudioTracksState(subscriber.getStream(), true);
        };

        subscriber.disableAudio = function() {
            return setStreamAudioTracksState(subscriber.getStream(), false);
        };

        subscriber.enableVideo = function() {
            return setStreamVideoTracksState(subscriber.getStream(), true);
        };

        subscriber.disableVideo = function() {
            return setStreamVideoTracksState(subscriber.getStream(), false);
        };

        // Stream Ended Callback handled with normal callback route for express
        subscriber.setStreamEndedCallback = function() {};

        return subscriber;
    }

    function setStreamAudioTracksState(stream, newState) {
        if (!stream) {
            return;
        }

        setTracksEnabled(stream.getAudioTracks(), newState);

        return newState;
    }

    function setStreamVideoTracksState(stream, newState) {
        if (!stream) {
            return;
        }

        setTracksEnabled(stream.getVideoTracks(), newState);

        return newState;
    }

    function setTracksEnabled(tracks, enabled) {
        assert.isArray(tracks, 'tracks');

        _.forEach(tracks, function(track) {
            track.enabled = enabled;
        });
    }

    function onMonitorCallback(callback, retry, stream, reason, monitorEvent) { // eslint-disable-line no-unused-vars
        switch (reason) {
        case 'camera-track-failure':
        case 'client-side-failure':
            callback(null, _.assign({
                status: reason,
                retry: _.bind(retry, null, reason)
            }, monitorEvent));

            // Handle failure event, redo stream
            break;
        default:
            // No failure has occurred, handle monitor event
            break;
        }
    }

    function onPublisherOrStreamEnd(monitorCallback, retry, isPublisher, publisherOrStream, reason, description) {
        var response = {
            status: 'stream-ended',
            reason: reason,
            description: description
        };

        if (this._ignoredStreamEnds[publisherOrStream.getStreamId()]) {
            return this._logger.info('Ignoring stream end due to recovery in progress [%s]', publisherOrStream.getStreamId());
        }

        switch (reason) {
        case 'egress-setup-failed': // Bad input params
        case 'ended': // Normal operation
        case 'censored': // Forced to stop
            var endedResponse = {
                status: reason,
                reason: reason,
                description: description
            };

            if (isPublisher) {
                endedResponse.publisher = publisherOrStream;
            } else {
                endedResponse.mediaStream = publisherOrStream;
            }

            return monitorCallback(null, endedResponse);
        case 'custom':
            // Client ended publisher, do nothing
            return monitorCallback(null, response);
        case 'egress-failed':
        case 'capacity':
            // Don't inform the client, attempt to re-publish automatically after backoff
            return setTimeout(function() {
                return retry(reason);
            }, capacityBackoffTimeout);
        case 'failed':
        case 'maintenance':
            // Don't inform the client, attempt to re-publish automatically
            return retry(reason);
        case 'app-background':
        default:
            // Give client option to re-publish
            response.retry = retry;

            return monitorCallback(null, response);
        }
    }

    return PCastExpress;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    // ToDo: Add supported frame rates [30, 15]
    var aspectRatios = [
        {
            '16x9': [
                {2160: 3840}, // 4k (UHD)
                {1080: 1920}, // 1080p (FHD)
                {768: 1366}, //
                {720: 1280}, // 720p(HD)
                {576: 1024},
                {480: 853}, // 480p
                {360: 640}, // 360p (nHD)
                {180: 320}
            ]
        },
        {
            '4x3': [
                {1200: 1600}, // UXGA
                {1080: 1440},
                {720: 960},
                {600: 800}, // SVGA
                {576: 768},
                {480: 640}, // VGA
                {360: 480},
                {288: 352}, // CIF
                {240: 320}, // QVGA
                {144: 176}, // QCIF
                {120: 160} // QQVGA
            ]
        }
    ];
    var resolutionSelectionStrategies = {
        fallbackToLower: {
            id: 0,
            name: 'fallbackToLower'
        },
        fallbackToHigher: {
            id: 1,
            name: 'fallbackToHigher'
        },
        fallbackToLowerThenHigher: {
            id: 2,
            name: 'fallbackToLowerThenHigher'
        },
        exact: {
            id: 3,
            name: 'exact'
        }
    };

    function ResolutionProvider(options) {
        assert.isObject(options, 'options');

        if (options.resolutionSelectionStrategy) {
            assert.isValidType(options.resolutionSelectionStrategy, resolutionSelectionStrategies, 'options.resolutionSelectionStrategy');
        }

        if (options.aspectRatio) {
            assert.isStringNotEmpty(options.aspectRatio, 'options.aspectRatio');
        }

        if (options.resolutionHeight) {
            assert.isNumber(options.resolutionHeight, 'options.resolutionHeight');
        }

        if (options.frameRate) {
            assert.isNumber(options.frameRate, 'options.frameRate');
        }

        this._resolutionSelectionStrategy = options.resolutionSelectionStrategy || resolutionSelectionStrategies.fallbackToLowerThenHigher.name;
        this._defaultAspectRatio = options.aspectRatio || '16x9';
        this._defaultResolutionHeight = options.resolutionHeight || 720;
        this._defaultFrameRate = options.frameRate || 15;
    }

    ResolutionProvider.prototype.getDefaultResolution = function getDefaultResolution() {
        var aspectRatioHeights = getObjectValueInArray(this._defaultAspectRatio, aspectRatios);
        var width = getObjectValueInArray(this._defaultResolutionHeight, aspectRatioHeights) || this.calculateWidthByAspectRatio(this._defaultResolutionHeight, this._defaultAspectRatio);

        return {
            height: this._defaultResolutionHeight,
            width: width,
            aspectRatio: this._defaultAspectRatio
        };
    };

    ResolutionProvider.prototype.getDefaultFrameRate = function getDefaultFrameRate() {
        return this._defaultFrameRate;
    };

    ResolutionProvider.prototype.getNextResolution = function getNextResolution(height, aspectRatio) {
        assert.isNumber(height, 'height');
        assert.isStringNotEmpty(aspectRatio, 'aspectRatio');

        switch (this._resolutionSelectionStrategy) {
        case resolutionSelectionStrategies.fallbackToLower.name:
            return getNextLowestResolution.call(this, height, aspectRatio);
        case resolutionSelectionStrategies.fallbackToHigher.name:
            return getNextHighestResolution.call(this, height, aspectRatio);
        case resolutionSelectionStrategies.fallbackToLowerThenHigher.name:
            var nextResolution = null;

            if (height > this._defaultResolutionHeight) {
                nextResolution = getNextHighestResolution.call(this, height, aspectRatio);
            } else {
                nextResolution = getNextLowestResolution.call(this, height, aspectRatio);

                if (!nextResolution || !nextResolution.height) {
                    nextResolution = getNextHighestResolution.call(this, this._defaultResolutionHeight, this._defaultAspectRatio);
                }
            }

            return nextResolution;
        case resolutionSelectionStrategies.exact.name:
        default:
            return;
        }
    };

    ResolutionProvider.prototype.canResolveNextResolution = function() {
        return this._resolutionSelectionStrategy !== resolutionSelectionStrategies.exact.name;
    };

    ResolutionProvider.prototype.calculateWidthByAspectRatio = function calculateWidthByAspectRatio(height, aspectRatio) {
        switch (aspectRatio) {
        case '16x9':
            return roundUpToNearestEvenNumber((16 / 9) * height);
        case '4x3':
            return roundUpToNearestEvenNumber((4 / 3) * height);
        default:
            throw new Error('Aspect Ratio not supported');
        }
    };

    function roundUpToNearestEvenNumber(value) {
        assert.isNumber(value, 'value');

        return 2 * Math.floor((value + 1) / 2);
    }

    function getNextHighestResolution(height, aspectRatio) {
        var aspectRatioHeights = getObjectValueInArray(aspectRatio, aspectRatios);
        var aspectRatioIndex = getIndexInArray(aspectRatio, aspectRatios);
        var heightIndex = getIndexInArray(height.toString(), aspectRatioHeights);
        var isLargestHeight = heightIndex === 0;
        var isSmallestAspectRatio = aspectRatios.length - 1 === aspectRatioIndex;

        var newAspectRatio;
        var newAspectRatioHeights;
        var newHeight;
        var newWidth;

        if (!_.isNumber(heightIndex)) {
            heightIndex = getNextHighestKeyIndex(height, aspectRatioHeights);

            if (!heightIndex) {
                return;
            }
        } else {
            if (isLargestHeight) {
                if (isSmallestAspectRatio) {
                    return null;
                }

                aspectRatioIndex++;

                newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
                newAspectRatioHeights = getObjectValueInArray(newAspectRatio, aspectRatios);
                heightIndex = getNextHighestKeyIndex(this._defaultResolutionHeight, newAspectRatioHeights);
                newHeight = getIndexKey(heightIndex, aspectRatioHeights);
                newWidth = this.calculateWidthByAspectRatio(newHeight, newAspectRatio);

                return {
                    aspectRatio: newAspectRatio,
                    height: parseInt(newHeight),
                    width: parseInt(newWidth)
                };
            }

            heightIndex--;
        }

        newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
        newAspectRatioHeights = getIndexValue(aspectRatioIndex, aspectRatios);
        newHeight = getIndexKey(heightIndex, newAspectRatioHeights);
        newWidth = newAspectRatioHeights[heightIndex][newHeight];

        return {
            aspectRatio: newAspectRatio,
            height: parseInt(newHeight),
            width: parseInt(newWidth)
        };
    }

    function getNextLowestResolution(height, aspectRatio) {
        var aspectRatioHeights = getObjectValueInArray(aspectRatio, aspectRatios);
        var aspectRatioIndex = getIndexInArray(aspectRatio, aspectRatios);
        var heightIndex = getIndexInArray(height.toString(), aspectRatioHeights);
        var isSmallestHeight = heightIndex === aspectRatioHeights.length - 1;
        var isSmallestAspectRatio = aspectRatios.length - 1 === aspectRatioIndex;

        var newAspectRatio;
        var newAspectRatioHeights;
        var newHeight;
        var newWidth;

        if (!_.isNumber(heightIndex)) {
            heightIndex = getNextLowestKeyIndex(height, aspectRatioHeights);

            if (!heightIndex) {
                return;
            }
        } else {
            if (isSmallestHeight) {
                if (isSmallestAspectRatio) {
                    return null;
                }

                aspectRatioIndex++;

                newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
                newHeight = this._defaultResolutionHeight;
                newWidth = this.calculateWidthByAspectRatio(newHeight, newAspectRatio);

                return {
                    aspectRatio: newAspectRatio,
                    height: parseInt(newHeight),
                    width: parseInt(newWidth)
                };
            }

            heightIndex++;
        }

        newAspectRatio = getIndexKey(aspectRatioIndex, aspectRatios);
        newAspectRatioHeights = getIndexValue(aspectRatioIndex, aspectRatios);
        newHeight = getIndexKey(heightIndex, newAspectRatioHeights);
        newWidth = newAspectRatioHeights[heightIndex][newHeight];

        return {
            aspectRatio: newAspectRatio,
            height: parseInt(newHeight),
            width: parseInt(newWidth)
        };
    }

    function getObjectValueInArray(value, collection) {
        var valueObject = _.find(collection, function(item) {
            return item.hasOwnProperty(value);
        });

        return valueObject ? valueObject[value] : null;
    }

    function getIndexInArray(value, collection) {
        return _.findIndex(collection, function(item) {
            return item.hasOwnProperty(value);
        });
    }

    function getIndexKey(index, collection) {
        var keys = _.keys(collection[index]);

        return keys[0];
    }

    function getIndexValue(index, collection) {
        var keys = _.keys(collection[index]);

        return collection[index][keys[0]];
    }

    function getNextHighestKeyIndex(value, collection) {
        if ( _.keys(collection[0])[0] < value) {
            return null;
        }

        return _.reduce(collection, function(closestIndex, nextItem, index) {
            if (!closestIndex) {
                return index;
            }

            var currentClosestKey = _.keys(collection[closestIndex])[0];
            var nextKey = _.keys(nextItem)[0];

            if (nextKey < value) {
                return closestIndex;
            }

            return Math.abs(value - nextKey) < Math.abs(value - currentClosestKey) ? index : closestIndex;
        });
    }

    function getNextLowestKeyIndex(value, collection) {
        if ( _.keys(collection[collection.length - 1])[0] > value) {
            return null;
        }

        return _.reduce(collection, function(closestIndex, nextItem, index) {
            if (!closestIndex) {
                return index;
            }

            var currentClosestKey = _.keys(collection[closestIndex])[0];
            var nextKey = _.keys(nextItem)[0];

            if (nextKey > value) {
                return closestIndex;
            }

            return Math.abs(value - nextKey) < Math.abs(value - currentClosestKey) ? index : closestIndex;
        });
    }

    return ResolutionProvider;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(6),
    __webpack_require__(3),
    __webpack_require__(2),
    __webpack_require__(13),
    __webpack_require__(31),
    __webpack_require__(7),
    __webpack_require__(9),
    __webpack_require__(5),
    __webpack_require__(12)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, http, disposable, rtc, applicationActivityDetector, DetectBrowser, global, DimensionsChangedMonitor, streamEnums, FeatureDetector) {
    'use strict';

    var backgroundPauseChangeInterval = 1000;

    function PhenixRealTimeRenderer(streamId, streamSrc, streamTelemetry, options, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._streamSrc = streamSrc;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();
        this._browser = (new DetectBrowser(_.get(global, ['navigator', 'userAgent'], ''))).detect();
        this._wasPlaying = false;
        this._backgroudEventTimestamp = 0;
        this._pausedEventTimstamp = 0;

        this._disposables.add(applicationActivityDetector.onBackground(_.bind(recordWasPlaying, this)));
        this._disposables.add(applicationActivityDetector.onForeground(_.bind(resumeIfPossible, this)));

        this._onStalled = _.bind(stalled, this);
        this._onEnded = _.bind(ended, this);
    }

    PhenixRealTimeRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    PhenixRealTimeRenderer.prototype.start = function(elementToAttachTo) {
        var hasAudioTrack = !!_.find(this._streamSrc.getTracks(), function(track) {
            return track.kind === 'audio';
        });

        if (!this._options.canPlaybackAudio) {
            if (this._options.disableAudioIfNoOutputFound && this._options.forcedAudioDisabled) {
                this._logger.warn('[%s] Missing audio playback device. Audio has been disabled on stream. Try setting up an audio device and re-subscribe in order to receive audio.', this._streamId);
            } else if (!this._options.disableAudioIfNoOutputFound && hasAudioTrack) {
                this._logger.warn('[%s] Missing audio playback device. May experience audio and/or video failure. Try setting up an audio device OR pass the [disableAudioIfNoOutputFound] option when subscribing to disable audio playback when no devices are attached.', this._streamId);
            }
        }

        this._element = rtc.attachMediaStream(elementToAttachTo, this._streamSrc);

        this._disposables.add(this._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordRebuffering(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoPlayingAndPausing(elementToAttachTo));

        if (this._options.receiveAudio === false) {
            elementToAttachTo.muted = true;
        }

        _.addEventListener(elementToAttachTo, 'stalled', this._onStalled, false);
        _.addEventListener(elementToAttachTo, 'pause', this._onStalled, false);
        _.addEventListener(elementToAttachTo, 'suspend', this._onStalled, false);
        _.addEventListener(elementToAttachTo, 'ended', this._onEnded, false);

        this._dimensionsChangedMonitor.start(this, elementToAttachTo);

        return elementToAttachTo;
    };

    PhenixRealTimeRenderer.prototype.stop = function(reason) {
        this._dimensionsChangedMonitor.stop();

        this._disposables.dispose();

        if (this._element) {
            _.removeEventListener(this._element, 'stalled', this._onStalled, false);
            _.removeEventListener(this._element, 'pause', this._onStalled, false);
            _.removeEventListener(this._element, 'suspend', this._onStalled, false);
            _.removeEventListener(this._element, 'ended', this._onEnded, false);

            if (_.isFunction(this._element.pause)) {
                this._element.pause();
            }

            if (this._browser.browser === 'Edge') {
                this._element.src = '';
            }

            if (this._element.src && (this._browser.browser === 'IE')) {
                this._element.src = null;
            } else if (this._element.src) {
                this._element.src = '';
            }

            if (this._element.srcObject) {
                this._element.srcObject = null;
            }

            this._element = null;
        }

        this._logger.info('[%s] Phenix real-time renderer has been destroyed', this._streamId);

        this._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);
    };

    PhenixRealTimeRenderer.prototype.getStats = function() {
        if (!this._element) {
            return {
                width: 0,
                height: 0,
                currentTime: 0.0,
                lag: 0.0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;
        var lag = this._options.networkLag / 1000; // Check RTC stats instead

        return {
            width: this._element.videoWidth || this._element.width,
            height: this._element.videoHeight || this._element.height,
            currentTime: trueCurrentTime,
            lag: lag,
            networkState: this._element.networkState
        };
    };

    PhenixRealTimeRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    PhenixRealTimeRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        return this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function stalled(event) {
        var isLastBackgroundEventRecent = _.now() - this._backgroudEventTimestamp < backgroundPauseChangeInterval;

        if (event.type === 'pause' && isLastBackgroundEventRecent) {
            this._wasPlaying = true;
        }

        this._pausedEventTimstamp = _.now();

        this._logger.info('[%s] Loading Phenix Real-Time stream player stalled caused by [%s] event.', this._streamId, event.type);
    }

    function ended() {
        this._logger.info('[%s] Phenix Real-Time stream ended.', this._streamId);
    }

    function recordWasPlaying() {
        if (!this._element) {
            return;
        }

        var playing = false;
        var isLastPauseEventRecent = _.now() - this._pausedEventTimstamp < backgroundPauseChangeInterval;

        if (_.isBoolean(this._element.playing)) {
            playing = this._element.playing;
        } else if (_.isBoolean(this._element.paused)) {
            playing = !this._element.paused;
        }

        if (!playing && isLastPauseEventRecent) {
            playing = true;
        }

        this._wasPlaying = playing;
        this._backgroudEventTimestamp = _.now();
    }

    function resumeIfPossible() {
        if (!this._element) {
            return;
        }

        var that = this;

        this._backgroudEventTimestamp = 0;
        this._pausedEventTimstamp = 0;
        this._logger.info('foreground [%s] [%s]', this._wasPlaying, this._browser.browser);

        if (this._browser.browser === 'Safari' && FeatureDetector.isIOS() && this._wasPlaying && this._element && this._element.play) {
            var resume = function resume() {
                that._logger.info('Attempting to play video element after application was backgrounded and forcefully paused');
                that._element.play();
            };

            this._logger.info('Attempting to play video element after application was backgrounded');

            _.addEventListener(that._element, 'pause', resume);

            var timeoutId = setTimeout(function() {
                _.removeEventListener(that._element, 'pause', resume);
            }, backgroundPauseChangeInterval);

            this._disposables.add(new disposable.Disposable(function() {
                clearTimeout(timeoutId);
            }));

            this._element.play().catch(function(e) {
                that._logger.warn('Unable to resume playback after pause', e);
                that._namedEvents.fire(streamEnums.rendererEvents.userActionRequired.name, ['app-paused-by-background']);
                that._startFromBackground = _.now();
            });
        }
    }

    return PhenixRealTimeRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(2),
    __webpack_require__(3),
    __webpack_require__(13),
    __webpack_require__(14),
    __webpack_require__(23),
    __webpack_require__(20),
    __webpack_require__(35),
    __webpack_require__(12),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, rtc, disposable, applicationActivityDetector, PeerConnection, PeerConnectionMonitor, BitRateMonitor, PhenixRealTimeRenderer, FeatureDetector, streamEnums) {
    'use strict';

    var iceConnectionTimeout = 5000;

    function PhenixRealTimeStream(streamId, streamSrc, peerConnection, streamTelemetry, options, logger) {
        this._streamId = streamId;
        this._streamSrc = streamSrc;
        this._peerConnection = peerConnection;
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._logger = logger;
        this._renderers = [];
        this._dimensionsChangedMonitor = null;
        this._namedEvents = new event.NamedEvents();
        this._childrenStreams = [];
        this._limit = 0;
        this._backgroundMonitorEventCallback = null;
        this._disposables = new disposable.DisposableList();

        this._disposables.add(applicationActivityDetector.onForeground(_.bind(emitPendingBackgroundEvent, this)));

        var bandwidthAttribute = /(b=AS:([0-9]*)[\n\r]*)/gi;
        var bandwithAttribute = bandwidthAttribute.exec(peerConnection.remoteDescription);

        if (bandwithAttribute && bandwithAttribute.length >= 3) {
            this._limit = bandwithAttribute[2] * 1000;
        }

        _.addEventListener(peerConnection, 'iceconnectionstatechange', _.bind(onIceConnectionChange, this));
    }

    PhenixRealTimeStream.prototype.on = function(name, callback) {
        this._namedEvents.listen(name, callback);
    };

    PhenixRealTimeStream.prototype.createRenderer = function() {
        var that = this;

        var renderer = new PhenixRealTimeRenderer(this._streamId, this._streamSrc, this._streamTelemetry, this._options, this._logger);

        renderer.on(streamEnums.rendererEvents.error.name, function(type, error) {
            that._namedEvents.fire(streamEnums.streamEvents.playerError.name, [type, error]);
        });
        renderer.on(streamEnums.rendererEvents.ended.name, function(reason) {
            that._renderers = _.filter(that._renderers, function(storedRenderer) {
                return storedRenderer !== renderer;
            });

            if (that._renderers.length === 0) {
                that._streamTelemetry.stop();
                that._namedEvents.fire(streamEnums.streamEvents.playerEnded.name, [reason]);
            }
        });

        this._renderers.push(renderer);

        return renderer;
    };

    PhenixRealTimeStream.prototype.select = function select(trackSelectCallback) {
        assert.isFunction(trackSelectCallback, 'trackSelectCallback');
        assert.isFunction(rtc.global.MediaStream, 'rtc.global.MediaStream');

        var tracks = this._streamSrc.getTracks();
        var streamToAttach = new rtc.global.MediaStream();

        for (var i = 0; i < tracks.length; i++) {
            if (trackSelectCallback(tracks[i], i)) {
                streamToAttach.addTrack(tracks[i]);
            }
        }

        if (streamToAttach.getTracks().length === 0) {
            return this._logger.warn('No tracks selected');
        }

        var that = this;
        var newMediaStream = new PhenixRealTimeStream(this._streamId, streamToAttach, this._peerConnection, this._streamTelemetry, this._options, this._logger);

        newMediaStream.on(streamEnums.streamEvents.stopped.name, function(reason) {
            if (isStreamStopped(that._streamSrc)) {
                that._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);
            }
        });

        this._childrenStreams.push(newMediaStream);

        return newMediaStream;
    };

    PhenixRealTimeStream.prototype.setStreamEndedCallback = function setStreamEndedCallback(callback) {
        assert.isFunction(callback, 'callback');

        this._streamEndedCallback = callback;
    };

    PhenixRealTimeStream.prototype.setStreamErrorCallback = function setStreamErrorCallback(callback) {
        assert.isFunction(callback, 'callback');

        this._streamErrorCallback = callback;
    };

    PhenixRealTimeStream.prototype.streamEndedCallback = function streamEndedCallback(stream, status, reason) {
        _.forEach(this._childrenStreams, function(childStream) {
            childStream.streamEndedCallback(status, reason);
        });

        if (_.isFunction(this._streamEndedCallback)) {
            this._streamEndedCallback(this, status, reason);
        }
    };

    PhenixRealTimeStream.prototype.streamErrorCallback = function streamErrorCallback(stream, errorSource, error) {
        _.forEach(this._childrenStreams, function(childStream) {
            childStream.streamErrorCallback(errorSource, error);
        });

        if (_.isFunction(this._streamErrorCallback)) {
            this._streamErrorCallback(stream, errorSource, error);
        }
    };

    PhenixRealTimeStream.prototype.stop = function stop(reason) {
        if (!this.isActive()) {
            return;
        }

        this._disposables.dispose();

        stopWebRTCStream(this._streamSrc);

        this._logger.info('[%s] stop [real-time] media stream with reason [%s]', this._streamId, reason);

        this._namedEvents.fire(streamEnums.streamEvents.stopped.name, [reason]);

        this._isStopped = true;
    };

    PhenixRealTimeStream.prototype.monitor = function monitor(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var that = this;
        var monitor = new PeerConnectionMonitor(that._streamId, that._peerConnection, that._logger);

        options.direction = 'inbound';

        monitor.start(options, function activeCallback() {
            return that.isActive();
        }, function monitorCallback(error, monitorEvent) {
            if (error) {
                that._logger.warn('[%s] Media stream monitor triggered unrecoverable error [%s]', that._streamId, error);
            }

            if (FeatureDetector.isIOS() && !applicationActivityDetector.isForeground()) {
                that._logger.info('[%s] Media stream monitor triggered event while app is in the background. Waiting until foreground to trigger event.', that._streamId);

                return that._backgroundMonitorEventCallback = monitorCallback.bind(null, error, monitorEvent);
            }

            that._logger.warn('[%s] Media stream triggered monitor condition for [%s]', that._streamId, monitorEvent.reasons);

            return callback(that, 'client-side-failure', monitorEvent);
        });

        this._monitor = monitor;

        return monitor;
    };

    PhenixRealTimeStream.prototype.getMonitor = function getMonitor() {
        return this._monitor;
    };

    PhenixRealTimeStream.prototype.addBitRateThreshold = function addBitRateThreshold(threshold, callback) {
        var that = this;
        var bitRateMonitor = new BitRateMonitor('Media Stream', this._monitor, function getLimit() {
            return that._limit;
        });

        return bitRateMonitor.addThreshold(threshold, callback);
    };

    PhenixRealTimeStream.prototype.getStream = function getStream() {
        return this._streamSrc;
    };

    PhenixRealTimeStream.prototype.isActive = function isActive() {
        return !this._isStopped && !isStreamStopped(this._streamSrc);
    };

    PhenixRealTimeStream.prototype.getStreamId = function getStreamId() {
        return this._streamId;
    };

    PhenixRealTimeStream.prototype.getStats = function getStats(callback) {
        assert.isFunction(callback, 'callback');

        if (!this._lastStats) {
            this._lastStats = {};
        }

        var that = this;

        return rtc.getStats(this._peerConnection, null, function(stats) {
            callback(PeerConnection.convertPeerConnectionStats(stats, that._lastStats));
        });
    };

    PhenixRealTimeStream.prototype.getRenderer = function getRenderer() {
        return _.get(this._renderers, [0], null);
    };

    function emitPendingBackgroundEvent() {
        if (!this._backgroundMonitorEventCallback) {
            return;
        }

        var eventCallback = this._backgroundMonitorEventCallback;

        this._backgroundMonitorEventCallback = null;

        eventCallback();
    }

    function isStreamStopped(stream) {
        return _.reduce(stream.getTracks(), function(isStopped, track) {
            return isStopped && isTrackStopped(track);
        }, true);
    }

    function isTrackStopped(track) {
        assert.isObject(track, 'track');

        return track.readyState === 'ended';
    }

    function stopWebRTCStream(stream) {
        if (stream && _.isFunction(stream.stop, 'stream.stop')) {
            stream.stop();
        }

        _.forEach(stream && stream.getTracks ? stream.getTracks() : [], function(track) {
            track.stop();
        });
    }

    function onIceConnectionChange() {
        var that = this;

        switch (this._peerConnection.iceConnectionState) {
        case 'checking':
        case 'connecting':
            if (_.isNumber(this._connectionSuccessTimeout)) {
                return;
            }

            this._connectionStart = _.now();
            this._connectionSuccessTimeout = setTimeout(function() {
                that._logger.warn('[%s] Stream has not connected withing [%s] ms.', that._streamId, iceConnectionTimeout);
                that._namedEvents.fire(streamEnums.streamEvents.playerError.name, ['real-time', new Error('connection-timeout')]);
            }, iceConnectionTimeout);

            break;
        case 'connected':
            if (_.isNumber(this._connectionSuccessTimeout)) {
                clearTimeout(this._connectionSuccessTimeout);

                this._connectionSuccessTimeout = null;
            }

            this._logger.info('[%s] Ice Connection completed after [%s] ms', this._streamId, _.now() - this._connectionStart);

            this._connectionStart = null;

            break;
        default:
            break;
        }
    }

    return PhenixRealTimeStream;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(10),
    __webpack_require__(4),
    __webpack_require__(6),
    __webpack_require__(3),
    __webpack_require__(11),
    __webpack_require__(2),
    __webpack_require__(9),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging, event, http, disposable, phenixWebPlayer, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    var timeoutForStallWithoutProgressToRestart = 6000;
    var minTimeBeforeNextReload = 15000;
    var mostRecentSwfFile = 'rtmp-flash-renderer-2018.3.16.swf';
    var defaultSwfFileSrcs = {
        local: 'https://local.phenixrts.com/public/rtmp/' + mostRecentSwfFile,
        staging: 'https://stg.phenixrts.com/public/rtmp/' + mostRecentSwfFile,
        production: 'https://phenixrts.com/public/rtmp/' + mostRecentSwfFile
    };

    function FlashRenderer(streamId, streamsInfo, streamTelemetry, options, logger) {
        assert.isObject(options, 'options');

        if (options.env) {
            assert.isStringNotEmpty(options.env, 'options.env');
        }

        var defaultSwfFileSrc = defaultSwfFileSrcs[options.env || 'production'];

        this._logger = logger;
        this._streamId = streamId;
        this._streamsInfo = _.map(streamsInfo, function(info) {
            info.uri = encodeURI(info.uri).replace(/[#]/g, '%23');

            return info;
        });
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._phenixVideo = null;
        this._playerElement = null;
        this._namedEvents = new event.NamedEvents();
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._disposables = new disposable.DisposableList();

        this._onStalled = _.bind(stalled, this);
        this._onEnded = _.bind(ended, this);
        this._onError = _.bind(handleError, this);
        this._swfSrc = options.swfSrc || defaultSwfFileSrc;
    }

    FlashRenderer.isSupported = function() {
        return detectFlashPlugin();
    };

    FlashRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    FlashRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;
        var options = {
            streamId: this._streamId,
            swfSrc: this._swfSrc
        };

        this._originElement = elementToAttachTo;
        this._phenixVideo = new rtc.PhenixVideo(elementToAttachTo, this._streamsInfo, 'flash', options);

        this._phenixVideo.hookUpEvents();

        this._playerElement = this._phenixVideo.getElement();

        this._disposables.add(this._streamTelemetry.recordTimeToFirstFrame(this._originElement));
        this._disposables.add(this._streamTelemetry.recordRebuffering(this._originElement));
        this._disposables.add(this._streamTelemetry.recordVideoResolutionChanges(this, this._originElement));
        this._disposables.add(this._streamTelemetry.recordVideoPlayingAndPausing(this._originElement));

        if (this._playerElement) {
            this._playerElement.play();
        }

        _.addEventListener(this._originElement, 'stalled', that._onStalled, false);
        _.addEventListener(this._originElement, 'pause', that._onStalled, false);
        _.addEventListener(this._originElement, 'suspend', that._onStalled, false);
        _.addEventListener(this._originElement, 'ended', that._onEnded, false);
        _.addEventListener(this._originElement, 'error', that._onError, false);

        return elementToAttachTo;
    };

    FlashRenderer.prototype.stop = function(reason) {
        var that = this;

        this._disposables.dispose();

        if (this._phenixVideo) {
            var finalizeStreamEnded = function finalizeStreamEnded() {
                if (that._playerElement) {
                    _.removeEventListener(that._originElement, 'stalled', that._onStalled, false);
                    _.removeEventListener(that._originElement, 'pause', that._onStalled, false);
                    _.removeEventListener(that._originElement, 'suspend', that._onStalled, false);
                    _.removeEventListener(that._originElement, 'ended', that._onEnded, false);
                    _.removeEventListener(that._originElement, 'error', that._onError, false);
                }

                that._playerElement = null;
                that._originElement = null;

                that._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);
            };

            try {
                this._phenixVideo.destroy();
                this._phenixVideo = null;

                finalizeStreamEnded();

                this._logger.info('[%s] Flash player has been destroyed', this._streamId);
            } catch (e) {
                that._logger.error('[%s] Error while destroying Flash player [%s]', that._streamId, e.code, e);

                finalizeStreamEnded();

                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['flash-player', e]);
            }
        }
    };

    FlashRenderer.prototype.getStats = function() {
        if (!this._playerElement) {
            return {
                width: 0,
                height: 0,
                currentTime: 0.0,
                lag: 0.0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var stat = {};
        var currentTime = this._playerElement.currentTime;
        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;

        stat.lag = Math.max(0.0, trueCurrentTime - currentTime);

        if (stat.estimatedBandwidth > 0) {
            stat.networkState = streamEnums.networkStates.networkLoading.id;
        } else if (stat.playTime > 0) {
            stat.networkState = streamEnums.networkStates.networkIdle.id;
        } else if (stat.video) {
            stat.networkState = streamEnums.networkStates.networkEmpty.id;
        } else {
            stat.networkState = streamEnums.networkStates.networkNoSource.id;
        }

        return stat;
    };

    FlashRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    FlashRenderer.prototype.getPlayer = function() {
        return this._player;
    };

    FlashRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        return this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function handleError(e) {
        this._namedEvents.fire(streamEnums.rendererEvents.error.name, ['flash-player', e]);
    }

    function reload() {
        this._phenixVideo.destroy();

        this.start(this._originElement);
    }

    function reloadIfAble() {
        if (!canReload.call(this)) {
            return;
        }

        this._logger.warn('Reloading unhealthy stream that was active for at least [%s] seconds', minTimeBeforeNextReload / 1000);

        this._lastReloadTime = _.now();

        reload.call(this);
    }

    function canReload() {
        var hasElapsedMinTimeSinceLastReload = !this._lastReloadTime || _.now() - this._lastReloadTime > minTimeBeforeNextReload;

        return this._playerElement && !this._waitForLastChunk && this._player && this._playerElement.buffered.length !== 0 && hasElapsedMinTimeSinceLastReload;
    }

    function stalled(event) {
        var that = this;

        that._logger.info('[%s] Loading flash player stalled caused by [%s] event.', that._streamId, event.type);

        var currentVideoTime = that._playerElement.currentTime;

        setTimeout(function() {
            if (that._playerElement && that._playerElement.currentTime === currentVideoTime && !that._playerElement.paused && canReload.call(that)) {
                that._logger.warn('Reloading stream after being stalled for [%s] seconds', timeoutForStallWithoutProgressToRestart / 1000);

                reloadIfAble.call(that);
            }
        }, timeoutForStallWithoutProgressToRestart);
    }

    function ended() {
        this._logger.info('[%s] Flash player ended.', this._streamId);
    }

    var hasFlashPlugin = null;

    function detectFlashPlugin() {
        var defaultVersion = [10, 0, 0];
        var pluginName = 'Shockwave Flash';
        var mimeType = 'application/x-shockwave-flash';
        var activeX = 'ShockwaveFlash.ShockwaveFlash';
        var version = [0, 0, 0];

        if (_.isBoolean(hasFlashPlugin)) {
            return hasFlashPlugin;
        }

        // Firefox, Webkit, Opera
        if (_.get(rtc.global.navigator, ['plugins', pluginName])) {
            var description = rtc.global.navigator.plugins[pluginName].description;

            if (description && _.get(rtc.global.navigator, ['mimeTypes', mimeType, 'enabledPlugin'], false)) {
                version = description.replace(pluginName, '').replace(/^\s+/, '').replace(/\sr/gi, '.').split('.');

                for (var i = 0, total = version.length; i < total; i++) {
                    version[i] = parseInt(version[i].match(/\d+/), 10);
                }
            }
            // Internet Explorer / ActiveX
        } else if (rtc.global.ActiveXObject) {
            try {
                var ax = new rtc.global.ActiveXObject(activeX);

                if (ax) {
                    var versionString = ax.GetVariable("$version") || '';
                    var versionInfo = _.get(versionString.split(" "), [1], version).split(",");

                    version = [parseInt(versionInfo[0], 10), parseInt(versionInfo[1], 10), parseInt(versionInfo[2], 10)];
                }
            } catch (e) {
                console.error(e);
            }
        }

        hasFlashPlugin = (version[0] > defaultVersion[0] || (version[0] === defaultVersion[0] && version[1] > 0) || (version[0] === defaultVersion[0] && version[1] === 0 && version[2] >= 0));

        return hasFlashPlugin;
    }

    return FlashRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(10),
    __webpack_require__(4),
    __webpack_require__(6),
    __webpack_require__(3),
    __webpack_require__(11),
    __webpack_require__(2),
    __webpack_require__(9),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging, event, http, disposable, phenixWebPlayer, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    var bandwidthAt720 = 3000000;
    var timeoutForStallWithoutProgressToRestart = 6000;
    var minTimeBeforeNextReload = 15000;
    var originStreamReadyDuration = 6000;

    function PhenixPlayerRenderer(streamId, uri, streamTelemetry, options, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._manifestUri = encodeURI(uri).replace(/[#]/g, '%23');
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._lastProgress = {
            time: 0,
            buffered: null,
            averageLength: 0,
            count: 0,
            lastCurrentTime: 0,
            lastCurrentTimeOccurenceTimestamp: 0
        };
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();

        this._onStalled = _.bind(stalled, this);
        this._onProgress = _.bind(onProgress, this);
        this._onEnded = _.bind(ended, this);
    }

    PhenixPlayerRenderer.isSupported = function() {
        return phenixWebPlayer.isSupported;
    };

    PhenixPlayerRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    PhenixPlayerRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;
        var loggerAtWarningThreshold = createWarningThresholdLogger(this._logger);

        this._throttledLogger = loggerAtWarningThreshold;
        this._element = elementToAttachTo;

        this._disposables.add(this._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordRebuffering(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoPlayingAndPausing(elementToAttachTo));

        setupPlayer.call(that);

        if (that._options.receiveAudio === false) {
            elementToAttachTo.muted = true;
        }

        _.addEventListener(elementToAttachTo, 'stalled', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'pause', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'suspend', that._onStalled, false);
        _.addEventListener(elementToAttachTo, 'progress', that._onProgress, false);
        _.addEventListener(elementToAttachTo, 'ended', that._onEnded, false);

        that._dimensionsChangedMonitor.start(this, elementToAttachTo);

        return elementToAttachTo;
    };

    PhenixPlayerRenderer.prototype.stop = function(reason, waitForLastChunk) {
        var that = this;

        if (that._waitingForFinalization) {
            return;
        }

        if (waitForLastChunk) {
            return that._waitForLastChunk = true;
        }

        this._dimensionsChangedMonitor.stop();

        this._disposables.dispose();

        if (this._player) {
            var finalizeStreamEnded = function finalizeStreamEnded() {
                var reason = '';

                if (that._element) {
                    _.removeEventListener(that._element, 'stalled', that._onStalled, false);
                    _.removeEventListener(that._element, 'pause', that._onStalled, false);
                    _.removeEventListener(that._element, 'suspend', that._onStalled, false);
                    _.removeEventListener(that._element, 'progress', that._onProgress, false);
                    _.removeEventListener(that._element, 'ended', that._onEnded, false);

                    if (rtc.browser === 'Edge') {
                        that._element.src = '';
                    }
                }

                that._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);

                that._player = null;
                that._element = null;
            };

            that._waitingForFinalization = true;

            try {
                that._player.dispose();

                that._logger.info('[%s] Phenix live stream has been destroyed', that._streamId);

                finalizeStreamEnded();
            } catch (e) {
                that._logger.error('[%s] Error while destroying Phenix live stream player [%s]', that._streamId, e.code, e);

                finalizeStreamEnded();

                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['phenix-player', e]);
            }
        }
    };

    PhenixPlayerRenderer.prototype.getStats = function() {
        if (!this._player) {
            return {
                width: 0,
                height: 0,
                currentTime: 0.0,
                lag: 0.0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var stat = this._player.getStats();
        var currentTime = stat.currentTime || this._element.currentTime;
        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;

        if (stat.isNative && stat.deliveryType === 'Hls') {
            stat.currentTime = trueCurrentTime - stat.lag;
        }

        if (!stat.isNative) {
            stat.lag = Math.max(0.0, trueCurrentTime - currentTime);
        }

        if (stat.estimatedBandwidth > 0) {
            stat.networkState = streamEnums.networkStates.networkLoading.id;
        } else if (stat.playTime > 0) {
            stat.networkState = streamEnums.networkStates.networkIdle.id;
        } else if (stat.video) {
            stat.networkState = streamEnums.networkStates.networkEmpty.id;
        } else {
            stat.networkState = streamEnums.networkStates.networkNoSource.id;
        }

        return stat;
    };

    PhenixPlayerRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    PhenixPlayerRenderer.prototype.getPlayer = function() {
        return this._player;
    };

    PhenixPlayerRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        return this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function setupPlayer() {
        var that = this;
        var playerOptions = _.assign({bandwidthToStartAt: bandwidthAt720}, that._options);

        if (_.includes(this._manifestUri, '.mpd')) {
            if (that._options.isDrmProtectedContent) {
                playerOptions.drm = {
                    'com.widevine.alpha': {
                        serverCertificateUrl: that._options.widevineServiceCertificateUrl,
                        mediaKeySystemConfiguration: {persistentState: 'required'}
                    },
                    'com.microsoft.playready': {licenseServerUrl: that._options.playreadyLicenseUrl}
                };
            }
        }

        var webPlayer = new phenixWebPlayer.WebPlayer(this._throttledLogger, this._element, playerOptions);
        var timeSinceOriginStreamStart = _.now() - this._options.originStartTime;

        if (timeSinceOriginStreamStart < originStreamReadyDuration && this._options.isDrmProtectedContent && _.includes(this._manifestUri, '.m3u8')) {
            setTimeout(_.bind(webPlayer.start, webPlayer, that._manifestUri), originStreamReadyDuration);
        } else {
            webPlayer.start(that._manifestUri);
        }

        that._player = webPlayer;

        _.addEventListener(that._player, 'error', _.bind(handleError, that));
    }

    function handleError(e) {
        if (canReload.call(this) && e && (e.code === 3 || e.severity === phenixWebPlayer.errors.severity.RECOVERABLE)) {
            this._logger.warn('Reloading unhealthy stream after error event [%s]', e);

            return reloadIfAble.call(this);
        }

        this._namedEvents.fire(streamEnums.rendererEvents.error.name, ['phenix-player', e]);
    }

    function reload() {
        this._player.dispose();

        this._player = null;

        this.start(this._element);
    }

    function reloadIfAble() {
        if (!canReload.call(this)) {
            return;
        }

        this._logger.warn('Reloading unhealthy stream that was active for at least [%s] seconds', minTimeBeforeNextReload / 1000);

        this._lastReloadTime = _.now();

        reload.call(this);
    }

    function canReload() {
        var hasElapsedMinTimeSinceLastReload = !this._lastReloadTime || _.now() - this._lastReloadTime > minTimeBeforeNextReload;

        return this._element && !this._waitForLastChunk && this._player && this._element.buffered.length !== 0 && hasElapsedMinTimeSinceLastReload;
    }

    function onProgress() {
        this._lastProgress.time = _.now();

        if (this._element.buffered.length === 0) {
            return this._logger.debug('[%s] Phenix live stream player progress event fired without any buffered content', this._streamId);
        }

        var bufferedEnd = this._element.buffered.end(this._element.buffered.length - 1);

        if (this._lastProgress.buffered === bufferedEnd) {
            return;
        }

        // Start and end times are unreliable for overall length of stream.
        if (this._lastProgress.buffered !== null) {
            var oldTimeElapsed = this._lastProgress.averageLength * this._lastProgress.count;
            var newTimeElapsed = oldTimeElapsed + (bufferedEnd - this._lastProgress.buffered);
            var isStalled = this._lastProgress.lastCurrentTime === this._element.currentTime;

            this._lastProgress.count += 1;
            this._lastProgress.averageLength = newTimeElapsed / this._lastProgress.count;

            if (!isStalled) {
                this._lastProgress.lastCurrentTimeOccurenceTimestamp = _.now();
            }

            var hasExceededStallTimeout = this._lastProgress.lastCurrentTimeOccurenceTimestamp && _.now() - this._lastProgress.lastCurrentTimeOccurenceTimestamp > timeoutForStallWithoutProgressToRestart;

            if (isStalled && hasExceededStallTimeout && this._element && !this._element.paused && canReload.call(this)) {
                this._logger.warn('Reloading stream after current time has not changed for [%s] seconds due to unregistered stall.', timeoutForStallWithoutProgressToRestart / 1000);

                reloadIfAble.call(this);
            }
        }

        this._lastProgress.buffered = bufferedEnd;
        this._lastProgress.lastCurrentTime = this._element.currentTime;
    }

    function stalled(event) {
        var that = this;

        that._logger.info('[%s] Loading Phenix Live stream player stalled caused by [%s] event.', that._streamId, event.type);

        if (that._lastProgress.time === 0 || that._element.paused) {
            return;
        }

        var currentVideoTime = that._element.currentTime;

        setTimeout(function() {
            if (_.now() - that._lastProgress.time > getTimeoutOrMinimum.call(that) && that._waitForLastChunk) {
                that.stop('ended');
            }
        }, getTimeoutOrMinimum.call(that));

        setTimeout(function() {
            if (that._element && that._element.currentTime === currentVideoTime && !that._element.paused && canReload.call(that)) {
                that._logger.warn('Reloading stream after being stalled for [%s] seconds', timeoutForStallWithoutProgressToRestart / 1000);

                reloadIfAble.call(that);
            }
        }, timeoutForStallWithoutProgressToRestart);
    }

    function getTimeoutOrMinimum() {
        return this._lastProgress.averageLength * 1.5 < 2000 ? 2000 : this._lastProgress.averageLength * 1.5;
    }

    function ended() {
        this._logger.info('[%s] Phenix live stream player ended.', this._streamId);
    }

    // Temporary measure. The phenix-web-player logs a lot of debug, info, and trace data
    function createWarningThresholdLogger(logger) {
        var appenders = logger.getAppenders();
        var throttledLogger = new logging.Logger();

        _.forEach(appenders, function(appender) {
            if (appender instanceof logging.ConsoleAppender) {
                appender = new logging.ConsoleAppender();

                appender.setThreshold(logging.level.INFO);
            }

            throttledLogger.addAppender(appender);
        });

        throttledLogger.setUserId(logger.getUserId());
        throttledLogger.setEnvironment(logger.getEnvironment());
        throttledLogger.setApplicationVersion(logger.getApplicationVersion());
        throttledLogger.setObservableSessionId(logger.getObservableSessionId());

        return throttledLogger;
    }

    return PhenixPlayerRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(6),
    __webpack_require__(3),
    __webpack_require__(2),
    __webpack_require__(9),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, http, disposable, rtc, DimensionsChangedMonitor, streamEnums) {
    'use strict';

    var widevineServiceCertificate = null;
    var defaultBandwidthEstimateForPlayback = 2000000; // 2Mbps will select 720p by default

    function ShakaRenderer(streamId, uri, streamTelemetry, options, shaka, logger) {
        this._logger = logger;
        this._streamId = streamId;
        this._manifestUri = encodeURI(uri).replace(/[#]/g, '%23');
        this._streamTelemetry = streamTelemetry;
        this._options = options;
        this._renderer = null;
        this._element = null;
        this._dimensionsChangedMonitor = new DimensionsChangedMonitor(logger);
        this._lastProgress = {
            time: 0,
            buffered: null,
            averageLength: 0,
            count: 0
        };
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();
        this._shaka = shaka;

        this._onStalled = _.bind(stalled, this);
        this._onProgress = _.bind(onProgress, this);
        this._onEnded = _.bind(ended, this);
    }

    ShakaRenderer.prototype.on = function(name, callback) {
        return this._namedEvents.listen(name, callback);
    };

    ShakaRenderer.prototype.start = function(elementToAttachTo) {
        var that = this;

        that._player = new this._shaka.Player(elementToAttachTo);

        this._disposables.add(this._streamTelemetry.recordTimeToFirstFrame(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordRebuffering(elementToAttachTo));
        this._disposables.add(this._streamTelemetry.recordVideoResolutionChanges(this, elementToAttachTo));

        var playerConfig = {
            abr: {defaultBandwidthEstimate: defaultBandwidthEstimateForPlayback},
            manifest: {retryParameters: {timeout: 10000}},
            streaming: {
                rebufferingGoal: 2,
                bufferingGoal: 10,
                bufferBehind: 30,
                retryParameters: {
                    timeout: 10000,
                    maxAttempts: 10,
                    backoffFactor: 1.1
                }
            }
        };

        if (this._options.isDrmProtectedContent) {
            checkBrowserSupportForWidevineDRM.call(that);
            unwrapLicenseResponse.call(that, that._player);
            addDrmSpecificsToPlayerConfig.call(that, playerConfig, that._options, function(err, updatedPlayerConfig) {
                if (!err) {
                    loadPlayer(updatedPlayerConfig);
                } else {
                    that._logger.error('Failed to add DRM configuration to shaka player', err);

                    throw err;
                }
            });
        } else {
            loadPlayer(playerConfig);
        }

        function loadPlayer(config) {
            that._player.configure(config);

            if (that._options.receiveAudio === false) {
                elementToAttachTo.muted = true;
            }

            _.addEventListener(that._player, 'error', function(e) {
                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['player', e]);
            });

            _.addEventListener(elementToAttachTo, 'stalled', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'pause', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'suspend', that._onStalled, false);
            _.addEventListener(elementToAttachTo, 'progress', that._onProgress, false);
            _.addEventListener(elementToAttachTo, 'ended', that._onEnded, false);

            that._player.load(that._manifestUri).then(function() {
                that._logger.info('[%s] DASH live stream has been loaded', that._streamId);

                if (_.isFunction(elementToAttachTo.play)) {
                    elementToAttachTo.play();
                }
            }).catch(function(e) {
                that._logger.error('[%s] Error while loading DASH live stream [%s]', that._streamId, e.code, e);

                that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['shaka', e]);
            });

            that._dimensionsChangedMonitor.start(this, elementToAttachTo);
            that._element = elementToAttachTo;
        }

        return elementToAttachTo;
    };

    ShakaRenderer.prototype.stop = function(reason, waitForLastChunk) {
        var that = this;

        if (that._waitingForFinalization) {
            return;
        }

        if (waitForLastChunk) {
            return that._waitForLastChunk = true;
        }

        this._dimensionsChangedMonitor.stop();

        this._disposables.dispose();

        if (this._player) {
            var finalizeStreamEnded = function finalizeStreamEnded() {
                var reason = '';

                if (that._element) {
                    _.removeEventListener(that._element, 'stalled', that._onStalled, false);
                    _.removeEventListener(that._element, 'pause', that._onStalled, false);
                    _.removeEventListener(that._element, 'suspend', that._onStalled, false);
                    _.removeEventListener(that._element, 'progress', that._onProgress, false);
                    _.removeEventListener(that._element, 'ended', that._onEnded, false);

                    if (rtc.browser === 'Edge') {
                        that._element.src = '';
                    }
                }

                that._namedEvents.fire(streamEnums.rendererEvents.ended.name, [reason]);

                that._player = null;
                that._element = null;
            };

            var destroyIgnored = that._player.destroy()
                .then(function() {
                    that._logger.info('[%s] Shaka live stream player has been destroyed', that._streamId);
                }).then(function() {
                    finalizeStreamEnded();
                }).catch(function(e) {
                    that._logger.error('[%s] Error while destroying shaka live stream player [%s]', that._streamId, e.code, e);

                    finalizeStreamEnded();

                    that._namedEvents.fire(streamEnums.rendererEvents.error.name, ['shaka', e]);
                });

            that._waitingForFinalization = true;
        }
    };

    ShakaRenderer.prototype.getStats = function() {
        if (!this._player) {
            return {
                width: 0,
                height: 0,
                currentTime: 0,
                lag: 0,
                networkState: streamEnums.networkStates.networkNoSource.id
            };
        }

        var stat = _.assign(this._player.getStats(), {
            currentTime: 0,
            lag: 0
        });
        var currentTime = _.get(this._element, ['currentTime'], 0);
        var trueCurrentTime = (_.now() - this._options.originStartTime) / 1000;
        var lag = Math.max(0.0, trueCurrentTime - currentTime);

        if (this._element) {
            stat.currentTime = currentTime;
            stat.lag = lag;
        }

        if (stat.estimatedBandwidth > 0) {
            stat.networkState = streamEnums.networkStates.networkLoading.id;
        } else if (stat.playTime > 0) {
            stat.networkState = streamEnums.networkStates.networkIdle.id;
        } else if (stat.video) {
            stat.networkState = streamEnums.networkStates.networkEmpty.id;
        } else {
            stat.networkState = streamEnums.networkStates.networkNoSource.id;
        }

        return stat;
    };

    ShakaRenderer.prototype.setDataQualityChangedCallback = function(callback) {
        assert.isFunction(callback, 'callback');

        this.dataQualityChangedCallback = callback;
    };

    ShakaRenderer.prototype.getPlayer = function() {
        return this._player;
    };

    ShakaRenderer.prototype.addVideoDisplayDimensionsChangedCallback = function(callback, options) {
        return this._dimensionsChangedMonitor.addVideoDisplayDimensionsChangedCallback(callback, options);
    };

    function onProgress() {
        this._lastProgress.time = _.now();

        if (this._element.buffered.length === 0) {
            return this._logger.debug('[%s] Shaka live stream player progress event fired without any buffered content', this._streamId);
        }

        var bufferedEnd = this._element.buffered.end(this._element.buffered.length - 1);

        if (this._lastProgress.buffered === bufferedEnd) {
            return;
        }

        // Start and end times are unreliable for overall length of stream.
        if (this._lastProgress.buffered !== null) {
            var oldTimeElapsed = this._lastProgress.averageLength * this._lastProgress.count;
            var newTimeElapsed = oldTimeElapsed + (bufferedEnd - this._lastProgress.buffered);

            this._lastProgress.count += 1;
            this._lastProgress.averageLength = newTimeElapsed / this._lastProgress.count;
        }

        this._lastProgress.buffered = bufferedEnd;
    }

    function stalled() {
        var that = this;

        that._logger.info('[%s] Loading Shaka live stream player stream stalled.', that._streamId);

        if (that._lastProgress.time === 0) {
            return;
        }

        setTimeout(function() {
            if (_.now() - that._lastProgress.time > getTimeoutOrMinimum.call(that) && that._waitForLastChunk) {
                that.stop('ended');
            }
        }, getTimeoutOrMinimum.call(that));
    }

    function getTimeoutOrMinimum() {
        return this._lastProgress.averageLength * 1.5 < 2000 ? 2000 : this._lastProgress.averageLength * 1.5;
    }

    function ended() {
        this._logger.info('[%s] Shaka live stream player ended.', this._streamId);
    }

    function checkBrowserSupportForWidevineDRM() {
        var error;

        if (!_.isFunction(Uint8Array)) {
            error = 'Uint8Array support required for DRM';
            this._logger.error(error);

            throw new Error(error);
        }

        if (!_.isFunction(rtc.global.atob)) {
            error = 'rtc.global.atob support required for DRM';
            this._logger.error(error);

            throw new Error(error);
        }
    }

    function unwrapLicenseResponse(player) {
        var that = this;

        player.getNetworkingEngine().registerResponseFilter(function(type, response) {
            // Only manipulate license responses:
            if (type.toString() === that._shaka.net.NetworkingEngine.RequestType.LICENSE.toString()) {
                var binaryResponseAsTypedArray = new Uint8Array(response.data);
                var responseAsString = String.fromCharCode.apply(null, binaryResponseAsTypedArray);
                var parsedResponse = JSON.parse(responseAsString);
                var base64License = parsedResponse.license;
                var decodedLicense = rtc.global.atob(base64License);

                response.data = new Uint8Array(decodedLicense.length);

                for (var i = 0; i < decodedLicense.length; ++i) {
                    response.data[i] = decodedLicense.charCodeAt(i);
                }

                if (parsedResponse.trackRestrictions) {
                    player.configure({restrictions: parsedResponse.trackRestrictions});
                }
            }
        });
    }

    function addDrmSpecificsToPlayerConfig(playerConfig, options, callback) {
        if (!playerConfig.drm) {
            playerConfig.drm = {};
        }

        if (!playerConfig.drm.advanced) {
            playerConfig.drm.advanced = {};
        }

        if (!playerConfig.manifest) {
            playerConfig.manifest = {};
        }

        if (!playerConfig.manifest.dash) {
            playerConfig.manifest.dash = {};
        }

        // Add browser specific DRM calls here
        // Currently we support Widevine only
        addWidevineConfigToPlayerConfig.call(this, playerConfig, options, callback);
    }

    // ToDo pull into singleton so widevineServiceCertificate stays per browser session
    function addWidevineConfigToPlayerConfig(playerConfig, options, callback) {
        playerConfig['manifest']['dash']['customScheme'] = function(element) {
            if (element.getAttribute('schemeIdUri') === 'com.phenixrts.widevine' || element.getAttribute('schemeIdUri') === 'com.phenixp2p.widevine') {
                return [{
                    keySystem: 'com.widevine.alpha',
                    licenseServerUri: decodeURIComponent(element.getAttribute('widevineLicenseServerUrl'))
                }];
            }
        };

        function addToPlayerconfig(error, serverCertificateResponse) {
            if (error) {
                callback(error);

                return;
            }

            widevineServiceCertificate = serverCertificateResponse.data; // Cache so that we can reuse

            playerConfig.drm.advanced['com.widevine.alpha'] = {
                'serverCertificate': convertBinaryStringToUint8Array(serverCertificateResponse.data),
                'persistentStateRequired': true,
                'distinctiveIdentifierRequired': false
            };

            callback(null, playerConfig);
        }

        if (widevineServiceCertificate) {
            addToPlayerconfig(null, widevineServiceCertificate);
        } else {
            http.get(options.widevineServiceCertificateUrl, {mimeType: 'text/plain; charset=x-user-defined'}, addToPlayerconfig);
        }
    }

    function convertBinaryStringToUint8Array(bStr) {
        var len = bStr.length;
        var u8Array = new Uint8Array(len); // eslint-disable-line no-undef

        for (var i = 0; i < len; i++) {
            u8Array[i] = bStr.charCodeAt(i);
        }

        return u8Array;
    }

    return ShakaRenderer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(5)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, streamEnums) {
    'use strict';

    function StreamWrapper(type, stream, logger) {
        assert.isStringNotEmpty(type, 'type');
        assert.isObject(stream, 'stream');
        assert.isObject(logger, 'logger');

        this._type = type;
        this._stream = stream;
        this._logger = logger;
        this._onPlayerEnd = null;

        var that = this;

        this._stream.on(streamEnums.streamEvents.playerEnded.name, function(reason) {
            that._logger.info('[%s] [%s] player ended.', that._stream.getStreamId(), that._type);

            that._playerEnded = true;

            if (that._onPlayerEnd) {
                return that._onPlayerEnd();
            }

            that.streamEndedCallback(getStreamEndedStatus(reason), reason);
        });
    }

    StreamWrapper.prototype.on = function(name, callback) {
        return this._stream.on(name, callback);
    };

    // TODO(DY) Remove once 'on' is implemented on all Phenix Stream objects
    StreamWrapper.prototype.streamErrorCallback = function(errorSource, error) {
        if (!_.isFunction(this._stream.streamErrorCallback)) {
            this._logger.error('[%s] [%s] live stream error event [%s]', this._stream.getStreamId(), this._type, error);
        } else {
            this._logger.debug('[%s] [%s] live stream error event [%s]', this._stream.getStreamId(), this._type, error);
            this._stream.streamErrorCallback(this._stream, errorSource, error);
        }
    };

    StreamWrapper.prototype.streamEndedCallback = function(status, reason, waitForPlayerEnd) {
        var renderer = this._stream.getRenderer();

        if (this._isStreamEnded) {
            return;
        }

        if (waitForPlayerEnd && !this._onPlayerEnd && this._stream.isActive() && renderer && !this._playerEnded) {
            this._onPlayerEnd = _.bind(this.streamEndedCallback, this, status, reason);

            this._logger.info('[%s] [%s] stream ended. Waiting for end of player.', this._stream.getStreamId(), this._type);

            if (renderer) {
                renderer.stop(reason, waitForPlayerEnd);
            }

            return;
        }

        this._isStreamEnded = true;

        if (_.isFunction(this._stream.streamEndedCallback)) {
            this._stream.streamEndedCallback(this._stream, status, reason);
        }

        this._stream.stop(reason);

        if (renderer) {
            renderer.stop(reason, waitForPlayerEnd);
        }
    };

    StreamWrapper.prototype.dataQualityChangedCallback = function(status, reason) {
        var renderer = this._stream.getRenderer();

        if (!renderer) {
            return;
        }

        if (_.isFunction(renderer.dataQualityChangedCallback)) {
            renderer.dataQualityChangedCallback(renderer, status, reason);
        }
    };

    StreamWrapper.prototype.getPhenixMediaStream = function() {
        return this._stream;
    };

    function getStreamEndedStatus(value) {
        switch (value) {
        case '':
        case 'none':
        case 'ended':
            return 'ended';
        case 'server-error':
        case 'session-error':
        case 'not-ready':
        case 'error':
        case 'died':
            return 'failed';
        case 'censored':
            return 'censored';
        case 'maintenance':
            return 'maintenance';
        case 'capacity':
            return 'capacity';
        case 'app-background':
            return 'app-background';
        default:
            return 'custom';
        }
    }

    return StreamWrapper;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, disposable, rtc) {
    function NetworkMonitor(logger) {
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._namedEvents = new event.NamedEvents();
        this._disposables = new disposable.DisposableList();

        this._disposables.add(this._namedEvents);

        if (!this.isSupported()) {
            return this._logger.info('Network monitor is not supported.');
        }

        this._lastNetworkStats = getStats.call(this);

        detectNetworkTypeChange.call(this);
    }

    NetworkMonitor.prototype.isSupported = function() {
        return rtc.global.navigator && rtc.global.navigator.connection;
    };

    NetworkMonitor.prototype.getDownlinkThroughputCapacity = function() {
        if (!this.isSupported()) {
            return -1;
        }

        return rtc.global.navigator.connection.downlink || rtc.global.navigator.connection.downlinkMax;
    };

    NetworkMonitor.prototype.getEffectiveType = function() {
        if (!this.isSupported()) {
            return 'Unknown';
        }

        return rtc.global.navigator.connection.effectiveType || rtc.global.navigator.connection.type;
    };

    NetworkMonitor.prototype.getRoundTripTime = function() {
        if (!this.isSupported()) {
            return -1;
        }

        return rtc.global.navigator.connection.rtt || rtc.global.navigator.connection.type;
    };

    NetworkMonitor.prototype.onNetworkChange = function(callback) {
        if (!this.isSupported()) {
            return;
        }

        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen('NetworkChange', callback);
    };

    NetworkMonitor.prototype.dispose = function() {
        this._disposables.dispose();
    };

    function getStats() {
        return {
            downlinkThroughputCapacity: this.getDownlinkThroughputCapacity(),
            effectiveType: this.getEffectiveType(),
            rtt: this.getRoundTripTime()
        };
    }

    function detectNetworkTypeChange() {
        var that = this;

        navigator.connection.addEventListener('change', function() {
            that._namedEvents.fireAsync('NetworkChange', [getStats.call(that), that._lastNetworkStats]);

            that._lastNetworkStats = getStats.call(that);
        });
    }

    return NetworkMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, disposable) {
    'use strict';

    var defaultDocumentFocusIntervalTimeout = 3000;

    function ApplicationActivityDetector() {
        this._namedEvents = new event.NamedEvents();
        this._timeOfLastTabFocusChange = _.now();
        this._disposables = new disposable.DisposableList();
        this._isForeground = true;

        this._disposables.add(this._namedEvents);

        detectTabFocusChange.call(this);
    }

    ApplicationActivityDetector.prototype.isForeground = function() {
        return this._isForeground;
    };

    ApplicationActivityDetector.prototype.getTimeSinceLastChange = function() {
        return _.now() - this._timeOfLastTabFocusChange;
    };

    ApplicationActivityDetector.prototype.onForeground = function isEnabled(callback) {
        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen('foreground', callback);
    };

    ApplicationActivityDetector.prototype.onBackground = function setEnabled(callback) {
        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen('background', callback);
    };

    function detectTabFocusChange() {
        if (canDetectDirectly()) {
            return detectTabFocusChangeDirectly.call(this);
        }

        detectTabFocusChangeIndirectly.call(this);
    }

    function canDetectDirectly() {
        return typeof chrome !== 'undefined' && chrome.extension && chrome.extension.onRequest; // eslint-disable-line no-undef
    }

    function detectTabFocusChangeDirectly() {
        if (!canDetectDirectly()) {
            return;
        }

        var that = this;

        chrome.extension.onRequest.addListener(function(request, sender, sendResponse) { // eslint-disable-line no-undef
            if(request === "is_selected") {
                chrome.tabs.getSelected(null, function(tab){ // eslint-disable-line no-undef
                    var isForeground = tab.id === sender.tab.id;

                    setFocusState.call(that, isForeground);

                    if(isForeground) {
                        sendResponse(true);
                    } else {
                        sendResponse(false);
                    }
                });
            }
        });
    }

    function detectTabFocusChangeIndirectly() {
        var hidden;
        var visibilityChange;
        var that = this;

        if (typeof document !== "object") {
            return;
        }

        if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        } else if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        }

        function handleVisibilityChange() {
            var isForeground = !document[hidden];

            setFocusState.call(that, isForeground);
        }

        if (typeof document.addEventListener !== "undefined" && typeof document[hidden] !== "undefined") {
            _.addEventListener(document, visibilityChange, handleVisibilityChange, false);

            that._disposables.add(new disposable.Disposable(function() {
                _.removeEventListener(document, visibilityChange, handleVisibilityChange, false);
            }));
        } else {
            listenForDocumentFocus.call(that);
        }
    }

    function listenForDocumentFocus() {
        var that = this;

        that._documentFocusInterval = setInterval(function() {
            var isForeground = document.hasFocus();

            setFocusState.call(that, isForeground);
        }, defaultDocumentFocusIntervalTimeout);

        that._disposables.add(new disposable.Disposable(function() {
            if (_.isNumber(that._documentFocusInterval)) {
                clearInterval(that._documentFocusInterval);
            }

            that._documentFocusInterval = null;
        }));
    }

    function setFocusState(isForeground) {
        assert.isBoolean(isForeground, 'isForeground');

        if (this._isForeground === isForeground) {
            return;
        }

        if (isForeground) {
            this._isForeground = true;

            return triggerFocusChange.call(this, 'foreground');
        }

        this._isForeground = false;

        return triggerFocusChange.call(this, 'background');
    }

    function triggerFocusChange(state) {
        var currentTime = _.now();
        var timeElapsedOfLastState = currentTime - this._timeOfLastTabFocusChange;

        this._timeOfLastTabFocusChange = currentTime;
        this._namedEvents.fire(state, [timeElapsedOfLastState]);
    }

    return ApplicationActivityDetector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3),
    __webpack_require__(13),
    __webpack_require__(41),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable, applicationActivityDetector, NetworkMonitor, phenixRTC) {
    'use strict';

    var start = phenixRTC.global['__phenixPageLoadTime'] || phenixRTC.global['__pageLoadTime'] || _.now();
    var defaultEnvironment = 'production' || '?';
    var sdkVersion = '2018-10-15T16:17:53Z' || '?';

    function SessionTelemetry(logger, metricsTransmitter) {
        this._environment = defaultEnvironment;
        this._version = sdkVersion;
        this._sessionId = null;
        this._properties = {
            resource: 'session',
            kind: 'event'
        };
        this._logger = logger;
        this._metricsTransmitter = metricsTransmitter;
        this._networkMonitor = new NetworkMonitor(this._logger);
        this._start = _.now();
        this._disposables = new disposable.DisposableList();
        this._records = [];

        this._disposables.add(applicationActivityDetector.onBackground(_.bind(recordForegroundChange, this, false)));
        this._disposables.add(applicationActivityDetector.onForeground(_.bind(recordForegroundChange, this, true)));

        if (!this._networkMonitor.isSupported()) {
            return;
        }

        this._disposables.add(this._networkMonitor.onNetworkChange(_.bind(logNetworkStatsChange, this)));
        this._disposables.add(this._networkMonitor);

        recordNetworkTypeState.call(this);
        recordNetworkDownlinkThroughputCapacity.call(this);
        recordNetworkRTT.call(this);
    }

    SessionTelemetry.prototype.setSessionId = function(sessionId) {
        if (!sessionId && this._sessionId) {
            recordMetricRecord.call(this, {
                metric: 'Stopped',
                elapsed: this.elapsed()
            }, since());
        }

        this._sessionId = sessionId;

        if (sessionId) {
            recordMetricRecord.call(this, {
                metric: 'Initialized',
                elapsed: this.elapsed()
            }, since());
            recordAllMetrics.call(this);
            recordForegroundState.call(this);

            if (this._networkMonitor.isSupported()) {
                recordNetworkTypeState.call(this);
                recordNetworkDownlinkThroughputCapacity.call(this);
                recordNetworkRTT.call(this);
            }
        }
    };

    SessionTelemetry.prototype.setProperty = function(name, value) {
        assert.isStringNotEmpty(name, 'name');
        assert.isStringNotEmpty(value, 'value');

        this._properties[name] = value;
    };

    SessionTelemetry.prototype.recordMetric = function(metric, value, previousValue, additionalProperties) {
        assert.isStringNotEmpty(metric, 'metric');

        var record = _.assign({}, {
            metric: metric,
            elapsed: this.elapsed(),
            value: value,
            previousValue: previousValue
        }, additionalProperties || {});

        recordMetricRecord.call(this, record, since());
    };

    SessionTelemetry.prototype.elapsed = function() {
        var now = _.now();

        return now - this._start;
    };

    SessionTelemetry.prototype.dispose = function() {
        this._disposables.dispose();

        this.recordMetric('Stopped');

        logMetric.call(this, 'Session telemetry stopped');
    };

    function recordForegroundState() {
        var isForeground = applicationActivityDetector.isForeground();
        var timeSinceLastChange = applicationActivityDetector.getTimeSinceLastChange();
        var metric = isForeground ? 'ApplicationForeground' : 'ApplicationBackground';

        this.recordMetric(metric, {uint64: timeSinceLastChange});

        logMetric.call(this, 'Session has started in the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', timeSinceLastChange);
    }

    function recordForegroundChange(isForeground, timeSinceLastChange) {
        var metric = isForeground ? 'ApplicationForeground' : 'ApplicationBackground';

        this.recordMetric(metric, {uint64: timeSinceLastChange});

        logMetric.call(this, 'Application has gone into the [%s] after [%s] ms', isForeground ? 'foreground' : 'background', timeSinceLastChange);
    }

    function recordNetworkTypeState() {
        var type = this._networkMonitor.getEffectiveType();

        this.recordMetric('NetworkType', {string: type}, null, {resource: phenixRTC.browser});

        logMetric.call(this, '[%s] has started with Network effective type of [%s]', this._sessionId ? 'Session' : 'Application', type);
    }

    function recordNetworkTypeChange(newType, previousType) {
        var newNetworkType = newType || this._networkMonitor.getEffectiveType();
        var previousNetworkType = previousType;

        this.recordMetric('NetworkType', {string: newNetworkType}, {string: previousNetworkType}, {resource: phenixRTC.browser});

        logMetric.call(this, 'Network effective type has changed to [%s] from [%s]', newNetworkType, previousNetworkType || 'New');
    }

    function recordNetworkRTT(newValue, oldValue) {
        var newRTT = newValue || this._networkMonitor.getRoundTripTime();
        var oldRTT = oldValue || -1;

        this.recordMetric('RoundTripTime', {uint32: newRTT}, {uint32: oldRTT}, {resource: phenixRTC.browser});

        if (_.isNullOrUndefined(oldValue)) {
            return logMetric.call(this, 'Network RTT [%s]', newRTT);
        }

        logMetric.call(this, 'Network RTT changed to [%s] from [%s]', newRTT, oldRTT);
    }

    function recordNetworkDownlinkThroughputCapacity(newValue, oldValue) {
        var newCapacity = newValue || this._networkMonitor.getDownlinkThroughputCapacity();
        var oldCapacity = oldValue || -1;

        this.recordMetric('DownlinkThroughputCapacity', {float: newCapacity}, {float: oldCapacity}, {resource: phenixRTC.browser});

        if (_.isNullOrUndefined(oldValue)) {
            return logMetric.call(this, 'Network downlink throughput capacity [%s]', newCapacity);
        }

        logMetric.call(this, 'Network downlink throughput capacity changed to [%s] from [%s]', newCapacity, oldCapacity);
    }

    function logNetworkStatsChange(newStats, oldStats) {
        if (oldStats.downlinkThroughputCapacity !== newStats.downlinkThroughputCapacity) {
            recordNetworkDownlinkThroughputCapacity.call(this, newStats.downlinkThroughputCapacity, oldStats.downlinkThroughputCapacity);
        }

        if (oldStats.rtt !== newStats.rtt) {
            recordNetworkRTT.call(this, newStats.rtt, oldStats.rtt);
        }

        if (oldStats.effectiveType !== newStats.effectiveType) {
            recordNetworkTypeChange.call(this, newStats.effectiveType, oldStats.effectiveType);
        }
    }

    function logMetric() {
        var args = Array.prototype.slice.call(arguments);

        if (args.length === 0) {
            throw new Error('Invalid logging arguments.');
        }

        var sessionTelemetryPrepend = '[%s] [SessionTelemetry] [%s] ';
        var message = sessionTelemetryPrepend + args[0];
        var loggingArguments = args.slice(1);
        var telemetryArguments = [message, this._sessionId, _.now() - this._start].concat(loggingArguments);

        this._logger.info.apply(this._logger, telemetryArguments);
    }

    function since() {
        var now = _.now();

        return (now - start) / 1000;
    }

    function recordMetricRecord(record, since) {
        assert.isStringNotEmpty(record.metric, 'record.metric');

        if (!this._sessionId) {
            return this._records.push({
                record: record,
                since: since
            });
        }

        var annotatedRecord = _.assign({}, this._properties, record);

        this._metricsTransmitter.submitMetric(record.metric, since, this._sessionId, null, this._environment, this._version, annotatedRecord);
    }

    function recordAllMetrics() {
        if (!this._sessionId) {
            return;
        }

        var that = this;
        var numberOfRecordsToPush = this._records.length;

        while (numberOfRecordsToPush > 0) {
            var records = this._records.splice(numberOfRecordsToPush - 1, 1);

            if (records.length === 1) {
                recordMetricRecord.call(that, records[0].record, records[0].since);
            }

            numberOfRecordsToPush--;
        }
    }

    return SessionTelemetry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable, phenixRTC) {
    'use strict';

    var start = phenixRTC.global['__phenixPageLoadTime'] || phenixRTC.global['__pageLoadTime'] || _.now();
    var defaultEnvironment = 'production' || '?';
    var sdkVersion = '2018-10-15T16:17:53Z' || '?';

    function StreamTelemetry(sessionId, logger, metricsTransmitter) {
        assert.isStringNotEmpty(sessionId, 'sessionId');

        this._environment = defaultEnvironment;
        this._version = sdkVersion;
        this._sessionId = sessionId;
        this._properties = {};
        this._logger = logger;
        this._metricsTransmitter = metricsTransmitter;
        this._start = _.now();
        this._disposables = new disposable.DisposableList();
        this._dimensionsTrackedVideos = [];
        this._rebufferingTrackedVideos = [];
        this._playTrackedVideos = [];
        this._timeOfFirstFrame = null;

        logMetric.call(this, 'Stream initializing');
    }

    StreamTelemetry.prototype.setProperty = function(name, value) {
        assert.isStringNotEmpty(name, 'name');
        assert.isStringNotEmpty(value, 'value');

        this._properties[name] = value;
    };

    StreamTelemetry.prototype.recordMetric = function(metric, value, previousValue, additionalProperties) {
        assert.isStringNotEmpty(metric, 'metric');

        var record = _.assign({}, {
            metric: metric,
            elapsed: this.elapsed(),
            value: value,
            previousValue: previousValue
        }, additionalProperties || {});

        recordMetricRecord.call(this, record, since());
    };

    StreamTelemetry.prototype.setStreamId = function(streamId) {
        assert.isStringNotEmpty(streamId, 'streamId');

        if (this._streamId) {
            throw new Error('Stream ID can only be set once.');
        }

        this._streamId = streamId;

        var now = _.now();

        recordMetricRecord.call(this, {
            metric: 'Initialized',
            elapsed: this.elapsed() - now + this._start // Adjust for delay to get the stream ID
        }, since() - (now - this._start) / 1000); // Adjust for delay to get the stream ID);
    };

    StreamTelemetry.prototype.setStartOffset = function(startOffset) {
        assert.isNumber(startOffset, 'startOffset');

        if (this._startOffset) {
            throw new Error('Start offset can only be set once.');
        }

        this._startOffset = startOffset;

        this.recordMetric('Offset', {uint64: startOffset});
    };

    StreamTelemetry.prototype.getStartOffset = function() {
        return this._startOffset;
    };

    StreamTelemetry.prototype.elapsed = function() {
        var now = _.now();

        return now - this._start;
    };

    StreamTelemetry.prototype.stop = function() {
        this._disposables.dispose();

        this.recordMetric('Stopped');

        logMetric.call(this, 'Stream stopped');
    };

    StreamTelemetry.prototype.recordTimeToFirstFrame = function(video) {
        var that = this;
        var startRecordingFirstFrame = _.now();

        // Only record first time to first frame regardless of number of times called
        var listenForFirstFrame = function() {
            if (that._timeOfFirstFrame) {
                return;
            }

            that._timeOfFirstFrame = _.now() - startRecordingFirstFrame;

            that.recordMetric('TimeToFirstFrame', {uint64: that._timeOfFirstFrame});
            logMetric.call(that, 'First frame [%s]', that._timeOfFirstFrame);

            timeToFirstFrameListenerDisposable.dispose();
        };

        _.addEventListener(video, 'loadeddata', listenForFirstFrame);
        _.addEventListener(video, 'loadedmetadata', listenForFirstFrame);

        var timeToFirstFrameListenerDisposable = new disposable.Disposable(function() {
            _.removeEventListener(video, 'loadeddata', listenForFirstFrame);
            _.removeEventListener(video, 'loadedmetadata', listenForFirstFrame);
        });

        // Ensure TTFF is not recorded if stop is called before first frame
        this._disposables.add(timeToFirstFrameListenerDisposable);

        return timeToFirstFrameListenerDisposable;
    };

    // TODO(dy) Add logging for bit rate changes using PC.getStats
    StreamTelemetry.prototype.recordVideoResolutionChanges = function(renderer, video) {
        var that = this;
        var lastResolution = {
            width: video.videoWidth,
            height: video.videoHeight
        };
        var hasListenedToVideo = _.find(this._dimensionsTrackedVideos, function(trackedVideo) {
            return trackedVideo === video;
        });

        if (hasListenedToVideo) {
            return new disposable.Disposable(_.noop);
        }

        this._dimensionsTrackedVideos.push(video);

        var dimensionChangeDisposable = renderer.addVideoDisplayDimensionsChangedCallback(function(renderer, dimensions) {
            if (lastResolution.width === dimensions.width && lastResolution.height === dimensions.height) {
                return;
            }

            that.recordMetric('ResolutionChanged', {string: dimensions.width + 'x' + dimensions.height}, {string: lastResolution.width + 'x' + lastResolution.height});

            lastResolution = {
                width: dimensions.width,
                height: dimensions.height
            };

            logMetric.call(that, 'Resolution changed: width [%s] height [%s]', dimensions.width, dimensions.height);
        });

        this._disposables.add(dimensionChangeDisposable);

        return dimensionChangeDisposable;
    };

    StreamTelemetry.prototype.recordRebuffering = function(video) {
        var that = this;
        var videoStalled;
        var lastProgress;
        var hasListenedToVideo = _.find(this._rebufferingTrackedVideos, function(trackedVideo) {
            return trackedVideo === video;
        });

        if (hasListenedToVideo) {
            return new disposable.Disposable(_.noop);
        }

        this._rebufferingTrackedVideos.push(video);

        var listenForStall = function() {
            if (videoStalled) {
                return;
            }

            that.recordMetric('Stalled');

            videoStalled = _.now();

            logMetric.call(that, '[buffering] Stream has stalled');
        };

        var listenForContinuation = function(event) {
            var bufferLength = video.buffered.length;
            var hasNotProgressedSinceLastProgressEvent = event.type === 'playing'
                                                        || bufferLength > 0 ? (event.type === 'progress'
                                                        || event.type === 'timeupdate')
                                                        && video.buffered.end(bufferLength - 1) === lastProgress : true;

            if (!videoStalled || (!bufferLength && phenixRTC.browser !== 'Edge') || hasNotProgressedSinceLastProgressEvent) {
                return;
            }

            if (event.type === 'progress') {
                lastProgress = video.buffered.end(bufferLength - 1);
            }

            var timeSinceStop = _.now() - videoStalled;

            that.recordMetric('Buffering', {uint64: timeSinceStop});

            logMetric.call(that, '[buffering] Stream has recovered from stall after [%s] milliseconds', timeSinceStop);

            videoStalled = null;
        };

        _.addEventListener(video, 'stalled', listenForStall);
        _.addEventListener(video, 'pause', listenForStall);
        _.addEventListener(video, 'suspend', listenForStall);
        _.addEventListener(video, 'play', listenForContinuation);
        _.addEventListener(video, 'playing', listenForContinuation);
        _.addEventListener(video, 'progress', listenForContinuation);
        _.addEventListener(video, 'timeupdate', listenForContinuation);

        var rebufferingDisposable = new disposable.Disposable(function() {
            _.removeEventListener(video, 'stalled', listenForStall);
            _.removeEventListener(video, 'pause', listenForStall);
            _.removeEventListener(video, 'suspend', listenForStall);
            _.removeEventListener(video, 'play', listenForContinuation);
            _.removeEventListener(video, 'playing', listenForContinuation);
            _.removeEventListener(video, 'progress', listenForContinuation);
            _.removeEventListener(video, 'timeupdate', listenForContinuation);
        });

        this._disposables.add(rebufferingDisposable);

        return rebufferingDisposable;
    };

    StreamTelemetry.prototype.recordVideoPlayingAndPausing = function(video) {
        var that = this;
        var hasListenedToVideo = _.find(this._playTrackedVideos, function(trackedVideo) {
            return trackedVideo === video;
        });

        if (hasListenedToVideo) {
            return new disposable.Disposable(_.noop);
        }

        this._playTrackedVideos.push(video);

        var listenForPlayChange = function() {
            if (video.paused) {
                that.recordMetric('Playing', {boolean: false});
            } else {
                that.recordMetric('Playing', {boolean: true});
            }
        };

        _.addEventListener(video, 'pause', listenForPlayChange);
        _.addEventListener(video, 'playing', listenForPlayChange);

        var playingDisposable = new disposable.Disposable(function() {
            _.removeEventListener(video, 'pause', listenForPlayChange);
            _.removeEventListener(video, 'playing', listenForPlayChange);
        });

        this._disposables.add(playingDisposable);

        return playingDisposable;
    };

    function logMetric() {
        var args = Array.prototype.slice.call(arguments);

        if (args.length === 0) {
            throw new Error('Invalid logging arguments.');
        }

        var streamTelemetryPrepend = '[%s] [StreamTelemetry] [%s] ';
        var message = streamTelemetryPrepend + args[0];
        var loggingArguments = args.slice(1);
        var telemetryArguments = [message, this._streamId, _.now() - this._start].concat(loggingArguments);

        this._logger.debug.apply(this._logger, telemetryArguments);
    }

    function since() {
        var now = _.now();

        return (now - start) / 1000;
    }

    function recordMetricRecord(record, since) {
        assert.isStringNotEmpty(record.metric, 'record.metric');

        var annotatedRecord = _.assign({}, this._properties, record);

        this._metricsTransmitter.submitMetric(record.metric, since, this._sessionId, this._streamId, this._environment, this._version, annotatedRecord);
    }

    return StreamTelemetry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(15),
    __webpack_require__(2),
    __webpack_require__(24)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, proto, rtc, telemetryProto) {
    function MetricsTransmitter(uri) {
        assert.isString(uri, 'uri');

        this._loggingUrl = '/telemetry/metrics';
        this._domain = typeof location === 'object' ? location.hostname : rtc.browser + '-' + rtc.browserVersion + '-unknown';
        this._isEnabled = true;
        this._browser = (rtc.browser || 'Browser') + '/' + (rtc.browserVersion || '?');
        this._batchHttpProtocol = new proto.BatchHttpProto(uri + this._loggingUrl, [telemetryProto], 'telemetry.SubmitMetricRecords', {
            maxAttempts: 3,
            maxBufferedRecords: 1000,
            maxBatchSize: 512
        });

        this._batchHttpProtocol.on('capacity', _.bind(onCapacity, this));
    }

    MetricsTransmitter.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    MetricsTransmitter.prototype.setEnabled = function setEnabled(enabled) {
        assert.isBoolean(enabled, 'enabled');

        this._isEnabled = enabled;
    };

    MetricsTransmitter.prototype.submitMetric = function submit(metric, since, sessionId, streamId, environment, version, value) {
        if (!this._isEnabled) {
            return;
        }

        assert.isStringNotEmpty(metric, 'metric');
        assert.isObject(value, 'value');

        this._mostRecentRuntime = since;
        this._mostRecentSessionId = sessionId;
        this._mostRecentStreamId = streamId;
        this._mostRecentEnvironment = environment;
        this._mostRecentVersion = version;

        addMetricToRecords.call(this, metric, value);
    };

    function addMetricToRecords(metric, value) {
        var record = _.assign({}, value, {
            metric: metric,
            timestamp: _.isoString(),
            sessionId: this._mostRecentSessionId,
            streamId: this._mostRecentStreamId,
            source: this._browser,
            fullQualifiedName: this._domain,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });

        this._batchHttpProtocol.addRecord(record);
    }

    function onCapacity(deleteRecords) {
        this._batchHttpProtocol.addRecordToBeginning({
            metric: 'MetricDropped',
            value: {uint64: deleteRecords},
            timestamp: _.isoString(),
            sessionId: this._mostRecentSessionId,
            streamId: this._mostRecentStreamId,
            source: this._browser,
            fullQualifiedName: this._domain,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    return MetricsTransmitter;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(16),
    __webpack_require__(45)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, environment, MetricsTransmitter) {
    var config = {
        urls: {
            local: '',
            staging: 'https://telemetry-stg.phenixrts.com',
            production: 'https://telemetry.phenixrts.com'
        }
    };

    function MetricsTransmitterFactory() {
        this._metricsTransmitters = {};
    }

    MetricsTransmitterFactory.prototype.createMetricsTransmitter = function createMetricsTransmitter(pcastBaseUri) {
        var env = environment.parseEnvFromPcastBaseUri(pcastBaseUri || '');

        var telemetryServerUrl = config.urls[env];

        if (!this._metricsTransmitters[env]) {
            this._metricsTransmitters[env] = createNewTransmitter.call(this, telemetryServerUrl);
        }

        return this._metricsTransmitters[env];
    };

    function createNewTransmitter(uri) {
        var transmitter = new MetricsTransmitter(uri);

        if (!uri) {
            transmitter.setEnabled(false);
        }

        return transmitter;
    }

    return new MetricsTransmitterFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, rtc) {
    'use strict';

    var listenForMediaStreamTrackChangesTimeout = 2000;

    function UserMediaProvider(logger, screenShareExtensionManager, onScreenShare) {
        assert.isObject(logger, 'logger');
        assert.isObject(screenShareExtensionManager, 'screenShareExtensionManager');

        if (onScreenShare) {
            assert.isFunction(onScreenShare, 'onScreenShare');
        }

        this._logger = logger;
        this._screenShareExtensionManager = screenShareExtensionManager;
        this._onScreenShare = onScreenShare;
    }

    UserMediaProvider.prototype.getUserMedia = function(options, callback) {
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        getUserMedia.call(this, options, callback);
    };

    function getUserMedia(options, callback) {
        var that = this;

        var onUserMediaSuccess = function onUserMediaSuccess(status, stream) {
            if (that._gumStreams) {
                that._gumStreams.push(stream);
            }

            callback(that, status, stream);
        };

        var onUserMediaFailure = function onUserMediaFailure(status, stream, error) {
            if (options.screenAudio) {
                that._logger.warn('Screen capture with audio is only supported on Windows or Chrome OS.');
            }

            callback(that, status, stream, error);
        };

        var hasScreen = options.screen || options.screenAudio;
        var hasVideoOrAudio = options.video || options.audio;

        if (!(hasScreen && hasVideoOrAudio)) {
            return getUserMediaStream.call(that, options, onUserMediaSuccess, onUserMediaFailure);
        }

        return getUserMediaStream.call(that, {screen: options.screen}, function success(status, screenStream) {
            return getUserMediaStream.call(that, {
                audio: options.audio,
                video: options.video
            }, function screenSuccess(status, stream) {
                addTracksToWebRTCStream(stream, screenStream.getTracks());

                onUserMediaSuccess(status, stream);
            }, function failure(status, stream, error) {
                stopWebRTCStream(screenStream);

                onUserMediaFailure(status, stream, error);
            });
        }, onUserMediaFailure);
    }

    function getUserMediaStream(options, successCallback, failureCallback) {
        var that = this;

        var onUserMediaCancelled = function onUserMediaCancelled() {
            failureCallback('cancelled', null);
        };

        var onUserMediaFailure = function onUserMediaFailure(e) {
            failureCallback(getUserMediaErrorStatus(e), undefined, e);
        };

        var onUserMediaSuccess = function onUserMediaSuccess(stream) {
            wrapNativeMediaStream.call(that, stream);

            successCallback('ok', stream);
        };

        return getUserMediaConstraints.call(this, options, function(error, response) {
            if (_.get(response, ['status']) !== 'ok') {
                return onUserMediaFailure(error);
            }

            if (response.status === 'cancelled') {
                return onUserMediaCancelled();
            }

            var constraints = response.constraints;

            if (that._onScreenShare && (options.screen || options.screenAudio) && rtc.browser === 'Chrome') {
                constraints = that._onScreenShare(constraints);

                if (!constraints) {
                    throw new Error('onScreenShare must return an object of user media constraints');
                }
            }

            try {
                rtc.getUserMedia(constraints, onUserMediaSuccess, onUserMediaFailure);
            } catch (e) {
                onUserMediaFailure(e);
            }
        });
    }

    function getUserMediaConstraints(options, callback) {
        var that = this;

        if (options.screen) {
            return that._screenShareExtensionManager.isScreenSharingEnabled(function(isEnabled) {
                if (isEnabled) {
                    return that._screenShareExtensionManager.getScreenSharingConstraints(options, callback);
                }

                return that._screenShareExtensionManager.installExtension(function(error, response) {
                    if (error || (response && response.status !== 'ok')) {
                        return callback(error, response);
                    }

                    return that._screenShareExtensionManager.getScreenSharingConstraints(options, callback);
                });
            });
        }

        var constraints = {
            audio: options.audio || false,
            video: options.video || false
        };

        callback(null, {
            status: 'ok',
            constraints: constraints
        });
    }

    var getUserMediaErrorStatus = function getUserMediaErrorStatus(e) {
        var status;

        if (e.code === 'unavailable') {
            status = 'conflict';
        } else if (e.message === 'permission-denied') {
            status = 'permission-denied';
        } else if (e.name === 'PermissionDeniedError') { // Chrome
            status = 'permission-denied';
        } else if (e.name === 'InternalError' && e.message === 'Starting video failed') { // FF (old getUserMedia API)
            status = 'conflict';
        } else if (e.name === 'SourceUnavailableError') { // FF
            status = 'conflict';
        } else if (e.name === 'SecurityError' && e.message === 'The operation is insecure.') { // FF
            status = 'permission-denied';
        } else {
            status = 'failed';
        }

        return status;
    };

    function wrapNativeMediaStream(stream) {
        var lastTrackEnabledStates = {};
        var lastTrackReadyStates = {};
        var that = this;

        setTimeout(function listenForTrackChanges() {
            if (isStreamStopped(stream)) {
                return;
            }

            _.forEach(stream.getTracks(), function(track) {
                if (rtc.global.Event && _.hasIndexOrKey(lastTrackEnabledStates, track.id) && lastTrackEnabledStates[track.id] !== track.enabled) {
                    var trackEnabledChangeEvent = new rtc.global.Event('trackenabledchange');

                    trackEnabledChangeEvent.data = track;

                    track.dispatchEvent(trackEnabledChangeEvent);

                    that._logger.info('[%s] Detected track [%s] enabled change to [%s]', stream.id, track.id, track.enabled);
                }

                if (rtc.global.Event && _.hasIndexOrKey(lastTrackReadyStates, track.id) && lastTrackReadyStates[track.id] !== track.readyState) {
                    var readyStateChangeEvent = new rtc.global.Event('readystatechange');

                    readyStateChangeEvent.data = track;

                    track.dispatchEvent(readyStateChangeEvent);

                    that._logger.info('[%s] Detected track [%s] Ready State change to [%s]', stream.id, track.id, track.readyState);
                }

                lastTrackEnabledStates[track.id] = track.enabled;
                lastTrackReadyStates[track.id] = track.readyState;
            });

            setTimeout(listenForTrackChanges, listenForMediaStreamTrackChangesTimeout);
        }, listenForMediaStreamTrackChangesTimeout);
    }

    function addTracksToWebRTCStream(stream, tracks) {
        if (!stream || !_.isFunction(stream.addTrack)) {
            return;
        }

        _.forEach(tracks, function(track) {
            stream.addTrack(track);
        });
    }

    function isStreamStopped(stream) {
        return _.reduce(stream.getTracks(), function(isStopped, track) {
            return isStopped && isTrackStopped(track);
        }, true);
    }

    function isTrackStopped(track) {
        assert.isNotUndefined(track, 'track');

        return track.readyState === 'ended';
    }

    function stopWebRTCStream(stream) {
        if (stream && _.isFunction(stream.stop)) {
            stream.stop();
        }

        if (stream && _.isFunction(stream.getTracks)) {
            var tracks = stream.getTracks();

            for (var i = 0; i < tracks.length; i++) {
                var track = tracks[i];

                track.stop();
            }
        }
    }

    return UserMediaProvider;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* global chrome */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, phenixRTC) {
    'use strict';

    var defaultChromePCastScreenSharingExtensionId = 'icngjadgidcmifnehjcielbmiapkhjpn';
    var defaultFirefoxPCastScreenSharingAddOn = _.freeze({
        url: 'https://addons.mozilla.org/firefox/downloads/file/474686/pcast_screen_sharing-1.0.3-an+fx.xpi',
        iconUrl: 'https://phenixp2p.com/public/images/phenix-logo-unicolor-64x64.png',
        hash: 'sha256:4972e9718ea7f7c896abc12d1a9e664d5f3efe498539b082ab7694f9d7af4f3b'
    });
    var firefoxInstallationCheckInterval = 100;
    var firefoxMaxInstallationChecks = 450;
    var minimumSupportFirefoxVersionForUnWhiteListedScreenShare = 52;

    function ScreenShareExtensionManager(options, logger) {
        options = options || {};

        assert.isObject(options, 'options');
        assert.isObject(logger, 'logger');

        this._logger = logger;
        this._screenSharingExtensionId = options.screenSharingExtensionId || getDefaultExtensionId();
        this._screenSharingAddOn = options.screenSharingAddOn || defaultFirefoxPCastScreenSharingAddOn;
        this._screenSharingEnabled = false;
        this._isInitializedObservable = new observable.Observable(false);

        if (phenixRTC.browser === 'Chrome' && this._screenSharingExtensionId) {
            addLinkHeaderElement.call(this);
        }

        checkForScreenSharingCapability.call(this, _.bind(handleCheckForScreenSharing, this));
    }

    ScreenShareExtensionManager.prototype.isScreenSharingEnabled = function(callback) {
        var that = this;

        return waitForInitialized.call(this, function() {
            return callback(that._screenSharingEnabled);
        });
    };

    ScreenShareExtensionManager.prototype.installExtension = function(callback) {
        return waitForInitialized.call(this, _.bind(installScreenShareExtension, this, callback));
    };

    ScreenShareExtensionManager.prototype.getScreenSharingConstraints = function(options, callback) {
        return waitForInitialized.call(this, _.bind(getScreenSharingConstraints, this, options, callback));
    };

    ScreenShareExtensionManager.prototype.toString = function() {
        return 'ScreenShareExtensionManager[' + phenixRTC.browser + ']';
    };

    function handleCheckForScreenSharing(isEnabled) {
        this._isInitializedObservable.setValue(true);

        this._screenSharingEnabled = isEnabled;
    }

    function checkForScreenSharingCapability(callback) {
        var that = this;

        if (phenixRTC.browser === 'Chrome' && that._screenSharingExtensionId) {
            var runtimeEnvironment = getRuntime.call(this);

            if (!runtimeEnvironment) {
                return callback(false);
            }

            try {
                runtimeEnvironment.sendMessage(that._screenSharingExtensionId, {type: 'version'}, function(response) {
                    if (response && response.status === 'ok') {
                        that._logger.info('Screen sharing enabled using version [%s]', response.version);
                        callback(true);
                    } else {
                        that._logger.info('Screen sharing NOT available');
                        callback(false);
                    }
                });
            } catch (e) {
                if (e.message) {
                    that._logger.warn(e.message, e);
                }

                callback(false);
            }
        } else if (phenixRTC.browser === 'Firefox' && phenixRTC.browserVersion >= minimumSupportFirefoxVersionForUnWhiteListedScreenShare) {
            callback(true);
        } else if (phenixRTC.browser === 'Firefox' && _.isObject(phenixRTC.global.PCastScreenSharing)) {
            callback(true);
        } else {
            callback(false);
        }
    }

    function waitForInitialized(callback) {
        if (this._isInitializedObservable.getValue()) {
            return callback();
        }

        var initializedSubscription = this._isInitializedObservable.subscribe(function() {
            initializedSubscription.dispose();

            return callback();
        });
    }

    function getChromeWebStoreLink() {
        return 'https://chrome.google.com/webstore/detail/' + this._screenSharingExtensionId;
    }

    function addLinkHeaderElement() {
        var chromeWebStoreUrl = getChromeWebStoreLink.call(this);

        if (typeof document !== "object") {
            return;
        }

        var links = document.getElementsByTagName('link');

        for (var i = 0; i < links.length; i++) {
            if (links[i].href === chromeWebStoreUrl) {
                // Link already present
                return;
            }
        }

        this._logger.debug('Adding Chrome Web Store link [%s]', chromeWebStoreUrl);

        var link = document.createElement('link');

        link.rel = 'chrome-webstore-item';
        link.href = chromeWebStoreUrl;

        document.getElementsByTagName('head')[0].appendChild(link);
    }

    function getScreenSharingConstraints(options, callback) {
        switch (phenixRTC.browser) {
        case 'Chrome':
            return requestMediaSourceIdWithRuntime.call(this, function(error, response) {
                if (error || (response && response.status !== 'ok')) {
                    return callback(error, response);
                }

                // Default to allow the user to request audio if using an older extension or not providing the options
                // If it fails to request the audio the user will receive an error
                if (!response.data && !response.options) {
                    response.options = {canRequestAudioTrack: true};
                }

                // TODO(DY) Remove once customers have updated their extensions
                if (response.data && _.hasIndexOrKey(response.data, 'hasAudio') && !response.options) {
                    response.options = {canRequestAudioTrack: response.data.hasAudio};
                }

                callback(null, {
                    status: 'ok',
                    constraints: mapChromeConstraints(options, response.streamId, response.options)
                });
            });
        case 'Firefox':
            callback(null, {
                status: 'ok',
                constraints: mapNewerConstraints(options)
            });

            break;
        default:
            callback(new Error('not-supported'), {status: 'not-supported'});

            break;
        }
    }

    function requestMediaSourceIdWithRuntime(callback) {
        var that = this;
        var runtimeEnvironment = getRuntime.call(this);

        if (!runtimeEnvironment) {
            return callback(new Error('not-available'));
        }

        try {
            runtimeEnvironment.sendMessage(that._screenSharingExtensionId, {
                type: 'get-desktop-media',
                sources: ['screen', 'window', 'tab', 'audio']
            }, function(response) {
                var shouldCheckIfScreenShareStillInstalled = !response;

                if (shouldCheckIfScreenShareStillInstalled) {
                    return checkForScreenSharingCapability.call(that, function(isEnabled) {
                        handleCheckForScreenSharing.call(that, isEnabled);

                        return callback(new Error('extension-failure'));
                    });
                }

                if (response.status !== 'ok') {
                    return callback(new Error(response.status), response);
                }

                callback(null, response);
            });
        } catch (e) {
            if (e.message) {
                that._logger.warn(e.message);
            }

            callback(e, {status: 'failed'});
        }
    }

    function mapChromeConstraints(options, id, captureOptions) {
        var constraints = {};

        if (_.isObject(options) && _.isObject(options.screen)) {
            constraints.video = options.screen;
        }

        if (_.isObject(options) && _.isObject(options.screenAudio) && captureOptions.canRequestAudioTrack) {
            constraints.audio = options.screenAudio;
        }

        if (options.screen) {
            _.set(constraints, ['video', 'mandatory'], {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: id
            });
        }

        if (options.screenAudio && captureOptions.canRequestAudioTrack) {
            _.set(constraints, ['audio', 'mandatory'], {
                chromeMediaSource: 'system',
                chromeMediaSourceId: id
            });
        }

        return constraints;
    }

    function mapNewerConstraints(options, id) {
        var constraints = {video: {}};

        if (_.isObject(options) && _.isObject(options.screen)) {
            constraints.video = options.screen;
        }

        if (id) {
            constraints.video.mediaSourceId = id;
        }

        constraints.video.mediaSource = constraints.video.mediaSource || 'window';

        return constraints;
    }

    function installScreenShareExtension(callback) {
        var that = this;

        if (that._screenSharingEnabled) {
            return;
        }

        var installCallback = function installCallback(error, status) {
            if (status === 'cancelled') {
                return callback(null, {status: 'cancelled'});
            }

            if (status !== 'ok') {
                return callback(new Error('screen-sharing-installation-failed'), {status: status});
            }

            checkForScreenSharingCapability.call(that, function(screenSharingEnabled) {
                that._screenSharingEnabled = screenSharingEnabled;

                if (!that._screenSharingEnabled) {
                    return callback(new Error('screen-sharing-installation-failed'), {status: status});
                }

                callback(null, {status: 'ok'});
            });
        };

        switch (phenixRTC.browser) {
        case 'Chrome':
            tryInstallChromeScreenSharingExtension.call(that, installCallback);

            break;
        case 'Firefox':
            tryInstallFirefoxScreenSharingExtension.call(that, installCallback);

            break;
        default:
            callback(new Error('not-supported'), {status: 'not-supported'});

            break;
        }
    }

    function tryInstallChromeScreenSharingExtension(callback) {
        var that = this;
        var chromeWebStoreUrl = getChromeWebStoreLink.call(this);

        try {
            chrome.webstore.install(chromeWebStoreUrl, function successCallback() {
                return callback(null, 'ok');
            }, function failureCallback(reason) {
                if (reason) {
                    if (reason.match(/cancelled/ig)) {
                        that._logger.info('User cancelled screen sharing');

                        return callback(new Error(reason), 'cancelled');
                    }

                    that._logger.warn(reason);
                }

                return callback(new Error(reason || 'failed'), 'failed');
            });
        } catch (e) {
            if (e.message) {
                that._logger.warn(e.message);
            }

            callback(e, 'failed');
        }
    }

    function tryInstallFirefoxScreenSharingExtension(callback) {
        try {
            var params = {
                "PCast Screen Sharing": {
                    URL: this._screenSharingAddOn.url,
                    IconURL: this._screenSharingAddOn.iconUrl,
                    Hash: this._screenSharingAddOn.hash,
                    toString: function() {
                        return this.URL;
                    }
                }
            };
            var attemptsLeft = firefoxMaxInstallationChecks;
            var intervalId;
            var success = function success() {
                if (intervalId) {
                    clearInterval(intervalId);
                }

                callback(null, 'ok');
            };

            var failure = function failure() {
                if (intervalId) {
                    clearInterval(intervalId);
                }

                callback(new Error('failed'), 'failed');
            };

            intervalId = setInterval(function() {
                if (_.isObject(phenixRTC.global.PCastScreenSharing)) {
                    return success();
                }

                if (attemptsLeft-- < 0) {
                    return failure();
                }
            }, firefoxInstallationCheckInterval);

            InstallTrigger.install(params, function xpiInstallCallback(url, status) { // eslint-disable-line no-undef
                // Callback only works for verified sites
                if (status === 0) {
                    success();
                } else {
                    failure();
                }
            });
        } catch (e) {
            if (e.message) {
                this._logger.warn(e.message);
            }

            callback('failed', e);
        }
    }

    function getRuntime() {
        var that = this;

        switch (phenixRTC.browser) {
        case 'Chrome':
            if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.sendMessage) {
                that._logger.info('Screen sharing NOT available. Runtime not supported');

                return null;
            }

            return chrome.runtime;
        case 'Firefox':
        default:
            return null;
        }
    }

    function getDefaultExtensionId() {
        switch (phenixRTC.browser) {
        case 'Chrome':
            return defaultChromePCastScreenSharingExtensionId;
        case 'Firefox':
        default:
            return '';
        }
    }

    return ScreenShareExtensionManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(6),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, http, disposable) {
    'use strict';

    var measurementsPerEndPoint = 4;
    var endpointClosenessThreshold = 30;

    function ClosestEndPointResolver(logger, version, onClosestEndpointFound, onAnEndpointResolved) {
        assert.isObject(logger, 'logger');
        assert.isStringNotEmpty(version, 'version');
        assert.isFunction(onClosestEndpointFound, 'onClosestEndpointFound');

        if (onAnEndpointResolved) {
            assert.isFunction(onAnEndpointResolved, 'onAnEndpointResolved');
        }

        this._logger = logger;
        this._version = version;
        this._onClosestEndpointFound = onClosestEndpointFound;

        if (onAnEndpointResolved) {
            this._onAnEndpointResolved = onAnEndpointResolved;
        }

        this._done = false;
        this._minTime = Number.MAX_VALUE;
        this._minResponseText = '';
        this._disposables = new disposable.DisposableList();
    }

    ClosestEndPointResolver.prototype.isResolved = function isResolved() {
        return this._done;
    };

    ClosestEndPointResolver.prototype.dispose = function dispose() {
        this._disposables.dispose();
    };

    ClosestEndPointResolver.prototype.measurementCallback = function measurementCallback(endPoint, time, responseText) {
        if (time < this._minTime) {
            this._logger.info('Current closest end point is [%s] with latency of [%s] ms', responseText, time);
            this._minTime = time;
            this._minResponseText = responseText;
        }

        return this.isResolved();
    };

    ClosestEndPointResolver.prototype.completeCallback = function completeCallback(endPoint) { // eslint-disable-line no-unused-vars
        if (this._minResponseText && this._minTime < Number.MAX_VALUE && !this.isResolved()) {
            this._done = true;

            return this._onClosestEndpointFound(null, {
                uri: this._minResponseText,
                roundTripTime: this._minTime
            });
        }
    };

    ClosestEndPointResolver.prototype.resolveAll = function resolveAll(endPoints) {
        for (var i = 0; i < endPoints.length; i++) {
            this.resolve(endPoints[i], measurementsPerEndPoint);
        }
    };

    ClosestEndPointResolver.prototype.resolve = function resolve(endPoint, measurements) {
        var that = this;
        var measurement = 1;
        var successfulAttempts = 0;

        var nextMeasurement = function nextMeasurement(endPoint) {
            var maxAttempts = 1;
            var start = _.now();

            that._logger.info('[%s] Checking end point [%s]', measurement, endPoint);

            var requestDisposable = http.getWithRetry(endPoint, {
                timeout: 15000,
                queryParameters: {
                    version: that._version,
                    _: _.now()
                },
                retryOptions: {maxAttempts: maxAttempts}
            }, function(err, response) {
                var end = _.now();
                var time = end - start;
                var timeAboveThreshold = time > endpointClosenessThreshold;

                if (that._onAnEndpointResolved) {
                    if (err) {
                        that._onAnEndpointResolved(err);
                    } else {
                        that._onAnEndpointResolved(null, {
                            time: time,
                            endPoint: endPoint
                        });
                    }
                }

                measurement++;

                if (!err) {
                    if (that.measurementCallback(endPoint, time, response.data)) {
                        // Done
                        return;
                    }

                    successfulAttempts++;
                }

                if (measurement <= measurements && !that.isResolved() && (timeAboveThreshold || err)) {
                    if (err) {
                        that._logger.info('Retrying after failure to resolve end point [%s] with [%s]', endPoint, err);
                    }

                    return nextMeasurement(endPoint);
                } else if (successfulAttempts === 0) {
                    return that._logger.warn('Unable to resolve end point [%s] with [%s]', endPoint, err);
                }

                return that.completeCallback(endPoint);
            });

            that._disposables.add(requestDisposable);
        };

        nextMeasurement(endPoint);
    };

    return ClosestEndPointResolver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(49)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(ClosestEndPointResolver) {
    return ClosestEndPointResolver;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(1),
    __webpack_require__(0),
    __webpack_require__(6),
    __webpack_require__(3),
    __webpack_require__(50)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(assert, _, http, disposable, ClosestEndPointResolver) {
    'use strict';

    var maxAttempts = 4;

    function PCastEndPoint(version, baseUri, logger, sessionTelemetry) {
        assert.isStringNotEmpty(version, 'version');
        assert.isStringNotEmpty(baseUri, 'baseUri');
        assert.isObject(logger, 'logger');

        this._version = version;
        this._baseUri = baseUri;
        this._logger = logger;
        this._disposables = new disposable.DisposableList();
        this._sessionTelemetry = sessionTelemetry;
    }

    PCastEndPoint.DefaultPCastUri = 'https://pcast.phenixrts.com';

    PCastEndPoint.prototype.getBaseUri = function() {
        return this._baseUri;
    };

    PCastEndPoint.prototype.resolveUri = function(callback /* (error, {uri, roundTripTime}) */) {
        return resolveUri.call(this, this._baseUri, callback);
    };

    PCastEndPoint.prototype.dispose = function() {
        this._disposables.dispose();
    };

    PCastEndPoint.prototype.toString = function() {
        return 'PCastEndPoint[' + this._baseUri + ']';
    };

    function resolveUri(baseUri, callback /* (error, {uri, roundTripTime}) */) {
        if (baseUri.lastIndexOf('wss:', 0) === 0) {
            // WSS - Specific web socket end point
            callback(undefined, {
                uri: baseUri + '/ws',
                roundTripTime: 0
            });
        } else if (baseUri.lastIndexOf('https:', 0) === 0) {
            // HTTP - Resolve closest end point
            var that = this;

            getEndpoints.call(that, baseUri, function(err, endPoints) {
                if (err) {
                    return callback(err);
                }

                var closestEndPointResolver = new ClosestEndPointResolver(that._logger, that._version, callback, function(err, response){
                    if(err){
                        that._logger.warn('An error occured in resolving an endpoint', err);

                        return;
                    }

                    that._sessionTelemetry.recordMetric('RoundTripTime', {uint64: response.time}, null, {
                        resource: response.endPoint,
                        kind: 'https'
                    });
                });

                closestEndPointResolver.resolveAll(endPoints);

                that._disposables.add(closestEndPointResolver);
            });
        } else {
            // Not supported
            callback(new Error('Uri not supported'));
        }
    }

    function getEndpoints(baseUri, callback) {
        var requestDisposable = http.getWithRetry(baseUri + '/pcast/endPoints', {
            timeout: 15000,
            queryParameters: {
                version: '2018-10-15T16:17:53Z',
                _: _.now()
            },
            retryOptions: {maxAttempts: maxAttempts}
        }, function(err, response) {
            if (err) {
                return callback(new Error('Failed to resolve an end point', err));
            }

            var endPoints = response.data.split(',');

            if (endPoints.length < 1) {
                callback(new Error('Failed to discover end points'));
            }

            callback(undefined, endPoints);
        });

        this._disposables.add(requestDisposable);
    }

    return PCastEndPoint;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    return {
        "package": "shim",
        "messages": []
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var pcastProto = {
        "package": "pcast",
        "options": {"optimize_for": "LITE_RUNTIME"},
        "messages": [
            {
                "name": "Authenticate",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 9,
                        "options": {"default": 0}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "clientVersion",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "device",
                        "id": 12
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "deviceId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "manufacturer",
                        "id": 13
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "platform",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "platformVersion",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "authenticationToken",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectionId",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectionRouteKey",
                        "id": 10
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "remoteAddress",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "applicationId",
                        "id": 8
                    }
                ]
            },
            {
                "name": "AuthenticateResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "redirect",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "roles",
                        "id": 4
                    }
                ]
            },
            {
                "name": "Bye",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    }
                ]
            },
            {
                "name": "ByeResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SessionDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "Type",
                        "name": "type",
                        "id": 1,
                        "options": {"default": "Offer"}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sdp",
                        "id": 2
                    }
                ],
                "enums": [
                    {
                        "name": "Type",
                        "values": [
                            {
                                "name": "Offer",
                                "id": 0
                            },
                            {
                                "name": "Answer",
                                "id": 1
                            }
                        ]
                    }
                ]
            },
            {
                "name": "CreateStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "originStreamIds",
                        "id": 10
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "connectUri",
                        "id": 8
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "connectOptions",
                        "id": 9
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "userAgent",
                        "id": 11
                    },
                    {
                        "rule": "optional",
                        "type": "SetRemoteDescription",
                        "name": "setRemoteDescription",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "CreateOfferDescription",
                        "name": "createOfferDescription",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "CreateAnswerDescription",
                        "name": "createAnswerDescription",
                        "id": 7
                    }
                ]
            },
            {
                "name": "IceServer",
                "fields": [
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "urls",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "username",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "credential",
                        "id": 3
                    }
                ]
            },
            {
                "name": "RtcConfiguration",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "BundlePolicy",
                        "name": "bundlePolicy",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "iceCandidatePoolSize",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "IceServer",
                        "name": "iceServers",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "IceTransportPolicy",
                        "name": "iceTransportPolicy",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "peerIdentity",
                        "id": 6
                    },
                    {
                        "rule": "optional",
                        "type": "RtcpMuxPolicy",
                        "name": "rtcpMuxPolicy",
                        "id": 7
                    }
                ],
                "enums": [
                    {
                        "name": "BundlePolicy",
                        "values": [
                            {
                                "name": "BundlePolicyBalanced",
                                "id": 1
                            },
                            {
                                "name": "BundlePolicyMaxCompat",
                                "id": 2
                            },
                            {
                                "name": "BundlePolicyMaxBundle",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "IceTransportPolicy",
                        "values": [
                            {
                                "name": "IceTransportPolicyAll",
                                "id": 1
                            },
                            {
                                "name": "IceTransportPolicyPublic",
                                "id": 2
                            },
                            {
                                "name": "IceTransportPolicyRelay",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "RtcpMuxPolicy",
                        "values": [
                            {
                                "name": "RtcpMuxPolicyNegotiate",
                                "id": 1
                            },
                            {
                                "name": "RtcpMuxPolicyRequire",
                                "id": 2
                            }
                        ]
                    }
                ]
            },
            {
                "name": "CreateStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "instanceRouteKey",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "streamUris",
                        "id": 8
                    },
                    {
                        "rule": "optional",
                        "type": "RtcConfiguration",
                        "name": "rtcConfiguration",
                        "id": 9
                    },
                    {
                        "rule": "optional",
                        "type": "SetRemoteDescriptionResponse",
                        "name": "setRemoteDescriptionResponse",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "CreateOfferDescriptionResponse",
                        "name": "createOfferDescriptionResponse",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "CreateAnswerDescriptionResponse",
                        "name": "createAnswerDescriptionResponse",
                        "id": 6
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 7
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "offset",
                        "id": 10,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetLocalDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetLocalDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetRemoteDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "SetRemoteDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "CreateOfferDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "CreateOfferDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "CreateAnswerDescription",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "CreateAnswerDescriptionResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "SessionDescription",
                        "name": "sessionDescription",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "IceCandidate",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "candidate",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "sdpMLineIndex",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sdpMid",
                        "id": 3
                    }
                ]
            },
            {
                "name": "AddIceCandidates",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "IceCandidate",
                        "name": "candidates",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 4,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "AddIceCandidatesResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "UpdateStreamState",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "signalingState",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "iceGatheringState",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "iceConnectionState",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 5,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "UpdateStreamStateResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 2
                    }
                ]
            },
            {
                "name": "DestroyStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    }
                ]
            },
            {
                "name": "DestroyStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "ConnectionDisconnected",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "reasonCode",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "description",
                        "id": 3
                    }
                ]
            },
            {
                "name": "ConnectionDisconnectedResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StreamStarted",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SourceStreamStarted",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "StreamEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "continuationId",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "routeKey",
                        "id": 6
                    }
                ]
            },
            {
                "name": "SourceStreamEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 5
                    }
                ]
            },
            {
                "name": "StreamEndedResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "continuationId",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "routeKey",
                        "id": 3
                    }
                ]
            },
            {
                "name": "StreamIdle",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "StreamArchived",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "startTime",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SessionEnded",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "float",
                        "name": "duration",
                        "id": 3
                    }
                ]
            },
            {
                "name": "ResourceIdle",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "routeKey",
                        "id": 2
                    }
                ]
            },
            {
                "name": "ResourceIdleResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "StreamPlaylist",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "PlaylistType",
                        "name": "playlistType",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "bool",
                        "name": "isVariant",
                        "id": 5,
                        "options": {"default": true}
                    }
                ],
                "enums": [
                    {
                        "name": "PlaylistType",
                        "values": [
                            {
                                "name": "Live",
                                "id": 0
                            },
                            {
                                "name": "OnDemand",
                                "id": 1
                            }
                        ]
                    }
                ]
            },
            {
                "name": "StreamRtmp",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "uri",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "height",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "bitrate",
                        "id": 4
                    }
                ]
            },
            {
                "name": "SendEventToClient",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SendEventToClientResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "SendRequestToClient",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "connectionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SendRequestToClientResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "type",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "bytes",
                        "name": "payload",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetupStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamToken",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "CreateStream",
                        "name": "createStream",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetupStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "CreateStreamResponse",
                        "name": "createStreamResponse",
                        "id": 2
                    }
                ]
            },
            {
                "name": "SetupPlaylistStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamToken",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "tags",
                        "id": 4
                    }
                ]
            },
            {
                "name": "PlaylistStreamManifest",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "manifest",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "bool",
                        "name": "isProtectedContent",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "drmToken",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetupPlaylistStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "PlaylistStreamManifest",
                        "name": "manifests",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "offset",
                        "id": 3,
                        "options": {"default": 0}
                    }
                ]
            },
            {
                "name": "StreamDataQuality",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "timestamp",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "DataQualityStatus",
                        "name": "status",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "DataQualityReason",
                        "name": "reason",
                        "id": 5
                    }
                ],
                "enums": [
                    {
                        "name": "DataQualityStatus",
                        "values": [
                            {
                                "name": "NoData",
                                "id": 0
                            },
                            {
                                "name": "AudioOnly",
                                "id": 1
                            },
                            {
                                "name": "All",
                                "id": 2
                            }
                        ]
                    },
                    {
                        "name": "DataQualityReason",
                        "values": [
                            {
                                "name": "None",
                                "id": 0
                            },
                            {
                                "name": "UploadLimited",
                                "id": 1
                            },
                            {
                                "name": "DownloadLimited",
                                "id": 2
                            },
                            {
                                "name": "PublisherLimited",
                                "id": 3
                            },
                            {
                                "name": "NetworkLimited",
                                "id": 4
                            }
                        ]
                    }
                ]
            },
            {
                "name": "StreamDataQualityResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "CallbackEvent",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "apiVersion",
                        "id": 1,
                        "options": {"default": 0}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "entity",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "what",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "data",
                        "id": 4
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 5
                    }
                ]
            },
            {
                "name": "Uri",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "protocol",
                        "id": 1,
                        "options": {"default": "http"}
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "host",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "port",
                        "id": 3,
                        "options": {"default": 80}
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "method",
                        "id": 4,
                        "options": {"default": "POST"}
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "path",
                        "id": 5,
                        "options": {"default": "/"}
                    }
                ]
            },
            {
                "name": "SetApplicationCallback",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "Uri",
                        "name": "callback",
                        "id": 3
                    }
                ]
            },
            {
                "name": "SetApplicationCallbackResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "endpoint",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueAuthenticationToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 3
                    }
                ]
            },
            {
                "name": "IssueAuthenticationTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "authenticationToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueStreamToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "alternateOriginStreamIds",
                        "id": 6
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 5
                    },
                    {
                        "rule": "optional",
                        "type": "bool",
                        "name": "permissive",
                        "id": 7,
                        "options": {"default": false}
                    }
                ]
            },
            {
                "name": "IssueStreamTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "IssueDrmToken",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "originStreamId",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "capabilities",
                        "id": 5
                    }
                ]
            },
            {
                "name": "IssueDrmTokenResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "drmToken",
                        "id": 2
                    }
                ]
            },
            {
                "name": "TerminateStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 5,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 4
                    }
                ],
                "oneofs": {
                    "streamOrToken": [
                        3,
                        5
                    ]
                }
            },
            {
                "name": "TerminateStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "DeleteStream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamId",
                        "id": 3,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "streamToken",
                        "id": 5,
                        "oneof": "streamOrToken"
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "reason",
                        "id": 4
                    }
                ],
                "oneofs": {
                    "streamOrToken": [
                        3,
                        5
                    ]
                }
            },
            {
                "name": "DeleteStreamResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    }
                ]
            },
            {
                "name": "Stream",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 1
                    }
                ]
            },
            {
                "name": "ListStreams",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "start",
                        "id": 3
                    },
                    {
                        "rule": "required",
                        "type": "uint32",
                        "name": "length",
                        "id": 4
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 5
                    }
                ]
            },
            {
                "name": "ListStreamsResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "start",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "uint32",
                        "name": "length",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "Stream",
                        "name": "streams",
                        "id": 4
                    }
                ]
            },
            {
                "name": "GetPlaylistUris",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "applicationId",
                        "id": 1
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "secret",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "streamId",
                        "id": 3
                    },
                    {
                        "rule": "repeated",
                        "type": "string",
                        "name": "options",
                        "id": 4
                    }
                ]
            },
            {
                "name": "GetPlaylistUrisResponse",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "status",
                        "id": 1
                    },
                    {
                        "rule": "repeated",
                        "type": "Playlist",
                        "name": "playlists",
                        "id": 2
                    },
                    {
                        "rule": "optional",
                        "type": "StreamMetadata",
                        "name": "streamInfo",
                        "id": 3
                    }
                ],
                "messages": [
                    {
                        "name": "PlaylistMetadata",
                        "fields": [
                            {
                                "rule": "optional",
                                "type": "uint32",
                                "name": "bitrate",
                                "id": 1
                            },
                            {
                                "rule": "optional",
                                "type": "uint32",
                                "name": "height",
                                "id": 2
                            },
                            {
                                "rule": "optional",
                                "type": "float",
                                "name": "framesPerSecond",
                                "id": 3
                            }
                        ]
                    },
                    {
                        "name": "StreamMetadata",
                        "fields": [
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "startTime",
                                "id": 1
                            },
                            {
                                "rule": "optional",
                                "type": "string",
                                "name": "endTime",
                                "id": 2
                            }
                        ]
                    },
                    {
                        "name": "Playlist",
                        "fields": [
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "name",
                                "id": 1
                            },
                            {
                                "rule": "required",
                                "type": "PlaylistType",
                                "name": "type",
                                "id": 2
                            },
                            {
                                "rule": "required",
                                "type": "string",
                                "name": "uri",
                                "id": 3
                            },
                            {
                                "rule": "required",
                                "type": "bool",
                                "name": "isVariant",
                                "id": 4
                            },
                            {
                                "rule": "required",
                                "type": "bool",
                                "name": "isProtected",
                                "id": 5
                            },
                            {
                                "rule": "required",
                                "type": "PlaylistMetadata",
                                "name": "info",
                                "id": 6
                            }
                        ]
                    }
                ],
                "enums": [
                    {
                        "name": "PlaylistType",
                        "values": [
                            {
                                "name": "Hls",
                                "id": 0
                            },
                            {
                                "name": "Dash",
                                "id": 1
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return pcastProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(8),
    __webpack_require__(15),
    __webpack_require__(2),
    __webpack_require__(53),
    __webpack_require__(52)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, observable, proto, phenixRTC, pcastProto, chatProto) {
    'use strict';

    var apiVersion = 5;

    function PCastProtocol(uri, deviceId, version, logger) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isString(deviceId, 'deviceId');
        assert.isStringNotEmpty(version, 'version');
        assert.isObject(logger, 'logger');

        this._deviceId = deviceId;
        this._version = version;
        this._logger = logger;
        this._mqWebSocket = new proto.MQWebSocket(uri, this._logger, [pcastProto, chatProto], apiVersion);
        this._observableSessionId = new observable.Observable(null).extend({rateLimit: 0});
    }

    PCastProtocol.prototype.onEvent = function(eventName, handler) {
        return this._mqWebSocket.onEvent(eventName, handler);
    };

    PCastProtocol.prototype.disconnect = function() {
        this._observableSessionId.setValue(null);

        return this._mqWebSocket.disconnect();
    };

    PCastProtocol.prototype.authenticate = function(authToken, callback) {
        assert.isStringNotEmpty(authToken, 'authToken');
        assert.isFunction(callback, 'callback');

        var authenticate = {
            apiVersion: this._mqWebSocket.getApiVersion(),
            clientVersion: this._version,
            deviceId: this._deviceId,
            platform: phenixRTC.browser,
            platformVersion: phenixRTC.browserVersion.toString(),
            authenticationToken: authToken
        };

        if (this.getSessionId()) {
            authenticate.sessionId = this.getSessionId();
        }

        var that = this;

        return this._mqWebSocket.sendRequest('pcast.Authenticate', authenticate, function(error, response) {
            if (response) {
                var previousSessionId = that._observableSessionId.getValue();

                if (previousSessionId && previousSessionId !== response.sessionId) {
                    that._mqWebSocket.disposeOfPendingRequests();
                }

                that._observableSessionId.setValue(response.sessionId);
            }

            return callback(error, response);
        });
    };

    PCastProtocol.prototype.getSessionId = function() {
        return this._observableSessionId.getValue();
    };

    PCastProtocol.prototype.getObservableSessionId = function() {
        return this._observableSessionId;
    };

    PCastProtocol.prototype.bye = function(reason, callback) {
        assert.isStringNotEmpty(reason, 'reason');
        assert.isFunction(callback, 'callback');

        var bye = {
            sessionId: this.getSessionId(),
            reason: reason
        };

        return this._mqWebSocket.sendRequest('pcast.Bye', bye, callback);
    };

    PCastProtocol.prototype.setupStream = function(streamType, streamToken, options, rtt, callback) {
        assert.isStringNotEmpty(streamType, 'streamType');
        assert.isStringNotEmpty(streamToken, 'streamToken');
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var browser = phenixRTC.browser || 'UnknownBrowser';
        var browserWithVersion = browser + '-' + (phenixRTC.browserVersion || 0);
        var rttString = 'rtt[http]=' + rtt;
        var setupStream = {
            streamToken: streamToken,
            createStream: {
                sessionId: this.getSessionId(),
                options: ['data-quality-notifications', rttString],
                connectUri: options.connectUri,
                connectOptions: options.connectOptions || [],
                tags: options.tags || [],
                userAgent: _.get(phenixRTC, ['global', 'navigator', 'userAgent'], browserWithVersion)
            }
        };

        if (options.negotiate) {
            setupStream.createStream.createOfferDescription = {
                streamId: '',
                options: [streamType, browser, browserWithVersion],
                apiVersion: this._mqWebSocket.getApiVersion()
            };

            if (typeof screen !== 'undefined') {
                setupStream.createStream.createOfferDescription.options.push('screen=' + screen.width + 'x' + screen.height);
            }
        }

        if (options.receiveAudio === false) {
            setupStream.createStream.options.push('no-audio');
        }

        if (options.receiveVideo === false) {
            setupStream.createStream.options.push('no-video');
        }

        return this._mqWebSocket.sendRequest('pcast.SetupStream', setupStream, callback);
    };

    PCastProtocol.prototype.setAnswerDescription = function(streamId, sdp, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isStringNotEmpty(sdp, 'sdp');
        assert.isFunction(callback, 'callback');

        var setRemoteDescription = {
            streamId: streamId,
            sessionDescription: {
                type: 'Answer',
                sdp: sdp
            },
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.SetRemoteDescription', setRemoteDescription, callback);
    };

    PCastProtocol.prototype.addIceCandidates = function(streamId, candidates, options, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isArray(candidates, 'candidates');
        assert.isObject(options, 'options');
        assert.isFunction(callback, 'callback');

        var sanitizedCandidates = _.map(candidates, function(candidate, index) {
            assert.isStringNotEmpty(candidate.candidate, 'candidate[' + index + '].candidate');
            assert.isNumber(candidate.sdpMLineIndex, 'candidate[' + index + '].sdpMLineIndex');
            assert.isStringNotEmpty(candidate.sdpMid, 'candidate[' + index + '].sdpMid');

            return {
                candidate: candidate.candidate,
                sdpMLineIndex: candidate.sdpMLineIndex,
                sdpMid: candidate.sdpMid
            };
        });

        var addIceCandidates = {
            streamId: streamId,
            candidates: sanitizedCandidates,
            options: options,
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.AddIceCandidates', addIceCandidates, callback);
    };

    PCastProtocol.prototype.updateStreamState = function(streamId, signalingState, iceGatheringState, iceConnectionState, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isStringNotEmpty(signalingState, 'signalingState');
        assert.isStringNotEmpty(iceGatheringState, 'iceGatheringState');
        assert.isStringNotEmpty(iceConnectionState, 'iceConnectionState');
        assert.isFunction(callback, 'callback');

        var updateStreamState = {
            streamId: streamId,
            signalingState: signalingState,
            iceGatheringState: iceGatheringState,
            iceConnectionState: iceConnectionState,
            apiVersion: this._mqWebSocket.getApiVersion()
        };

        return this._mqWebSocket.sendRequest('pcast.UpdateStreamState', updateStreamState, callback);
    };

    PCastProtocol.prototype.destroyStream = function(streamId, reason, callback) {
        assert.isStringNotEmpty(streamId, 'streamId');
        assert.isString(reason, 'reason');
        assert.isFunction(callback, 'callback');

        var destroyStream = {
            streamId: streamId,
            reason: reason
        };

        return this._mqWebSocket.sendRequest('pcast.DestroyStream', destroyStream, callback);
    };

    PCastProtocol.prototype.getRoomInfo = function(roomId, alias, callback) {
        if (roomId) {
            assert.isString(roomId, 'roomId');
        } else {
            assert.isString(alias, 'alias');
        }

        assert.isFunction(callback, 'callback');

        var getRoomInfo = {
            roomId: roomId,
            alias: alias,
            sessionId: this.getSessionId()
        };

        return this._mqWebSocket.sendRequest('chat.GetRoomInfo', getRoomInfo, callback);
    };

    PCastProtocol.prototype.createRoom = function(room, callback) {
        assert.isObject(room, 'room');
        assert.isStringNotEmpty(room.name, 'room.name');
        assert.isStringNotEmpty(room.type, 'room.type');
        assert.isStringNotEmpty(room.description, 'room.description');
        assert.isFunction(callback, 'callback');

        var createRoom = {
            sessionId: this.getSessionId(),
            room: room
        };

        return this._mqWebSocket.sendRequest('chat.CreateRoom', createRoom, callback);
    };

    PCastProtocol.prototype.enterRoom = function(roomId, alias, member, timestamp, callback) {
        if (roomId) {
            assert.isString(roomId, 'roomId');
        } else {
            assert.isString(alias, 'alias');
        }

        assert.isObject(member, 'member');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        var joinRoom = {
            roomId: roomId,
            alias: alias,
            sessionId: this.getSessionId(),
            member: member,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.JoinRoom', joinRoom, callback);
    };

    PCastProtocol.prototype.leaveRoom = function(roomId, timestamp, callback) {
        assert.isString(roomId, 'roomId');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        var leaveRoom = {
            roomId: roomId,
            sessionId: this.getSessionId(),
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.LeaveRoom', leaveRoom, callback);
    };

    PCastProtocol.prototype.updateMember = function(roomId, member, timestamp, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isObject(member, 'member');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        member.updateStreams = member.hasOwnProperty('streams');

        var updateMember = {
            sessionId: this.getSessionId(),
            roomId: roomId,
            member: member,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.UpdateMember', updateMember, callback);
    };

    PCastProtocol.prototype.updateRoom = function(room, timestamp, callback) {
        assert.isObject(room, 'room');
        assert.isNumber(timestamp, 'timestamp');
        assert.isFunction(callback, 'callback');

        var updateRoom = {
            sessionId: this.getSessionId(),
            room: room,
            timestamp: timestamp
        };

        return this._mqWebSocket.sendRequest('chat.UpdateRoom', updateRoom, callback);
    };

    PCastProtocol.prototype.sendMessageToRoom = function(roomId, chatMessage, callback) {
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isObject(chatMessage, 'chatMessage');

        var sendMessage = {
            roomId: roomId,
            chatMessage: chatMessage
        };

        return this._mqWebSocket.sendRequest('chat.SendMessageToRoom', sendMessage, callback);
    };

    PCastProtocol.prototype.subscribeToRoomConversation = function(sessionId, roomId, batchSize, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isStringNotEmpty(roomId, 'roomId');
        assert.isNumber(batchSize, 'batchSize');

        var fetchRoomConversation = {
            sessionId: sessionId,
            roomId: roomId,
            limit: batchSize,
            options: ['Subscribe']
        };

        return this._mqWebSocket.sendRequest('chat.FetchRoomConversation', fetchRoomConversation, callback);
    };

    PCastProtocol.prototype.getMessages = function(sessionId, roomId, batchSize, afterMessageId, beforeMessageId, callback) {
        assert.isStringNotEmpty(sessionId, 'sessionId');
        assert.isStringNotEmpty(roomId, 'roomId');

        if (!beforeMessageId || !afterMessageId) {
            assert.isNumber(batchSize, 'batchSize');
        }

        var fetchRoomConversation = {
            sessionId: sessionId,
            roomId: roomId,
            limit: batchSize || 0,
            options: []
        };

        if (beforeMessageId) {
            assert.isStringNotEmpty(beforeMessageId, 'beforeMessageId');

            fetchRoomConversation.beforeMessageId = beforeMessageId;
        }

        if (afterMessageId) {
            assert.isStringNotEmpty(afterMessageId, 'afterMessageId');

            fetchRoomConversation.afterMessageId = afterMessageId;
        }

        return this._mqWebSocket.sendRequest('chat.FetchRoomConversation', fetchRoomConversation, callback);
    };

    PCastProtocol.prototype.toString = function() {
        return 'PCastProtocol[' + this._mqWebSocket.toString() + ']';
    };

    return PCastProtocol;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(2)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(rtc) {
    'use strict';

    function AudioContext() {
        this.init();
    }

    AudioContext.prototype.init = function init() {
        if (!rtc.global.AudioContext && !rtc.global.webkitAudioContext) {
            throw new Error('Browser does not support AudioContext');
        }

        this._audioContext = new (rtc.global.AudioContext || rtc.global.webkitAudioContext)();
    };

    AudioContext.prototype.getNativeAudioContext = function getNativeAudioContext() {
        return this._audioContext;
    };

    AudioContext.prototype.toString = function toString() {
        return 'AudioContext';
    };

    return AudioContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(1),
    __webpack_require__(7)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(assert, global) {
    'use strict';

    return {
        toString: function(byteArray) {
            var begin = 0;
            var end = byteArray.length;
            var chars = [];
            var parts = [];

            if (begin === end) {
                return "";
            }

            while (begin < end) {
                chars.push(byteArray[begin++]);

                if (chars.length >= 1024) {
                    parts.push(String.fromCharCode.apply(String, chars));
                    chars = [];
                }
            }

            return parts.join('') + String.fromCharCode.apply(String, chars);
        },

        toByteArray: function(data) {
            assert.isString(data, 'data');

            var i = 0;
            var charCode;
            var byteArray = new global.Uint8Array(data.length);

            while (i < data.length) {
                charCode = data.charCodeAt(i);

                if (charCode > 0xff) {
                    throw RangeError("illegal char code: " + charCode);
                }

                byteArray[i++] = charCode;
            }

            return byteArray;
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, disposable) {
    'use strict';

    var requestMethods = {
        'get': 'GET',
        'post': 'POST',
        'put': 'PUT',
        'delete': 'DELETE' // Delete is reserved
    };
    var defaultTimeout = 3000;
    var defaultMaxAttempts = 1;
    var defaultBackoff = 2;
    var defaultRetryDelay = 1500;
    var errorCodes = {
        clientAborted: {
            id: 4000,
            name: 'Aborted by Client'
        }
    };

    function Http() {

    }

    Http.prototype.get = function get(url, settings, callback) {
        settings = settings || {};

        validateSettings(settings);

        var requestUrl = appendQueryParameters(settings.queryParameters || {}, url);
        var xhr = getAndOpenVendorSpecificXmlHttpMethod(requestMethods.get, requestUrl, callback);
        var handleResponse = _.bind(appendResponseTimeAndContinue, this, _.now(), callback);

        if (!xhr) {
            return callback(getUnsupportedError());
        }

        if (settings.mimeType) {
            xhr.overrideMimeType(settings.mimeType);
        }

        if (settings.responseType) {
            xhr.responseType = settings.responseType;
        }

        appendDataTypeHeaders(xhr, settings);

        xhr.addEventListener('readystatechange', _.bind(handleReadyStateChange, this, xhr, settings, handleResponse));

        xhr.timeout = settings.timeout || defaultTimeout;

        xhr.send();
    };

    Http.prototype.post = function postWithRetry(url, data, settings, callback) {
        return methodWithData.call(this, requestMethods.post, url, data, settings, callback);
    };

    Http.prototype.put = function postWithRetry(url, data, settings, callback) {
        return methodWithData.call(this, requestMethods.put, url, data, settings, callback);
    };

    Http.prototype.delete = function postWithRetry(url, data, settings, callback) {
        return methodWithData.call(this, requestMethods.delete, url, data, settings, callback);
    };

    Http.prototype.getWithRetry = function getWithRetry(url, settings, callback) {
        var methodWithoutCallback = _.bind(this.get, this, url, settings);
        var requestState = {
            startTime: _.now(),
            isDisposed: false
        };

        return handleMethodWithRetry.call(this, url, settings, methodWithoutCallback, requestState, callback);
    };

    Http.prototype.postWithRetry = function postWithRetry(url, data, settings, callback) {
        return methodRetryWithData.call(this, this.post, url, data, settings, callback);
    };

    Http.prototype.putWithRetry = function postWithRetry(url, data, settings, callback) {
        return methodRetryWithData.call(this, this.put, url, data, settings, callback);
    };

    Http.prototype.deleteWithRetry = function postWithRetry(url, data, settings, callback) {
        return methodRetryWithData.call(this, this.delete, url, data, settings, callback);
    };

    function methodWithData(method, url, data, settings, callback) {
        settings = settings || {};

        validateSettings(settings);

        var requestUrl = appendQueryParameters(settings.queryParameters || {}, url);
        var xhr = getAndOpenVendorSpecificXmlHttpMethod(method, requestUrl, callback);
        var handleResponse = _.bind(appendResponseTimeAndContinue, this, _.now(), callback);

        if (!xhr) {
            return callback(getUnsupportedError());
        }

        if (settings.responseType) {
            xhr.responseType = settings.responseType;
        }

        appendDataTypeHeaders(xhr, settings);

        xhr.addEventListener('readystatechange', _.bind(handleReadyStateChange, this, xhr, settings, handleResponse));

        xhr.timeout = settings.timeout || 15000;

        xhr.send(data);
    }

    function methodRetryWithData(method, url, data, settings, callback) {
        var methodWithoutCallback = _.bind(method, this, url, data, settings);
        var requestState = {
            startTime: _.now(),
            isDisposed: false
        };

        return handleMethodWithRetry.call(this, url, settings, methodWithoutCallback, requestState, callback);
    }

    function validateSettings(settings) {
        assert.isObject(settings, 'settings');

        if (settings.queryParameters) {
            assert.isObject(settings.queryParameters, 'settings.queryParameters');
        }

        if (settings.mimeType) {
            assert.stringNotEmpty(settings.mimeType, 'settings.mimeType');
        }

        if (settings.accept) {
            assert.stringNotEmpty(settings.accept, 'settings.accept');
        }

        if (settings.contentType) {
            assert.stringNotEmpty(settings.contentType, 'settings.contentType');
        }

        if (settings.responseType) {
            assert.stringNotEmpty(settings.responseType, 'settings.responseType');
        }

        if (!_.isNullOrUndefined(settings.timeout)) {
            assert.isNumber(settings.timeout, 'settings.timeout');
        }
    }

    function appendQueryParameters(queryParameters, url) {
        var indexOfHash = url.lastIndexOf('#');
        var indexOfQuerySeparator = url.indexOf('?');
        var serializedJsonAsQueryString = _.reduce(queryParameters, function(paramString, value, key) {
            paramString += !paramString ? '' : '&';

            return paramString + key.toString() + '=' + value.toString();
        }, '');
        var hashString = indexOfHash === -1 ? '' : url.substring(indexOfHash + 1);
        var queryString = indexOfQuerySeparator === -1 ? '' : url.substring(indexOfQuerySeparator + 1, hashString ? indexOfHash : url.length);
        var concatenatedQueryString = serializedJsonAsQueryString + (queryString ? ('&' + queryString) : '');
        var urlBeforeQueryAndHash = url.replace('?' + queryString, '').replace('#' + hashString, '');

        url = urlBeforeQueryAndHash;

        if (concatenatedQueryString) {
            url += '?' + concatenatedQueryString;
        }

        if (hashString) {
            url += '#' + hashString;
        }

        return url;
    }

    function getAndOpenVendorSpecificXmlHttpMethod(requestMethod, requestUrl) {
        var xhr = new XMLHttpRequest();

        if ('withCredentials' in xhr) {
            // Most browsers.
            xhr.open(requestMethod, requestUrl, true);
        } else if (typeof XDomainRequest !== 'undefined') {
            // IE8 & IE9
            xhr = new XDomainRequest();
            xhr.open(requestMethod, requestUrl);
        } else {
            return;
        }

        return xhr;
    }

    function getUnsupportedError() {
        // CORS not supported.
        var err = new Error('unsupported');

        err.code = 'unsupported';

        return err;
    }

    function appendDataTypeHeaders(xhr, settings) {
        var contentType = settings.contentType || 'application/json';
        var accept = settings.accept || contentType;

        var headers = _.assign({}, {
            'Content-Type': contentType,
            'Accept': accept
        }, _.get(settings, ['headers'], {}));

        _.forOwn(headers, function(headerValue, headerName) {
            xhr.setRequestHeader(headerName, headerValue);
        });
    }

    function handleReadyStateChange(xhr, options, callback) {
        if (xhr.readyState === 4 /* DONE */) {
            if (xhr.status === 200) {
                var responseHeaders = getXhrResponseHeaders(xhr);
                var response = {
                    data: xhr.response || xhr.responseText,
                    headers: responseHeaders,
                    rawXhr: xhr
                };

                callback(null, response);
            } else {
                var err = new Error(xhr.status === 0 ? 'timeout' : 'Status=[' + xhr.status + ']');
                var additionalRetryErrorCodes = _.get(options, ['retryOptions', 'additionalRetryErrorCodes'], []);

                _.forEach(additionalRetryErrorCodes, function(code) {
                    assert.isNumber(code, 'additionalRetryErrorCode');
                });

                err.code = xhr.status;

                if ((xhr.status >= 500 && xhr.status < 600) || _.includes(additionalRetryErrorCodes, xhr.status)) {
                    err.retryable = true;
                }

                callback(err);
            }
        }
    }

    function getXhrResponseHeaders(xhr) {
        var responseHeadersString = xhr.getAllResponseHeaders();

        return _.reduce(responseHeadersString.trim().split(/[\r\n]+/), function(headers, header) {
            var parts = header.split(': ');
            var headerName = parts.shift();
            var headerValue = parts.join(': ');

            if (headerName) {
                headers[headerName] = headerValue;
            }

            return headers;
        }, {});
    }

    function appendResponseTimeAndContinue(startTime, callback, error, response) {
        if (response) {
            _.set(response, ['stats', 'successResponseTime'], _.now() - startTime);
        }

        callback(error, response);
    }

    function appendTotalResponseTimeAndContinue(startTime, attempts, callback, error, response) {
        if (response) {
            _.set(response, ['stats', 'totalResponseTimeForAllAttempts'], _.now() - startTime);
            _.set(response, ['stats', 'attempts'], attempts);
        }

        callback(error, response);
    }

    function handleMethodWithRetry(url, options, methodWithoutCallback, requestState, callback, attempt) {
        attempt = attempt || 1;

        var that = this;
        var initalRequestDelay = _.get(options, ['delay'], null);
        var retryDelay = _.get(options, ['retryOptions', 'delay'], defaultRetryDelay);
        var backoff = _.get(options, ['retryOptions', 'backoff'], defaultBackoff);
        var maxAttempts = _.get(options, ['retryOptions', 'maxAttempts'], defaultMaxAttempts);
        var requestDelay = attempt > 1 ? retryDelay * Math.pow(attempt, backoff) : initalRequestDelay;

        var retryIfFailed = function(error, response) {
            if (requestState.isDisposed) {
                return callback(getErrorByEnum(errorCodes.clientAborted));
            }

            if (error && error.retryable && attempt < maxAttempts) {
                return handleMethodWithRetry.call(that, url, options, methodWithoutCallback, requestState, callback, attempt + 1);
            }

            return appendTotalResponseTimeAndContinue.call(that, requestState.startTime, attempt, callback, error, response);
        };

        var disposableRequest = new disposable.Disposable(function() {
            if (_.isNumber(requestState.mostRecentTimeout)) {
                clearTimeout(requestState.mostRecentTimeout);
            }

            requestState.isDisposed = true;
        });

        if (!_.isNumber(initalRequestDelay) && attempt === 1 || _.get(options, ['retryOptions', 'sync'], false)) {
            methodWithoutCallback.call(that, retryIfFailed);

            return disposableRequest;
        }

        delayedRequest.call(that, url, options, methodWithoutCallback, requestState, requestDelay, retryIfFailed);

        return disposableRequest;
    }

    function delayedRequest(url, options, methodWithoutCallback, requestState, delay, callback) {
        var that = this;

        requestState.mostRecentTimeout = setTimeout(function() {
            if (requestState.isDisposed) {
                return callback(getErrorByEnum(errorCodes.clientAborted));
            }

            methodWithoutCallback.call(that, callback);
        }, delay);
    }

    function getErrorByEnum(codeEnum) {
        var errorWithEnum = new Error(codeEnum.name);

        errorWithEnum.code = codeEnum.id;

        return errorWithEnum;
    }

    return new Http();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(7),
    __webpack_require__(27),
    __webpack_require__(6),
    __webpack_require__(8),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, global, networkConnectionMonitor, http, observable, disposable) {
    var networkDisconnectHysteresisInterval = 0;
    var events = {
        capacity: 'capacity',
        error: 'error',
        response: 'response'
    };
    var localStoreKeyPrefix = '__phenixBatchHttpMessages';

    function BatchHttp(uri, options, serializeRequest, deserializeResponse) {
        assert.isStringNotEmpty(uri, 'uri');

        options = options || {};

        assert.isObject(options, 'options');

        if (options.requestType) {
            assert.isStringNotEmpty(options.requestType, 'options.requestType');
        }

        if (options.maxAttempts) {
            assert.isNumber(options.maxAttempts, 'options.maxAttempts');
        }

        if (options.maxBufferedRecords) {
            assert.isNumber(options.maxBufferedRecords, 'options.maxBufferedRecords');
        }

        if (options.maxBatchSize) {
            assert.isNumber(options.maxBatchSize, 'options.maxBatchSize');
        }

        if (options.contentType) {
            assert.isStringNotEmpty(options.contentType, 'options.maxBatchSize');
        }

        if (serializeRequest) {
            assert.isFunction(serializeRequest, 'serializeRequest');
        }

        if (deserializeResponse) {
            assert.isFunction(deserializeResponse, 'deserializeResponse');
        }

        this._localStoreKey = localStoreKeyPrefix + '|' + uri;
        this._requestType = options.requestType || 'POST';
        this._requestTimeout = options.requestTimeout || 30000;
        this._maxAttempts = options.maxAttempts || 5;
        this._maxBufferedRecords = options.maxBufferedRecords || 1000;
        this._maxBatchSize = options.maxBatchSize || 100;
        this._contentType = options.contentType || 'application/json';
        this._serializeRequest = serializeRequest;
        this._deserializeResponse = deserializeResponse;
        this._uri = uri;
        this._records = getStoredMessages.call(this) || [];
        this._isEnabled = true;
        this._namedEvents = new event.NamedEvents();
        this._canSendRequestObservable = new observable.Observable(true);
        this._disposables = new disposable.DisposableList();
        this._pending = false;
        this._unloadTriggered = false;

        this._disposables.add(this._canSendRequestObservable.subscribe(_.bind(sendMessagesIfAble, this)));
        this._disposables.add(startNetworkConnectionMonitor.call(this));
        this._disposables.add(this._namedEvents);

        setStoredMessages.call(this, []);

        sendMessagesIfAble.call(this);

        var that = this;

        _.addEventListener(global, 'beforeunload', function() {
            appendStoredMessages.call(that, that._records);

            that._unloadTriggered = true;

            that._records = [];
        });
    }

    BatchHttp.prototype.on = function on(eventName, callback) {
        assert.isStringNotEmpty(eventName, 'eventName');
        assert.isFunction(callback, 'callback');

        return this._namedEvents.listen(eventName, callback);
    };

    BatchHttp.prototype.addRecord = function(record) {
        if (this._unloadTriggered) {
            return appendStoredMessages.call(this, [record]);
        }

        this._records.push(record);

        sendMessagesIfAble.call(this);
        deleteRecordsIfAtCapacity.call(this);
    };

    BatchHttp.prototype.addRecordToBeginning = function(record) {
        this._records.unshift(record);

        sendMessagesIfAble.call(this);
        deleteRecordsIfAtCapacity.call(this);
    };

    BatchHttp.prototype.dispose = function dispose() {
        this._records = [];

        this._disposables.dispose();
    };

    function deleteRecordsIfAtCapacity() {
        if (this._records.length > this._maxBufferedRecords) {
            var deleteRecords = this._records.length - (this._maxBufferedRecords / 2);

            this._records = this._records.slice(deleteRecords);

            this._namedEvents.fireAsync(events.capacity, [null, {numberOfDeletedRecords: deleteRecords}]);
        }
    }

    function sendMessagesIfAble() {
        if (!this._canSendRequestObservable.getValue() || this._records.length === 0) {
            return;
        }

        setStatus.call(this, true);

        var storeRecords = {records: _.take(this._records, this._maxBatchSize)};

        this._records = this._records.slice(this._maxBatchSize);

        var that = this;

        try {
            sendHttpRequest.call(this, this._uri, storeRecords, function onTimeout() {
                setTimeout(function waitForDisconnectTimeout() {
                    that._records = that._records.concat(storeRecords.records);

                    setStatus.call(that, false);
                }, networkDisconnectHysteresisInterval);
            });
        } catch (e) {
            setTimeout(function() {
                setStatus.call(that, false);

                return that._namedEvents.fire(events.error, [e]);
            }, networkDisconnectHysteresisInterval);
        }
    }

    function startNetworkConnectionMonitor() {
        var that = this;

        function onNetworkStatusChange() {
            setStatus.call(that, that._pending);
        }

        return networkConnectionMonitor.listenForNetworkChange(onNetworkStatusChange);
    }

    function sendHttpRequest(url, dataToSend, onTimeout) {
        var that = this;

        var data = this._serializeRequest ? this._serializeRequest(_.assign({}, dataToSend)) : dataToSend;

        function handleResponse(error, response) {
            if (error) {
                if (error.message === 'timeout' && !isAtMaxRecords.call(that)) {
                    return onTimeout();
                }

                setStatus.call(that, false);

                return that._namedEvents.fire(events.error, [error]);
            }

            setStatus.call(that, false);

            var parsedResponse = that._deserializeResponse ? that._deserializeResponse(response.data) : response.data;

            return that._namedEvents.fire(events.response, [parsedResponse]);
        }

        switch (this._requestType) {
        case 'POST':
            return http.postWithRetry(url, data, {
                timeout: this._requestTimeout,
                contentType: this._contentType,
                retryOptions: {
                    maxAttempts: this._maxAttempts,
                    additionalRetryErrorCodes: [0]
                }
            }, handleResponse);
        default:
            throw new Error('Invalid request type');
        }
    }

    function isAtMaxRecords() {
        return this._records.length >= this._maxBufferedRecords;
    }

    function setStatus(pending) {
        this._pending = pending;

        this._canSendRequestObservable.setValue(!pending && networkConnectionMonitor.isOnline());
    }

    var getStoredMessages = function getStoredMessages() {
        if (!global.localStorage) {
            return null;
        }

        var storedMessages = global.localStorage.getItem(this._localStoreKey);

        if (storedMessages) {
            return JSON.parse(storedMessages);
        }

        return [];
    };

    var appendStoredMessages = function appendStoredMessages(messages) {
        if (!global.localStorage || !messages || messages.length === 0) {
            return null;
        }

        var messagesToStore = getStoredMessages.call(this).concat(messages);

        return setStoredMessages.call(this, messagesToStore);
    };

    var setStoredMessages = function setStoredMessages(messages) {
        if (!global.localStorage || !messages) {
            return null;
        }

        return global.localStorage.setItem(this._localStoreKey, JSON.stringify(messages));
    };

    return BatchHttp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(58)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(BatchHttp) {
    'use strict';

    return BatchHttp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(59),
    __webpack_require__(25),
    __webpack_require__(56)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, BatchHttp, MQProtocol, Binary) {
    'use strict';

    function BatchHttpProtocol(uri, protocols, type, options, apiVersion) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isArray(protocols, 'protocols');
        assert.isStringNotEmpty(type, 'type');
        assert.isObject(options, 'options');

        var bufferedHttpOptions = _.assign({}, options || {}, {contentType: 'application/protobuf'});
        var mqProtocol = new MQProtocol(protocols, apiVersion);

        return new BatchHttp(uri, bufferedHttpOptions, _.bind(prepareRequest, this, mqProtocol, type), _.bind(prepareResponse, this, mqProtocol, type));
    }

    function prepareRequest(mqProtocol, type, data) {
        return Binary.toString(mqProtocol.encode(type, data));
    }

    function prepareResponse(mqProtocol, type, data) {
        return mqProtocol.decode(type + 'Response', Binary.toByteArray(data));
    }

    return BatchHttpProtocol;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Copyright 2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @license lxiv (c) 2014 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/lxiv for details
 */
(function() {

    /**
     * lxiv namespace.
     * @type {!Object.<string,*>}
     * @exports lxiv
     */
    var lxiv = {};

    /**
     * Character codes for output.
     * @type {!Array.<number>}
     * @inner
     */
    var aout = [
        65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
        81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102,
        103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118,
        119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
    ];

    /**
     * Character codes for input.
     * @type {!Array.<number>}
     * @inner
     */
    var ain = [];
    for (var i=0, k=aout.length; i<k; ++i)
        ain[aout[i]] = i;

    /**
     * Encodes bytes to base64 char codes.
     * @param {!function():number|null} src Bytes source as a function returning the next byte respectively `null` if
     *  there are no more bytes left.
     * @param {!function(number)} dst Characters destination as a function successively called with each encoded char
     *  code.
     * @expose
     */
    lxiv.encode = function(src, dst) {
        var b, t;
        while ((b = src()) !== null) {
            dst(aout[(b>>2)&0x3f]);
            t = (b&0x3)<<4;
            if ((b = src()) !== null) {
                t |= (b>>4)&0xf;
                dst(aout[(t|((b>>4)&0xf))&0x3f]);
                t = (b&0xf)<<2;
                if ((b = src()) !== null)
                    dst(aout[(t|((b>>6)&0x3))&0x3f]),
                    dst(aout[b&0x3f]);
                else
                    dst(aout[t&0x3f]),
                    dst(61);
            } else
                dst(aout[t&0x3f]),
                dst(61),
                dst(61);
        }
    };

    /**
     * Decodes base64 char codes to bytes.
     * @param {!function():number|null} src Characters source as a function returning the next char code respectively
     *  `null` if there are no more characters left.
     * @param {!function(number)} dst Bytes destination as a function successively called with the next byte.
     * @throws {Error} If a character code is invalid
     * @expose
     */
    lxiv.decode = function(src, dst) {
        var c, t1, t2;
        function fail(c) {
            throw Error("Illegal character code: "+c);
        }
        while ((c = src()) !== null) {
            t1 = ain[c];
            if (typeof t1 === 'undefined') fail(c);
            if ((c = src()) !== null) {
                t2 = ain[c];
                if (typeof t2 === 'undefined') fail(c);
                dst((t1<<2)>>>0|(t2&0x30)>>4);
                if ((c = src()) !== null) {
                    t1 = ain[c];
                    if (typeof t1 === 'undefined')
                        if (c === 61) break; else fail(c);
                    dst(((t2&0xf)<<4)>>>0|(t1&0x3c)>>2);
                    if ((c = src()) !== null) {
                        t2 = ain[c];
                        if (typeof t2 === 'undefined')
                            if (c === 61) break; else fail(c);
                        dst(((t1&0x3)<<6)>>>0|t2);
                    }
                }
            }
        }
    };

    /**
     * Tests if a string is valid base64.
     * @param {string} str String to test
     * @returns {boolean} `true` if valid, otherwise `false`
     * @expose
     */
    lxiv.test = function(str) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
    };

    /* CommonJS */ if (typeof module !== 'undefined' && module["exports"])
        module["exports"] = lxiv;
    /* AMD */ else if (true)
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return lxiv; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /* Global */ else
        {}

})();


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/*
 Copyright 2014 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

module.exports = __webpack_require__(61);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(7),
    __webpack_require__(62)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, global, lxiv) {
    'use strict';

    function StringBuilder() {
        this._tempCharCodes = [];
        this._builtString = '';
    }

    StringBuilder.prototype.push = function push() {
        if ((this._tempCharCodes.length + arguments.length) > 1024) {
            this._builtString += String.fromCharCode.apply(String, this._tempCharCodes);
            this._tempCharCodes.length = 0;
        }

        Array.prototype.push.apply(this._tempCharCodes, arguments);
    };

    StringBuilder.prototype.build = function push() {
        return this._builtString + String.fromCharCode.apply(String, this._tempCharCodes);
    };

    function stringSource(stringValue) {
        var index = 0;

        return function() {
            return index < stringValue.length ? stringValue.charCodeAt(index++) : null;
        };
    }

    return {
        toString: function(byteArray) {
            var begin = 0;
            var end = byteArray.length;
            var stringBuilder = new StringBuilder();

            lxiv.encode(function() {
                return begin < end ? byteArray[begin++] : null;
            }, _.bind(stringBuilder.push, stringBuilder));

            return stringBuilder.build();
        },

        toByteArray: function(data) {
            assert.isString(data, 'data');

            var tempArray = [];

            lxiv.decode(stringSource(data), function(b) {
                tempArray.push(b);
            });

            return new global.Uint8Array(tempArray);
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var mqProto = {
        "package": "mq",
        "messages": [
            {
                "name": "Message",
                "fields": [
                    {
                        "rule": "optional",
                        "type": "MessageType",
                        "name": "messageType",
                        "id": 7,
                        "options": {"default": "Request"}
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "sessionId",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "requestId",
                        "id": 2
                    },
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "type",
                        "id": 3
                    },
                    {
                        "rule": "optional",
                        "type": "string",
                        "name": "encoding",
                        "id": 4
                    },
                    {
                        "rule": "required",
                        "type": "bytes",
                        "name": "payload",
                        "id": 5
                    },
                    {
                        "rule": "repeated",
                        "type": "double",
                        "name": "wallTime",
                        "id": 6
                    }
                ],
                "enums": [
                    {
                        "name": "MessageType",
                        "values": [
                            {
                                "name": "Request",
                                "id": 0
                            },
                            {
                                "name": "Response",
                                "id": 1
                            },
                            {
                                "name": "Event",
                                "id": 2
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Error",
                "fields": [
                    {
                        "rule": "required",
                        "type": "string",
                        "name": "reason",
                        "id": 1
                    }
                ]
            },
            {
                "name": "PingPong",
                "fields": [
                    {
                        "rule": "required",
                        "type": "uint64",
                        "name": "originTimestamp",
                        "id": 1
                    },
                    {
                        "rule": "optional",
                        "type": "uint64",
                        "name": "count",
                        "id": 2
                    }
                ]
            }
        ]
    };

    return mqProto;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    function Schema(proto) {
        this._rawProtoJson = proto;
        this._parsedProto = {};
        this._enums = {};

        // First define all messages and enums
        mapProto.call(this, this._rawProtoJson, this._parsedProto);
        // Then define all fields and link types to messages or enums
        mapFields.call(this, this._rawProtoJson, this._parsedProto);
    }

    Schema.prototype.read = function read(type, pbf, end) {
        if (!this._parsedProto.messages[type]) {
            throw new Error('Unsupported proto type [' + type + ']');
        }

        return readFieldWithParent.call(this, this._parsedProto, type, pbf, end);
    };

    Schema.prototype.write = function write(type, obj, pbf) {
        if (!this._parsedProto.messages[type]) {
            throw new Error('Unsupported proto type [' + type + ']');
        }

        return writeFieldWithParent.call(this, this._parsedProto, type, obj, pbf);
    };

    function readFieldWithParent(parent, type, pbf, end) {
        var that = this;
        var response = buildDefaultObject(parent.messages[type]);

        return pbf.readFields(function(fieldId, result, pbfResult) {
            if (!parent.messages[type].fieldIds[fieldId]) {
                return;
            }

            var field = parent.messages[type].fields[fieldId];

            if (field.rule === 'repeated') {
                result[field.name].push(readField.call(that, parent.messages[type], type, fieldId, pbfResult));
            } else {
                result[field.name] = readField.call(that, parent.messages[type], type, fieldId, pbfResult);
            }
        }, response, end);
    }

    function writeFieldWithParent(parent, type, obj, pbf) {
        var that = this;
        var message = parent.messages[type];

        _.forEach(_.keys(message.fields), function(fieldId) {
            return writeField.call(that, parent, type, parseInt(fieldId), obj, pbf);
        });
    }

    function writeField(parent, type, fieldId, obj, pbf, index) {
        var that = this;
        var message = parent.messages[type];
        var field = message.fields[fieldId];
        var value = obj[field.name];

        if (!_.isUndefined(index)) {
            value = value[index];
        }

        if (field.defaultValue === value || _.isUndefined(value)) {
            return;
        }

        if (_.isArray(value)) {
            if (field.rule !== 'repeated') {
                throw new Error('Invalid type. Array is not valid with rule [' + field.rule + ']');
            }

            return _.forEach(value, function(item, idx) {
                writeField.call(that, parent, type, fieldId, obj, pbf, idx);
            });
        }

        if (_.isObject(field.schema) && _.isObject(value)) {
            return pbf.writeMessage(fieldId, _.bind(writeFieldWithParent, this, field.schema.parent, field.type), value);
        }

        var valueToWrite = _.isUndefined(value) ? field.defaultValue : value;

        // Enum
        if (_.isObject(field.schema) && !field.schema.fields) {
            var enumId = _.isNumber(value) ? value : _.get(field.schema, [valueToWrite, 'id']);

            return pbf.writeVarintField(fieldId, enumId);
        }

        switch (field.type) {
        case 'string':
            return pbf.writeStringField(fieldId, valueToWrite);
        case 'float':
            return pbf.writeFloatField(fieldId, valueToWrite);
        case 'double':
            return pbf.writeDoubleField(fieldId, valueToWrite);
        case 'bool':
            return pbf.writeBooleanField(fieldId, valueToWrite);
        case 'enum':
        case 'uint32':
        case 'uint64':
        case 'int32':
        case 'int64':
            return pbf.writeVarintField(fieldId, valueToWrite);
        case 'sint32':
        case 'sint64':
            return pbf.writeSVarintField(fieldId, valueToWrite);
        case 'fixed32':
            return pbf.writeFixed32Field(fieldId, valueToWrite);
        case 'fixed64':
            return pbf.writeFixed64Field(fieldId, valueToWrite);
        case 'sfixed32':
            return pbf.writeSFixed32Field(fieldId, valueToWrite);
        case 'sfixed64':
            return pbf.writeSFixed64Field(fieldId, valueToWrite);
        case 'bytes':
            return pbf.writeBytesField(fieldId, valueToWrite);
        default:
            throw new Error('Unexpected type: ' + field.type);
        }
    }

    Schema.prototype.getDefaults = function getDefaults() {

    };

    function mapProto(proto, parent) {
        if (_.get(proto, ['messages', 'length'], 0) > 0) {
            mapMessages.call(this, proto.messages, parent);
        }

        if (_.get(proto, ['enums', 'length'], 0) > 0) {
            mapEnums.call(this, proto.enums, parent);
        }
    }

    function mapFields(proto, parent) {
        var that = this;

        _.forEach(proto.messages, function(message) {
            parent.messages[message.name].fields = _.reduce(message.fields, _.bind(mapField, this, parent.messages[message.name]), {});

            if (message.messages) {
                mapFields.call(that, message, parent.messages[message.name]);
            }
        });
    }

    function mapMessages(messages, parent) {
        var that = this;

        parent.messages = _.reduce(messages, function(parsedMessages, message) {
            if (parent[message.name]) {
                return;
            }

            var fieldIds = _.reduce(message.fields, function(candidateIds, field) {
                candidateIds[field.id] = true;

                return candidateIds;
            }, {});

            parsedMessages[message.name] = {
                parent: parent,
                type: message.name,
                fieldIds: fieldIds
            };

            mapProto.call(that, message, parsedMessages[message.name]);

            return parsedMessages;
        }, {});
    }

    function mapEnums(enumsProto, parent) {
        parent.enums = _.reduce(enumsProto, function(enums, enumProto) {
            enums[enumProto.name] = _.reduce(enumProto.values, function(values, value) {
                values[value.name] = value;

                return values;
            }, {});

            return enums;
        }, {});
    }

    function mapField(parent, fieldObject, field) {
        // TODO(dy) add oneof property validation

        fieldObject[field.id] = {
            rule: field.rule,
            type: field.type,
            name: field.name,
            schema: mapType.call(this, field.type, parent),
            defaultValue: getDefaultValue(field.rule, field.type, _.get(field, ['options', 'default']))
        };

        return fieldObject;
    }

    function mapType(type, parent) {
        if (_.get(parent, ['messages', type])) {
            return parent.messages[type];
        }

        if (_.get(parent, ['enums', type])) {
            return parent.enums[type];
        }

        if (parent.parent) {
            return mapType(type, parent.parent);
        }

        return type;
    }

    function readField(message, type, fieldId, pbf) {
        var signed = type === 'int32' || type === 'int64' ? 'true' : '';
        var field = message.fields[fieldId];

        if (_.isObject(field.schema)) {
            // Field schema is a message
            if (field.schema.fields) {
                return readFieldWithParent.call(this, field.schema.parent, field.type, pbf, pbf.readVarint() + pbf.pos);
            }

            var enumId = pbf.readVarint(signed);
            var enumName = _.getEnumName(field.schema, enumId);

            if (_.isNullOrUndefined(enumName)) {
                throw new Error('Unsupported enum id [' + enumId + '] for field [' + field.name + '] on message [' + message.type + ']');
            }

            // Field schema is an Enum
            return enumName;
        }

        switch (field.type) {
        case 'string':
            return pbf.readString(signed);
        case 'float':
            return pbf.readFloat(signed);
        case 'double':
            return pbf.readDouble(signed);
        case 'bool':
            return pbf.readBoolean(signed);
        case 'enum':
            return pbf.readVarint(signed);
        case 'uint32':
        case 'uint64':
        case 'int32':
        case 'int64':
            return pbf.readVarint(signed);
        case 'sint32':
        case 'sint64':
            return pbf.readSVarint(signed);
        case 'fixed32':
            return pbf.readFixed32(signed);
        case 'fixed64':
            return pbf.readFixed64(signed);
        case 'sfixed32':
            return pbf.readSFixed32(signed);
        case 'sfixed64':
            return pbf.readSFixed64(signed);
        case 'bytes':
            return pbf.readBytes(signed);
        default:
            throw new Error('Unexpected type: ' + field.type);
        }
    }

    function getDefaultValue(rule, type, optionalDefaultValue) {
        if (rule === 'repeated') {
            return [];
        }

        switch (type) {
        case 'float':
        case 'double':
        case 'uint32':
        case 'uint64':
        case 'int32':
        case 'int64':
        case 'sint32':
        case 'sint64':
        case 'fixed32':
        case 'fixed64':
        case 'sfixed32':
        case 'sfixed64':
        case 'string':
        case 'enum':
        case 'bool':
        case 'long':
        default:
            return _.isUndefined(optionalDefaultValue) ? null : optionalDefaultValue;
        }
    }

    function buildDefaultObject(message) {
        return _.reduce(message.fields, function(defaultObject, field) {
            defaultObject[field.name] = _.clone(field.defaultValue);

            return defaultObject;
        }, {});
    }

    return Schema;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 66 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Pbf;

var ieee754 = __webpack_require__(66);

function Pbf(buf) {
    this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
    this.pos = 0;
    this.type = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16),
    SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        end = end || this.length;

        while (this.pos < end) {
            var val = this.readVarint(),
                tag = val >> 3,
                startPos = this.pos;

            this.type = val & 0x7;
            readField(tag, result, this);

            if (this.pos === startPos) this.skip(val);
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
    },

    readVarint: function(isSigned) {
        var buf = this.buf,
            val, b;

        b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) return val;
        b = buf[this.pos];   val |= (b & 0x0f) << 28;

        return readVarintRemainder(val, isSigned, this);
    },

    readVarint64: function() { // for compatibility with v2.0.1
        return this.readVarint(true);
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos,
            str = readUtf8(this.buf, this.pos, end);
        this.pos = end;
        return str;
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function(arr, isSigned) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readVarint(isSigned));
        return arr;
    },
    readPackedSVarint: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSVarint());
        return arr;
    },
    readPackedBoolean: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readBoolean());
        return arr;
    },
    readPackedFloat: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFloat());
        return arr;
    },
    readPackedDouble: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readDouble());
        return arr;
    },
    readPackedFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed32());
        return arr;
    },
    readPackedSFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed32());
        return arr;
    },
    readPackedFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed64());
        return arr;
    },
    readPackedSFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed64());
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) while (this.buf[this.pos++] > 0x7f) {}
        else if (type === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
        else if (type === Pbf.Fixed32) this.pos += 4;
        else if (type === Pbf.Fixed64) this.pos += 8;
        else throw new Error('Unimplemented type: ' + type);
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) length *= 2;

        if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val || 0;

        if (val > 0xfffffff || val < 0) {
            writeBigVarint(val, this);
            return;
        }

        this.realloc(4);

        this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] =   (val >>> 7) & 0x7f;
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);

        this.pos++; // reserve 1 byte for short string length

        var startPos = this.pos;
        // write the string directly to the buffer and see how much was written
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) this.buf[this.pos++] = buffer[i];
    },

    writeRawMessage: function(fn, obj) {
        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
    },

    writePackedVarint:   function(tag, arr) { this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function readVarintRemainder(l, s, p) {
    var buf = p.buf,
        h, b;

    b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) return toNum(l, h, s);

    throw new Error('Expected varint not more than 10 bytes');
}

function readPackedEnd(pbf) {
    return pbf.type === Pbf.Bytes ?
        pbf.readVarint() + pbf.pos : pbf.pos + 1;
}

function toNum(low, high, isSigned) {
    if (isSigned) {
        return high * 0x100000000 + (low >>> 0);
    }

    return ((high >>> 0) * 0x100000000) + (low >>> 0);
}

function writeBigVarint(val, pbf) {
    var low, high;

    if (val >= 0) {
        low  = (val % 0x100000000) | 0;
        high = (val / 0x100000000) | 0;
    } else {
        low  = ~(-val % 0x100000000);
        high = ~(-val / 0x100000000);

        if (low ^ 0xffffffff) {
            low = (low + 1) | 0;
        } else {
            low = 0;
            high = (high + 1) | 0;
        }
    }

    if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
        throw new Error('Given varint doesn\'t fit into 10 bytes');
    }

    pbf.realloc(10);

    writeBigVarintLow(low, high, pbf);
    writeBigVarintHigh(high, pbf);
}

function writeBigVarintLow(low, high, pbf) {
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos]   = low & 0x7f;
}

function writeBigVarintHigh(high, pbf) {
    var lsb = (high & 0x07) << 4;

    pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f;
}

function makeRoomForExtraLength(startPos, len, pbf) {
    var extraLen =
        len <= 0x3fff ? 1 :
        len <= 0x1fffff ? 2 :
        len <= 0xfffffff ? 3 : Math.ceil(Math.log(len) / (Math.LN2 * 7));

    // if 1 byte isn't enough for encoding message length, shift the data to the right
    pbf.realloc(extraLen);
    for (var i = pbf.pos - 1; i >= startPos; i--) pbf.buf[i + extraLen] = pbf.buf[i];
}

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeVarint(arr[i]);   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeSVarint(arr[i]);  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) pbf.writeFloat(arr[i]);    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeDouble(arr[i]);   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeBoolean(arr[i]);  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed32(arr[i]);  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed32(arr[i]); }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed64(arr[i]);  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed64(arr[i]); }

// Buffer code below from https://github.com/feross/buffer, MIT-licensed

function readUInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] * 0x1000000);
}

function writeInt32(buf, val, pos) {
    buf[pos] = val;
    buf[pos + 1] = (val >>> 8);
    buf[pos + 2] = (val >>> 16);
    buf[pos + 3] = (val >>> 24);
}

function readInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] << 24);
}

function readUtf8(buf, pos, end) {
    var str = '';
    var i = pos;

    while (i < end) {
        var b0 = buf[i];
        var c = null; // codepoint
        var bytesPerSequence =
            b0 > 0xEF ? 4 :
            b0 > 0xDF ? 3 :
            b0 > 0xBF ? 2 : 1;

        if (i + bytesPerSequence > end) break;

        var b1, b2, b3;

        if (bytesPerSequence === 1) {
            if (b0 < 0x80) {
                c = b0;
            }
        } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 0xC0) === 0x80) {
                c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                if (c <= 0x7F) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                if (c <= 0xFFFF || c >= 0x110000) {
                    c = null;
                }
            }
        }

        if (c === null) {
            c = 0xFFFD;
            bytesPerSequence = 1;

        } else if (c > 0xFFFF) {
            c -= 0x10000;
            str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
            c = 0xDC00 | c & 0x3FF;
        }

        str += String.fromCharCode(c);
        i += bytesPerSequence;
    }

    return str;
}

function writeUtf8(buf, str, pos) {
    for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {
            if (lead) {
                if (c < 0xDC00) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                    lead = c;
                    continue;
                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }
            } else {
                if (c > 0xDBFF || (i + 1 === str.length)) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                } else {
                    lead = c;
                }
                continue;
            }
        } else if (lead) {
            buf[pos++] = 0xEF;
            buf[pos++] = 0xBF;
            buf[pos++] = 0xBD;
            lead = null;
        }

        if (c < 0x80) {
            buf[pos++] = c;
        } else {
            if (c < 0x800) {
                buf[pos++] = c >> 0x6 | 0xC0;
            } else {
                if (c < 0x10000) {
                    buf[pos++] = c >> 0xC | 0xE0;
                } else {
                    buf[pos++] = c >> 0x12 | 0xF0;
                    buf[pos++] = c >> 0xC & 0x3F | 0x80;
                }
                buf[pos++] = c >> 0x6 & 0x3F | 0x80;
            }
            buf[pos++] = c & 0x3F | 0x80;
        }
    }
    return pos;
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(7),
    __webpack_require__(4),
    __webpack_require__(8),
    __webpack_require__(3)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, global, event, observable, disposable) {
    'use strict';

    function NetworkConnectionMonitor() {
        // Support non-browser environments
        var isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

        this._onlineObservable = (new observable.Observable(isOnline)).extend({timeout: 0});
        this._namedEvents = new event.NamedEvents();

        _.addEventListener(global, 'online', _.bind(this._namedEvents.fire, this._namedEvents, 'online', []));
        _.addEventListener(global, 'offline', _.bind(this._namedEvents.fire, this._namedEvents, 'offline', []));
        _.addEventListener(global, 'unload', _.bind(this._namedEvents.dispose, this._namedEvents));

        this._namedEvents.listen('online', _.bind(this._onlineObservable.setValue, this._onlineObservable, true));
        this._namedEvents.listen('offline', _.bind(this._onlineObservable.setValue, this._onlineObservable, false));
    }

    NetworkConnectionMonitor.prototype.listenForNetworkChange = function listenForOffline(callback, hysteresisTimeout) {
        var disposables = new disposable.DisposableList();
        var onOnline = _.bind(handleOnline, this, callback);
        var onOffline = _.bind(handleOfflineWithHysteresis, this, callback, hysteresisTimeout);

        disposables.add(this._namedEvents.listen('online', onOnline));
        disposables.add(this._namedEvents.listen('offline', onOffline));

        return disposables;
    };

    NetworkConnectionMonitor.prototype.isOnline = function isOnline() {
        return this._onlineObservable.getValue();
    };

    function handleOfflineWithHysteresis(callback, hysteresisTimeout) {
        var that = this;

        this._onlineObservable.setValue(false);

        if (!_.isNumber(hysteresisTimeout)) {
            return callback(false);
        }

        that.offlineTimeout = setTimeout(function() {
            if (!callback || that._onlineObservable.getValue()) {
                return;
            }

            callback(false);
        }, hysteresisTimeout);
    }

    function handleOnline(callback) {
        this._onlineObservable.setValue(true);

        if (callback) {
            callback(true);
        }
    }

    return new NetworkConnectionMonitor();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(27)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, networkConnectionMonitor) {
    'use strict';

    var networkDisconnectHysteresisInterval = 15000;
    var waitForDisconnectEventTimeout = 1000;
    var defaultReconnectBackoffInterval = 1000;
    var defaultMaxReconnectAttempts = 4;
    var closeReasons = {
        byebye: {
            code: 1000,
            reason: 'byebye',
            desc: 'Client closed'
        },
        backoffLimitReached: {
            code: 4000,
            reason: 'backoff-limit-reached',
            desc: 'Reached the limit in terms of the number of reconnects'
        },
        networkDisconnect: {
            code: 4001,
            reason: 'network-disconnect',
            desc: 'Network connection monitor determined loss to internet connectivity'
        },
        reconnecting: {
            code: 4002,
            reason: 'reconnecting',
            desc: 'Closing WebSocket in order to attempt to establish another connection'
        }
    };
    var readyStates = {
        connecting: {
            code: 0,
            state: 'CONNECTING',
            desc: 'The connection is not yet open'
        },
        open: {
            code: 1,
            state: 'OPEN',
            desc: 'The connection is open and ready to communicate'
        },
        closing: {
            code: 2,
            state: 'CLOSING',
            desc: 'The connection is in the process of closing'
        },
        closed: {
            code: 3,
            state: 'CLOSED',
            desc: 'The connection is closed or could not be opened'
        }
    };

    function ReconnectingWebSocket(uri, logger, maxReconnectAttempts, reconnectBackoffInterval) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isObject(logger, 'logger');

        if (!_.isNullOrUndefined(maxReconnectAttempts)) {
            assert.isNumber(maxReconnectAttempts, 'maxReconnectAttempts');
        } else {
            maxReconnectAttempts = defaultMaxReconnectAttempts;
        }

        this._uri = uri;
        this._logger = logger;
        this._maxReconnectAttempts = maxReconnectAttempts;
        this._reconnectBackoffInterval = reconnectBackoffInterval || defaultReconnectBackoffInterval;
        this._hasAttemptedReconnect = false;
        this._stopped = false;
        this._queuedMessages = [];
        this._connectionState = 'connecting';

        this._logger.info('Connecting WebSocket to [%s]', uri);

        this._webSocket = createWebSocket.call(this, onOpen, onClose);

        var that = this;
        this._disconnectTimeoutId = null;

        this._networkConnectionMonitorDisposable = networkConnectionMonitor.listenForNetworkChange(function(isOnline) {
            if (isOnline) {
                if (_.isNumber(that._disconnectTimeoutId)) {
                    clearTimeout(that._disconnectTimeoutId);
                    that._disconnectTimeoutId = null;
                }

                return onNetworkReconnect.call(that);
            }

            if (_.isNumber(that._disconnectTimeoutId)) {
                return;
            }

            onReconnecting.call(that);

            that._disconnectTimeoutId = setTimeout(function() {
                return onNetworkDisconnect.call(that);
            }, networkDisconnectHysteresisInterval);
        }, 0);
    }

    ReconnectingWebSocket.prototype.onmessage = null;
    ReconnectingWebSocket.prototype.onconnected = null;
    ReconnectingWebSocket.prototype.onreconnecting = null;
    ReconnectingWebSocket.prototype.onreconnected = null;
    ReconnectingWebSocket.prototype.ondisconnected = null;
    ReconnectingWebSocket.prototype.onerror = null;

    ReconnectingWebSocket.prototype.send = function(message) {
        // TODO (DCY) Figure out how to resolve network switches
        if (!networkConnectionMonitor.isOnline() && false) { // eslint-disable-line no-constant-condition
            this._logger.info('Network offline. Waiting for reconnect to send message.');

            return this._queuedMessages.push(message);
        }

        return this._webSocket.send(message);
    };

    ReconnectingWebSocket.prototype.reconnect = function(attempt) {
        this._webSocket.onclose = null;
        this._webSocket.onerror = null;
        this._hasAttemptedReconnect = true;

        var that = this;
        var backoffTimeout;

        if (!_.isNumber(attempt)) {
            attempt = 1;
        }

        if (this._stopped) {
            return this._logger.info('Client has stopped WebSocket after [%s] reconnect attempts', attempt - 1);
        }

        if (attempt > this._maxReconnectAttempts) {
            this._logger.warn('Unable to reconnect WebSocket after [%s] attempts', this._maxReconnectAttempts);

            return closeWebSocketOrTriggerDisconnectEvent.call(this, closeReasons.backoffLimitReached);
        }

        closeWebSocketOrTriggerDisconnectEvent.call(this, closeReasons.reconnecting);

        try {
            this._webSocket = createWebSocket.call(that, function onOpenEvent() {
                if (backoffTimeout) {
                    clearTimeout(backoffTimeout);
                }

                that._hasAttemptedReconnect = false;
                that._webSocket.onclose = _.bind(onClose, that);

                return onReconnect.call(that);
            }, function onCloseEvent() {
                if (attempt + 1 > that._maxReconnectAttempts) {
                    if (backoffTimeout) {
                        clearTimeout(backoffTimeout);
                    }

                    reconnectIfNotOpen.call(that, attempt);
                }
            });
        } catch(e) {
            this._logger.warn('Unable to create WebSocket connection [%s]', e);
            // Swallow error - we will alert client of failure after timeouts.
        }

        backoffTimeout = reconnectWithBackoff.call(this, attempt);
    };

    ReconnectingWebSocket.prototype.disconnect = function() {
        this._networkConnectionMonitorDisposable.dispose();
        this._stopped = true;

        if (_.isNumber(this._disconnectTimeoutId)) {
            clearTimeout(this._disconnectTimeoutId);
            this._disconnectTimeoutId = null;
        }

        return this._webSocket.close(closeReasons.byebye.code, closeReasons.byebye.reason);
    };

    ReconnectingWebSocket.prototype.toString = function() {
        return 'ReconnectedWebSocket[' + this._uri + ',' + this._webSocket.readyState + ']';
    };

    function closeWebSocketOrTriggerDisconnectEvent(evt) {
        if (this._webSocket.readyState === readyStates.closed.code) {
            return onClose.call(this, evt);
        }

        return this._webSocket.close(evt.code, evt.reason);
    }

    function createWebSocket(onOpenCallback, onCloseCallback) {
        var webSocket = new WebSocket(this._uri);

        webSocket.onopen = _.bind(onOpenCallback, this);
        webSocket.onclose = _.bind(onCloseCallback, this);
        webSocket.onmessage = _.bind(onMessage, this);
        webSocket.onerror = _.bind(onError, this);

        return webSocket;
    }

    function reconnectWithBackoff(attempt) {
        var that = this;

        return setTimeout(function() {
            reconnectIfNotOpen.call(that, attempt);
        }, attempt * attempt * this._reconnectBackoffInterval);
    }

    function reconnectIfNotOpen(attempt) {
        if (this._webSocket.readyState === readyStates.open.code) {
            return;
        }

        this.reconnect(attempt + 1);
    }

    function onClose(evt) {
        switch (evt.code) {
        case closeReasons.reconnecting.code:
            return;
        case closeReasons.byebye.code:
        case closeReasons.backoffLimitReached.code:
        case closeReasons.networkDisconnect.code:
            return onDisconnect.call(this, evt);
        default:
            if (this._hasAttemptedReconnect) {
                return;
            }

            onReconnecting.call(this, evt);

            this._logger.info('Attempting to re-establish socket connection after disconnect event with code [%s] and reason [%s]', evt.code, evt.reason);

            return this.reconnect();
        }
    }

    function onReconnecting(evt) {
        this._logger.info('WebSocket is reconnecting');

        this._connectionState = 'reconnecting';

        if (this.onreconnecting) {
            this.onreconnecting(evt);
        }
    }

    function onOpen(evt) {
        this._logger.info('WebSocket Connected');

        sendAllQueuedMessages.call(this);

        this._connectionState = 'connected';

        if (this.onconnected) {
            this.onconnected(evt);
        }
    }

    function onReconnect(evt) {
        this._logger.info('Successfully reconnected to WebSocket');

        this._connectionState = 'reconnected';

        if (this.onreconnected) {
            this.onreconnected(evt);
        }
    }

    function onDisconnect(evt) {
        this._logger.info('WebSocket Disconnected [%s]: [%s]', evt.code, evt.reason);

        this._connectionState = 'disconnected';

        if (this.ondisconnected) {
            this.ondisconnected(evt);
        }
    }

    function onError(evt) {
        this._logger.error('An error occurred on the WebSocket connection [%s]', evt.data || evt);

        if (this.onerror) {
            this.onerror(evt);
        }
    }

    function onMessage(evt) {
        this._logger.debug('>> [%s]', evt.data);

        if (this.onmessage) {
            this.onmessage(evt);
        }
    }

    function onNetworkReconnect() {
        var that = this;

        setTimeout(function() {
            if (that._stopped) {
                return that._logger.info('Unable to go back online after network reconnect. Client has stopped WebSocket.');
            }

            if (that._webSocket.readyState !== readyStates.open.code) {
                that._logger.info('Network Reconnected. Attempting to reconnect WebSocket.');

                return that.reconnect();
            }

            if (that._didGoOfflineDueToDisconnect) {
                that._logger.info('Network Reconnected with WebSocket status of [%s].', readyStates.open.state);

                return onOpen.call(that);
            }

            if (that._connectionState !== 'online' || this._connectionState !== 'reconnected') {
                onReconnect.call(that);
            }

            that._logger.info('Network Reconnected.');
        }, waitForDisconnectEventTimeout);
    }

    function onNetworkDisconnect() {
        this._logger.warn('Network not reconnected after [%s]. Going Offline and disconnecting WebSocket connection.', networkDisconnectHysteresisInterval);

        this._didGoOfflineDueToDisconnect = true;

        // Don't close the WebSocket.
        onDisconnect.call(this, closeReasons.networkDisconnect);
    }

    function sendAllQueuedMessages() {
        var numberOfMessagesToSend = this._queuedMessages.length;

        if (numberOfMessagesToSend === 0) {
            return;
        }

        this._logger.info('Sending [%s] queued messages', numberOfMessagesToSend);

        while (numberOfMessagesToSend > 0) {
            numberOfMessagesToSend--;

            var message = this._queuedMessages.shift();

            this.send(message);
        }
    }

    return ReconnectingWebSocket;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(69)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(ReconnectingWebSocket) {
    'use strict';

    return ReconnectingWebSocket;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(4),
    __webpack_require__(70),
    __webpack_require__(26)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, event, ReconnectingWebSocket, MQService) {
    'use strict';

    function MQWebSocket(uri, logger, protocols, apiVersion) {
        assert.isStringNotEmpty(uri, 'uri');
        assert.isObject(logger, 'logger');
        assert.isArray(protocols, 'protocols');

        // TODO (DY) Don't dispose of event listeners on disconnect event
        this._uri = uri;
        this._logger = logger;
        this._logger.info('Connecting to [%s]', uri);

        this._webSocket = new ReconnectingWebSocket(this._uri, this._logger);
        this._mqService = new MQService(this._logger, _.bind(sendMessage, this), _.bind(setOnMessage, this), protocols, apiVersion);
        this._namedEvents = new event.NamedEvents();

        this._webSocket.onconnected = _.bind(onConnected, this);
        this._webSocket.onreconnecting = _.bind(onReconnecting, this);
        this._webSocket.onreconnected = _.bind(onReconnected, this);
        this._webSocket.ondisconnected = _.bind(onDisconnected, this);
        this._webSocket.onerror = _.bind(onError, this);

        this._disconnected = false;
    }

    MQWebSocket.prototype.onEvent = function(eventName, handler) {
        this._namedEvents.listen(eventName, handler);

        return this._mqService.onEvent(eventName, handler);
    };

    MQWebSocket.prototype.onRequest = function(requestName, handler) {
        return this._mqService.onRequest(requestName, handler);
    };

    MQWebSocket.prototype.sendRequest = function sendRequest(type, message, callback, settings) {
        return this._mqService.sendRequest(type, message, callback, settings);
    };

    MQWebSocket.prototype.sendResponse = function sendResponse(requestId, type, message, callback) {
        return this._mqService.sendResponse(requestId, type, message, callback);
    };

    MQWebSocket.prototype.disconnect = function() {
        this._disconnected = true;

        return this._webSocket.disconnect();
    };

    MQWebSocket.prototype.disposeOfPendingRequests = function disposeOfPendingRequests() {
        this._logger.info('Disposing of pending MQ WebSocket requests');

        return this._mqService.disposeOfRequests();
    };

    MQWebSocket.prototype.getApiVersion = function getApiVersion() {
        return this._mqService.getApiVersion();
    };

    MQWebSocket.prototype.toString = function() {
        return 'MQWebSocket[' + this._webSocket.toString() + ']';
    };

    function triggerEvent(eventName, args) {
        this._namedEvents.fire(eventName, args, this);
    }

    function onReconnecting(evt) { // eslint-disable-line no-unused-vars
        triggerEvent.call(this, 'reconnecting');
    }

    function onConnected(evt) { // eslint-disable-line no-unused-vars
        triggerEvent.call(this, 'connected');
    }

    function onReconnected(evt) { // eslint-disable-line no-unused-vars
        triggerEvent.call(this, 'reconnected');
    }

    function onDisconnected(evt) {
        triggerEvent.call(this, 'disconnected', [evt.code, evt.reason]);

        if (this._disconnected) {
            this._namedEvents.dispose();
            this._mqService.dispose();
        }
    }

    function onError(evt) {
        triggerEvent.call(this, 'error', [evt.data]);
    }

    function setOnMessage(callback) {
        this._webSocket.onmessage = callback;
    }

    function sendMessage(message) {
        if (this._webSocket) {
            this._webSocket.send(message);
        }
    }

    return MQWebSocket;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(2),
    __webpack_require__(10),
    __webpack_require__(15),
    __webpack_require__(24)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, rtc, logging, proto, telemetryProto) {
    function TelemetryAppender(uri) {
        assert.isString(uri, 'uri');

        this._loggingUrl = '/telemetry/logs';
        this._domain = typeof location === 'object' ? location.hostname : rtc.browser + '-' + rtc.browserVersion + '-unknown';
        this._minLevel = logging.level.TRACE;
        this._isEnabled = true;
        this._browser = (rtc.browser || 'Browser') + '/' + (rtc.browserVersion || '?');
        this._mostRecentRuntime = 0;
        this._batchHttpProtocol = new proto.BatchHttpProto(uri + this._loggingUrl, [telemetryProto], 'telemetry.StoreLogRecords', {
            maxAttempts: 3,
            maxBufferedRecords: 1000,
            maxBatchSize: 512
        });

        this._batchHttpProtocol.on('capacity', _.bind(onCapacity, this));
    }

    TelemetryAppender.prototype.setThreshold = function setThreshold(level) {
        assert.isNumber(level, 'level');

        this._minLevel = level;
    };

    TelemetryAppender.prototype.getThreshold = function getThreshold() {
        return this._minLevel;
    };

    TelemetryAppender.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    TelemetryAppender.prototype.setEnabled = function setEnabled(enabled) {
        assert.isBoolean(enabled, 'enabled');

        this._isEnabled = enabled;
    };

    TelemetryAppender.prototype.log = function log(since, level, category, messages, sessionId, userId, environment, version, context) {
        if (context.level < this._minLevel || !this._isEnabled) {
            return;
        }

        assert.isArray(messages, 'messages');

        this._mostRecentRuntime = since;
        this._mostRecentSessionId = sessionId;
        this._mostRecentUserId = userId;
        this._mostRecentEnvironment = environment;
        this._mostRecentVersion = version;

        addMessagesToRecords.call(this, level, category, messages);
    };

    function addMessagesToRecords(level, category, messages) {
        this._batchHttpProtocol.addRecord({
            level: level,
            timestamp: _.isoString(),
            category: category,
            message: messages.join(' '),
            source: this._browser,
            fullQualifiedName: this._domain,
            sessionId: this._mostRecentSessionId,
            userId: this._mostRecentUserId,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    function onCapacity(deleteRecords) {
        this._batchHttpProtocol.addRecordToBeginning({
            level: 'Warn',
            timestamp: _.isoString(),
            category: 'websdk/telemetryLogger',
            message: 'Deleted ' + deleteRecords + ' records',
            source: this._browser,
            fullQualifiedName: this._domain,
            sessionId: this._mostRecentSessionId,
            userId: this._mostRecentUserId,
            environment: this._mostRecentEnvironment,
            version: this._mostRecentVersion,
            runtime: this._mostRecentRuntime
        });
    }

    return TelemetryAppender;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(16),
    __webpack_require__(72)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, environment, TelemetryAppender) {
    var config = {
        urls: {
            local: '',
            staging: 'https://telemetry-stg.phenixrts.com',
            production: 'https://telemetry.phenixrts.com'
        }
    };

    function TelemetryAppenderFactory() {
        this._telemetryAppenders = {};
    }

    TelemetryAppenderFactory.prototype.getAppender = function getAppender(pcastBaseUri) {
        var env = environment.parseEnvFromPcastBaseUri(pcastBaseUri || '');

        var telemetryServerUrl = config.urls[env];

        if (!this._telemetryAppenders[env]) {
            this._telemetryAppenders[env] = createNewAppender.call(this, telemetryServerUrl);
        }

        return this._telemetryAppenders[env];
    };

    function createNewAppender(uri) {
        var appender = new TelemetryAppender(uri);

        if (!uri) {
            appender.setEnabled(false);
        }

        return appender;
    }

    return new TelemetryAppenderFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(10),
    __webpack_require__(73)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging, telemetryAppenderFactory) {
    'use strict';

    function PCastLoggerFactory() {

    }

    PCastLoggerFactory.prototype.createPCastLogger = function createPCastLogger(baseUri, disableConsole) {
        if (baseUri) {
            assert.isStringNotEmpty(baseUri, 'baseUri');
        }

        var logger = new logging.Logger();
        var telemetryAppender = telemetryAppenderFactory.getAppender(baseUri);

        telemetryAppender.setThreshold(logging.level.INFO);

        if (!disableConsole) {
            logger.addAppender(new logging.ConsoleAppender());
        }

        logger.addAppender(telemetryAppender);

        logger.isPCastLogger = true;

        return logger;
    };

    return new PCastLoggerFactory();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(17)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, logging) {
    'use strict';

    function ConsoleAppender() {
        this._minLevel = logging.level.TRACE;
    }

    ConsoleAppender.prototype.setThreshold = function setThreshold(level) {
        assert.isNumber(level, 'level');

        this._minLevel = level;
    };

    ConsoleAppender.prototype.getThreshold = function getThreshold() {
        return this._minLevel;
    };

    ConsoleAppender.prototype.log = function(since, level, category, messages, sessionId, userId, environment, version, context) {
        if (context.level < this._minLevel) {
            return;
        }

        messages[0] = since + ' [' + category + '] ' + level + ' ' + messages[0];

        if (context.level > logging.level.INFO) {
            logError(messages);
        } else {
            log(messages);
        }
    };

    var log = function(args) {
        console.log.apply(console, args);
    } || function() { };

    var logError = function(args) {
        console.error.apply(console, args);
    } || log;

    return ConsoleAppender;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 76 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var getGlobal = function getGlobal() {
        if (typeof window !== "undefined") { // eslint-disable-line no-restricted-globals
            return window; // eslint-disable-line no-restricted-globals
        }

        if (typeof global !== "undefined") {
            return global; // eslint-disable-line no-undef
        }

        if (typeof self !== "undefined"){ // eslint-disable-line no-restricted-globals
            return self; // eslint-disable-line no-restricted-globals
        }

        return {};
    };

    return getGlobal;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(76)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(7),
    __webpack_require__(17)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, global, logging) {
    'use strict';

    var defaultCategory = 'websdk';
    var start = global['__phenixPageLoadTime'] || global['__pageLoadTime'] || _.now();
    var defaultEnvironment = 'production' || '?';
    var sdkVersion = '2018-10-15T16:17:53Z' || '?';
    var releaseVersion = '2018.4.0';

    function Logger() {
        this._appenders = [];
        this._userId = null;
        this._sessionId = null;
        this._environment = defaultEnvironment;
        this._applicationVersion = sdkVersion;
    }

    Logger.prototype.trace = function trace(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.TRACE});
    };

    Logger.prototype.debug = function debug(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.DEBUG});
    };

    Logger.prototype.info = function info(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.INFO});
    };

    Logger.prototype.warn = function warn(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.WARN});
    };

    Logger.prototype.error = function error(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.ERROR});
    };

    Logger.prototype.fatal = function fatal(/* formatStr, [parameter], ...*/) {
        return log.call(this, arguments, {level: logging.level.FATAL});
    };

    Logger.prototype.addAppender = function addAppender(appender) {
        assert.isObject(appender, 'appender');
        assert.isFunction(appender.log, 'appender.log');

        this._appenders.push(appender);
    };

    Logger.prototype.getAppenders = function getAppenders() {
        return this._appenders;
    };

    Logger.prototype.getUserId = function getUserId() {
        return this._userId;
    };

    Logger.prototype.setUserId = function setUserId(userId) {
        this._userId = userId;
    };

    Logger.prototype.getEnvironment = function getEnvironment() {
        return this._environment;
    };

    Logger.prototype.setEnvironment = function setEnvironment(environment) {
        this._environment = environment;
    };

    Logger.prototype.getApplicationVersion = function getApplicationVersion() {
        return this._applicationVersion;
    };

    Logger.prototype.setApplicationVersion = function setApplicationVersion(version) {
        this._applicationVersion = version;
    };

    Logger.prototype.getObservableSessionId = function getObservableSessionId() {
        return this._observableSessionId;
    };

    Logger.prototype.setObservableSessionId = function setObservableSessionId(observableSessionId) {
        this._observableSessionId = observableSessionId;

        if (this._sessionIdSubscription) {
            this._sessionIdSubscription.dispose();
        }

        if (observableSessionId) {
            assert.isObject(observableSessionId, 'observableSessionId');

            this._sessionIdSubscription = this._observableSessionId.subscribe(_.bind(onSessionIdChange, this), {initial: 'notify'});
        }
    };

    function onSessionIdChange(sessionId) {
        this._sessionId = sessionId;

        if (!sessionId) {
            this.info('Websdk version [%s] ([%s]), user agent [%s]', sdkVersion, releaseVersion, navigator.userAgent);
        } else {
            this.info('Session started on websdk version [%s] ([%s]), user agent [%s]', sdkVersion, releaseVersion, navigator.userAgent);
        }
    }

    function log(messages, context) {
        var now = _.now();
        var since = (now - start) / 1000;
        var level = convertLevel(context.level);
        var category = context.name || defaultCategory;
        var that = this;

        _.forEach(this._appenders, function(appender) {
            try {
                appender.log(since, level, category, stringify(Array.prototype.slice.call(messages)), that._sessionId, that._userId, that._environment, that._applicationVersion, context);
            } catch (e) { } // eslint-disable-line no-empty
        });
    }

    function convertLevel(jsLoggerLevel) {
        switch (jsLoggerLevel) {
        case logging.level.TRACE:
            return 'Trace';
        case logging.level.DEBUG:
            return 'Debug';
        case logging.level.INFO:
            return 'Info';
        case logging.level.WARN:
            return 'Warn';
        case logging.level.ERROR:
            return 'Error';
        case logging.level.FATAL:
            return 'Fatal';
        default:
            throw new Error('Unsupported Logging Level ' + jsLoggerLevel);
        }
    }

    var stringify = function stringify(args) {
        if (args.length === 0) {
            return;
        }

        var newArgs = [];
        var errorStacks = [];

        _.forEach(args, function(arg) {
            newArgs.push(_.toString(arg));

            if (arg instanceof Error) {
                errorStacks.push(arg.stack);
            }
        });

        return format(newArgs.concat(errorStacks));
    };

    var format = function format(args) {
        var fmt = args[0];
        var idx = 0;

        while (fmt.indexOf && args.length > 1 && idx >= 0) {
            idx = fmt.indexOf('%', idx);

            if (idx > 0) {
                var type = fmt.substring(idx + 1, idx + 2);

                switch (type) {
                case '%':
                    // Escaped '%%' turns into '%'
                    fmt = fmt.substring(0, idx) + fmt.substring(idx + 1);
                    idx++;

                    break;
                case 's':
                case 'd':
                    // Replace '%d' or '%s' with the argument
                    args[0] = fmt = fmt.substring(0, idx) + args[1] + fmt.substring(idx + 2);
                    args.splice(1, 1);

                    break;
                default:
                    return args;
                }
            }
        }

        return args;
    };

    return Logger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(29)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, Event) {
    'use strict';

    function NamedEvents() {
        this._events = {};
    }

    NamedEvents.prototype.fire = function(name, args, context) {
        assert.isStringNotEmpty(name, 'name');

        if (_.includes(_.keys(this._events), name)) {
            this._events[name].fire(args, context);
        }
    };

    NamedEvents.prototype.fireAsync = function(name, args, context) {
        assert.isStringNotEmpty(name, 'name');

        if (_.includes(_.keys(this._events), name)) {
            this._events[name].fireAsync(args, context);
        }
    };

    NamedEvents.prototype.listen = function listen(name, listener) {
        assert.isStringNotEmpty(name, 'name');

        var event = _.includes(_.keys(this._events), name) ? this._events[name] : (this._events[name] = new Event());

        return event.listen(listener);
    };

    NamedEvents.prototype.size = function size(name) {
        if (_.includes(_.keys(this._events), name)) {
            return this._events[name].size();
        }

        return 0;
    };

    NamedEvents.prototype.dispose = function dispose() {
        _.forOwn(this._events, function(event) {
            event.dispose();
        });

        this._events = {};
    };

    NamedEvents.prototype.toString = function toString() {
        return 'NamedEvents|' + _.keys(this._events).length;
    };

    return NamedEvents;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    function ObservableMonitor(observable) {
        assert.isObject(observable, 'observable');

        this._observable = observable;
        this._listenerSubscription = null;
        this._isEnabled = false;
    }

    ObservableMonitor.prototype.start = function start(checkForChanges, timeout) {
        this._isEnabled = true;

        this._listenerSubscription = this._observable.subscribe(_.noop, {
            listenForChanges: {
                callback: checkForChanges,
                timeout: timeout || 500
            }
        });
    };

    ObservableMonitor.prototype.stop = function stop() {
        this._isEnabled = false;

        if (this._listenerSubscription) {
            this._listenerSubscription.dispose();
        }

        this._listenerSubscription = null;
    };

    ObservableMonitor.prototype.isEnabled = function isEnabled() {
        return this._isEnabled;
    };

    return ObservableMonitor;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1),
    __webpack_require__(30)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert, Observable) {
    'use strict';

    function ObservableArray(initialValues, beforeChange) {
        var valuesToSet = initialValues;

        if (valuesToSet === undefined || valuesToSet === null) {
            valuesToSet = [];
        }

        assert.isArray(valuesToSet, 'valuesToSet');

        this.observableArray = new Observable(valuesToSet, beforeChange);
    }

    ObservableArray.prototype.getValue = function getValue() {
        return this.observableArray.getValue();
    };

    ObservableArray.prototype.setValue = function setValue(values) {
        if (values === undefined || values === null) {
            values = [];
        }

        if (values !== undefined) {
            assert.isArray(values, 'values');
        }

        return this.observableArray.setValue(values);
    };

    ObservableArray.prototype.subscribe = function subscribe(callback, options) {
        return this.observableArray.subscribe(callback, options);
    };

    ObservableArray.prototype.push = function push(value) {
        var array = this.observableArray.getValue();
        array.push(value);

        this.observableArray.setValue(array);
    };

    ObservableArray.prototype.pop = function pop() {
        var array = this.observableArray.getValue();
        var value = array.pop();

        this.observableArray.setValue(array);

        return value;
    };

    ObservableArray.prototype.remove = function remove(valueOrFunction) {
        var array = this.observableArray.getValue();

        var filterFunction = function(value) {
            return _.isFunction(valueOrFunction) ? valueOrFunction(value) : value === valueOrFunction;
        };

        var valuesToRemove = _.filter(array, filterFunction);

        if (valuesToRemove.length > 0) {
            this.observableArray.setValue(_.remove(array, filterFunction));
        }

        return valuesToRemove;
    };

    ObservableArray.prototype.removeAll = function removeAll() {
        var array = this.observableArray.getValue();

        this.observableArray.setValue([]);

        return array;
    };

    ObservableArray.prototype.extend = function extend(options) {
        this.observableArray.extend(options);

        return this;
    };

    return ObservableArray;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    function DisposableList() {
        this._list = [];
    }

    DisposableList.prototype.add = function(disposable) {
        if (!disposable || !_.isFunction(disposable.dispose)) {
            throw new Error('"disposable" must be a disposable or implement dispose');
        }

        this._list.push(disposable);
    };

    DisposableList.prototype.dispose = function() {
        var results = [];

        _.forEach(this._list, function(disposable) {
            results.push(disposable.dispose());
        });

        this._list = [];

        return results;
    };

    DisposableList.prototype.toString = function() {
        return _.toString(this);
    };

    return DisposableList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0),
    __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, assert) {
    'use strict';

    /**
     * Create a new disposable object.
     *
     * @param cleanup The callback to perform whatever cleanup is required when this object is disposed.
     * @constructor
     */
    function Disposable(cleanup) {
        assert.isFunction(cleanup, 'cleanup');

        this._cleanup = cleanup;
    }

    Disposable.prototype.dispose = function() {
        return this._cleanup.call();
    };

    Disposable.prototype.toString = function() {
        return _.toString(this);
    };

    return Disposable;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(0)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    var Assert = function() {

    };

    Assert.prototype.isObject = function isObject(obj, name) {
        Assert.prototype.isString('name', name);

        if (!_.isObject(obj)) {
            throw new Error('"' + name + '" must be an object. Received [' + typeof obj + ']');
        }
    };

    Assert.prototype.isArray = function isArray(array, name) {
        Assert.prototype.isString('name', name);

        if (!_.isArray(array)) {
            throw new Error('"' + name + '" must be an array. Received [' + typeof array + ']');
        }
    };

    Assert.prototype.isString = function isString(string, name) {
        if (!_.isString(name)) {
            throw new Error('"name" must be a string. Received [' + typeof name + ']');
        }

        if (!_.isString(string)) {
            throw new Error('"' + name + '" must be a string. Received [' + typeof string + ']');
        }
    };

    Assert.prototype.isBoolean = function isBoolean(bool, name) {
        Assert.prototype.isString('name', name);

        if (!_.isBoolean(bool)) {
            throw new Error('"' + name + '" must be a boolean. Received [' + typeof bool + ']');
        }
    };

    Assert.prototype.isNumber = function isNumber(number, name) {
        Assert.prototype.isString('name', name);

        if (!_.isNumber(number)) {
            throw new Error('"' + name + '" must be a number. Received [' + typeof number + ']');
        }
    };

    Assert.prototype.isFunction = function isFunction(callback, name) {
        Assert.prototype.isString('name', name);

        if (!_.isFunction(callback)) {
            throw new Error('"' + name + '" must be a function. Received [' + typeof callback + ']');
        }
    };

    // TODO (dcy) remove once all dependencies have been updated
    Assert.prototype.stringNotEmpty = function stringNotEmpty(string, name) {
        Assert.prototype.isStringNotEmpty(string, name);
    };

    Assert.prototype.isStringNotEmpty = function stringNotEmpty(string, name) {
        Assert.prototype.isString('name', name);
        Assert.prototype.isString(string, name);

        if (string === '') {
            throw new Error('"' + name + '" must not be empty');
        }
    };

    Assert.prototype.isInstanceOf = function(object, clazz, name) {
        Assert.prototype.isString('name', name);

        if (!_.isObject(object)) {
            throw new Error('"' + name + '" must be an instance. Received [' + typeof object + ']');
        }

        if (!(object instanceof clazz)) {
            throw new Error('"' + name + '" must be a valid instance of class ' + _.get(clazz, ['name'], 'undefined'));
        }
    };

    Assert.prototype.isNotUndefined = function(value, name) {
        Assert.prototype.isString('name', name);

        if (_.isUndefined(value)) {
            throw new Error('"' + name + '" must not be undefined');
        }
    };

    Assert.prototype.isValidType = function(type, types, name) {
        Assert.prototype.isStringNotEmpty(name, 'name');

        var typeName = _.getEnumName(types, type);

        if (_.isNullOrUndefined(typeName)) {
            throw new Error('"' + name + '" must be a valid type. Unable to locate type [' + type + ']');
        }

        return typeName;
    };

    Assert.prototype.isArrayOfString = function(value, name) {
        Assert.prototype.isString(name, 'name');
        Assert.prototype.isArray(value, name);

        _.forEach(value, function(val, key) {
            Assert.prototype.isString(val, name + '[' + key + ']');
        });
    };

    return new Assert();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_) {
    'use strict';

    function DetectBrowser(userAgent) {
        this._userAgent = userAgent || '';
    }

    DetectBrowser.prototype.detect = function() {
        var browser = 'Unknown';
        var version = '?';
        var browserMatch = this._userAgent.match(/(Chrome|Chromium|Firefox|Opera|Safari)+\//);
        var versionMatch = this._userAgent.match(/(Chrome|Chromium|Firefox|Version)+\/([0-9]+)\./);
        var isWebview = false;

        if (browserMatch && browserMatch.length >= 2) {
            browser = browserMatch[1];
        } else if (this._userAgent.match(/^\(?Mozilla/)) {
            browser = 'Mozilla';

            if (this._userAgent.match(/MSIE/)
                || this._userAgent.match(/; Trident\/.*rv:[0-9]+/)) {
                browser = 'IE';

                if (versionMatch = this._userAgent.match(/MSIE ([0-9]+)/)) { // eslint-disable-line no-cond-assign
                    version = parseInt(versionMatch[1], 10);

                    // Compatibility view?
                    if (versionMatch = this._userAgent.match(/MSIE [0-9]+.*MSIE ([0-9]+)/)) { // eslint-disable-line no-cond-assign
                        version = parseInt(versionMatch[1], 10);
                    }
                } else if (versionMatch = this._userAgent.match(/rv:([0-9]+)/)) { // eslint-disable-line no-cond-assign
                    version = parseInt(versionMatch[1], 10);
                }
            }
        }

        if (browser === 'Chrome' && this._userAgent.match(/OPR\//)) {
            // Opera pretends to be Chrome
            browser = 'Opera';
            versionMatch = this._userAgent.match(/(OPR)\/([0-9]+)\./);
        } else if (browser === 'Chrome' && this._userAgent.match(/Edge\//)) {
            // Edge pretends to be Chrome
            browser = 'Edge';
            versionMatch = this._userAgent.match(/(Edge)\/([0-9]+)\./);
        } else if ((browser === 'Firefox' || browser === 'IE') && this._userAgent.match(/Opera/)) {
            // Opera pretends to be Firefox or IE
            browser = 'Opera';
            versionMatch = this._userAgent.match(/(Opera) ([0-9]+)\./);
        } else if (browser === 'Mozilla' && this._userAgent.match(/iphone|ipod|ipad/i)) {
            browser = 'Safari';
            version = parseInt(_.get(this._userAgent.match(/OS\s([0-9]+)/), [1]), 10);
            isWebview = true;
        }

        // https://developer.chrome.com/multidevice/user-agent
        if (browser === 'Chrome' && (this._userAgent.match(/; wv/) || (this._userAgent.match(/Android/) && this._userAgent.match(/Version\/[0-9].[0-9]/)))) {
            isWebview = true;
        }

        if (browser !== 'IE' && versionMatch && versionMatch.length >= 3) {
            version = parseInt(versionMatch[2], 10);
        }

        if (navigator.product === 'ReactNative') {
            browser = 'ReactNative';
            version = navigator.productSub || '?';
        }

        return {
            browser: browser,
            version: version,
            isWebview: isWebview
        };
    };

    return DetectBrowser;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 Phenix Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    'use strict';

    var _ = function() {

    };

    _.clone = function clone(value) {
        if (_.isArray(value)) {
            return value.slice();
        }

        if (_.isObject(value)) {
            return _.assign({}, value);
        }

        return value;
    };

    _.get = function get(objectToTraverse, path, defaultValue) {
        if (_.isNullOrUndefined(objectToTraverse)) {
            return defaultValue;
        }

        assertIsObject(objectToTraverse, 'objectToTraverse');

        var properties = path;

        if (_.isString(properties)) {
            properties = buildPathFromString(path);
        } else if (!_.isArray(properties)) {
            throw new Error('Unsupported path type ' + typeof path);
        }

        var valueAtPath = _.reduce(properties, function(valueAtPath, prop) {
            if (_.isObject(valueAtPath) || _.isArray(valueAtPath)) {
                return valueAtPath[prop];
            }

            return;
        }, objectToTraverse);

        return _.isUndefined(valueAtPath) ? defaultValue : valueAtPath;
    };

    _.set = function get(objectToTraverse, path, value) {
        if (!_.isObject(objectToTraverse)) {
            return objectToTraverse;
        }

        assertIsObject(objectToTraverse, 'objectToTraverse');

        var currentLocation = objectToTraverse;
        var properties = path;

        if (_.isString(properties)) {
            properties = buildPathFromString(path);
        } else if (!_.isArray(properties)) {
            throw new Error('Unsupported path type ' + typeof path);
        }

        _.forEach(properties, function(prop, index) {
            setNextValue(currentLocation, prop, getNextValue(properties, index, currentLocation, value));

            currentLocation = currentLocation[prop];
        });

        return objectToTraverse;
    };

    _.bind = function bind(callback, that) {
        var argsAfterContext = Array.prototype.slice.call(arguments, 2);

        return function boundFunction() {
            if (!_.isFunction(callback)) {
                throw new TypeError('_.bind - callback must be a function. Received [' + typeof callback + ']');
            }

            var combinedArguments = argsAfterContext.concat(Array.prototype.slice.call(arguments));

            return callback.apply(that, combinedArguments);
        };
    };

    _.now = function now() {
        return new Date().getTime();
    };

    _.utc = function utc(date) {
        if (_.isNumber(date)) {
            return date;
        } else if (!date) {
            return NaN;
        }

        return Math.floor(date);
    };

    _.isoString = function isoString() {
        var now = new Date();

        if (now.toISOString) {
            return now.toISOString();
        }

        return now.getUTCFullYear() +
            '-' + _.pad(now.getUTCMonth() + 1, 2) +
            '-' + _.pad(now.getUTCDate(), 2) +
            'T' + _.pad(now.getUTCHours(), 2) +
            ':' + _.pad(now.getUTCMinutes(), 2) +
            ':' + _.pad(now.getUTCSeconds(), 2) +
            '.' + (now.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
    };

    _.map = function map(collection, callback) {
        assertIsObject(collection, 'collection');

        var newArray = [];

        if (collection.constructor === Array) {
            _.forEach(collection, function mapCollection(item, index) {
                if (_.isString(callback) && _.isObject(item)) {
                    newArray.push(item[callback]);
                } else if (_.isFunction(callback)) {
                    newArray.push(callback(item, index));
                }
            });
        } else {
            _.forOwn(collection, function mapCollection(value, key) {
                if (_.isFunction(callback)) {
                    newArray.push(callback(value, key));
                }
            });
        }

        return newArray;
    };

    _.values = function(collection) {
        if (!_.isObject(collection) || _.isArray(collection)) {
            throw new Error('_.values argument, Collection, must be an object. Received [' + typeof collection + ']');
        }

        return _.map(collection, function(value) {
            return value;
        });
    };

    _.keys = function(collection) {
        if (!_.isObject(collection) || _.isArray(collection)) {
            throw new Error('_.keys argument, Collection, must be an object. Received [' + typeof collection + ']');
        }

        return _.map(collection, function(value, key) {
            return key;
        });
    };

    _.forEach = function forEach(collection, callback) {
        if (!_.isFunction(callback)) {
            throw new Error('_.forEach argument, Callback, must be a function. Received [' + typeof callback + ']');
        }

        assertIsArray(collection, 'collection');

        for (var i = 0; i < collection.length; i++) {
            var callbackResponse = callback(collection[i], i);

            if (callbackResponse === false) {
                return;
            }
        }
    };

    _.forOwn = function forOwn(objectWithProperties, callback) {
        if (!_.isFunction(callback)) {
            throw new Error('Callback must be a function. Received [' + typeof callback + ']');
        }

        assertIsObject(objectWithProperties, 'objectWithProperties');

        var keys = Object.keys(objectWithProperties);

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];

            if (objectWithProperties.hasOwnProperty(key) || Object.prototype.hasOwnProperty.call(objectWithProperties, key)) {
                callback(objectWithProperties[key], key);
            }
        }
    };

    _.argumentsToArray = function(args) {
        if (!_.isObject(args) || !args.length) {
            throw new Error('Collection must be arguments. Received [' + typeof args + ']');
        }

        var collection = [];

        for (var i = 0; i < args.length; i++) {
            collection.push(args[i]);
        }

        return collection;
    };

    _.assign = function assign(target) {
        if (_.isNullOrUndefined(target)) {
            target = {};
        }

        assertIsObject(target, 'target');

        var sources = _.argumentsToArray(arguments);

        sources.shift();

        _.forEach(sources, function(source, index) {
            if (_.isNullOrUndefined(source)) {
                return;
            }

            assertIsObject(source, '_.assign(sources[' + index + '])');

            _.forOwn(source, function(value, key) {
                target[key] = value;
            });
        });

        return target;
    };

    _.includes = function includes(collection, value) {
        if (_.isString(collection)) {
            assertIsString(value, 'Includes value and search parameter');

            return collection.indexOf(value) > -1;
        }

        if (_.isUndefined(collection) || _.isUndefined(value)) {
            return false;
        }

        assertIsObject(collection, 'collection');

        var hasValue = false;

        var checkCollection = function checkCollection(currentValue) {
            if (currentValue === value) {
                hasValue = true;
            }
        };

        if (collection.constructor === Array) {
            _.forEach(collection, checkCollection);
        } else {
            _.forOwn(collection, checkCollection);
        }

        return hasValue;
    };

    _.reduce = function reduce(collection, callback, initialValue) {
        assertIsObject(collection, 'collection');

        var result = initialValue === _.noop() ? null : initialValue;

        if (collection.constructor === Array) {
            _.forEach(collection, function(item, index) {
                result = callback(result, item, index);
            });
        } else {
            _.forOwn(collection, function(value, key) {
                result = callback(result, value, key);
            });
        }

        return result;
    };

    _.sample = function sample(collection) {
        assertIsArray(collection, 'collection');

        return collection[Math.floor(Math.random() * collection.length)];
    };

    _.uniqueId = function() {
        return (_.now() * Math.random()).toString();
    };

    _.find = function find(collection, callback, initialIndex) {
        assertIsArray(collection, 'collection');

        var hasItem;

        _.forEach(collection, function findInCollection(value, index) {
            if (callback(value) && index >= (initialIndex || 0)) {
                hasItem = value;

                return hasItem;
            }
        });

        return hasItem;
    };

    _.findIndex = function find(collection, callback, initialIndex) {
        assertIsArray(collection, 'collection');

        var hasItem;

        _.forEach(collection, function findInCollection(value, index) {
            if (callback(value, index) && index >= (initialIndex || 0)) {
                hasItem = index;

                return hasItem;
            }
        });

        return hasItem;
    };

    _.filter = function filter(collection, callback) {
        assertIsArray(collection, 'collection');

        var newCollection = [];

        _.forEach(collection, function findInCollection(value) {
            if (callback(value)) {
                newCollection.push(value);
            }
        });

        return newCollection;
    };

    _.remove = function remove(collection, callback) {
        assertIsArray(collection, 'collection');

        var filterCallback = function filterCallback(value) {
            return !callback(value);
        };

        return _.filter(collection, filterCallback);
    };

    _.take = function take(collection, size) {
        assertIsArray(collection, 'collection');

        return collection.slice(0, size);
    };

    _.hasDifferences = function hasDifferences(collectionA, collectionB, deep) {
        return _.findDifferences(collectionA, collectionB, deep).length > 0;
    };

    _.findDifferences = function findDifferences(collectionA, collectionB, deep) {
        var differences = [];
        var visitedKeys = {};

        function getDifferences(value, indexOrKey) {
            visitedKeys[indexOrKey] = 1;

            if ((_.isObject(value) || _.isArray(value)) && deep) {
                if (!_.hasIndexOrKey(collectionB, indexOrKey)) {
                    differences.push(indexOrKey);
                } else if (!_.sameTypes(collectionA[indexOrKey], collectionB[indexOrKey])) {
                    differences.push(indexOrKey);
                } else if (_.hasDifferences(collectionA[indexOrKey], collectionB[indexOrKey], deep)) {
                    differences.push(indexOrKey);
                }
            } else if (collectionA[indexOrKey] !== collectionB[indexOrKey]) {
                differences.push(indexOrKey);
            }
        }

        if (_.isArray(collectionA) && _.isArray(collectionB)) {
            if (collectionA.length > collectionB.length) {
                _.forEach(collectionA, getDifferences);
            } else {
                _.forEach(collectionB, getDifferences);
            }
        } else if (_.isObject(collectionA) && _.isObject(collectionB) && !_.isArray(collectionA) && !_.isArray(collectionB)) {
            _.forOwn(collectionA, getDifferences);

            _.forOwn(collectionB, function(value, key) {
                if (!visitedKeys.hasOwnProperty(key)) {
                    differences.push(key);
                }
            });
        } else {
            throw new Error('Object types do not match');
        }

        return differences;
    };

    _.hasIndexOrKey = function hasIndexOrKey(collection, indexOrKey) {
        if (_.isArray(collection)) {
            return collection.length > parseInt(indexOrKey);
        } else if (_.isObject(collection)) {
            return collection.hasOwnProperty(indexOrKey);
        }

        return false;
    };

    _.startsWith = function startsWith(value, prefix) {
        assertIsString(value, 'value');
        assertIsString(prefix, 'prefix');

        return value.indexOf(prefix) === 0;
    };

    _.sameTypes = function sameTypes(first, second) {
        if (_.isNullOrUndefined(first) || _.isNullOrUndefined(second)) {
            return _.isNullOrUndefined(first) && _.isNullOrUndefined(second);
        }

        if (_.isArray(first) || _.isArray(second)) {
            return _.isArray(first) && _.isArray(second);
        }

        return typeof first === typeof second;
    };

    _.freeze = function freeze(obj) {
        if ('freeze' in Object) {
            return Object.freeze(obj);
        }

        return obj;
    };

    _.noop = function() {
        return undefined;
    };

    _.isObject = function isObject(obj) {
        if (obj === null) {
            return false;
        }

        return typeof obj === 'object';
    };

    _.isArray = function isArray(array) {
        if (!_.isObject(array)) {
            return false;
        }

        return array.constructor === Array;
    };

    _.isString = function isString(string) {
        return typeof string === 'string';
    };

    _.isNumber = function isNumber(number) {
        if (isNaN(number)) {
            return false;
        }

        return typeof number === 'number';
    };

    _.isBoolean = function isBoolean(bool) {
        return typeof bool === 'boolean';
    };

    _.isFunction = function isFunction(func) {
        return typeof func === 'function';
    };

    _.isNullOrUndefined = function isNullOrUndefined(value) {
        return value === null || _.isUndefined(value);
    };

    _.isUndefined = function isUndefined(value) {
        return typeof value === 'undefined';
    };

    _.getEnumName = function getEnumName(enums, nameOrId) {
        var enumObject = null;

        var enumArray = _.map(enums, function(value) {
            return value;
        });

        if (_.isNumber(nameOrId)) {
            enumObject = _.find(enumArray, function(current) {
                return current.id === nameOrId;
            });
        } else if (_.isString(nameOrId)) {
            enumObject = _.find(enumArray, function(current) {
                return current.name.toLowerCase() === nameOrId.toLowerCase();
            });
        }

        if (enumObject) {
            return enumObject.name;
        }

        return null;
    };

    _.toString = function toString(data) {
        if (_.isString(data)) {
            return data;
        }

        if (_.isBoolean(data)) {
            return data ? 'true' : 'false';
        }

        if (_.isNumber(data)) {
            return data.toString();
        }

        var toStringStr = '';

        if (data) {
            if (_.isFunction(data.toString)) {
                toStringStr = data.toString();
            } else if (_.isObject(data.toString)) {
                try {
                    toStringStr = data.toString();
                } catch (e) {
                    toStringStr = '[object invalid toString()]';
                }
            }
        }

        if (toStringStr.indexOf('[object') !== 0) {
            return toStringStr;
        }

        var cache = [];

        return toStringStr + JSON.stringify(data, function(key, value) {
            if (_.isObject(value) && !_.isNullOrUndefined(value)) {
                if (_.includes(cache, value)) {
                    return '<recursive>';
                }

                cache.push(value);
            }

            return key === '' ? value : _.toString(value);
        });
    };

    _.pad = function padNumber(value, numberToPad) {
        assertIsNumber(value, 'value');
        assertIsNumber(numberToPad, 'numberToPad');

        var valueLength = value.toString().length;

        for (var i = 0; i < numberToPad - valueLength; i++) {
            value = '0' + value.toString();
        }

        return value.toString();
    };

    _.addEventListener = function addEventListener(target, eventName, listener, useCapture) {
        assertIsObject(target, 'target');
        assertIsString(eventName, 'eventName');
        assertIsFunction(listener, 'listener');

        if (target.phenixAddEventListener) {
            target.phenixAddEventListener.call(target, eventName, listener, !!useCapture);
        } else if (target.addEventListener) {
            target.addEventListener(eventName, listener, !!useCapture);
        } else if (target.attachEvent) {
            target.attachEvent("on" + eventName, listener);
        }
    };

    _.removeEventListener = function removeEventListener(target, eventName, listener, useCapture) {
        assertIsObject(target, 'target');
        assertIsString(eventName, 'eventName');
        assertIsFunction(listener, 'listener');

        if (target.phenixRemoveEventListener) {
            target.phenixRemoveEventListener.call(target, eventName, listener, !!useCapture);
        } else if (target.removeEventListener) {
            target.removeEventListener(eventName, listener, !!useCapture);
        } else if (target.detachEvent) {
            target.detachEvent("on" + eventName, listener);
        }
    };

    var assertIsArray = function assertIsArray(collection) {
        if (!_.isArray(collection)) {
            throw new Error('Input must be an array. Received [' + typeof collection + ']');
        }
    };

    var assertIsNumber = function assertIsNumber(number, name) {
        assertIsString(name, 'name');

        if (!_.isNumber(number)) {
            throw new Error(name + ' must be a number. Received [' + typeof number + ']');
        }
    };

    var assertIsObject = function assertIsObject(collection, name) {
        assertIsString(name, 'name');

        if (!_.isObject(collection)) {
            throw new Error('collection type not supported - ' + name + ' must be an array or object. Received [' + typeof collection + ']');
        }
    };

    var assertIsFunction = function assertIsFunction(callback, name) {
        assertIsString(name, 'name');

        if (!_.isFunction(callback)) {
            throw new Error(name + ' must be a function. Received [' + typeof callback + ']');
        }
    };

    var assertIsString = function assertIsString(value, name) {
        if (!_.isString(name)) {
            throw new Error('Name must be a string. Received [' + typeof name + ']');
        }

        if (!_.isString(value)) {
            throw new Error(name + ' must be a string. Received [' + typeof value + ']');
        }
    };

    function buildPathFromString(stringPath) {
        var properties = stringPath.split('.');
        var path = [];

        _.forEach(properties, function(prop) {
            path = path.concat(buildSubPathFromString(prop));
        });

        return path;
    }

    function buildSubPathFromString(stringPath) {
        var possibleSubPath = '';
        var path = [];
        var countOfOpeningBrackets = 0;

        for (var i = 0; i < stringPath.length; i++) {
            if (stringPath[i] === '[') {
                countOfOpeningBrackets++;

                if (!_.isString(possibleSubPath) || countOfOpeningBrackets > 1) {
                    return [stringPath];
                }

                if (possibleSubPath) {
                    path.push(possibleSubPath);
                    possibleSubPath = '';
                }
            } else if (stringPath[i] === ']') {
                countOfOpeningBrackets--;

                if (countOfOpeningBrackets !== 0) {
                    return [stringPath];
                }

                path.push(possibleSubPath);
                possibleSubPath = '';
            } else if (i === stringPath.length - 1) {
                return [stringPath];
            } else {
                possibleSubPath += stringPath[i];
            }
        }

        return path;
    }

    function getNextValue(path, index, currentLocation, value) {
        if (path.length - 1 === index) {
            return value;
        }

        var currentPropOrIndex = path[index];
        var nextPropOrIndex = path[index + 1];

        if (_.isArray(currentLocation[currentPropOrIndex]) || _.isObject(currentLocation[currentPropOrIndex])) {
            return currentLocation[currentPropOrIndex];
        }

        if (!_.isArray(currentLocation[currentPropOrIndex]) && _.isNumber(parseInt(nextPropOrIndex))) {
            return [];
        } else if (!_.isObject(currentLocation[currentPropOrIndex]) && _.isString(nextPropOrIndex)) {
            return {};
        }

        throw new Error('Unsupported type ' + typeof currentPropOrIndex + ' when setting property or index');
    }

    function setNextValue(objectToTraverse, propertyOrIndex, value) {
        if (_.isNumber(parseInt(propertyOrIndex)) && _.isArray(objectToTraverse)) {
            return objectToTraverse[propertyOrIndex] = value;
        } else if (_.isString(propertyOrIndex) && _.isObject(objectToTraverse)) {
            return objectToTraverse[propertyOrIndex] = value;
        }

        throw new Error('Unsupported type ' + typeof propertyOrIndex + ' when setting property or index');
    }

    return _;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright 2018 PhenixP2P Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
    __webpack_require__(2),
    __webpack_require__(10),
    __webpack_require__(28),
    __webpack_require__(19),
    __webpack_require__(33),
    __webpack_require__(18)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function(rtc, logging, PCast, UserMediaResolver, PCastExpress, AdminApiProxyClient) {
    rtc.global.PhenixPCast = PCast;

    return {
        express: {PCastExpress: PCastExpress},
        lowLevel: {PCast: PCast},
        media: {UserMediaResolver: UserMediaResolver},
        net: {AdminApiProxyClient: AdminApiProxyClient},
        utils: {
            logging: logging,
            rtc: rtc
        },

        // TODO(dy) remove deprecated. Use above
        logging: logging,
        PCast: PCast,
        RTC: rtc,
        UserMediaResolver: UserMediaResolver
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })
/******/ ]);
});
//# sourceMappingURL=phenix-web-sdk-light.js.map