import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';
import tasksdone from '../Pictures/tasksdone.png';
import { Link, useNavigate } from 'react-router-dom';


export default function () {
	return (
		<div>
			<header>
				<img className="relative z-40 h-24" src={darkbluecirc} />
				<img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
			</header>
			<main className='grid grid-cols-1 mx-16'>
				<h1 className="text-2xl text-center font-bold p-5">Welcome Back!</h1>
				<div className='grid grid-cols-1 md:flex items-center md:mt-20'>
					<div className="md:self-start basis-1/2">
						<img className='w-full h-full' src={tasksdone} />
					</div>
					<div className="basis-1/2 mb-52 text-center mt-5 md:px-10">
						<div className='mb-52 md:mb-2'>
							<input type='email' placeholder='Enter your email address' className="border-2 rounded-full p-3 w-full"></input><br />
							<input type='password' placeholder='Enter your password' className="border-2 rounded-full p-3 w-full my-8"></input><br />
						</div>
						<div className='mb-7'>
							<Link className="cursor-pointer transition-all bg-cyan-400 text-white px-28 py-3 rounded-lg border-cyan-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" to="/dashboard">Login</Link>
						</div>
						<p>Don't have an account? <Link className="text-sky-600 transition ease-in-out duration-300 hover:border-b-2 hover:border-sky-400 hover hover:text-sky-400 font-bold" to="/signUp">sign up</Link></p>
					</div>
				</div>
			</main>
		</div>
	);
}