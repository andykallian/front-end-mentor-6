nameImput = document.querySelector("#name")
numberInput = document.querySelector("#card-number")
monthInput = document.querySelector("#month")
yearInput = document.querySelector("#year")
cvcInput = document.querySelector("#cvc")
button = document.querySelector(".btn-submit")

nameP = document.querySelector("#nameP")
numberP = document.querySelector("#numberP")
numberP = document.querySelector("#numberP")
monthP = document.querySelector("#monthP")
yearP = document.querySelector("#yearP")
cvcP = document.querySelector("#cvcP")


nameImput.addEventListener("input", ()=>{
  let name = nameImput.value
  nameP.textContent = name.toUpperCase()
})

numberInput.addEventListener("input", ()=>{
  // numberP.style.fontSize = "3rem"
  numberP.textContent = `${numberInput.value.substring(0, 4)} ${numberInput.value.substring(4, 8)} ${numberInput.value.substring(8, 12)} ${numberInput.value.substring(12, 16)}`;
})

monthInput.addEventListener("input", ()=>{
  monthP.textContent = `${monthInput.value.substring(0, 2)}`;
})

yearInput.addEventListener("input", ()=>{
  yearP.textContent = `${yearInput.value.substring(0, 2)}`;
})

cvcInput.addEventListener("input", ()=>{
  cvcP.textContent = `${cvcInput.value.substring(0, 3)}`
})





button.addEventListener("click", (e)=>{
  e.preventDefault()
})













button = document.querySelector(".btn-submit")

button.addEventListener("click", function(event){
  event.preventDefault()
  // console.log(nameP.innerText)
  // console.log(nameImput.value)
  // console.log(numberImput.value)
  // console.log(monthImput.value)
  // console.log(yearImput.value)
  // console.log(cvcImput.value)
});





