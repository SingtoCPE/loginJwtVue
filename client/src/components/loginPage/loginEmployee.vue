<template>
  <div class="loginEmployee">
    <input v-model="data.user" placeholder="User..." />
    <input v-model="data.password" placeholder="Password..." />
    <button @click="loginEmployee">Login</button>
  </div>
</template>
<script>
export default {
  name: "loginEmployee",
  data(){
    return{
      data:{
        user:'',
        password:''
      }
    }
  },
  methods: {
    loginEmployee() {
      this.$store.dispatch('loginEmployee',{
        user:this.data.user,
        password:this.data.password
      });
    }
  }
};
</script>