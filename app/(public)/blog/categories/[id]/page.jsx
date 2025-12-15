import { sanityFetch } from '@/sanity/lib/live'
import { getPostsByCategory } from '@/sanity/lib/queries'
import React from 'react'
import Post from '@/components/blocks/post'
import { Tag } from 'lucide-react'

const CategoryPage = async ({ params }) => {
	const { id } = await params
  const { data: posts } = await sanityFetch({ query: getPostsByCategory, params: { categorySlug: id } })

	return (
		<section className='max-w-7xl mx-auto'>
			<h2 className='text-3xl mx-4 mt-10 font-bold tracking-tight flex items-center gap-2'><Tag size={24} /> Categoria: {posts[0].category.title}</h2>
			<section id="recent-post-grid" className="mx-4 mb-10 mt-4 pt-2">
        <Post key={posts[0].id} post={posts[0]} single />
      </section>
			<section id="all-post-grid" className="mx-4 my-10">
        <h3 className="text-2xl mb-4 font-bold tracking-tight">Tutti gli articoli</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>
		</section>
	)
}

export default CategoryPage