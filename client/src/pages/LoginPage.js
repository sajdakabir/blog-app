import { useState } from "react"

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login= async(event)=>{
        event.preventDefault();
        const result=await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        })
    }
    return (
        <form className="login" onSubmit={login}>
            <h1>LogIn</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button>Login</button>
        </form>
    )
}