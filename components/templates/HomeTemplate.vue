<template>
  <div class="home-template">
    <Header />
    <div class="home-template__social flex flex-col justify-end gap-40 py-8 items-center">
      <p class="home-template__social__paragraph">para o mundo da</p>
      <div class="home-template__social__list w-full">
        <SocialListHorizontal />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

  })
</script>

<style lang="scss" scoped>
.home-template__social {
  height: 60vh;
  color: color('text', 'secondaryDark');
  .home-template__social__paragraph {
    font-size: 2.2rem;
    font-family: $secondary-font;
    font-weight: 600;
    text-align: center;
    &::before {
      content: 'da periferia';
      text-transform: uppercase;
      margin-right: 10px;
    }
    &::after {
      content: 'tecnologia';
      text-transform: uppercase;
      margin-left: 5px;
      color: color('brand', 'base');
    }
  }
  .home-template__social__list {
    font-size: 2.5rem;
  }
}
</style>
