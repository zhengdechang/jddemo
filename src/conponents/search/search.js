import React from 'react';
import './search.css'
import IconFont from '../../assets/js/iconfont';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			bg:[],
		 };
	}
	componentDidMount(){
		let _this = this;
    window.onscroll = () => {
      let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
      let optatic = 0.8 * (realHeight / 142);
      if (optatic <= 0.8) {
        _this.setState({bg: {'backgroundColor':`rgba(234, 44, 44, ${optatic})`}});
      }
    };
	}

	render() {
		return (
			<div id='search' className='search' style={this.state.bg}>
				<div>
					<i className='logo'></i>
				</div>
				<div className="ipt">
				    <IconFont  type = "icon-xingtaiduICON_sousuo---copy" />
					<input type="text" placeholder='全场畅饮，部分低至99减5' />
				</div>
				<div>
					<span className='login'><a href="https://plogin.m.jd.com/login/login">登录</a></span>
				</div>
			</div>
		);
	}
}

export default Search;