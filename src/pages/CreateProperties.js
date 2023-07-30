import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import { useGetIdentity } from 'react-admin';
import { Link } from "react-router-dom";
import { NavLink, Form, Button, Image, Col, Row, Container, Alert, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PropertyForm from '../components/common/PropertyForm';
// import styles from "../styles/PropertyForm.module.css";
import styles from "../styles/PropertiesForm.module.css";
// import styles from "../styles/PieChart.module.css";
// import appStyles from "../../App.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSetCurrentUser } from "/workspaces/the-shop/src/contexts/CurrentUserContext";






const CreateProperties = () => {

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

    const navi = (
        <NavLink
        //   className={styles.NavLink}
        //   activeClassName={styles.Active}
          to="/posts/create">
        </NavLink> );
    // const {data: user} = useGetIdentity();
    // const [data, user] = useGetIdentity();
    const [data, setData] = useState({ hits: [] });
    const [propertyImage, setPropertyImage] = useState({name: '', url: ''})
    // const { for: {onFinish, formLoading}, register, handleSubmit } = useForm();
    // const { register, handleSubmit } = useForm();
    // const useForm =
    const handleImageChange = () => {}
    const onFinishHandler = (data: FieldValues) => {
        if(!propertyImage.name) return alert('Please select an Image!');
    }

    // await onFinish({...data, photo: propertyImage.url, email:
    //  user.email})


  return (
    
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        {/* <Container className={`${appStyles.Content} p-4 `}> */}
        <Container>
          <h1 className={styles.Header}>Property Form</h1>

          <Form onSubmit= { handleSubmit }>
            {/* <Form.Group controlId="formBasicEmail"> */}
            <Form.Group controlId="username">
                {/* <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" /> */}
                <Form.Label className="d-none">Enter Property Name</Form.Label>
                <Form.Control 
                    className={styles.Input} 
                    type="text" 
                    placeholder="Property Name" 
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
                <Form.Label className="d-none">Enter Description</Form.Label>
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
        {/* <Container className={`mt-3 ${appStyles.Content}`}> */}
        <Container>
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
        //   className={`${appStyles.FillerImage}`}
          
        //   src={
        //     "https://res.cloudinary.com/ddigiimwd/image/upload/v1686743298/the%20shop/pixel-gf6319909e_1280_iniejz.png"
        //   }
        />
      </Col>
    </Row>

    // <Container className={styles.Form}>
    //     <Card>
    //         <PropertyForm
    //             title={'Property Form'}
    //             value={52}
                
    //         />
    //     </Card>
    // </Container>
  

  )
}

export default CreateProperties