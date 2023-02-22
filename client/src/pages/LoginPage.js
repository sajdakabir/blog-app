export default function LoginPage(){
    return(
       <form className="login">
            <h1>LogIn</h1>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
       </form>
    )
}