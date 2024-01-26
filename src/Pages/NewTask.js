import { Link, useNavigate } from "react-router-dom";
import mypic from "../Pictures/miself.jpg";

export default function () {

    return (
        <div className="relative">
        <div className="fixed rounded-2xl top-0 left-0 right-0 h-20 w-full bg-blue-400">
            <div className="py-4 px-4">
                <img className="rounded-full w-12 h-12 float-right ring-4 ring-zinc-800" src={mypic}/>
            </div>
        </div>
    </div>
        );
}