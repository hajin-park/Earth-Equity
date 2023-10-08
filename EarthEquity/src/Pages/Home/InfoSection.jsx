import { BuildingStorefrontIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="bg-white py-20">
        <div className="bg-gray-700 py-24 sm:py-32 rounded-2xl">
            <div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        What is the Stock Market?
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        The term stock market refers to several exchanges in which shares of publicly held companies are bought and sold. Such financial activities are conducted through formal exchanges and via over-the-counter (OTC) marketplaces that operate under a defined set of regulations. 
                        Both “stock market” and “stock exchange” are often used interchangeably. Traders in the stock market buy or sell shares on one or more of the stock exchanges that are part of the overall stock market.
                        The leading U.S. stock exchanges include the New York Stock Exchange (NYSE) and the Nasdaq.
                    </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div key="Learn more about the Stock Market" className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                        <BuildingStorefrontIcon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                            Learn more about the Stock Market
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                        <p className="flex-auto">There are many parts and functions of the stock market. Learning about these are essential to succesfully trading stocks.</p>
                        <p className="mt-6">
                            <a href="https://www.investopedia.com/terms/s/stockmarket.asp#toc-what-is-the-stock-market" target="_blank" className="text-sm font-semibold leading-6 text-indigo-400">
                            Learn more <span aria-hidden="true">→</span>
                            </a>
                        </p>
                        </dd>
                    </div>
                    <div key="What is a Stock?" className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                        <CurrencyDollarIcon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                            What is a Stock?
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                        <p className="flex-auto">A stock, also known as equity, is a security that represents the ownership of a fraction of the issuing corporation. Units of stock are called "shares" which entitles the owner to a proportion of the corporation's assets and profits equal to how much stock they own.</p>
                        <p className="mt-6">
                            <a href="https://www.investopedia.com/terms/s/stock.asp" target="_blank" className="text-sm font-semibold leading-6 text-indigo-400">
                            Learn more <span aria-hidden="true">→</span>
                            </a>
                        </p>
                        </dd>
                    </div>
                    <div key="What is Stock Trading?" className="flex flex-col">
                        <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                        <BuildingStorefrontIcon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                            What is Stock Trading?
                        </dt>
                        <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                        <p className="flex-auto">Stock trading involves buying and selling shares in publicly traded companies. In the United States, this typically occurs on stock exchanges like the New York Stock Exchange, NYSE, or the Nasdaq stock market.</p>
                        <p className="mt-6">
                            <a href="https://www.investopedia.com/what-is-stock-trading-7109934" target="_blank" className="text-sm font-semibold leading-6 text-indigo-400">
                            Learn more <span aria-hidden="true">→</span>
                            </a>
                        </p>
                        </dd>
                    </div>
                </dl>
                </div>
            </div>
        </div>
        <div>
            <div className="grid grid-rows-2 justify-center mx-auto max-w-7xl px-6 lg:px-8 mt-20">
                <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Where can you trade stocks?
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    You can use your brokerage account to gain access to stocks and other types of investments. Opening a brokerage account is one of the first steps to building your personal investment portfolio. Buy and sell stocks, mutual funds, ETFs, and other securities. Take advantage of potential long-term growth.
                </p>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 max-w-2xl max-h-2xl gap-x-20">
                    <img src='\src\assets\Charles_Schwab_Corporation-Logo.png'></img>
                    <img src='\src\assets\E-Trade-Logo.svg'></img>
                    <img src='\src\assets\Merrill-Lynch-Logo.png'></img>
                    <img src='\src\assets\Robinhood-Logo.png'></img>
                    <img src='\src\assets\TD-Ameritrade-Logo.png'></img>
                    <img src='\src\assets\Fidelity-Logo.png'></img>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}