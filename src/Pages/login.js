import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';



export default function () {
    return (
        <div>
            <div>
                <img className="relative z-40 h-24" src={darkbluecirc} />
                <img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
            </div>
            <div>
                <h1 className="text-2xl font-bold p-5">Welcome Back!
                </h1>
            </div>
            <div>
                <img></img>
            </div>
            <div>
                <input></input>
                <input></input>
            </div>
            <div>
                <button className="bottom-0 w-80 text-white rounded-lg font-semibold hover:bg-sky-700 text-xl bg-cyan-400 p-5">
                    Login</button>
            </div>
            <p>Don't have an account? <a>sign up</a></p>
        </div>
    );
}