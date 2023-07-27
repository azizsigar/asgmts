 let add = document.getElementById('add');
 let container= document.getElementById('container');
 let input=document.getElementById('input');

 add.addEventListener('click', function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('p-style');
    paragraph.innerText= input.value;
    list.appendChild(paragraph);
    input.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
        paragraph.style.textDecoration=""
    })
    paragraph.addEventListener('dblclick',function(){
        list.removeChild(paragraph);
    })
    
 })
 