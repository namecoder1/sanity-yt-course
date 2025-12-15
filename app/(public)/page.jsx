import { getPosts } from "@/sanity/lib/queries";
import Post from "@/components/blocks/post";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: getPosts })

  return (
    <section className="max-w-7xl mx-auto">
      <section id="hero">
        <div className="relative h-[60vh] mx-4 mt-4 min-h-[400px] rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-radial-[at_10%_15%] from-neutral-800 via-neutral-950 to-neutral-600"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-8 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Articoli da Sanity.io
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Questo blog è realizzato con Next.js 16, Sanity.io e TailwindCSS
              </p>
              <Link href='/blog' className="bg-neutral-600 hover:bg-neutral-900 border hover:border-neutral-700 border-transparent text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Esplora gli articoli
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="post-grid" className="mx-4 my-16">
        <h3 className="text-3xl mb-4 font-bold tracking-tight">Ultimi articoli</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts?.slice(0, 3).map(post => (
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
  );
}