import { useState } from "react"

import { useDeposit } from "../hooks/account"

const DepositForm = () => {
    const [amount, setAmount] = useState("")
    const { deposit, isDepositing } = useDeposit()

    const handleClick = async() => {
        if(!amount || Number.isNaN(+amount)) return alert("Invalid amount")
        if(isDepositing) return;
        try {
            await deposit({ amount: +amount })
            setAmount("")
        } catch (error) {
            alert(error?.response?.data?.message || "Failed to deposit money")
        }
    }

    return (
        <div className="flex flex-col w-full max-w-[350px] gap-4 p-2">
            <div className="text-[18px] font-[400]">
                Deposit Money
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
                Deposit
            </button>
        </div>
    )
}

export default DepositForm
