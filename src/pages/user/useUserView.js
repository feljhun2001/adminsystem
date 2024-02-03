import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useUserView = () => {
  const { id: userID } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          `http://localhost:1337/api/customers/${userID}?populate=*`
        );
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log({ error });
      }
    };

    if (userID) {
      fetchCategories();
    }
  }, [userID]);

  return {
    user
  };
};