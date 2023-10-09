import React from "react";
import {
    MagnifyingGlassCircleIcon,
    CalendarDaysIcon,
    ShoppingCartIcon,
    PresentationChartLineIcon,
    BookOpenIcon,
    CursorArrowRaysIcon,
    AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";

export default function TutorialSection() {
    return (
        <div className="bg-white">
            <main>
                <div className="mx-auto max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-x-8 lg:gap-y-16">
                        {/* 1 */}
                        <div
                            key="Find your market."
                            className="relative grid grid-cols-2 grid-rows-1 "
                        >
                            <div className="h-fit self-center">
                                <dt className="inline flex font-semibold text-gray-900 items-center gap-1">
                                    <MagnifyingGlassCircleIcon
                                        className="h-5 w-5 text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <p>Find your market.</p>
                                </dt>{" "}
                                <dd className="inline">
                                    Navigate to the navigation bar and select a
                                    market that you want to explore further.
                                </dd>
                            </div>
                            <img
                                src="\assets\SelectMarket.svg"
                                alt="select market"
                            ></img>
                        </div>

                        <div className="grid grid-cols-2 items-center justify-center">
                            <div className="flex flex-col gap-y-4">
                                {/* 2 */}
                                <div
                                    key="Choose your start date."
                                    className="relative pl-9"
                                >
                                    <dt className="inline font-semibold text-gray-900">
                                        <CursorArrowRaysIcon
                                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        Choose your start date.
                                    </dt>{" "}
                                    <dd className="inline">
                                        It's time to set your start date.
                                        Navigate to the right side and set your
                                        time frame. Each market will have its
                                        own time constraints.
                                    </dd>
                                </div>

                                {/* 3 */}
                                <div
                                    key="Choose your end date."
                                    className="relative pl-9"
                                >
                                    <dt className="inline font-semibold text-gray-900">
                                        <CalendarDaysIcon
                                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        Choose your end date.
                                    </dt>{" "}
                                    <dd className="inline">
                                        You selected your start date, now it's
                                        time to set when you want to stop. This
                                        step is crucial to your graph. Make sure
                                        to choose a time frame that you think
                                        will have the best outcome for your
                                        situation. Choose wisely!
                                    </dd>
                                </div>

                                {/* 4 */}
                                <div
                                    key="Make your purchase!"
                                    className="relative pl-9"
                                >
                                    <dt className="inline font-semibold text-gray-900">
                                        <ShoppingCartIcon
                                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        Make your purchase!
                                    </dt>{" "}
                                    <dd className="inline">
                                        It's time to process your equity. You
                                        have two options: <b>sell</b> or{" "}
                                        <b>buy</b>. These two options are
                                        crucial to your outcome. By choosing the
                                        sell option, you predict that the graph
                                        will depreciate, meaning that as time
                                        goes on, the overall trend of your graph
                                        will be downward. In this case, you want
                                        your end date to have a value less than
                                        your start date value. On the other
                                        hand, choosing the buy option predicts
                                        that your chosen time frame will end in
                                        an overall increase from your start
                                        date. Choose the option you think is
                                        best in your chosen market.
                                    </dd>
                                </div>
                            </div>
                            <img
                                className="place-self-center"
                                src="\assets\BuySell.gif"
                                alt="buy sell gif"
                                style={{
                                    maxHeight: "600px",
                                    maxWidth: "300px",
                                }}
                            ></img>
                        </div>

                        {/* 5 */}
                        <div
                            key="Watch your purchase grow!"
                            className="relative grid grid-cols-2 grid-rows-1 "
                        >
                            <div className="h-fit self-center">
                                <dt className="inline flex font-semibold text-gray-900 items-center gap-1">
                                    <MagnifyingGlassCircleIcon
                                        className="h-5 w-5 text-indigo-600"
                                        aria-hidden="true"
                                    />
                                    <p>Watch your purchase grow!</p>
                                </dt>{" "}
                                <dd className="inline">
                                    Did you make the correct choice or not?
                                    Watch as your equity's price and graph
                                    changes throughout your time selection.
                                </dd>
                            </div>
                            <img
                                src="\assets\GraphExample.gif"
                                alt="graph example"
                                style={{ maxHeight: 300, maxWidth: 800 }}
                            ></img>
                        </div>

                        {/* 6 */}
                        <div
                            key="Read more about your equity."
                            className="relative pl-9"
                        >
                            <dt className="inline font-semibold text-gray-900">
                                <BookOpenIcon
                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                    aria-hidden="true"
                                />
                                Read more about your equity.
                            </dt>{" "}
                            <dd className="inline">
                                There are many reasons why your equity did good
                                or bad. By scrolling down, you will find an
                                about page, giving you greater insight on the
                                data that was shown and its original location.
                                Learning about why data changes is important
                                when interpretting data, this section aims to
                                explain to you what this data means.{" "}
                            </dd>
                        </div>

                        {/* 7 */}
                        <div
                            key="Theres always a Second Chance."
                            className="relative pl-9"
                        >
                            <dt className="inline font-semibold text-gray-900">
                                <AdjustmentsHorizontalIcon
                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                    aria-hidden="true"
                                />
                                Theres always a Second Chance.
                            </dt>{" "}
                            <dd className="inline">
                                Sometimes your equity did not go as well as you
                                thought it would. That's okay, try again. Select
                                another time interval or option and see if you
                                did better.
                            </dd>
                        </div>
                    </dl>
                </div>
            </main>
        </div>
    );
}
