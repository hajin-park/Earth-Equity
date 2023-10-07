import React from "react";
import Graph from "../../Components/Graph/Graph.jsx";

const Covid = () => {
    const data = [10, 20, 15, 25, 30, 35];
    const width = 400;
    const height = 300;

    return (
        <div className="Covid">
            <a href="#" >
                Covid Infections
            </a>
            <div className="plot">
                <Graph data={data} width={width} height={height} />
            </div>
        </div>
    )
}

export default Covid