import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const StatusChecker = () => {
    const [value, setValue] = React.useState("")
    return(
            <div className="w-full h-screen flex flex-col px-6 pt-12 justify-between">
                <div>
                    <h5 className="font-semibold text-2xl mb-6">Check Your PVC Status</h5>
                    <p className="font-normal text-sm mb-3">Enter VIN/BVN/NIN</p>
                    <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Enter VIN/BVN/NIN" />
                </div>

                <div className="mb-6">
                    <Link to={"/emailVerification"} className="w-full">
                        <Button label="Check Status" handleClick={() => { } } />
                    </Link>
                </div>
            </div>
    )
}

export default StatusChecker;