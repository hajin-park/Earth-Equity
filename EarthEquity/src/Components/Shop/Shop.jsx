import { Fragment, useState } from "react";
import {
    ChevronUpDownIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
    CheckIcon,
} from "@heroicons/react/20/solid";
import { Listbox, Menu, Transition } from "@headlessui/react";

const people = [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
    { id: 7, name: "Caroline Schultz" },
    { id: 8, name: "Mason Heaney" },
    { id: 9, name: "Claudie Smitham" },
    { id: 10, name: "Emil Schaefer" },
];

const months = [
    {
        name: "January",
        days: [
            { date: "2021-12-27" },
            { date: "2021-12-28" },
            { date: "2021-12-29" },
            { date: "2021-12-30" },
            { date: "2021-12-31" },
            { date: "2022-01-01", isCurrentMonth: true },
            { date: "2022-01-02", isCurrentMonth: true },
            { date: "2022-01-03", isCurrentMonth: true },
            { date: "2022-01-04", isCurrentMonth: true },
            { date: "2022-01-05", isCurrentMonth: true },
            { date: "2022-01-06", isCurrentMonth: true },
            { date: "2022-01-07", isCurrentMonth: true },
            { date: "2022-01-08", isCurrentMonth: true },
            { date: "2022-01-09", isCurrentMonth: true },
            { date: "2022-01-10", isCurrentMonth: true },
            { date: "2022-01-11", isCurrentMonth: true },
            { date: "2022-01-12", isCurrentMonth: true, isToday: true },
            { date: "2022-01-13", isCurrentMonth: true },
            { date: "2022-01-14", isCurrentMonth: true },
            { date: "2022-01-15", isCurrentMonth: true },
            { date: "2022-01-16", isCurrentMonth: true },
            { date: "2022-01-17", isCurrentMonth: true },
            { date: "2022-01-18", isCurrentMonth: true },
            { date: "2022-01-19", isCurrentMonth: true },
            { date: "2022-01-20", isCurrentMonth: true },
            { date: "2022-01-21", isCurrentMonth: true },
            { date: "2022-01-22", isCurrentMonth: true },
            { date: "2022-01-23", isCurrentMonth: true },
            { date: "2022-01-24", isCurrentMonth: true },
            { date: "2022-01-25", isCurrentMonth: true },
            { date: "2022-01-26", isCurrentMonth: true },
            { date: "2022-01-27", isCurrentMonth: true },
            { date: "2022-01-28", isCurrentMonth: true },
            { date: "2022-01-29", isCurrentMonth: true },
            { date: "2022-01-30", isCurrentMonth: true },
            { date: "2022-01-31", isCurrentMonth: true },
            { date: "2022-02-01" },
            { date: "2022-02-02" },
            { date: "2022-02-03" },
            { date: "2022-02-04" },
            { date: "2022-02-05" },
            { date: "2022-02-06" },
        ],
    },
    // More months...
];

