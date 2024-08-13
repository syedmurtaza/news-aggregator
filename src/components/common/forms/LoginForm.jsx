import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ onSubmit, loading }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validateFormData = Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateFormData}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-outline mb-4">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <Field name="username" type="text" className="form-control" />
          <ErrorMessage name="username" component="div" className="text-danger" />
        </div>

        <div className="form-outline mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <Field name="password" type="password" className="form-control" />
          <ErrorMessage name="password" component="div" className="text-danger" />
        </div>

        <div className="form-outline mb-4">
          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;