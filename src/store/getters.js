import { getterTypes } from './types'

export default {
    [getterTypes.Items]: (state) =>  state.userList.data,
    [getterTypes.Loading]: (state) => state.loading,
    [getterTypes.TotalItems]: (state) => state.userList.totalItems,
    [getterTypes.GetItemById]: (state) => (id) => {
        return state.userList.data.find((r) => r.id === parseInt(id))
    },
    [getterTypes.LikedItems]: (state) => state.userList.data.filter((r) => r.isLiked),
    [getterTypes.UserDetail]: (state) => state.userDetail
}