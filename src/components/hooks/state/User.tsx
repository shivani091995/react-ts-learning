import { useState } from "react"

//a common pattern

type AuthUser = {
    name: string,
    email: string
}


export const User = () => {
    //!type assertion - useState<AuthUser>({} as AuthUser) 
    // - if this is used then no need of "?"=Optional Chaining operator.

    const [user, setUser] = useState<null | AuthUser>(null); 
    //we did not specify the type here. just declared null 
    // and we do not know the user. hence typescript throws an error here.
    //hence use this <>...


    const handleLogin = () => {
        setUser({
            name: 'Shivani',
            email: 'abc@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return(
        <div>
            <button onClick={handleLogin} >Login</button>
            <button onClick={handleLogout} >Logout</button>
            <div>User name is {user?.name} </div>
            <div>Email is {user?.email} </div> 

{/* //optional chaining comes automatically here 
// since user can also be null */}
        </div>
    )
}