import axios from "axios";
import React, { useEffect, useState } from "react";
import "./profile.scss";


const Profile = ({profile}) => {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        const getProfileData = async () => {
            try {
                const {data} = await axios.get (`http://localhost:1337/api/users/1`,{
                });
                setUser(data);
            }   catch (error) {
                console.log({error});
            }
        };
        getProfileData()
    }, [profile]);
    console.log({user});

    return(
        <div className="profile">
            
            <div className="body">
                <h1>Username: {user.username}</h1>
                <p>Email: {user.email}</p>
                <p></p>
            </div>
        </div>
    )
};

export default Profile;