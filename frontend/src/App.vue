<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomeView />
  <TodosView />
  <AboutView />
</template>

<script>
import HomeView from './components/HomeView.vue'
import TodosView './components/TodosView.vue'
import AboutView from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HomeView,
    TodosView,
    AboutView
  }
}
</script>

<style>
</style>
