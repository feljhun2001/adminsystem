import React from "react";
import "./usersbox.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";



const data = [
    {
      year: 2009,
      
      users: 2400,
      
    },
    {
      year: 2010,
      
      users: 1398,
      
    },
    {
      year: 2012,
      
      users: 5321,
      
    },
    {
      year: 2015,
      
      users: 3908,
      
    },
    {
      year: 2016,
      
      users: 4800,
      
    },
    {
      year: 2018,
      
      users: 3800,
      
    },
    {
      year: 2020,
      
      users: 4300,
      
    },
  ];

const UsersBox = () => {
    return(
        <div className="usersbox">
            <div className="boxInfo">
                <div className="title">
                    <img src="logo.svg" alt="" />
                    <span>Total Users</span>
                </div>
                <h1>5,321</h1>
                <Link to="/users" style={{color: "lightblue" }}>View All</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={10} height={10} data={data}>
                        <Tooltip
                            contentStyle={{background:"transparent", border:"none"}}
                            labelStyle={{display:"none"}}
                            position={{x:-10, y:30}}
                        />
                        <Line 
                            type="natural"
                            dataKey="users"
                            stroke="yellow" 
                            strokeWidth={2} 
                            dot={false}
                        />
                        <Line 
                            type="natural"
                            dataKey="year"
                            stroke="red" 
                            strokeWidth={2} 
                            dot={false}
                        />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{color:"limegreen"}}>53%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default UsersBox;