import React from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css/'
// import 'bootstrap-icons/font/bootstrap-icons.js'


const SideBar = () => {
    const item = [
        {
            path: "/products",
            name: "products",
            icon: ""
        },
        {
            path: "/properties",
            name: "properties",
            icon: ""
        },
        {
            path: "/about",
            name: "about",
            icon: ""
        },

    ]
  return (
    <div className='container-fluid'>SideBar</div>
  )
}

export default SideBar
