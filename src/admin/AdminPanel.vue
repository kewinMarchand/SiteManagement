<template>
  <section class="adminPanel">
    <header class="section-header">
      <h1 class="section-header-title">Page d'administration du site</h1>
    </header>
    <TodoList/>
  </section>
</template>

<script>
import TodoList from '../components/TodoList'
export default {
  name: 'AdminPanel',
  components: {TodoList},
  data () { return {} }
}
</script>

<style scoped>
</style>
