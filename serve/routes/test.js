let router = require('express').Router();
let fs = require('fs');

let readFileData = ()=>{
	let promise = new Promise((resolve, reject)=>{
		//当前目录为server根目录
		fs.readFile('./public/dataBase/database.json','utf-8', (err, data)=>{
			if(err){
				// console.log(err);
				reject('read fileBase error');
			}else {
				data = JSON.parse(data);
				resolve(data);
			}
		});
	});
	return promise;
};

let getFileName  = (path)=>{
	let promise = new Promise((resolve, reject)=>{
		fs.readdir(path,(err, files)=>{
			// console.log(files);
			if(err && !files){
				reject('read fileName err!');
			}else {
				resolve(files);
			}
		});
	});
	return promise;
};

let dataObj = {
	swiper: './public/images/swiper',
	otherapp: './public/images/otherapp',
	spike: './public/images/spike',
	more: './public/images/more',
	like: './public/images/like'
};
let keys = Object.keys(dataObj);
let promises = keys.map((item)=>{
	return getFileName(dataObj[item]);
});

router.get('/:name', (req, rps)=>{
	let host = 'http://' + req.headers.host;
	let name = req.params.name;
	var sendData = {
		status: 404,
		msg: 'Error',
		data: ''
	};
	Promise.all([readFileData(),promises[keys.indexOf(name)]]).then(
		data=>{
			if(!data[0] || !data[1]) rps.send(sendData);
			sendData.status = 200;
			sendData.msg = 'success';
			sendData.data = {
				data: data[0][name],
				icon: data[1].map(item=>host+'/images/'+name+'/'+item)
			};
			rps.send(sendData);
		}
	).catch(
		error=>rps.send(error)
	);
});

module.exports = router;
