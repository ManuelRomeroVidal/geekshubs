<template>
  <posts />
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/posts/list.vue';

export default {
  name: 'HomeView',
  data() {
    return {
    }
  },
  components: {
    Posts
  },
    mounted() {
      if(this.$store.state.posts.items.length === 0) {
        this.$store.dispatch('getPosts')
      }
    },                   
}
</script>
