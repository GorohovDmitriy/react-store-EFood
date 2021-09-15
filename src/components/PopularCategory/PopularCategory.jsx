import React from 'react'
import './PopularCategory.scss'

const PopularCategory = ({categoryNames, category, onSelectCategory}) => {
	return (
		<div className='popular'>
			<h1>
				Our popular <span>Category </span>
			</h1>
			<ul className='popular__category'>
				{categoryNames &&
					categoryNames.map((item, index) => {
						return (
							<li
								className={category === index ? 'active' : 'outline'}
								onClick={() => onSelectCategory(index)}
								key={`${item}__${index}`}
							>
								<img src={item.svg} alt='svg' />
								{item.name}
							</li>
						)
					})}
			</ul>
		</div>
	)
}

export default PopularCategory
