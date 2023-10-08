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

const features = [
    {
      name: 'Find your market.',
      description: 'Navigate to the navigation bar and select a market that you want to explore further.',
      icon: MagnifyingGlassCircleIcon,
    },
    {
      name: 'Choose your start date.',
      description: 'Navigate to the calender and select on your preferred start date. You can click on the "view" dropdown menu to see more available daily, monthly, or yearly intervals from the dataset.',
      icon: CursorArrowRaysIcon,
    },
    {
      name: 'Choose your end date.',
      description: 'It is time to find your end date. Using the same navigation that you used to find your preferred start date, select a future date. This will create your time interval.',
      icon: CalendarDaysIcon,
    },
    {
      name: 'Make your purchase!',
      description: 'Its time for you to purchase your share! Use the dropdown menu to select how many shares you want in your selected equity. Put in more to test your luck! Finally, select "Buy Equity" to process your purchase.',
      icon: ShoppingCartIcon,
    },
    {
      name: 'Watch your purchase grow!',
      description: 'Did you make the correct choice or not? Watch as your equity\'s price and graph changes throughout your time selection.',
      icon: PresentationChartLineIcon,
    },
    {
      name: 'Read more about your share.',
      description: 'There are many reasons why your equity did good or bad. Scroll down to read a little bit more about the data. ',
      icon: BookOpenIcon,
    },
    {
      name: 'Theres always a Second Chance.',
      description: 'Sometimes your equity did not go as well as you thought it would. That\'s okay, try again. Select another time interval and see if you did better. ',
      icon: AdjustmentsHorizontalIcon,
    },
  ]

export default function TutorialSection() {
    return (
        <div className="bg-white">
            <main>
                <div className="mx-auto max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                    </dl>
                </div>
            </main>
        </div>
    );
}


