<template>
  <div class="posts">
    <h1>Posts</h1>
    <div v-if=" winners && winners.length > 0" class="table-wrap">
      <div>
        <router-link  :to="{ name: 'NewWinner' }" class="">Add</router-link>
      </div>
      <table>
        <tr>
          <td>Receiver</td>
          <td>Country</td>
          <td>Year</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="winner in winners" :key="winner._id">
          <td>{{ winner.receiver }}</td>
          <td>{{ winner.country }}</td>
          <td>{{ winner.year }}</td>
          <td align="center">
            <router-link :to="{ name: 'EditWinner', params: { id: winner._id } }">Edit</router-link> |
            <a href="#" @click="deleteWinners(winner._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no winner .. Lets add one now <br /><br />
      <router-link :to="{ name: 'NewWinner' }" class="add_post_link">Add Winner</router-link>
    </div>
  </div>
</template>

<script>
import NobelPrizeWinners from '@/services/winners.js'
export default {
  name: 'NobelPrizeWinners',
  data () {
    return {
      winners: []
    }
  },
  mounted () {
    this.fetchWinners()
  },
  methods: {
    async fetchWinners () {
      const response = await NobelPrizeWinners.fetchWinners()
      this.winners = response.data
    },
    async deleteWinners (id) {
      await NobelPrizeWinners.deleteWinners(id)
      this.$router.push({ name: 'winners' })
    }
  }
}
</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>


