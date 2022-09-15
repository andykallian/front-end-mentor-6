nameInput = document.querySelector("#name");
numberInput = document.querySelector("#card-number");
monthInput = document.querySelector("#month");
yearInput = document.querySelector("#year");
cvcInput = document.querySelector("#cvc");
button = document.querySelector(".confirm");

inputArrays = [nameInput, numberInput, monthInput, yearInput, cvcInput];


nameP = document.querySelector("#nameP");
numberP = document.querySelector("#numberP");
numberP = document.querySelector("#numberP");
monthP = document.querySelector("#monthP");
yearP = document.querySelector("#yearP");
cvcP = document.querySelector("#cvcP");

cardForm = document.querySelector(".cardForm");
thanks = document.querySelector(".main-correct");
buttonReturn = document.querySelector(".return");


nameInput.addEventListener("input", ()=>{
  if(nameInput.value === ""){
    nameP.textContent = 'YOUR NAME HERE';
  }else{
    nameP.textContent = nameInput.value.toUpperCase();
  }
})

numberInput.addEventListener("input", ()=>{
  numberInput.value = numberInput.value.replace(/[^0-9]/gi, "");

  if(numberInput.value !== ""){
    numberP.textContent = `${numberInput.value.substring(0, 4)} ${numberInput.value.substring(4, 8)} ${numberInput.value.substring(8, 12)} ${numberInput.value.substring(12, 16)}`;
  }else{
    numberP.textContent = '0000 0000 0000 0000';
  }
})

monthInput.addEventListener("input", ()=>{
  monthInput.value = monthInput.value.replace(/[^0-9]/gi, "");

  if(monthInput.value !== ""){
    monthP.textContent = `${monthInput.value.substring(0, 2)}`;
  }else{
    monthP.textContent = '00';
  }
})

yearInput.addEventListener("input", ()=>{
  yearInput.value = yearInput.value.replace(/[^0-9]/gi, "");

  if(yearInput.value !== ""){
    yearP.textContent = `${yearInput.value.substring(0, 2)}`;
  }else{
    yearP.textContent = '00';
  }
})

cvcInput.addEventListener("input", ()=>{
  cvcInput.value = cvcInput.value.replace(/[^0-9]/gi, "");

  if(cvcInput.value !== ""){
    cvcP.textContent = `${cvcInput.value.substring(0, 3)}`
  }else{
    cvcP.textContent = '000';
  }
})

button.addEventListener("click", function(event){
  event.preventDefault();
  
  paragraphs = document.querySelectorAll('label p');
  

  inputArrays.forEach((input, i) => {
    if(input.value === ""){
      paragraphs[i].style.display = "block";
      input.style.border = "2px solid var(--Red)";
    }else{
      paragraphs[i].style.display = "none";
      input.style.border = "2px solid var(--dark-grayish-violet)";
    }
  });

  if(nameInput.value && numberInput.value && monthInput.value && yearInput.value && cvcInput.value !== ''){
    cardForm.style.display = 'none';
    thanks.style.display = 'block';
  } 
});


buttonReturn.addEventListener("click", function(event){

  event.preventDefault();

  cardForm.style.display = 'flex';
  thanks.style.display = 'none';
  nameP.textContent = 'YOUR NAME HERE';
  numberP.textContent = '0000 0000 0000 0000';
  monthP.textContent = '00';
  yearP.textContent = '00';
  cvcP.textContent = '000';

  inputArrays.forEach(element => {
    element.value = '';
  });
})





