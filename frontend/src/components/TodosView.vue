<template>
<div>
<div v-for="item in state.todos" :key="item.receiver">
	<h4>{{item.receiver}}</h4>
	<p>{{item.country}}</p>
	<p>{{item.year}}</p>
</div>
</div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: 'TodosView',
	setup() {
		const state = reactive({
			todos: {}
		})	
		function GetAll() {
			fetch("http://localhost:3000/todos")
			.then( res => res.json())
			.then( data => {
				state.todos = data
			})
		}
		GetAll()
		return { state, GetAll }
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
