<template>
<div>
 <h1>Your Bookshelf</h1>
 <h3 v-if="this.$root.$data.shelf.length === 0">Your bookshelf is empty</h3>
 <BookShelf :books="shelf" />
</div>
</template>
<script>
import BookShelf from "../components/BookShelf.vue"
export default {
 name: 'ShelfView',
 components: {
  BookShelf
 },
 data() {
  return {
  }
 },
 computed: {
  shelf() {
   return this.$root.$data.shelf;
  }
 },
 methods: {
   }
 }
</script>
