import { useQueryClient } from "@tanstack/react-query"

import { useUser } from "../hooks/user"
import { removeToken } from "../utils/token"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const { user } = useUser()
    const client = useQueryClient()
    const navigate = useNavigate()

    const handleLogout = async() => {
        removeToken()
        client.setQueryData(["getUser"], null)
        navigate("/login")
    }

    return (
        <div className="w-full flex flex-row items-center justify-between p-2 border-b-2 border-gray-300">
            <div />
            <div className="flex flex-row gap-4">
                <div className="flex flex-col">
                    <div className="text-[14px] text-gray-600">
                        {user?.email}
                    </div>
                    <div className="text-[14px] text-gray-600">
                        {`${user?.firstName} ${user?.lastName}`}
                    </div>
                </div>
                <div onClick={handleLogout} className="text-[14px] text-gray-600 cursor-pointer">
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Navbar
