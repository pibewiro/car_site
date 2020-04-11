<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

export default {
  name: "App",
};
</script>

<style>
:root {
  --primaryColor: #29303b;
  --hoverColor: #000;
  --siteText: #f4f4f4;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.btn-div {
  margin-top: 20px;
  text-align: center;
}

.btn-div button {
  font-size: 20px;
  padding: 10px 40px;
  background: var(--primaryColor);
  color: var(--siteText);
  border: 0;
}

.btn-div button:hover {
  background: var(--hoverColor);
  cursor: pointer;
}
</style>
