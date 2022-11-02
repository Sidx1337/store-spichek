<template>
<div>
<b-card
    v-bind:title= "item.name"
    v-bind:img-src="item.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
>
  <b-card-text>
    {{ item.discription }}
  </b-card-text>
  <b-card-text class="text-center">
    {{ item.price }} р.
  </b-card-text>
  <n-button  @click='addItem(item)' type="primary" round block size="lg">В корзину</n-button>
</b-card>
</div>
</template>
<script>
import {Button} from "@/components/index";

export default {
  name: 'Item',
  props: ['item'],
  methods: {
    addItem(data) {
      this.$emit('addItem', data)
    }
  },
  components: {
    [Button.name]: Button,
  }
}
</script>
