import { useState, useEffect } from "react";
import DropDown from "../DropDown/DropDown.jsx";
import OptionSelect from "../OptionSelect/OptionSelect.jsx";
import InputBox from "../InputBox/InputBox.jsx";

const MONTH_DAYS = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31,
};

const Shop = ({ title, intervals, constraint }) => {
    const [startYear, setStartYear] = useState("2000");
    const [endYear, setEndYear] = useState("01");
    const [startMonth, setStartMonth] = useState("01");
    const [endMonth, setEndMonth] = useState("01");
    const [startDay, setStartDay] = useState("01");
    const [endDay, setEndDay] = useState("01");
    const [availableStartYears, setAvailableStartYears] = useState([]);
    const [availableStartMonths, setAvailableStartMonths] = useState([]);
    const [availableStartDays, setAvailableStartDays] = useState([]);
    const [availableEndYears, setAvailableEndYears] = useState([]);
    const [availableEndMonths, setAvailableEndMonths] = useState([]);
    const [availableEndDays, setAvailableEndDays] = useState([]);

    useEffect(() => {
        const startDateString = constraint[0];
        const endDateString = constraint[1];

        // Parse the strings into JavaScript Date objects
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);

        // Extract the year from both Date objects
        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();

        // Generate an array of years between the two given years, inclusive
        const years = [];
        for (let year = startYear; year <= endYear; year++) {
            years.push(year);
        }

        setAvailableStartYears(() => years);
        setAvailableEndYears(() => years);
    }, [constraint]);

    useEffect(() => {}, [startYear]);
    useEffect(() => {}, [endYear]);
    useEffect(() => {}, [startMonth]);
    useEffect(() => {}, [endMonth]);

    return (
        <div className="bg-white rounded-lg shadow-xl shadow-black/20">
            <div className="mx-auto max-w-7xl px-3 lg:px-5">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-lg font-semibold leading-7 text-indigo-600">
                        Your Earth Equity Purchase
                    </h2>
                    <p className="mt-4 mb-8 text-4xl font-bold tracking-tight text-gray-900">
                        {title}
                    </p>
                </div>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 sm:mt-5 lg:mx-0 lg:max-w-none">
                    <h3 className="pb-2 text-center ">Select Start Date</h3>
                    <section className="flex flex-row justify-center gap-x-4 pt-2 pb-8">
                        {intervals.includes("Yearly") && (
                            <DropDown
                                name="Year"
                                options={availableStartYears}
                                setDate={setStartYear}
                            />
                        )}
                        {intervals.includes("Monthly") && (
                            <DropDown
                                name="Month"
                                options={[]}
                                setDate={setStartMonth}
                            />
                        )}
                        {intervals.includes("Daily") && (
                            <DropDown
                                name="Day"
                                options={[]}
                                setDate={setStartDay}
                            />
                        )}
                    </section>

                    <h3 className="pb-2 text-center ">Select End Date</h3>
                    <section className="flex flex-row justify-center gap-x-4 pt-2 pb-8">
                        {intervals.includes("Yearly") && (
                            <DropDown
                                name="Year"
                                options={availableEndYears}
                                setDate={setEndYear}
                            />
                        )}
                        {intervals.includes("Monthly") && (
                            <DropDown
                                name="Month"
                                options={[]}
                                setDate={setEndMonth}
                            />
                        )}
                        {intervals.includes("Daily") && (
                            <DropDown
                                name="Day"
                                options={[]}
                                setDate={setEndDay}
                            />
                        )}
                    </section>

                    <InputBox />

                    <OptionSelect />
                </div>
            </div>
        </div>
    );
};

export default Shop;
