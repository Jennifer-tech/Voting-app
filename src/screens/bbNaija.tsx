import React from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const BbNaija = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="w-full h-screen flex flex-col px-6 pt-12">
      <div>
        <h5 className="font-semibold text-2xl mb-6">BB Naija</h5>
        <p className="font-semibold text-sm mb-3">
          Select your favourite candidate
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 mb-6 place-items-center w-full mx-auto">
        <div className="w-full">
          <div className="rounded-md w-full bg-stone-700 flex flex-col items-center h-32 p-4 mb-2"></div>
          <p className="font-normal text-sm mb-2 text-center">John Doe</p>
        </div>
        <div className="w-full">
          <div className="rounded-md w-full bg-stone-700 flex flex-col items-center h-32 p-4 mb-2"></div>
          <p className="font-normal text-sm mb-2 text-center">John Doe</p>
        </div>
        <div className="w-full">
          <div className="rounded-md w-full bg-stone-700 flex flex-col items-center h-32 p-4 mb-2"></div>
          <p className="font-normal text-sm mb-2 text-center">John Doe</p>
        </div>
        <div className="w-full ">
          <div className="rounded-md w-full bg-stone-700 flex flex-col items-center h-32 p-4 mb-2"></div>
          <p className="font-normal text-sm mb-2 text-center">John Doe</p>
        </div>

      </div>

      <div className="mb-8">
        <Link to={"/verification"} className="w-full">
          <Button label="Select" handleClick={() => {}} />
        </Link>
      </div>

    </div>
  );
};
export default BbNaija;
