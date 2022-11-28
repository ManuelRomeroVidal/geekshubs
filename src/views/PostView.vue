<template>
    <post :id="$route.params.id" />
</template>
  
  <script>
  // @ is an alias to /src
  import Post from '@/components/posts/detail.vue'
  
  export default {
    name: 'PostView',
    data() {
      return {
      }
    },
    props: {
      id: Number
    },
    components: {
        Post
    }                 
  }
  </script>
  