if(!self.define){let e,l={};const s=(s,i)=>(s=new URL(s+".js",i).href,l[s]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=l,document.head.appendChild(e)}else e=s,importScripts(s),l()})).then((()=>{let e=l[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(l[n])return;let v={};const u=e=>s(e,n),o={module:{uri:n},exports:v,require:u};l[n]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(r(...e),v)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"titl"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/dev/css/884.890ecb9f.css",revision:null},{url:"/dev/css/912.ea90be6f.css",revision:null},{url:"/dev/css/924.624eeb60.css",revision:null},{url:"/dev/css/932.d3f113e4.css",revision:null},{url:"/dev/css/app.8b800224.css",revision:null},{url:"/dev/fonts/GOTHIC.10ba8f95.woff2",revision:null},{url:"/dev/fonts/GOTHIC.2c10f61e.ttf",revision:null},{url:"/dev/fonts/GOTHICB.32c4fc45.ttf",revision:null},{url:"/dev/fonts/GOTHICB.b5f0352b.woff2",revision:null},{url:"/dev/fonts/GOTHICI.0ab55ac4.ttf",revision:null},{url:"/dev/fonts/GOTHICI.36c5e25d.woff2",revision:null},{url:"/dev/img/arrow.391818fb.svg",revision:null},{url:"/dev/img/cart.70aa1c04.svg",revision:null},{url:"/dev/img/cart_black.54187dc8.svg",revision:null},{url:"/dev/img/delivery_company.7c230091.svg",revision:null},{url:"/dev/img/delivery_russia.c92d84bd.svg",revision:null},{url:"/dev/img/delivery_self.bf97542a.svg",revision:null},{url:"/dev/img/delivery_town.5f47039b.svg",revision:null},{url:"/dev/img/heart.497ef48f.svg",revision:null},{url:"/dev/img/heart_filled.6061bbeb.svg",revision:null},{url:"/dev/img/product_none.bc322c17.png",revision:null},{url:"/dev/img/product_none.ffe3a632.svg",revision:null},{url:"/dev/img/titl.1d218dff.svg",revision:null},{url:"/dev/index.html",revision:"c3183bae8d31d60090677a24bdf44a3f"},{url:"/dev/js/236.fc1fe1e7.js",revision:null},{url:"/dev/js/380.3579e380.js",revision:null},{url:"/dev/js/656.c1967aca.js",revision:null},{url:"/dev/js/884.6cd81700.js",revision:null},{url:"/dev/js/912.8ec8051e.js",revision:null},{url:"/dev/js/924.66154b26.js",revision:null},{url:"/dev/js/932.20d23401.js",revision:null},{url:"/dev/js/app.e263647b.js",revision:null},{url:"/dev/js/chunk-vendors.753577d1.js",revision:null},{url:"/dev/manifest.json",revision:"561a9ff7b895473122433f187aa828af"},{url:"/dev/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
