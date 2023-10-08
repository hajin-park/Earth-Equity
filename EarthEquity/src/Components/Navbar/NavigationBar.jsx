import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", to: "/" },
    { name: "COVID", to: "covid" },
    { name: "Temperature", to: "temperature" },
    { name: "Soil", to: "soil" },
];

export default function HeroSection() {
    const [currentPage, setCurrentPage] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleClick = (name) => {
        setCurrentPage(name);
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <NavLink
                        onClick={() => handleClick("Home")}
                        to="/"
                        className="-m-1.5 p-1.5"
                    >
                        <span className="sr-only">Earth Equity</span>
                        <img
                            className="h-16 w-auto"
                            src="/assets/EarthEquityLogo.svg"
                            alt=""
                        />
                    </NavLink>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <NavLink
                            onClick={() => handleClick(item.name)}
                            key={item.name}
                            to={item.to}
                            className={`text-xl font-semibold leading-6 text-gray-900 ${
                                currentPage == item.name ? "underline" : ""
                            }`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <NavLink
                            to="/"
                            onClick={() => handleClick("Home")}
                            className="-m-1.5 p-1.5"
                        >
                            <span className="sr-only">Earth Equity</span>
                            <img
                                className="h-8 w-auto"
                                src="/assets/EarthEquityLogo.svg"
                                alt=""
                            />
                        </NavLink>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <NavLink
                                        onClick={() => handleClick(item.name)}
                                        key={item.name}
                                        to={item.to}
                                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ${
                                            currentPage == item.name
                                                ? "underline"
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
