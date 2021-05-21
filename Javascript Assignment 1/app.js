var F = window.prompt("Enter your number: "); 
alert("Your number is " + F);

  if(isNaN(F)){

  console.log(F + "`${parameter} is not a valid number but a/an ${parameter's type}.`");
  }
  
  else {
  cTemp = (F - 32) * 5/9;
  console.log(cTemp.toFixed(4));
}

