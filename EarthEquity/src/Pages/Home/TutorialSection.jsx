import React from "react"
import {
  MagnifyingGlassCircleIcon,
  CalendarDaysIcon,
  ShoppingCartIcon,
  PresentationChartLineIcon,
  BookOpenIcon,
  CursorArrowRaysIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/20/solid'

export default function TutorialSection() {
    return (
        <div className="bg-white">
            <main>
                <div className="mx-auto max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-x-8 lg:gap-y-16">
                        {/* 1 */}
                        <div key="Find your market." className="relative grid grid-cols-2 grid-rows-1 ">
                          <img src="\src\assets\SelectMarket.svg" alt="select market"></img>
                          <div className="h-fit self-center">
                            <dt className="inline flex font-semibold text-gray-900 items-center">
                                <MagnifyingGlassCircleIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                                <p>Find your market.</p>
                            </dt>{' '}
                            <dd className="inline">Navigate to the navigation bar and select a market that you want to explore further.</dd>
                          </div>
                        </div>

                        {/* 2 */}
                        <div key="Choose your start date." className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                            <CursorArrowRaysIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            Choose your start date.
                        </dt>{' '}
                        <dd className="inline">Navigate to the calender and select on your preferred start date. You can click on the "view" dropdown menu to see more available daily, monthly, or yearly intervals from the dataset.</dd>
                        </div>

                        {/* 3 */}
                        <div key='Choose your end date.' className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                            <CalendarDaysIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            Choose your end date.
                        </dt>{' '}
                        <dd className="inline">It is time to find your end date. Using the same navigation that you used to find your preferred start date, select a future date. This will create your time interval.</dd>
                        </div>

                        {/* 4 */}
                        <div key='Make your purchase!' className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                            <ShoppingCartIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            Make your purchase!
                        </dt>{' '}
                        <dd className="inline">Its time for you to purchase your share! Use the dropdown menu to select how many shares you want in your selected equity. Put in more to test your luck! Finally, select "Buy Equity" to process your purchase.</dd>
                        </div>

                        {/* 5 */}
                        <div key="Watch your purchase grow!" className="relative grid grid-cols-2 grid-rows-1 ">
                          <div className="h-fit self-center">
                            <dt className="inline flex font-semibold text-gray-900 items-center">
                                <MagnifyingGlassCircleIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                                <p>Watch your purchase grow!</p>
                            </dt>{' '}
                            <dd className="inline">Did you make the correct choice or not? Watch as your equity's price and graph changes throughout your time selection.</dd>
                          </div>
                          <img src="\src\assets\GraphExample.gif" alt="graph example" style={{maxHeight: 300, maxWidth: 800}}></img>
                        </div>

                        {/* 6 */}
                        <div key='Read more about your share.' className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                            <BookOpenIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            Read more about your share.
                        </dt>{' '}
                        <dd className="inline">There are many reasons why your equity did good or bad. Scroll down to read a little bit more about the data.</dd>
                        </div>

                        {/* 7 */}
                        <div key='Theres always a Second Chance.' className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                            <AdjustmentsHorizontalIcon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            Theres always a Second Chance.
                        </dt>{' '}
                        <dd className="inline">Sometimes your equity did not go as well as you thought it would. That's okay, try again. Select another time interval and see if you did better.</dd>
                        </div>
                    </dl>
                </div>
            </main>
        </div>
    );
}


