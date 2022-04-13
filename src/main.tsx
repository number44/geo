import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GMap from './components/GMap';
import Carousel from './components/Carousel';
import init from './index';

window.onload = init;

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
const footerMap = document.querySelector('#footer-map');
if (footerMap) {
	ReactDOM.render(
		<React.StrictMode>
			<GMap />
		</React.StrictMode>,
		footerMap
	);
}
// const slider1 = document.querySelector('.carousel');

// ReactDOM.render(
// 	<React.StrictMode>
// 		<Carousel />
// 	</React.StrictMode>,
// 	slider1
// );
