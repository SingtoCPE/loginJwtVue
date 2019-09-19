<template>
  <div class="getEmployee">
    <button @click="getEmployee">Get Employee</button>
    <table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>AGE</th>
        <th>POSITION</th>
        <th>SALARY</th>
        <th>PHONE</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.first_name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.position}}</td>
        <td>{{item.salary}}</td>
        <td>{{item.phone}}</td>
        <td>
          <del-employee :id="item.id" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
import delEmployee from "./delEmployee";
export default {
  name: "getEmployee",
  components: {
    delEmployee
  },
  computed: mapState({
    data: state => state.data
  }),
  methods: {
    getEmployee() {
      this.$store.dispatch("getEmployee");
    }
  }
};
</script>