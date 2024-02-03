import React from "react";
import "./productsbox.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";



const data = [
    {
     
      
      products: 95,
      
    },
    {
      
      
      products: 60,
      
    },
    {
      
      
      products: 110,
      
    },
    {
      
      
      products: 75,
      
    },
    {
     
      
      products: 80,
      
    },
    {
      
      products: 55,
      
    },
    {
      
      
      products: 85,
      
    },
  ];

const ProductsBox = () => {
    return(
        <div className="productsbox">
            <div className="boxInfo">
                <div className="title">
                    <img src="logo.svg" alt="" />
                    <span>Total Products</span>
                </div>
                <h1>115</h1>
                <Link to="/products" style={{color: "lightblue" }}>View All</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={10} height={10} data={data}>
                        <Tooltip
                            contentStyle={{background:"transparent", border:"none"}}
                            labelStyle={{display:"none"}}
                            position={{x:-20, y:50}}
                        />
                        <Line 
                            type="natural"
                            dataKey="products"
                            stroke="violet" 
                            strokeWidth={2} 
                            dot={false}
                        />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{color:"limegreen"}}>21%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ProductsBox;