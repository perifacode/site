<template>
  <div class="organizer-carousel flex flex-col items-center">
    <h2 class="mt-10">Organizadores</h2>
    <hooper :settings="hooperSettings">
      <slide v-for="(organizer, index) in organizers" :key="index">
        <div class="organizer-carousel__item">
          <div class="organizer-carousel__item-avatar">
            <img :src="organizer.avatar" alt="">
          </div>
          <div class="organizer-carousel__item-name">
            {{ organizer.name }}
          </div>
          <div v-if="organizer.social" class="organizer-carousel__item-social">
            {{ organizer.social }}
          </div>
        </div>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';
import  axios  from 'axios';

export default Vue.extend({
  components: { Hooper, Slide, HooperNavigation },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        centerMode: true,
        autoPlay: true,
        playSpeed: 5000,
        breakpoints: {
          800: {
            itemsToShow: 1
          },
          1000: {
            itemsToShow: 3,
          }
        }
      },
      organizers: []
    };
  },
  mounted() {
    this.fetchOrganizers();
  },
  methods: {
    async fetchOrganizers() {
      const response = await axios.get('/data/organizers.json');
      this.organizers = response.data.organizers;
    }
  }
})
</script>

<style lang="scss" scoped>
.organizer-carousel {
  height: 60vh;
  background-color: color('brand', 'base');
  h2 {
    font-size: 2rem;
  }
  .organizer-carousel__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
    .organizer-carousel__item-social {
      font-family: $secondary-font;
    }
  }
  .hooper {
    height: 100%;
    img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
  }
}
</style>
