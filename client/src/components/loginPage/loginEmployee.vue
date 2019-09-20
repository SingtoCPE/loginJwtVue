<template>
  <div class="loginEmployee">
    <img alt="pg1" src="@/assets/pg1.jpg" />
    <div class="login-wrapper">
      <h1>User Login</h1>
      <input v-model="data.user" placeholder="User..." />
      <input v-model="data.password" placeholder="Password..." />
      <button @click="loginEmployee">Sign-in</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginEmployee",
  data() {
    return {
      data: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    loginEmployee() {
      this.$store.dispatch("loginEmployee", {
        user: this.data.user,
        password: this.data.password
      });
    }
  }
};
</script>
<style scoped>
.loginEmployee {
  text-align: center;
}
.login-wrapper{
  margin: 0px 10px 10px 20px;
}
button{
  background-color: rgb(37, 88, 255);
  color: rgb(255, 255, 255);
  padding: 5px 10px;
  text-align: center;
  font-size: 15px;
  margin-left: 10px;
}
</style>