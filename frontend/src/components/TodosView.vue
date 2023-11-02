<template>
<div>
<p>
{{test.name}}
</p>
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
		return { test }
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
