<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_book_01.svg">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/">
        <div class="menu-item browse">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Search_Noun_project_15028.svg">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/shelf">
        <div class="menu-item browse">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Book_%2823019%29_-_The_Noun_Project.svg">
          <p id="shelf-size">0 books</p>
        </div>
      </router-link>
      <router-link to="/reviews">
        <div class="menu-item">
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Pen_-_The_Noun_Project.svg">
         <p>Reviews</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class="footer">
   <hr>
   <h3>Git Hub</h3>
   <a href="https://github.com/wijams/readinglist">Git Repo</a>
  </div>
</div>
</template>

<style>
* {
 box-sizing: border-box;
}

router-view {
 margin: 50px 100px;
}

#brand {
 justify-content: center;
}

#brand img {
 width: 100px;
 justify-content: center;
 margin-left: 100px;
 margin-top: 10px;
}

#side {
 width: 50px;
 display: grid;
 flex-direction: row;
 grid-template-columns: 1fr 1fr 1fr;
 grid-column-gap: 5px;
 margin-left: 50px;
}

.menu-item {
 justify-content: center;
 text-align: center;
 margin-right: 20px;
}

.footer {
  text-align: center;
  justify-content: center;
}

@media (min-width: 48em) {
 router-view {
  box-sizing: border-box;
 }
 #brand {
  display: flex;
 }
 #side {
  margin-left: 700px;
  margin-top: 20px;
 }
}
</style>
