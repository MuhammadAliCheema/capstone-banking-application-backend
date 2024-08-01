import { useState } from "react"

import { useUser, useUsers } from "../hooks/user"
import { useTransfer } from "../hooks/account"

const TransferForm = () => {
    const [amount, setAmount] = useState("")
    const [targetUser, setTargetUser] = useState("")
    const { users } = useUsers()
    const { user } = useUser()
    const { isTransfering, transfer } = useTransfer()

    const handleClick = async() => {
        if(!amount || Number.isNaN(+amount)) return alert("Invalid amount")
        if(!targetUser) return alert("Please select a user")
        if(isTransfering) return;
        try {
            await transfer({ amount: +amount, to: targetUser })
            setAmount("")
            setTargetUser("")
        } catch (error) {
            alert(error?.response?.data?.message || "Failed to transfer money")
        }
    }

    return (
        <div className="flex flex-col w-full max-w-[350px] gap-4 p-2">
            <div className="text-[18px] font-[400]">
                Tsransfer Money
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="text-[14px]">Amount</div>
                <input 
                    value={amount} 
                    onChange={e => setAmount(e.currentTarget.value)}
                    className="border-[1px] rounded-md border-gray-300 p-2" 
                />
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="text-[14px]">User</div>
                <select onChange={e => setTargetUser(e.currentTarget.value)}>
                    <option value="">Select a user</option>
                    {users
                        ?.filter(({ _id }) => _id !== user?._id)
                        ?.map(user => <option value={user._id} key={user._id}>
                            {`${user.firstName} ${user.lastName}`}
                        </option>)}
                </select>
            </div>
            <button 
                onClick={handleClick}
                className="p-3 bg-blue-500 text-white rounded-md"
            >
                Transfer
            </button>
        </div>
    )
}

export default TransferForm
