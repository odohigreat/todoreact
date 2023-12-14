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
          <img className="m-auto w-20 h-20 rounded-full" src={mypic} />
        </div>
        <h1 className="text-2xl font-bold p-5">Welcome Odohi Great</h1>
      </div>
      <div>
        <h2 className="text-xl italic -translate-y-24 mr-52 font-bold p-5">
          Good evening
        </h2>
        <time></time>
      </div>
      <div>
        <h1 className="text-2xl font-bold mr-52">Task lists</h1>
        <div className="p-5 m-8 pt-4 shadow-2xl rounded-lg drop-shadow-2xl">
          <div className="clear-both mb-4">
            <span className="">Daily tasks</span>
            <span className="inline-block float-right">
              <img className="w-8 h-8" src={plusicon} />
            </span>
          </div>
          <div className="grid justify-start">
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
          </div>
        </div>
        <div className="p-5 m-8 pt-4 shadow-2xl rounded-lg drop-shadow-2xl">
          <p className="mr-40">Weekly tasks</p>
          <Link>
            <img className="w-8 h-8 ml-72" src={plusicon} />
          </Link>
          <div className="">
            <input type="checkbox" />
            <label>Task 1</label>
            <br />
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
            <input type="checkbox" />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
