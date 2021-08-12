<template>
  <img src="../../assets/images/logo-perifacode.png" alt="Logo da perifaCode" :class="size" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    size: {
      type: String,
      default: 'small'
    }
  }
})
</script>

<style lang="scss" scoped>
img {
  &.small {
    width: 100px;
  }

  &.medium {
    width: 200px;
  }

  &.large {
    width: 300px;
  }
}
</style>
