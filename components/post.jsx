import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

const builder = imageUrlBuilder(client)

const Post = ({ post, single }) => {

	if (single) {
		return (
			<div className='flex rounded-xl items-center border border-neutral-200'>
				<Image 
					priority 
					src={builder.image(post.image).url()} 
					alt={post.imageAlt} 
					width={100}
					height={100}
					sizes="(max-width: 768px) 100vw, 50vw"
					className=' rounded-xl rounded-r-none w-full h-[200px]' 
				/>	
				<div className='mx-6 py-6'>
					<hgroup className='flex items-center justify-between mb-2'>
						<h2 className='text-xl font-bold tracking-tight'>{post.title}</h2>
						<div className='text-sm bg-neutral-100 hover:bg-neutral-200 duration-300 transition-colors rounded-lg px-2 py-1 w-fit'>
							<Link href={'/blog/categories/' + post.category.slug}>
								{post.category.title}
							</Link>
						</div>
					</hgroup>
					<p className='text-neutral-600 line-clamp-3 mb-4'>{post.excerpt}</p>
					<Link 
						href={'/blog/' + post.slug}
						className="bg-[#6662a9] hover:bg-[#4f4c82] text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200"				
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
				className='aspect-video rounded-xl rounded-b-none w-full h-full' 
			/>	
			<div className='mx-6 mt-4'>
				<hgroup className='flex items-center justify-between mb-2'>
					<h2 className='text-xl font-bold tracking-tight'>{post.title}</h2>
					<div className='text-sm bg-neutral-100 hover:bg-neutral-200 duration-300 transition-colors rounded-lg px-2 py-1 w-fit'>
						<Link href={'/blog/categories/' + post.category.slug}>
							{post.category.title}
						</Link>
					</div>
				</hgroup>
				<p className='text-neutral-600 line-clamp-3 mb-4'>{post.excerpt}</p>
				<Link 
					href={'/blog/' + post.slug}
					className="bg-[#6662a9] hover:bg-[#4f4c82] text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200"				
				>
					Leggi articolo
				</Link>
			</div>
		</div>
	)
}

export default Post