<template>
  <div class="anchor">
    <NuxtLink v-if="to != ''" :to="to" :class="variation"> {{ text }} </NuxtLink>
    <a v-if="href != ''" target="_blank" :href="href" :class="variation"> {{ text }} </a>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      text: {
        type: String,
        required: true
      },
      variation: {
        type: String,
        required: true
      },
      to: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: ''
      }


    }
  })
</script>

<style lang="scss" scoped>
a {
  border-radius: 4px;
  padding: .7rem 1rem;
  display: inline-block;
  text-align: center;
  font-family: $secondary-font;
  min-width: 175px;
  &.primary {
    background-color: color('brand', 'base');
    transition: all .3s ease-in;
    &:hover {
      background-color: rgba(color('brand', 'base'), 0.8);
    }
  }

  &.secondary {
    background-color: color('brand', 'dark');
    color: color('brand', 'base');
    &:hover {
      background-color: rgba(color('brand', 'dark'), 0.8);
    }
  }
}
</style>
