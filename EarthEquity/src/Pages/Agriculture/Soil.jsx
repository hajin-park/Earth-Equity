import { useState, useEffect } from "react";
import LineGraph from "../../Components/Graph/LineGraph.jsx";
import Shop from "../../Components/Shop/Shop.jsx";
import { database } from "../../firebase.js";
import { ref, child, get } from "firebase/database";
import AboutSection from "../../Components/AboutSection/AboutSection.jsx";

const Soil = () => {
    const [start, setStart] = useState(null);
    const [graphPoints, setGraphPoints] = useState([]);
    const [graphTitle, setGraphTitle] = useState("");
    const [graphDescriptions, setGraphDescriptions] = useState([]);
    const [graphLinks, setGraphLinks] = useState([]);
    const [graphIntervals, setGraphIntervals] = useState([]);
    const [timeConstraint, setTimeConstraint] = useState([]);
    const [chosenLength, setChosenLength] = useState([]);

    useEffect(() => {
        const dbRef = ref(database);
        get(child(dbRef, `soil`))
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
                        chosenLength={chosenLength}
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
                desc="These data consist of soil moisture and temperature measurements recorded by the temporary soil moisture network deployed to SMAPVEX16-Iowa for the summer season of 2016. The sites were spread out over an experiment domain of about 30km by 40 km located about 30 km north of Ames, Iowa, USA. The data file contains the soil moisture and temperature measurements for each station located at the site."
                dataset="https://nsidc.org/data/sv16i_tnet/versions/1"
            />
            <section className="col-start-3 row-span-1">
                <Shop
                    title={graphTitle}
                    intervals={graphIntervals}
                    constraint={timeConstraint}
                    setStart={setStart}
                    setChosenLength={setChosenLength}
                />
            </section>
        </main>
    );
};

export default Soil;
