"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43848],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),a=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=a(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=a(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,p=new Array(i);p[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var a=2;a<i;a++)p[a]=t[a];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95629:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return m}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),p=["components"],s={},c=void 0,a={unversionedId:"puppeteer.browsercontext.clearpermissionoverrides",id:"version-10.1.0/puppeteer.browsercontext.clearpermissionoverrides",isDocsHomePage:!1,title:"puppeteer.browsercontext.clearpermissionoverrides",description:"Home &gt; puppeteer &gt; BrowserContext &gt; clearPermissionOverrides",source:"@site/versioned_docs/version-10.1.0/puppeteer.browsercontext.clearpermissionoverrides.md",sourceDirName:".",slug:"/puppeteer.browsercontext.clearpermissionoverrides",permalink:"/puppeteer/docs/puppeteer.browsercontext.clearpermissionoverrides",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.browsercontext.clearpermissionoverrides.md",version:"10.1.0",frontMatter:{}},l=[{value:"BrowserContext.clearPermissionOverrides() method",id:"browsercontextclearpermissionoverrides-method",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browsercontext"},"BrowserContext")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.browsercontext.clearpermissionoverrides"},"clearPermissionOverrides")),(0,i.kt)("h2",{id:"browsercontextclearpermissionoverrides-method"},"BrowserContext.clearPermissionOverrides() method"),(0,i.kt)("p",null,"Clears all permission overrides for the browser context."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"clearPermissionOverrides(): Promise<void>;\n")),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","void",">"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const context = browser.defaultBrowserContext();\ncontext.overridePermissions('https://example.com', ['clipboard-read']);\n// do stuff ..\ncontext.clearPermissionOverrides();\n\n")))}m.isMDXComponent=!0}}]);