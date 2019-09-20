<template>
  <div class="delEmployee">
    <button class="buttonDel" @click="delEmployee(id)">DEL</button>
  </div>
</template>
<script>
export default {
  name: "delEmployee",
  props: {
    id: {
      type: Number,
      default: null
    }
  },
  methods: {
    delEmployee(id) {
      this.$store.dispatch("delEmployee",id);
    }
  }
};
</script>
<style scoped>
.buttonDel {
  background-color: rgb(228, 7, 73);
  margin: 10 10 10 700;
  color: black;
  padding: 2px 10px;
  text-align: center;
  font-size: 15px;
}
</style>