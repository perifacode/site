<template>
  <footer class="footer p-10 grid grid-cols-12 grid-rows-2 place-items-center">
    <Logo size="small" class="col-span-full md:place-self-start md:row-start-1"/>
    <div class="footer__contact col-span-full mt-5 flex flex-col text-center md:place-self-end md:row-start-1 md:mt-0">
      <span class="footer__contact__title font-bold mb-3">Contato</span>
      <a href="mailto:perifacode@gmail.com">perifacode@gmail.com</a>
    </div>
    <div class="footer__social col-span-full mt-5 flex md:place-self-end md:row-start-2 md:mr-2 md:mt-0">
      <SocialListHorizontal class="gap-5"/>
    </div>
    <Divider class="col-span-full mt-10 mb-5 md:hidden"/>
    <div class="footer__copyright col-span-full mt-5 flex flex-col text-center md:text-left md:place-self-start md:row-start-2 md:mt-0 md:self-end">
      <div class="terms flex">
        <NuxtLink to="/manifesto" class="mb-2 uppercase">Manifesto</NuxtLink>
        <NuxtLink to="/coc" class="mb-2 uppercase">Código de Conduta</NuxtLink>
      </div>
      <div class="copyright flex flex-col md:flex-row mt-3">
        <span class="mb-3 md:mr-2 md:mb-0">&copy; perifaCode 2021.</span>
        <span>Todos os direitos reservados.</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

  })
</script>

<style lang="scss" scoped>
.footer {
  color: color('text', 'primaryLight');
  background-color: color('bg', 'secondaryDark');
  width: 100%;
  .footer__contact {
    span, a {
      font-family: $secondary-font;
    }
  }
  .footer__copyright {
    font-family: $primary-font;
    a {
      color: color('brand', 'base');
      margin-right: 1.5rem;
    }
  }
}
</style>
