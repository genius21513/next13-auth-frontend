import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import Api from '@/utils/api';
import Fakerator from 'fakerator';

const fakerator = new Fakerator();

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [verifyUrl, setVerifyUrl] = useState();
  const [firstName, setFirstName] = useState(fakerator.names.firstName());
  const [lastName, setLastName] = useState(fakerator.names.lastName());
  const [middleName, setMiddleName] = useState(fakerator.names.firstNameM());
  const [email, setEmail] = useState(fakerator.internet.email());
  const [password, setPassword] = useState("asdasdasd");
  const [passwordConfirmation, setPasswordConfirmation] = useState("asdasdasd");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await Api.post(
        'user/register',
        JSON.stringify({
          firstName,
          lastName,
          middleName,
          email,
          password,
          passwordConfirmation
        }),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(res => res.data)

      alert(data.message);
      setVerifyUrl(`user/verify/${data.id}/${data.verificationCode}`);
    } catch(err) {
      alert('Error occur');
    }
  };

  const verifyUser = async (e, url) => {
    e.preventDefault();
    try {
      const data = await Api.get(url).then(res => res.data);
      alert(data.message);
    }catch(err) {
      alert('Error occur');
    }
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ width: '540px' }}
    >
      {
        verifyUrl &&
        <div className="content">
          <h3>Please, activate your account with this link.</h3>
          <button className="button is-success" onClick={(e) => verifyUser(e, verifyUrl)}> Verify User</button>
          {/* <a href={verifyUrl}> {verifyUrl} </a> */}
        </div>
      }

      {
        !verifyUrl && 
        <>
        <div className="field">        
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="mdi mdi-text-box-edit"></i>
            </span>
          </p>
        </div>
        <div className="field">        
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="mdi mdi-text-box-edit"></i>
            </span>
          </p>
        </div>
        <div className="field">        
          <p className="control has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Middle Name"
              required
              value={middleName}
              onChange={e => setMiddleName(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="mdi mdi-text-box-edit"></i>
            </span>
          </p>
        </div>
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
              <i className="mdi mdi-lock-open"></i>
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
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
            <span className="icon is-small is-left">
              <i className="mdi mdi-lock-open"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-text-centered">
            <button type="submit" className="button is-success">
              Register
            </button>
          </p>
        </div>
        </>
      }
    </form>
  );
};

export default RegisterForm;
