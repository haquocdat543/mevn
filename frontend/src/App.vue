<template>
  <img align=center alt="Vue logo" src="./assets/logo.png">
  <div class="three">
  <HomeView />
  <TodosView />
  <AboutView />
  </div>
</template>

<script>
import HomeView from './components/HomeView.vue'
import TodosView from './components/TodosView.vue'
import AboutView from './components/AboutView.vue'

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
.three { 
display: flex;
justify-content: space-between;
align-items: center;
background-color: var(--first-color);
color: white;
height: 60px;
padding: 2px 28px;
position: sticky;
top: 0;
}
</style>
