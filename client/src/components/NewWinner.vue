<template>
  <div class="posts">
    <h1>Add Winners</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="RECEIVER" v-model="receiver">
        </div>
        <div>
          <input type="text" name="title" placeholder="COUNTRY" v-model="country">
        </div>
	<div>
          <input type="number" name="title" placeholder="YEAR" v-model="year">
	</div>
        <div>
          <button class="app_post_btn" @click="addWinners">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import NobelPrizeWinners from '@/services/winners.js'
// import winnersVue from '@/components/winners.vue'
export default {
  name: 'NewWinner',
  data () {
    return {
      receiver: '',
      country: '',
      year: ''
    }
  },
  methods: {
    async addWinners () {
      await NobelPrizeWinners.addWinners({
        receiver: this.receiver,
        country: this.country,
        year: this.year
      })
      this.$router.push({ name: 'winners' })
//      winnersVue.fetchWinners()
    },
  }
}
</script>

<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>


