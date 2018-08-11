<template>
  <section class="adminPanel">
    <header class="section-header">
      <h1 class="section-header-title">Page d'administration du site</h1>
    </header>
    <div class="adminPanel-wrapper">
      <TodoList class="adminPanel-todolist"/>
      <Chat class="adminPanel-chat"/>
    </div>
  </section>
</template>

<script>
import TodoList from '../components/TodoList'
import Chat from '../components/Chat'
export default {
  name: 'AdminPanel',
  components: {TodoList, Chat},
  data () { return {} }
}
</script>

<style scoped>
.adminPanel-wrapper {
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(12, 1fr);
}
.adminPanel-todolist {
  grid-column: span 12;
}
.adminPanel-chat {
  grid-column: 1 / -1;
}
@media screen and (min-width: 1024px) {
  .adminPanel-todolist {
    grid-column: span 6;
  }
  .adminPanel-chat {
    grid-column: span 6;
  }
}

</style>
