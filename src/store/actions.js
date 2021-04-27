import { actionTypes, mutationTypes } from './types'
import { GET_USERS, GET_USER_BY_ID } from '../services'

export default {
    [actionTypes.getItems]: async ({ commit }, pageIndex) => {
        try {
            commit(mutationTypes.setLoading, true)
            const response = await GET_USERS(pageIndex);
            commit(mutationTypes.setLoading, false)
            commit(mutationTypes.setItemMutation, response.data)
        } catch(e) {
            commit(mutationTypes.setLoading, false)
            commit(mutationTypes.setItemMutation, [])
        }
    },
    [actionTypes.getItemById]: async ({ commit }, id) => {
        try {
            commit(mutationTypes.setLoading, true)
            const response = await GET_USER_BY_ID(id);
            commit(mutationTypes.setLoading, false)
            commit(mutationTypes.setItemDetail, response.data.data)
        } catch(e) {
            commit(mutationTypes.setLoading, false)
            commit(mutationTypes.setItemDetail, null)
        }
    },
    [actionTypes.setUserLike]: ({commit}, param) => {
        commit(mutationTypes.setLikeFlag, param)
    } 
}