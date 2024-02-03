import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./menu.scss";


const Menu = () => {
    
    return(
        <div className="menu">
            <div className="item">
               
                <span className="title"></span> 
                <Link to="/home" className="listItem">
                    <img src="/home.svg" alt="" />
                    <span className="listItemTitle">Home</span>
                </Link>
                <Link to="/profile" className="listItem">
                    <img src="/profile.svg" alt="" />
                    <span className="listItemTitle">Profile</span>
                </Link>
                <Link to="/users" className="listItem">
                    <img src="/user.svg" alt="" />
                    <span className="listItemTitle">Users</span>
                </Link>
                <Link to="/products/1"className="listItem">
                    <img src="/product.svg" alt="" />
                    <span className="listItemTitle">Products</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu;