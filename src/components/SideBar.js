import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css/'
// import 'bootstrap-icons/font/bootstrap-icons.js'
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/SideBar.module.css";


// const SideBar = ({children}) => {
const SideBar = () => {
    const item = [
        {
            path: "/products",
            name: "products",
            icon: <i class="fas fa-store"></i>
        },
        {
            path: "/properties",
            name: "properties",
            icon: <i class="fas fa-house"></i>
        },
        {
            path: "/about",
            name: "about",
            icon: <i class="fas fa-info-circle"></i>
        },

    ]
  return (
    <div className={styles.Container}>
        <div className={styles.SideBar}>
            <div className='top-section'>
                {/* <h1>Logo</h1> */}
                <div className='styles.bars'>
                    <i class="fas fa-hamburger"></i>
                </div>
                {
                   item.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           {/* <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div> */}
                       </NavLink>
                   ))
               }

            </div>
        </div>
        {/* <main>{children}</main> */}
    </div>
  )
}

export default SideBar
