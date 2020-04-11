<template>
  <div>
    <h1>Welcome {{userAuth.data.firstname}}</h1>
    <img
      :src="image"
      alt=""
    >
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      userAuth: null,
      image: null,
    };
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('user', ['user']),
  },

  methods: {
    ...mapActions('user', ['getUser']),
  },

  async created() {
    console.log('cr', process.env.VUE_APP_API_ROOT2);
    this.userAuth = JSON.parse(localStorage.getItem('user'));

    await this.getUser({
      token: this.userAuth.token,
      id: this.userAuth.data.id,
    });

    if ('imageUrl' in this.user.data) {
      this.image = `${process.env.VUE_APP_API_ROOT2}/images/${this.user.data.imageUrl}`;
    } else {
      this.image = `${process.env.VUE_APP_API_ROOT2}/images/default.jpg`;
    }
  },
};
</script>

<style scoped>
div {
  background: #fff;
  padding: 40px 0;
}

img {
  width: 300px;
  height: 300px;
  display: block;
  margin: 0 auto;
}

h1 {
  text-align: center;
}
</style>