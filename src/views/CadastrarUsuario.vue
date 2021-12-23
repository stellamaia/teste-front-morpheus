<template>
  <div id="app">
    <input type="text" v-model="usuarioName" @keyup.enter="addUsuario" />
    <div v-for="ultimoUsuario of ultimosUsuarios" :key="ultimoUsuario.id">
      
      {{ ultimoUsuario.name }}
      <hr />
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

const baseURL = "http://localhost:3000/usuarios";

export default {
  name: "app",
  data() {
    return {
      usuarios: [],
      usuarioName: "",
      ultimosUsuarios: [],
    };
  },

  created() {
    axios.get(baseURL).then((res) => {
      this.usuarios = res.data;
    });
  },

  methods: {
    addUsuario() {
      axios.post(baseURL, { name: this.usuarioName }).then((res) => {
        this.usuarios = [...this.usuarios, res.data];
        this.ultimosUsuarios = [...this.ultimosUsuarios, res.data];
        this.usuarioName = "";
      });
    },
  },
};
</script>

<style scoped>
</style>