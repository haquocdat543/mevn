<template>
<div>
<div>
	<h4></h4>
	<p></p>
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
