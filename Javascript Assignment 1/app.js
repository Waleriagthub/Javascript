var F = window.prompt("Enter your number: "); 
alert("Your number is " + F);

  if(isNaN(F)){
  console.log(`${F} is not a valid number but a/an ${F}.`);
  }
  
  else {
  cTemp = (F - 32) * 5/9;
  console.log(cTemp.toFixed(4));
}

