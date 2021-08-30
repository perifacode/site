<template>
  <article class="sobre">
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'basic-page',
  async asyncData ({ $content }) {
    const page = await $content('comunidade').fetch()

    return {
      page
    }
  }
}
</script>

<style lang="scss">
.nuxt-content {
  h2 {
    margin: 1rem 0;
  }
  p {
    margin: .5rem 0;
  }

  ul {
    list-style: square;
    margin-left: 2rem;
    li {
      margin: .5rem 0;
      a {
        color: color('brand', 'base');
        font-weight: 500;
      }
    }
  }
}
</style>
