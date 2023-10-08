import React from "react";
import Graph from "../../Components/Graph/Graph.jsx";
import Shop from "../../Components/Shop/Shop.jsx";

const Covid = () => {
    const data = [10, 20, 15, 25, 30, 35];
    const width = 400;
    const height = 300;

    return (
        <div className="Covid"
            style={{ display: "flex" }}
        >
            <div className="info"
                style={{ display: "flex", flex: 2, flexDirection: "column" }}
            >
                <a href="#" style={{ fontSize: "large" }}>
                        Covid Infections
                </a>
                <div className="plot"
                    style={{ flex: 2, padding: "20px" }}
                >
                    <Graph data={data} width={width} height={height} />
                </div>
                <div className="desc"
                    style={{ flex: 1 }}
                >   
                    <a href="#">
                        Test
                    </a>
                </div>
            </div>
            <div className="buy"
                style={{ flex: 1 }}
            >
                <Shop data = "COVID"/>
            </div>
        </div>
    )
}

export default Covid