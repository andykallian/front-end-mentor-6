nameInput = document.querySelector("#name")
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

button = document.querySelector(".btn-submit")
cardForm = document.querySelector(".cardForm")


let contentCorrect = `
    <section class="main-correct">
      <div class="main-correct-text">
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
        <h3>THANK YOU</h3>
        <p>We've added your card details</p>
      </div>
    </section>`;

nameInput.addEventListener("input", ()=>{
  if(nameInput.value === ""){
    nameP.textContent = 'YOUR NAME HERE'
  }else{
    nameP.textContent = nameInput.value.toUpperCase()
    nameInput.style.border = "2px solid var(--dark-grayish-violet)"
  }
})

numberInput.addEventListener("input", ()=>{
  numberInput.value = numberInput.value.replace(/[^0-9]/gi, "");

  if(numberInput.value !== ""){
    numberP.textContent = `${numberInput.value.substring(0, 4)} ${numberInput.value.substring(4, 8)} ${numberInput.value.substring(8, 12)} ${numberInput.value.substring(12, 16)}`;
  }else{
    numberP.textContent = '0000 0000 0000 0000'
    numberInput.style.border = "2px solid var(--dark-grayish-violet)"
  }
})

monthInput.addEventListener("input", ()=>{
  monthInput.value = monthInput.value.replace(/[^0-9]/gi, "");

  if(monthInput.value !== ""){
    monthP.textContent = `${monthInput.value.substring(0, 2)}`;
  }else{
    monthP.textContent = '00'
    monthInput.style.border = "2px solid var(--dark-grayish-violet)"
  }
})

yearInput.addEventListener("input", ()=>{
  yearInput.value = yearInput.value.replace(/[^0-9]/gi, "");

  if(yearInput.value !== ""){
    yearP.textContent = `${yearInput.value.substring(0, 2)}`;
  }else{
    yearP.textContent = '00'
    yearInput.style.border = "2px solid var(--dark-grayish-violet)"
  }
})

cvcInput.addEventListener("input", ()=>{
  cvcInput.value = cvcInput.value.replace(/[^0-9]/gi, "");

  if(cvcInput.value !== ""){
    cvcP.textContent = `${cvcInput.value.substring(0, 3)}`
  }else{
    cvcP.textContent = '000'
    cvcInput.style.border = "2px solid var(--dark-grayish-violet)"
  }
})


button.addEventListener("click", function(event){
  event.preventDefault()
  
  inputs = document.querySelectorAll('input')
  paragraphs = document.querySelectorAll('label p')

  inputs.forEach((input, i) => {
    if(input.value === ""){
      paragraphs[i].style.display = "block"
      input.style.border = "2px solid var(--Red)"
    }else{
      paragraphs[i].style.display = "none"
      input.style.border = "2px solid var(--dark-grayish-violet)"
    }
  });

  cardForm.innerHTML = contentCorrect
});





