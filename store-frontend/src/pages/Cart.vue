<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
        class="page-header-image"
        style="background-image: url('img/login.jpg')"
    ></div>
    <div class="content">
      <div class="container">
        <b-container class="wrapper">
          <b-row v-for="n in Math.ceil(items.length/4)" v-bind:key="n">
            <b-col v-for="item in items.slice((n-1)+(4*(n-1)),(n-1)+(4*(n-1))+4)" v-bind:key="item">
              <Item v-bind:item="item" @addItem="addItem($event)"/>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'Cart',
  components: {
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
