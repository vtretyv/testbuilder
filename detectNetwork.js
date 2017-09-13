// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var myLen = cardNumber.length;
  var prefix = cardNumber.substring(0,2);
  var prefix4 = cardNumber.substring(0,4);
  var prefix3 = cardNumber.substring(0,3);
  var prefix6 = cardNumber.substring(0,6);
  if ((myLen == 14) && ((prefix == '38') || (prefix == '39'))) {
  	return "Diner's Club";
  }
  else if ((myLen == 15) && ((prefix == '34') || (prefix == '37'))) {
    return 'American Express';
  }
  else if ( ((myLen==16) || (myLen==18) || (myLen==19)) && ((prefix4 == "4903") ||(prefix4 == "4905") || (prefix4 == "4911") ||(prefix4 == "4936")||(prefix4 == "6333")||(prefix4 == "6759") || (prefix6=="564182")||(prefix6=="633110")     )       ) {
    return "Switch";
  }  
  else if (((myLen == 13) || (myLen == 16) || (myLen == 19)) && (prefix[0] == '4')) {
    return 'Visa';
  }
  else if ((myLen == 16) && ((prefix == '51') || (prefix == '52') || (prefix == '53') || (prefix == '54') || (prefix == '55'))) {
    return 'MasterCard';
  }
  else if (((myLen == 16) || (myLen == 19)) && ((prefix4 == '6011') || (prefix3 == '644') || (prefix3 == '645') || (prefix3 == '646') || (prefix3 == '647')|| (prefix3 == '648')|| (prefix3 == '649') || (prefix =="65"))) {
    return 'Discover';
  }
  else if (((myLen == 12) || (myLen == 13) || (myLen == 14) || (myLen == 15) || (myLen == 16) || (myLen == 17) || (myLen == 18) || (myLen == 19)) && ((prefix4 == '5018') || (prefix4 == '5020') || (prefix4 == '5038') || (prefix4 == '6304'))) {
    return 'Maestro';
  }
  else if (  ((myLen ==16)||(myLen == 17)||(myLen == 18)|| (myLen==19)) && (  ((parseInt(prefix6)>=622126) &&(parseInt(prefix6) <= 622925)) || ((prefix3== "624")||(prefix3== "625") || (prefix3== "626")) || ((parseInt(prefix4)>=6282) && (parseInt(prefix4)<=6288))    )){
    return "China UnionPay";
  }

  else {
  	return "Didn't Pass";
  }
};


