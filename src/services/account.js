import axios from "axios"

import { getToken } from "../utils/token"

export const getAccount = async() => {
    const { data } = await axios.get("/api/accounts", { headers: { Authorization: getToken() } })
    return data
}

export const withdraw = async(payload) => {
    const { data } = await axios.post("/api/accounts/withdraw", payload, { headers: { Authorization: getToken() } })
    return data
}

export const deposit = async(payload) => {
    const { data } = await axios.post("/api/accounts/deposit", payload, { headers: { Authorization: getToken() } })
    return data
}

export const transfer = async(payload) => {
    const { data } = await axios.post("/api/accounts/transfer", payload, { headers: { Authorization: getToken() } })
    return data
}

export const getTransactions = async() => {
    const { data } = await axios.get("/api/accounts/transactions", { headers: { Authorization: getToken() } })
    return data
}
