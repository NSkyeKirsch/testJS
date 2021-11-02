var sOne = window.prompt("Enter first string: ");
var sTwo = window.prompt("Enter second string: ");

var result = false;

if(sOne.length == sTwo.length) {
  for(let i = 0; i < sOne.length; i++){
    if(sOne.charAt(i) == sTwo.charAt(i)){
      result = true;
    }
    else {
      result = false;
    }
  }
}


alert("the result is: " + result);

//made this more complicated on purpose bcause it is fun and I need to
//prove that I'm not just copying somhow haha
