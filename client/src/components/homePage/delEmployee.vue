<template>
  <div class="delEmployee">
    <button @click="delEmployee(id)">DEL</button>
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
      this.$store.dispatch("delEmployee", id);
    }
  }
};
</script>