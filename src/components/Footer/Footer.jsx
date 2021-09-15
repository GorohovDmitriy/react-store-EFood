import React from 'react'
import './Footer.scss'

const Footer = () => {
	return (
		<div className='footer'>
			<ul className='efood'>
				<li className='item__1'>
					<span>E</span>Food
				</li>
				<li className='item__2'>
					<img src='/img/location.svg' alt='Location' width={24} height={24} />
					Dhaka, Bangladesh
				</li>
				<li className='item__3'>
					<img src='/img/calling.svg' alt='Call' width={24} height={24} />
					0943833399
				</li>
				<li className='item__4'>
					<img src='/img/mess.svg' alt='Message' width={24} height={24} />
					support@efood.com
				</li>
				<li className='item__5'>
					<img src='/img/facebook.svg' alt='FaceBook' width={39} height={39} />
					<img src='/img/twitter.svg' alt='Twitter' width={39} height={39} />
					<img src='/img/instagram.svg' alt='Instagramm' width={39} height={39} />
					<img src='/img/print.svg' alt='Printeres' width={39} height={39} />
				</li>
			</ul>
			<ul className='servise'>
				<li>
					<b>Service</b>
				</li>
				<li>How it works</li>
				<li>Home delivery</li>
				<li>Products</li>
				<li>Menu</li>
			</ul>
			<ul className='company'>
				<li>Company</li>
				<li>About Us</li>
				<li>News</li>
				<li>Our trusted partner</li>
				<li>New users FAQ</li>
			</ul>
			<ul className='supports'>
				<li>Supports</li>
				<li>Help center</li>
				<li>Feedback</li>
				<li>Contact us</li>
				<li>Terms conditins</li>
			</ul>
			<ul className='resources'>
				<li>Resources</li>
				<li>Download app</li>
				<li>Blog</li>
				<li>What's new</li>
				<li>Sitemap</li>
			</ul>
		</div>
	)
}

export default Footer
