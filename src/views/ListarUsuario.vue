<template>
  <ul>
    <li v-for="usuario of usuarios" :key="usuario.id">
      {{ usuario.name }}
      <hr />
    </li>
  </ul>
</template>

<script>
import axios from "axios";

const baseURL = "http://localhost:3000/usuarios";

export default {
  name: "ListarUsuario",
  data() {
    return {
      usuarios: [],
    };
  },
  created() {
    axios.get(baseURL).then((res) => {
      this.usuarios = res.data;
    });
  },
};
</script>

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
</style>
