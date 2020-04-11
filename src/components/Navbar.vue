<template>
  <div class="bg-danger">
    <div class="navbar2 p-1">
      <h1 class="pl-4">West Coast Whips</h1>

      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li>
          <router-link to="123">Home</router-link>
        </li>

        <li
          v-if="logoutLink"
          class="logout-li"
          @mouseover="logoutOp"
          @mouseleave="logoutOp2"
        >
          <img
            class="logout-img"
            :src="image"
          />
        </li>
      </ul>
      <div
        class="logout-div"
        :style="logoutMenu"
        @mouseover="logoutOp"
        @mouseleave="logoutOp2"
      >
        <p @click="logoutUser">LogOut</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'Navbar',

  data() {
    return {
      logoutLink: false,
      userAuth: null,
      image: null,
      logoutMenu: 'display:none',
      menuin: false,
    };
  },

  computed: {
    ...mapState('user', ['user']),
  },

  methods: {
    ...mapActions('auth', ['logout']),
    ...mapActions('user', ['getUser']),

    logoutOp() {
      this.logoutMenu = 'display:block';
    },

    logoutOp2() {
      this.logoutMenu = 'display:none';
    },

    logoutUser() {
      const obj = {
        token: JSON.parse(localStorage.getItem('user')).token,
      };

      this.logout(obj);
      localStorage.removeItem('user');
      this.$router.push('/');
    },
  },

  async created() {
    this.userAuth = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user') !== null) {
      this.logoutLink = true;
    }

    await this.getUser({
      token: this.userAuth.token,
      id: this.userAuth.data.id,
    });

    this.image = `${process.env.VUE_APP_API_ROOT2}/images/${this.user.data.imageUrl}`;
  },
};
</script>

<style scoped>
.myc {
  background: chocolate;
}
.navbar2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--primaryColor);
  color: var(--siteText);
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  padding: 0;
}

.navbar2 ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  padding-right: 20px;
}

a {
  background: var(--primaryColor);
  padding: 20px;
  text-decoration: none;
  display: block;
  color: var(--siteText);
}

a:hover {
  background-color: var(--hoverColor);
  color: var(--siteText);
  text-decoration: none;
}

.logout-li {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logout-img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.logout-div {
  background: #fff;
  color: var(--primaryColor);
  position: absolute;
  cursor: pointer;
  width: 150px;
  height: 100px;
  top: 50px;
  right: 5px;
}

.logout-div p {
  cursor: pointer;
  padding: 10px;
}

.logout-div p:hover {
  background: #ebebe0;
}
</style>
