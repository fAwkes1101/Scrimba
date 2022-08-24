/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert")
const input = document.querySelector("input")
const length = document.querySelector(".length")
const volume = document.querySelector(".volume")
const mass = document.querySelector(".mass")


convertBtn.addEventListener("click", function(){
     let num = input.value
     input.value=""

     let lenPara = document.createElement("p")
     lenPara.innerText = `${num} meters = ${(20*3.281).toFixed(2)} feet | ${num} feet = ${(20/3.281).toFixed(2)} meters`
     length.innerHTML = "<h1>Length (Meter/Feet)</h1>"
     length.appendChild(lenPara)


     let volPara = document.createElement("p")
     volPara.innerText = `${num} liters = ${(20*0.264).toFixed(2)} gallons | ${num} gallons = ${(20/0.264).toFixed(2)} liters`
     volume.innerHTML = "<h1>Volume (Liters/Gallons)</h1>"
     volume.appendChild(volPara)
     

     let massPara= document.createElement("p")
     massPara.innerText = `${num} kilos = ${(20*2.204).toFixed(2)} pounds | ${num} pounds = ${(20/2.204).toFixed(2)} kilos`
     mass.innerHTML = "<h1>Mass (Kilograms/Pounds)</h1>"
     mass.appendChild(massPara)

     
})