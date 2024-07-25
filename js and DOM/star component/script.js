let starcont = document.querySelector('.star_cont');
let allstars = document.querySelectorAll('.star');
let rating = document.querySelector('h2');
let prevclicked;


starcont.addEventListener('click', function(e){
    
    if(e.target.classList.contains('star')){
        removecolorsfromstars(allstars.length);
        let currentstar = e.target.dataset.pos;
        addcolourtostar(currentstar);
        prevclicked = currentstar;
        rating.innerText = 'Rating : '+currentstar;
    }
   
})


starcont.addEventListener('mouseover', function(e){
    if(e.target.classList.contains('star')){
    removecolorsfromstars(allstars.length);
        let currentstar = e.target.dataset.pos;
        addcolourtostar(currentstar);
    }
})

starcont.addEventListener('mouseout', function(e){
    if(e.target.classList.contains('star')){
        removecolorsfromstars(allstars.length);
            addcolourtostar(prevclicked);
        }
})



function removecolorsfromstars(n){
    for(let i=0; i<n;i++){
        allstars[i].classList.remove('active');
    }
}

function addcolourtostar(n){
    for(let i=0; i<n; i++){
        allstars[i].classList.add('active');
    }
}