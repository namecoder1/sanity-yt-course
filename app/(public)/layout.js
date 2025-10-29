import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
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