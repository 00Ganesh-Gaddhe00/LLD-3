
let star_cont = document.querySelector('.star-cont')
let stars = document.querySelectorAll('.star')
let rating = document.querySelector('h2')
let clickstarno=0;


star_cont.addEventListener('mouseover', function(e){
  
    if(e.target.classList.contains('star')){
        removeclass(stars.length)

    let starnum = e.target.dataset.pos
     
    addclass(starnum)
    }
    

})

star_cont.addEventListener('mouseout', function(){
        removeclass()
        addclass(clickstarno)
})

star_cont.addEventListener('click', function(e){
   clickstarno = e.target.dataset.pos
   rating.innerText = 'Rating : '+clickstarno

})




function addclass(n){
    for(let i=0; i<n; i++){
        stars[i].classList.add('active')
    }
}

function removeclass(){
    for(let i=0; i<stars.length; i++){
        stars[i].classList.remove('active')
    }
}