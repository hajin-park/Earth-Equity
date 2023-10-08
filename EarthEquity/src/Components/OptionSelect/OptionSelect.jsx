import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const actionOptions = [
    { name: "Buy", inStock: true },
    { name: "Sell", inStock: true },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function OptionSelect() {
    const [action, setAction] = useState("");

    return (
        <div className="p-12">
            <RadioGroup value={action} onChange={setAction} className="mt-2">
                <RadioGroup.Label className="sr-only">
                    Choose an action option
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
