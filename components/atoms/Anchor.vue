<template>
  <div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      href: {
        type: String,
        required: false
      },
      to: {
        type: String,
        required: false
      }
    }
  })
</script>

<style lang="scss" scoped>
.anchor-wrapper {
    position: relative;
    display: block;
    text-align: center;
}
</style>
