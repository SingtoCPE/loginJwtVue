<template>
  <div class="loginEmployee">
    <h1>Login Page</h1>
    <input v-model="data.user" placeholder="User..." />
    <input v-model="data.password" placeholder="Password..." />
    <button @click="loginEmployee">Sign-in</button>
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