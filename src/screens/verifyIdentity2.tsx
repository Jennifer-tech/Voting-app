import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import textMessageIcon from "../assets/images/textMessageIcon.jpg"


const VerifyIdentity2 = () => {
    return(
        <div className="w-full h-screen flex flex-col px-6 pt-12 justify-between">
            <div className="flex flex-col ">
                <h5 className="font-semibold text-2xl mb-2">Verify Your Identity</h5>
                <p className="font-normal text-sm mb-8">Enter the 6-digit OTP sent to 0803*****94</p>
                <div className="w-full h-32 flex items-center justify-center">
                    <img src={textMessageIcon} alt="messageIcon" className="w-32 flex items-center justify-center"/>
                </div>
                <p className="font-normal text-sm mb-4">Didn't receive an OTP? <span className="text-green-600 text-sm font-normal">Resend</span></p>
                <p className="font-normal text-sm mb-8">Don't have access to 0803*****94? <span className="text-green-600 text-sm font-normal">Click here</span></p>
            </div>

            <div className="mb-6">
                <Link to={"/personalInfo"} className="w-full">
                    <Button label="Proceed" handleClick={() => { } } />
                </Link>
            </div>
        </div>
    )
}

export default VerifyIdentity2;