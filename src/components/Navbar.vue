<template>
    <nav class="navbar">
        <router-link to="/accueil">
            <img class="navbar-logo" src="../assets/logo.png" height="42" title="Site management">
            <span class="navbar-brand">Site management</span>
        </router-link>
        <ul class="navbar-list">
            <li class="navbar-list-item">
                <router-link to="/accueil">accueil</router-link>
            </li>
            <li class="navbar-list-item">
                <router-link to="/admin">admin</router-link>
            </li>
            <li class="navbar-list-item">
                <button class="btn navbar-btn" type="button" @click="logOut">Déconnexion</button>
            </li>
        </ul>
    </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    logOut () {
      firebase.auth().signOut().then(
        () => { this.$router.replace('login') }
      )
    }
  }
}
</script>

<style scoped>
.navbar {
    background: #AAA;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
}
.navbar-logo {
    margin: .5rem;
    vertical-align: middle;
}
.navbar-brand {
    font-size: 1.4rem;
}
.navbar-list {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    list-style: none;
}
.navbar-list-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 .8rem;
}
.navbar-list-item a {
    font-size: 1.4rem;
    text-transform: capitalize;
}
a:hover {
    color: #FFF;
    cursor: pointer;
}
.navbar-btn {
    background: transparent;
    border: none;
    box-shadow: none;
    color: #FFF;
    font-size: 1.4rem;
    padding: .4rem;
}
.navbar-btn:hover {
    color: var(--primaryColor);
}
.navbar-btn:focus {
    outline: 1px solid var(--primaryColor);
}
</style>
