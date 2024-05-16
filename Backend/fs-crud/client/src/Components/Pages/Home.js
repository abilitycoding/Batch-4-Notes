import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { MdSystemUpdateAlt, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BasicExample() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  console.log("users: ", users);

  const getData = async () => {
    const URL = "http://localhost:5000/get";
    await axios
      .get(URL)
      .then((res) => {
        console.log(res);
        setUsers(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = (user) => {
    // console.log(user);
    navigate("/update", { state: user });
  };

  const handleDelete = async (id) => {
    const URL = `http://localhost:5000/delete`;
    const config = {
      data: {
        _id: id
      }
    };
    await axios
      .delete(URL, config)
      .then((res) => {
        console.log(res.status === 200);
        if (res.status === 200) {
          toast("Successfully Deleted", {
            type: "error",
            autoClose: 2000,
            pauseOnHover: true
          });
          setUsers(users.filter((user) => user._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="py-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Profile</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={user.avatar}
                  alt=" "
                  width={40}
                  className="rounded-circle"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.phone}</td>
              <td className="d-flex gap-3">
                <MdSystemUpdateAlt
                  onClick={() => handleUpdate(user)}
                  className="fs-3 text-info"
                />
                <MdDelete
                  onClick={() => handleDelete(user._id)}
                  className="fs-3 text-danger"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </Container>
  );
}

export default BasicExample;