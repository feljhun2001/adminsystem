import React from "react";
import "./user.scss"
import { useUserView } from "../../pages/user/useUserView";





const Product = () => {
  const {user} = useUserView();

  if (!user || !user.attributes) {
    return null;
  }
 
  
  return (
    <div className="user">
    <div className="view">
        <div className="info">
            <div className="topInfo">
                <h1>{user?.attributes.name}</h1>
            </div>
            <div className="details">
                <div className="item">
                    <span className="itemTitle">Address:</span>
                    <span className="itemValue">{user.attributes.address}</span>
                </div>
                <div className="item">
                    <span className="itemTitle">Age:</span>
                    <span className="itemValue">{user.attributes.age}</span>
                </div>
                <div className="item">
                    <span className="itemTitle">Type of User:</span>
                    <span className="itemValue">{user.attributes.type_of_user}</span>
                </div> <div className="item">
                    <span className="itemTitle">Inventory:</span>
                    <span className="itemValue">{user?.attributes?.inventory}</span>
                </div>
            </div>
        </div>
       
        
    </div>
    <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
            <li>
                <div>
                    <p>{user.attributes.name} purchased {user.attributes.car} </p>
                    <time>4 months ago</time>
                </div>
            </li>
            <li>
                <div>
                    <p>{user.attributes.name} reviewed </p>
                    <time>4 months ago</time>
                </div>
            </li>
            <li>
                <div>
                    <p>{user.attributes.name} followed SpeedAdmin </p>
                    <time>4 months ago</time>
                </div>
            </li>
        </ul>
    </div>
</div>
  );
};

export default Product;