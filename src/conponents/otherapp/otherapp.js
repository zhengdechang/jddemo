import React from 'react'
import {Otherapp} from '../../network/axios'
import './otherapp.css'

class otherapp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			apps:[],
			icon:[],
		 };
	}

	componentWillMount = () =>{
		Otherapp().then(res =>{
			this.setState({
				apps  :  res.data.data,
				icon  :  res.data.icon
			})
		})
	}

	clike = () =>{

	}
	render() {
		return (
			<div id='otherapp' className='otherapp'>
				<ul>
					{
						this.state.apps.map((app,index) =>{
							return (
								<li key={index}>
									<a href={app.url}>
										<img src={this.state.icon[index]} alt="" />
										<span>{app.title}</span>
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

export default otherapp;