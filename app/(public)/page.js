import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { getPosts } from "@/sanity/lib/queries";
import Post from "@/components/post";
import Link from "next/link";

export default async function Home() {
  const posts = await client.fetch(getPosts)

  return (
    <section className="max-w-7xl mx-auto">

      <section id="hero">
        <div className="relative h-[60vh] mx-4 mt-4 min-h-[400px] rounded-xl overflow-hidden">
          <Image
            priority 
            src='/assets/heroimg.jpg' 
            alt='Hero Image' 
            fill
            sizes="100vw"
            className='object-cover' 
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Benvenuto nel nostro Blog
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Scopri articoli interessanti e approfondimenti su tecnologia, design e molto altro
              </p>
              <Link href='/blog' className="bg-[#6662a9] hover:bg-[#4f4c82] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Esplora gli articoli
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="post-grid" className="mx-4 my-16">
        <h3 className="text-3xl mb-4 font-bold tracking-tight">Ultimi articoli</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 3).map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="mx-auto w-fit mt-10">
          <Link href='/blog' className="bg-[#6662a9] hover:bg-[#4f4c82] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            Guarda tutti
          </Link>
        </div>
      </section>
    </section>
  );
}
