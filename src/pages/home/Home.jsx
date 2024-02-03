import React from "react";
import UsersBox from "../../components/usersBox/UsersBox.tsx";
import SalesBox from "../../components/salesBox/SalesBox.tsx";
import ProductsBox from "../../components/productsBox/ProductsBox.tsx";
import RatioBox from "../../components/ratioBox/RatioBox.tsx";
import RevenueBox from "../../components/revenueBox/RevenueBox.tsx";
import BarChartBox from "../../components/barchartBox/BarChartBox.tsx";
import "./home.scss";
import PieChartBox from "../../components/piechartBox/PieChartBox.tsx";

const Home = () => {
    return(
        <div className="home">
            <div className="box box1">
                <SalesBox/>
            </div>
            <div className="box box2">
                <UsersBox/>
            </div>
            <div className="box box3">
                <ProductsBox/>
            </div>
            <div className="box box4">
                <PieChartBox/>
            </div>
            <div className="box box5">
                <RatioBox/>
            </div>
            <div className="box box6">
                <RevenueBox/>
            </div>
            <div className="box box7">
                <BarChartBox/>
            </div>
        </div>
    )
}

export default Home;