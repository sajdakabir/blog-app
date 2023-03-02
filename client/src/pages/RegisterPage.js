import { useState } from 'react'
export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password,setPassword]=useState('');
    async function regster(e){
        e.preventDefault();
       
        const result=await fetch('http://localhost:5000/register',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        })
        if(result.status!==200){
            alert("Registation failed.");
        }
        else{
            alert("Registation successful.")
        }
    }
    return (
        <form className="register" onSubmit={regster}>
            <h1>Register</h1>
            <input type="text"
             placeholder="username"
             value={username}
             onChange={e=>setUsername(e.target.value)}
             />
            <input type="password" placeholder="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
             />
            <button >Register</button>
        </form>
    )
}