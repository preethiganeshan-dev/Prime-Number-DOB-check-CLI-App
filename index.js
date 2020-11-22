var readLineSync=require("readline-sync");
var chalk=require("chalk");
var log=console.log;
var error=chalk.bgRed.bold;
var prime=chalk.bgGreen.bold;
var composite=chalk.bgCyan.bold;
var regex=/^(([1-2][0-9])|([0][1-9])|(3[0-1]))((1[0-2])|([0][1-9]))/g;

var answer=readLineSync.question("Please enter your name: ");
var birthDate=readLineSync.question("Hi "+answer+"! Want to know if your DOB is a prime number? Please enter your birth details in ddmm format: ");

if (regex.test(birthDate)===true){
  for(var i=2; i<birthDate; i++){
    if (birthDate%i==0){
      i=birthDate;
      log(composite("Oh No..Your DOB is composite."));     
    }else if(i===birthDate-1){
      log(prime("Hurray! Your DOB is prime."))
    }
  }
}else {
  console.log(error("Error! Invalid DOB format."));
}
    

