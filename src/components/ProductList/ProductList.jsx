import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function ProductList({ cusID, SubCats }) {
  const [ product, setProduct ] = useState([]);
  const [ records, setRecords] = useState([]);
 
   useEffect(()=>{
        axios.get(`http://localhost:1337/api/vehicles?${SubCats.map(
          (item) => `&[filters][sub_categories][id][$eq]=${item}`)}`,
          {Authorization: "bearer" + process.env.REACT_APP_API_TOKEN}
          )
        .then(response=> {
          setProduct(response.data.data);
          setRecords(response.data.data);
        })
        .catch(error=>console.log(error));
   },[cusID, SubCats])
   
    const filterVIN = (event) => {
      setRecords(product.filter(filter => filter.attributes.vin.toLowerCase().includes(event.target.value)))
    }
    const filterTitle = (event) => {
      setRecords(product.filter(filter => filter.attributes.name.toLowerCase().includes(event.target.value)))
    }
   return(
    
    <div className="products">
      <div className="search-bar">
        <h3>Products</h3>
        <input type="text" className="form-control" onChange={filterVIN} placeholder="Search VIN..."/>
        <input type="text" className="form-control-1" onChange={filterTitle} placeholder="Search Title..."/>
        <table className="table">
          <thead>
            <tr>
              <th>VIN</th>  
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {
              records.map((item, id) => (
                <tr key={id}>
                  <td>{id+1} </td>
                  <td>{item.attributes.vin}</td>
                  <td>
                    {item.attributes.name}
                    <Link to={`/product/${item.id}`}>
                      <h3>View Details</h3>
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      
    </div>
  )
    

}

export default ProductList;