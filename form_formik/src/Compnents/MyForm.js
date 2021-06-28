import React, { useState } from "react";
import "../App.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Loader from "./Loader";

function MyForm() {
  const [statusCode, setStatusCode] = useState();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: ""
  };

  let sendUserData = (userData) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
        rePassword: userData.rePassword
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        setStatusCode(response.status);
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  let onSubmit = (value) => {
    setLoading(true);
    sendUserData(value);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This feild is requird"),
    lastName: Yup.string().required("This feild is requird"),
    email: Yup.string()
      .email("Invaild email format")
      .required("This feild is requird"),
    password: Yup.string().required("This feild is requird"),
    rePassword: Yup.string().required("This feild is requird")
  });

  if (statusCode === 201)
    return (
      <div>
        <h1>You are register!</h1>
        <button onClick={() => setStatusCode("")}>Back Registration</button>
      </div>
    );

  return (
    <div className="formik-container">
      <Loader loading={loading}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="input-container error">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" id="firstName" name="firstName" />
              <ErrorMessage name="firstName" />
            </div>

            <div className="input-container error">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" id="lastName" name="lastName" />
              <ErrorMessage name="lastName" />
            </div>

            <div className="input-container error">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" />
            </div>

            <div className="input-container error">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" />
            </div>

            <div className="input-container error">
              <label htmlFor="rePassword">RePassword</label>
              <Field type="password" id="rePassword" name="rePassword" />
              <ErrorMessage name="rePassword" />
            </div>

            <button type="submit">Register</button>
          </Form>
        </Formik>
      </Loader>
    </div>
  );
}

export default MyForm;
