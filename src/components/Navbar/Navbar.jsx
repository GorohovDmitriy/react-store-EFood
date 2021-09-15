import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.scss'

const headerArr = ['Home', 'Service', 'Contact', 'Top clients']

const Navbar = () => {
	const [searchPopup, setSearchPopup] = React.useState(false)
	const [headerActive, setActiveHeader] = React.useState(null)

	const onSelectHeader = (index) => {
		setActiveHeader(index)
	}

	const onSearchPopup = () => {
		setSearchPopup(!searchPopup)
	}

	const offSearchPopup = () => {
		setSearchPopup(!searchPopup)
	}
	return (
		<React.Fragment>
			<div className='navbar__position'>
				<div className='navbar'>
					<Link to='/' className='navbar__logo'>
						<img src='/img/efood.svg' alt='Logotype' width={105} height={40} />
					</Link>
					<ul className='navbar__site'>
						{headerArr.map((header, index) => {
							return (
								<>
									<li
										key={`${header}__${index}`}
										onClick={() => onSelectHeader(index)}
										className={headerActive === index ? 'active' : ''}
									>
										<Link to={`/${header}`}>{header}</Link>
									</li>
								</>
							)
						})}
						<li onClick={onSearchPopup} className='search'>
							<img src='/img/search.png' alt='Search' width={23} height={23} />
						</li>
						<li className='card__order'>
							<img src='/img/card.svg' alt='Card' width={23} height={23} />
							<span>0</span>
						</li>
						<button>Sign Up</button>
					</ul>
				</div>
				{searchPopup ? (
					<div className='subscribe'>
						<h3>Products you will love</h3>
						<p>Here you can find the product you need</p>
						<input type='text' />
						<button className='btn'>Search</button>
						<button className='close' onClick={offSearchPopup}>
							Close
						</button>
					</div>
				) : null}
			</div>
		</React.Fragment>
	)
}

export default Navbar
