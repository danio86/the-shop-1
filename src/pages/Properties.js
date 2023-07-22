import React, {useEffect, useList} from 'react'
import { Container } from 'react-bootstrap';
import {useNavigate, NavLink} from "react-router-dom";
import CustomButton from '../components/common/CustomButton';
import PropertyCard from '../components/common/PropertyCard';
import styles from '../styles/Properties.module.css';


const Properties = () => {
  return (
    <Container className={styles.Properties}>
        {/* <div className={styles.Properties}>Properties! */}
        <div>Properties!</div>
        <div>
        <CustomButton className={styles.AddProp}
            title= {'Add Properties'}
            handleClick= {()=>{NavLink('/properties/create')}}
            icon= {<i class="fas fa-plus-circle"></i>}
        />
        </div>
    </Container>
  )
}

export default Properties