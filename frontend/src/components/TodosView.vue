<template>
<div>
<div v-for="todo in todos" :key="todo.receiver" :todoProps="todo">
	<h4>{{todoProps.receiver}}</h4>
	<p>{{todoProps.country}}</p>
	<p>{{todoProps.year}}</p>
</div>
</div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  name: 'TodosView',
  props: ['todoProps'],
	setup() {
		const todos = ref([])
		const getAll = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/todos'
        )
         console.log(res.data)
        todos.value = res.data
      } catch (error) {
        console.log(error)
      }
    }
		getAll()
		return { todos }
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
