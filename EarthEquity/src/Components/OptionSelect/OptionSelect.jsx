import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const actionOptions = [
    { name: "Buy", inStock: true },
    { name: "Sell", inStock: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function OptionSelect({
    setStart,
    inputData,
    intervals,
    setChosenLength,
    setActionAmount,
    setInvestment,
    setCash,
}) {
    const [action, setAction] = useState("");

    const handleChange = (e) => {
        for (const [key, value] of Object.entries(inputData)) {
            if (!value) {
                if (key == "startDay" || key == "endDay") {
                    if (intervals.includes("Daily")) {
                        return false;
                    }
                } else if (key == "startMonth" || key == "endMonth") {
                    if (intervals.includes("Monthly")) {
                        return false;
                    }
                } else if (key == "startYear" || key == "endYear") {
                    if (intervals.includes("Yearly")) {
                        return false;
                    }
                }
            }
        }
        setChosenLength([
            {
                startYear: inputData.startYear,
                startMonth: inputData.startMonth,
                startDay: inputData.startDay,
            },
            {
                endYear: inputData.endYear,
                endMonth: inputData.endMonth,
                endDay: inputData.endDay,
            },
        ]);
        console.log(action);
        setActionAmount(inputData.amount);
        setInvestment((e) =>
            action.name == "Buy"
                ? (e += +inputData.amount)
                : (e -= +inputData.amount)
        );
        setCash((e) =>
            action.name == "Buy"
                ? (e -= +inputData.amount)
                : (e += +inputData.amount)
        );
        setStart(e);
    };

    return (
        <div className="p-12">
            <RadioGroup
                value={action}
                onChange={(e) => {
                    setAction(e);
                    handleChange(e);
                }}
                className="mt-2"
            >
                <RadioGroup.Label className="sr-only">
                    Choose an action
                </RadioGroup.Label>
                <div className="grid grid-cols-2 gap-3">
                    {actionOptions.map((option) => (
                        <RadioGroup.Option
                            key={option.name}
                            value={option}
                            className={({ active, checked }) =>
                                classNames(
                                    option.inStock
                                        ? "cursor-pointer focus:outline-none"
                                        : "cursor-not-allowed opacity-25",
                                    active
                                        ? "ring-2 ring-indigo-600 ring-offset-2"
                                        : "",
                                    checked
                                        ? "bg-indigo-600 text-white hover:bg-indigo-500"
                                        : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50",
                                    "flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                                )
                            }
                            disabled={!option.inStock}
                        >
                            <RadioGroup.Label as="span">
                                {option.name}
                            </RadioGroup.Label>
                        </RadioGroup.Option>
                    ))}
                </div>
            </RadioGroup>
        </div>
    );
}
