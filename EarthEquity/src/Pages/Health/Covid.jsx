import React from "react";
import Graph from "../../Components/Graph/Graph.jsx";
import Shop from "../../Components/Shop/Shop.jsx";

const Covid = () => {
    const data = [
        { x: 0, y: 0 },
        { x: 50, y: 50 },
        { x: 100, y: 100 },
        // ... more data points
    ];

    return (
        <div className="Covid"
            style={{ display: "flex" }}
        >
            <div className="info"
                style={{ display: "flex", flex: 2, flexDirection: "column" }}
            >
                <a href="#" style={{ fontSize: "large", padding: "20px" }}>
                    Covid Infections
                </a>
                <div style={{ padding: "20px", flex: 2, width: '800px', height: '400px' }}>
                    <Graph 
                        data={data} 
                        width={800} 
                        height={400} 
                        xAxisTitle="X Axis Title" 
                        yAxisTitle="Y Axis Title" 
                    />
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