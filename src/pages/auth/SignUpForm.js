import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form>
            {/* <Form.Group controlId="formBasicEmail"> */}
            <Form.Group controlId="username">
                {/* <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" /> */}
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control className={styles.Input} type="text" placeholder="Username" name="username" />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control className={styles.Input} type="password" placeholder="Password" name="password" />
            </Form.Group>
            <Form.Group controlId="password2">
                <Form.Label className="d-none">Confirm Password</Form.Label>
                <Form.Control className={styles.Input} type="password" placeholder="Confirm Password" name="password2" />
            </Form.Group>

            <Button className={styles.Submit} variant="primary" type="submit">
                Sign Up
            </Button>
          </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://cdn.pixabay.com/photo/2022/06/25/18/55/pixel-art-7284052_1280.png"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;