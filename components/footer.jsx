import React from 'react'
import { Heart, Rss } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='p-4 border-t border-gray-200'>
			<div className='max-w-7xl mx-auto flex items-center justify-between'>
				<Link href='/' className='flex items-center gap-x-2'>
					<div className='p-1 bg-neutral-200 border border-neutral-300'>
						<Rss size={16} />
					</div>
					<h2 className='font-mono tracking-tight font-light'>sanity<span className='font-bold ml-1.5'>blog</span></h2>
				</Link>
				<p className='flex items-center gap-1 text-center text-sm text-neutral-600'>maded with <Heart color='red' size={16} /> by <Link href='https://tob.codes' className='hover:underline underline-offset-2'>@tobi</Link></p>
			</div>
		</footer>
	)
}

export default Footer