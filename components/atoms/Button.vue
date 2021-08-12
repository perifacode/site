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
  padding: .7rem 1rem;
  font-family: $secondary-font;
  min-width: 175px;
  &.primary {
    background-color: color('brand', 'base');
    transition: all .3s ease-in;
    &:hover {
      background-color: rgba(color('brand', 'base'), 0.8);
    }
  }
}
</style>
