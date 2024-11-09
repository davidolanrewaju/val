import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../layout/Footer/Footer';
import Button from '../components/Button/Button';
import TextInput from '../components/Forms/TextInput';
import MiniNav from '../layout/Navbar/MiniNav/MiniNav';
import NavigationBar from '../layout/Navbar/NavigationBar';

import { forgotPassword } from '../reducers/authentication/authenticationSlice';

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
    setEmail('');
  };

  return (
    <div>
      <NavigationBar />
      <div className="container px-md-5 padding-top">
        <MiniNav />
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="mb-4 mb-md-5">
              <h1 className="h3 fw-medium text-uppercase">Passwords</h1>
              <p>Request a new password</p>
            </div>
            <form onSubmit={handleSubmit}>
              <TextInput label="Email:" labelClassName="text-muted" containerClassName="mb-3" className="booking-form" type="email" name="email" value={email} onChange={handleEmailChange} />

              <Button containerClassName="d-grid mt-4 mb-3" btnName="Send Password Reset Link" className="btn btn-dark text-uppercase fw-semibold" />
            </form>
          </div>
          <div className="col-12 col-lg-6">
            <div className="shadow">
              <img className="img-fluid" src="/assets/images/change-pwd.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
