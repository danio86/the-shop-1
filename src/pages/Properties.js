import React, {useEffect, useList} from 'react'
import { Container } from 'react-bootstrap';
// import {useNavigate, NavLink} from "react-router-dom";
import {NavLink} from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import CustomButton from '../components/common/CustomButton';
import PropertyCard from '../components/common/PropertyCard';
import styles from '../styles/Properties.module.css';


const Properties = () => {

    const history = useHistory();
    const handleClick = (event) => {
            let path = "/properties/create"; 
            history.push(path);   
      };

  return (
    // <Container className={styles.Properties}>
    //     <div>Properties!</div>
    //     <div>
    //     <CustomButton
    //         title= {'Add Properties'}
    //         onClick={handleClick}
    //         icon= {<i class="fas fa-plus-circle"></i>}
    //     />
    //     </div>
    // </Container>,
    <Container className={styles.Properties}>
        <div>Properties</div>
    <button
        className={styles.AddProp}
        onClick={handleClick}>
            <i class="fas fa-plus-circle"><p>Add Properties</p></i>
    </button>
    </Container>
  )
}

export default Properties