import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css/'
// import 'bootstrap-icons/font/bootstrap-icons.js'
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    const item = [
        {
            path: "/products",
            name: "products",
            icon: "test1"
        },
        {
            path: "/properties",
            name: "properties",
            icon: "test2"
        },
        {
            path: "/about",
            name: "about",
            icon: "test3"
        },

    ]
  return (
    <div className='container'>
        <div className='sidebar'>
            <div className='top-section'>
                <h1>Logo</h1>
                <div className='arrow'>
                    <h1>Pfeil</h1>
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
        
    </div>
  )
}

export default SideBar
