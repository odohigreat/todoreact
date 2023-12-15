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
            <div className="mb-16 text-center">
                <h1 className="text-2xl font-bold p-5">Welcome OnBoard
                </h1>
                <h4>Lets help you meet up your tasks</h4>
            </div>
            <div className="px-10 mb-60">
                <input type='text' placeholder='Enter your fullname' className="border-2 rounded-full p-3 w-full my-8 "></input><br />
                <input type='email' placeholder='Enter your email address' className="border-2 rounded-full p-3 w-full"></input><br />
                <input type='password' placeholder='Enter your password' className="border-2 rounded-full p-3 w-full my-8"></input><br />
                <input type='password' placeholder='Confirm your password' className="border-2 rounded-full p-3 w-full"></input><br />
            </div>
            <div className='text-center'>
                <div className="mb-7">
                    <Link className="text-white px-32 rounded-lg font-semibold hover:bg-sky-700 text-xl bg-cyan-400 p-5" to="/login">Register</Link>
                </div>
                <p>Already have an account? <Link className="text-sky-500 font-bold" to="/login">sign in</Link></p>
            </div>
        </div>

    );
}