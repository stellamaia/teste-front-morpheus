<template>
  <ul>
    <input v-model="searchTerm" type="text" />
    <li v-for="usuario of usuariosFiltrados" :key="usuario.id">
      <span>{{ usuario.name }} </span>

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
      searchTerm: "",
    };
  },
  computed: {
    usuariosFiltrados() {
      return this.usuarios.filter((usuario) => {
        return usuario.name.toLowerCase().includes(this.searchTerm);
      });
    },
  },
  methods: {},
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
