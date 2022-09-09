nameImput = document.querySelector("#name")
numberInput = document.querySelector("#card-number")
monthInput = document.querySelector("#month")
yearInput = document.querySelector("#year")
cvcInput = document.querySelector("#cvc")

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
  let number = numberInput.value;
  numberP.textContent = number
})

monthInput.addEventListener("input", ()=>{
  let month = monthInput.value;
  monthP.textContent = month
})

yearInput.addEventListener("input", ()=>{
  let year = yearInput.value;
  yearP.textContent = year
})

cvcInput.addEventListener("input", ()=>{
  let cvc = cvcInput.value;
  cvcP.textContent = cvc
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





