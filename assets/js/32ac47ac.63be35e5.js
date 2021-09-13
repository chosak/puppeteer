"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72356],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=c(t),d=p,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||o;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function d(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var o=t.length,a=new Array(o);a[0]=f;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:p,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30466:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n=t(87462),p=t(63366),o=(t(67294),t(3905)),a=["components"],u={},i=void 0,c={unversionedId:"puppeteer.target.worker",id:"version-10.1.0/puppeteer.target.worker",isDocsHomePage:!1,title:"puppeteer.target.worker",description:"Home &gt; puppeteer &gt; Target &gt; worker",source:"@site/versioned_docs/version-10.1.0/puppeteer.target.worker.md",sourceDirName:".",slug:"/puppeteer.target.worker",permalink:"/puppeteer/docs/puppeteer.target.worker",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.target.worker.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.target.url",permalink:"/puppeteer/docs/puppeteer.target.url"},next:{title:"puppeteer.cdpsession",permalink:"/puppeteer/docs/puppeteer.cdpsession"}},l=[{value:"Target.worker() method",id:"targetworker-method",children:[]}],s={toc:l};function f(e){var r=e.components,t=(0,p.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.target"},"Target")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.target.worker"},"worker")),(0,o.kt)("h2",{id:"targetworker-method"},"Target.worker() method"),(0,o.kt)("p",null,"If the target is not of type ",(0,o.kt)("inlineCode",{parentName:"p"},'"service_worker"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"shared_worker"'),", returns ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"worker(): Promise<WebWorker | null>;\n")),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.webworker"},"WebWorker")," ","|"," null",">"))}f.isMDXComponent=!0}}]);