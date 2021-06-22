import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/api',
})

export const createUser = (payload) => api.post(`/user`, payload)
export const getUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = (id) => api.delete(`/user/${id}`)
export const getUserById = (id) => api.get(`/user/${id}`)

const apis = {
    createUser,
    getUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}


export default apis