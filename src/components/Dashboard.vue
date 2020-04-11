<template>
  <div class="dash-div1">
    <Navbar />
    <div class="dash-div">
      <Menu />

      <div class="template-link">
        <router-view></router-view>
        <Footer />
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './Menu';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Footer,
    Menu,
  },

  created() {
    if (localStorage.getItem('user') === null) {
      this.$router.push('/');
    }
  },
};
</script>

<style>
.dash-div {
  display: flex;
}

.dash-div1 {
  min-height: 100%;
}

.template-link {
  width: 88%;
  min-height: 100%;
  position: absolute;
  right: 0;
  z-index: -1;
  background: #ebebe0;
  padding: 70px 0px 0px 0px;
}
</style>