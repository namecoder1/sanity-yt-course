import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'

const PublicLayout = ({ children }) => {
	return (
		<main>
			<Navbar />
			{children}
			<Footer />
		</main>
	)
}

export default PublicLayout