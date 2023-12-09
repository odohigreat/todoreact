import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';
import { Link, useNavigate } from 'react-router-dom';


export default function () {
    return (
        <div>
            <div>
                <img className="relative z-40 h-24" src={darkbluecirc} />
                <img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
            </div>
            <div className="mb-16">
                <h1 className="text-2xl font-bold p-5">Welcome OnBoard
                </h1>
                <h4>Lets help you meet up your tasks</h4>
            </div>
            <div className=" mb-44">
                <input className="border-2 rounded-full p-3 px-16 my-8 "></input><br/>
                <input className="border-2 rounded-full p-3 px-16"></input><br/>
                <input className="border-2 rounded-full p-3 px-16 my-8"></input><br/>
                <input className="border-2 rounded-full p-3 px-16"></input><br/>
            </div>
            <div>
            <Link className="text-white rounded-lg font-semibold px-28 hover:bg-sky-700 text-xl bg-cyan-400 p-5" to="/login">Register</Link>
            </div>
            <p className="mt-10">Already have an account? <a>sign in</a></p>
        </div>

    );
}