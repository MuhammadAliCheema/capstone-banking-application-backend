import { useNavigate } from "react-router-dom"

import { useUser } from "../hooks/user"

import Loader from "./Loader"

const Auth = ({
    auth,
    children,
}) => {
    const { user, isGettingUser } = useUser()
    const navigate = useNavigate()

    if(isGettingUser) return <div className="w-full h-screen flex justify-center items-center"><Loader /></div>
    else if((auth && user?._id) || (!auth && !user?._id)) return <>{children}</>
    else if(auth && !user?._id) navigate("/login")
    else if(!auth && user?._id) navigate("/dashboard")
    return <></>
}

export default Auth
