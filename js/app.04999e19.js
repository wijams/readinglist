(function(){"use strict";var e={6156:function(e,t,i){var a=i(9155),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"menu"}},[i("div",{attrs:{id:"brand"}},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_book_01.svg"}})])],1),i("div",{attrs:{id:"side"}},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"menu-item browse"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Search_Noun_project_15028.svg"}}),i("p",[e._v("Browse")])])]),i("router-link",{attrs:{to:"/shelf"}},[i("div",{staticClass:"menu-item browse"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Book_%2823019%29_-_The_Noun_Project.svg"}}),i("p",{attrs:{id:"shelf-size"}},[e._v("0 books")])])]),i("router-link",{attrs:{to:"/reviews"}},[i("div",{staticClass:"menu-item"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Pen_-_The_Noun_Project.svg"}}),i("p",[e._v("Reviews")])])])],1)]),i("router-view"),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"footer"},[i("hr"),i("h3",[e._v("Git Hub")]),i("a",{attrs:{href:"https://github.com/wijams/readinglist"}},[e._v("Git Repo")])])}],n=i(1001),s={},c=(0,n.Z)(s,r,o,!1,null,null,null),l=c.exports,m=i(1788),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"search"},[i("form",{staticClass:"pure-form"},[i("i",{staticClass:"fas fa-search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})])])]),i("BookList",{attrs:{books:e.books}})],1)},u=[],d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"books"},e._l(e.books,(function(t){return i("div",{key:t.id,staticClass:"book"},[i("div",{staticClass:"info"},[i("h1",[e._v(e._s(t.name))])]),i("div",{staticClass:"image"},[i("img",{attrs:{src:t.image}})]),i("div",{staticClass:"length"},[i("h2",[e._v(e._s(t.length))]),i("button",{staticClass:"auto",on:{click:function(i){return e.addToShelf(t)}}},[e._v("Add to Bookshelf")])])])})),0)])},g=[],h={name:"BookList",props:{books:Array},methods:{addToShelf(e){this.$root._data.shelf.push(e),document.getElementById("shelf-size").innerHTML=this.$root._data.shelf.length+" items"}}},f=h,v=(0,n.Z)(f,d,g,!1,null,"253ef061",null),_=v.exports,k={name:"HomeView",components:{BookList:_},data(){return{searchText:""}},computed:{books(){return this.$root.$data.books.filter((e=>e.name.toLowerCase().search(this.searchText.toLowerCase())>=0))}}},y=k,b=(0,n.Z)(y,p,u,!1,null,"2bbc004d",null),j=b.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Your Bookshelf")]),0===this.$root.$data.shelf.length?i("h3",[e._v("Your bookshelf is empty")]):e._e(),i("BookShelf",{attrs:{books:e.shelf}})],1)},C=[],w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"books"},e._l(e.books,(function(t){return i("div",{key:t.id,staticClass:"book"},[i("div",{staticClass:"info"},[i("h1",[e._v(e._s(t.name))])]),i("div",{staticClass:"image"},[i("img",{attrs:{src:t.image}})]),i("div",{staticClass:"length"},[i("h2",[e._v(e._s(t.length))]),i("button",{staticClass:"auto",on:{click:function(i){return e.remove(t)}}},[e._v("Remove from Bookshelf")])])])})),0)])},B=[],S={name:"BookShelf",props:{books:Array},methods:{remove(e){let t=0;for(let i=0;i<this.$root._data.shelf.length;i++)if(this.$root._data.shelf[i]==e){t+=i;break}this.$root._data.shelf.splice(t,1),document.getElementById("shelf-size").innerHTML=this.$root._data.shelf.length+" items"}}},x=S,z=(0,n.Z)(x,w,B,!1,null,"f7ec0db4",null),T=z.exports,O={name:"ShelfView",components:{BookShelf:T},data(){return{}},computed:{shelf(){return this.$root.$data.shelf}},methods:{}},P=O,M=(0,n.Z)(P,$,C,!1,null,null,null),L=M.exports;a.Z.use(m.Z);const F=[{path:"/",name:"home",component:j},{path:"/shelf",name:"shelf",component:L}],U=new m.Z({mode:"history",base:"/",routes:F});var A=U;let E=[{id:1,name:"Throckmorton",length:"200 p.",image:"https://upload.wikimedia.org/wikipedia/commons/3/30/Photograph_of_painting_of_Joseph_Throckmorton.jpg"},{id:2,name:"Dogs in France",length:"100 p.",image:"https://live.staticflickr.com/1643/25989424636_2bb1afe859_b.jpg"},{id:3,name:"On Fish and Other Crises",length:"300 p.",image:"https://live.staticflickr.com/8701/16694569804_f7a1bffa1d_b.jpg"},{id:4,name:"Mountains",length:"1000 p.",image:"https://live.staticflickr.com/102/289882539_fbb19292e5_b.jpg"},{id:5,name:"City Sidewalks",length:"400 p.",image:"https://live.staticflickr.com/979/28226936698_7776d0cc7f_b.jpg"},{id:6,name:"Rubbed Sage",length:"255 p.",image:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Captain_Vincenzo_Lunardi_with_his_Assistant_George_Biggin%2C_and_Mrs._Letitia_Anne_Sage%2C_in_a_Balloon%2C_by_John_Francis_Rigaud_%281742-1810%29.jpg"},{id:7,name:"Rock and Role",length:"233 p.",image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Ferroceladonite%2C_Smoky_Quartz%2C_Microcline-171040.jpg"},{id:8,name:"Cucumber",price:"$3.02",country:"Canada",image:"cucumber.jpg"},{id:9,name:"Fava Beans",price:"$4.76",country:"Brazil",image:"fava-beans.jpg"},{id:10,name:"Coconut",price:"$2.50",country:"Brazil",image:"coconut.jpg"},{id:11,name:"Kettle Potato Chips",price:"$6.70",country:"United States",image:"potato-chips.jpg"},{id:12,name:"Flour - Rye",price:"$1.14",country:"Canada",image:"rye-flour.jpg"},{id:13,name:"Feta Chees",price:"$6.92",country:"Brazil",image:"feta-cheese.jpg"},{id:14,name:"Cheddar Cheese",price:"$5.36",country:"Mexico",image:"cheddar-cheese.jpg"},{id:15,name:"Capers",price:"$4.18",country:"United States",image:"capers.jpg"},{id:16,name:"Baguette",price:"$9.18",country:"Mexico",image:"baguette.jpg"},{id:17,name:"Lasagna Noodles",price:"$4.73",country:"Brazil",image:"lasagna-pasta.jpg"},{id:18,name:"Pied De Vents Cheese",price:"$5.16",country:"Canada",image:"pied-de-vents.jpg"},{id:19,name:"Sweet Potato Crackers",price:"$6.81",country:"United States",image:"crackers.jpg"},{id:20,name:"Mushrooms",price:"$8.62",country:"United States",image:"mushrooms.jpg"},{id:21,name:"Jerusalem Artichoke",price:"$3.16",country:"United States",image:"jerusalem-artichoke.jpg"},{id:22,name:"Leather Leaf Fern",price:"$9.41",country:"Brazil",image:"leather-leaf.jpg"},{id:23,name:"Dried Apricots",price:"$7.42",country:"Brazil",image:"dried-apricots.jpg"},{id:24,name:"Navel Orange",price:"$3.53",country:"Brazil",image:"navel-orange.jpg"},{id:25,name:"Sunflower Oil",price:"$1.90",country:"Mexico",image:"sunflower-oil.jpg"},{id:26,name:"Black Turtle Beans",price:"$4.67",country:"Canada",image:"turtle-beans.jpg"},{id:27,name:"Bananas",price:"$2.64",country:"Canada",image:"bananas.jpg"},{id:28,name:"Salami",price:"$8.72",country:"Brazil",image:"salami.jpg"},{id:29,name:"Proscuitto",price:"$9.86",country:"Brazil",image:"proscuitto.jpg"},{id:30,name:"Cranberries",price:"$5.85",country:"United States",image:"cranberries.jpg"},{id:31,name:"Canteloupe",price:"$4.49",country:"United States",image:"canteloupe.jpg"},{id:32,name:"Lemon",price:"$2.8Lemon5",country:"United States",image:"lemon.jpg"},{id:33,name:"Pesto",price:"$2.67",country:"Brazil",image:"pesto.jpg"},{id:34,name:"Grapefruit Juice",price:"$4.88",country:"Brazil",image:"grapefruit-juice.jpg"},{id:35,name:"Curry Paste",price:"$2.02",country:"Brazil",image:"curry-paste.jpg"},{id:36,name:"Avocado Oil",price:"$4.45",country:"Canada",image:"avocado-oil.jpg"},{id:37,name:"Queso Fresco",price:"$9.24",country:"Canada",image:"queso-fresco.jpg"},{id:38,name:"Key Lime Pie",price:"$5.32",country:"Mexico",image:"key-lime-pie.jpg"},{id:39,name:"Granny Smith Apple",price:"$2.12",country:"United States",image:"granny-smith.jpg"},{id:40,name:"Morning Glory Muffin Mix",price:"$9.22",country:"Brazil",image:"muffin-mix.jpg"},{id:41,name:"Heavy Whipping Cream",price:"$8.78",country:"Brazil",image:"heavy-cream.jpg"},{id:42,name:"Red Bell Pepper",price:"$9.03",country:"Brazil",image:"red-bell-pepper.jpg"},{id:43,name:"Perrier",price:"$9.36",country:"United States",image:"perrier.jpg"},{id:44,name:"Yukon Gold Potatoes",price:"$8.76",country:"Mexico",image:"yukon-potatoes.jpg"},{id:45,name:"Salmon Fillets",price:"$6.21",country:"United States",image:"salmon-fillets.jpg"},{id:46,name:"Tilapia Fillets",price:"$4.37",country:"Mexico",image:"tilapia.jpg"},{id:47,name:"Tomato Pesto",price:"$9.70",country:"Brazil",image:"tomato-pesto.jpg"},{id:48,name:"Oil - Olive Bertolli",price:"$8.92",country:"Brazil",image:"olive-oil.jpg"},{id:49,name:"Tear Drop Yellow Tomatoes",price:"$3.32",country:"Mexico",image:"yellow-tomatoes.jpg"},{id:50,name:"Smoked Paprika",price:"$8.31",country:"Brazil",image:"smoked-paprika.jpg"}];var R=E;let Z={books:R,shelf:[]};new a.Z({router:A,data:Z,render:e=>e(l)}).$mount("#app")}},t={};function i(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,a,r,o){if(!a){var n=1/0;for(m=0;m<e.length;m++){a=e[m][0],r=e[m][1],o=e[m][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||n>=o)&&Object.keys(i.O).every((function(e){return i.O[e](a[c])}))?a.splice(c--,1):(s=!1,o<n&&(n=o));if(s){e.splice(m--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,r,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,n=a[0],s=a[1],c=a[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var m=c(i)}for(t&&t(a);l<n.length;l++)o=n[l],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(m)},a=self["webpackChunkreading_list"]=self["webpackChunkreading_list"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(6156)}));a=i.O(a)})();
//# sourceMappingURL=app.04999e19.js.map