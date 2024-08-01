import classNames from "classnames"
import { useState } from "react"

import WithdrawForm from "../components/WithdrawForm"
import TransferForm from "../components/TransferForm"
import Transactions from "../components/Transactions"
import DepositForm from "../components/DepositForm"
import Navbar from "../components/Navbar"

import { useGetAccount } from "../hooks/account"

const Dashboard = () => {
    const { account } = useGetAccount()
    const [activeIndex, setActiveIndex] = useState(0)

    const map = {
        0: <DepositForm />,
        1: <WithdrawForm />,
        2: <TransferForm />,
        3: <Transactions />
    }

    return (
        <div className="w-full h-screen overflow-auto">
            <Navbar />
            <div className="flex flex-col w-full p-2">
                <div className="text-[22px] font-[500]">
                    Balance: ${account?.balance}
                </div>
            </div>
            <div className="flex flex-row items-center p-2">
                {["Deposit","Withdraw", "Transfer", "Transactions"].map((type, idx) => <div 
                    className={classNames(
                        "p-2 flex justify-center items-center relative cursor-pointer",
                        { "font-[600]": activeIndex === idx }
                    )}
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                >
                    {type}
                    {activeIndex === idx && <div className="w-full absolute bottom-0 h-[2px] bg-black" />}
                </div>)}
            </div>
            {map[activeIndex]}
        </div>
    )
}

export default Dashboard
