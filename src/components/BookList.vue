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
      </div>
      <div class="length">
        <button @click="addToShelf(book)" class="auto">Add to Bookshelf</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: Array
  },
  methods: {
   addToShelf(book) {
    this.$root._data.shelf.push(book);
    document.getElementById("shelf-size").innerHTML = this.$root._data.shelf.length + " items";
   }
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 150px;
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


</style>
