import React from "react";
import { Link } from "react-router-dom";
import "./salesbox.scss"

const SalesBox = () => {
    return(
        <div className="salesbox">
            <h1>Sales Trend</h1>
            <div className="list">
                <div className="listItem">
                    <div className="product">
                       <Link to="/products">
                       <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/suvs/blazer/mov/2024-blazer-masthead-01-v4.png?imwidth=1800" alt="" />
                       </Link>
                        <div className="productTexts">
                            <span className="productName">SUVs/ Blazer</span>
                            <span className="buyerName">Buyer: Lucy Spanco</span>
                            <span className="salary">Salary: $10,000</span>
                        </div>
                    </div>   
                </div>

                <div className="listItem">
                    <div className="product">
                       <Link to="/products">
                       <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/trucks/hd/mov/01-images/2024-silveradohd-new-zr2-01.png?imwidth=1440" alt="" />
                       </Link>
                        <div className="productTexts">
                            <span className="productName">Trucks/ Silverado HD</span>
                            <span className="buyerName">Buyer: Covington Moon</span>
                            <span className="salary">Salary: $15,000</span>
                        </div>
                    </div>  
                </div>

                <div className="listItem">
                    <div className="product">
                       <Link to="/products">
                       <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2023/cars/malibu/mov/01-images/gallery/exterior/2023-malibu-gallery-ext-09.jpg?imwidth=1800" alt="" />
                       </Link>
                        <div className="productTexts">
                            <span className="productName">Cars/ Malibu</span>
                            <span className="buyerName">Buyer: Sherly Ball</span>
                            <span className="salary">Salary: $8,000</span>
                        </div>
                    </div>
                </div>

                <div className="listItem">
                    <div className="product">
                       <Link to="/products">
                       <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/performance/z06/mov/2024-z06-z07-performance-package-01-v2.jpg?imwidth=900" alt="" />
                       </Link>
                        <div className="productTexts">
                            <span className="productName">Performance/ Corvette ZO6</span>
                            <span className="buyerName">Buyer: Joe Jhonson</span>
                            <span className="salary">Salary: $30,000</span>
                        </div>
                    </div>
                </div>

                <div className="listItem">
                    <div className="product">
                       <Link to="/products">
                       <img src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/suvs/blazer-ev-reveal/02-images/mov/2024-blazerev-revealrefresh-range-01.jpg?imwidth=1440" alt="" />
                       </Link>
                        <div className="productTexts">
                            <span className="productName">Electric/ Blazer EV</span>
                            <span className="buyerName">Buyer: Hazan Melo</span>
                            <span className="salary">Salary: $20,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesBox;