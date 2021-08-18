<template>
  <a :href="link" target="_blank" rel="noopener noreferrer">
    <font-awesome-icon :icon="[type, icon]" />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'fab'
    },
    icon: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      required: true
    }
  }
})
</script>
