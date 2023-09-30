import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styles } from "./styles";
import EmployeeList from "../common/EmployeeList";
import TodoList from "../TodoList";

export default function HomeContainer() {
  return (
    <Container style={styles.container}>
      <Row style={{textAlign:'center', justifyContent:'center', borderBottom:'1px solid gray', padding:'30px 0px 30px 0', marginBottom: 40}}>
        Hello Home screen
      </Row>
      <Row style={{ ...{ height: "100vh", justifyContent:'space-around' } }}>
        <Col sm={12} md={12} lg={5}>
          <EmployeeList />
        </Col>
        <Col sm={12} md={12} lg={5}>
          <TodoList />
        </Col>
      </Row>
    </Container>
  );
}
