<template>
  <section class="home">
    <header class="section-header">
      <h1 class="section-header-title">{{ appTitle }}</h1>
      <h2 class="section-header-subtitle">{{ appSubtitle }}</h2>
    </header>
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      appTitle: 'Site management',
      appSubtitle: 'A Vue.js / Firebase project dedicated to site management'
    }
  }
}
</script>

<style scoped>

</style>
