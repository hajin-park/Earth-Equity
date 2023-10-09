export default function InputBox({ setAmount, cash }) {
    return (
        <div>
            <label
                htmlFor="number"
                className="block text-center text-sm font-medium leading-6 text-gray-900"
            >
                EE Available To Use: {cash}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm px-10    ">
                <input
                    type="number"
                    name="amnumberount"
                    id="number"
                    onChange={(e) => setAmount(e.target.value)}
                    className="block w-full rounded-md border-0 p-1.5 pr-10 text-gray ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-500 sm:text-sm sm:leading-6"
                    placeholder="1000"
                    defaultValue="0"
                    aria-invalid="true"
                    aria-describedby="number-error"
                />
            </div>
        </div>
    );
}
