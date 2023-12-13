let xhr = new XMLHttpRequest();
function request(req){
    xhr.open('get',req);
    let mypromise = new Promise((resolve, reject) => {
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                resolve(xhr.responseText)
            }
            if(xhr.status>=400)
                reject(xhr.status)
        }
    })
    mypromise.then((value)=>console.log(value)).catch((value)=>console.log(`statusCode = ${value}`))
    xhr.send()
}
request('https://jsonplaceholder.typicode.com/users')