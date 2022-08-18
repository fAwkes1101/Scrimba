let guestCont = document.querySelector(".guest")
let homeCont = document.querySelector(".home")
let timer = document.getElementById("timer")

// guestCont.textContent = "44"                   
// homeCont.textContent = "33"
                   
function hanndleOneClick(team){
    if(team==1){
        
        homeCont.textContent =  (Number)(homeCont.textContent) + 1
    }else
       guestCont.textContent = (Number)(guestCont.textContent) + 1
}

function hanndleTwoClick(team){
     if(team==1){
        
        homeCont.textContent =  (Number)(homeCont.textContent) + 2
    }else
       guestCont.textContent = (Number)(guestCont.textContent) + 2
}

function hanndleThreeClick(team){
     if(team==1){
        
        homeCont.textContent =  (Number)(homeCont.textContent) + 3
    }else
       guestCont.textContent = (Number)(guestCont.textContent) + 3
}

function handleTimer(){
   setInterval(counter, 1000)
}

function counter(){
    timer.textContent =     +  (Number)(timer.textContent) + 1;
}