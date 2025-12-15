import Footer from '@/components/blocks/footer'
import Navbar from '@/components/blocks/navbar'
import React from 'react'

const PublicLayout = ({ children }) => {
	return (
		<main>
			<Navbar />
			<section className='mt-20'>
				{children}
			</section>
			<Footer />
		</main>
	)
}

export default PublicLayout