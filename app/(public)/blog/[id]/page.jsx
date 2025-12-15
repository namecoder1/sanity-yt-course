import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { sanityFetch } from '@/sanity/lib/live'
import { getPost } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import TextBlock from '@/components/blocks/text-block'
import { Tag } from 'lucide-react'

const PostPage = async ({ params }) => {
	const { id } = await params
  const { data: post } = await sanityFetch({ query: getPost, params: { slug: id } })
  const builder = imageUrlBuilder(client)

	if (!post) {
		return <div>Post non trovato</div>
	}

	return (
		<div className="max-w-7xl mx-auto p-6">
			<article>
				<div className='flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between mb-4'>
					<h1 className="text-4xl font-bold">{post.title}</h1>
					<div className='text-sm mb-2 sm:mb-0 bg-neutral-100 hover:bg-neutral-200 duration-300 transition-colors rounded-lg px-2 py-1 w-fit'>
						<Link href={'/blog/categories/' + post.category.slug} className='flex items-center gap-1'>
							<Tag size={12} />
							{post.category.title}
						</Link>
					</div>
				</div>
				{post.image && (
					<div className="mb-6">
						<Image 
							priority 
							src={builder.image(post.image).url()} 
							alt={post.imageAlt} 
							width={100}
							height={100}
							sizes="(max-width: 768px) 100vw, 50vw"
							className='aspect-video rounded-xl w-full h-full' 
						/>	
					</div>
				)}
				{post.excerpt && (
					<p className="text-neutral-600 mb-6 border-b border-neutral-300 leading-7 pb-6">{post.excerpt}</p>
				)}

				<div className='prose'>
					<TextBlock value={post.text} />
				</div>
				{post.publishedAt && (
					<p className="text-sm text-gray-500 mb-4">
						Pubblicato il: {new Date(post.publishedAt).toLocaleDateString('it-IT')}
					</p>
				)}
			</article>
		</div>
	)
}

export default PostPage