<template>
  <b-modal :id="`carpics${this.id}`" size="xl" :title="`${this.carInfo.year} ${this.carInfo.make} ${this.carInfo.model}`">
    <div class="carSlider">
      <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade controls intervals="0">
        <b-carousel-slide v-for="(pic, i) in carInfo.imageUrl" :key="i">
          <template v-slot:img>
            <img :src="`${image}/images/${pic}`" />
          </template>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "CarImageModal",
  props: ["id", "carInfo"],

  data() {
    return {
      image: null,
    };
  },

  created() {
    this.image = process.env.VUE_APP_API_ROOT2;
  },
};
</script>

<style>
.carSlider img {
  width: 100%;
  height: 500px;
}
</style>
