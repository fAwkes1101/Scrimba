
import {dogs} from "./data.js"
const main = document.querySelector('.main')
let crossBtn = document.querySelector(".cross")
const likeBtn = document.querySelector(".like")

function getDogHtml(){
    let dog = dogs.shift();
    main.style.backgroundImage = `url(${dog.avatar})`

    return `
           <div class="content">
               <p>${dog.name}, ${dog.age}</p>
               <p>${dog.bio}</p>
           </div>
    `
}

main.innerHTML = getDogHtml()

