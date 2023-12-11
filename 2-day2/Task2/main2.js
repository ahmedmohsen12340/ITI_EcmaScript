let xhr = new XMLHttpRequest();
let bands;
let chosenBand;
let selBands = document.querySelector('#band')
let selArtist =document.querySelector('#art')
xhr.open('get','rockbands.json');
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        bands = JSON.parse(xhr.responseText);
        for(let i in bands)
        {
            let opt = document.createElement('option');
            let text = document.createTextNode(`${i}`)
            opt.appendChild(text)
            selBands.appendChild(opt)
        }
    }
}
xhr.send();
function selectArt(val){
        selArtist.innerHTML='<option value="please select a band" hidden disabled selected>please select a band</option>';
        chosenBand= val.value;
        // console.log(val.value);
        for(let i of bands[val.value]){
            //console.log(i.name);
            let opt = document.createElement('option');
            let text = document.createTextNode(`${i.name}`)
            opt.appendChild(text)
            selArtist.appendChild(opt)    
        }
}

function goWeb(val){
    // console.log(bands[chosenBand])
    for(let i of bands[chosenBand]){
        // console.log(i)
        if(i.name==val)
        window.open(`${i.value}`)
    }
}
