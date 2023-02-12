import verifyToken from '../getInitialProps/verifyToken';
import getUser from '../getInitialProps/getUser';
import Layout from '../components/Layout/';
import Api from '@/utils/api';
import { useState, useEffect } from 'react';

const Whoami = ({ _user }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    if(!token) return;
    try {
      const data = await Api.get(
        'user/current-user',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).then(res => res.data);
      // console.log(data.user);
      setUser(data.user);      
    } catch(err) {
      
    }
  }

  // if(!user) {
  //   return <>Loading...</>
  // }

  return (
    <Layout title="Who Am I">
      {(user && (
        <h3 className="title is-3">
          You are logged in as {' '}
          <strong className="is-size-2 has-text-primary">
            {user.email}
          </strong>
        </h3>      
      )) || <h3 className="title is-3 ">You aren't logged</h3>}
    </Layout>
  );
};

// Whoami.getInitialProps = async ctx => {
//   verifyToken(ctx);
//   const user = await getUser(ctx);
//   return { user };
// };

export default Whoami;
