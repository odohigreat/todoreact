import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';
import tasksdone from '../Pictures/tasksdone.png';
import { Link, useNavigate } from 'react-router-dom';


export default function () {
    return (
        <div>
            <div>
                <img className="relative z-40 h-24" src={darkbluecirc} />
                <img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
            </div>
            <div>
                <h1 className="text-2xl text-center font-bold p-5">Welcome Back!
                </h1>
            </div>
            <div className="m-12">
                <img className='w-70 h-48' src={tasksdone} />
            </div>
            <div className='text-center'>
                <div className="px-10 mb-52">
                    <input type='email' placeholder='Enter your email address' className="border-2 rounded-full p-3 w-full"></input><br />
                    <input type='password' placeholder='Enter your password' className="border-2 rounded-full p-3 w-full my-8"></input><br />
                </div>
                <div className='mb-7'>
                    <Link className="text-white px-32 rounded-lg font-semibold hover:bg-sky-700 text-xl bg-cyan-400 p-5" to="/dashboard">Login</Link>
                </div>
                <p>Don't have an account? <Link className="text-sky-500 font-bold" to="/signUp">sign up</Link></p>
            </div>
        </div>
    );
}