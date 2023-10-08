import { useState, useEffect } from "react";
import LineGraph from "../../Components/Graph/LineGraph.jsx";
import Shop from "../../Components/Shop/Shop.jsx";
import { database } from "../../firebase.js";
import { ref, child, get } from "firebase/database";

const Soil = () => {
    const [graphPoints, setGraphPoints] = useState([]);
    const [graphTitle, setGraphTitle] = useState("");
    const [graphDescriptions, setGraphDescriptions] = useState([]);
    const [graphLinks, setGraphLinks] = useState([]);
    const [graphInterval, setGraphInterval] = useState([]);
    const [graphLength, setGraphLength] = useState(0);
    const [timeConstraint, setTimeConstraint] = useState([]);

    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, `soil`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setGraphPoints(() => snapshot.val().data);
                    setGraphTitle(() => snapshot.val().title);
                    setGraphDescriptions(() => snapshot.val().descriptions);
                    setGraphLinks(() => snapshot.val().links);
                    setGraphInterval(() => snapshot.val().intervals);
                    setTimeConstraint(() => [
                        snapshot.val().start,
                        snapshot.val().end,
                    ]);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <main className="pt-28 p-16 flex flex-col lg:grid grid-rows-2 grid-cols-3">
            <section className="col-span-2 row-start-1">
                <h1 className="text-6xl font-bold">{graphTitle}</h1>
                <LineGraph
                    data={graphPoints.map((point) => {
                        return { x: point[0], y: point[1] };
                    })}
                />
            </section>
            <section className="col-span-2 row-start-2">
                <h2>Description</h2>
            </section>
            <section className="col-start-3 row-span-2">
                <Shop data="Soil Moisture" />
            </section>
        </main>
    );
};

export default Soil;
