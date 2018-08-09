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
  },
  data () {
    return { }
  }
}
</script>

<style>
:root {
  --primaryColor: #d77301;
  --textColor: #2c3e50;
}
* {
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
/* Astuce du 62,5% pour ramener la police a 10px */
html {
  font-size: .625em;
  font-size: calc(1em * .625);
}
body {
  font-size: 1em;
  height: 100%
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--textColor);
  font-family: Arial, sans-serif;
  height: 100%;
  padding: 5rem 0;
  position: relative;
  text-align: center;
}
#appFigure {
  padding: 6rem;
}
#appLogo {
  max-width: 80%;
}
@media screen and (min-width: 768px) {
  #appMain {
    margin: 0 auto 3.5rem auto;
    max-width: 80%;
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
  margin: 1.8rem;
}
.section-inter-title {
  font-size: 1.6rem;
  margin: 1.8rem;
}
a {
  color: var(--primaryColor);
  text-decoration: none;
}
a:hover {
  color: var(--textColor);
  cursor: pointer;
}
/* Texte pour lecteurs d'ecran */
.sr-text {
  display: none;
}
@media speech {
  .sr-text {
    display: block;
  }
}
.connection-form,
.todo-form {
    margin-bottom: 1rem;
}
.connection-input,
.todo-input,
.todo-text {
    display: block;
    margin: 1.5rem auto;
    padding: 1rem;
    min-width: 60%;
    max-width: 80%;
}
.todo-input:focus {
  border: none;
  outline: 1px solid var(--primaryColor);
}
.btn {
  background: transparent;
  border: 1px solid var(--primaryColor);
  border-radius: .2rem;
  box-shadow: 0 0 .2rem var(--primaryColor);
  color: var(--primaryColor);
  cursor: pointer;
  font-size: 1.2rem;
  margin: 1rem;
  padding: .5rem 1rem;
}
.btn:focus {
  border: none;
  box-shadow: inset 0 0 .2rem var(--primaryColor);
  outline: 1px solid var(--primaryColor);
}
.connection-alert,
.todo-alert {
    background: rgba(255, 0, 0, .3);
    border: 1px solid rgb(255, 0, 0);
    border-radius: .2rem;
    display: block;
    font-size: 1rem;
    line-height: 2rem;
    margin: 1rem auto;
    max-width: 61.8%;
}
.connection-go-to {
    font-size: 1.2rem;
    margin-top: 1.5rem;
}
/* Effets de transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
