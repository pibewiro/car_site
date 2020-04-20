<template>
  <div>
    <Navbar />
    <div class="home-div">
      <div class="form-div">
        <h3>Reset Password</h3>
        <p class="error">{{ this.error.invalid }}</p>
        <div class="form-group">
          <label for="email">Code</label>
          <input
            type="text"
            v-model="code"
          />
          <p class="error">{{ this.error.email }}</p>
        </div>
        <div
          class="btn-div"
          style="margin-bottom:10px;"
        >
          <button @click="signIn">Sign In</button>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from './Navbar';
import Footer from './Footer';

export default {
  name: 'PasswordRecovery',
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      code: null,
      password: null,
      error: {
        invalid: null,
        email: null,
        password: null,
      },
    };
  },

  computed: {
    ...mapState('auth', ['user']),
  },

  methods: {
    ...mapActions('auth', ['login']),

    async signIn() {
      // const obj = {
      //   email: this.email,
      // };

      this.$router.push('/');
    },
  },

  created() {
    console.log(this);
    if (localStorage.getItem('user') !== null) {
      this.$router.push('/view_cars');
    }
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}
.home-div {
  margin-top: 58px;
  min-height: 93.4vh;
  position: absolute;
  background: #fff;
  width: 100%;
  z-index: -1;
}

.home-div:before {
  content: '';
  background: url('../assets/homepic.jpg') center center/cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.form-div {
  background: #fff;
  width: 30%;
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
  border: 1px solid black;
}

.form-group label {
  font-weight: bold;
  font-size: 18px;
}

.form-div a {
  text-align: center;
  margin-bottom: 10px;
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
