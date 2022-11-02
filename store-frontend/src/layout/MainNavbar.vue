<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Домой
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Магазин Игоря Спичека
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down
              tag="li"
              title="Menu"
              icon="now-ui-icons design_image"
              class="nav-item"
      >
        <!--nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Landing
        </nav-link-->
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Login
        </nav-link>
        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile
        </nav-link>
      </drop-down>
      <li class="nav-item">
        <nav-link to="/cart">
          <i class="fa fa-shopping-cart fa-2x"></i>
          <p class="d-lg-none d-xl-none">Корзина</p>
          <badge v-bind:type="'info'" v-bind:value="numberOfItemsInCart"></badge>
        </nav-link>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
import badge from "@/pages/Badge";
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover,
    badge,
  }
};
</script>

<style scoped></style>
