<template>
  <div class="menu">
    <div class="menu-item">
      <a class="menu-list" @click="reloadPage">
        <span class="menu-icon">
          <i class="fas fa-car-side"></i>
        </span>
        <p>View Cars</p>
      </a>

      <a class="menu-list" @click="reloadPage">
        <span class="menu-icon">
          <i class="fas fa-car-side"></i>
        </span>
        <p>My Cars</p>
      </a>
    </div>

    <div class="menu-item">
      <router-link class="menu-list" to="/add_car">
        <span class="menu-icon">
          <i class="fas fa-car"></i>
        </span>
        <p>Add Car</p>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link class="menu-list" to="/view_user">
        <span class="menu-icon">
          <i class="fas fa-user"></i>
        </span>
        <p>Profile</p>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link class="menu-list" to="/favorites">
        <span class="menu-icon">
          <i class="fas fa-user"></i>
        </span>
        <p>Favorites</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Menu",

  data: () => {
    return {
      userAuth: null,
    };
  },

  methods: {
    ...mapActions("car", ["getCars", "getUserCars"]),

    async reloadPage() {
      if (this.$route.path === "/view_cars") {
        const obj = {
          id: this.userAuth.data.id,
          token: this.userAuth.token,
        };
        await this.getUserCars(obj);
        this.$router.push("/my_cars");
      } else {
        const obj = {
          limit: 10,
          page: 1,
        };
        await this.getCars(obj);
        this.$router.push("/view_cars");
      }
    },
  },

  created() {
    this.userAuth = JSON.parse(localStorage.getItem("user"));
  },
};
</script>

<style scoped>
.menu {
  width: 12%;
  background: var(--primaryColor);
  position: fixed;
  height: 100vh;
  bottom: 0;
  z-index: -1;
  top: 72px;
  border-right: 1px solid #ebebe0;
  border-top: 1px solid gray;
}

a {
  text-decoration: none;
  color: var(--siteText);
  width: 100%;
  display: block;
  border-bottom: thin solid gray;
}

a:hover {
  background-color: var(--hoverColor);
  color: var(--siteText);
  text-decoration: none;
  cursor: pointer;
}

.menu-list p {
  margin: auto 0;
  font-size: 15px;
  color: #ebebe0;
}
span {
  margin-right: 15px;
  font-size: 15px;
  display: block;
}

.menu-list {
  display: flex;
  align-items: center;
  padding: 25px;
}

@media (max-width: 1000px) {
  .menu-list {
    display: block;
    padding: 10px;
  }

  .menu-list p {
    text-align: center;
  }

  span {
    display: block;
    text-align: center;
    width: 100%;
  }
}
</style>
