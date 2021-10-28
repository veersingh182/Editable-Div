'use strict;'

//create a div element

let divElem = document.createElement('div');

// give this div elem a class and Id and set its inline css style

divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

//grab the container and div before which this div is to be placed

let container = document.querySelector('.container');
let firstDiv = document.getElementById('myfirst');

//insert new div element just before myfirst div in container 

container.insertBefore(divElem, firstDiv);


//show a preload text inside div elem when localStorage is Empty and retreve text value from localstorege if alreadey stored in it.
let val = localStorage.getItem('text');
let text;
if (val==null){
    text = document.createTextNode('click here to edit.')
}
else{
    text = document.createTextNode(val);
}

divElem.appendChild(text); //append text node inside divElem


divElem.addEventListener('click',()=>{

    let html = divElem.innerText;
    let textarea_len = document.getElementsByClassName('textarea').length;
    if(textarea_len == 0){
        divElem.innerHTML =  ` <textarea class="textarea form-control"  id="textarea" rows="3">${html}</textarea>`;
    }
    // let html = divElem.innerHtml;
    // console.log(html);
    
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',()=>{
        divElem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);        
    });   
});
