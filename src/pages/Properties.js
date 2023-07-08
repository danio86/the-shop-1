import React, {useEffect, useList} from 'react'
import { Container } from 'react-bootstrap';
import {useNavigate, NavLink} from "react-router-dom";
import styles from "../styles/Properties.module.css"

const Properties = () => {
  return (
    <Container className={styles.Container}>
        <div>Properties!</div>

        <button
            title={'All Properties'}
            handleClick={()=>{}}
        />
    </Container>
  )
}

export default Properties