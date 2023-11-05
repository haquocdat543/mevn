import Api from '@/services/Api'

export default {
    fetchWinners () {
        return Api().get('winners')
    },
    addWinners (params) {
        return Api().post('winners/new', params)
    },
    updateWinners (params) {
        return Api().put('winners/update/' + params.id, params)
    },
    deleteWinners (id) {
        return Api().delete('winners/delete/' + id)
    },
    getWinners (params) {
        return Api().get('winners/get/' + params.id)
    }
}
