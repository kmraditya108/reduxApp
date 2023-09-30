import React from "react";
import {
  Container,
  Col,
  Row,
} from "react-bootstrap";
import useWindowDimensions from "../../customHooks/useWindowDimensions";
import { styles } from "./styles";
import { BsPerson, BsLock, BsYinYang } from "react-icons/bs";
import LoginScreen from "./LoginScreen";

export default function LoginContainer() {
  const { width } = useWindowDimensions();

  return (
    <Container style={styles.container}>
      <Row style={{ ...{ height: "100vh" } }}>
        {width > 767 && (
          <Col
            xl={8}
            lg={7}
            md={7}
            sm={12}
            style={{
              ...styles.leftSubContainer,
              ...{ height: "100vh" },
            }}
          >
            Image
            <BsYinYang style={{height:'200px'}}/>
          </Col>
        )}
        <Col xl={4} lg={5} md={5} sm={12}>
          <LoginScreen/>
        </Col>
      </Row>
    </Container>
  );
}
