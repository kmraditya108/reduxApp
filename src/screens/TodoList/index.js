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
  OverlayTrigger,
  Popover
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducer/todoSlice";
import { BsPerson, BsLock, BsYinYang } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

const popover = () => {
  return(
  <Popover id="popover-basic">
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);
  }

function TodoList() {
  const todoLists = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [isAddNewVisible, setIsAddNewVisible] = useState(false);
  const [isNewTodoSubmitEnable, setIsNewTodoSubmitEnable] = useState(false);
  const [showAssigner, setShowAssigner] = useState(false);

  useEffect(() => {
    if (title && description) {
      setIsNewTodoSubmitEnable(true);
    } else {
      setIsNewTodoSubmitEnable(false);
    }
  }, [title, description]);

  const addTodoHandler = () => {
    dispatch(addTodo({ title: title, description: description }));
  };

  return (
    <Container>
      <Row className="mb-4 pb-2 a-center" style={styles.containerRow}>
        <Col className="font-bolder color-purple">TODO Lists</Col>
        <Col style={styles.newEmp}>
          <Button
            className="bg-purple border-purple"
            onClick={() => setIsAddNewVisible(!isAddNewVisible)}
          >
            Add TODOs
          </Button>
        </Col>
      </Row>
      {/* <Button onClick={() => addEmployeeHandler()}>Add employee</Button> */}
      {todoLists &&
        todoLists.map((val, key) => {
          return (
            <Stack
              direction="horizontal"
              className="mb-2 color-purple font-bolder l-space-84 border-purple a-center b-r-5"
            >
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="m-2 p-1 w-100"
              >
                {/* <p >{val.title}</p>
                <p >{val.title}</p> */}
                <p className="color-purple font-bold f-15 m-0 l-space-84">
                  {val.title}
                </p>
                <p className="color-purple font-400 f-12 m-0 l-space-84">
                  {val.description}
                </p>
              </div>
              <div className="p-3 pt-0 pb-0 bg-white">
                <a
                  onClick={() => setShowAssigner(!showAssigner)}
                  className="color-purple font-bold f-12 m-0 l-space-84"
                >
                  assign
                </a>
              </div>
              {showAssigner && (
                <div className="p-3 pt-0 pb-0 bg-white">
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover()}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Title"
                      aria-label="title"
                      aria-describedby="basic-addon1"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </InputGroup>
                  </OverlayTrigger>
                </div>
              )}
            </Stack>
          );
        })}

      <Collapse in={isAddNewVisible}>
        <Card className="border-purple mt-4">
          <Card.Body>
            <Card.Title className="color-purple t-align-c">New TODO</Card.Title>

            {/* <Form.Label
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
            </InputGroup> */}

            <Form.Label
              htmlFor="inputPassword5"
              style={{ ...styles.inputFieldLebel }}
              className="color-purple"
            >
              Title *
            </Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Title"
                aria-label="title"
                aria-describedby="basic-addon1"
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>

            <Form.Label
              htmlFor="inputPassword5"
              style={{ ...styles.inputFieldLebel }}
              className="color-purple"
            >
              Descrition *
            </Form.Label>
            <InputGroup>
              <Form.Control
                placeholder="Description here..."
                as="textarea"
                aria-label="With textarea"
                onChange={(e) => setDescription(e.target.value)}
              />
              {/* <Form.Control
                placeholder="Software developer"
                aria-label="Software developer"
                aria-describedby="basic-addon1"
                onChange={(e) => setPosition(e.target.value)}
              /> */}
            </InputGroup>
            <Button
              disabled={!isNewTodoSubmitEnable}
              className="w-100 mt-4 bg-purple border-purple"
              onClick={() => addTodoHandler()}
            >
              Add
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
  },
  rowcontainer: {
    heigth: "100vh",
  },
  newEmp: {
    justifyContent: "flex-end",
    display: "flex",
  },
  inputFieldLebel: {
    color: "#6d6d6d",
    fontSize: "12px",
  },
};

export default TodoList;
