<template>
  <div id="app">
    <b-container id="titulo">
      <h3 class="selected-item">Morpheus</h3>
      <router-link to="/">Cadastrar</router-link> |
      <router-link to="/listarUsuarios">Listar</router-link>
    </b-container>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#titulo {
  padding: 30px;

}

#titulo a {
  font-weight: bold;
  color: #2c3e50;
}

#titulo a.router-link-exact-active {
  color: #42b983;
}
.selected-item{

  height: 60px;
  border: 2px solid lightgray;
  border-radius: 5px;
  padding: 10px 10px;

  justify-content: space-between;
 align-items: center;


}
</style>
