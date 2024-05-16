import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button, Card } from "react-bootstrap";

function BasicExample() {
  const [users, setUsers] = useState([]);

  console.log("users: ", users);

  const getData = async () => {
    const URL = "https://662a64ec67df268010a3bbcc.mockapi.io/sample/data";
    await axios
      .get(URL)
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="d-flex flex-wrap gap-3 py-5 justify-content-center">
      {users.map((user) => (
        <Card style={{ width: "18rem" }} key={user.id} className="shadow">
          <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Button variant="primary">{user.phone}</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default BasicExample;