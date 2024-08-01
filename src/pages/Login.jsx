import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { useLogin } from "../hooks/user"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, isLoggingIn } = useLogin()
    const navigate = useNavigate()

    const handleClick = async() => {
        if(!email || !password) return alert("Please enter email / password")
        if(isLoggingIn) return;
        try {
            await login({ email, password })
        } catch (error) {
            alert(error?.message || "unknown error occured")
        }
    }

    const handleSignup = () => {
        navigate("/signup")
    }

    return (
        <div className="w-full flex justify-center items-center h-[100vh]">
            <div className="w-full max-w-[450px] p-2 gap-4 flex flex-col justify-center items-center">
                <div className="text-[22px] font-[500]">
                    Bank Login
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
                    Login
                </button>
                <button
                    onClick={handleSignup}
                >
                    Go to signup
                </button>
            </div>
        </div>
    )
}

export default Login
