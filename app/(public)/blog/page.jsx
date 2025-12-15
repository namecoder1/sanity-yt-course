import { sanityFetch } from '@/sanity/lib/live'
import Link from 'next/link'
import React from 'react'
import { getCategories, getPosts } from '@/sanity/lib/queries'
import Post from '@/components/blocks/post'
import { Newspaper } from 'lucide-react'

const BlogPage = async () => {
	const { data: posts } = await sanityFetch({ query: getPosts })
	const { data: categories } = await sanityFetch({ query: getCategories })

	return (
		<section className='max-w-7xl mx-auto'>
			<h2 className='text-3xl mx-4 mt-10 font-bold tracking-tight flex items-center gap-2'><Newspaper size={24} /> Blog</h2>
			<section id='categories' className='mx-4 mb-10 mt-4'>
				<div className='flex items-center gap-2 flex-wrap'>
					{categories.map(category => (
						<Link
							className='text-sm bg-neutral-100 hover:bg-neutral-200 duration-300 transition-colors rounded-lg px-2 py-1 w-fit'
							href={'/blog/categories/' + category.slug} 
							key={category.title}
						>
							{category.title}
						</Link>
					))}
				</div>
			</section>
			<section id="recent-post-grid" className="mx-4 my-10">
        <h3 className="text-2xl mb-4 font-bold tracking-tight">Ultimo articolo</h3>
        <div>
					<Post key={posts[0].id} post={posts[0]} single />
        </div>
      </section>
			<section id="all-post-grid" className="mx-4 my-10">
        <h3 className="text-2xl mb-4 font-bold tracking-tight">Tutti gli articoli</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="mx-auto w-fit mt-10">
          <Link href='/blog' className="bg-neutral-800 hover:bg-neutral-600 text-white font-light text-sm py-3 px-8 rounded-lg transition-colors duration-200">
            Guarda tutti
          </Link>
        </div>
      </section>
		</section>
	)
}

export default BlogPage