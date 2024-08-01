import axios from "axios"

import { getToken } from "../utils/token"

export const getUsers = async() => {
    const { data } = await axios.get("/api/users/all", { headers: { Authorization: getToken() } })
    return data
}

export const getUser = async() => {
    const { data } = await axios.get("/api/users", { headers: { Authorization: getToken() } })
    return data
}

export const login = async(payload) => {
    const { data } = await axios.post("/api/users/login", payload, { headers: { Authorization: getToken() } })
    return data
}

export const signup = async(payload) => {
    const { data } = await axios.post("/api/users/signup", payload, { headers: { Authorization: getToken() } })
    return data
}
