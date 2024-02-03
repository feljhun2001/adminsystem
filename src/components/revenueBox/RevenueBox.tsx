import React from "react";
import "./revenuebox.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";



const data = [
    {
      revenue: 29.645,
      
      
      
    },
    {
      revenue: 20.234,
      
      
      
    },
    {
      revenue: 35.876,
      
     
      
    },
    {
      revenue: 31.456,
      
      
      
    },
    {
      revenue: 25.918,
      
    
      
    },
    {
      revenue: 24.267,
      
      
      
    },
    {
      revenue: 49.717,
      
      
      
    },
  ];

const RevenueBox = () => {
    return(
        <div className="revenuebox">
            <div className="boxInfo">
                <div className="title">
                    <img src="logo.svg" alt="" />
                    <span>Total Revenue</span>
                </div>
                <h1>$150,123</h1>
                <Link to="" style={{color: "lightblue" }}>View All</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={10} height={10} data={data}>
                        <Tooltip
                            contentStyle={{background:"transparent", border:"none"}}
                            labelStyle={{display:"none"}}
                            position={{x:-40, y:-15}}
                        />
                        <Line 
                            type="natural"
                            dataKey="revenue"
                            stroke="black" 
                            strokeWidth={2} 
                            dot={false}
                        />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{color:"limegreen"}}>50%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default RevenueBox;