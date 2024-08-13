import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../../../thunk/LoginThunk';
import { clearMessage } from '../../../slices/MessageSlice';
import LoginForm from '../forms/LoginForm';
import { Helmet } from 'react-helmet';

import './Styles.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const HandleSubmittedForm = (formData) => {
    const { username, password } = formData;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate('/news'); // Change this to NewsList
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/news" />; // Change this to NewsList
  }

  return (
    <section className="BgImage min-vh-100">
      <Helmet>
        <title>Login - News Aggregator</title>
      </Helmet>
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="col-md-12 LoginForm">
              <div className="card card-container">
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <img src={process.env.PUBLIC_URL + '/images/userAvatar.jpg'} alt="profile-img" className="UserAvatar" />
                {message && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {message}
                  </div>
                )}
                <LoginForm onSubmit={HandleSubmittedForm} loading={loading} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;