import React from 'react'
import {Spikes} from '../../network/axios'
import './spike.css'
import IconFont from '../../assets/js/iconfont';

class Spike extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  
			data:{
				store:[],
			},
			icon:[],
			time:{
				h:'00',
				m:'00',
				s:'00',
			}
		};
	}
	


	componentDidMount = () =>{
		Spikes().then(res =>{
			this.setState({
				data : res.data.data,
				icon : res.data.icon
			});
			let times =  res.data.data.times;
			let setItv = setInterval(
				() =>{
					this.setState({
						time : this.formatTime(times--)
					});
					-1===times && clearInterval(setItv);
				},1000)
		})

	}


     formatTime = function(time) {
		var [h,m,s] = [0, 0, 0];
		if (time / 3600 > 1) {
		  h = parseInt(time / 3600);
		  time -= 3600 * h;
		}
		if (time / 60 > 1) {
		  m = parseInt(time / 60);
		  time -= 60 * m;
		}
		s = time;
		h = h/10<1? '0'+h:h
		m = m/10<1? '0'+m:m
		s = s/10<1? '0'+s:s
		return {h, m, s};
	  };






	render() {
		return (
			<div id='spike' className='spike'>
				<div className="head">
					<div className="left">
						<span className='timet'><IconFont  type = "icon-shijian" /></span>
						<span className="handtime">掌上时间</span>
						<span className="time">
							<span className='timeSty'>{this.state.time.h}</span>
							<span className='timeSty'>{this.state.time.m}</span>
							<span className='timeSty'>{this.state.time.s}</span>
						</span>
					</div>
					<div>
						<a href="www.baidu.com">更多秒杀&gt;</a>
					</div>
				</div>
				<div className="content">
					<ul>
						{
							this.state.data.store.map((app,index) =>{
								return (
									<li key = {index}>
										<a href={app.url}>
											<div>
												<img src={this.state.icon[index]} alt=""/>
											</div>
											<p>￥{app.sprice}</p>
											<p>￥{app.price}</p>
										</a>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

export default Spike;