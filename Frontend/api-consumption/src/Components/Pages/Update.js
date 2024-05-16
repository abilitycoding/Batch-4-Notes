import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const User = useLocation().state;

  // console.log("User: ", User.id);

  const [name, setName] = useState(User.name);
  const [email, setEmail] = useState(User.email);
  const [phone, setPhone] = useState(User.phone);
  const [avatar, setAvatar] = useState(User.avatar);

  const formData = {
    name: name,
    email: email,
    phone: phone,
    avatar: avatar
  };
  console.log(formData);

  const UpdateData = async (e) => {
    e.preventDefault();
    const id = User.id;
    const URL = `https://662a64ec67df268010a3bbcc.mockapi.io/sample/data/${id}`;
    await axios
      .put(URL, formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast("Successfully Updated", {
            type: "success",
            autoClose: 2000,
            pauseOnHover: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoToHome = () => {
    navigate("/");
  };

  return (
    <div className="Body d-flex justify-content-center align-items-center">
      <Form className=" shadow-lg p-5 rounded-4">
        <h3 className="text-center mb-4">Update</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Avatar</Form.Label>
          <Form.Control
            type="text"
            placeholder="Avatar Image"
            onChange={(e) => setAvatar(e.target.value)}
            value={avatar}
          />
        </Form.Group>

        <div className="d-flex gap-3 justify-content-between">
          <Button onClick={UpdateData} variant="primary" type="submit">
            Update
          </Button>
          <Button onClick={handleGoToHome} variant="primary" type="submit">
            Go Back Home
          </Button>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Register;
