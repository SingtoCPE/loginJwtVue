<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { store } from "./store/store";

export default {
  name: "app",
  store,
  components: {
  }
};
</script>

<style>
</style>
