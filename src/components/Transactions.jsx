import moment from "moment"

import { useTransactions } from "../hooks/account"

const Transactions = () => {
    const { transactions } = useTransactions()
    return (
        <div className="flex flex-col w-full max-w-[350px] gap-4 p-2">
            {transactions?.map(({
                _id,
                type,
                to,
                amount,
                createdAt
            }) => <div key={_id} className="w-full flex flex-row gap-2">
                <div>
                    {type}
                </div>
                {to ? <div className="whitespace-nowrap">to: {to?.firstName}</div> : <></>}
                <div className="whitespace-nowrap">amount: {amount}</div>
                <div className="whitespace-nowrap">on: {moment(createdAt).format("DD/MMYYYY")}</div>
            </div>)}
        </div>
    )
}

export default Transactions
