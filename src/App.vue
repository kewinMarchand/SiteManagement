<template>
  <div id="app">
    <Navbar/>
    <figure id="appFigure">
      <img id="appLogo" src="./assets/logo.png">
    </figure>
    <main id="appMain">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
html {
  font-size: .625em;
  font-size: calc(1em * .625);
}
html {
  font-size: 1em;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: Arial, sans-serif;
  margin-top: 3rem;
  position: relative;
  text-align: center;
}
#appFigure {
  padding: 3rem;
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
a {
  color: #d77301;
  text-decoration: none;
}
a:hover {
  color: #333;
  cursor: pointer;
}
</style>
