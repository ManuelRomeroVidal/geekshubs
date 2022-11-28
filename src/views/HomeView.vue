<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="post in storedPosts"  :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      posts: [],
    }
  },
  components: {
  },
  computed: {
    storedPosts() {
      return this.$store.state.posts.items
    },
  },
  methods: {
    getPosts() {
      this.axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        this.posts = response.data;
        this.$store.commit('SET_POSTS', this.posts);
      })
    },
  },
  mounted() {
    if(this.posts.length === 0) {
      this.getPosts();
    }
  }
}
</script>
