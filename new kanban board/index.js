

let addBtn = document.querySelector('.add')
let modal = document.querySelector('.modal_cont')
let deleteBtn = document.querySelector(".delete")
let textarea = document.querySelector('.textarea_cont')
let ticketmain = document.querySelector('.main_cont')



let isModalthere = false;
let isDeleteactive = false;
   
addBtn.addEventListener('click', function(){
     if(isModalthere)  {
        modal.style.display = 'none'
        isModalthere=false;
     } else{

        modal.style.display = 'flex'
        isModalthere = true
     }

})

deleteBtn.addEventListener('click', function(){
   if(!isDeleteactive){
    deleteBtn.style.color = 'red'
    isDeleteactive = true;
   }else{
      deleteBtn.style.color = 'rgba(0, 0, 0, 0.697)'
      isDeleteactive=false
   }

})

textarea.addEventListener('keydown', function(e){
//    console.log(e.key)
   if(e.key== "Enter"){
    // console.log(textarea.value)
      createTicket(textarea.value)

       modal.style.display = "none"
       isModalthere = false
        textarea.value = ""
         
   }

})

let uid = new ShortUniqueId();

function createTicket(taskText){
  let id = uid.rnd()

  let ticketcont = document.createElement('div')
  ticketcont.className = "ticket_cont"
  ticketcont.innerHTML = `<div class="ticket_color"></div>
                          <div class="ticket_id">#${id}</div>
                   <div class="ticket_text">${taskText}</div>`

//    console.log(ticketcont)    


   ticketmain.appendChild(ticketcont)  
   
   ticketcont.addEventListener('dblclick', function(){
    if(isDeleteactive){
        ticketcont.remove();
    }
   })
}



