import IMg from './assets/fb.svg'


function App() {
  return (
    <>
      <div className="container sm:mt-16 lg:mt-48 flex flex-col mx-auto items-center justify-center flex-wrap sm:flex-row">
        <div className="left w-1/3 mx-14">
          <img src={IMg} className="w-80" />
          <p className="text-3xl mx-8 hidden sm:block">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right flex flex-col w-full h-full bg-white p-2 sm:p-8 item-center sm:shadow-xl rounded-lg sm:w-1/4 text-md relative">
          <input
            type="text"
            placeholder="Email address or phone number"
            className="px-4 h-12 my-2 border border-1 border-gray-400 rounded-md focus:outline-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 h-12 my-2 border border-1 border-gray-400 rounded-md focus:outline-blue-500"
          />
          <button className="bg-blue-600 text-white font-bold my-2 py-3 rounded-md text-xl hover:cursor-pointer hover:bg-blue-700">
            Log in
          </button>
          <span className="text-center text-blue-700 text-sm my-2 hover:cursor-pointer hover:underline hover:text-blue-800">
            Forgotten password?
          </span>
          <hr className="my-2" />
          <button className="border border-whitesmoke-500 text- sm:bg-green-600 sm:text-white sm:font-bold my-2 py-3 px-4 mx-auto rounded-md text-md hover:cursor-pointer w-fit hover:bg-green-700">
            Create new account
          </button>
          <span className="absolute -bottom-10 text-sm hidden sm:block">
            <span className="font-bold cursor-pointer hover:underline">
              Create a Page
            </span>
            for a celebrity, brand or business.
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
