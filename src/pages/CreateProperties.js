import React, { useState } from 'react'
import { useGetIdentity } from 'react-admin';
// import reactRouterDom from 'react-router-dom';
import { NavLink, Form, Card, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import PropertyForm from '../components/common/PropertyForm';
// import styles from "../styles/PropertyForm.module.css";
import styles from "../styles/PropertiesForm.module.css";
// import styles from "../styles/PieChart.module.css";




const CreateProperties = () => {
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
    const onFinishHandler = () => {}


  return (
    

    <Container className={styles.Form}>
        <Card>
            <PropertyForm
                title={'Property Form'}
                value={52}
                
            />
        </Card>
    </Container>
  

  )
}

export default CreateProperties