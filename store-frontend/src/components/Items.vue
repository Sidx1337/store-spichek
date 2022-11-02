<template>
  <div class="container">
    <b-container class="wrapper">
      <b-row v-for="n in Math.ceil(items.length/4)" v-bind:key="n">
         <b-col v-for="item in items.slice((n-1)+(4*(n-1)),(n-1)+(4*(n-1))+4)" v-bind:key="item">
             <Item v-bind:item="item" @addItem="addItem($event)"/>
         </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: 'Items',
  components: {
    Item
  },
  props: ['items'],
  methods: {
    addItem(data) {
      this.$emit('addItem', data)
    }
  }
}
</script>