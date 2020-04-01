var x;


for(x = 1; x <= 100; x++){
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("Intel");
  }  
  else if (x % 3 === 0){
    console.log("In");
  } 
  else if (x % 5 === 0) {    
    console.log("tel");
  }
  else {
    console.log(x);
  }
}