import { useState } from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';
import Api from '@/utils/api';
import Fakerator from 'fakerator';

const fakerator = new Fakerator();

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showVerify, setShowVerify] = useState(null);
  const [firstName, setFirstName] = useState(fakerator.names.firstName());
  const [lastName, setLastName] = useState(fakerator.names.lastName());
  const [middleName, setMiddleName] = useState(fakerator.names.firstNameM());
  const [email, setEmail] = useState(fakerator.internet.email());
  const [password, setPassword] = useState("asdasdasd");
  const [passwordConfirmation, setPasswordConfirmation] = useState("asdasdasd");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = await Api.post('user/register',
        JSON.stringify({
          firstName,
          lastName,
          middleName,
          email,
          password,
          passwordConfirmation
        }) 
      ).then(res => res.data)

    const url = `https://auth.yurilima.uk/api/user/verify/${data.id}/${data.verificationCode}`;
    setShowVerify(url);
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ width: '540px' }}
    >
      {
        showVerify &&
        <div className="content">
          <h3>Please, activate your account with this link.</h3>
          <a href={showVerify}>
          {showVerify}
          </a>
        </div>
      }
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
    </form>
  );
};

export default RegisterForm;
