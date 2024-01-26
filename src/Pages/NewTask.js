import { Link, useNavigate } from "react-router-dom";
import mypic from "../Pictures/miself.jpg";
import dropdown from "../Pictures/dropdown Icon.svg"

export default function () {

    return (
        <div className="relative">
        <div className="fixed rounded-2xl top-0 left-0 right-0 h-20 w-full bg-blue-400 shadow-xl">
            <div className="flex justify-between py-4 px-4">
                <img className="h-8 w-8 self-center" src={dropdown}/>
                <h4 className="text-2xl self-center font-sans font-semibold">Add a new Todo</h4>
                <img className="rounded-full w-12 h-12 float-right ring-4 ring-zinc-800" src={mypic}/>
            </div>
        </div>
        <div>
            <input className="w-full h-32" type="text"/>
        </div>
    </div>
        );
}