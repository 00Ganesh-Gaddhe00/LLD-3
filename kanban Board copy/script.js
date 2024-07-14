
let addbtn = document.querySelector('.add_btn');
let modalcont = document.querySelector('.modal_cont')
let ismodalhidden = true;
let delbtn = document.querySelector('.delete_btn');
let isdelactive = false;
let textarea = document.querySelector('.textarea_cont');
let maincont = document.querySelector('.main_cont');
let color = ['red', 'blue', 'green', 'black'];

let ticketarr =[];
 if(localStorage.getItem('TaskArr')){
 let ticketarrstr = localStorage.getItem('TaskArr');
 ticketarr = JSON.parse(ticketarrstr);
 for(let i=0; i<ticketarr.length;i++){
    let ticket = ticketarr[i];
    createticket(ticket.value, ticket.color, ticket.id)
 }
 }


let filtercolours = document.querySelectorAll('.colour');
for(let i=0; i<filtercolours.length; i++){
    filtercolours[i].addEventListener('click', function(){
        let filterselelctedcolour = filtercolours[i].classList[1];
    let allticketcolour = document.querySelectorAll('.ticket_color');
    for(let j=0; j<allticketcolour.length;j++){
      let currticketcolor = allticketcolour[j].classList[1];
       if(filterselelctedcolour==currticketcolor){
        allticketcolour[j].parentElement.style.display = 'block';
       }
       else {
        allticketcolour[j].parentElement.style.display = 'none';
       }
    }
})

filtercolours[i].addEventListener('dblclick',function(){
    let allticketcolour = document.querySelectorAll('.ticket_color');
    for(let j=0;j<allticketcolour.length;j++){
        allticketcolour[j].parentElement.style.display = 'block' // show it
    }
})
}




let allmodalcol = document.querySelectorAll('.modal_color');
let ticketcolor = 'red';
for(let i=0; i<allmodalcol.length; i++){
    allmodalcol[i].addEventListener('click', function(){
    
        for(let j=0; j<allmodalcol.length; j++ ){
            allmodalcol[j].classList.remove('active');
        }

        allmodalcol[i].classList.add('active');
        ticketcolor = allmodalcol[i].classList[1];
    })
}

addbtn.addEventListener('click', function(){
    if(ismodalhidden){
       modalcont.style.display= 'flex';
    ismodalhidden = false;
    }
    else {
        modalcont.style.display='none';
        ismodalhidden=true;
    }

})

delbtn.addEventListener('click', function(){
    if(isdelactive){
     delbtn.style.color= 'black';
     
     isdelactive = false;
    }
    else{
        delbtn.style.color= 'red';
        
     isdelactive = true;
    }
} )

var uid = new ShortUniqueId();

textarea.addEventListener('keydown', function(e){
    let key = e.key;
    
    if(key=='Enter'){
        // console.log(textarea.value);
        createticket(textarea.value, ticketcolor);
        modalcont.style.display = 'none';
        ismodalhidden = true;
        textarea.value ="";
    }
})

function createticket(text, ticketcolor, ticketid){
     //crate the below structure with js and add it to main container
    // <div class="ticket-cont">
    //     <div class="ticket-color"></div>
    //     <div class="ticket-id">#5gf832</div>
    //     <div class="ticket-area">Some task</div>
    // </div>
     let id;
     if(ticketid){
        id=ticketid;
     } 
     else{ 
        id= uid.rnd();
     }

    let tickecont = document.createElement('div');
    tickecont.className = 'ticket_cont';
    tickecont.innerHTML = `<div class="ticket_color ${ticketcolor}"></div> 
                          <div class="ticket_id">#${id}</div> 
                          <div class="ticket_area">${text}</div>
                          <div class="lock_unlock">
                          <i class="fa-solid fa-lock"></i>
                          </div>`
    
    if(!ticketid){
        ticketarr.push({id:id, color: ticketcolor, value:text })
        // console.log(ticketarr);
        updateLocalStorage();
    }

    maincont.appendChild(tickecont);

    tickecont.addEventListener('click', function(){
        if(isdelactive){
            tickecont.remove();
            let ticketIndex = ticketarr.findIndex(function(ticketObj){
                return ticketObj.id == id;
            })
            ticketarr.splice(ticketIndex,1);
            updateLocalStorage();

        }
    })
    let lockbtn = tickecont.querySelector('.lock_unlock i');
    let ticketArea = tickecont.querySelector('.ticket_area');
lockbtn.addEventListener('click', function(){
    if(lockbtn.classList.contains('fa-lock')){
        lockbtn.classList.remove('fa-lock');
        lockbtn.classList.add('fa-lock-open');
        ticketArea.setAttribute('contenteditable','true');

    }
    else{
        lockbtn.classList.remove('fa-lock-open');
        lockbtn.classList.add('fa-lock');
        ticketArea.setAttribute('contenteditable','false');

    }
    let ticketIndex = ticketarr.findIndex(function(ticketobj){
          return ticketobj.id==id;
    })
    ticketarr[ticketIndex].value = ticketArea.innerText;
    updateLocalStorage();
})

let ticketcontcolor = tickecont.querySelector('.ticket_color');
ticketcontcolor.addEventListener('click', function(){
    let currcolor = ticketcontcolor.classList[1];

    let idx;
        for(let i=0;i<color.length;i++){
            if(currcolor == color[i]){
                idx = i;
                break;
            }
        }

    let nextidx = (idx+1)%color.length;
    let nextcolour = color[nextidx];
    ticketcontcolor.classList.remove(currcolor);
    ticketcontcolor.classList.add(nextcolour);
    let ticketIndex = ticketarr.findIndex(function(ticketobj){
        return ticketobj.id==id;
    })
    ticketarr[ticketIndex].color = nextcolour;
    updateLocalStorage();
})
}

function updateLocalStorage(){
    let ticketarrstr = JSON.stringify(ticketarr);
    localStorage.setItem("TaskArr", ticketarrstr);
}

