<template>
  <div id="app">
    <figure id="appFigure">
      <img id="appLogo" src="./assets/logo.png">
    </figure>
    <main id="appMain">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#appFigure {
  margin: 3rem;
}
#appLogo {
  max-width: 80%;
}
@media screen and (min-width: 768px) {
  #appMain {
    margin: auto;
    max-width: 61,8%;
    min-height: 100vh;
  }
}
.section-header {
  padding: 1.25rem;
}
.section-header-title {
  font-size: 2rem;
}
.section-header-subtitle {
  font-weight: normal;
  margin: 1.5rem;
}
</style>
