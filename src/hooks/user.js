import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import { getUser, getUsers, login, signup } from "../services/user"

import { setToken } from "../utils/token"

export const useUsers = () => {
    const { data, isFetching } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
    })
    return { users: data, isGettingUsers: isFetching }
}

export const useUser = () => {
    const { data, isFetching } = useQuery({
        queryFn: getUser,
        queryKey: ["getUser"]
    })

    return { user: data, isGettingUser: isFetching }
}

export const useLogin = () => {
    const client = useQueryClient()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: login,
        onSuccess: token => {
            setToken(token)
            client.invalidateQueries({
                predicate: ({ queryKey }) => queryKey[0] === "getUser"
            })
        }
    })

    return { login: mutateAsync, isLoggingIn: isPending } 
}

export const useSignup = () => {
    const client = useQueryClient()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: signup,
        onSuccess: token => {
            setToken(token)
            client.invalidateQueries({
                predicate: ({ queryKey }) => queryKey[0] === "getUser"
            })
        }
    })

    return { signup: mutateAsync, isSigningUp: isPending }
}
