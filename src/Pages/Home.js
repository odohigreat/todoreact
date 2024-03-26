import React from 'react';
import signUp from './signUp';
import todoperson from '../Pictures/todoperson.png';
import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';
import { Link, useNavigate } from 'react-router-dom';
import igicon from '../Pictures/instagram.png';
import fbicon from '../Pictures/facebook.png';
import xicon from '../Pictures/twitter.png';
import inicon from '../Pictures/linkedin.png';
import giticon from '../Pictures/github.png';


export default function () {
	const navigate = useNavigate();
	return (
		<div>
			<header>
				<img className="relative z-40 h-24" src={darkbluecirc} />
				<img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
			</header>
			<main className='md:mb-20 mb-32'>
				<div className='md:flex md:items-center md:justify-between md:mx-10'>
					<div className="md:basis-1/2 mt-20 md:mt-0">
						<img className='md:scale-75 md:-mt-20' src={todoperson} />
					</div>
					<div className='md:basis-1/2 text-center md:-mt-28'>
						<h1 className="text-2xl font-bold p-5">
							Get things done with TODO
						</h1>
						<p className="mb-6 text-sm p-8"> Lorem ipsum dolor sit amet, consectetur<br></br>
							adipiscing elit. Nunc vulputate liberoto<br></br>
							let velit interdum, ac aliquet odio mattis.
						</p>
						<Link className="cursor-pointer transition-all bg-cyan-400 text-white px-28 py-3 rounded-lg border-cyan-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" to="/signUp">Get started</Link>
					</div>
				</div>
			</main>
			<footer className="bg-gray-200 flex justify-between items-center py-10 px-5 w-full bottom-0">
				<div>
					<p className='md:text-base text-xs'>© 2024 To-do Inc. All rights reserved.</p>
				</div>
				<div className='flex items-center justify-between space-x-3'>
					<Link><img className='w-6 h-6' src={fbicon} /></Link>
					<Link><img className='w-6 h-6' src={giticon} /></Link>
					<Link><img className='w-6 h-6' src={igicon} /></Link>
					<Link><img className='w-6 h-6' src={inicon} /></Link>
					<Link><img className='w-6 h-6' src={xicon} /></Link>
				</div>
			</footer>
		</div>
	);
}