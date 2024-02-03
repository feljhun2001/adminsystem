import React from "react";
import "./ratiobox.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";



const data = [
    {
     
      
      ratio: 9.5,
      
    },
    {
      
      
      ratio: 3.0,
      
    },
    {
      
      
      ratio: 6.3,
      
    },
    {
      
      
      ratio: 7.5,
      
    },
    {
     
      
      ratio: 5.6,
      
    },
    {
      
      ratio: 7.1,
      
    },
    {
      
      
      ratio: 13.1,
      
    },
  ];

const RatioBox = () => {
    return(
        <div className="ratiobox">
            <div className="boxInfo">
                <div className="title">
                    <img src="logo.svg" alt="" />
                    <span>Total Ratio</span>
                </div>
                <h1>13.5</h1>
                <Link to="" style={{color: "lightblue" }}>View All</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={10} height={10} data={data}>
                        <Tooltip
                            contentStyle={{background:"transparent", border:"none"}}
                            labelStyle={{display:"none"}}
                            position={{x:0, y:65}}
                        />
                        <Line 
                            type="natural"
                            dataKey="ratio"
                            stroke="orange" 
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

export default RatioBox;