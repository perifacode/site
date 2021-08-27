<template>
  <div class="home-template">
    <Header />
    <div class="home-template__social flex flex-col justify-end gap-40 md:gap-32 py-8 items-center">
      <p class="home-template__social__paragraph">para o mundo da</p>
      <div class="home-template__social__list w-full">
        <SocialListHorizontal />
      </div>
    </div>
    <About />
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
    @include screen(large) {
      font-size: 4rem;
    }
    @include screen(infinity) {
      font-size: 4.2rem;
    }
    &::before {
      content: 'da periferia';
      text-transform: uppercase;
      margin-right: 10px;
      @include screen(infinity) {
        margin-right: 2rem;
      }
    }
    &::after {
      content: 'tecnologia';
      text-transform: uppercase;
      margin-left: 5px;
      color: color('brand', 'base');
      @include screen(infinity) {
        margin-left: 2rem;
      }
    }
  }
  .home-template__social__list {
    font-size: 2.5rem;
  }
}
</style>
