import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import useFetch from "../../hooks/useFetch";
import "./products.scss";


function Products() {
  const cusID = parseInt(useParams().id);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const {data, loading, error} = useFetch(`[filters][customers][id][$eq]=${cusID}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [ value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
    console.log(selectedSubCats)
   return(
    <div className="products"> 
        <div className="filterItem">
          <h3>Categories</h3>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
      <div className="product-list">
            <ProductList cusID={cusID} SubCats={selectedSubCats}/>
      </div>
    </div>
  )
    

}

export default Products;