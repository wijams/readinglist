(function(){"use strict";var e={212:function(e,t,i){i(6992),i(8674),i(9601),i(7727);var o=i(9155),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"menu"}},[i("div",{attrs:{id:"brand"}},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_book_01.svg"}})])],1),i("div",{attrs:{id:"side"}},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"menu-item browse"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Search_Noun_project_15028.svg"}}),i("p",[e._v("Browse")])])]),i("router-link",{attrs:{to:"/shelf"}},[i("div",{staticClass:"menu-item browse"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Book_%2823019%29_-_The_Noun_Project.svg"}}),i("p",{attrs:{id:"shelf-size"}},[e._v("0 books")])])]),i("router-link",{attrs:{to:"/reviews"}},[i("div",{staticClass:"menu-item"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Pen_-_The_Noun_Project.svg"}}),i("p",[e._v("Reviews")])])])],1)]),i("router-view"),e._m(0)],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"footer"},[i("hr"),i("h3",[e._v("Git Hub")]),i("a",{attrs:{href:"https://github.com/wijams/readinglist"}},[e._v("Git Repo")])])}],n=i(1001),s={},l=(0,n.Z)(s,a,r,!1,null,null,null),u=l.exports,c=i(1788),h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"search"},[i("form",{staticClass:"pure-form"},[i("i",{staticClass:"fas fa-search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})])])]),i("BookList",{attrs:{books:e.books}})],1)},d=[],m=(i(7327),i(1539),i(4916),i(4765),i(8309),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"books"},e._l(e.books,(function(t){return i("div",{key:t.id,staticClass:"book"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:t.image}})]),i("div",{staticClass:"info"},[i("h1",[e._v(e._s(t.name))]),i("h2",[e._v(e._s(t.author))]),i("p",[e._v(e._s(t.length))])]),i("div",{staticClass:"length"},[i("button",{staticClass:"auto",on:{click:function(i){return e.addToShelf(t)}}},[e._v("Add to Bookshelf")])])])})),0)])}),p=[],f={name:"BookList",props:{books:Array},methods:{addToShelf:function(e){this.$root._data.shelf.push(e),document.getElementById("shelf-size").innerHTML=this.$root._data.shelf.length+" items"}}},_=f,v=(0,n.Z)(_,m,p,!1,null,"b7fe7e38",null),g=v.exports,k={name:"HomeView",components:{BookList:g},data:function(){return{searchText:""}},computed:{books:function(){var e=this;return this.$root.$data.books.filter((function(t){return t.name.toLowerCase().search(e.searchText.toLowerCase())>=0}))}}},b=k,w=(0,n.Z)(b,h,d,!1,null,"b052092c",null),C=w.exports,y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",{staticClass:"head"},[e._v("Your Bookshelf")]),0===this.$root.$data.shelf.length?i("h3",{staticClass:"head"},[e._v("Your bookshelf is empty")]):e._e(),i("BookShelf",{attrs:{books:e.shelf}})],1)},j=[],B=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"books"},e._l(e.books,(function(t){return i("div",{key:t.id,staticClass:"book"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:t.image}})]),i("div",{staticClass:"info"},[i("h1",[e._v(e._s(t.name))]),i("h2",[e._v(e._s(t.author))]),i("p",[e._v(e._s(t.length))])]),i("div",{staticClass:"length"},[i("button",{staticClass:"auto",on:{click:function(i){return e.remove(t)}}},[e._v("Remove from Bookshelf")])])])})),0)])},x=[],T=(i(561),{name:"BookShelf",props:{books:Array},methods:{remove:function(e){for(var t=0,i=0;i<this.$root._data.shelf.length;i++)if(this.$root._data.shelf[i]==e){t+=i;break}this.$root._data.shelf.splice(t,1),document.getElementById("shelf-size").innerHTML=this.$root._data.shelf.length+" items"}}}),$=T,S=(0,n.Z)($,B,x,!1,null,"41426f04",null),O=S.exports,F={name:"ShelfView",components:{BookShelf:O},data:function(){return{}},computed:{shelf:function(){return this.$root.$data.shelf}},methods:{}},E=F,L=(0,n.Z)(E,y,j,!1,null,null,null),P=L.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",{staticClass:"head"},[e._v("Reviews")]),i("div",{staticClass:"review"},[i("h2",[e._v("Nigel Thornberry")]),i("h3",[e._v("Book: Grapes of Wrath")]),i("p",[e._v("You sell yourself short, by only assuming you see things through a scientist's eyes. God created the ability for mankind to create science, even though mankind has become so egotistical, as to think that they can replace God with it.")])]),i("div",{staticClass:"review"},[i("h2",[e._v("Scrooge Jones")]),i("h3",[e._v("Book: Dogs in France")]),i("p",[e._v("Demain, dès l’aube, à l’heure où blanchit la campagne, Je partirai. Vois-tu, je sais que tu m’attends. J’irai par la forêt, j’irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, Sans rien voir au dehors, sans entendre aucun bruit, Seul, inconnu, le dos courbé, les mains croisées, Triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l’or du soir qui tombe, Ni les voiles au loin descendant vers Harfleur, Et quand j’arriverai, je mettrai sur ta tombe Un bouquet de houx vert et de bruyère en fleur.")])]),i("div",{staticClass:"review"},[i("h2",[e._v("Lorem Ipsum")]),i("h3",[e._v("Book: Throckmorton")]),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])])}],G={},J=(0,n.Z)(G,R,Z,!1,null,null,null),q=J.exports;o.Z.use(c.Z);var A=[{path:"/",name:"home",component:C},{path:"/shelf",name:"shelf",component:P},{path:"/reviews",name:"reviews",component:q}],M=new c.Z({mode:"history",base:"/",routes:A}),D=M,H=[{id:1,name:"Throckmorton",length:"200 p.",author:"Franklin Habberforth",image:"https://upload.wikimedia.org/wikipedia/commons/3/30/Photograph_of_painting_of_Joseph_Throckmorton.jpg"},{id:2,name:"Dogs in France",length:"100 p.",author:"Dougal McGregger",image:"https://live.staticflickr.com/1643/25989424636_2bb1afe859_b.jpg"},{id:3,name:"On Fish and Other Crises",length:"300 p.",author:"Batu Haiku",image:"https://live.staticflickr.com/8701/16694569804_f7a1bffa1d_b.jpg"},{id:4,name:"Mountains",length:"1000 p.",author:"Doctor DawkTeur",image:"https://live.staticflickr.com/102/289882539_fbb19292e5_b.jpg"},{id:5,name:"City Sidewalks",length:"400 p.",author:"Silver Belle",image:"https://live.staticflickr.com/979/28226936698_7776d0cc7f_b.jpg"},{id:6,name:"Rubbed Sage",length:"255 p.",author:"Benedict Arno",image:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Captain_Vincenzo_Lunardi_with_his_Assistant_George_Biggin%2C_and_Mrs._Letitia_Anne_Sage%2C_in_a_Balloon%2C_by_John_Francis_Rigaud_%281742-1810%29.jpg"},{id:7,name:"Rock and Role",length:"233 p.",author:"George Ology",image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Ferroceladonite%2C_Smoky_Quartz%2C_Microcline-171040.jpg"},{id:8,name:"Cucumber World",length:"500 p.",author:"Ben Franklin",image:"https://upload.wikimedia.org/wikipedia/commons/d/dc/Sliced_cucumbers_and_tomatoes.JPG"},{id:9,name:"Favorite Things",length:"123 p.",author:"Bryan Percival",image:"https://live.staticflickr.com/680/20394839349_aa65a1d9bc_b.jpg"},{id:10,name:"Shrimp of Another Kind",length:"333 p.",author:"Prawn Fiche",image:"https://live.staticflickr.com/2616/3966588961_d4a7794120_b.jpg"},{id:11,name:"A Chip Off the Old Block",length:"667 p.",author:"Union Jack",image:"https://live.staticflickr.com/6097/6254896135_d25de48c3d_b.jpg"},{id:12,name:"Catcher in the Rye Bread",length:"111 p.",author:"Filler Fillmore",image:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Russian_bread_and_salt.jpg"},{id:13,name:"Love is Bananas",length:"999 p.",author:"Potassium Monkey Man",image:"https://live.staticflickr.com/5225/5680832547_24f457b2ba_b.jpg"},{id:14,name:"An Homage to Fromage",length:"444 p.",author:"Geronimo Stilton",image:"https://cdn.stocksnap.io/img-thumbs/960w/ISTRWFYIZT.jpg"},{id:15,name:"Capers of the Northwest",length:"345 p.",author:"D B Cooper",image:"https://live.staticflickr.com/7507/16154880925_44894333b2_b.jpg"}],N=H,z={books:N,shelf:[]};new o.Z({router:D,data:z,render:function(e){return e(u)}}).$mount("#app")}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,o,a,r){if(!o){var n=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||n>=r)&&Object.keys(i.O).every((function(e){return i.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<n&&(n=r));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,n=o[0],s=o[1],l=o[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(l)var c=l(i)}for(t&&t(o);u<n.length;u++)r=n[u],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},o=self["webpackChunkreading_list"]=self["webpackChunkreading_list"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(212)}));o=i.O(o)})();
//# sourceMappingURL=app-legacy.195bb385.js.map