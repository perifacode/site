<template>
  <div class="about flex justify-center items-center px-5">
    <div class="about__content p-5 w-8/12">
      <div class="about__content__title mb-5">
        <img src="../../assets/images/about-title.svg" alt="Sobre" class="w-32 md:w-48">
      </div>
      <p class="about__content__paragraph md:mb-5">
        A Perifacode é uma ONG que tem com objetivo “desgourmetizar” o mercado digital, preenchido, em sua maioria, por um estereótipo ao qual precisa ser mudado para ser mais inclusivo e com esse propósito a ONG foi criada em 2019 para capacitar, discutir e fazer ouvir a voz da periferia dentro do mercado digital.
      </p>
      <p class="about__content__paragraph md:mb-5">
        Realizamos diversos eventos presenciais para capacitar esses jovens da periferia e contavam com vários grupos espalhados pelas redes sociais, contamos com uma comunidade ativa no Discord para discutirmos sobre programação e temas relacionados.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  background-image: url('../../assets/images/about-bg.svg');
  height: 90vh;
  .about__content {
    background: color('bg', 'primaryLight');
    border-bottom: 10px solid color('brand', 'base');
    .about__content__paragraph {
      font-family: $secondary-font;
      line-height: 1.5rem;
    }
  }
}
</style>
