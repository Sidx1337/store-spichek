<template>
    <div class="">
      <Items v-if="items.length > 0" v-bind:items="items" @addItem="addItem($event)" />
    </div>
</template>

<script>
import Items from './Items.vue'
import { getAllItems, addItem, getCart } from '@/services/ItemService'

export default {
  name: 'Dashboard',
  components: {
    Items,
  },
  data() {
      return {
          items: [],
          itemsInCart: [],
          numberOfItemsInCart: 0
      }
  },
  methods: {
    getAllItems() {
      getAllItems().then(response => {
        console.log(response)
        this.items = response;
        this.numberOfItems = this.items.length;
      })
    },
    addItem(data) {
      addItem(data);
      this.itemsInCart = this.getCart();
      this.numberOfItemsInCart = this.itemsInCart.length;
    },
    getCart() {
      return getCart();
    },
  },
  mounted () {
    this.getAllItems();
  }
}
</script>
