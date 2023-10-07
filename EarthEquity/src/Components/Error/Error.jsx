import { useRouteError, NavLink } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div
            id="error-page"
            className="w-screen min-h-screen flex flex-col gap-y-8 justify-center text-center"
        >
            <h1 className="font-black text-4xl">Oops!</h1>
            <p className="font-bold text-2xl">
                Sorry, an unexpected error has occurred.
            </p>
            <p className="font-normal text-lg">
                <i>{error.statusText || error.message}</i>
            </p>
            <NavLink
                to="/"
                className="max-w-sm mx-auto rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
                Return to Home Page
            </NavLink>
        </div>
    );
};

export default Error;