import React from "react";
import { CheckCircleIcon, ChevronRightIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

const Home = () => {
    return (
        <div className="bg-white px-6 py-10 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Earth Equity for Databases</h1>
            <p className="mt-6 text-xl leading-8">
            Earth Equity is an interactive learning platform that aims to educate a broad range of students from junior-high to college on significant challenges in the world. By emulating an online brokerage platform (i.e. Fidelity, RobinHood, Weibo, etc…) users will have the ability to understand changes in the world through the perspective of a volatile economy. In the same way a company’s stock price changes over time, data available in public repositories change as a result of different factors. Earth Equity encourages its users to understand what influences changes in data and how to use this knowledge to combat challenges the world is facing. Introductory knowledge of investing as a subsequent side-effect!
            </p>
            <div className="mt-10 max-w-2xl">
            <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                sed turpis id.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                <ChevronRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                    <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                </span>
                </li>
                <li className="flex gap-x-3">
                <ChevronRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                    <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                    deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </span>
                </li>
                <li className="flex gap-x-3">
                <ChevronRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                    <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                    auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </span>
                </li>
            </ul>
            <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">From beginner to expert in 3 hours</h2>
            <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                ipsum eu a sed convallis diam.
            </p>
            </div>
        </div>
        </div>
    )
}

export default Home