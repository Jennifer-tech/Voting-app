import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import successful from "../assets/images/successful.jpg"

const Success = () => {
    return (
        <div className="w-full h-screen flex flex-col px-6 justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="w-full h-32 flex flex-col items-center justify-center mb-16">
                    <img src={successful} alt="success logo" className="w-34 flex items-center"/>
                </div>
                <div>
                    <h5 className="font-semibold text-2xl mb-4 text-center">Vote Successful!</h5>
                    <p className="font-semibold text-sm mb-4 text-center">Your vote has been successfully submitted</p>
                </div>
            </div>
           

            <div className="mb-6 flex ">
                <Link to={"/"} className="w-full">
                    <Button label="Okay, got it!" handleClick={() => { } } />
                </Link>
            </div>
        </div>
    )
}

export default Success;