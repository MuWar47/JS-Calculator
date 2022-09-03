// larger of two integers
let fst_int = prompt("Please enter an integer: ");
let sec_int = prompt("Please enter an integer: ");

if (fst_int > sec_int) {
  var str = "Larger is " + fst_int;
  console.log(str);
}
else {
  var str2 = "Larger is " + sec_int;
  console.log(str2);
}

// check for even odd
let i = 0;
while (i < 5){
    let integer = prompt("Enter an integer: ");
    if (integer % 2 == 0) {
      console.log("Number is Even");
    }
    else {
      console.log("Number is Odd");
    }
    i++ ;
   }
    