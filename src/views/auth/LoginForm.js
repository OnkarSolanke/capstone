import React,{useState} from "react";
import { useHistory } from "react-router-dom";

import {
  Button,
  Card,
  Form,
  Row,
  Col,
} from "react-bootstrap";

import Auth from 'services/AuthService';
import { Redirect } from "react-router";

const LoginForm = () => {
  const [username,setUserName] = useState("");
  const [password,setPassword] = useState("");
  let history = useHistory();
  async function login(){
    let credentials = { username,password};
    const result = await Auth.doUserLogin(credentials);
    if(result){
      const ab = Auth.handleLoginSuccess(result,false);
      if(result.user){
        switch (result.user.type) {
          case "ADMIN":
            history.push("/admin/dashbord");
            break;
          case "VENDOR":
            history.push("/vendor/dashbord");
            break;
          default:
            break;
        }
      }
    }
  }
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
      <Card>
        <Card.Header>
          <Card.Title as="h4">Log In</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" 
                placeholder="Enter email" 
                value={username}
                onChange = { (e) => setUserName(e.target.value) }
                />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" 
                placeholder="Password" 
                value={password}
                onChange = { (e) => setPassword(e.target.value) }
                />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="defaultChecked2"/>
              <label class="custom-control-label" for="defaultChecked2">Remember me</label>
            </div>
            </Form.Group>
            <Button variant="primary" type="button" onClick={login}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    
  );
};

export default LoginForm;