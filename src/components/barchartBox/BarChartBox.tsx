import React from "react";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis,} from "recharts";
import "./barchartbox.scss";

const data = [
    {
      year: 2014,
      amount: 400.599,
      vehicle: 'Camaro',
      amt: 2400,
    },
    {
      year: 2016,
      amount: 350.700,
      vehicle: 'Malibu',
      amt: 2210,
    },
    {
      year: 2017,
      amount: 120.765,
      vehicle: 'Blazer',
      amt: 2290,
    },
    {
      year: 2019,
      amount: 200.654,
      vehicle: 'Trax',
      amt: 2000,
    },
    {
      year: 2020,
      amount: 380.337,
      vehicle: 'Traverse',
      amt: 2181,
    },
    {
      year: 2022,
      amount: 320.453,
      vehicle: 'Tahoe',
      amt: 2500,
    },
    {
      year: 2023,
      amount: 110.239,
      vehicle: 'Blazer EV',
      amt: 2100,
    },
  ];

const BarChartBox = () => {
    return(
        <div className="barchartbox">
            <h1>Top Cars By Dollar Amount Sold</h1>
            <div className="chart">
              <ResponsiveContainer width="100%" height={150}>
                <BarChart width={150} height={40} data={data}>
                    <Tooltip
                        contentStyle={{background:"#2a3447", borderRadius:"5px"}}
                        labelStyle={{display:"none"}}
                        cursor={{fill:"none"}}
                    />
                    <Bar dataKey="amount" fill="#FFCD58" />
                    <XAxis dataKey="vehicle" stroke="white"/>
                   
                </BarChart>
              </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBox;