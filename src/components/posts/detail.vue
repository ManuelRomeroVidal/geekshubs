<template>
    <div v-if="loadingPosts" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <div v-else class="home">

        <h3>{{post ? post.title : ''}}</h3>
        <p style="white-space: pre;">{{post ? post.body : ''}}</p>
        
    </div>
</template>
  
<script>
export default {
  name: 'PostsDetail',
  data() {
    return {
        
    }
  },
  props: {
      id: {
      type: Number,
      default: null,
    },
  },
  computed: {
      post() {
        if(this.$store.state.posts.items.length === 0) {
            this.$store.dispatch('getPosts')
        }
        return this.$store.getters.getPostById(this.id)
        },
        loadingPosts() {
            return this.$store.getters.loadingStatus
        },
  },
  methods: {
  } 
}
</script>
  