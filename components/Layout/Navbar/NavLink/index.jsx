import { useSelector } from 'react-redux';

import Link from 'next/link';

const NavLink = ({ href, privateRoute = false, children }) => {
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  return (
    <>
      {privateRoute === isAuthenticated && (
        <Link href={href}>
          {children}
        </Link>
      )}
    </>
  );
};

export default NavLink;
