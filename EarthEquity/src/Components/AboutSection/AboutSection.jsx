import { Link } from "react-router-dom";

export default function AboutSection(props) {
    return (
        <section className="col-span-2 row-start-2">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-10">
                About
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                {props.desc}
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl hover:animate-pulse mt-10">
                Related Resources
            </h1>
            <ul className="list-disc relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none ml-10">
                <Link to={props.dataset}>
                    <li className="hover:underline">Actual Dataset Utilized</li>
                </Link>
                <Link to="https://search.earthdata.nasa.gov/search/granules/collection-details?p=C179003227-ORNL_DAAC&pg[0][v]=f&pg[0][gsk]=-start_date&g=G1546810810-ORNL_DAAC&gdf=CSV&tl=1696732241!3!!&fsm0=atmospheric%20temperature&fst0=atmosphere&lat=-28.687500000000004&long=-83.25&zoom=0">
                    <li className="hover:underline">
                        NASA Earthdata Search Collection
                    </li>
                </Link>
                <Link to="https://worldview.earthdata.nasa.gov/">
                    <li className="hover:underline">
                        NASA Worldview Collection
                    </li>
                </Link>
            </ul>
        </section>
    );
}
