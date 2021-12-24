<template>
  <b-container>
    <b-row>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            placeholder="Nome"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.age"
            type="number"
            placeholder="Idade"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Genêro:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.gender"
            :options="genderList"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="Cidade:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.city"
            :options="cidadeList"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-row>
    <b-row>
      <b-col
        class="mt-3"
        sm="12"
        lg="6"
        v-for="usuario of ultimosUsuarios"
        :key="usuario.id"
      >
        <b-card border-variant="info" align="center" :header="usuario.name">
          <b-card-text class="card-usuario">
            <span> {{ usuario.gender }}</span
            ><br />
            <hr />
            <span> {{ usuario.age }} anos </span><br />
            <hr />
            <span> {{ usuario.city }} </span> <br />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
      form: {
        name: "",
        gender: "",
        age: null,
        city: "",
      },
      cidadeList: ["Uberlândia", "São Paulo", "Santa Catarina", "Brasília"],
      genderList: ["Feminino", "Masculino"],
      show: true,
    };
  },

  created() {
    axios.get(baseURL).then((res) => {
      this.usuarios = res.data;
    });
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();

      axios.post(baseURL, this.form).then((res) => {
        this.usuarios = [...this.usuarios, res.data];
        this.ultimosUsuarios = [...this.ultimosUsuarios, res.data];
        this.usuarioName = "";
      });
    },
    onReset(event) {
      event.preventDefault();
      this.form.gender = "";
      this.form.name = "";
      this.form.age = null;
      this.form.city = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
</style>