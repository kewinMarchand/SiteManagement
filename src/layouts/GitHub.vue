<template>
    <section class="gitHub">
        <header class="section-header">
            <h1 class="section-header-title">GitHub review</h1>
            <h2 class="section-header-subtitle">Suivez les commits liés à ce projet</h2>
        </header>
        <ul class="gitHub-list">
            <li class="gitHub-list-item" v-for="(record, index) in commits" :key="index">
              <img class="gitHub-author-img" :src="record.author.avatar_url" :alt="'image de profil de' + record.commit.author.name" height="50">
              <p class="gitHub-credit">Commit N° <a  class="gitHub-credit-link" :href="record.html_url" target="_blank">{{ record.sha.slice(0, 7) }}</a></p>
              <p class="gitHub-author">Par <a class="gitHub-author-link" :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></p>
              <p class="gitHub-message"><span class="github-arrow">⇨</span>{{ record.commit.message | truncate }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
var apiURL = 'https://api.github.com/repos/kewinMarchand/SiteManagement/commits?per_page=30&sha='
export default {
  name: 'Footer',
  data () {
    return {
      branches: ['master', 'dev'],
      currentBranch: 'master',
      commits: null
    }
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    currentBranch: 'fetchData'
  },
  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
      }
      xhr.send()
    }
  }
}
</script>

<style scoped>
.gitHub-list-item {
  border: 1px solid var(--primaryColor);
  margin-bottom: 2rem;
  padding: 1rem;
}
.gitHub-author-img {
  float: left;
}
.gitHub-credit,
.gitHub-author {
  text-align: right;
}
.gitHub-credit-link,
.gitHub-author-link {
  font-size: 1.4rem;
}
.gitHub-message {
  border-top: 1px solid var(--primaryColor);
  font-size: 1.8rem;
  padding: 2rem;
  margin-top: 2rem;
  text-align: left;
}
.github-arrow {
  color: var(--primaryColor);
  font-size: 1.8rem;
  margin: 0 1rem 0 0;
}
</style>
