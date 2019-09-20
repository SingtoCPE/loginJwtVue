<template>
  <div class="mainPage">
    <div class="sign-out">
      <button class="button-signout" @click="clearToken">Sign-out</button>
    </div>
    <h1>Main Page</h1>
    <h2>Login Complete => This is main page :)</h2>
    <img alt="pg2" src="@/assets/pg2.jpg"/>
    <div class="addEmployee">
      <fieldset>
        <legend>
          <h1>Add</h1>
        </legend>
        <button class="button-add" @click="gotoAdd">Add Employee</button>
      </fieldset>
    </div>
    <get-employee class="getEmployee" />
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
<style scoped>
.mainPage {
  text-align: center;
  margin: 10px 200px 200px 200px;
}
.getEmployee {
  text-align: left;
}
.addEmployee {
  text-align: left;
  margin: 25px 710px 20px 200px;
}
.sign-out {
  text-align: right;
}
.button-signout {
  background-color: rgb(228, 7, 73);
  margin: 10 10 10 700;
  color: black;
  padding: 2px 10px;
  text-align: center;
  font-size: 15px;
}
.button-add {
  background-color: rgb(37, 88, 255);
  color: black;
  padding: 5px 10px;
  text-align: center;
  font-size: 15px;
  margin-left: 10px;
}
fieldset {
  color: rgb(94, 94, 94);
}
</style>