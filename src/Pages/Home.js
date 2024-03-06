import React from 'react';
import signUp from './signUp';
import todoperson from '../Pictures/todoperson.png';
import darkbluecirc from '../Pictures/darkbluecirc.png';
import lightbluecirc from '../Pictures/lightbluecirc.png';
import { Link, useNavigate } from 'react-router-dom';



export default function () {
	const navigate = useNavigate();
	return (
		<div>
			<img className="relative z-40 h-24" src={darkbluecirc} />
			<img className="absolute top-0 left-0 z-10" src={lightbluecirc} />
			<div>
				<div className="mt-20">
					<img src={todoperson} />
				</div>
				<div className='text-center'>
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
		</div>
	);
}