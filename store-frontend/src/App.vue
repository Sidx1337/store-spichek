<template>
    <div id="app">
      <router-view name="header" />
      <div class="wrapper">
        <router-view items="items" value="'4'"/>
      </div>
      <router-view name="footer" />
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {addItem, getAllItems, getCart} from "@/services/ItemService";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      items: [],
      itemsInCart: [],
      numberOfItemsInCart: 0,
      settings: false
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
    this.settings = true
  },
  setup () {
    console.log('setup')
  }
}
</script>

<style>
  @import './assets/styles/global.css';
</style>