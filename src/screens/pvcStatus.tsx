import React from "react"
import Button from "../components/button";
import { Link } from "react-router-dom";
import TextInput from "../components/textInput";
import avatar from "../assets/images/avatar.jpg"


const PvcStatus = () => {
    const [value, setValue] = React.useState("")
    return(
            <div className="w-full h-screen flex flex-col px-6 pt-12 justify-between">
                <div>
                    <div>
                        <h5 className="font-semibold text-2xl mb-3">PVC status</h5>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-28 h-28 flex items-center justify-center" src={avatar} />
                        <p className="font-semibold text-sm mb-3">Hello, Jane Doe</p>
                        <p className="font-semibold text-sm mb-3">20-19-02-020</p>
                    </div>
                    <div>
                        <p className="font-semibold text-sm mb-6">Polling Unit</p>
                        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder="Rd 1 HerTechTrail Street, port Harcourt, Rivers State" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm mb-6">Collection Centre</p>
                        <TextInput value={value} handleChange={(e) => setValue(e)} placeholder ="Rd 1 HerTechTrail Street, Port Harcourt, Rivers State" />
                    </div>
                    <p className="font-normal text-sm mb-6">Change collection centre? <span className="text-green-600 text-sm font-semibold">Resend</span></p>
                </div>

                <div className="mb-6">
                    <Link to={"/register"} className="w-full">
                        <Button label="Close" handleClick={() => { } } />
                    </Link>
                </div>
            </div>
    )
}

export default PvcStatus;