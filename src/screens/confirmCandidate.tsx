import React from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const ConfirmCandidate = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="w-full h-screen flex flex-col px-6 pt-12">
      <div>
        <h5 className="font-semibold text-2xl mb-6">Confirm Candidate</h5>
      </div>
      <div className="w-full mx-auto mb-6 place-items-center">
        <div className="w-full">
          <div className="rounded-md w-full bg-stone-700 flex flex-col items-center h-32 p-4 mb-2"></div>
          <p className="font-semibold text-lg mb-2 text-center">John Doe</p>
        </div>
        <p className="font-normal text-sm">You have selected Atiku as your preferred candidate. Click the button to submit</p>
        

      </div>

      <div className="mb-8">
        <Link to={"/success"} className="w-full">
          <Button label="Submit your vote" handleClick={() => {}} />
        </Link>
      </div>

    </div>
  );
};
export default ConfirmCandidate;
