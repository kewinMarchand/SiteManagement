<template>
    <nav class="navbar">
        <router-link to="/">
            <img class="navbar-logo" src="../assets/logo.png" height="42" title="Site management">
            <span>Site management</span>
        </router-link>
        <ul class="navbar-list">
            <li class="navbar-list-item">
                <router-link to="/">accueil</router-link>
            </li>
            <li class="navbar-list-item">
                <router-link to="/admin">admin</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return { }
  }
}
</script>

<style scoped>
.navbar {
    background: #333;
    color: #333;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
}
.navbar-logo {
    margin: 10px;
    vertical-align: middle;
}
.navbar-list {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
}
.navbar-list-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}
.navbar-list-item a {
    font-size: 0.8rem;
    text-transform: capitalize;
}
a:hover {
    color: #FFF;
    cursor: pointer;
}
</style>
