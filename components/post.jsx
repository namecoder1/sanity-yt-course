import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'
import { Tag } from 'lucide-react'

const builder = imageUrlBuilder(client)

const Post = ({ post, single }) => {

	if (single) {
		return (
			<div className='flex flex-col md:flex-row rounded-xl items-center border border-neutral-200'>
				<Image 
					priority 
					src={builder.image(post.image).url()} 
					alt={post.imageAlt} 
					width={100}
					height={100}
					sizes="(max-width: 768px) 100vw, 50vw"
					className=' rounded-xl rounded-b-none md:rounded-bl-xl md:rounded-r-none w-full h-[200px] md:h-[220px]' 
				/>	
				<div className='mx-6 pt-4 pb-6 md:py-4'>
					<hgroup className='flex flex-col items-start justify-center gap-1 mb-2'>
						<div className='text-xs bg-neutral-100 hover:bg-neutral-200 duration-300 transition-colors rounded-lg px-2 py-1 w-fit'>
							<Link href={'/blog/categories/' + post.category.slug} className='flex items-center gap-1'>
								<Tag size={12} />
								{post.category.title}
							</Link>
						</div>
						<h2 className='text-xl font-bold tracking-tight'>{post.title}</h2>
					</hgroup>
					<p className='text-neutral-600 line-clamp-3 mb-4'>{post.excerpt}</p>
					<Link 
						href={'/blog/' + post.slug}
						className="bg-neutral-800 hover:bg-neutral-600 text-white font-light text-sm py-2 px-3 rounded-lg transition-colors duration-200"				
					>
						Leggi articolo
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className='flex flex-col rounded-xl items-start border border-neutral-200 pb-6'>
			<Image 
				priority 
				src={builder.image(post.image).url()} 
				alt={post.imageAlt} 
				width={100}
				height={100}
				sizes="(max-width: 768px) 100vw, 50vw"
				className='aspect-video object-cover rounded-xl rounded-b-none w-full h-[200px]' 
			/>	
			<div className='mx-6 mt-4 flex-1 flex flex-col items-start justify-between'>
				<div>
					<hgroup className='flex flex-col items-start justify-center mb-2 gap-1'>
						<div className='text-xs bg-neutral-100 hover:bg-neutral-200 duration-300 transition-colors rounded-lg px-2 py-1 w-fit'>
							<Link href={'/blog/categories/' + post.category.slug} className='flex items-center gap-1'>
								<Tag size={12} />
								{post.category.title}
							</Link>
						</div>
						<h2 className='text-xl font-bold tracking-tight'>{post.title}</h2>
					</hgroup>
					<p className='text-neutral-600 line-clamp-3 mb-4'>{post.excerpt}</p>
				</div>
				<Link 
					href={'/blog/' + post.slug}
					className="bg-neutral-800 mt-auto hover:bg-neutral-600 text-white font-light text-sm py-2 px-3 rounded-lg transition-colors duration-200"				
				>
					Leggi articolo
				</Link>
			</div>
		</div>
	)
}

export default Post