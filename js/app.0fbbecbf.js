(function(){"use strict";var t={3222:function(t,e,i){var o=i(9155),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"menu"}},[i("div",{attrs:{id:"brand"}},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_book_01.svg"}})])],1),i("div",{attrs:{id:"side"}},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"menu-item browse"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4c/Search_Noun_project_15028.svg"}}),i("p",[t._v("Browse")])])]),i("router-link",{attrs:{to:"/shelf"}},[i("div",{staticClass:"menu-item browse"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Book_%2823019%29_-_The_Noun_Project.svg"}}),i("p",{attrs:{id:"shelf-size"}},[t._v("0 books")])])]),i("router-link",{attrs:{to:"/reviews"}},[i("div",{staticClass:"menu-item"},[i("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Pen_-_The_Noun_Project.svg"}}),i("p",[t._v("Reviews")])])])],1)]),i("router-view"),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("hr"),i("h3",[t._v("Git Hub")]),i("a",{attrs:{href:"https://github.com/wijams/readinglist"}},[t._v("Git Repo")])])}],n=i(1001),s={},l=(0,n.Z)(s,a,r,!1,null,null,null),c=l.exports,h=i(1788),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"search"},[i("form",{staticClass:"pure-form"},[i("i",{staticClass:"fas fa-search"}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])])]),i("BookList",{attrs:{books:t.books}})],1)},d=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"books"},t._l(t.books,(function(e){return i("div",{key:e.id,staticClass:"book"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:e.image}})]),i("div",{staticClass:"info"},[i("h1",[t._v(t._s(e.name))]),i("h2",[t._v(t._s(e.author))]),i("p",[t._v(t._s(e.length))])]),i("div",{staticClass:"length"},[i("button",{staticClass:"auto",on:{click:function(i){return t.addToShelf(e)}}},[t._v("Add to Bookshelf")])])])})),0)])},p=[],f={name:"BookList",props:{books:Array},methods:{addToShelf(t){this.$root._data.shelf.push(t),document.getElementById("shelf-size").innerHTML=this.$root._data.shelf.length+" items"}}},_=f,g=(0,n.Z)(_,m,p,!1,null,"b7fe7e38",null),v=g.exports,k={name:"HomeView",components:{BookList:v},data(){return{searchText:""}},computed:{books(){return this.$root.$data.books.filter((t=>t.name.toLowerCase().search(this.searchText.toLowerCase())>=0))}}},b=k,w=(0,n.Z)(b,u,d,!1,null,"2bbc004d",null),C=w.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Your Bookshelf")]),0===this.$root.$data.shelf.length?i("h3",[t._v("Your bookshelf is empty")]):t._e(),i("BookShelf",{attrs:{books:t.shelf}})],1)},B=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"books"},t._l(t.books,(function(e){return i("div",{key:e.id,staticClass:"book"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:e.image}})]),i("div",{staticClass:"info"},[i("h1",[t._v(t._s(e.name))]),i("h2",[t._v(t._s(e.author))]),i("p",[t._v(t._s(e.length))])]),i("div",{staticClass:"length"},[i("button",{staticClass:"auto",on:{click:function(i){return t.remove(e)}}},[t._v("Remove from Bookshelf")])])])})),0)])},T=[],$={name:"BookShelf",props:{books:Array},methods:{remove(t){let e=0;for(let i=0;i<this.$root._data.shelf.length;i++)if(this.$root._data.shelf[i]==t){e+=i;break}this.$root._data.shelf.splice(e,1),document.getElementById("shelf-size").innerHTML=this.$root._data.shelf.length+" items"}}},x=$,O=(0,n.Z)(x,y,T,!1,null,"41426f04",null),S=O.exports,F={name:"ShelfView",components:{BookShelf:S},data(){return{}},computed:{shelf(){return this.$root.$data.shelf}},methods:{}},P=F,R=(0,n.Z)(P,j,B,!1,null,null,null),Z=R.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",[t._v("Reviews")])},L=[],A={},M=(0,n.Z)(A,E,L,!1,null,null,null),G=M.exports;o.Z.use(h.Z);const H=[{path:"/",name:"home",component:C},{path:"/shelf",name:"shelf",component:Z},{path:"/reviews",name:"reviews",component:G}],z=new h.Z({mode:"history",base:"/",routes:H});var D=z;let N=[{id:1,name:"Throckmorton",length:"200 p.",author:"Franklin Habberforth",image:"https://upload.wikimedia.org/wikipedia/commons/3/30/Photograph_of_painting_of_Joseph_Throckmorton.jpg"},{id:2,name:"Dogs in France",length:"100 p.",author:"Dougal McGregger",image:"https://live.staticflickr.com/1643/25989424636_2bb1afe859_b.jpg"},{id:3,name:"On Fish and Other Crises",length:"300 p.",author:"Batu Haiku",image:"https://live.staticflickr.com/8701/16694569804_f7a1bffa1d_b.jpg"},{id:4,name:"Mountains",length:"1000 p.",author:"Doctor DawkTeur",image:"https://live.staticflickr.com/102/289882539_fbb19292e5_b.jpg"},{id:5,name:"City Sidewalks",length:"400 p.",author:"Silver Belle",image:"https://live.staticflickr.com/979/28226936698_7776d0cc7f_b.jpg"},{id:6,name:"Rubbed Sage",length:"255 p.",author:"Benedict Arno",image:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Captain_Vincenzo_Lunardi_with_his_Assistant_George_Biggin%2C_and_Mrs._Letitia_Anne_Sage%2C_in_a_Balloon%2C_by_John_Francis_Rigaud_%281742-1810%29.jpg"},{id:7,name:"Rock and Role",length:"233 p.",author:"George Ology",image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Ferroceladonite%2C_Smoky_Quartz%2C_Microcline-171040.jpg"},{id:8,name:"Cucumber World",length:"500 p.",author:"Ben Franklin",image:"https://upload.wikimedia.org/wikipedia/commons/d/dc/Sliced_cucumbers_and_tomatoes.JPG"},{id:9,name:"Favorite Things",length:"123 p.",author:"Bryan Percival",image:"https://live.staticflickr.com/680/20394839349_aa65a1d9bc_b.jpg"},{id:10,name:"Shrimp of Another Kind",length:"333 p.",author:"Prawn Fiche",image:"https://live.staticflickr.com/2616/3966588961_d4a7794120_b.jpg"},{id:11,name:"A Chip Off the Old Block",length:"667 p.",author:"Union Jack",image:"https://live.staticflickr.com/6097/6254896135_d25de48c3d_b.jpg"},{id:12,name:"Catcher in the Rye Bread",length:"111 p.",author:"Filler Fillmore",image:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Russian_bread_and_salt.jpg"},{id:13,name:"Love is Bananas",length:"999 p.",author:"Potassium Monkey Man",image:"https://live.staticflickr.com/5225/5680832547_24f457b2ba_b.jpg"},{id:14,name:"An Homage to Fromage",length:"444 p.",author:"Geronimo Stilton",image:"https://cdn.stocksnap.io/img-thumbs/960w/ISTRWFYIZT.jpg"},{id:15,name:"Capers of the Northwest",length:"345 p.",author:"D B Cooper",image:"https://live.staticflickr.com/7507/16154880925_44894333b2_b.jpg"}];var I=N;let J={books:I,shelf:[]};new o.Z({router:D,data:J,render:t=>t(c)}).$mount("#app")}},e={};function i(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,o,a,r){if(!o){var n=1/0;for(h=0;h<t.length;h++){o=t[h][0],a=t[h][1],r=t[h][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||n>=r)&&Object.keys(i.O).every((function(t){return i.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<n&&(n=r));if(s){t.splice(h--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var h=t.length;h>0&&t[h-1][2]>r;h--)t[h]=t[h-1];t[h]=[o,a,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,r,n=o[0],s=o[1],l=o[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(l)var h=l(i)}for(e&&e(o);c<n.length;c++)r=n[c],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(h)},o=self["webpackChunkreading_list"]=self["webpackChunkreading_list"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(3222)}));o=i.O(o)})();
//# sourceMappingURL=app.0fbbecbf.js.map