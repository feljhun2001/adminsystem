import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useProductView = () => {
  const { id: productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          `http://localhost:1337/api/vehicles/${productID}?populate=*`
        );
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log({ error });
      }
    };

    if (productID) {
      fetchCategories();
    }
  }, [productID]);

  return {
    product
  };
};