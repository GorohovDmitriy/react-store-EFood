import React from 'react'
// import axios from 'axios'
import SelectCategory from '../components/SelectCategory/SelectCategory.jsx'
import Restaurant from '../components/Restaurant/Restaurant.jsx'

const categoryNames = [
	{
		name: 'Bugrer',
		svg: '/img/burger.svg',
	},
	{
		name: 'Pizza',
		svg: '/img/pizza.svg',
	},
	{
		name: 'Sandwich',
		svg: '/img/sandwich.svg',
	},
	{
		name: 'Asian Food',
		svg: '/img/asianFood.svg',
	},
	{
		name: 'Set Menu',
		svg: '/img/menu.svg',
	},
]
const burgers = [
	{id: 0, title: 'Cheeseburger With Salad', imageUrl: '/img/item1.png', price: 18.0},
	{id: 1, title: 'Beef Burger', imageUrl: '/img/item2.png', price: 15.0},
	{id: 2, title: 'Royel Cheeseburger', imageUrl: '/img/item3.png', price: 15.0},
	{id: 3, title: 'Black Gambugrer ', imageUrl: '/img/item4.png', price: 14.0},
	{id: 4, title: 'Chicken Burger', imageUrl: '/img/item5.png', price: 17.0},
]
const pizzas = [
	{
		id: 0,
		title: 'Пепперони',
		imageUrl:
			'https://dodopizza-a.akamaihd.net/static/Img/Products/304d6f7fc2e64ebd90129541e515085b_584x584.jpeg',
		price: 21.0,
	},
	{
		id: 1,
		title: 'Сырная 🌱',
		imageUrl:
			'https://dodopizza-a.akamaihd.net/static/Img/Products/2ea16022779e4e46acd70a19f397ba8f_584x584.jpeg',
		price: 19.0,
	},
	{
		id: 2,
		title: 'Четыре сыра 🌱',
		imageUrl:
			'https://dodopizza-a.akamaihd.net/static/Img/Products/f74c9f27384542128f51587009ce5af2_584x584.jpeg',
		price: 22.0,
	},
	{
		id: 3,
		title: 'Деревенская',
		imageUrl:
			'https://dodopizza-a.akamaihd.net/static/Img/Products/9ab9494fb4c84dc2a545e82e719230a4_584x584.jpeg',
		price: 19.0,
	},
	{
		id: 4,
		title: 'Мясная',
		imageUrl:
			'https://dodopizza-a.akamaihd.net/static/Img/Products/4f1f878793e844429ab58d73c857e80e_584x584.jpeg',
		price: 20.0,
	},
]
const sushi = [
	{
		id: 0,
		title: 'Хот Ямато маки',
		imageUrl:
			'https://sushihouse.by/upload/resize_cache/iblock/324/520_400_2/9s9rekfhllfmnmd31mnpb08q23lp5uqx.jpg?1631187799101838',
		price: 8.0,
	},
	{
		id: 1,
		title: 'Хот Мацури маки',
		imageUrl:
			'https://sushihouse.by/upload/resize_cache/iblock/4dd/520_400_2/f5k0s80ez81wlxeemgv0ymxnyjrepj1j.jpg?163119270885227',
		price: 10.0,
	},
	{
		id: 2,
		title: 'Акита маки',
		imageUrl:
			'https://sushihouse.by/upload/resize_cache/iblock/e50/520_400_2/kkgazl3vx9v6mb14sgojmoqipwaybvkf.jpg?163155445984023',
		price: 11.0,
	},
	{
		id: 3,
		title: 'Бонито маки',
		imageUrl:
			'https://sushihouse.by/upload/resize_cache/iblock/179/520_400_2/9r9r9iwh8oo7d8lnv64xzwltf36q2um5.jpg?1631554490120604',
		price: 9.0,
	},
	{
		id: 4,
		title: 'Бали маки',
		imageUrl:
			'https://sushihouse.by/upload/resize_cache/iblock/774/520_400_2/nit0ih70kr6u1urajo8w0n89foqzdvg2.jpg?163118782780113',
		price: 8.0,
	},
]
const sandwich = [
	{
		id: 0,
		title: 'The Bobbie',
		imageUrl:
			'https://www.capriottis.com/wp-content/uploads/2017/10/CAP_DG_071_Website_Menu_Update_signature_bobbie.png',
		price: 3.5,
	},
	{
		id: 1,
		title: 'Capastrami',
		imageUrl:
			'https://www.capriottis.com/wp-content/uploads/2017/10/CAP_DG_071_Website_Menu_Update_signature_capastrami.png',
		price: 5.0,
	},
	{
		id: 2,
		title: 'Cole Turkey ',
		imageUrl:
			'https://www.capriottis.com/wp-content/uploads/2017/10/CAP_DG_071_Website_Menu_Update_signature_Cole_turkey.png',
		price: 4.2,
	},
	{
		id: 3,
		title: 'Chicken Cheese Steak',
		imageUrl:
			'https://www.capriottis.com/wp-content/uploads/2017/10/CAP_DG_071_Website_Menu_Update_signature_Chickencheesesteak.png',
		price: 3.9,
	},
	{
		id: 4,
		title: 'Homemade Meatball',
		imageUrl:
			'https://www.capriottis.com/wp-content/uploads/2017/10/CAP_DG_071_Website_Menu_Update_signature_meatball.png',
		price: 4.5,
	},
]
const setMenu = [
	{
		id: 0,
		title: 'Clever Irish Pub',
		imageUrl: 'https://gastrofest.by/sites/default/files/clever-10_resize_0.jpg',
		price: 25.0,
	},
	{
		id: 1,
		title: 'Malt and Hops',
		imageUrl: 'https://gastrofest.by/sites/default/files/malt%26hops-1_resize.JPG',
		price: 25.0,
	},
	{
		id: 2,
		title: 'AMERICAN BBQ',
		imageUrl: 'https://gastrofest.by/sites/default/files/bbq-17_resize.JPG',
		price: 25.0,
	},
	{
		id: 3,
		title: 'PUB 1067',
		imageUrl: 'https://gastrofest.by/sites/default/files/1067_1_resize.JPG',
		price: 25.0,
	},
	{
		id: 4,
		title: 'МЯТА LOUNGE CENTER',
		imageUrl: 'https://gastrofest.by/sites/default/files/%D0%BC%D1%8F%D1%82%D0%B0-4_resize_0.JPG',
		price: 25.0,
	},
]

const HomePage = () => {
	const [category, setCategory] = React.useState(null)
	// const [burgers, setBurgers] = React.useState([])

	const onSelectCategory = (index) => {
		setCategory(index)
		console.log('Выбор категории', index)
	}

	// React.useEffect(() => {
	// 	async function fetchData() {
	// 		try {
	// 			const [burgerResponse] = await Promise.all([
	// 				axios.get('https://613f5090e9d92a0017e175f8.mockapi.io/burgers'),
	// 			])
	// 			setBurgers(burgerResponse.data)
	// 		} catch (error) {
	// 			alert('Ошибка при запросе данных ;-)')
	// 		}
	// 	}
	// 	fetchData()
	// }, [])

	return (
		<React.Fragment>
			<SelectCategory
				onSelectCategory={onSelectCategory}
				categoryNames={categoryNames}
				category={category}
				pizzas={pizzas}
				burgers={burgers}
				sandwich={sandwich}
				sushi={sushi}
				setMenu={setMenu}
			/>
			<Restaurant />
		</React.Fragment>
	)
}

export default HomePage
