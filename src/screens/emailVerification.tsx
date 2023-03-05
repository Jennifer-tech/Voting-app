import React from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";
import inec from "../assets/images/inec.jpg";
import success from "../assets/images/success.jpg"

const   EmailVerification = () => {
const [value, setValue] = React.useState("")

    return (
        <div className="w-full h-screen flex flex-col px-6 pt-12">
            <div className="w-full h-18 flex flex-row items-center justify-center bg-green-600">
                <div>
                    <img src={inec} alt="Inec logo" className="w-18 h-20 rounded-3xl mr-1 p-2"/>
                </div>
                <div>
                    <p className="font-semibold text-white text-2xl ml-1">Your PVC is Ready!</p>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-full flex m-10">
                    <h5 className="font-semibold text-2xl">Hello Jane 👋</h5>
                </div>
                
                <div>
                    <img className="items-center mb-10" src={success} alt="success logo"/>
                </div>
                <div>
                    <p className="font-semibold text-sm mb-16">Your PVC is now ready for collection. Click the button to check your designated collection center to find out when you can collect it</p>
                </div>
                
            </div>

            <div className="mb-6">
                <Link to={"/pvcStatus"} className="w-full">
                        <Button label="Check Collection Center" handleClick={() => { } } />
                </Link>
            </div>
        </div>
      );
}

export default EmailVerification  