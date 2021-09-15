import React from 'react'
import './Download.scss'

const Download = () => {
	return (
		<div className='mobile'>
			<div className='download'>
				<h1>
					Download Our <span>Mobile App</span>
				</h1>
				<p>
					It's all at your fingertips -- the restaurants you love. Find the right food to suit your
					mood, and make the first bite last. Go ahead, download app and get 50% discount
				</p>
				<img src='/img/app-store.svg' alt='App-Store' width={120} height={40} />
				<img src='/img/google-store.svg' alt='Google-Store' width={135} height={40} />
			</div>
			<div className='iphone'>
				<img className='left' src='/img/iphone.png' alt='Iphone' />
			</div>
		</div>
	)
}

export default Download
