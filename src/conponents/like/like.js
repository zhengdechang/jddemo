import React from 'react';
import {Likes} from '../../network/axios'
import './like.css'

class Like extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			source:[],
			icon:[],
		 };
	}

	componentDidMount = () => {
		Likes().then(res =>{
			console.log(res);
			this.setState({
				source : res.data.data,
				icon : res.data.icon
			})
		})
	}

	render() {
		return (
			<div id='like' className='like'>
				<p className='bg'>猜你喜欢</p>
				<ul>
					{
						this.state.source.map((data,index) =>{
							return (
								<li className='item' key={index}>
									<a href={data.url}>
										<img src={this.state.icon[index]} alt=""/>
										<span>{data.desc}</span>
										<div className="price">
											<div>
												<span>￥</span>
												<span>{data.price}</span>
												<span>55人付款</span>
											</div>
											<div>...</div>
										</div>
									</a>
								</li>
							)
						})
					}


				</ul>
			</div>
		);
	}
}

export default Like;