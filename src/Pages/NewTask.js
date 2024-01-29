import { Link, useNavigate } from "react-router-dom";
import mypic from "../Pictures/miself.jpg";
import dropdown from "../Pictures/dropdown Icon.svg";
import clockIcon from "../Pictures/clock.png";
import addIcon from "../Pictures/add.png";
import homeIcon from "../Pictures/home.png";
import profileIcon from "../Pictures/profile.png";
import searchIcon from "../Pictures/search.png";


export default function () {

    return (
        <div className="relative p-4">
            <div className="pt-3 fixed bottom-0 left-0 right-0 h-16 w-full bg-blue-400">
                <div className="flex justify-around">
                    <img className="h-8 w-8" src={homeIcon} />
                    <img className="h-8 w-8" src={searchIcon} />
                    <img className="h-8 w-8" src={clockIcon} />
                    <img className="h-8 w-8" src={profileIcon} />
                </div>
            </div>
            <div className="fixed rounded-2xl top-0 left-0 right-0 h-20 w-full mb-10 bg-gradient-to-r from-blue-500 from-10% via-blue-400 via-30% to-cyan-400 to-90% drop-shadow-lg">
                <div className="flex justify-between py-4 px-4">
                    <img className="h-8 w-8 self-center" src={dropdown} />
                    <h4 className="text-2xl self-center font-family: 'Poppins', sans-serif; font-bold">Add a new Todo</h4>
                    <img className="rounded-full w-12 h-12 float-right ring-4 ring-zinc-800" src={mypic} />
                </div>
            </div>
            <div className="mt-28">
                <hr />
                <p className="my-7 text-center text-lg font-family: 'Poppins', sans-serif; font-medium">Type in you new task, then <br />Click the Add button<br /> to add a new task to your todo list</p>
                <hr />
                <input className="border-gray-400 border-2 rounded-xl drop-shadow-lg mt-20 mb-8 h-28 w-full" type="text"></input>
                <Link className="text-white px-12 rounded-lg float-right shadow-lg font-semibold hover:bg-cyan-400 text-xl bg-blue-500 p-5" to="">Add</Link>
            </div>
        </div>
    );
}