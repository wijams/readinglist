(function(){"use strict";var i={9476:function(i,t,e){e(6992),e(8674),e(9601),e(7727);var o=e(9155),s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"menu"}},[e("div",{attrs:{id:"brand"}},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_book_01.svg"}})])],1),e("div",{attrs:{id:"side"}},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"menu-item browse"},[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Search_Noun_project_15028.svg"}}),e("p",[i._v("Browse")])])]),e("router-link",{attrs:{to:"/shelf"}},[e("div",{staticClass:"menu-item browse"},[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Book_%2823019%29_-_The_Noun_Project.svg"}}),e("p",{attrs:{id:"shelf-size"}},[i._v("0 books")])])]),e("router-link",{attrs:{to:"/reviews"}},[e("div",{staticClass:"menu-item"},[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Pen_-_The_Noun_Project.svg"}}),e("p",[i._v("Reviews")])])])],1)]),e("router-view"),i._m(0)],1)},a=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"footer"},[e("hr"),e("h3",[i._v("Git Hub")]),e("a",{attrs:{href:"https://github.com/wijams/readinglist"}},[i._v("Git Repo")])])}],n=e(1001),u={},r=(0,n.Z)(u,s,a,!1,null,null,null),l=r.exports,c=e(1788),d=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"search"},[e("form",{staticClass:"pure-form"},[e("i",{staticClass:"fas fa-search"}),e("input",{directives:[{name:"model",rawName:"v-model",value:i.searchText,expression:"searchText"}],domProps:{value:i.searchText},on:{input:function(t){t.target.composing||(i.searchText=t.target.value)}}})])])]),e("BookList",{attrs:{books:i.books}})],1)},m=[],p=(e(7327),e(1539),e(4916),e(4765),e(8309),function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"books"},i._l(i.books,(function(t){return e("div",{key:t.id,staticClass:"book"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:t.image}})]),e("div",{staticClass:"info"},[e("h1",[i._v(i._s(t.name))]),e("h2",[i._v(i._s(t.author))]),e("p",[i._v(i._s(t.length))]),e("p",[i._v(i._s(t.description))])]),e("div",{staticClass:"length"},[e("button",{staticClass:"auto",on:{click:function(e){return i.addToShelf(t)}}},[i._v("Add to Bookshelf")])])])})),0)])}),h=[],f={name:"BookList",props:{books:Array},methods:{addToShelf:function(i){this.$root._data.shelf.push(i),document.getElementById("shelf-size").innerHTML=this.$root._data.shelf.length+" books"}}},v=f,g=(0,n.Z)(v,p,h,!1,null,"191db437",null),_=g.exports,b={name:"HomeView",components:{BookList:_},data:function(){return{searchText:""}},computed:{books:function(){var i=this;return this.$root.$data.books.filter((function(t){return t.name.toLowerCase().search(i.searchText.toLowerCase())>=0}))}}},q=b,k=(0,n.Z)(q,d,m,!1,null,"b052092c",null),w=k.exports,C=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("h1",{staticClass:"head"},[i._v("Your Bookshelf")]),0===this.$root.$data.shelf.length?e("h3",{staticClass:"head"},[i._v("Your bookshelf is empty")]):i._e(),e("BookShelf",{attrs:{books:i.shelf}})],1)},x=[],y=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"books"},i._l(i.books,(function(t){return e("div",{key:t.id,staticClass:"book"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:t.image}})]),e("div",{staticClass:"info"},[e("h1",[i._v(i._s(t.name))]),e("h2",[i._v(i._s(t.author))]),e("p",[i._v(i._s(t.length))]),e("p",[i._v(i._s(t.description))])]),e("div",{staticClass:"length"},[e("button",{staticClass:"auto",on:{click:function(e){return i.remove(t)}}},[i._v("Remove from Bookshelf")])])])})),0)])},j=[],B=(e(561),{name:"BookShelf",props:{books:Array},methods:{remove:function(i){for(var t=0,e=0;e<this.$root._data.shelf.length;e++)if(this.$root._data.shelf[e]==i){t+=e;break}this.$root._data.shelf.splice(t,1),document.getElementById("shelf-size").innerHTML=this.$root._data.shelf.length+" books"}}}),A=B,T=(0,n.Z)(A,y,j,!1,null,"053c1033",null),$=T.exports,S={name:"ShelfView",components:{BookShelf:$},data:function(){return{}},computed:{shelf:function(){return this.$root.$data.shelf}},methods:{}},O=S,F=(0,n.Z)(O,C,x,!1,null,null,null),E=F.exports,L=function(){var i=this,t=i.$createElement;i._self._c;return i._m(0)},P=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("h1",{staticClass:"head"},[i._v("Reviews")]),e("div",{staticClass:"review"},[e("h2",[i._v("Nigel Thornberry")]),e("h3",[i._v("Book: Grapes of Wrath")]),e("p",[i._v("You sell yourself short, by only assuming you see things through a scientist's eyes. God created the ability for mankind to create science, even though mankind has become so egotistical, as to think that they can replace God with it.")])]),e("div",{staticClass:"review"},[e("h2",[i._v("Scrooge Jones")]),e("h3",[i._v("Book: Dogs in France")]),e("p",[i._v("Demain, dès l’aube, à l’heure où blanchit la campagne, Je partirai. Vois-tu, je sais que tu m’attends. J’irai par la forêt, j’irai par la montagne. Je ne puis demeurer loin de toi plus longtemps. Je marcherai les yeux fixés sur mes pensées, Sans rien voir au dehors, sans entendre aucun bruit, Seul, inconnu, le dos courbé, les mains croisées, Triste, et le jour pour moi sera comme la nuit. Je ne regarderai ni l’or du soir qui tombe, Ni les voiles au loin descendant vers Harfleur, Et quand j’arriverai, je mettrai sur ta tombe Un bouquet de houx vert et de bruyère en fleur.")])]),e("div",{staticClass:"review"},[e("h2",[i._v("Lorem Ipsum")]),e("h3",[i._v("Book: Throckmorton")]),e("p",[i._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])])}],R={},Z=(0,n.Z)(R,L,P,!1,null,null,null),G=Z.exports;o.Z.use(c.Z);var J=[{path:"/",name:"home",component:w},{path:"/shelf",name:"shelf",component:E},{path:"/reviews",name:"reviews",component:G}],M=new c.Z({mode:"history",base:"/",routes:J}),D=M,H=[{id:1,name:"Throckmorton",length:"200 p.",author:"Franklin Habberforth",image:"https://upload.wikimedia.org/wikipedia/commons/3/30/Photograph_of_painting_of_Joseph_Throckmorton.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:2,name:"Dogs in France",length:"100 p.",author:"Dougal McGregger",image:"https://live.staticflickr.com/1643/25989424636_2bb1afe859_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:3,name:"On Fish and Other Crises",length:"300 p.",author:"Batu Haiku",image:"https://live.staticflickr.com/8701/16694569804_f7a1bffa1d_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:4,name:"Mountains",length:"1000 p.",author:"Doctor DawkTeur",image:"https://live.staticflickr.com/102/289882539_fbb19292e5_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:5,name:"City Sidewalks",length:"400 p.",author:"Silver Belle",image:"https://live.staticflickr.com/979/28226936698_7776d0cc7f_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:6,name:"Rubbed Sage",length:"255 p.",author:"Benedict Arno",image:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Captain_Vincenzo_Lunardi_with_his_Assistant_George_Biggin%2C_and_Mrs._Letitia_Anne_Sage%2C_in_a_Balloon%2C_by_John_Francis_Rigaud_%281742-1810%29.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:7,name:"Rock and Role",length:"233 p.",author:"George Ology",image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Ferroceladonite%2C_Smoky_Quartz%2C_Microcline-171040.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:8,name:"Cucumber World",length:"500 p.",author:"Ben Franklin",image:"https://upload.wikimedia.org/wikipedia/commons/d/dc/Sliced_cucumbers_and_tomatoes.JPG",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:9,name:"Favorite Things",length:"123 p.",author:"Bryan Percival",image:"https://live.staticflickr.com/680/20394839349_aa65a1d9bc_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:10,name:"Shrimp of Another Kind",length:"333 p.",author:"Prawn Fiche",image:"https://live.staticflickr.com/2616/3966588961_d4a7794120_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:11,name:"A Chip Off the Old Block",length:"667 p.",author:"Union Jack",image:"https://live.staticflickr.com/6097/6254896135_d25de48c3d_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:12,name:"Catcher in the Rye Bread",length:"111 p.",author:"Filler Fillmore",image:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Russian_bread_and_salt.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:13,name:"Love is Bananas",length:"999 p.",author:"Potassium Monkey Man",image:"https://live.staticflickr.com/5225/5680832547_24f457b2ba_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:14,name:"An Homage to Fromage",length:"444 p.",author:"Geronimo Stilton",image:"https://cdn.stocksnap.io/img-thumbs/960w/ISTRWFYIZT.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},{id:15,name:"Capers of the Northwest",length:"345 p.",author:"D B Cooper",image:"https://live.staticflickr.com/7507/16154880925_44894333b2_b.jpg",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."}],N=H,z={books:N,shelf:[]};new o.Z({router:D,data:z,render:function(i){return i(l)}}).$mount("#app")}},t={};function e(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return i[o](a,a.exports,e),a.exports}e.m=i,function(){var i=[];e.O=function(t,o,s,a){if(!o){var n=1/0;for(c=0;c<i.length;c++){o=i[c][0],s=i[c][1],a=i[c][2];for(var u=!0,r=0;r<o.length;r++)(!1&a||n>=a)&&Object.keys(e.O).every((function(i){return e.O[i](o[r])}))?o.splice(r--,1):(u=!1,a<n&&(n=a));if(u){i.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=i.length;c>0&&i[c-1][2]>a;c--)i[c]=i[c-1];i[c]=[o,s,a]}}(),function(){e.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return e.d(t,{a:t}),t}}(),function(){e.d=function(i,t){for(var o in t)e.o(t,o)&&!e.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){e.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)}}(),function(){var i={143:0};e.O.j=function(t){return 0===i[t]};var t=function(t,o){var s,a,n=o[0],u=o[1],r=o[2],l=0;if(n.some((function(t){return 0!==i[t]}))){for(s in u)e.o(u,s)&&(e.m[s]=u[s]);if(r)var c=r(e)}for(t&&t(o);l<n.length;l++)a=n[l],e.o(i,a)&&i[a]&&i[a][0](),i[a]=0;return e.O(c)},o=self["webpackChunkreading_list"]=self["webpackChunkreading_list"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(9476)}));o=e.O(o)})();
//# sourceMappingURL=app-legacy.01d6a115.js.map