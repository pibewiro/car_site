<template>
  <div>
    <Navbar />
    <div class="home-div">
      <div class="form-div">
        <p class="error">{{ this.error.invalid }}</p>
        <div class="form-group">
          <label for="email">Firstname</label>
          <input type="text" v-model="firstname" />
          <p class="error">{{ this.error.firstname }}</p>
        </div>
        <div class="form-group">
          <label for="lastname">lastname</label>
          <input type="text" v-model="lastname" />
          <p class="error">{{ this.error.lastname }}</p>
        </div>

        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" />
          <p class="error">{{ this.error.username }}</p>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" />
          <p class="error">{{ this.error.password }}</p>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" v-model="email" />
          <p class="error">{{ this.error.email }}</p>
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <input type="text" v-model="address" />
          <p class="error">{{ this.error.address }}</p>
        </div>

        <div class="form-group">
          <label for="city">City</label>
          <input type="text" v-model="city" />
          <p class="error">{{ this.error.city }}</p>
        </div>

        <div class="form-group">
          <label for="state">State</label>
          <input type="text" v-model="state" />
          <p class="error">{{ this.error.state }}</p>
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" v-model="phone" />
          <p class="error">{{ this.error.phone }}</p>
        </div>

        <div class="form-group">
          <label for="photo">Photo</label>
          <input type="file" @change="onChange" />
          <p class="error">{{ this.error.photo }}</p>
        </div>

        <div class="btn-div">
          <button @click="register">Register</button>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navbar from "./Navbar";
import Footer from "./Footer";
import swal from "sweetalert";

export default {
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      firstname: null,
      lastname: null,
      username: null,
      email: null,
      password: null,
      address: null,
      city: null,
      state: null,
      phone: null,

      error: {
        invalid: null,
        email: null,
        password: null,
      },

      selectedFile: null,
    };
  },

  computed: {
    ...mapState("auth", ["user"]),
  },

  methods: {
    ...mapActions("auth", ["login"]),
    ...mapActions("user", ["registerUser"]),

    onChange(e) {
      this.selectedFile = e.target.files[0];
    },

    async register() {
      try {
        const obj = {
          formData: this.selectedFile,
          data: {
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            email: this.email,
            password: this.password,
            imageUrl: null,
            address: {
              city: this.city,
              state: this.state,
            },
            phone: this.phone,
            active: true,
          },
        };

        await this.registerUser(obj);

        await swal("Registered Successfully", "", "success");

        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.home-div {
  margin-top: 58px;
  min-height: 93.4vh;
  position: absolute;
  background: #fff;
  width: 100%;
  z-index: -1;
}

.form-div {
  width: 60%;
  margin: 40px auto;
  padding: 20px;
  position: relative;
  z-index: 1;
  opacity: 0.8;
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

.form-div a:hover {
  text-decoration: underline;
  color: var(--primaryColor);
}

.error {
  color: red;
}
</style>
