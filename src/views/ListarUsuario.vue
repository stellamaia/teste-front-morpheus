<template>
  <div>
    <input class="search" v-model="searchTerm" type="text" />
    <b-row >
     
        <b-col sm="12" lg="6">
          <b-card  v-for="usuario of usuariosFiltrados" :key="usuario.id" border-variant="info" align="center" :header="usuario.name">
            <b-card-text class="card-usuario">
              <span> {{ usuario.gender }}</span><br />
              <hr />
              <span> {{ usuario.age }} anos </span><br />
              <hr />
              <span> {{ usuario.city }} </span> <br />
            </b-card-text>
          </b-card>
        </b-col>
 
    </b-row>
</div>
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
* {
  height: 100%;
}
ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}

.search {
  margin-bottom: 20px;
}
.border-info {
  margin: 20px;
}
</style>
