<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="post in posts" :key="post.receiver">
      <p>
        <span><b>{{ post.receiver}}</b></span><br />
        <span>{{ post.country }}</span>
        <span>{{ post.year }}</span>
      </p>
    </div>

  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'PostsService',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
    }
  }
}
</script>

