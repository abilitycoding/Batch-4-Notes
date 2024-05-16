import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [avatar, setAvatar] = useState("");

  const formData = {
    name: name,
    email: email,
    phone: phone,
    avatar: avatar
  };
  console.log(formData);

  const postData = async (e) => {
    e.preventDefault();

    const URL = "https://662a64ec67df268010a3bbcc.mockapi.io/sample/data";
    await axios
      .post(URL, formData)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          toast("Successfully Registered", {
            type: "error",
            autoClose: 2000,
            pauseOnHover: true
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Body d-flex justify-content-center align-items-center">
      <Form onSubmit={postData} className=" shadow-lg p-5 rounded-4">
        <h3 className="text-center mb-4">Register</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            type="text"
            placeholder="Avatar Image"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Register;
