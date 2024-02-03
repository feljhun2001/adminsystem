import axios from "axios";
import React, {useEffect, useState} from "react";
import "./users.scss"
import { Link } from "react-router-dom";


  const Users = () => {
    const [ data, setData ] = useState([]);
    const [ records, setRecords] = useState([]);
    
    useEffect(()=>{
         axios.get('http://localhost:1337/api/customers')
         .then(response=> {
           setData(response.data.data);
           setRecords(response.data.data);
         })
         .catch(error=>console.log(error));
    },[])
    const filterUserId = (event) => {
      setRecords(data.filter(filter => filter.attributes.user_id.toLowerCase().includes(event.target.value)))
    }
    const filterName = (event) => {
      setRecords(data.filter(filter => filter.attributes.name.toLowerCase().includes(event.target.value)))
    }
    return(
     <div className="users">
       <div className="search-bar">
         <h3>Users</h3>
         <input type="text" className="form-control-1" onChange={filterUserId} placeholder="Search Id..."/>
         <input type="text" className="form-control" onChange={filterName} placeholder="Search Name..."/>
         <table className="table">
           <thead>
             <tr>   
               <th>ID</th>
               <th>Name</th>  
             </tr>
           </thead>
           <tbody>
             {
               records.map((user, id) => (
                  <tr key={id}>
                   <td>{id+1} </td>
                   <td>{user.attributes.user_id}</td>
                   <td>
                      {user.attributes.name} 
                      <Link to={`/user/${user.id}`}>
                        <h3>View details</h3>
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

export default Users;