<template>
  <button :class="variation"> {{ text }} </button>
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
      }
    }
  })
</script>

<style lang="scss" scoped>
button {
  border-radius: 4px;
  display: block;
  padding: .7rem 1rem;
  font-family: $secondary-font;
  min-width: 175px;
  transition: all .3s ease-in;
  &.primary {
    background-color: color('brand', 'base');
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
