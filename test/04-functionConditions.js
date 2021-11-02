alert("Welcome to the grocery store!");
alert("Where would you like to go?");
alert("keep in mind that you cannot return to where you came from");
alert("Have fun!");

var selectAisle = window.prompt("pick an aisle: 1, 2, or 3! ");
var aisle = toTheAisle(selectAisle);
function toTheAisle(num){
  if(num == 1){
    console.log("You are in the biscuits and crackers aisle. This aisle is so dry that your skin shrivels up. You think you can see your gradmother here, but it might be a mirage.");
  }
  else if(num == 2){
    console.log("You have entered the chips aisle. You try to pick up a bag of chips, but you do not want to disturb the sleeping cat. You do not buy any chips.");
  }
  else if(num == 3){
    console.log("Oh no an Alien! GAME OVER");
  }
  else{
    console.log("You didn't follow the rules! You are removed from the grocery store.");
  }
}
