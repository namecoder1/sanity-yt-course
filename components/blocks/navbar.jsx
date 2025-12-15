import { Rss } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<header className='border-b fixed left-0 right-0 bg-white/70 backdrop-blur-sm z-50 overflow-visible px-4 top-0 border-neutral-200 p-4'>
			<nav className='flex items-center justify-between max-w-7xl mx-auto'>
				<Link href='/' className='flex items-center gap-x-2'>
					<div className='p-1 bg-neutral-200 border border-neutral-300'>
						<Rss size={16} />
					</div>
					<h2 className='font-mono tracking-tight font-light'>sanity<span className='font-bold ml-1.5'>blog</span></h2>
				</Link>
				<ul className='flex items-center gap-4 mr-2'>
					<li>
						<Link href='/' className='hover-underline-animation hover:text-neutral-500 duration-200 transition-colors'>Home</Link>
					</li>
					<li>
						<Link href='/blog' className='hover-underline-animation hover:text-neutral-500 duration-200 transition-colors'>Blog</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar