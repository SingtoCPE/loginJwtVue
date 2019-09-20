<template>
  <div class="getEmployee">
    <fieldset>
      <legend>
        <h1>Employee Table</h1>
      </legend>
      <button class="buttonGet" @click="getEmployee">Get Employee</button>
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
    </fieldset>
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
<style scoped>
.getEmployee{
  margin: 25px 200px 20px 200px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: auto;
}
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: rgb(122, 145, 221);
  color: black;
}
tr:nth-child(even) {
  background-color: rgb(225, 241, 255);
}
fieldset {
  color: rgb(94, 94, 94);
}
.buttonGet {
  background-color: rgb(24, 218, 127);
  margin-bottom: 8px;
  color: black;
  padding: 2px 10px;
  text-align: center;
  font-size: 15px;
}
</style>