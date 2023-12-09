import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';



export default function () {
    return (
        <div>
            <div>
                <img className="relative z-40 h-24" src={darkbluecirc} />
                <img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
            </div>
            <div className="bg-cyan-400 text-white">
                <img></img>
                <h1 className="text-2xl font-bold p-5">Welcome Odohi Great
                </h1>
            </div>
            <div>
                <h2 className="text-2xl font-bold p-5">Good evening
                </h2>
                <time></time>
            </div>
            <div>
                <h1 className="text-2xl font-bold p-5">Task lists
                </h1>
                <div>
                    <p>Daily tasks</p>
                    <img></img>
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                </div>
            </div>
        </div>

    );
}