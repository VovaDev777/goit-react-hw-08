import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/authOps";
import css from './LoginPage.module.css'

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
    dispatch(logIn(values));
    actions.resetFrom();
  };

  return (
    <div className={css.con}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={css.form}>
          <div className={css.btnCon}>
            <div className={css.fieldList}>
              <div className={css.fieldItem}>
                <label >Email</label>
                <Field type="text" name="email" />
              </div>
              <div className={css.fieldItem}>
                <label>Password</label>
                <Field type="text" name="password" />
              </div>
            </div>
            <button type="submit" className={css.btn}>Login</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
