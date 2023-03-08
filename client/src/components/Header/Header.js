import React, { useEffect, useState } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/profile', {
      credentials: 'include',
    }).then(res => {
      res.json().then(user => {
        setUsername(user.username);
      });
    });

  }, []);

  const logout=()=>{
    fetch('http://localhost:5000/logout',{
      credentials:'include',
      method:'POST',
    });
    setUsername(null);
  };


  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
          <Link to='/create'>Create new post</Link>
          <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

      </nav>
    </header>
  )
}

export default Header
