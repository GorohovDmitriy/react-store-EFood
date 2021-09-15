import React from 'react'
import './Home.scss'

const Home = () => {
	return (
		<div className='home'>
			<div className='home__block'>
				<h1 className='home__title'>
					Super Fast <span>Food</span> <span>Delivery</span> Service
				</h1>
				<p>
					We provide super fast-delivery service. Let’s use our services right now and get discounts
					of up to 50%
				</p>
				<button>Explore Food</button>
				<a href='/'>Download App</a>
			</div>
			<div className='home__image'>
				<img src='/img/scoter.png' alt='Title' width={590} height={580} />
				<img className='time' src='/img/time.png' alt='time' width={50} height={50} />
				<img className='timer' src='/img/timer.png' alt='time' width={50} height={50} />
				<img className='telegramm' src='/img/telegramm.png' alt='time' />
				<ul className='comment'>
					<li>
						<img src='/img/alex.png' alt='Alex' width={40} height={40} />
					</li>
					<li>
						<h5>Alex Smith</h5>
						<p>Food Deliveryman</p>
					</li>
					<li>
						<img className='call' src='/img/call.png' alt='Call' width={23} height={23} />
					</li>
				</ul>
				<img className='price' src='/img/price.png' alt='Price' />
			</div>
		</div>
	)
}

export default Home
