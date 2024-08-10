import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOps";

const UserSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Your name is too Short!")
    .max(50, "Your name is too Long!")
    .required("This field is required"),
  password: Yup.string()
    .min(2, "Your number is too Short!")
    .max(25, "Your number is too Long!")
    .required("This field is required"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
    actions.resetFrom();
  }

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form>
          <div>
            <div>
              <div>
                <label>Email</label>
                <Field type="text" name="email" />
              </div>
              <div>
                <label>Password</label>
                <Field type="text" name="password" />
              </div>
            </div>
            <button type="submit">Login</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
