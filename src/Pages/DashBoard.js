'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
	Bars3Icon,
	CalendarIcon,
	ChartPieIcon,
	CalendarDaysIcon,
	HomeIcon,
	XMarkIcon,
	ClipboardDocumentCheckIcon,
	CogIcon,
} from '@heroicons/react/24/outline'

const navigation = [
	{ name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
	{ name: 'Tasks', href: '#', icon: ClipboardDocumentCheckIcon, current: false },
	{ name: 'Events', href: '#', icon: CalendarDaysIcon, current: false },
	{ name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
	{ name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
	{ name: 'Settings', href: '#', icon: CogIcon, current: false },
]
const teams = [
	{ id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
	{ id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
	{ id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
			<div>
				<Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
					/>

					<div className="fixed inset-0 flex">
						<DialogPanel
							transition
							className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
						>
							<TransitionChild>
								<div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
									<button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
										<span className="sr-only">Close sidebar</span>
										<XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
									</button>
								</div>
							</TransitionChild>
							{/* Sidebar component, swap this element with another sidebar if you like */}
							<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-cyan-500 px-6 pb-2">
								<div className="flex h-16 shrink-0 items-center">
									<img
										alt="Your Company"
										src="https://tailwindui.com/img/logos/mark.svg?color=white"
										className="h-8 w-auto"
									/>
								</div>
								<nav className="flex flex-1 flex-col">
									<ul role="list" className="flex flex-1 flex-col gap-y-7">
										<li>
											<ul role="list" className="-mx-2 space-y-1">
												{navigation.map((item) => (
													<li key={item.name}>
														<a
															href={item.href}
															className={classNames(
																item.current
																	? 'bg-cyan-600 text-white'
																	: 'text-slate-200 hover:bg-cyan-600 hover:text-white',
																'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
															)}
														>
															<item.icon
																aria-hidden="true"
																className={classNames(
																	item.current ? 'text-white' : 'text-slate-200 group-hover:text-white',
																	'h-6 w-6 shrink-0',
																)}
															/>
															{item.name}
														</a>
													</li>
												))}
											</ul>
										</li>
										<li>
											<div className="text-xs font-semibold leading-6 text-slate-200">Your teams</div>
											<ul role="list" className="-mx-2 mt-2 space-y-1">
												{teams.map((team) => (
													<li key={team.name}>
														<a
															href={team.href}
															className={classNames(
																team.current
																	? 'bg-cyan-600 text-white'
																	: 'text-slate-200 hover:bg-cyan-600 hover:text-white',
																'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
															)}
														>
															<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-[0.625rem] font-medium text-white">
																{team.initial}
															</span>
															<span className="truncate">{team.name}</span>
														</a>
													</li>
												))}
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</DialogPanel>
					</div>
				</Dialog>

				{/* Static sidebar for desktop */}
				<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-cyan-500 px-6">
						<div className="flex h-16 shrink-0 items-center">
							<img
								alt="Your Company"
								src="https://tailwindui.com/img/logos/mark.svg?color=white"
								className="h-8 w-auto"
							/>
						</div>
						<nav className="flex flex-1 flex-col">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-1">
										{navigation.map((item) => (
											<li key={item.name}>
												<a
													href={item.href}
													className={classNames(
														item.current
															? 'bg-cyan-600 text-white'
															: 'text-slate-200 hover:bg-cyan-600 hover:text-white',
														'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
													)}
												>
													<item.icon
														aria-hidden="true"
														className={classNames(
															item.current ? 'text-white' : 'text-slate-200 group-hover:text-white',
															'h-6 w-6 shrink-0',
														)}
													/>
													{item.name}
												</a>
											</li>
										))}
									</ul>
								</li>
								<li>
									<div className="text-xs font-semibold leading-6 text-slate-200">Your teams</div>
									<ul role="list" className="-mx-2 mt-2 space-y-1">
										{teams.map((team) => (
											<li key={team.name}>
												<a
													href={team.href}
													className={classNames(
														team.current
															? 'bg-cyan-500 text-white'
															: 'text-slate-200 hover:bg-cyan-600 hover:text-white',
														'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
													)}
												>
													<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-[0.625rem] font-medium text-white">
														{team.initial}
													</span>
													<span className="truncate">{team.name}</span>
												</a>
											</li>
										))}
									</ul>
								</li>
								<li className="-mx-6 mt-auto">
									<a
										href="#"
										className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-cyan-600"
									>
										<img
											alt=""
											src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
											className="h-8 w-8 rounded-full"
										/>
										<span className="sr-only">Your profile</span>
										<span aria-hidden="true">Odohi Great</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="sticky top-0 z-40 flex items-center gap-x-6 bg-cyan-500 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
					<button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-white lg:hidden">
						<span className="sr-only">Open sidebar</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
					<div className="flex-1 text-lg font-semibold leading-6 text-white">Dashboard</div>
					<a href="#">
						<span className="sr-only">Your profile</span>
						<img
							alt=""
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							className="h-8 w-8 rounded-full"
						/>
					</a>
				</div>

				<main className="py-5 px-5 lg:pl-80 lg:pr-10">
					<div className="flex flex-col space-y-2 mb-10">
						<h3 className='font-semibold text-xl'>Recent Activity</h3>
						<div className='flex items-center justify-between space-x-5'>
							<div className='rounded-md bg-cyan-100 basis-1/3 h-16 shadow-md'>

							</div>
							<div className='rounded-md bg-cyan-100 basis-1/3 h-16 shadow-md'>

							</div>
							<div className='rounded-md bg-cyan-100 basis-1/3 h-16 shadow-md'>

							</div>
						</div>
					</div>
					<div className="flex flex-col space-y-2">
						<h3 className='font-semibold text-2xl'>To Do</h3>
						<div className='flex items-center justify-between space-x-5'>
							<div className='rounded-md basis-1/2 h-28 shadow-md'>
								
							</div>
							<div className='rounded-md basis-1/2 h-28 shadow-md'>

							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}
