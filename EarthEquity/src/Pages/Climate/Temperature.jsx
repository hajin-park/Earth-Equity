import { useState, useEffect } from "react";
import LineGraph from "../../Components/Graph/LineGraph.jsx";
import Shop from "../../Components/Shop/Shop.jsx";
import { database } from "../../firebase.js";
import { ref, child, get } from "firebase/database";
import AboutSection from "../../Components/AboutSection/AboutSection.jsx";

const Temperature = () => {
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
        get(child(dbRef, `temperature`))
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
                desc="This data set provides meteorological measurements collected from 3 different meteorological stations within a radius of 8 km in Rio Branco, Acre Brazil, for the periods of June of 1970 to 1974, December of 1974 to 1980, and May of 1980 thru May 31, 2001. Daily average values for rainfall, relative humidity, evapotranspiration, maximum and minimum temperature, pressure, wind direction and speed, solar radiation, and cloud cover are reported. There is one comma-delimited data file with this data set."
                dataset="https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1091"
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

export default Temperature;
