(function(){"use strict";var e={1307:function(e,i,t){var a=t(9155),n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"menu"}},[t("div",{attrs:{id:"brand"}},[t("router-link",{attrs:{to:"/"}},[t("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_book_01.svg"}})])],1),t("div",{attrs:{id:"side"}},[t("router-link",{attrs:{to:"/browse"}},[t("div",{staticClass:"menu-item browse"},[t("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Search_Noun_project_15028.svg"}}),t("p",[e._v("Browse")])])]),t("router-link",{attrs:{to:"/shelf"}},[t("div",{staticClass:"menu-item browse"},[t("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Book_%2823019%29_-_The_Noun_Project.svg"}}),t("p",[e._v("0 books")])])]),t("router-link",{attrs:{to:"/reviews"}},[t("div",{staticClass:"menu-item"},[t("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Pen_-_The_Noun_Project.svg"}}),t("p",[e._v("Reviews")])])])],1)]),t("router-view")],1)},r=[],o=t(1001),c={},s=(0,o.Z)(c,n,r,!1,null,null,null),u=s.exports,p=t(1788),m=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("BookList",{attrs:{books:e.books}})],1)},d=[],l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"books"},e._l(e.books,(function(i){return t("div",{key:i.id,staticClass:"book"},[t("div",{staticClass:"info"},[t("h1",[e._v(e._s(i.name))])]),t("div",{staticClass:"image"},[t("img",{attrs:{src:"/images/books/"+i.image}})]),t("div",{staticClass:"length"},[t("h2",[e._v(e._s(i.length))]),t("button",{staticClass:"auto"},[e._v("Add to Bookshelf")])])])})),0)])},g=[],f={name:"BookList",props:{books:Array}},h=f,v=(0,o.Z)(h,l,g,!1,null,"3746fd1e",null),y=v.exports,b={name:"HomeView",components:{BookList:y},data(){return{}},computed:{books(){return this.$root.$data.books}}},_=b,k=(0,o.Z)(_,m,d,!1,null,null,null),j=k.exports;a.Z.use(p.Z);const $=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,5830))}],w=new p.Z({mode:"history",base:"/",routes:$});var C=w;let B=[{id:1,name:"Throckmorton",length:"200 p.",image:"https://upload.wikimedia.org/wikipedia/commons/3/30/Photograph_of_painting_of_Joseph_Throckmorton.jpg"},{id:2,name:"Dogs in France",length:"100 p.",image:"https://live.staticflickr.com/1643/25989424636_2bb1afe859_b.jpg"},{id:3,name:"On Fish and Other Crises",length:"300 p.",image:"https://live.staticflickr.com/8701/16694569804_f7a1bffa1d_b.jpg"},{id:4,name:"Mountains",length:"1000 p.",image:"https://live.staticflickr.com/102/289882539_fbb19292e5_b.jpg"},{id:5,name:"City Sidewalks",length:"400 p.",image:"https://live.staticflickr.com/979/28226936698_7776d0cc7f_b.jpg"},{id:6,name:"Rubbed Sage",length:"255 p.",image:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Captain_Vincenzo_Lunardi_with_his_Assistant_George_Biggin%2C_and_Mrs._Letitia_Anne_Sage%2C_in_a_Balloon%2C_by_John_Francis_Rigaud_%281742-1810%29.jpg"},{id:7,name:"Rock and Role",length:"233 p.",image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Ferroceladonite%2C_Smoky_Quartz%2C_Microcline-171040.jpg"},{id:8,name:"Cucumber",price:"$3.02",country:"Canada",image:"cucumber.jpg"},{id:9,name:"Fava Beans",price:"$4.76",country:"Brazil",image:"fava-beans.jpg"},{id:10,name:"Coconut",price:"$2.50",country:"Brazil",image:"coconut.jpg"},{id:11,name:"Kettle Potato Chips",price:"$6.70",country:"United States",image:"potato-chips.jpg"},{id:12,name:"Flour - Rye",price:"$1.14",country:"Canada",image:"rye-flour.jpg"},{id:13,name:"Feta Chees",price:"$6.92",country:"Brazil",image:"feta-cheese.jpg"},{id:14,name:"Cheddar Cheese",price:"$5.36",country:"Mexico",image:"cheddar-cheese.jpg"},{id:15,name:"Capers",price:"$4.18",country:"United States",image:"capers.jpg"},{id:16,name:"Baguette",price:"$9.18",country:"Mexico",image:"baguette.jpg"},{id:17,name:"Lasagna Noodles",price:"$4.73",country:"Brazil",image:"lasagna-pasta.jpg"},{id:18,name:"Pied De Vents Cheese",price:"$5.16",country:"Canada",image:"pied-de-vents.jpg"},{id:19,name:"Sweet Potato Crackers",price:"$6.81",country:"United States",image:"crackers.jpg"},{id:20,name:"Mushrooms",price:"$8.62",country:"United States",image:"mushrooms.jpg"},{id:21,name:"Jerusalem Artichoke",price:"$3.16",country:"United States",image:"jerusalem-artichoke.jpg"},{id:22,name:"Leather Leaf Fern",price:"$9.41",country:"Brazil",image:"leather-leaf.jpg"},{id:23,name:"Dried Apricots",price:"$7.42",country:"Brazil",image:"dried-apricots.jpg"},{id:24,name:"Navel Orange",price:"$3.53",country:"Brazil",image:"navel-orange.jpg"},{id:25,name:"Sunflower Oil",price:"$1.90",country:"Mexico",image:"sunflower-oil.jpg"},{id:26,name:"Black Turtle Beans",price:"$4.67",country:"Canada",image:"turtle-beans.jpg"},{id:27,name:"Bananas",price:"$2.64",country:"Canada",image:"bananas.jpg"},{id:28,name:"Salami",price:"$8.72",country:"Brazil",image:"salami.jpg"},{id:29,name:"Proscuitto",price:"$9.86",country:"Brazil",image:"proscuitto.jpg"},{id:30,name:"Cranberries",price:"$5.85",country:"United States",image:"cranberries.jpg"},{id:31,name:"Canteloupe",price:"$4.49",country:"United States",image:"canteloupe.jpg"},{id:32,name:"Lemon",price:"$2.8Lemon5",country:"United States",image:"lemon.jpg"},{id:33,name:"Pesto",price:"$2.67",country:"Brazil",image:"pesto.jpg"},{id:34,name:"Grapefruit Juice",price:"$4.88",country:"Brazil",image:"grapefruit-juice.jpg"},{id:35,name:"Curry Paste",price:"$2.02",country:"Brazil",image:"curry-paste.jpg"},{id:36,name:"Avocado Oil",price:"$4.45",country:"Canada",image:"avocado-oil.jpg"},{id:37,name:"Queso Fresco",price:"$9.24",country:"Canada",image:"queso-fresco.jpg"},{id:38,name:"Key Lime Pie",price:"$5.32",country:"Mexico",image:"key-lime-pie.jpg"},{id:39,name:"Granny Smith Apple",price:"$2.12",country:"United States",image:"granny-smith.jpg"},{id:40,name:"Morning Glory Muffin Mix",price:"$9.22",country:"Brazil",image:"muffin-mix.jpg"},{id:41,name:"Heavy Whipping Cream",price:"$8.78",country:"Brazil",image:"heavy-cream.jpg"},{id:42,name:"Red Bell Pepper",price:"$9.03",country:"Brazil",image:"red-bell-pepper.jpg"},{id:43,name:"Perrier",price:"$9.36",country:"United States",image:"perrier.jpg"},{id:44,name:"Yukon Gold Potatoes",price:"$8.76",country:"Mexico",image:"yukon-potatoes.jpg"},{id:45,name:"Salmon Fillets",price:"$6.21",country:"United States",image:"salmon-fillets.jpg"},{id:46,name:"Tilapia Fillets",price:"$4.37",country:"Mexico",image:"tilapia.jpg"},{id:47,name:"Tomato Pesto",price:"$9.70",country:"Brazil",image:"tomato-pesto.jpg"},{id:48,name:"Oil - Olive Bertolli",price:"$8.92",country:"Brazil",image:"olive-oil.jpg"},{id:49,name:"Tear Drop Yellow Tomatoes",price:"$3.32",country:"Mexico",image:"yellow-tomatoes.jpg"},{id:50,name:"Smoked Paprika",price:"$8.31",country:"Brazil",image:"smoked-paprika.jpg"}];var S=B;let O={books:S,shelf:[]};new a.Z({router:C,data:O,render:e=>e(u)}).$mount("#app")}},i={};function t(a){var n=i[a];if(void 0!==n)return n.exports;var r=i[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(i,a,n,r){if(!a){var o=1/0;for(p=0;p<e.length;p++){a=e[p][0],n=e[p][1],r=e[p][2];for(var c=!0,s=0;s<a.length;s++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[s])}))?a.splice(s--,1):(c=!1,r<o&&(o=r));if(c){e.splice(p--,1);var u=n();void 0!==u&&(i=u)}}return i}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[a,n,r]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(i,a){return t.f[a](e,i),i}),[]))}}(),function(){t.u=function(e){return"js/about.b361611c.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){var e={},i="reading-list:";t.l=function(a,n,r,o){if(e[a])e[a].push(n);else{var c,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),p=0;p<u.length;p++){var m=u[p];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==i+r){c=m;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",i+r),c.src=a),e[a]=[n];var d=function(i,t){c.onerror=c.onload=null,clearTimeout(l);var n=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((function(e){return e(t)})),i)return i(t)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={143:0};t.f.j=function(i,a){var n=t.o(e,i)?e[i]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(t,a){n=e[i]=[t,a]}));a.push(n[2]=r);var o=t.p+t.u(i),c=new Error,s=function(a){if(t.o(e,i)&&(n=e[i],0!==n&&(e[i]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;c.message="Loading chunk "+i+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}};t.l(o,s,"chunk-"+i,i)}},t.O.j=function(i){return 0===e[i]};var i=function(i,a){var n,r,o=a[0],c=a[1],s=a[2],u=0;if(o.some((function(i){return 0!==e[i]}))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(s)var p=s(t)}for(i&&i(a);u<o.length;u++)r=o[u],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(p)},a=self["webpackChunkreading_list"]=self["webpackChunkreading_list"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(1307)}));a=t.O(a)})();
//# sourceMappingURL=app.36f961bc.js.map