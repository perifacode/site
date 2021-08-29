<template>
  <nav class="main-navigation flex justify-between p-5 md:items-center ">
    <div class="main-navigation__logo">
      <NuxtLink to="/">
        <Logo size="small" />
      </NuxtLink>
    </div>
    <div class="main-navigation__content self-center">
      <div class="main-navigation__action cursor-pointer md:hidden" @click="handleMenu">
        <font-awesome-icon v-show="!showMenu" :icon="['fas', 'bars']" />
        <font-awesome-icon v-show="showMenu" :icon="['fas', 'times']" />
      </div>
      <ul v-show="showMenu" class="main-navigation__list flex flex-col items-center gap-y-5 md:gap-x-5 md:flex md:flex-row">
        <li class="mt-5 md:mt-0">
          <NuxtLink to="/sobre">Sobre</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/meetups">Eventos</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/midia">Midia</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/discord">Comunidade</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/parceiros">Parceiros</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      showMenu: false
    }
  },
  mounted() {
    window.innerWidth > 768 ? this.showMenu = true : this.showMenu = false
  },
  methods: {
    handleMenu() {
      this.showMenu = !this.showMenu
    },
  }

})
</script>

<style lang="scss" scoped>
.main-navigation {
  z-index: 3;
  background-color: color('brand', 'base');
  .main-navigation__content {
    .main-navigation__list {
      li {
        width: 100vw;
        text-align: center;
        @include screen(infinity) {
          width: initial;
        }
      }
    }
  }
}
</style>
