<template>
  <div class="hero">
    <p>{{ description }}</p>
    <Nuxt />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: {
      description: {
        type: String,
        required: true
      }
    }
  })
</script>

<style lang="scss" scoped>

</style>
