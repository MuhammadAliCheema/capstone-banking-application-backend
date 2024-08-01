import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { useSignup } from "../hooks/user"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const { signup, isSigningUp } = useSignup()
    const navigate = useNavigate()

    const handleClick = async() => {
        if(!email || !password || !firstName || !lastName)
                return alert("Please enter email / password / firstName / lastName")
        if(isSigningUp) return;
        try {
            await signup({ email, password, firstName, lastName })
        } catch (error) {
            alert(error?.message || "unknown error occured")
        }
    }

    const handleLogin = () => {
        navigate("/login")
    }

    return (
        <div className="w-full flex justify-center items-center h-[100vh]">
            <div className="w-full max-w-[450px] p-2 gap-4 flex flex-col justify-center items-center">
                <div className="text-[22px] font-[500]">
                    Create Bank Account
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="text-[14px]">First name</div>
                    <input 
                        value={firstName}
                        onChange={e => setFirstName(e.currentTarget.value)}
                        className="border-[1px] rounded-md border-gray-300 p-2" 
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="text-[14px]">Last name</div>
                    <input 
                        value={lastName}
                        onChange={e => setLastName(e.currentTarget.value)}
                        className="border-[1px] rounded-md border-gray-300 p-2" 
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="text-[14px]">Email</div>
                    <input 
                        value={email}
                        onChange={e => setEmail(e.currentTarget.value)}
                        className="border-[1px] rounded-md border-gray-300 p-2" 
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="text-[14px]">Password</div>
                    <input 
                        value={password} 
                        onChange={e => setPassword(e.currentTarget.value)}
                        className="border-[1px] rounded-md border-gray-300 p-2"
                        type="password"
                    />
                </div>
                <button 
                    onClick={handleClick}
                    className="p-3 bg-blue-500 text-white rounded-md"
                >
                    Create Account
                </button>
                <button
                    onClick={handleLogin}
                >
                    Go to login
                </button>
            </div>
        </div>
    )
}

export default Signup
