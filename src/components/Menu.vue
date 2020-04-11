<template>
  <div class="menu">
    <div class="menu-item">
      <router-link
        class="menu-list"
        to="/view_cars"
      >
        <span class="menu-icon">
          <i class="fas fa-car-side"></i>
        </span>
        <p>View Cars</p>
      </router-link>

      <router-link
        class="menu-list"
        to="/view_cars"
      >
        <span class="menu-icon">
          <i class="fas fa-car-side"></i>
        </span>
        <p>My Cars</p>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link
        class="menu-list"
        to="/add_car"
      >
        <span class="menu-icon">
          <i class="fas fa-car"></i>
        </span>
        <p>Add Car</p>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link
        class="menu-list"
        to="/view_user"
      >
        <span class="menu-icon">
          <i class="fas fa-user"></i>
        </span>
        <p>Profile</p>
      </router-link>
    </div>

    <div class="menu-item">
      <router-link
        class="menu-list"
        to="/view_user"
      >
        <span class="menu-icon">
          <i class="fas fa-user"></i>
        </span>
        <p>Favorites</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
.myc {
  background: chocolate;
}
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
