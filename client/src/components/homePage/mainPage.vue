<template>
  <div class="mainPage">
    <button @click="clearToken">Sign-out</button>
    <h1>Main Page</h1>
    <h2>Logined => This is main page :)</h2>
    <button @click="gotoAdd">Add Employee</button>
    <get-employee />
  </div>
</template>
<script>
import getEmployee from "./getEmployee";
export default {
  name: "mainPage",
  components: {
    getEmployee
  },
  methods: {
    gotoAdd() {
      window.location.href = "http://localhost:8080/#/add";
    },
    clearToken() {
      this.$store.dispatch("clearToken");
    }
  }
};
</script>