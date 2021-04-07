import React from 'react'
import { Carousel } from 'antd';
import './header.css'
import {Swiper} from '../../network/axios'






class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			imgUrls:[],
			// data: [
			// 	'http://localhost:3000/images/swiper/2.jpg',
			// 	'http://localhost:3000/images/swiper/1.jpg',
			// 	'http://localhost:3000/images/swiper/3.jpg',
			// 	'http://localhost:3000/images/swiper/4.jpg',
			// ],
		 };
	}
	componentDidMount = () =>{
		Swiper().then(res =>{
			this.setState({
				imgUrls : res.data.icon
			  }
			)
		})
	}
	render() {
		return (
			<div id='Carouse' className='carousel slide'>
				  <Carousel autoplay>
				    {
						this.state.imgUrls.map((url,key) => {
							return(
								<div key={key}> 
									<img className='img' src={url} alt="First slide" ></img>
								</div>
							)
						})
					}
				 </Carousel>
			</div>
		);
	}
}

export default Header;