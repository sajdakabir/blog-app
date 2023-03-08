import { useContext, useState } from "react";
import {Navigate} from 'react-router-dom';
import { userContext } from "../context/UserContext";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect,setRedirect]=useState(false);
    const{setUserInfo}=useContext(userContext);
    const login= async(event)=>{
        event.preventDefault();
        const result=await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers: {'Content-Type':'application/json'},
            credentials:'include', //include the cookie
        });
        if(result.ok){
            result.json().then(userInfo=>{
                setUserInfo(userInfo);
                setRedirect(true);
            })
            
        }else{
            alert('Wrong credentials!')
        }
        
    }
    if(redirect){
        return <Navigate to={'/'} />
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