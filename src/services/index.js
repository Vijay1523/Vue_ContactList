import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
    timeout: 5000
});

export const GET_USERS = async (index) => {
    return instance.get(`users`, {
        params :{
            page: index
        }
    })
}

export const GET_USER_BY_ID = async (id) => {
    return instance.get(`users/${id}`)
}