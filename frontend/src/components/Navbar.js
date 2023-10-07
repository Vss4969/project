import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink className="navbar" exact to='/'>
            Home
          </NavLink>
        </li>

        {user ? (
          <>
            <li><i className="navbar">{user.userId}</i></li>
            <li>
              <NavLink className="navbar" to='/submissions'>
                Submissions
              </NavLink>
            </li>
            <li>
              <i className='logout' onClick={handleClick}>Logout</i>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className="navbar" to='/signup'>
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar" to='/login'>
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
