import React, { useEffect, useState } from "react";
// import { redirect, redirectDocument } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from "react-bootstrap";
import { styles } from "./styles";
import logo from "../../logo.svg";

export default function LoginScreen() {
  const navigate = useNavigate();
  // const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username >>> ", username);

  const onSignIn = () => {
    navigate("/home");
    console.log("onSignIn clicked.....");
  }
  return (
    <Container>
      <Container
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          height={250}
          width={250}
        />
      </Container>
      <h3 className="mb-4">Sign In</h3>
      <Form.Label
        htmlFor="inputPassword5"
        style={{ ...styles.inputFieldLebel }}
      >
        User name
      </Form.Label>
      <Form.Control
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        id="username"
        aria-describedby="passwordHelpBlock"
        placeholder="User name"
      />

      <Form.Label
        htmlFor="inputPassword5"
        className="mt-3"
        style={{ ...styles.inputFieldLebel }}
      >
        Password
      </Form.Label>
      <Form.Control
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="***********"
      />
      <p
        style={{ textAlign: "right", color: "#66346e", textShadow: "initial" }}
        className="mt-4"
      >
        Forgot password?
      </p>

      <div className="mb-3">
        <Form.Check // prettier-ignore
          type={"checkbox"}
          id={`default-checkbox`}
          label={
            <p style={{ fontWeight: "500" }}>
              I agree to all{" "}
              <h6 style={{ color: "#66346e", display: "contents" }}>
                Terms & Conditions
              </h6>
            </p>
          }
        />
      </div>

      <Button
        className="mb-4"
        variant="primary"
        size="lg"
        style={{ ...styles.loginBtn }}
        onClick={onSignIn}
      >
        Sign In
      </Button>

      <div className="mt-4">
        <p
          style={{
            textAlign: "center",
            fontSize: "17px",
            fontWeight: "500",
            letterSpacing: 0.69,
          }}
        >
          Don't have an account?{" "}
          <h5 style={{ color: "#66346e", display: "contents" }}>Sign Up</h5>
        </p>
      </div>
    </Container>
  );
}
