<template>
    <footer class="footer">
        <router-link to="/">
            <img class="footer-logo" src="../assets/logo.png" height="42" title="Site management">
            <span>Site management</span>
        </router-link>
        <ul class="footer-list">
            <li class="footer-list-item">
                <router-link to="/">accueil</router-link>
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
    background: #FFF;
    bottom: 0;
    border-top: 1px solid #000;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
}
.footer-logo {
    margin: 10px;
    vertical-align: middle;
}
.footer-list {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
}
.footer-list-item {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
}
</style>
