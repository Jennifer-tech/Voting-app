import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import successful from "../assets/images/successful.jpg"

const Success = () => {
    return (
        <div className="w-full h-screen flex flex-col px-6 justify-center">
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="w-full h-32 flex flex-col items-center justify-center mb-6">
                    <img src={successful} alt="success logo" className="w-32 flex items-center"/>
                </div>
                <div>
                    <h5 className="font-semibold text-2xl mb-5">Registration Successful</h5>
                    <p className="font-semibold text-sm mb-2">To verify PVC click... 
                    <Link to={"/statusChecker"}>
                        <span className="text-green-600 text-sm font-semibold">Verify</span>
                    </Link></p>
                </div>
            </div>
           

            <div className="mb-6 flex ">
                <Link to={"/"} className="w-full">
                    <Button label="Okay,Thanks" handleClick={() => { } } />
                </Link>
            </div>
        </div>
    )
}

export default Success;