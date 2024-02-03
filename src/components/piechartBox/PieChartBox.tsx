import React from "react";
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip, } from "recharts";
import "./piechartbox.scss";

const data = [
    {name: "SUVs", value: 500, color: "orange"},
    {name: "Trucks", value: 600, color: "yellow"},
    {name: "Cars", value: 300, color: "black"},
    {name: "Performance", value: 900 , color: "red"},
    {name: "Electric", value: 200, color: "#FFCD58"},
]

const PieChartBox = () => {
    return(
        <div className="piechartbox">
            <h1>Lead Sources By Unit Sales</h1>
            <div className="chart">
             <ResponsiveContainer width="99%" height={300}>
                <PieChart width={800} height={400}>
                    <Tooltip
                        contentStyle={{background:"white", borderRadius:"5px"}}
                    />
                    <Pie
                        data={data}
                        innerRadius={"70%"}
                        outerRadius={"100%"}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((item) => (
                            <Cell
                                key={item.name} fill={item.color}
                            />
                        ))}
                    </Pie>
                </PieChart>
             </ResponsiveContainer>
            </div>
            <div className="options">
                {data.map(item=>(
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor: item.color}}/>
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartBox;