<template>
    <div v-if="loadingPosts" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div v-else class="home">
      <h2>Posts</h2>
        <div v-for="post in storedPosts" :key="post.id">
            <router-link :to="{name: 'post', params: { id: post.id } }">{{ post.title }}</router-link>            
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'PostsList',
    data() {
        return {
        posts: [],
        }
    },
    props: {
    },
  computed: {
    storedPosts() {
      return this.$store.getters.posts
    },
    loadingPosts() {
      return this.$store.getters.loadingStatus
    },
  },
  methods: {
    
  },
  mounted() {
    
  }
  }
  </script>
  