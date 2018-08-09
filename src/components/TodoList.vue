<template>
    <section class="todo">
        <header class="section-header">
            <h3 class="section-header-title">Todolist</h3>
        </header>
        <form class="todo-form">
            <label class="sr-text" for="todoInput">Ecrivez une nouvelle tâche</label>
            <input class="todo-input" id="todolistInput" type="text" v-model="todoText" placeholder="Ecrivez une nouvelle tâche">
            <button class="btn todo-btn" type="button" @click="addTodo">Ajoutez la tâche</button>
        </form>
        <transition name="fade">
            <span class="todo-alert" v-if="errMessage">{{ errMessage }}</span>
        </transition>
        <div class="todo-container">
            <div class="todo-wrapper">
                <h4 class="section-inter-title">Liste des tâches en cours</h4>
                <ul class="todo-list">
                    <li class="todo-list-item" v-for="(todo, index) in todos" :key="index" :class="{done: todo.done}">
                        <div class="todo-list-item-body">
                            <span class="todo-credits">Ajouté par {{ todo.author }} le {{ todo.createdAt }}</span>
                            <input class="todo-text" :id="'todoInput_' + index" type="text" v-model="todo.text" :disabled="!todo.editing">
                            <div>
                                <button class="btn todo-btn" type="button" @click="todo.editing = !todo.editing" v-if="!todo.editing">Editer la tâche</button>
                                <button class="btn todo-btn" type="button" @click="updateTodo(todo)" v-else>Valider la modification</button>
                                <button class="btn todo-btn" type="button" @click="storeTodo(todo)">Retirer la tâche</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="todo-wrapper">
                <h4 class="section-inter-title">Liste des tâches retirées</h4>
                <ul class="todo-list">
                    <li class="todo-list-item" v-for="(todo, index) in deletedTodos" :key="index" :class="{done: todo.done}">
                        <div class="todo-list-item-body">
                            <span class="todo-credits">Ajouté par {{ todo.author }} le {{ todo.createdAt }}<br>retiré par {{ todo.destructor }} le {{ todo.deletedAt }}</span>
                            <p class="todo-text">{{ todo.text }}</p>
                            <div>
                                <button class="btn todo-btn" type="button" @click="restoreTodo(todo)">restaurer la tâche</button>
                                <button class="btn todo-btn" type="button" @click="deleteTodo(todo.id)">Supprimer la tâche</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import {firebase, db} from '../main.js'

export default {
  name: 'TodoList',
  data () {
    return {
      deletedTodos: [],
      todos: [],
      todoText: '',
      errMessage: ''
    }
  },
  firestore () {
    return {
      todos: db.collection('todos').orderBy('createdAt', 'desc'),
      deletedTodos: db.collection('deletedTodos').orderBy('createdAt', 'desc')
    }
  },
  methods: {
    addTodo () {
      const userEmail = firebase.auth().currentUser.email
      const createdAt = new Date().toLocaleString('fr-FR', { timeZone: 'UTC' })
      this.errMessage = ''
      if (this.todoText) {
        db.collection('todos').add({
          text: this.todoText,
          author: userEmail,
          createdAt,
          editing: false })
        this.todoText = ''
      } else {
        this.errMessage = 'Veuillez entrer un intitulé de tâche'
      }
    },
    updateTodo (todo) {
      db.collection('todos').doc(todo.id).update({text: todo.text})
      todo.editing = !todo.editing
    },
    storeTodo (todo) {
      const userEmail = firebase.auth().currentUser.email
      const deletedAt = new Date().toLocaleString('fr-FR', { timeZone: 'UTC' })
      db.collection('deletedTodos').add({
        text: todo.text,
        author: todo.author,
        destructor: userEmail,
        createdAt: todo.createdAt,
        deletedAt})
        .then(
          db.collection('todos').doc(todo.id).delete()
        )
    },
    restoreTodo (todo) {
      db.collection('todos').add({
        text: todo.text,
        author: todo.author,
        createdAt: todo.createdAt,
        editing: false })
        .then(
          db.collection('deletedTodos').doc(todo.id).delete()
        )
    },
    deleteTodo (id) {
      db.collection('deletedTodos').doc(id).delete()
    }
  }
}
</script>

<style scoped>
.todo-container {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(12,1fr);
}
.todo-wrapper {
    grid-column: 1 / -1;
}
@media screen and (min-width: 1024px) {
    .todo-wrapper {
        grid-column: span 6;
    }
}
.todo-list-item {
    margin-bottom: .5rem;
}
.todo-list-item-body {
    border: 1px solid var(--primaryColor);
    padding: 1rem;
}
.todo-credits {
    border-bottom: 1px solid var(--primaryColor);
    display: block;
    line-height: 2rem;
    padding: 1rem 0;
    text-align: right;
    width: 100%;
}
.todo-text {
    background: #FFF;
    border: none;
    display: inline-block;
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
}
.todo-text:enabled {
    outline: 1px solid var(--primaryColor);
}
</style>
