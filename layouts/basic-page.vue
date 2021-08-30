<template>
  <div class="flex flex-col justify-between">
    <MainNavigation />
    <div class="basic-page__content flex justify-center w-full">
      <div class="container w-full">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.basic-page__content {
  min-height: 100vh;
}
</style>
