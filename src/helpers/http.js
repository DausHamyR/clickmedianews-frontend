import axios from "axios"

const http = (token) => {
    const headers = {}
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }
    return axios.create({
        headers,
        baseURL: import.meta.env.VITE_BACKEND_URL,
    })
}

export default http
