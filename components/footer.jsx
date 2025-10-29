import React from 'react'
import { Rss } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='p-4 border-t border-gray-200'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<Link href='/' className='flex items-center gap-x-2'>
					<div className='p-1 bg-neutral-200 border border-neutral-400'>
						<Rss size={16} />
					</div>
					<h2 className='font-mono tracking-tight'>sanity blog</h2>
				</Link>
				<p className='text-neutral-500 text-xs'>&copy; {new Date().getFullYear()}</p>
			</div>
		</footer>
	)
}

export default Footer