import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import Api from '@/utils/api';

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  const [showResetForm, setShowResetForm] = useState(false);
  const [resetUrl, setResetUrl] = useState("");
  const [email, setEmail] = useState('Elenor.OKon@hotmail.com');
  const [password, setPassword] = useState('puA5IQK3VGxu5ES');
  const [passwordConfirmation, setPasswordConfirmation] = useState('puA5IQK3VGxu5ES');

  const _forgetPassword = async (e) => {
    e.preventDefault();
    try {
      const data = await Api.post(
        'user/forgot-password',
        JSON.stringify({ email }),
        {
          headers: {
            'Content-Type': 'application/json'
          },
        }
      ).then(res => res.data);
      alert(data.message);
      setShowResetForm(true);
      setResetUrl(`user/reset-password/${data.id}/${data.passwordResetCode}`);
    } catch(err) {
      alert('Error occur');
    }

  }

  const _resetPassword = async (e) => {
    e.preventDefault();
    try {
      const data = await Api.post(
        resetUrl,
        JSON.stringify({ password, passwordConfirmation }),
        {
          headers: {
            'Content-Type': 'application/json'
          },
        }
      ).then(res => res.data);
      alert(data.message);    
    } catch(err) {
      alert('Error');
    }
  }

  return (
    <form
      // onSubmit={handleSubmit}
      className="container"
      style={{ width: '540px' }}
    >
      {!showResetForm &&
        <>
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
            <p className="control has-text-centered">
              <button onClick={(e) => _forgetPassword(e)} className="button is-success">
                Forget Password
              </button>
            </p>
          </div>
        </>
      }
      {showResetForm &&
        <>
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
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Confirm Password"
                required
                value={passwordConfirmation}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="mdi mdi-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-text-centered">
              <button onClick={(e) => _resetPassword(e)} className="button is-success">
                Reset Password
              </button>
            </p>
          </div>
        </>
      }
    </form>
  );
};

export default ResetPasswordForm;
