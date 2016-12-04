/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="debounce,throttle"`
 */
;(function(){function t(){return d.Date.now()}function e(){}function n(e,n,r){function i(t){var n=s,o=b;return s=b=f,j=t,d=e.apply(o,n)}function a(t){var e=t-g;return t-=j,g===f||e>=n||0>e||x&&t>=y}function c(){var e=t();if(a(e))return l(e);var o,r=setTimeout;o=e-j,e=n-(e-g),o=x?h(e,y-o):e,m=r(c,o)}function l(t){return m=f,T&&s?i(t):(s=b=f,d)}function p(){var e=t(),o=a(e);if(s=arguments,b=this,g=e,o){if(m===f)return j=e=g,m=setTimeout(c,n),v?i(e):d;if(x)return m=setTimeout(c,n),i(g)}return m===f&&(m=setTimeout(c,n)),
d}var s,b,y,d,m,g,j=0,v=false,x=false,T=true;if(typeof e!="function")throw new TypeError("Expected a function");return n=u(n)||0,o(r)&&(v=!!r.leading,y=(x="maxWait"in r)?O(u(r.maxWait)||0,n):y,T="trailing"in r?!!r.trailing:T),p.cancel=function(){m!==f&&clearTimeout(m),j=0,s=g=b=m=f},p.flush=function(){return m===f?d:l(t())},p}function o(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function r(t){return null!=t&&typeof t=="object"}function i(t){var e;if(!(e=typeof t=="symbol")&&(e=r(t))){
var n;if(null==t)n=t===f?"[object Undefined]":"[object Null]";else if(t=Object(t),x&&x in t){e=j.call(t,x);var o=t[x];try{t[x]=f,n=true}catch(t){}var i=v.call(t);n&&(e?t[x]=o:delete t[x]),n=i}else n=v.call(t);e="[object Symbol]"==n}return e}function u(t){if(typeof t=="number")return t;if(i(t))return a;if(o(t)&&(t=typeof t.valueOf=="function"?t.valueOf():t,t=o(t)?t+"":t),typeof t!="string")return 0===t?t:+t;t=t.replace(c,"");var e=p.test(t);return e||s.test(t)?b(t.slice(2),e?2:8):l.test(t)?a:+t}var f,a=NaN,c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,s=/^0o[0-7]+$/i,b=parseInt,y=typeof self=="object"&&self&&self.Object===Object&&self,d=typeof global=="object"&&global&&global.Object===Object&&global||y||Function("return this")(),m=(y=typeof exports=="object"&&exports&&!exports.nodeType&&exports)&&typeof module=="object"&&module&&!module.nodeType&&module,g=Object.prototype,j=g.hasOwnProperty,v=g.toString,x=(g=d.Symbol)?g.toStringTag:f,O=Math.max,h=Math.min;
e.debounce=n,e.throttle=function(t,e,r){var i=true,u=true;if(typeof t!="function")throw new TypeError("Expected a function");return o(r)&&(i="leading"in r?!!r.leading:i,u="trailing"in r?!!r.trailing:u),n(t,e,{leading:i,maxWait:e,trailing:u})},e.isObject=o,e.isObjectLike=r,e.isSymbol=i,e.now=t,e.toNumber=u,e.VERSION="4.17.1",typeof define=="function"&&typeof define.amd=="object"&&define.amd?(d._=e, define(function(){return e})):m?((m.exports=e)._=e,y._=e):d._=e}).call(this);

var body = document.getElementsByTagName('body')[0],
    container = body.querySelectorAll('.container')[0],
    navBtn = container.querySelectorAll('.nav-btn')[0],
    navItems = container.querySelectorAll('.mainnav__item'),
    footerNavItems = container.querySelectorAll('.footer-nav__item'),
    projectBtn = document.querySelector('.project-btn'),
    activeItem = "";


function toggleMenu() {
    container.classList.toggle('menu-active');
    if(container.classList.contains('project') || container.classList.contains('contact')){
console.log('test');
      container.classList = 'container';
    }
}

function _menuActions(event) {
    event.preventDefault();
    var elem = event.currentTarget,
        elemAtt = elem.getAttribute("data-navBtn");
    if (activeItem !== "") {
        container.classList.remove(activeItem);
    }
    if (elemAtt !== "") {
        event.preventDefault();
        container.classList.add(elemAtt);

    } else {
      var url = event.getElementsByTagName('A')[0];
      url = url.getAttribute('href');
      window.location.href = url;

    }
    activeItem = elemAtt;
}

window.addEventListener("load", function() {
    navBtn.addEventListener('click', toggleMenu);
    if(projectBtn != null) {
      projectBtn.addEventListener('click', _menuActions);
    }
    for (var i = navItems.length; i--;) {
        navItems[i].addEventListener('click', _menuActions);
    }
    for (var i = footerNavItems.length; i--;) {
        footerNavItems[i].addEventListener('click', _menuActions);
    }
});




