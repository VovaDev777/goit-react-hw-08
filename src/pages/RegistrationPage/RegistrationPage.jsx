import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOps";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too Short!")
    .max(50, "Your name is too Long!")
    .required("This field is required"),
    email: Yup.string()
    .min(2, "Your number is too Short!")
    .max(25, "Your number is too Long!")
    .required("This field is required"),
  password: Yup.string()
    .min(2, "Your number is too Short!")
    .max(25, "Your number is too Long!")
    .required("This field is required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  }
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            name: "",
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
                  <label>Username</label>
                  <Field type="text" name="name" />
                </div>
                <div>
                  <label>Email</label>
                  <Field type="text" name="email" />
                </div>
                <div>
                  <label>Password</label>
                  <Field type="text" name="password" />
                </div>
              </div>
              <button type="submit">Register</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationPage;
