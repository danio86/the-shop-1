import React, { useState } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css/'
// import 'bootstrap-icons/font/bootstrap-icons.js'
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/SideBar.module.css";


// const SideBar = ({children}) => {
const SideBar = () => {
    const [ expanded, setExpanded] = useState(false);
    // const { expanded, setExpanded, ref } = useClickOutsideToggle();
    const toggle = () => setExpanded (!expanded);

    const item = [
        {
            path: "/products",
            name: "products",
            icon: <i class="fas fa-store"></i>,
            text: "Products",
        },
        {
            path: "/properties",
            name: "properties",
            icon: <i class="fas fa-house"></i>,
            text: "Properties",
        },
        {
            path: "/about",
            name: "about",
            icon: <i class="fas fa-info-circle"></i>,
            text: "About",
        },

    ]
  return (
    <div className={styles.Container}>
        <div className={styles.SideBar} style={{width: expanded ? "200px" : "50px"}}>
            <div className={styles.TopSection}>
            {/* <h1 style={{display: expanded ? "block" : "none"}} className="logo">Logo</h1> */}
                {/* <div 
                    className={styles.Hamburger}
                    onClick={toggle}>
                    {expanded ? <i class="fas fa-arrow-circle-left"></i> : <i class="fas fa-arrow-circle-right"></i>}
                </div> */}
                {
                   item.map((item, index)=>(
                       <NavLink 
                            to={item.path} 
                            key={index} 
                            className={styles.Link} 
                            activeclassName="active">
                           <div 
                                // style={{marginLeft: expanded ? "50px" : "0px"}}
                                className={styles.Icon}>{item.icon} 
                                <h4 
                                    style={{display: expanded ? "block" : "none"}}
                                    className={styles.Text}>{item.text}</h4>
                            </div>
                           {/* <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div> */}
                       </NavLink>
                   ))
               }
               <div 
                    className={styles.Hamburger}
                    onClick={toggle}>
                    {expanded ? <i class="fas fa-arrow-circle-left"></i> : <i class="fas fa-arrow-circle-right"></i>}
                </div>

            </div>
        </div>
        {/* <main>{children}</main> */}
    </div>
  )
}

export default SideBar
