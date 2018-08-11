<template>
    <section class="chat">
        <header class="section-header">
            <h3 class="section-header-title">Chat</h3>
        </header>
        <form class="form chat-form" @submit.prevent="addChat">
            <label class="sr-text" for="chatInput">Ecrivez un nouveau message</label>
            <textarea class="chat-textarea" id="chatTextarea" v-model="chatText" placeholder="Ecrivez un nouveau message"></textarea>
            <button class="btn" type="submit">Envoyez un message</button>
        </form>
        <transition name="fade">
            <p class="chat-alert" v-if="errMessage">{{ errMessage }} <span class="chat-alert-close" @click="closeAlert">X</span> </p>
        </transition>
        <div class="chat-container">
            <h4 class="section-inter-title">Liste des messages</h4>
            <div class="chat-wrapper">
                <transition-group tag="ul" class="chat-list" name="slide">
                    <li class="chat-list-item" v-for="(chat, index) in chats" :key="index" :class="{done: chat.done}">
                        <div class="chat-list-item-header">
                            <span class="chat-credits">Ajouté par {{ chat.author }} le {{ chat.createdAt }}</span>
                        </div>
                        <div class="chat-list-item-body">
                            <p class="chat-text" :id="'chatText_' + index" type="text">{{ chat.text }}</p>
                        </div>
                        <div class="chat-list-item-footer">
                            <button class="btn chat-btn" type="button" @click="chat.editing = !chat.editing" v-if="!chat.editing">Editer</button>
                            <button class="btn chat-btn" type="button" @click="updateChat(chat)" v-else>Valider</button>
                            <button class="btn chat-btn" type="button" @click="storeChat(chat)">Retirer</button>
                            <button class="btn chat-btn" type="button" @click="chat.done = !chat.done" v-if="!chat.done">Valider</button>
                            <button class="btn chat-btn" type="button" @click="chat.done = !chat.done" v-else>Annuler</button>
                            <button class="btn chat-btn" type="button" @click="restoreChat(chat)">Restaurer</button>
                            <button class="btn chat-btn" type="button" @click="deleteChat(chat.id)">Supprimer</button>
                        </div>
                    </li>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script>
import {firebase, db} from '../main.js'

export default {
  name: 'Chat',
  data () {
    return {
      deletedChats: [],
      chats: [],
      chatText: '',
      errMessage: ''
    }
  },
  firestore () {
    return {
      chats: db.collection('chats').orderBy('createdAt', 'desc'),
      deletedChats: db.collection('deletedchats').orderBy('createdAt', 'desc')
    }
  },
  methods: {
    closeAlert () {
      this.errMessage = ''
    },
    addChat () {
      const userEmail = firebase.auth().currentUser.email
      const createdAt = new Date().toLocaleString('fr-FR', { timeZone: 'UTC' })
      this.errMessage = ''
      if (this.chatText) {
        db.collection('chats').add({
          text: this.chatText,
          author: userEmail,
          done: false,
          createdAt,
          editing: false })
        this.chatText = ''
      } else {
        this.errMessage = 'Veuillez entrer un intitulé de tâche'
      }
    },
    updateChat (chat) {
      db.collection('chats').doc(chat.id).update({text: chat.text})
      chat.editing = !chat.editing
    },
    storeChat (chat) {
      const userEmail = firebase.auth().currentUser.email
      const deletedAt = new Date().toLocaleString('fr-FR', { timeZone: 'UTC' })
      db.collection('deletedchats').add({
        text: chat.text,
        author: chat.author,
        done: chat.done,
        destructor: userEmail,
        createdAt: chat.createdAt,
        deletedAt})
        .then(
          db.collection('chats').doc(chat.id).delete()
        )
    },
    restoreChat (chat) {
      db.collection('chats').add({
        text: chat.text,
        author: chat.author,
        done: chat.done,
        createdAt: chat.createdAt,
        editing: false })
        .then(
          db.collection('deletedchats').doc(chat.id).delete()
        )
    },
    deleteChat (id) {
      db.collection('deletedchats').doc(id).delete()
    }
  }
}
</script>

<style scoped>
.chat-textarea {
    font-size: 1.6rem;
    text-align: left;
}
.chat-list-item {
    border: 1px solid var(--primaryColor);
    display: grid;
    grid-template-columns: repeat(12,1fr);
}
.chat-list-item:not(:first-child) {
    border-top: 1px solid transparent;
}
.chat-list-item-header {
    grid-column: 1 / -1;
}
.chat-credits {
    border-bottom: 1px solid var(--primaryColor);
    display: block;
    line-height: 2rem;
    padding: 1rem;
    text-align: right;
    width: 100%;
}
.chat-list-item-body {
    background: #EEE;
    grid-column: span 10;
    padding: 1rem;
}
@media screen and (min-width: 968px) and (max-width: 1600px) {
    .chat-list-item-body {
        grid-column: span 8;
    }
}
.chat-text {
    background: #FFF;
    border: none;
    font-size: 2rem;
    font-weight: normal;
    height: 100%;
    padding: 2rem 1.5rem;
    text-align: left;
}
.chat-list-item-footer {
    align-items: flex-end;
    border-left: 1px solid var(--primaryColor);
    display: flex;
    flex-direction: column;
    grid-column: span 2;
}
@media screen and (min-width: 968px) and (max-width: 1600px) {
    .chat-list-item-footer {
        grid-column: span 4;
    }
}
.chat-btn {
    border: none;
    box-shadow: none;
    margin: .5rem;
}
</style>
