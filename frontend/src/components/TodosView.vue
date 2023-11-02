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
		const test = reactive({
			name: "SlideShow"
		})	
		function GetAll() {
			fetch("http://localhost:3000")
			.then( res => res.json());
			.then( data => {
				state.todos = data
			})
		}
		GetAll()
		return { test, GetAll }
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
