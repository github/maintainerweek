(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(6546)}])},6517:function(e,t,o){"use strict";o.d(t,{g:function(){return r}});var n=JSON.parse('{"actions:view-more":"View more","anchor-nav:hero":"Maintainer Month","anchor-nav:about":"About","anchor-nav:news":"News","anchor-nav:get-involved":"Get involved","anchor-nav:events":"Schedule","anchor-nav:connection":"Connection","connection:image-description":"Connection illustration","event-button:podcast":"Listen to the podcast","event-button:stream":"Watch the stream","event-button:talk":"Watch the talk","event-button:meetup":"View the meetup","event-button:fundraising":"Help raise funds","event-button:conference":"View the conference","event-button:misc":"View the event","event-button:workshop":"Register for the workshop","event-type:podcast":"Podcast","event-type:stream":"Stream","event-type:talk":"Talk","event-type:meetup":"Meetup","event-type:fundraising":"Fundraising","event-type:conference":"Conference","event-type:misc":"Misc","event-type:workshop":"Workshop","footer:copyright":"Made with ♥︎️ by GitHub","footer:privacy-title":"Privacy terms and conditions","footer:privacy-url":"https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement","footer:repository-title":"Repository","footer:repository-url":"https://github.com/github/maintainermonth","footer:twitter-label":"Follow us on Twitter","footer:twitter-url":"https://twitter.com/github","footer:facebook-label":"Follow us on Facebook","footer:facebook-url":"https://www.facebook.com/GitHub/","footer:youtube-label":"Follow us on YouTube","footer:youtube-url":"https://www.youtube.com/github","footer:linkedin-label":"Follow us on LinkedIn","footer:linkedin-url":"https://www.linkedin.com/company/github","footer:github-label":"Follow us on GitHub","footer:github-url":"https://github.com/github/maintainermonth","hero:image-description":"Illustration inspired by M. C. Escher","library:title":"Library","library:description":"List of all the resources that will be useful during GitHub Maintainer Month.","meta:title":"Maintainer Month 2024","meta:description":"A month for open source maintainers to gather, share, and be celebrated.","meta:event-description":"Check out this GitHub Maintainer Month event","message:tbd":"TBD","not-found:title":"Oops!","not-found:subtitle":"Page not found","not-found:button":"Go home","navigation:news":"News","navigation:schedule":"Schedule","navigation:library":"Library","news:title":"News","news:description":"This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.","page:title":"Maintainer Month","page:title-mobile":"MM","page:date":"May 2024","schedule:title":"Schedule","schedule:description":"List of all events to be organized during GitHub Maintainer Month","share:event":"Check out this GitHub Maintainer Month event","timezone:utc":"UTC","timezone:pt":"PT"}');let r=e=>n[e]},3770:function(e,t,o){"use strict";o.d(t,{$L:function(){return i},Rq:function(){return c},Sd:function(){return r},Y3:function(){return l},Z4:function(){return s},aZ:function(){return a}});let n=function(e){let{parent:t=r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{path:e,parent:t,linkTo:t=>({pathname:e,query:t}),getPath:t=>t?"/"+t+e:e}},r=n("/",{parent:null}),i=n("/schedule");n("".concat(i.path,"/[slug]"),{parent:i});let l=n("/library"),a=n("/2022"),s=n("/2023"),c=n("/news")},8780:function(e,t,o){"use strict";o.d(t,{E:function(){return l},h:function(){return a}});var n=o(5893),r=o(7294);let i=(0,r.createContext)(),l=e=>{let{children:t}=e,[o,l]=(0,r.useState)(0);return(0,n.jsx)(i.Provider,{value:{animationStep:o,setAnimationStep:l},children:t})},a=()=>{let e=(0,r.useContext)(i);if(void 0===e)throw Error("useBackground must be used within a BackgroundProvider");return e}},3412:function(e,t){"use strict";var o,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{PrefetchKind:function(){return o},ACTION_REFRESH:function(){return r},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u},isThenable:function(){return f}});let r="refresh",i="navigate",l="restore",a="server-patch",s="prefetch",c="fast-refresh",u="server-action";function f(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=o||(o={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,o){"use strict";function n(e,t,o,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),o(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return C}});let n=o(8754),r=o(5893),i=n._(o(7294)),l=o(7950),a=o(7387),s=o(6982),c=o(6921),u=o(7727),f=o(1973),d=o(6216),h=o(1722),p=o(6504),v=o(634),g=o(3412),b=new Set;function m(e,t,o,n,r,i){if(i||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let r=t+"%"+o+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(b.has(r))return;b.add(r)}Promise.resolve(i?e.prefetch(t,r):e.prefetch(t,o,n)).catch(e=>{})}}function w(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let C=i.default.forwardRef(function(e,t){let o,n;let{href:s,as:b,children:C,prefetch:y=null,passHref:_,replace:x,shallow:j,scroll:k,locale:M,onClick:L,onMouseEnter:N,onTouchStart:E,legacyBehavior:H=!1,...T}=e;o=C,H&&("string"==typeof o||"number"==typeof o)&&(o=(0,r.jsx)("a",{children:o}));let P=i.default.useContext(f.RouterContext),V=i.default.useContext(d.AppRouterContext),O=null!=P?P:V,R=!P,S=!1!==y,Z=null===y?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:A,as:I}=i.default.useMemo(()=>{if(!P){let e=w(s);return{href:e,as:b?w(b):e}}let[e,t]=(0,l.resolveHref)(P,s,!0);return{href:e,as:b?(0,l.resolveHref)(P,b):t||e}},[P,s,b]),F=i.default.useRef(A),B=i.default.useRef(I);H&&(n=i.default.Children.only(o));let Y=H?n&&"object"==typeof n&&n.ref:t,[X,D,G]=(0,h.useIntersection)({rootMargin:"200px"}),U=i.default.useCallback(e=>{(B.current!==I||F.current!==A)&&(G(),B.current=I,F.current=A),X(e),Y&&("function"==typeof Y?Y(e):"object"==typeof Y&&(Y.current=e))},[I,Y,A,G,X]);i.default.useEffect(()=>{O&&D&&S&&m(O,A,I,{locale:M},{kind:Z},R)},[I,A,D,M,S,null==P?void 0:P.locale,O,R,Z]);let z={ref:U,onClick(e){H||"function"!=typeof L||L(e),H&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),O&&!e.defaultPrevented&&function(e,t,o,n,r,l,s,c,u){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(o)))return;e.preventDefault();let d=()=>{let e=null==s||s;"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:l,locale:c,scroll:e}):t[r?"replace":"push"](n||o,{scroll:e})};u?i.default.startTransition(d):d()}(e,O,A,I,x,j,k,M,R)},onMouseEnter(e){H||"function"!=typeof N||N(e),H&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),O&&(S||!R)&&m(O,A,I,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:Z},R)},onTouchStart(e){H||"function"!=typeof E||E(e),H&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),O&&(S||!R)&&m(O,A,I,{locale:M,priority:!0,bypassPrefetchedCheck:!0},{kind:Z},R)}};if((0,c.isAbsoluteUrl)(I))z.href=I;else if(!H||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&(0,p.getDomainLocale)(I,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);z.href=t||(0,v.addBasePath)((0,u.addLocale)(I,e,null==P?void 0:P.defaultLocale))}return H?i.default.cloneElement(n,z):(0,r.jsx)("a",{...T,...z,children:o})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=o(7294),r=o(9126),i="function"==typeof IntersectionObserver,l=new Map,a=[];function s(e){let{rootRef:t,rootMargin:o,disabled:s}=e,c=s||!i,[u,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(c||u)return;let e=d.current;if(e&&e.tagName)return function(e,t,o){let{id:n,observer:r,elements:i}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=l.get(n)))return t;let r=new Map;return t={id:o,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e),elements:r},a.push(o),l.set(o,t),t}(o);return i.set(e,t),r.observe(e),function(){if(i.delete(e),r.unobserve(e),0===i.size){r.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o})}else if(!u){let e=(0,r.requestIdleCallback)(()=>f(!0));return()=>(0,r.cancelIdleCallback)(e)}},[c,o,t,u,d.current]),[h,u,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6546:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return A}});var n=o(5893);o(9607);var r=o(7294),i=o(1163),l=function(e){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.push(e)},a=function(){window.__fathomClientQueue=window.__fathomClientQueue||[],window.__fathomClientQueue.forEach(function(e){switch(e.type){case"trackPageview":u(e.opts);return;case"trackGoal":f(e.code,e.cents);return;case"trackEvent":d(e.eventName,e.opts);return;case"enableTrackingForMe":p();return;case"blockTrackingForMe":h();return;case"setSite":v(e.id);return}}),window.__fathomClientQueue=[]},s=function(e){var t=/(https?)(?=:|\/|$)/;e.forEach(function(e){null!==t.exec(e)&&console.warn("The include domain ".concat(e," might fail to work as intended as it begins with a transfer protocol (http://, https://). Consider removing the protocol portion of the string."))})},c=function(e,t){var o=document.createElement("script"),n=document.getElementsByTagName("script")[0]||document.querySelector("body");o.id="fathom-script",o.async=!0,o.setAttribute("data-site",e),o.src=t&&t.url?t.url:"https://cdn.usefathom.com/script.js",t&&(void 0!==t.auto&&o.setAttribute("data-auto","".concat(t.auto)),void 0!==t.honorDNT&&o.setAttribute("data-honor-dnt","".concat(t.honorDNT)),void 0!==t.canonical&&o.setAttribute("data-canonical","".concat(t.canonical)),t.includedDomains&&(s(t.includedDomains),o.setAttribute("data-included-domains",t.includedDomains.join(","))),t.excludedDomains&&(s(t.excludedDomains),o.setAttribute("data-excluded-domains",t.excludedDomains.join(","))),t.spa&&o.setAttribute("data-spa",t.spa)),o.onload=a,n.parentNode.insertBefore(o,n)},u=function(e){window.fathom?e?window.fathom.trackPageview(e):window.fathom.trackPageview():l({type:"trackPageview",opts:e})},f=function(e,t){window.fathom?window.fathom.trackGoal(e,t):l({type:"trackGoal",code:e,cents:t})},d=function(e,t){window.fathom?window.fathom.trackEvent(e,t):l({type:"trackEvent",eventName:e,opts:t})},h=function(){window.fathom?window.fathom.blockTrackingForMe():l({type:"blockTrackingForMe"})},p=function(){window.fathom?window.fathom.enableTrackingForMe():l({type:"enableTrackingForMe"})},v=function(e){window.fathom?window.fathom.setSite(e):l({type:"setSite",id:e})},g=o(523),b=o.n(g),m=o(512),w=o(8780),C=o(3770),y=o(6517),_=()=>(0,n.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 1200 1227",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",fill:"white"})}),x=()=>(0,n.jsx)("svg",{className:"icon-facebook",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M18.71 5.75H6.29C5.99131 5.75 5.75 5.99131 5.75 6.29V18.71C5.75 19.0087 5.99131 19.25 6.29 19.25H18.71C19.0087 19.25 19.25 19.0087 19.25 18.71V6.29C19.25 5.99131 19.0087 5.75 18.71 5.75ZM17.1508 9.69031H16.0724C15.227 9.69031 15.0633 10.0919 15.0633 10.6826V11.9836H17.0816L16.8183 14.0204H15.0633V19.25H12.959V14.0221H11.1989V11.9836H12.959V10.4818C12.959 8.73856 14.0238 7.7885 15.5797 7.7885C16.3256 7.7885 16.9651 7.84419 17.1524 7.8695V9.69031H17.1508Z",fill:"#000"})}),j=()=>(0,n.jsx)("svg",{className:"icon-youtube",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M21.0888 7.86815C20.9777 7.45938 20.7611 7.0893 20.4622 6.79725C20.1548 6.49622 19.7781 6.28089 19.3676 6.17158C17.8313 5.75418 12.4943 5.75418 12.4943 5.75418C9.92829 5.72409 8.18099 5.85644 5.63074 6.1505C5.22023 6.26789 4.84422 6.48803 4.53617 6.79135C4.23349 7.09154 4.01425 7.46172 3.89972 7.86731C3.6246 9.39502 3.49093 10.9462 3.5005 12.5C3.49069 14.0524 3.62403 15.6031 3.89972 17.1327C4.01179 17.5366 4.23022 17.9051 4.53372 18.2027C4.83722 18.5004 5.21516 18.7154 5.63074 18.8293C7.18751 19.2458 12.4943 19.2458 12.4943 19.2458C15.0635 19.2759 16.8141 19.1436 19.3676 18.8495C19.7781 18.7402 20.1548 18.5248 20.4622 18.2238C20.761 17.9318 20.9773 17.5617 21.088 17.1529C21.3703 15.6258 21.5076 14.074 21.4979 12.5194C21.5191 10.9582 21.382 9.39993 21.0888 7.86815ZM10.5375 15.3872V9.61363L15.6585 12.5008L10.5375 15.3872Z",fill:"#000"})}),k=()=>(0,n.jsxs)("svg",{className:"icon-linkedin",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.99039 7.22102C8.99039 8.02296 8.37977 8.67196 7.42487 8.67196C6.50718 8.67196 5.89657 8.02296 5.91547 7.22102C5.89657 6.3801 6.50717 5.75 7.44317 5.75C8.37976 5.75 8.97208 6.3801 8.99039 7.22102ZM5.99224 19.1592V9.81818H8.8953V19.1586H5.99224V19.1592Z",fill:"#000"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2223 12.7992C11.2223 11.6341 11.1839 10.6408 11.1455 9.81938H13.6671L13.8011 11.0991H13.8584C14.2405 10.5068 15.1954 9.60974 16.7426 9.60974C18.6524 9.60974 20.085 10.8705 20.085 13.6201V19.1604H17.1819V13.9838C17.1819 12.7797 16.7621 11.9589 15.7115 11.9589C14.909 11.9589 14.4318 12.5128 14.2411 13.0472C14.1643 13.2386 14.1265 13.5055 14.1265 13.7736V19.1604H11.2235V12.7992H11.2223Z",fill:"#000"})]}),M=()=>(0,n.jsx)("svg",{className:"icon-github",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 5C8.35625 5 5 8.44114 5 12.6897C5 16.0924 7.14687 18.9664 10.1281 19.9853C10.5031 20.0526 10.6438 19.8219 10.6438 19.62C10.6438 19.4374 10.6344 18.8319 10.6344 18.1878C8.75 18.5435 8.2625 17.7168 8.1125 17.2843C8.02813 17.0632 7.6625 16.3808 7.34375 16.1981C7.08125 16.0539 6.70625 15.6983 7.33437 15.6887C7.925 15.6791 8.34687 16.2462 8.4875 16.4769C9.1625 17.6399 10.2406 17.3131 10.6719 17.1113C10.7375 16.6115 10.9344 16.275 11.15 16.0828C9.48125 15.8905 7.7375 15.2273 7.7375 12.286C7.7375 11.4497 8.02813 10.7577 8.50625 10.2194C8.43125 10.0271 8.16875 9.23895 8.58125 8.18161C8.58125 8.18161 9.20937 7.97976 10.6438 8.96981C11.2438 8.79679 11.8813 8.71028 12.5188 8.71028C13.1562 8.71028 13.7938 8.79679 14.3938 8.96981C15.8281 7.97015 16.4563 8.18161 16.4563 8.18161C16.8688 9.23895 16.6062 10.0271 16.5312 10.2194C17.0094 10.7577 17.3 11.4401 17.3 12.286C17.3 15.2369 15.5469 15.8905 13.8781 16.0828C14.15 16.3231 14.3844 16.7845 14.3844 17.5054C14.3844 18.5339 14.375 19.3605 14.375 19.62C14.375 19.8219 14.5156 20.0622 14.8906 19.9853C17.8531 18.9664 20 16.0828 20 12.6897C20 8.44114 16.6438 5 12.5 5Z",fill:"#000"})}),L=()=>{let{pathname:e}=(0,i.useRouter)(),t=(0,r.useMemo)(()=>e===C.Sd.path,[e]),o=(0,m.Z)("footer",{"is-home":t});return(0,n.jsxs)("footer",{className:o,children:[(0,n.jsxs)("div",{className:"footer__copyright",children:[(0,n.jsx)("a",{className:"footer__link",href:C.aZ.path,children:"2022"}),(0,n.jsx)("a",{className:"footer__link",href:C.Z4.path,children:"2023"}),(0,n.jsx)("a",{className:"footer__link",href:(0,y.g)("footer:repository-url"),target:"_blank",rel:"noreferrer",children:(0,y.g)("footer:repository-title")}),(0,n.jsx)("span",{className:"footer__divider"}),(0,n.jsx)("p",{children:(0,y.g)("footer:copyright")})]}),(0,n.jsxs)("div",{className:"footer__links",children:[(0,n.jsxs)("div",{className:"footer__social",children:[(0,n.jsx)("a",{className:"footer__button",href:(0,y.g)("footer:twitter-url"),target:"_blank",rel:"noreferrer","aria-label":(0,y.g)("footer:twitter-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(_,{})})}),(0,n.jsx)("a",{className:"footer__button",href:(0,y.g)("footer:facebook-url"),target:"_blank",rel:"noreferrer","aria-label":(0,y.g)("footer:facebook-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(x,{})})}),(0,n.jsx)("a",{className:"footer__button",href:(0,y.g)("footer:youtube-url"),target:"_blank",rel:"noreferrer","aria-label":(0,y.g)("footer:youtube-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(j,{})})}),(0,n.jsx)("a",{className:"footer__button",href:(0,y.g)("footer:linkedin-url"),target:"_blank",rel:"noreferrer","aria-label":(0,y.g)("footer:linkedin-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(k,{})})}),(0,n.jsx)("a",{className:"footer__button",href:(0,y.g)("footer:github-url"),target:"_blank",rel:"noreferrer","aria-label":(0,y.g)("footer:github-label"),children:(0,n.jsx)("span",{"aria-hidden":"true",children:(0,n.jsx)(M,{})})})]}),(0,n.jsx)("a",{className:"footer__link",href:(0,y.g)("footer:privacy-url"),target:"_blank",rel:"noreferrer",children:(0,y.g)("footer:privacy-title")})]})]})},N=o(1664),E=o.n(N),H=function(){let[e,t]=(0,r.useState)({width:void 0,height:void 0});return(0,r.useEffect)(()=>{function e(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e},T=()=>(0,n.jsx)("svg",{className:"github-logo",height:"32","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1",width:"32","data-view-component":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})}),P=()=>(0,n.jsx)("svg",{className:"icon-calendar",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75V5.25H6C4.75736 5.25 3.75 6.25736 3.75 7.5V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V7.5C20.25 6.25736 19.2426 5.25 18 5.25H15.75V3.75C15.75 3.33579 15.4142 3 15 3C14.5858 3 14.25 3.33579 14.25 3.75V5.25H9.75V3.75ZM5.25 10.5V18C5.25 18.4142 5.58579 18.75 6 18.75H18C18.4142 18.75 18.75 18.4142 18.75 18V10.5L5.25 10.5ZM18.75 9L5.25 9V7.5C5.25 7.08579 5.58579 6.75 6 6.75H18C18.4142 6.75 18.75 7.08579 18.75 7.5V9Z",fill:"#000"})}),V=()=>(0,n.jsxs)("svg",{className:"icon-books",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M15.8419 6.72811C15.9491 7.12821 15.7117 7.53946 15.3116 7.64667L13.8627 8.0349C13.4626 8.14211 13.0513 7.90467 12.9441 7.50457C12.8369 7.10447 13.0744 6.69322 13.4745 6.58601L14.9234 6.19778C15.3235 6.09058 15.7347 6.32801 15.8419 6.72811Z",fill:"#000"}),(0,n.jsx)("path",{d:"M17.979 17.6014C18.3791 17.4942 18.6165 17.083 18.5093 16.6829C18.4021 16.2828 17.9908 16.0453 17.5907 16.1525L16.1418 16.5408C15.7417 16.648 15.5043 17.0592 15.6115 17.4593C15.7187 17.8594 16.13 18.0969 16.5301 17.9896L17.979 17.6014Z",fill:"#000"}),(0,n.jsx)("path",{d:"M17.9269 14.5095C18.0341 14.9096 17.7967 15.3209 17.3966 15.4281L15.9477 15.8163C15.5476 15.9235 15.1364 15.6861 15.0292 15.286C14.922 14.8859 15.1594 14.4746 15.5595 14.3674L17.0084 13.9792C17.4085 13.872 17.8197 14.1094 17.9269 14.5095Z",fill:"#000"}),(0,n.jsx)("path",{d:"M8.25 6.94414C8.25 7.35836 7.91421 7.69414 7.5 7.69414H6C5.58579 7.69414 5.25 7.35836 5.25 6.94414C5.25 6.52993 5.58579 6.19414 6 6.19414H7.5C7.91421 6.19414 8.25 6.52993 8.25 6.94414Z",fill:"#000"}),(0,n.jsx)("path",{d:"M7.5 18.0001C7.91421 18.0001 8.25 17.6643 8.25 17.2501C8.25 16.8358 7.91421 16.5001 7.5 16.5001H6C5.58579 16.5001 5.25 16.8358 5.25 17.2501C5.25 17.6643 5.58579 18.0001 6 18.0001H7.5Z",fill:"#000"}),(0,n.jsx)("path",{d:"M8.25 15.0001C8.25 15.4143 7.91421 15.7501 7.5 15.7501H6C5.58579 15.7501 5.25 15.4143 5.25 15.0001C5.25 14.5858 5.58579 14.2501 6 14.2501H7.5C7.91421 14.2501 8.25 14.5858 8.25 15.0001Z",fill:"#000"}),(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.9233 3.69487L14.8211 2.91841C16.0214 2.59679 17.2552 3.3091 17.5768 4.5094L21.0708 17.5494C21.3925 18.7497 20.6802 19.9835 19.4799 20.3051L16.5821 21.0815C15.3818 21.4032 14.148 20.6908 13.8264 19.4905L10.5 7.07625V18.7501C10.5 19.9927 9.49264 21.0001 8.25 21.0001H5.25C4.00736 21.0001 3 19.9927 3 18.7501V5.25005C3 4.00741 4.00736 3.00005 5.25 3.00005H8.25C9.37449 3.00005 10.3063 3.82496 10.4733 4.90264C10.7466 4.32809 11.2606 3.87245 11.9233 3.69487ZM12.3116 5.14376C11.9115 5.25096 11.674 5.66222 11.7812 6.06232L15.2753 19.1023C15.3825 19.5024 15.7937 19.7399 16.1938 19.6326L19.0916 18.8562C19.4917 18.749 19.7292 18.3377 19.622 17.9376L16.1279 4.89763C16.0207 4.49753 15.6094 4.26009 15.2093 4.3673L12.3116 5.14376ZM5.25 4.50005C4.83579 4.50005 4.5 4.83584 4.5 5.25005V18.7501C4.5 19.1643 4.83579 19.5001 5.25 19.5001H8.25C8.66421 19.5001 9 19.1643 9 18.7501V5.25005C9 4.83584 8.66421 4.50005 8.25 4.50005H5.25Z",fill:"#000"})]}),O=()=>(0,n.jsx)("svg",{className:"icon-bell",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20",children:(0,n.jsx)("path",{d:"M12 1c3.681 0 7 2.565 7 6v4.539c0 .642.189 1.269.545 1.803l2.2 3.298A1.517 1.517 0 0 1 20.482 19H15.5a3.5 3.5 0 1 1-7 0H3.519a1.518 1.518 0 0 1-1.265-2.359l2.2-3.299A3.25 3.25 0 0 0 5 11.539V7c0-3.435 3.318-6 7-6ZM6.5 7v4.539a4.75 4.75 0 0 1-.797 2.635l-2.2 3.298-.003.01.001.007.004.006.006.004.007.001h16.964l.007-.001.006-.004.004-.006.001-.006a.017.017 0 0 0-.003-.01l-2.199-3.299a4.753 4.753 0 0 1-.798-2.635V7c0-2.364-2.383-4.5-5.5-4.5S6.5 4.636 6.5 7ZM14 19h-4a2 2 0 1 0 4 0Z"})}),R=()=>{let{pathname:e}=(0,i.useRouter)(),{width:t}=H(),o=Number(e.split("/")[1])>404?Number(e.split("/")[1]):null,l=(0,r.useMemo)(()=>e===C.Sd.path,[e]),[a,s]=(0,r.useState)(l),c=(0,m.Z)("header__chip",{hide:a}),u=(0,r.useMemo)(()=>t<460,[t]);return(0,r.useEffect)(()=>{if(!l){s(!1);return}s(!0);let e=e=>{let t=e.target.scrollingElement.clientHeight;s(!(e.target.scrollingElement.scrollTop>t/2))};return s(!0),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[l]),(0,n.jsx)("header",{className:"header",children:(0,n.jsxs)("div",{className:"header__content",children:[(0,n.jsxs)("div",{className:"header__logo",children:[(0,n.jsxs)(E(),{href:C.Sd.path,className:"header__home-link",children:[(0,n.jsx)(T,{}),(0,y.g)(u?"page:title-mobile":"page:title")]}),(0,n.jsx)("p",{className:c,children:o||(0,y.g)("page:date")})]}),(0,n.jsx)("nav",{className:"header__navigation",children:(0,n.jsxs)("ul",{className:"header__list",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(E(),{href:C.Rq.getPath(o),"aria-label":(0,y.g)("navigation:news"),className:(0,m.Z)("header__link",{"is-active":e===C.$L.getPath(o)}),children:[(0,n.jsx)(O,{}),(0,n.jsx)("span",{className:"header__link-text",children:(0,y.g)("navigation:news")})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(E(),{href:C.$L.getPath(o),"aria-label":(0,y.g)("navigation:schedule"),className:(0,m.Z)("header__link",{"is-active":e===C.$L.getPath(o)}),children:[(0,n.jsx)(P,{}),(0,n.jsx)("span",{className:"header__link-text",children:(0,y.g)("navigation:schedule")})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(E(),{href:C.Y3.getPath(o),"aria-label":(0,y.g)("navigation:library"),className:(0,m.Z)("header__link",{"is-active":e===C.Y3.getPath(o)}),children:[(0,n.jsx)(V,{}),(0,n.jsx)("span",{className:"header__link-text",children:(0,y.g)("navigation:library")})]})})]})})]})})},S=e=>{let{children:t}=e,{animationStep:o}=(0,w.h)(),r=(0,m.Z)("layout",{["step-".concat(0)]:!0});return(0,n.jsxs)("div",{className:r,children:[(0,n.jsxs)("div",{className:"layout__bubbles",children:[(0,n.jsx)("span",{className:"layout__back-bubble"}),(0,n.jsx)("span",{className:"layout__front-bubble"})]}),(0,n.jsxs)("div",{className:"layout__content",children:[(0,n.jsx)(R,{}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(L,{})]})]})},Z=()=>{(0,r.useEffect)(()=>{let e=()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[])},A=function(e){let{Component:t,pageProps:o}=e;Z();let l=(0,i.useRouter)();return(0,r.useEffect)(()=>{c("GSJNLFML",{includedDomains:["maintainermonth.github.com"]}),b().polyfill();let e=()=>{u(),window.scroll({top:0,left:0})};return l.events.on("routeChangeComplete",e),()=>{l.events.off("routeChangeComplete",e)}},[]),(0,n.jsx)(w.E,{children:(0,n.jsx)(S,{children:(0,n.jsx)(t,{...o})})})}},9607:function(){},1664:function(e,t,o){e.exports=o(3480)},1163:function(e,t,o){e.exports=o(3035)},523:function(e){e.exports={polyfill:function(){var e,t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var n=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:n.prototype.scroll||a,scrollIntoView:n.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(e=t.navigator.userAgent,RegExp("MSIE |Trident/|Edge/").test(e))?1:0;t.scroll=t.scrollTo=function(){if(void 0!==arguments[0]){if(!0===s(arguments[0])){r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset);return}f.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(void 0!==arguments[0]){if(s(arguments[0])){r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);return}f.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===s(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}},n.prototype.scrollBy=function(){if(void 0!==arguments[0]){if(!0===s(arguments[0])){r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},n.prototype.scrollIntoView=function(){if(!0===s(arguments[0])){r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);return}var e=function(e){for(var t,n,r;e!==o.body&&!1===(n=c(t=e,"Y")&&u(t,"Y"),r=c(t,"X")&&u(t,"X"),n||r);)e=e.parentNode||e.host;return e}(this),n=e.getBoundingClientRect(),i=this.getBoundingClientRect();e!==o.body?(f.call(this,e,e.scrollLeft+i.left-n.left,e.scrollTop+i.top-n.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function f(e,n,l){var s,c,u,f,d=i();e===o.body?(s=t,c=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,f=r.scroll):(s=e,c=e.scrollLeft,u=e.scrollTop,f=a),function e(o){var n,r,l,a=(i()-o.startTime)/468;n=.5*(1-Math.cos(Math.PI*(a=a>1?1:a))),r=o.startX+(o.x-o.startX)*n,l=o.startY+(o.y-o.startY)*n,o.method.call(o.scrollable,r,l),(r!==o.x||l!==o.y)&&t.requestAnimationFrame(e.bind(t,o))}({scrollable:s,method:f,startTime:d,startX:c,startY:u,x:n,y:l})}}}},512:function(e,t,o){"use strict";t.Z=function(){for(var e,t,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(t=function e(t){var o,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t))for(o=0;o<t.length;o++)t[o]&&(n=e(t[o]))&&(r&&(r+=" "),r+=n);else for(o in t)t[o]&&(r&&(r+=" "),r+=o)}return r}(e))&&(n&&(n+=" "),n+=t);return n}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(3035)}),_N_E=e.O()}]);