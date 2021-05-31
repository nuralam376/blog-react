import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import * as yup from "yup";
import { UserContext } from "../../../App";

function PostForm() {
  const [userId] = useContext(UserContext);
  const initialvalues = {
    title: "",
    body: "",
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("* This field is required"),
    body: yup.string().required("* This field is required"),
  });

  const onSubmit = async (data, { resetForm }) => {
    data.userId = userId;
    try {
      const response = await axios.post("/posts", data);
      if (response.status === 201) alert("Post Created successfully");
      resetForm();
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="title">Post Title</label>
        <Field
          type="text"
          name="title"
          placeholder="Post Title"
          className="form-control w-25 mx-auto"
        />
        <ErrorMessage name="title" component="div" className="text-danger" />
        <label htmlFor="title">Description</label>
        <Field
          as="textarea"
          name="body"
          placeholder="Description"
          className="form-control w-25 mx-auto"
        />
        <ErrorMessage name="body" component="div" className="text-danger" />

        <Button type="submit" variant="success" className="mt-5">
          Save
        </Button>
      </Form>
    </Formik>
  );
}

export default PostForm;
