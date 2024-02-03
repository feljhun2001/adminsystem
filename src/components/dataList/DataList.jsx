import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const DataList = ({item})=> {
  
 

   return(
    
    <div className="products">
      <div className="search-bar">
       
       
        <table className="table">
          <thead>
            <tr>
              <th>VIN</th>  
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            
                 
                  <td>{item.attributes.vin}</td>
                  <td>
                    {item.attributes.name}
                    <Link to={`/product/${item.id}`}>
                      <h3>View Details</h3>
                    </Link>
                  </td>
               
              
          </tbody>
        </table>
      </div>
      
    </div>
  )
    

}

export default DataList;