import React from 'react';
import { Button } from 'react-bootstrap';
import { CommonButtonProps } from 'react-bootstrap/esm/Button';
import styles from "/workspaces/the-shop/src/styles/Properties.module.css";
import Properties from '../../pages/Properties';



const CustomButton = ({type, title, handleClick, icon}) => {
  return (
    <button onClick={handleClick} className={styles.AddProp}>
        {icon}
        {title}
    </button>
  )
}

export default CustomButton