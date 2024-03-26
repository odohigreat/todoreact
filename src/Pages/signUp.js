import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';
import { Link, useNavigate } from 'react-router-dom';


export default function () {
	return (
		<div>
			<header>
				<img className="relative z-40 h-24" src={darkbluecirc} />
				<img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
			</header>
			<main>
				<div className="mb-16 md:mb-8 text-center">
					<h1 className="text-2xl font-bold pb-2">Welcome OnBoard</h1>
					<h4>Lets help you meet up your tasks</h4>
				</div>
				<div className="px-10 mb-52 md:mb-2 grid grid-cols-1 place-items-center">
					<input type='text' placeholder='Enter your fullname' className="border-2 rounded-full p-3 md:w-1/3 w-full"></input><br />
					<input type='email' placeholder='Enter your email address' className="border-2 rounded-full p-3 md:w-1/3 w-full"></input><br />
					<input type='password' placeholder='Enter your password' className="border-2 rounded-full p-3 md:w-1/3 w-full"></input><br />
					<input type='password' placeholder='Confirm your password' className="border-2 rounded-full p-3 md:w-1/3 w-full"></input><br />
				</div>
			</main>
			<footer className='text-center'>
				<div className="mb-7">
					<Link className="cursor-pointer transition-all bg-cyan-400 text-white px-28 py-3 rounded-lg border-cyan-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" to="/login">Register</Link>
				</div>
				<p>Already have an account? <Link className="text-sky-600 transition ease-in-out duration-300 hover:border-b-2 hover:border-sky-400 hover hover:text-sky-400 font-bold" to="/login">sign in</Link></p>
			</footer>
		</div>

	);
}