import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import Api from '@/utils/api';

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('Elenor.OKon@hotmail.com');
  const [password, setPassword] = useState('puA5IQK3VGxu5ES');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // dispatch(actions.authenticate({ email, password }, 'login'));
    const data = await Api.post(
      'auth/session',
      JSON.stringify({
        email,
        password
      }),
      {
        headers: { 
          'Content-Type': 'application/json'
        },
      }
    ).then(res => res.data);
    alert(data.message);
    // localStorage.setItem("user". data.acc)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ width: '540px' }}
    >
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="mdi mdi-email"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input
            className="input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span className="icon is-small is-left">
            <i className="mdi mdi-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-text-centered">
          <button type="submit" className="button is-success">
            Login
          </button>
        </p>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
