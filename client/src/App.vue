<template>
  <div>
  <router-view/>
  </div>
  <NobelPrizeWinners />
</template>

<script>
import NobelPrizeWinners from './components/winners.vue'

export default {
  name: 'App',
  components: {
    NobelPrizeWinners
  }
}
</script>

<style>
</style>
