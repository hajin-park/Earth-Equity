import { useState, useEffect } from "react";
import LineGraph from "../../Components/Graph/LineGraph.jsx";
import Shop from "../../Components/Shop/Shop.jsx";
import { database } from "../../firebase.js";
import { ref, child, get } from "firebase/database";

const Covid = () => {
    const [start, setStart] = useState(false);
    const [graphPoints, setGraphPoints] = useState([]);
    const [graphTitle, setGraphTitle] = useState("");
    const [graphDescriptions, setGraphDescriptions] = useState([]);
    const [graphLinks, setGraphLinks] = useState([]);
    const [graphIntervals, setGraphIntervals] = useState([]);
    const [timeConstraint, setTimeConstraint] = useState([]);

    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, `covid`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setGraphPoints(() => snapshot.val().data);
                    setGraphTitle(() => snapshot.val().title);
                    setGraphDescriptions(() => snapshot.val().descriptions);
                    setGraphLinks(() => snapshot.val().links);
                    setGraphIntervals(() => snapshot.val().intervals);
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
                <h1 className="text-6xl font-bold pb-16">{graphTitle}</h1>
                {start ? (
                    <LineGraph
                        data={graphPoints.map((point) => {
                            return { date: point[0], value: point[1] };
                        })}
                        start={start}
                    />
                ) : (
                    <div className="flex w-full pt-20 items-center justify-center">
                        <p className="text-6xl font-bold animate-pulse text-blue-950">
                            Waiting For Inputs
                        </p>
                    </div>
                )}
            </section>
            <section className="col-span-2 row-start-2">
                <h2 className="underline text-xl font-bold">About</h2>
                {graphDescriptions.map((description) => {
                    <p>{description}</p>;
                })}

                <h2 className="underline text-xl font-bold">Resources</h2>
                {graphLinks.map((link) => {
                    <a href={link}>{link}</a>;
                })}
            </section>
            <section className="col-start-3 row-span-2">
                <Shop
                    title={graphTitle}
                    intervals={graphIntervals}
                    constraint={timeConstraint}
                    setStart={setStart}
                />
            </section>
        </main>
    );
};

export default Covid;
