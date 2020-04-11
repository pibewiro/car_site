<template>
  <div class="main-div">
    <h1>Add car</h1>
    <div class="form-div">
      <div class="form-group">
        <label for="make">Make</label>
        <input type="text" v-model="make" />
        <p class="error">{{ this.error.make }}</p>
      </div>

      <div class="form-group">
        <label for="model">Model</label>
        <input type="text" v-model="model" />
        <p class="error">{{ this.error.model }}</p>
      </div>

      <div class="form-group">
        <label for="email">Color</label>
        <input type="text" v-model="color" />
        <p class="error">{{ this.error.color }}</p>
      </div>
      <div class="form-group">
        <label for="email">Price</label>
        <input type="text" v-model="price" />
        <p class="error">{{ this.error.price }}</p>
      </div>

      <div class="form-group">
        <label for="email">Year</label>
        <input type="text" v-model="year" />
        <p class="error">{{ this.error.year }}</p>
      </div>

      <div class="form-group">
        <label for="email">Mileage</label>
        <input type="text" v-model="mileage" />
        <p class="error">{{ this.error.mileage }}</p>
      </div>
      <div class="form-group">
        <label for="email">VIN</label>
        <input type="text" v-model="vin" />
        <p class="error">{{ this.error.vin }}</p>
      </div>

      <div class="form-group">
        <label for="email">Images</label>
        <input type="file" multiple="multiple" @change="onChange" />
      </div>
      <div class="btn-div">
        <button @click="submit">Enter</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import swal from "sweetalert";
export default {
  data() {
    return {
      make: null,
      model: null,
      color: null,
      price: null,
      mileage: null,
      vin: null,
      user: null,
      year: null,
      selectedFiles: null,
      error: {},
    };
  },

  methods: {
    ...mapActions("car", ["addCar"]),

    async submit() {
      const obj = {
        make: this.make,
        model: this.model,
        color: this.color,
        price: this.price,
        mileage: this.mileage,
        images: this.selectedFiles,
        year: this.year,
        user: JSON.parse(localStorage.getItem("user")).data.id,
        token: JSON.parse(localStorage.getItem("user")).token,
      };
      await this.addCar(obj);

      await swal("New Car Added", "", "success");

      this.$router.push("/view_cars");
    },

    onChange(e) {
      this.selectedFiles = e.target.files;
    },
  },
};
</script>

<style scoped>
.main-div {
  background: white;
  padding: 20px 0;
}
.form-div {
  width: 60%;
  margin: 20px auto;
}

.form-group {
  margin-top: 20px;
}

.form-group input {
  width: 100%;
  font-size: x-large;
  padding: 5px;
}

.form-group label {
  font-weight: bold;
  font-size: 18px;
}

.btn-div {
  margin-top: 20px;
  text-align: center;
}

.form-div a {
  text-align: center;
  margin-top: 20px;
  color: darkcyan;
  display: block;
  text-decoration: none;
}

.error {
  color: red;
}

h1 {
  text-align: center;
}
</style>
