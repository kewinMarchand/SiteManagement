<template>
    <footer class="footer">
        <router-link to="/accueil">
            <img class="footer-logo" src="../assets/logo.png" height="42" title="Site management">
            <span>Site management</span>
        </router-link>
        <ul class="footer-list">
            <li class="footer-list-item">
                <router-link to="/accueil">accueil</router-link>
            </li>
            <li class="footer-list-item">
                <router-link to="/admin">admin</router-link>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () { return {} }
}
</script>

<style scoped>
footer {
    background: var(--textColor);
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
}
.footer-logo {
    margin: .5rem;
    vertical-align: middle;
}
.footer-list {
    display: flex;
    justify-content: flex-end;
    list-style: none;
}
.footer-list-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 .8rem;
}
a:hover {
    color: #FFF;
    cursor: pointer;
}
</style>
