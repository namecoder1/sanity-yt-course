import { Rss } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<header className='border-b border-neutral-200 p-4'>
			<nav className='flex items-center justify-between max-w-7xl mx-auto'>
				<Link href='/' className='flex items-center gap-x-2'>
					<div className='p-1 bg-neutral-200 border border-neutral-400'>
						<Rss size={16} />
					</div>
					<h2 className='font-mono tracking-tight'>sanity blog</h2>
				</Link>
				<ul className='flex items-center gap-4 mr-2'>
					<li>
						<Link href='/' className='nav-link'>Home</Link>
					</li>
					<li>
						<Link href='/blog' className='nav-link'>Blog</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar