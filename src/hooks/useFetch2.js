import axios from "axios";
import { useEffect, useState } from "react";



const useFetch2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get
        (`http://localhost:1337/api/vehicles?`,
          {Authorization: "bearer" + process.env.REACT_APP_API_TOKEN}
        );
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch2;