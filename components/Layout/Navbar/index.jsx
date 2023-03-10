import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';
import NavLink from './NavLink/';

import actions from '../../../redux/actions/';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  return (
    <div className="tabs is-centered">
      <ul>
        <Link href="/">
          Home
        </Link>
        <NavLink href="/register" privateRoute={false}>
          Register
        </NavLink>        
        <NavLink href="/login" privateRoute={false}>
          Login
        </NavLink>
        <NavLink href="/resetpassword" privateRoute={false}>
          ResetPassword
        </NavLink>
        <Link href="/user">
          Profile
        </Link>
        {isAuthenticated && (
          <li onClick={() => dispatch(actions.deauthenticate())}>
            <a>Log Out</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
