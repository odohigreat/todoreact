import darkbluecirc from "../Pictures/darkbluecirc.png";
import lightbluecirc from "../Pictures/lightbluecirc.png";
import plusicon from "../Pictures/plus_icon.png";
import { Link, useNavigate } from "react-router-dom";
import mypic from "../Pictures/miself.jpg";

export default function () {
    return (
        <div>
            <div>
                <img className="relative z-40 h-24" src={darkbluecirc} />
                <img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
            </div>
            <div className="pt-44 -translate-y-24 bg-gradient-to-r from-40% from-cyan-500 to-blue-500 text-white">
                <div className="">
                    <img className="m-auto w-24 h-24 outline outline-offset-4 rounded-full" src={mypic} />
                </div>
                <h1 className="text-2xl text-center font-bold p-5">Welcome Odohi Great</h1>
            </div>
            <div className="pt-5">
                <h2 className="text-xl italic -translate-y-24 pl-8 font-bold">
                    Good evening
                </h2>
                <time></time>
            </div>
            <div className="p-5">
                <h1 className="text-2xl font-bold">Task lists</h1>
                <div className="p-5 my-5 pt-4 shadow-2xl rounded-lg drop-shadow-2xl">
                    <div className="clear-both mb-4">
                        <span className="font-bold">Daily tasks</span>
                        <span className="inline-block float-right">
                            <img className="w-8 h-8" src={plusicon} />
                        </span>
                    </div>
                    <div className="">
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Learn Golang Programming</label>
                        <br />
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Learn responsive design</label>
                        <br />
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Finish Company Tasks</label>
                        <br />
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Learn React JS</label>
                        <br />
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Learn Dutch language</label>
                        <br />
                    </div>
                </div>
                <div className="p-5 my-5 pt-4 shadow-2xl rounded-lg drop-shadow-2xl">
                    <div className="clear-both mb-4">
                        <span className="font-bold">Weekly tasks</span>
                        <span className="inline-block float-right">
                            <img className="w-8 h-8" src={plusicon} />
                        </span>
                    </div>
                    <div className="">
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Do laundry</label>
                        <br />
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Clean your tech</label>
                        <br />
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Lorem Ipsum</label>
                        <br />
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">Dolor sit amet</label>
                        <br />
                        <input className="h-5 w-5 my-2 mr-4" type="checkbox" />
                        <label className="text-lg">per si consectetur</label>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}
