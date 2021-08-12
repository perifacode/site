<template>
  <div class="components-library-template">
    <h1>Components Library</h1>

    <h2>Logo</h2>

    <h3>Small</h3>
    <Logo size="small"/>
    <small>Utilize a prop <strong>size</strong> com o valor <strong>small</strong></small>

    <h3>Medium</h3>
    <Logo size="medium"/>
    <small>Utilize a prop <strong>size</strong> com o valor <strong>medium</strong></small>

    <h3>Large</h3>
    <Logo size="large"/>
    <small>Utilize a prop <strong>size</strong> com o valor <strong>large</strong></small>

    <h2>Button</h2>
    <h3>Primary</h3>
    <Button text="Inscreva-se" variation="primary" />
    <small>Utilize a prop <strong>variation</strong> com o valor <strong>primary</strong></small>

    <h3>Secondary</h3>
    <Button text="Ver todas as postagens" variation="secondary" />
    <small>Utilize a prop <strong>variation</strong> com o valor <strong>secondary</strong></small>

    <h2>Links</h2>

    <h3>Primary</h3>
    <Anchor href="https://google.com" text="Inscreva-se" variation="primary" />
    <small>Utilize a prop <strong>variation</strong> com o valor <strong>primary</strong></small>

    <h3>Secondary</h3>
    <Anchor href="https://google.com" text="Ver todas as postagens" variation="secondary" />
    <small>Utilize a prop <strong>variation</strong> com o valor <strong>secondary</strong></small>
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
