!function(n){function r(r){for(var t,i,u=r[0],c=r[1],s=r[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(d&&d(r);p.length;)p.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var n,r=0;r<a.length;r++){for(var e=a[r],t=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(t=!1)}t&&(a.splice(r--,1),n=i(i.s=e[0]))}return n}var t={},o={2:0},a=[];function i(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=t,i.d=function(n,r,e){i.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,r){if(1&r&&(n=i(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)i.d(e,t,function(r){return n[r]}.bind(null,t));return e},i.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(r,"a",r),r},i.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=r,u=u.slice();for(var s=0;s<u.length;s++)r(u[s]);var d=c;a.push([14,1,0]),e()}([,,,,,,function(n,r,e){var t=e(7),o=e(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);n.exports=o.locals||{}},,function(n,r,e){var t=e(0),o=e(9),a=e(10),i=e(11);(r=t(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),r.i(o),r.i(a),r.i(i),r.push([n.i,":root {\r\n  --first-colour: #222831;\r\n  --second-colour: #393E46;\r\n  --third-colour: #00ADB5;\r\n  --fourth-colour: #EEEEEE;\r\n  --fifth-colour: #000000;\r\n  --contrast-colour: #FFFFFF;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbutton, \r\na, \r\ninput,\r\ntextarea {\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    padding: 13px;\r\n    text-decoration: none;\r\n}\r\n\r\n.dflex {\r\n  display: flex;\r\n}\r\n\r\n.align-center {\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n:focus {\r\n  border: 2px solid var(--second-colour);\r\n}",""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,".skip-link {\r\n  position: absolute;\r\n  padding: 0.7rem 1rem;\r\n  background-color: var(--third-colour);\r\n  color: var(--fourth-colour);\r\n  top: -50px;\r\n  z-index: 5;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 5px;\r\n  left: 5px;\r\n}\r\n\r\nnav {\r\n  padding: 1rem;\r\n  background-color: var(--fourth-colour);\r\n  justify-content: space-between;\r\n  margin: auto 0;\r\n}\r\n\r\n.brand {\r\n  font-weight: bolder;\r\n  font-size: 1.5rem;\r\n  margin-left: 10px;\r\n}\r\n\r\n.menu {\r\n  margin-right: 10px;\r\n}\r\n\r\n.menu a {\r\n  margin: 0 1rem;\r\n  color: black;\r\n}\r\n\r\n.menu a:hover {\r\n  background-color: var(--second-colour);\r\n  color: var(--contrast-colour)\r\n}\r\n\r\nnav button {\r\n  display: none;\r\n}\r\n\r\n.hero {\r\n  color: var(--first-colour);\r\n  padding: 200px 0;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.hero .image {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  object-fit: cover;\r\n  object-position: center;\r\n}\r\n\r\n.hero > h1 > span {\r\n  background-color: var(--second-colour);\r\n  color: var(--contrast-colour);\r\n  padding: 0.2rem\r\n}\r\n\r\n.hero p {\r\n  max-width: 40ch;\r\n  width: 90%;\r\n  margin: 0.5rem auto;\r\n  background-color: var(--fourth-colour);\r\n  padding: 0.7rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n@media screen and (max-width: 560px) {\r\n  nav {\r\n    position: relative;\r\n  }\r\n\r\n  nav button {\r\n    display: block;\r\n    font-size: 1.5rem;\r\n    border: none;\r\n  }\r\n\r\n  nav .menu {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 70px;\r\n    z-index: 1;\r\n    flex-direction: column;\r\n    background-color: var(--second-colour);\r\n    padding: 1rem;\r\n    border-radius: 5px;\r\n    transform: scale(0, 0);\r\n  }\r\n\r\n  nav .menu.showed {\r\n    transform: scale(1, 1);\r\n  }\r\n\r\n  nav .menu a {\r\n    color: var(--fourth-colour);\r\n    margin: 0.7rem 2rem;\r\n  }\r\n\r\n  nav .menu a:hover {\r\n    color: var(--second-colour);\r\n    background-color: var(--fourth-colour);\r\n  }\r\n}",""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,"main {\r\n  margin: 100px auto;\r\n}\r\n\r\n/* Food Menu */\r\n\r\n.foods {\r\n  margin-bottom: 125px;\r\n}\r\n\r\n.restaurants h2,\r\n.foods h2 {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.foods > .cards,\r\n.restaurants > .cards {\r\n  gap: 15px 25px;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.foods > .cards {\r\n  width: 90%;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.empty {\r\n  text-align: center;\r\n}\r\n\r\n.empty span {\r\n  display: block;\r\n}\r\n\r\n.empty a {\r\n  background-color: var(--second-colour);\r\n  color: var(--fourth-colour);\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n  margin-top: 1rem;\r\n}\r\n\r\nresto-card,\r\nfood-card {\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\r\n  overflow: hidden;\r\n  border-radius: 10px;\r\n}\r\n\r\nfood-card {\r\n  max-width: 200px;\r\n  width: 90%;\r\n  display: block;\r\n}\r\n\r\nfood-card .skeleton {\r\n  width: 100%;\r\n  height: 150px;\r\n  background-color: lightgray;\r\n}\r\n\r\nfood-card .card-info {\r\n  margin: 1rem;\r\n}\r\n\r\n.card-info i {\r\n  color: #FFD27D;\r\n}\r\n\r\n/* Restaurant Menu */\r\n\r\nresto-card {\r\n  width: 300px;\r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\nresto-card a {\r\n  display: block;\r\n  text-decoration: none;\r\n  padding: 0;\r\n  color: black;\r\n}\r\n\r\nresto-card .city {\r\n  position: absolute;\r\n  padding: 0.5rem 1rem;\r\n  background-color: var(--fourth-colour);\r\n  top: 5px;\r\n  left: 5px;\r\n  border-radius: 5px;\r\n}\r\n\r\nresto-card .city i {\r\n  color: red;\r\n}\r\n\r\nresto-card .city span {\r\n  display: inline-block;\r\n  margin-left: 0.3rem;\r\n}\r\n\r\nresto-card .skeleton {\r\n  background-color: lightgray;\r\n  height: 200px;\r\n}\r\n\r\nresto-card img,\r\nfood-card img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\nresto-card .card-info {\r\n  padding: 1rem;\r\n}\r\n\r\nresto-card .rating span {\r\n  display: inline-block;\r\n  margin-left: 0.3rem;\r\n  font-size: 1rem;\r\n}\r\n\r\nresto-card .card-info .name {\r\n  margin: 1rem auto;\r\n}\r\n\r\nresto-card .card-info .desc {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  line-height: 1.6;\r\n  -webkit-line-clamp: 4;\r\n  -webkit-box-orient: vertical;\r\n  display: -webkit-box;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nfooter {\r\n  padding: 1rem;\r\n  background-color: var(--third-colour);\r\n  color: var(--contrast-colour)\r\n}\r\n\r\n@media screen and (max-width: 280px) {\r\n  resto-card .skeleton {\r\n    height: 150px;\r\n  }\r\n}",""]),n.exports=r},function(n,r,e){(r=e(0)(!1)).push([n.i,".restaurant {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  max-width: 1300px;\r\n  min-height: 300px;\r\n}\r\n\r\n.banner {\r\n  gap: 15px;\r\n}\r\n\r\n.banner .skeleton {\r\n  width: 70%;\r\n  height: 100%;\r\n  display: block;\r\n  background-color: lightgray;\r\n}\r\n\r\n.skeleton img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.banner .detail-group,\r\n.message {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.detail-group span {\r\n  max-width: 60ch;\r\n  display: block;\r\n}\r\n\r\n.menus,\r\n.reviews,\r\n.add-review {\r\n  margin-top: 4rem;\r\n}\r\n\r\n.menus h2,\r\n.menu-group h3,\r\n.reviews h2,\r\n.add-review h2 {\r\n  text-align: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.menu-group {\r\n  margin-top: 1rem;\r\n  justify-content: center;\r\n  gap: 15px;\r\n}\r\n\r\n.foods-menu,\r\n.drinks-menu {\r\n  box-shadow: rgba(57, 62, 70, 0.3) 0px 0px 0px 3px;\r\n  padding: 2rem 4rem;\r\n  max-width: 400px;\r\n  width: 100%;\r\n  min-height: 500px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.review-box,\r\n.inputs {\r\n  max-width: 700px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.review-box {\r\n  padding: 1.5rem 2rem;\r\n  border-radius: 10px;\r\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.review-box,\r\n.inputs .add button,\r\n.favorite-btn {\r\n  background-color: var(--second-colour);\r\n  color: var(--fourth-colour);\r\n}\r\n\r\n\r\n.review-group {\r\n  justify-content: space-between;\r\n}\r\n\r\n.review-group .name {\r\n  font-size: 1.4rem;\r\n  font-weight: bolder;\r\n}\r\n\r\n.input-group {\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.input-group label,\r\n.input-group input,\r\n.input-group textarea {\r\n  width: 100%;\r\n  display: block;\r\n}\r\n\r\n.input-group input,\r\n.input-group textarea {\r\n  border: 1px solid var(--second-colour);\r\n}\r\n\r\n.input-group input,\r\n.input-group textarea,\r\n.inputs .add button {\r\n  font-size: 1rem;\r\n  border-radius: 5px;\r\n}\r\n\r\n.input-group textarea {\r\n  resize: vertical;\r\n}\r\n\r\n.inputs .add {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.inputs .add button {\r\n  padding: 0.8rem 1.5rem;\r\n  border: none;\r\n}\r\n\r\n.favorite-btn {\r\n  position: fixed;\r\n  bottom: 2%;\r\n  right: 2%;\r\n  border-radius: 10px;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  padding: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 950px) {\r\n  .banner {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .banner .skeleton {\r\n    width: 100%;\r\n    height: 300px;\r\n  }\r\n\r\n  .banner img {\r\n    object-fit: cover;\r\n    object-position: center;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 830px) {\r\n  .menu-group {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 520px) {\r\n  .review-group {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .review-group .date {\r\n    font-size: 0.8rem;\r\n  }\r\n\r\n  .message {\r\n    display: block;\r\n    margin-top: 1.5rem;\r\n  }\r\n}",""]),n.exports=r},,function(n,r){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function t(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function o(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function a(n,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function i(n){var r="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,t)}function t(){return u(n,arguments,d(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),s(t,n)})(n)}function u(n,r,e){return(u=c()?Reflect.construct:function(n,r,e){var t=[null];t.push.apply(t,r);var o=new(Function.bind.apply(n,t));return e&&s(o,e.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function s(n,r){return(s=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function d(n){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var l=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&s(n,r)}(f,n);var r,e,i,u,l,p=(r=f,e=c(),function(){var n,t=d(r);if(e){var o=d(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return a(this,n)});function f(){return t(this,f),p.apply(this,arguments)}return i=f,(u=[{key:"items",set:function(n){this._data=n,this._render()}},{key:"_render",value:function(){this.innerHTML='\n      <div class="skeleton">\n        <img src="'.concat(this._data.urlImage,'" alt="').concat(this._data.name,' food">\n      </div>\n      <section class="card-info">\n          <h3>').concat(this._data.name,"</h3>\n          <div></div>\n      </section>\n    ");for(var n=this.querySelector(".card-info > div"),r=0;r<this._data.rating;r+=1)n.innerHTML+='<i class="fas fa-star"></i>'}}])&&o(i.prototype,u),l&&o(i,l),f}(i(HTMLElement));customElements.define("food-card",l)},function(n,r,e){"use strict";e.r(r);e(5),e(6);var t={init:function(n){var r=this,e=n.button,t=n.drawer,o=n.body;e.addEventListener("click",(function(n){r._toggleDrawer(n,t)})),o.addEventListener("click",(function(n){r._closeDrawer(n,t)}))},_toggleDrawer:function(n,r){n.stopPropagation(),r.classList.toggle("showed")},_closeDrawer:function(n,r){n.stopPropagation(),r.classList.remove("showed")}},o={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),r=this._urlSplitter(n);return this._urlCombiner(r)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var r=n.split("/");return{resource:r[1]||null,id:r[2]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")}},a={BASE_URL:"https://restaurant-api.dicoding.dev",CACHE_NAME:"Resfood-V1",DATABASE_NAME:"resfood-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurant",WEB_SOCKET_SERVER:"wss://movies-feed.dicoding.dev"},i=a.BASE_URL,u={LIST:"".concat(i,"/list"),DETAIL:function(n){return"".concat(i,"/detail/").concat(n)},ADD_REVIEW:"".concat(i,"/review")};function c(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}function s(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var a=n.apply(r,e);function i(n){c(a,t,o,i,u,"next",n)}function u(n){c(a,t,o,i,u,"throw",n)}i(void 0)}))}}function d(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var l=function(){function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)}var r,e,t,o,a,i;return r=n,e=null,t=[{key:"listRestaurants",value:(i=s(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(u.LIST);case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",e.restaurants);case 7:case"end":return n.stop()}}),n)}))),function(){return i.apply(this,arguments)})},{key:"detailRestaurant",value:(a=s(regeneratorRuntime.mark((function n(r){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(u.DETAIL(r));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.restaurant);case 7:case"end":return n.stop()}}),n)}))),function(n){return a.apply(this,arguments)})},{key:"addReview",value:(o=s(regeneratorRuntime.mark((function n(r){var e,t,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)},n.next=3,fetch(u.ADD_REVIEW,e);case 3:return t=n.sent,n.next=6,t.json();case 6:return o=n.sent,n.abrupt("return",o.customerReviews);case 8:case"end":return n.stop()}}),n)}))),function(n){return o.apply(this,arguments)})}],e&&d(r.prototype,e),t&&d(r,t),n}();e(2),e(12);function p(n){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function f(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function v(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function m(n,r){if(r&&("object"===p(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}function h(n){var r="function"==typeof Map?new Map:void 0;return(h=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,t)}function t(){return g(n,arguments,y(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),b(t,n)})(n)}function g(n,r,e){return(g=w()?Reflect.construct:function(n,r,e){var t=[null];t.push.apply(t,r);var o=new(Function.bind.apply(n,t));return e&&b(o,e.prototype),o}).apply(null,arguments)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}function b(n,r){return(b=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function y(n){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var x=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&b(n,r)}(u,n);var r,e,t,o,a,i=(r=u,e=w(),function(){var n,t=y(r);if(e){var o=y(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return m(this,n)});function u(){return f(this,u),i.apply(this,arguments)}return t=u,(o=[{key:"items",set:function(n){this._data=n,this._render()}},{key:"_render",value:function(){this.innerHTML='\n      <a href="#/detail/'.concat(this._data.id,'">\n        <div class="city">\n          <i class="fas fa-map-marker-alt"></i>\n          <span>').concat(this._data.city,'</span>\n        </div>\n        <div class="skeleton">\n          <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/').concat(this._data.pictureId,'" alt="').concat(this._data.name,' restaurant"></img>\n        </div>\n        <section class="card-info">\n            <div class="rating">\n                <i class="fas fa-star"></i>\n                <span>').concat(this._data.rating,'/5</span>\n            </div>\n            <h3 class="name">').concat(this._data.name,'</h3>\n            <p class="desc">').concat(this._data.description,"</p>\n        </section>\n      </a>\n    ")}}])&&v(t.prototype,o),a&&v(t,a),u}(h(HTMLElement));customElements.define("resto-card",x);e(13);var R=[{name:"Corba",urlImage:"https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",rating:5},{name:"Burek",urlImage:"https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",rating:5},{name:"Kumpir",urlImage:"https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",rating:5},{name:"Tamiya",urlImage:"https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",rating:4}];function k(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}function _(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var a=n.apply(r,e);function i(n){k(a,t,o,i,u,"next",n)}function u(n){k(a,t,o,i,u,"throw",n)}i(void 0)}))}}var E={render:function(){return _(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="foods">\n        <h2 class="align-center">Frequently Ordered Menu</h2>\n        <div class="cards dflex">\n            \n        </div>\n      </div>\n      <div class="restaurants">\n        <h2 class="align-center">Explore Restaurant</h2>\n        <div class="dflex cards">\n        \n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){var n=this;return _(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n._foodsRender(),n._restaurantsRender();case 2:case"end":return r.stop()}}),r)})))()},_foodsRender:function(){return _(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=document.querySelector(".foods > .cards"),R.forEach((function(n){var e=document.createElement("food-card");e.items=n,r.append(e)}));case 2:case"end":return n.stop()}}),n)})))()},_restaurantsRender:function(){return _(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=document.querySelector(".restaurants > .cards"),n.next=3,l.listRestaurants();case 3:n.sent.forEach((function(n){var e=document.createElement("resto-card");e.items=n,r.append(e)}));case 5:case"end":return n.stop()}}),n)})))()}},S=function(n){return'\n    <div class="banner dflex">\n        <div class="skeleton">\n            <img src="https://restaurant-api.dicoding.dev/images/medium/'.concat(n.pictureId,'" alt="').concat(n.name,' restaurant">\n        </div>\n        <div class="details">\n            <h2>').concat(n.name,'</h2>\n            <div class="detail-group">\n                <h3>Description</h3>\n                <span>').concat(n.description,'</span>\n            </div>\n            <div class="detail-group">\n                <h3>Rating</h3>\n                <span>').concat(n.rating,'/5</span>\n            </div>\n            <div class="detail-group">\n                <h3>Address</h3>\n                <span>').concat(n.address,", ").concat(n.city,'</span>\n            </div>\n        </div>\n    </div>\n    <div class="menus">\n        <h2>Menus</h2>\n        <div class="menu-group dflex">\n            <div class="foods-menu">\n                <h3>Food Menu</h3>\n                <ul class="foods-list"></ul>\n            </div> \n            <div class="drinks-menu">\n                <h3>Drink Menu</h3>\n                <ul class="drinks-list"></ul>\n            </div>\n        </div>\n    </div>\n    <div class="reviews">\n        <h2>Customer Reviews</h2>\n        <div class="reviews-list"></div>\n    </div>\n    <div class="add-review">\n        <h2>Add Review</h2>\n        <div class="inputs">\n            <div class="input-group">\n                <label for="name">Name</label>\n                <input type="text" name="name" id="name">\n            </div>\n            <div class="input-group">\n                <label for="review-message">Review</label>\n                <textarea name="review-message" id="review-message" cols="30" rows="10"></textarea>\n            </div>\n            <div class="add dflex">\n                <button class="add-review-button">Add Review</button>\n            </div>    \n        </div>\n    </div>\n')},O=function(n){return'\n    <div class="review-box">\n        <div class="review-group dflex">\n            <span class="name">'.concat(n.name,'</span>\n            <span class="date">').concat(n.date,'</span>\n        </div>\n        <div class="message">\n            <span>').concat(n.review,"</span>\n        </div>\n    </div>\n")},P=e(4);function j(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}function T(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var a=n.apply(r,e);function i(n){j(a,t,o,i,u,"next",n)}function u(n){j(a,t,o,i,u,"throw",n)}i(void 0)}))}}var A=a.DATABASE_NAME,L=a.DATABASE_VERSION,M=a.OBJECT_STORE_NAME,C=Object(P.a)(A,L,{upgrade:function(n){n.createObjectStore(M,{keyPath:"id"})}}),D={getRestaurant:function(n){return T(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,C;case 4:return r.abrupt("return",r.sent.get(M,n));case 5:case"end":return r.stop()}}),r)})))()},getAllRestaurants:function(){return T(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C;case 2:return n.abrupt("return",n.sent.getAll(M));case 3:case"end":return n.stop()}}),n)})))()},putRestaurant:function(n){return T(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.hasOwnProperty("id")){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,C;case 4:return r.abrupt("return",r.sent.put(M,n));case 5:case"end":return r.stop()}}),r)})))()},deleteRestaurant:function(n){return T(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C;case 2:return r.abrupt("return",r.sent.delete(M,n));case 3:case"end":return r.stop()}}),r)})))()}};function I(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}function q(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var a=n.apply(r,e);function i(n){I(a,t,o,i,u,"next",n)}function u(n){I(a,t,o,i,u,"throw",n)}i(void 0)}))}}var B={init:function(n){var r=this;return q(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.favoriteContainer,o=n.restaurant,r._favoriteContainer=t,r._restaurant=o,e.next=5,r._renderButton();case 5:case"end":return e.stop()}}),e)})))()},_renderButton:function(){var n=this;return q(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n._restaurant.id,r.next=3,n._isRestaurantExist(e);case 3:if(!r.sent){r.next=7;break}n._renderLiked(),r.next=8;break;case 7:n._renderLike();case 8:case"end":return r.stop()}}),r)})))()},_isRestaurantExist:function(n){return q(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.getRestaurant(n);case 2:return e=r.sent,r.abrupt("return",!!e);case 4:case"end":return r.stop()}}),r)})))()},_renderLiked:function(){var n=this;return q(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n._favoriteContainer.innerHTML='\n    <button aria-label="unfavorite this restaurant" id="favorite-btn" class="favorite-btn">\n        <i class="fas fa-heart"></i>\n    </button>\n',document.querySelector("#favorite-btn").addEventListener("click",function(){var r=q(regeneratorRuntime.mark((function r(e){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.stopPropagation(),r.next=3,D.deleteRestaurant(n._restaurant.id);case 3:n._renderButton();case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()},_renderLike:function(){var n=this;return q(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n._favoriteContainer.innerHTML='\n    <button aria-label="favorite this restaurant" id="favorite-btn" class="favorite-btn">\n        <i class="far fa-heart"></i>\n    </button>\n',document.querySelector("#favorite-btn").addEventListener("click",function(){var r=q(regeneratorRuntime.mark((function r(e){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.stopPropagation(),r.next=3,D.putRestaurant(n._restaurant);case 3:n._renderButton();case 4:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}};function F(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}function H(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var a=n.apply(r,e);function i(n){F(a,t,o,i,u,"next",n)}function u(n){F(a,t,o,i,u,"throw",n)}i(void 0)}))}}var z={init:function(n){var r=this;return H(regeneratorRuntime.mark((function e(){var t,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.reviewsContainer,o=n.addReviewButton,a=n.data,r._reviewsContainer=t,o.addEventListener("click",(function(n){navigator.onLine?(r._sendReview(n,a),r._clearInput(a)):console.log("Anda tidak bisa menambah review saat keadaan offline")}));case 3:case"end":return e.stop()}}),e)})))()},_sendReview:function(n,r){var e=this;return H(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.stopPropagation(),o={id:r.id,name:r.nameInput.value,review:r.reviewInput.value},t.next=4,l.addReview(o);case 4:a=t.sent,e._renderAllReviews(a);case 6:case"end":return t.stop()}}),t)})))()},_renderAllReviews:function(n){var r=this;return H(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r._reviewsContainer.innerHTML="",n.forEach((function(n){r._reviewsContainer.innerHTML+=O(n)}));case 2:case"end":return e.stop()}}),e)})))()},_clearInput:function(n){return H(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.nameInput.value="",n.reviewInput.value="";case 2:case"end":return r.stop()}}),r)})))()}};function N(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}function W(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var a=n.apply(r,e);function i(n){N(a,t,o,i,u,"next",n)}function u(n){N(a,t,o,i,u,"throw",n)}i(void 0)}))}}function U(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}function V(n){return function(){var r=this,e=arguments;return new Promise((function(t,o){var a=n.apply(r,e);function i(n){U(a,t,o,i,u,"next",n)}function u(n){U(a,t,o,i,u,"throw",n)}i(void 0)}))}}var J={"/":E,"/favorite":{render:function(){return V(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="restaurants">\n        <h2 class="align-center">Your Favorited Restaurants</h2>\n        <div class="dflex cards"></div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return V(regeneratorRuntime.mark((function n(){var r,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=document.querySelector(".restaurants > .cards"),n.next=3,D.getAllRestaurants();case 3:(e=n.sent).length?e.forEach((function(n){var e=document.createElement("resto-card");e.items=n,r.append(e)})):r.innerHTML='\n        <div class="empty">\n          <h3>Sorry</h3>\n          <span> You didn\'t favorite any restaurant yet </span>\n          <a href="/">Go To Home</a>\n        </div>\n      ';case 5:case"end":return n.stop()}}),n)})))()}},"/detail/:id":{render:function(){return W(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div class="restaurant"></div>\n    <div class="favorite"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){var n=this;return W(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=o.parseActiveUrlWithoutCombiner(),r.next=3,l.detailRestaurant(e.id);case 3:t=r.sent,document.querySelector(".restaurant").innerHTML=S(t),n._renderFoods(t.menus.foods),n._renderDrinks(t.menus.drinks),n._renderReviews(t.customerReviews),B.init({favoriteContainer:document.querySelector(".favorite"),restaurant:t}),z.init({reviewsContainer:document.querySelector(".reviews-list"),addReviewButton:document.querySelector(".add-review-button"),data:{id:t.id,nameInput:document.querySelector("input#name"),reviewInput:document.querySelector("#review-message")}});case 11:case"end":return r.stop()}}),r)})))()},_renderFoods:function(n){return W(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e=document.querySelector("ul.foods-list"),n.forEach((function(n){e.innerHTML+="<li>".concat(n.name,"</li>")}));case 2:case"end":return r.stop()}}),r)})))()},_renderDrinks:function(n){return W(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e=document.querySelector("ul.drinks-list"),n.forEach((function(n){e.innerHTML+="<li>".concat(n.name,"</li>")}));case 2:case"end":return r.stop()}}),r)})))()},_renderReviews:function(n){return W(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e=document.querySelector(".reviews-list"),n.forEach((function(n){e.innerHTML+=O(n)}));case 2:case"end":return r.stop()}}),r)})))()}}};function K(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}function Y(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var G=function(){function n(r){var e=r.button,t=r.drawer,o=r.body;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=e,this._drawer=t,this._body=o,this._initialAppShell()}var r,e,a,i,u;return r=n,(e=[{key:"_initialAppShell",value:function(){t.init({button:this._button,drawer:this._drawer,body:this._body})}},{key:"renderPage",value:(i=regeneratorRuntime.mark((function n(){var r,e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.parseActiveUrlWithCombiner(),e=J[r],t=document.querySelector("main"),n.prev=3,n.next=6,e.render();case 6:return t.innerHTML=n.sent,n.next=9,e.afterRender();case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),location.href="/";case 14:case"end":return n.stop()}}),n,null,[[3,11]])})),u=function(){var n=this,r=arguments;return new Promise((function(e,t){var o=i.apply(n,r);function a(n){K(o,e,t,a,u,"next",n)}function u(n){K(o,e,t,a,u,"throw",n)}a(void 0)}))},function(){return u.apply(this,arguments)})}])&&Y(r.prototype,e),a&&Y(r,a),n}(),Q=e(3),X=e.n(Q);function Z(n,r,e,t,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void e(n)}u.done?r(c):Promise.resolve(c).then(t,o)}var $=function(){var n,r=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,X.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this brower");case 5:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,o){var a=n.apply(r,e);function i(n){Z(a,t,o,i,u,"next",n)}function u(n){Z(a,t,o,i,u,"throw",n)}i(void 0)}))});return function(){return r.apply(this,arguments)}}(),nn=new G({button:document.querySelector("nav button"),drawer:document.querySelector("nav .menu"),body:document.body});window.addEventListener("load",(function(){nn.renderPage(),$(),document.querySelector(".skip-link").addEventListener("click",(function(n){n.preventDefault(),document.querySelector("#mainContent").focus()}))})),window.addEventListener("hashchange",(function(){nn.renderPage()}))}]);