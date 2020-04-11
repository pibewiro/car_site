<template>
  <div class="view-cars">
    <div v-if="loading" class="loading">
      <p>Loading...</p>
    </div>
    <div v-if="!loading">
      <h1>View Cars</h1>
      <div v-for="(car, i) in cars" :key="i" class="cars">
        <div class="car-slider">
          <img :src="`${imageUrl}/images/${car.imageUrl[0]}`" />
        </div>

        <div class="hoverDiv" v-b-modal="`carpics${car._id}`">
          <div class="btn-div"></div>
        </div>
        <CarImageModal :id="car._id" :carInfo="car" />

        <div class="user-info">
          <h3>{{ car.make }} {{ car.model }}</h3>
          <h3>${{ car.price }}</h3>
          <h3>{{ car.year }}</h3>
          <h5>{{ car.user.firstname }} {{ car.user.lastname }}</h5>
          <h5>{{ car.user.address.city }}, {{ car.user.address.state }}</h5>
          <small>Uploaded {{ dateFormat(car.createdAt) }}</small>
          <div class="btn-div">
            <button class="mr-3">View</button>
            <button>Favorite</button>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-area-ih1">
      <paginate
        v-model="currentPage"
        :pageCount="Math.ceil(this.total / 7)"
        :clickHandler="changePage"
        :prevText="'‹'"
        :nextText="'›'"
        :activeClass="'active'"
        :containerClass="'pagination b-pagination'"
        :page-class="'page-item'"
      ></paginate>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { format } from "date-fns";
import en from "date-fns/locale/en-US";
import Paginate from "vuejs-paginate";
import CarImageModal from "./CarImageModal";
export default {
  name: "ViewCars",

  components: {
    Paginate,
    CarImageModal,
  },

  data() {
    return {
      imageUrl: null,
      images: null,
      loading: false,
      currentPage: 1,
    };
  },

  computed: {
    ...mapState("car", ["cars", "total"]),
  },

  methods: {
    ...mapActions("car", ["getCars"]),

    async changePage() {
      window.scrollTo(0, 0);

      this.loading = true;
      await this.getCars({
        page: this.currentPage,
      });
      this.loading = false;
    },

    dateFormat(param) {
      const date = format(new Date(param), "MM/dd/yyyy H:mm a", {
        locale: en,
      });
      return date;
    },
  },

  async created() {
    window.scrollTo(0, 0);

    this.loading = true;
    await this.getCars({
      page: 1,
    });

    this.loading = false;
    this.imageUrl = `${process.env.VUE_APP_API_ROOT2}`;
  },
};
</script>

<style scoped>
.view-cars {
  background: #fff;
  padding: 20px;
}

h2,
h1 {
  text-align: center;
}

.cars {
  width: 80%;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  display: block;
  width: 100%;
  height: 347.5px;
}

.hoverDiv {
  width: 38.9%;
  height: 347.5px;
  background: transparent;
  position: absolute;
  left: 176px;
  display: block;
}

.hoverDiv:hover {
  background: black;
  opacity: 0.6;
  cursor: pointer;
}
.user-info {
  text-align: center;
  width: 50%;
  height: 347.5px;
  border-bottom: 1px solid var(--primaryColor);
  border-top: 1px solid var(--primaryColor);
  border-right: 1px solid var(--primaryColor);
  padding-top: 20px;
}

.car-slider {
  width: 50%;
}

.loading {
  /* text-align: center; */
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
}

.pagination-area-ih1 >>> a {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: 0;
  line-height: 1.25;
  background-color: var(--primaryColor);
  background-color: #fff;
  border: 1px solid #dee2e6;
}
</style>

<style>
.pagination-area-ih1 {
  display: flex;
  justify-content: center;
  padding: 0;
  height: 100%;
}
.pagination-area-ih1 .active a {
  text-decoration: none;
  z-index: 1;
  color: #fff;
  background-color: var(--primaryColor);
  border-color: #f4f4f4;
}

.pagination-area-ih1 a {
  outline: none;
}
</style>
