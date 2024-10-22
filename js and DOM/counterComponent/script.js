

const display = document.querySelector('h2')
const input = document.querySelector('input')
const btns = document.querySelector('.btn-cont')

let incBy = 1
let count = 0
input.addEventListener('change', function(e){
  if(e.target.value<1){
    alert("Please Enter positive values")
    return
  }
   incBy = Number(e.target.value)
  
})

btns.addEventListener('click', function(e){
    if(e.target.classList.contains('plus_btn')){
      count=count+incBy
    }
    else if(e.target.classList.contains('minus_btn')){
      if(count==0 || count-incBy<0){
        return
      }
      count = count-incBy
    }
    else if(e.target.classList.contains('Reset_btn')){
      count = 0
    }

    display.innerText = count
   
})