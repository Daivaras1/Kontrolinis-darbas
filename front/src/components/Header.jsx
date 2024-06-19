import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [user, setUser] = useState('');

  const navigate = useNavigate();
  const logoutHandler = () => {
    sessionStorage.removeItem('user');
    navigate('/login');
  }

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    setUser(user);
  }, [])
  
  return (
    <div>
      <div>
        <h1>WeJourney</h1>
      </div>
      {user ? <div onClick={() => logoutHandler()}><p>Log out</p></div> : <div>
        <Link to="/login">
          <p>Login</p>
        </Link>
        <Link to="/registration" >
          <p>Register</p>
        </Link>
      </div>}
    </div>
  );
}

export default Header;
