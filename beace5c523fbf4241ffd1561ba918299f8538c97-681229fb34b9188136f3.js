/*! For license information please see beace5c523fbf4241ffd1561ba918299f8538c97-681229fb34b9188136f3.js.LICENSE.txt */
(self.webpackChunk_leonardodimarchi_my_personal_website=self.webpackChunk_leonardodimarchi_my_personal_website||[]).push([[6],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},3723:function(e,t,n){"use strict";n.d(t,{G:function(){return _},L:function(){return h},M:function(){return b},P:function(){return w},_:function(){return c},a:function(){return o},b:function(){return s},g:function(){return u},h:function(){return l}});var r=n(7294),a=(n(2369),n(5697)),i=n.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function s(e,t,n,r,a){return void 0===a&&(a={}),o({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function u(e,t,n,r,a,i,c,l){var s={};i&&(s.backgroundColor=i,"fixed"===n?(s.width=r,s.height=a,s.backgroundColor=i,s.position="relative"):("constrained"===n||"fullWidth"===n)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),c&&(s.objectFit=c),l&&(s.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},s)});return u}var d,m=["children"],f=function(e){var t=e.layout,n=e.width,a=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,n=c(e,m);return r.createElement(r.Fragment,null,r.createElement(f,o({},n)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,n=e.srcSet,a=e.loading,i=e.alt,l=void 0===i?"":i,s=e.shouldLoad,u=c(e,p);return r.createElement("img",o({},u,{decoding:"async",loading:a,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:l}))},y=function(e){var t=e.fallback,n=e.sources,a=void 0===n?[]:n,i=e.shouldLoad,l=void 0===i||i,s=c(e,g),u=s.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,o({},s,t,{sizes:u,shouldLoad:l}));return a.length?r.createElement("picture",null,a.map((function(e){var t=e.media,n=e.srcSet,a=e.type;return r.createElement("source",{key:t+"-"+a+"-"+n,type:a,media:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,sizes:u})})),d):d};v.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var E=["fallback"],w=function(e){var t=e.fallback,n=c(e,E);return t?r.createElement(y,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},n))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var b=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};b.displayName="MainImage",b.propTypes=y.propTypes;var k,L,N=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),o=3;o<r;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:N},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],A=new Set,T=function(e){var t=e.as,a=void 0===t?"div":t,i=e.image,s=e.style,u=e.backgroundColor,d=e.className,m=e.class,f=e.onStartLoad,h=e.onLoad,p=e.onError,g=c(e,S),v=i.width,y=i.height,E=i.layout,w=function(e,t,n){var r={},a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}(v,y,E),b=w.style,N=w.className,x=c(w,C),T=(0,r.useRef)(),_=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var O=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,v,y);return(0,r.useEffect)((function(){k||(k=Promise.all([n.e(774),n.e(217)]).then(n.bind(n,9217)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=T.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==f||f({wasCached:!0}),null==h||h({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==h||h({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(_)):L&&A.has(_)?void 0:(k.then((function(n){var r=n.renderImageToString,a=n.swapPlaceholderImage;T.current&&(T.current.innerHTML=r(o({isLoading:!0,isLoaded:A.has(_),image:i},g)),A.has(_)||(e=requestAnimationFrame((function(){T.current&&(t=a(T.current,_,A,s,f,h,p))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){A.has(_)&&L&&(T.current.innerHTML=L(o({isLoading:A.has(_),isLoaded:A.has(_),image:i},g)),null==f||f({wasCached:!0}),null==h||h({wasCached:!0}))}),[i]),(0,r.createElement)(a,o({},x,{style:o({},b,s,{backgroundColor:u}),className:N+(d?" "+d:""),ref:T,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},_=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));_.propTypes=x,_.displayName="GatsbyImage";var O,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],z=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:N,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(O=_,function(e){var t=e.src,n=e.__imageData,a=e.__error,i=c(e,I);return a&&console.warn(a),n?r.createElement(O,o({image:n},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=R},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,a=0;a<e.length;a++){var i=e[a];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},6327:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(7294),a=n(7910),i=function(e){var t=e.children,n=(0,a.Fg)()[0].mode;return(0,r.useEffect)((function(){document.documentElement.className=n}),[n]),r.createElement("div",{className:"Layout-module--layout--2c933"},t)}},9395:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(7294),a=function(e){var t=e.description,n=e.title,a=e.image;return r.createElement(r.Fragment,null,r.createElement("title",null,n),r.createElement("meta",{name:"description",content:t}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:n}),r.createElement("meta",{name:"twitter:description",content:t}),r.createElement("meta",{name:"og:title",content:n}),r.createElement("meta",{name:"og:type",content:"website"}),r.createElement("meta",{name:"og:description",content:t}),a?r.createElement(r.Fragment,null,r.createElement("meta",{name:"image",content:a}),r.createElement("meta",{name:"og:image",content:a}),r.createElement("meta",{name:"twitter:image",content:a})):null)}},7989:function(e,t,n){"use strict";n.d(t,{T:function(){return a}});var r=n(7294),a=function(e){var t=e.title,n=e.children,a=(0,r.useRef)(null);return(0,r.useEffect)((function(){a.current&&a.current.scrollIntoView()}),[]),r.createElement("div",{ref:a,className:"Page-module--page--24e03"},r.createElement("div",{className:"Page-module--inner--4b31d"},t&&r.createElement("h1",{className:"Page-module--title--90338"},t),r.createElement("div",{className:"Page-module--body--561c4"},n)))}},6631:function(e,t,n){"use strict";n.d(t,{Y:function(){return y}});var r=n(7294),a=n(7910),i=n(1082);var o=n(3723),c=["path"],l=function(e){var t=e.path,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,c);return r.createElement(i.StaticQuery,{query:"63107425",render:function(e){var a=e.images,i=(a=void 0===a?{}:a).edges,c=(void 0===i?[]:i).find((function(e){return e.node.absolutePath.includes(t)}));if(!c)return null;var l=c.node.childImageSharp;return r.createElement(o.G,Object.assign({},n,{image:l.gatsbyImageData}))}})},s=n(7203),u="Author-module--link--09c17",d="Author-module--title--cf7e5",m=function(e){var t=e.author,n=e.isIndex;return r.createElement("div",{className:"Author-module--author--cbd31"},r.createElement(i.Link,{to:"/"},r.createElement(l,{alt:t.name,path:t.photo,className:"Author-module--photo--9787b"})),r.createElement("div",{className:"Author-module--titleContainer--4f576"},n?r.createElement("h1",{className:d},r.createElement(i.Link,{className:u,to:"/"},t.name)):r.createElement("h2",{className:d},r.createElement(i.Link,{className:u,to:"/"},t.name)),r.createElement(s.O,null)),r.createElement("p",{className:"Author-module--subtitle--86ec5"},t.bio))},f=function(e){var t=e.name,n=e.icon;return r.createElement("svg",{className:"Icon-module--icon--1d7da",viewBox:n.viewBox},r.createElement("title",null,t),r.createElement("path",{d:n.path}))},h=n(4614),p=function(e){var t=e.contacts;return r.createElement("div",{className:"Contacts-module--contacts--09178"},r.createElement("ul",{className:"Contacts-module--list--9670b"},Object.keys(t).map((function(e){return t[e]?r.createElement("li",{className:"Contacts-module--item--f9cb0",key:e},r.createElement("a",{className:"Contacts-module--link--de1e0",href:(0,h.KA)(e,t[e]),target:"_blank",rel:"noopener noreferrer"},r.createElement(f,{name:e,icon:(0,h.q7)(e)}))):null}))))},g=function(e){var t=e.copyright;return r.createElement("div",{className:"Copyright-module--copyright--2c602"},t)},v=function(e){var t=e.menu;return r.createElement("nav",{className:"Menu-module--menu--113a9"},r.createElement("ul",{className:"Menu-module--list--e1ae3"},t.map((function(e){return r.createElement("li",{className:"Menu-module--item--8b679",key:e.path},r.createElement(i.Link,{to:e.path,className:"Menu-module--link--a6f02",activeClassName:"Menu-module--active--6cb74"},e.label))}))))},y=function(e){var t=e.isIndex,n=(0,a.$W)(),i=n.author,o=n.copyright,c=n.menu;return r.createElement("div",{className:"Sidebar-module--sidebar--1bfa1"},r.createElement("div",{className:"Sidebar-module--inner--344d0"},r.createElement(m,{author:i,isIndex:t}),r.createElement(v,{menu:c}),r.createElement(p,{contacts:i.contacts}),r.createElement(g,{copyright:o})))}},7203:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(7294),a=n(5900),i=n.n(a),o=n(7910),c="ThemeSwitcher-module--sun--2163a",l=function(){var e,t=(0,o.Fg)(),n=t[0].mode,a=t[1],l=(0,r.useState)(!1),s=l[0],u=l[1];return(0,r.useEffect)((function(){u("undefined"!=typeof window)}),[]),s?r.createElement("div",{className:i()("ThemeSwitcher-module--themeSwitcher--8a77f",(e={},e["ThemeSwitcher-module--dark--6db0c"]="dark"===n,e))},r.createElement("button",{className:"ThemeSwitcher-module--button--7cb7b",onClick:a},r.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.createElement("title",null,n),r.createElement("path",{pathLength:"1",className:"ThemeSwitcher-module--moon--10537",d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}),r.createElement("circle",{pathLength:"1",className:c,cx:"12",cy:"12",r:"5"}),r.createElement("line",{pathLength:"1",className:c,x1:"12",y1:"1",x2:"12",y2:"3"}),r.createElement("line",{pathLength:"1",className:c,x1:"12",y1:"21",x2:"12",y2:"23"}),r.createElement("line",{pathLength:"1",className:c,x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),r.createElement("line",{pathLength:"1",className:c,x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),r.createElement("line",{pathLength:"1",className:c,x1:"1",y1:"12",x2:"3",y2:"12"}),r.createElement("line",{pathLength:"1",className:c,x1:"21",y1:"12",x2:"23",y2:"12"}),r.createElement("line",{pathLength:"1",className:c,x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),r.createElement("line",{pathLength:"1",className:c,x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})))):null}},100:function(e,t,n){"use strict";n.d(t,{U:function(){return r},X:function(){return a}});var r={github:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},linkedin:{path:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",viewBox:"0 0 24 24"}},a={PREV_PAGE:"← PREV",NEXT_PAGE:"→ NEXT"}},7910:function(e,t,n){"use strict";n.d(t,{KI:function(){return i},R8:function(){return l},E6:function(){return o},eK:function(){return c},$W:function(){return a},Fg:function(){return y}});var r=n(1082),a=function(){return(0,r.useStaticQuery)("4254295288").site.siteMetadata},i=function(){var e;return null!==(e=(0,r.useStaticQuery)("1855364224").allMarkdownRemark.group)&&void 0!==e?e:[]},o=function(){var e;return null!==(e=(0,r.useStaticQuery)("1894287157").allMarkdownRemark.group)&&void 0!==e?e:[]},c=function(){return(0,r.useStaticQuery)("2858483411").allMarkdownRemark.group||[]},l=function(){return(0,r.useStaticQuery)("2358783463").allMarkdownRemark.group||[]},s=n(80),u=n(885),d=n(7294),m="undefined"==typeof window?d.useEffect:d.useLayoutEffect;function f(e,t,n,r){var a=(0,d.useRef)(t);m((function(){a.current=t}),[t]),(0,d.useEffect)((function(){var t,i=null!==(t=null==n?void 0:n.current)&&void 0!==t?t:window;if(!i||!i.addEventListener)return function(){};var o=function(e){return a.current(e)};return i.addEventListener(e,o,r),function(){i.removeEventListener(e,o,r)}}),[e,n,r])}var h=function(e,t){var n,r,a=(0,d.useCallback)((function(){if("undefined"==typeof window)return t;try{var n=window.localStorage.getItem(e);return n?function(e){try{return"undefined"===e?void 0:JSON.parse(null!=e?e:"")}catch(t){return}}(n):t}catch(r){return t}}),[t,e]),i=(0,d.useState)(a),o=(0,u.Z)(i,2),c=o[0],l=o[1],s=(n=function(t){try{var n=t instanceof Function?t(c):t;window.localStorage.setItem(e,JSON.stringify(n)),l(n),window.dispatchEvent(new Event("local-storage"))}catch(r){}},r=(0,d.useRef)((function(){throw new Error("cannot call an event handler while rendering")})),m((function(){r.current=n}),[n]),(0,d.useCallback)((function(){return r.current.apply(r,arguments)}),[r]));(0,d.useEffect)((function(){l(a())}),[]);var h=(0,d.useCallback)((function(t){(null==t?void 0:t.key)&&t.key!==e||l(a())}),[e,a]);return f("storage",h),f("local-storage",h),[c,s]},p=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(null===(e=t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===e?void 0:e.map((function(e){return e.toLowerCase()})).join("-"))||""},g=n(4614),v=(0,s.cn)({key:"themeAtom",default:{mode:(0,g.z_)()}}),y=function(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"diesel:",n=(0,s.xv)(e),r=(0,u.Z)(n,2),a=r[0],i=r[1],o=h(t.concat(p(e.key)),a),c=(0,u.Z)(o,2),l=c[0],d=c[1];return[l,function(e){return d(e),i(a)}]}(v),t=e[0],n=e[1];return[t,function(){return n({mode:"dark"===t.mode?"light":"dark"})}]}},4614:function(e,t,n){"use strict";n.d(t,{KA:function(){return i},z_:function(){return c},q7:function(){return a},mA:function(){return o}});var r=n(100),a=function(e){return r.U[e]||{}},i=function(e,t){var n;return null!==(n={github:"https://github.com/"+t,linkedin:"https://www.linkedin.com/in/"+t}[e])&&void 0!==n?n:t},o=function(e){var t;return void 0===e&&(e=""),(null===(t=e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))||void 0===t?void 0:t.map((function(e){return e.toLowerCase()})).join("-"))||""},c=function(){if("undefined"==typeof window)return"light";var e=window.matchMedia("(prefers-color-scheme: dark)");return void 0!==e.matches&&e.matches?"dark":"light"}}}]);
//# sourceMappingURL=beace5c523fbf4241ffd1561ba918299f8538c97-681229fb34b9188136f3.js.map