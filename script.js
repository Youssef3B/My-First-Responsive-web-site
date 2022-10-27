let click = document.getElementById('click');
let ul = document.getElementById('ul');

click.addEventListener('click', function(){
    if(ul.style.display == 'block'){
        ul.style.display = 'none';
    } else if(ul.style.display = 'none'){
        ul.style.display = 'block';      
    }
})
