import { useState, useEffect } from "react";
import LineGraph from "../../Components/Graph/LineGraph.jsx";
import Shop from "../../Components/Shop/Shop.jsx";
import { database } from "../../firebase.js";
import { ref, child, get } from "firebase/database";
import AboutSection from "../../Components/AboutSection/AboutSection.jsx";

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
        <main className="lg:pt-16 p-12 flex flex-col lg:grid grid-rows-2 grid-cols-3">
            <section className="col-span-2 row-start-1">
                <h1 className="text-6xl font-bold">{graphTitle}</h1>
                {start ? (
                    <LineGraph
                        data={graphPoints.map((point) => {
                            return { date: point[0], value: point[1] };
                        })}
                        start={start}
                    />
                ) : (
                    <div className="flex w-full lg:py-32 items-center">
                        <p className="text-6xl font-bold animate-pulse text-blue-950">
                            Waiting For Inputs
                        </p>
                    </div>
                )}
            </section>
            <AboutSection
                desc="Deaths counts for influenza, pneumonia, and COVID-19 reported to NCHS by week ending date, by state and HHS region, and age group."
                dataset="https://data.cdc.gov/NCHS/Provisional-Death-Counts-for-Influenza-Pneumonia-a/ynw2-4viq"
            />
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
