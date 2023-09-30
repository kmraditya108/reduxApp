import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Stack,
  Badge,
  InputGroup,
  Form,
  Collapse,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee, deleteEmployee } from "../../redux/reducer/employeeListSlice";
import { BsPerson, BsLock, BsYinYang } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

function EmployeeList() {
  const employeeList = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [id, setId] = useState();
  const [position, setPosition] = useState();
  const [isAddNewVisible, setIsAddNewVisible] = useState(false);
  const [isNewEmpSubmitEnable, setIsNewEmpSubmitEnable] = useState(false);

  useEffect(() => {
    if (name && id && position) {
      setIsNewEmpSubmitEnable(true);
    } else {
      setIsNewEmpSubmitEnable(false);
    }
  }, [name, id, position]);

  const addEmployeeHandler = () => {
    dispatch(addEmployee({ id: id, name: name, position: position }));
  };

  return (
    <Container>
      <Row className="mb-4 pb-2 a-center" style={styles.containerRow}>
        <Col className="font-bolder color-purple">Employees</Col>
        <Col style={styles.newEmp}>
          <Button
            className="bg-purple border-purple"
            onClick={() => setIsAddNewVisible(!isAddNewVisible)}
          >
            Add employee
          </Button>
        </Col>
      </Row>
      {/* <Button onClick={() => addEmployeeHandler()}>Add employee</Button> */}
      {employeeList &&
        employeeList.map((val, key) => {
          return (
            <Stack
              direction="horizontal"
              className="mb-2 color-purple font-bolder l-space-84 border-purple a-center b-r-5"
            >
              <p className="m-2 p-1 w-100">{val.name}</p>
              <div className="p-1 ms-auto bg-purple">
                <p className="color-white font-bold f-12 m-0 l-space-84">
                  Allocation
                </p>
                <Badge bg="" className="color-white font-600">
                  9 hrs
                </Badge>
              </div>
              <div className="p-3 pb-0 pt-0 bg-white " onClick={() => dispatch(deleteEmployee({id:val.id}))}>
                <MdDeleteForever style={{ fontSize: "30px" }} />
              </div>
            </Stack>
          );
        })}

      <Collapse in={isAddNewVisible}>
        <Card className="border-purple mt-4">
          <Card.Body>
            <Card.Title className="color-purple t-align-c">
              New Employee
            </Card.Title>

            <Form.Label
              htmlFor="inputPassword5"
              style={{ ...styles.inputFieldLebel }}
              className="color-purple"
            >
              Employee ID *
            </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="ID"
                aria-label="Employee ID"
                aria-describedby="basic-addon2"
                onChange={(e) => setId(e.target.value)}
              />
            </InputGroup>

            <Form.Label
              htmlFor="inputPassword5"
              style={{ ...styles.inputFieldLebel }}
              className="color-purple"
            >
              Employee Name *
            </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="name"
                aria-label="employee name"
                aria-describedby="basic-addon1"
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>

            <Form.Label
              htmlFor="inputPassword5"
              style={{ ...styles.inputFieldLebel }}
              className="color-purple"
            >
              Position *
            </Form.Label>
            <InputGroup>
              <Form.Control
                placeholder="Software developer"
                aria-label="Software developer"
                aria-describedby="basic-addon1"
                onChange={(e) => setPosition(e.target.value)}
              />
            </InputGroup>
            <Button
              disabled={!isNewEmpSubmitEnable}
              className="w-100 mt-4 bg-purple border-purple"
              onClick={() => addEmployeeHandler()}
            >
              Submit
            </Button>
          </Card.Body>
        </Card>
      </Collapse>
    </Container>
  );
}

export const styles = {
  containerRow: {
    borderBottom: "1px solid rgb(102, 52, 110)",
    alignItems: "center !important",
    // borderRadius: '5px',
    // padding: '5px'
  },
  rowcontainer: {
    heigth: "100vh",
  },
  newEmp: {
    justifyContent: "flex-end",
    display: "flex",
  },
  leftSubContainer: {
    backgroundColor: "#66346e",
  },
  rightSubContainer: {
    backgroundColor: "#fff",
  },
  inputFieldLebel: {
    color: "#6d6d6d",
    fontSize: "12px",
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "#66346e",
    border: "0px solid #66346e",
  },
};

export default EmployeeList;
