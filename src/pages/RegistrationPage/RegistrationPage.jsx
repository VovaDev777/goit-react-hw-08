import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too Short!")
    .max(50, "Your name is too Long!")
    .required("This field is required"),
  number: Yup.string()
    .min(2, "Your number is too Short!")
    .max(25, "Your number is too Long!")
    .required("This field is required"),
  password: Yup.string()
    .min(2, "Your number is too Short!")
    .max(25, "Your number is too Long!")
    .required("This field is required"),
});

const RegistrationPage = () => {
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            name: "",
            mail: "",
            password: "",
          }}
          // onSubmit={handleSubmit}
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
                  <Field type="text" name="mail" />
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
