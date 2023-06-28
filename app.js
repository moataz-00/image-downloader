let file=document.querySelector('input');
let btn=document.querySelector('button');

btn.addEventListener("click",e=>{
    e.preventDefault();//preventing from submting
     btn.innerText="Downloading file..."
    fetchFile(file.value);
});

function fetchFile (url){
    //fetchinf gilr and return response as blob
    fetch(url).then(res=>res.blob()).then(file=>{

//url.createobjecturl creates a url of passed object

let tempurl=URL.createObjectURL(file);
let tag=document.createElement('a');
tag.href=tempurl;
tag.download=url.replace(/^.*[\\\/]/,'');

console.log(tempurl);
document.body.appendChild(tag);
tag.click()
tag.remove();
URL.revokeObjectURL(tempurl);
btn.innerText="Downloading file..."

    })
}