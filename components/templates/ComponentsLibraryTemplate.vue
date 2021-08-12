<template>
  <div class="components-library-template">
    <h1>Components Library</h1>

    <h2>Logo</h2>
    <h3>Small</h3>
    <Logo size="small"/>
    <h3>Medium</h3>
    <Logo size="medium"/>
    <h3>Large</h3>
    <Logo size="large"/>

    <h2>Button</h2>
    <Button text="Inscreva-se" variation="primary" />

    <h2>Links</h2>
    <h3>Primary</h3>
    <Anchor href="https://google.com" text="Inscreva-se" variation="primary" />
  </div>
</template>

<style lang="scss" scoped>
  .components-library-template {
    margin: 1rem;
  }

  h2, h3 {
    margin: 1rem 0;
    font-weight: bold;
  }
</style>
