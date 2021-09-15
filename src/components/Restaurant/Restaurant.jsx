import React from 'react'
import './Restaurant.scss'

const restaurant = [
	{
		image: '/img/restaran1.png',
		title: 'Blaze Pizza',
		time: '11.00 AM - 10.00 PM',
		svg: '/img/timer_restaran.vsg',
	},
	{
		image: '/img/restaran2.png',
		title: 'Pizza Ranch',
		time: '09.00 AM - 10.00 PM',
		svg: '/img/timer_restaran.vsg',
	},
	{
		image: '/img/restaran3.png',
		title: 'Dion’s Pizza Hut',
		time: '10.00 AM - 12.00 PM',
		svg: '/img/timer_restaran.vsg',
	},
	{
		image: '/img/restaran4.png',
		title: 'Royel Burger',
		time: '11.00 AM - 10.00 PM',
		svg: '/img/timer_restaran.vsg',
	},
	{
		image: '/img/restaran5.png',
		title: 'KFC Restaurant',
		time: '09.00 AM - 10.00 PM',
		svg: '/img/timer_restaran.vsg',
	},
	{
		image: '/img/restaran6.png',
		title: 'Star Food',
		time: '10.00 AM - 12.00 PM',
		svg: '/img/timer_restaran.vsg',
	},
]

const Restaurant = () => {
	return (
		<React.Fragment>
			<h1>
				Top Food <span>restaurant</span>
			</h1>
			<div className='restaurant'>
				{restaurant.map((restaran, index) => {
					return (
						<div key={`${restaran}__${index}`} className='restaurant__block'>
							<img src={restaran.image} alt='Restaran' width={320} height={300} />

							<div className='restaurant__time'>
								<p>{restaran.title}</p>
								<b>
									<svg
										width='18'
										height='18'
										viewBox='0 0 22 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g opacity='0.9'>
											<path
												d='M11.5748 2.5401V1.58126C11.5748 1.41919 11.5104 1.26375 11.3958 1.14914C11.2812 1.03454 11.1257 0.970154 10.9637 0.970154C10.8016 0.970154 10.6462 1.03454 10.5315 1.14914C10.4169 1.26375 10.3526 1.41919 10.3526 1.58126V2.5456C5.55045 2.87926 1.74445 6.88968 1.74445 11.7752C1.74445 16.8777 5.89664 21.0299 11 21.0299C16.1034 21.0299 20.2556 16.8777 20.2556 11.7752C20.2556 6.86524 16.4114 2.83801 11.5748 2.5401ZM11 19.8077C6.57039 19.8077 2.96667 16.2039 2.96667 11.7752C2.96667 7.34588 6.57039 3.74246 11 3.74246C15.4297 3.74246 19.0334 7.34588 19.0334 11.7752C19.0334 16.2039 15.4297 19.8077 11 19.8077Z'
												fill='#363853'
											/>
											<path
												d='M7.86293 17.3216C5.86796 16.1901 4.62863 14.0644 4.62863 11.7749C4.62863 11.6056 4.49204 11.4693 4.32307 11.4693C4.1541 11.4693 4.01752 11.6056 4.01752 11.7749C4.01752 14.2841 5.37571 16.6133 7.56166 17.8536C7.6322 17.8935 7.71572 17.9038 7.79386 17.8822C7.87199 17.8606 7.93833 17.8088 7.97828 17.7382C8.01823 17.6677 8.02852 17.5842 8.00689 17.506C7.98526 17.4279 7.93348 17.3616 7.86293 17.3216Z'
												fill='#363853'
											/>
											<path
												d='M9.52923 18.1598C9.41091 18.129 9.29343 18.0949 9.17693 18.0578C9.10021 18.0348 9.01754 18.0429 8.94672 18.0803C8.87589 18.1176 8.82257 18.1813 8.79822 18.2576C8.77387 18.3339 8.78044 18.4167 8.81653 18.4882C8.85261 18.5597 8.91531 18.6141 8.99115 18.6399C9.11826 18.6808 9.24598 18.7175 9.37646 18.7508C9.4549 18.771 9.53817 18.7593 9.60796 18.7181C9.67775 18.677 9.72835 18.6098 9.74862 18.5314C9.75868 18.4926 9.76098 18.4522 9.75539 18.4125C9.7498 18.3728 9.73643 18.3346 9.71605 18.3001C9.69567 18.2656 9.66868 18.2354 9.63662 18.2113C9.60456 18.1873 9.56807 18.1698 9.52923 18.1598Z'
												fill='#363853'
											/>
											<path
												d='M18.8854 5.72793C19.0002 5.84235 19.1557 5.90651 19.3177 5.90628C19.4798 5.90605 19.6351 5.84146 19.7495 5.72671C19.864 5.61196 19.9281 5.45645 19.9279 5.2944C19.9277 5.13234 19.8631 4.97702 19.7483 4.86259L18.1616 3.27982C18.1048 3.2231 18.0374 3.17813 17.9632 3.14749C17.889 3.11685 17.8095 3.10114 17.7293 3.10125C17.649 3.10136 17.5695 3.1173 17.4955 3.14815C17.4214 3.179 17.3541 3.22416 17.2975 3.28104C17.1831 3.39584 17.119 3.55133 17.1193 3.71335C17.1195 3.87537 17.184 4.03067 17.2987 4.14515L18.8854 5.72793Z'
												fill='#363853'
											/>
											<path
												d='M11.5746 11.6612V6.7757C11.5746 6.61362 11.5102 6.45818 11.3956 6.34358C11.281 6.22897 11.1255 6.16459 10.9635 6.16459C10.8014 6.16459 10.646 6.22897 10.5313 6.34358C10.4167 6.45818 10.3524 6.61362 10.3524 6.7757V11.9252C10.3524 12.0936 10.4401 12.254 10.5623 12.3692L12.3507 14.0406C12.4689 14.1518 12.6196 14.2074 12.7702 14.2074C12.8521 14.2075 12.933 14.1905 13.0079 14.1575C13.0828 14.1244 13.1499 14.0761 13.205 14.0155C13.4375 13.7699 13.4168 13.3833 13.1714 13.1517L11.5746 11.6612Z'
												fill='#363853'
											/>
										</g>
									</svg>
									{restaran.time}
								</b>
								<button>
									<img src='/img/arrow_button.svg' alt='Arrow' />
								</button>
							</div>
						</div>
					)
				})}
			</div>
		</React.Fragment>
	)
}

export default Restaurant
