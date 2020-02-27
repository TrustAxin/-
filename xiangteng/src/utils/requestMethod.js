let serverPath = 'http://192.168.10.5:8081/'
export function post(url, body) {

    return new Promise((resolve, reject) => {
        wx.request({
            url:serverPath + url,
            data:body,
            method:'post',
            header:{
                'content-type': 'application/json'
            },
            success(res){
                // console.log(res)
                resolve(res.data);
            },
            fail(ret){
                reject(ret);
            }
        }) 
    })
}