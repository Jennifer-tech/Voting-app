import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";

const Location = () => {
    const [value, setValue] = React.useState("")
    return(
        <div className="w-full h-screen flex flex-col px-6 pt-12 justify-between">
            <div >
                <h5 className="font-semibold text-2xl mb-8">Choose Polling Unit</h5>
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="City, State" />
                <p className="font-normal text-sm mb-6">Choose PVC collection centre</p>
                <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Select Location" />
            </div>

            <div className="mb-6">
                <Link to={"/success"} className="w-full">
                        <Button label="Proceed" handleClick={() => { } } />
                </Link>
            </div>
        </div>
    )
}

export default Location;