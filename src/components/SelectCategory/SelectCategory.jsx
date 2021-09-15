import React from 'react'
import PopularCategory from '../PopularCategory/PopularCategory.jsx'
import './SelectCategory.scss'

const SelectCategory = ({
	burgers,
	sushi,
	sandwich,
	pizzas,
	category,
	onSelectCategory,
	categoryNames,
	setMenu,
}) => {
	return (
		<React.Fragment>
			<PopularCategory
				category={category}
				onSelectCategory={onSelectCategory}
				categoryNames={categoryNames}
			/>
			<div className='category'>
				{!category ? (
					<ul className='category__item'>
						{burgers.map((burger, index) => {
							return (
								<li key={`${burger}__${index}`} className='category__block'>
									<img src={burger.imageUrl} alt='Burger' />
									<p>{burger.title}</p>
									<span>$ {burger.price.toFixed(2)}</span>
									<button>Add to Cart</button>
								</li>
							)
						})}
					</ul>
				) : null}
				{category === 1 ? (
					<ul className='category__item'>
						{pizzas.map((pizza, index) => {
							return (
								<li key={`${pizza}__${index}`} className='category__block'>
									<img src={pizza.imageUrl} alt='Burger' />
									<p>{pizza.title}</p>
									<span>$ {pizza.price.toFixed(2)}</span>
									<button>Add to Cart</button>
								</li>
							)
						})}
					</ul>
				) : null}
				{category === 3 ? (
					<ul className='category__item'>
						{sushi.map((sush, index) => {
							return (
								<li key={`${sush}__${index}`} className='category__block'>
									<img src={sush.imageUrl} alt='Burger' />
									<p>{sush.title}</p>
									<span>$ {sush.price.toFixed(2)}</span>
									<button>Add to Cart</button>
								</li>
							)
						})}
					</ul>
				) : null}
				{category === 2 ? (
					<ul className='category__item'>
						{sandwich.map((sand, index) => {
							return (
								<li key={`${sand}__${index}`} className='category__block'>
									<img src={sand.imageUrl} alt='Burger' />
									<p>{sand.title}</p>
									<span>$ {sand.price.toFixed(2)}</span>
									<button>Add to Cart</button>
								</li>
							)
						})}
					</ul>
				) : null}
				{category === 4 ? (
					<ul className='category__item'>
						{setMenu.map((menu, index) => {
							return (
								<li key={`${menu}__${index}`} className='category__block'>
									<img src={menu.imageUrl} alt='Burger' />
									<p>{menu.title}</p>
									<span>$ {menu.price.toFixed(2)}</span>
									<button>Add to Cart</button>
								</li>
							)
						})}
					</ul>
				) : null}
			</div>
		</React.Fragment>
	)
}

export default SelectCategory
