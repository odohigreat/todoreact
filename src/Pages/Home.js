import todoperson from '../Pictures/todoperson.png';
import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';


export default function () {
    return (
        <div>
            <img className="relative z-40 h-24" src={darkbluecirc} />
            <img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
            <div>
                <div className="mt-20">
                    <img src={todoperson} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold p-5">
                        Get things done with TODO
                    </h1>
                    <p className="text-xl p-8 font-family"> Lorem ipsum dolor sit amet, consectetur<br></br>
                        adipiscing elit. Nunc vulputate libero<br></br>
                        let velit interdum, ac aliquet odio mattis.
                    </p>
                    <button className="bottom-0 w-80 text-white rounded-lg font-semibold hover:bg-sky-700 text-xl bg-cyan-400 p-5">Get Started</button>
                </div>
            </div>
        </div>
    );
}