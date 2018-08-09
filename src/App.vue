<template>
  <div id="app">
    <Navbar/>
    <figure id="appFigure">
      <img id="appLogo" src="./assets/logo.png" alt="Logo de siteManagement">
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
  height: 100%;
  width: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--textColor);
  font-family: Arial, sans-serif;
  font-size: 1em;
  height: 100%;
  letter-spacing: .2rem;
  padding: 5rem 0;
  position: relative;
  text-align: center;
  width: 100%;
}
h1 {
  font-size: 2rem;
}
h2 {
 font-size: 1.8rem;
}
h3 {
  font-size: 1.7rem;
}
h4 {
 font-size: 1.6rem;
}
h5 {
  font-size: 1.5rem;
}
h6 {
  font-size: 1.4rem;
}
p {
  font-size: 1.4rem;
}
span {
  font-size: 1.4rem;
}
input {
  font-size: 1.6rem;
}
::placeholder {
  font-size: 1.3rem;
  letter-spacing: .3rem;
}
/* Liens */
a {
  color: var(--primaryColor);
  font-size: 1.4em;
  text-decoration: none;
  transition: color .5s;
}
a:hover {
  color: var(--textColor);
  cursor: pointer;
}
/* bouttons */
.btn {
  background: transparent;
  border: 1px solid var(--primaryColor);
  border-radius: .2rem;
  box-shadow: 0 0 .1rem var(--primaryColor);
  color: var(--primaryColor);
  cursor: pointer;
  font-size: 1.4rem;
  margin: 1rem;
  padding: .5rem 1rem;
}
.btn:focus {
  box-shadow: inset 0 0 .1rem var(--primaryColor);
  outline: 1px solid var(--primaryColor);
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
/* Logo en header */
#appFigure {
  padding: 6rem;
}
#appLogo {
  max-width: 80%;
}
/* Main */
@media screen and (min-width: 768px) {
  #appMain {
    margin: 0 auto 3.5rem auto;
    max-width: 80%;
    min-height: 100vh;
  }
}
/* Sections */
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
/* Forms */
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
    text-align: center;
}
.connection-input:focus,
.todo-input:focus {
  border: 2px solid transparent;
  outline: 1px solid var(--primaryColor);
}
.connection-alert,
.todo-alert {
    background: rgba(255, 0, 0, .25);
    border: 1px solid rgb(255, 0, 0);
    border-radius: .2rem;
    display: block;
    font-size: 1.4rem;
    min-height: 2.5rem;
    line-height: 2.5rem;
    margin: 1rem auto;
    max-width: 61.8%;
    padding: 1rem;
}
.todo-alert-close {
  cursor: pointer;
  float: right;
  margin-right: 2rem;
}
.connection-go-to {
    font-size: 1.6rem;
    margin-top: 1.5rem;
}
.connection-go-to a{
    font-size: 1.6rem;
}
/* Effets de transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
