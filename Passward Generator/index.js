const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generate =document.querySelector(".generate");
let pass1  = document.querySelector(".pass1");
let pass2  = document.querySelector(".pass2");

generate.addEventListener('click', function(){
    let passLen = prompt("Passward Length")
    
    let pass1Str = ""    
    let pass2Str = ""  
    for(let i=0; i<passLen; i++){
        let random1 = Math.floor(Math.random()*characters.length)
        let random2 = Math.floor(Math.random()*characters.length)
        pass1Str += characters[random1]
        pass2Str += characters[random2]
    }
    pass1.textContent = pass1Str
    pass2.textContent = pass2Str
})

