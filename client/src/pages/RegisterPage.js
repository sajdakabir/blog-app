import { useState } from 'react';
import {Navigate} from 'react-router-dom';
export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password,setPassword]=useState('');
    const [redirect,setRedirect]=useState(false);
    async function regster(event){
        event.preventDefault();
       
        const result=await fetch('http://localhost:5000/register',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
        })
        if(result.status===200){
            // alert("Registation successful.")
            setRedirect(true);
        }
        else{
            alert("Registation failed.");
        }
    }
    if(redirect){
        return <Navigate to={'/login'} />
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