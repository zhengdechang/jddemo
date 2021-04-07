import axios from 'axios'


/**
 * 封装get方法
 */
function get(url,params={}){
    return new Promise((resolve,reject) => {
        axios.get(url,{params:params})
        .then(response =>{
            resolve(response.data);
        })
        .catch(err =>{
            reject(err);
        })
    });
}

/**
 * 封装post方法
 */
function post(url,data={}){
    return new Promise((resolve,reject) => {
        axios.post(url,data)
        .then(response =>{
            resolve(response.data);
        })
        .catch(err =>{
            reject(err);
        })
    });
}


export const Swiper =  () => get('http://localhost:3000/test/swiper',{});
export const Otherapp =  () => get('http://localhost:3000/test/otherapp',{});
export const Spikes  = ()  => get('http://localhost:3000/test/spike',{});
export const Likes  = ()  => get('http://localhost:3000/test/like',{});


//post
export const postLikes  = ()  => post('http://localhost:3000/test/like',{});