const tiers = [
    {
        name: "Purchase Data",
        id: "purchase_data",
        href: "#",
        priceMonthly: "$32",
        description: "A plan that scales with your rapidly growing business.",
        features: [
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced analytics",
            "24-hour support response time",
            "Marketing automations",
        ],
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Shop = ({ data }) => {
    const [selected, setSelected] = useState(people[3]);

    return (
        <div className="bg-white sm:py-10">
            <div className="mx-auto max-w-7xl px-3 lg:px-5">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">
                        Your Equity Purchase
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                        {data}
                    </p>
                </div>
                {/* <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
          Explicabo id ut laborum.
        </p> */}
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 sm:mt-5 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-4 pb-12">
                        <div>
                            <header className="flex items-center justify-between border-b border-gray-200 px-6 py-2">
                                <h1 className="text-base font-semibold leading-6 text-gray-900">
                                    <time dateTime="2022">2022</time>
                                </h1>
                                <div className="flex items-center">
                                    <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
                                        <button
                                            type="button"
                                            className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
                                        >
                                            <span className="sr-only">
                                                Previous year
                                            </span>
                                            <ChevronLeftIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
                                        >
                                            Today
                                        </button>
                                        <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                                        <button
                                            type="button"
                                            className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
                                        >
                                            <span className="sr-only">
                                                Next year
                                            </span>
                                            <ChevronRightIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                    <div className="hidden md:ml-4 md:flex md:items-center">
                                        <Menu as="div" className="relative">
                                            <Menu.Button
                                                type="button"
                                                className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                Year view
                                                <ChevronDownIcon
                                                    className="-mr-1 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-2 text-sm"
                                                                    )}
                                                                >
                                                                    Day view
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-2 text-sm"
                                                                    )}
                                                                >
                                                                    Week view
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-2 text-sm"
                                                                    )}
                                                                >
                                                                    Month view
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active
                                                                            ? "bg-gray-100 text-gray-900"
                                                                            : "text-gray-700",
                                                                        "block px-4 py-2 text-sm"
                                                                    )}
                                                                >
                                                                    Year view
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                    <Menu
                                        as="div"
                                        className="relative ml-6 md:hidden"
                                    >
                                        <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">
                                                Open menu
                                            </span>
                                            <EllipsisHorizontalIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                Create event
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                Go to today
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                Day view
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                Week view
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                Month view
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100 text-gray-900"
                                                                        : "text-gray-700",
                                                                    "block px-4 py-2 text-sm"
                                                                )}
                                                            >
                                                                Year view
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </header>
                            <div className="bg-white">
                                <div className=" grid-cols-1 gap-x-8 gap-y-16 px-4 py-4 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4">
                                    {months.map((month) => (
                                        <section
                                            key={month.name}
                                            className="text-center"
                                        >
                                            <h2 className="text-sm font-semibold text-gray-900">
                                                {month.name}
                                            </h2>
                                            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                                                <div>M</div>
                                                <div>T</div>
                                                <div>W</div>
                                                <div>T</div>
                                                <div>F</div>
                                                <div>S</div>
                                                <div>S</div>
                                            </div>
                                            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                                                {month.days.map(
                                                    (day, dayIdx) => (
                                                        <button
                                                            key={day.date}
                                                            type="button"
                                                            className={classNames(
                                                                day.isCurrentMonth
                                                                    ? "bg-white text-gray-900"
                                                                    : "bg-gray-50 text-gray-400",
                                                                dayIdx === 0 &&
                                                                    "rounded-tl-lg",
                                                                dayIdx === 6 &&
                                                                    "rounded-tr-lg",
                                                                dayIdx ===
                                                                    month.days
                                                                        .length -
                                                                        7 &&
                                                                    "rounded-bl-lg",
                                                                dayIdx ===
                                                                    month.days
                                                                        .length -
                                                                        1 &&
                                                                    "rounded-br-lg",
                                                                "py-1.5 hover:bg-gray-100 focus:z-10"
                                                            )}
                                                        >
                                                            <time
                                                                dateTime={
                                                                    day.date
                                                                }
                                                                className={classNames(
                                                                    day.isToday &&
                                                                        "bg-indigo-600 font-semibold text-white",
                                                                    "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                                                                )}
                                                            >
                                                                {day.date
                                                                    .split("-")
                                                                    .pop()
                                                                    .replace(
                                                                        /^0/,
                                                                        ""
                                                                    )}
                                                            </time>
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </section>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Listbox value={selected} onChange={setSelected}>
                            {({ open }) => (
                                <>
                                    <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                                        Select Duration:
                                    </Listbox.Label>
                                    <div className="relative mt-2">
                                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <span className="block truncate">
                                                {selected.name}
                                            </span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>

                                        <Transition
                                            show={open}
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                {people.map((person) => (
                                                    <Listbox.Option
                                                        key={person.id}
                                                        className={({
                                                            active,
                                                        }) =>
                                                            classNames(
                                                                active
                                                                    ? "bg-indigo-600 text-white"
                                                                    : "text-gray-900",
                                                                "relative cursor-default select-none py-2 pl-3 pr-9"
                                                            )
                                                        }
                                                        value={person}
                                                    >
                                                        {({
                                                            selected,
                                                            active,
                                                        }) => (
                                                            <>
                                                                <span
                                                                    className={classNames(
                                                                        selected
                                                                            ? "font-semibold"
                                                                            : "font-normal",
                                                                        "block truncate"
                                                                    )}
                                                                >
                                                                    {
                                                                        person.name
                                                                    }
                                                                </span>

                                                                {selected ? (
                                                                    <span
                                                                        className={classNames(
                                                                            active
                                                                                ? "text-white"
                                                                                : "text-indigo-600",
                                                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                        )}
                                                                    >
                                                                        <CheckIcon
                                                                            className="h-5 w-5"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </div>
                                </>
                            )}
                        </Listbox>

                        <button
                            // href={tier.href}
                            // aria-describedby={tier.id}
                            className={classNames(
                                "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                                "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            )}
                        >
                            Buy plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
