import { useState } from "react"

import { useWithdraw } from "../hooks/account"

const WithdrawForm = () => {
    const [amount, setAmount] = useState("")
    const { withdraw, isWithdrawing } = useWithdraw()

    const handleClick = async() => {
        if(!amount || Number.isNaN(+amount)) return alert("Invalid amount")
        if(isWithdrawing) return;
        try {
            await withdraw({ amount: +amount })
            setAmount("")
        } catch (error) {
            alert(error?.response?.data?.message || "Failed to withdraw money")
        }
    }

    return (
        <div className="flex flex-col w-full max-w-[350px] gap-4 p-2">
            <div className="text-[18px] font-[400]">
                Withdraw Money
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="text-[14px]">Amount</div>
                <input 
                    value={amount} 
                    onChange={e => setAmount(e.currentTarget.value)}
                    className="border-[1px] rounded-md border-gray-300 p-2" 
                />
            </div>
            <button 
                onClick={handleClick}
                className="p-3 bg-blue-500 text-white rounded-md"
            >
                Withdraw
            </button>
        </div>
    )
}

export default WithdrawForm
