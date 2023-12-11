function courseInfo(obj){
    for(let i in obj){
        switch(i)
        {
            case 'courseName':
            case 'courseDur':
            case 'courseOwner':
                continue;
            default:
                throw new Error('you have entered a wrong property');
        }
    }
    let def={
        courseName: 'js',
        courseDur: '25hr',
        courseOwner: 'Ahmed'
    }
    let res = Object.assign(def,obj);
    return res;
}

console.log(courseInfo({courseNam:'c#'}));