import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
// import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";


function SignInForm() {
    const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignInData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});
    // to display error

    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
          ...signInData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // prevents refresh
        try {
            const { data } = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user);
            // post and change values and save it in a var  
            history.push('/signin');
        } catch(e){
            setErrors(e.response?.data);
            //if response is defined throw error
            //if not looking for data + no error
        }
    }


  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>

          <Form onSubmit= { handleSubmit }>
            {/* <Form.Group controlId="formBasicEmail"> */}
            <Form.Group controlId="username">
                {/* <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" /> */}
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control 
                    className={styles.Input} 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    value={username}
                    onChange={handleChange} />
            </Form.Group>
            {errors.username?.map((message, idx) => (
                //errors. is from Alert bootstrap component
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control 
                    className={styles.Input} 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button className={styles.Submit} variant="primary" type="submit">
                Sign In
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="dark" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Already have an account? <span>Sign up</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/ddigiimwd/image/upload/v1686743298/the%20shop/pixel-gf6319909e_1280_iniejz.png"
          }
        />
      </Col>
    </Row>
  );
}

export default SignInForm;