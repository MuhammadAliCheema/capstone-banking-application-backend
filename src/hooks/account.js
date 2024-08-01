import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import { deposit, getAccount, getTransactions, transfer, withdraw } from "../services/account"

export const useGetAccount = () => {
    const { data, isFetching } = useQuery({
        queryKey: ["getAccount"],
        queryFn: getAccount
    })

    return { account: data, isGettingAccount: isFetching }
}

export const useWithdraw = () => {
    const client = useQueryClient()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: withdraw,
        onSuccess: () => {
            client.invalidateQueries({
                predicate: ({ queryKey }) => queryKey[0] === "getAccount" || queryKey[0] === "transactions"
            })
        }
    })

    return { withdraw: mutateAsync, isWithdrawing: isPending }
}

export const useDeposit = () => {
    const client = useQueryClient()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: deposit,
        onSuccess: () => {
            client.invalidateQueries({
                predicate: ({ queryKey }) => queryKey[0] === "getAccount" || queryKey[0] === "transactions"
            })
        }
    })

    return { deposit: mutateAsync, isDepositing: isPending }
}

export const useTransfer = () => {
    const client = useQueryClient()

    const { mutateAsync, isPending } = useMutation({
        mutationFn: transfer,
        onSuccess: () => {
            client.invalidateQueries({
                predicate: ({ queryKey }) => queryKey[0] === "getAccount" || queryKey[0] === "transactions"
            })
        },
    })

    return { transfer: mutateAsync, isTransfering: isPending }
}

export const useTransactions = () => {
    const { data, isFetching } = useQuery({
        queryKey: ["transactions"],
        queryFn: getTransactions,
        refetchOnMount: true
    })
    return { transactions: data, isGettingTransactions: isFetching }
}
