<template>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.id">
      <div class="image">
        <img :src="book.image">
      </div>
      <div class="info">
        <h1>{{book.name}}</h1>
        <h2>{{book.author}}</h2>
        <p>{{book.length}}</p>
        <p>{{book.description}}</p>
      </div>
      <div class="length">
        <button @click="remove(book)" class="auto">Remove from Bookshelf</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookShelf',
  props: {
    books: Array,
  },
  methods: {
   remove(book) {
    let index = 0;
    for (let i = 0; i < this.$root._data.shelf.length; i++) {
     if (this.$root._data.shelf[i] == book) {
      index += i;
      break;
     }
    }
    this.$root._data.shelf.splice(index, 1);
    document.getElementById("shelf-size").innerHTML = this.$root._data.shelf.length + " books";
   }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: left;
  justify-content: center;
}

.books {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.book img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.book .image {
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
}

.info {
  background: #8da683;
  color: #000;
  padding: 10px 30px;
  height: 300px;
  margin-bottom: 5px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.length {
  display: flex;
}

.length h2 {
  font-size: 16px;
}

button {
  height: 50px;
  width: 200px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

@media (min-width: 48em) {
 .wrapper {
  justify-content: left;
  align-items: flex-start;
 }
 .books {
  flex-direction: column;
  justify-content: left;
  align-items: left;
 }
 .book {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "image info none";
 }
 .book img {
   height: 500px;
 width: 400px;
 }
 .book .image {
  display: block;
  justify-content: left;
 }
 .image {
  grid-area: image;
  display: flex;
  justify-content: center;
 }

 .info {
  grid-area: info;
  display: flex;
  justify-content: center;
  width: 800px;
  height: 500px;
 }

 .info h1, h2, p {
                                margin: 20px;
 }

 .info h1, h2 {
  font-size: 20px;
 }

 .info p {
  font-size: 16px;
  margin: 20px;
 }
}

</style>
