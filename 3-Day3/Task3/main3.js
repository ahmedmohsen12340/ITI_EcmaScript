let handler = {
    set: function(obj,key,value){
        if(key==='name')
        {
            if(value.length===7)
                obj[key]=value;
            else
                console.warn("the length of name must be 7");
        }else if(key ==='address')
        {
            if(typeof value =='string'){
                obj[key] = value;
            }else{
                console.warn("the address must be string");
            }
        }else if(key==='age'){
            if(value<=60&&value>=25){
                obj[key]=value;
            }else{
                console.warn("age must be between 25 and 60");
            }
        }else{
            console.error('you only can add (name-age-address)')
        }
    }
}
let pro = new Proxy({},handler);

pro.name = 'ibrahim'
pro.age = 25;
pro.address = '123 st'
//pro.home =154;
console.log(pro);
