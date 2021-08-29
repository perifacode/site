<template>
  <div class="header flex flex-col items-center">
    <div class="header-content w-full h-screen flex flex-col justify-center items-center md:items-start md:container">
      <p class="md:w-5/12 md:self-start">Já somos mais de 1000 no nosso Discord.</p>
      <Anchor href="https://discord.io/perifacode" variation="primary" text="Quero participar"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

  })
</script>

<style lang="scss" scoped>
.header {
  padding: 1rem 0;
  background:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('@/assets/images/bg-mobile.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
  @include screen(infinity) {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('@/assets/images/bg-desktop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  &::before {
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
    display: block;
    position: absolute;
    height: 6;
    width: 100%;
    z-index: 1;
  }
  .header-content {
    z-index: 2;
    text-align: center;
    @include screen(infinity) {
      text-align: left;
    }
    padding: 2rem;
    p {
      color: color('text', 'primaryLight');
      font-size: 3rem;
      font-weight: 700;
      line-height: 4rem;
      margin-bottom: 1rem;
    }
  }

}
</style>
