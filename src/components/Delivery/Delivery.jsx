import React from 'react'
import './Delivery.scss'

const Delivery = () => {
	return (
		<div className='delivery'>
			<img src='/img/delivery.png' alt='Delivery' />
			<div className='delivery__aside'>
				<h1>
					<span>Stay</span> at home, we will Provide <span>good food</span>
				</h1>
				<p>
					We provide tasty food and superfast delivery at your home. Let’s use our services right
					now and get discounts of up to 50%.
				</p>
				<ul className='delivery__time'>
					<li>
						<img src='/img/fast.svg' alt='Fast' />
						fasted delivery in 30 Minutes
					</li>
					<li>
						<img src='/img/man.svg' alt='Man' />
						300+ delivery men
					</li>
					<li>
						<img src='/img/restaran.svg' alt='Restaran' />
						500+ restaurant & cafe shop
					</li>
				</ul>
				<button>See more</button>
			</div>
		</div>
	)
}

export default Delivery
