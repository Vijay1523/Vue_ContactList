import { mutationTypes } from './types'
export default {
    [mutationTypes.setItemMutation](state, response) {
        state.userList = data(state, 'userList', response)
    },
    [mutationTypes.setLoading](state, flag) {
        state.loading = flag
    },
    [mutationTypes.setItemDetail] (state, user) {
        state.userDetail = user;
    },
    [mutationTypes.setLike] (state, user) {
        state.userList.data.map((r) => r.isLiked = r.id === user.id)
    }
}

function data(state, key, response) {
    state[key].data = response.data.map((r) => Object.assign({}, r, { isLiked: false}))
    state[key].totalItems = response.total
    state[key].totalPages = response.total_pages
    state[key].currentPage = response.page
    return state[key]
}