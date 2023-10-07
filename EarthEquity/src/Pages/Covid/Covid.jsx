import React from "react";
import Graph from "../../Components/Graph/Graph.jsx";
import Shop from "../../Components/Shop/Shop.jsx";

const Covid = () => {
    const data = [10, 20, 15, 25, 30, 35];
    const width = 400;
    const height = 300;

    return (
        <div className="Covid">
            <div className="plot">
                <a href="#" >
                    Covid Infections
                </a>
                <Graph data={data} width={width} height={height} />
            </div>
            <div className="desc">

            </div>
            <div className="buy">
                <Shop data = "COVID"/>
            </div>
        </div>
    )
}

export default Covid