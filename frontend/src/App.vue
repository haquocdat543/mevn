<template>
  <div class="three">
  <PostsService/>
  </div>
</template>

<script>
import PostsService from './components/Posts.vue'

export default {
  name: 'App',
  components: {
  PostsService
  }
}
</script>

<style>
:root {
--first-color: #010409;
--second-color: #0d1118;
--navbar-color: #161b22;
--button-color: #21262d;
--grey-color: #c9d1d9;
--grey-two-color: #8b949e;
--line-color: #30363d;
--input-color: #0d1117;
--border-color: #30363d;
--blue-text--color: #58a6ff;
}
</style>
