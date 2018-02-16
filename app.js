  var a = 24;
  var b = 9;
  var hour = 60;
  var quarter = 4;
  var array = [2,4,5,199,39,12,1];
  var count = 9;

  var car = {
    wheels: 4,
    passengers: 4,
    mileage: 20300,
    cost: 49928
  }

  var spaceship = {
    wheels: 18,
    rooms: 21,
    passengers: 29909394895803589193049389,
    cost: 0
  }

  var objectArray = [car, spaceship];

  //PART I

  //Function 1
  //Create a function that adds variables a and b, then divides them by 11.

function equation() {
    var ans = a+b/11;
    console.log(ans);
};
equation();

  //Function 2
  //Create a function that will console.log a value of 18.
function log(){
  console.log(18);

}
log();
  //Function 3
  //Create a function that will console.log the last element of the array by accessing the value from the array.
function arrayLog(){
  console.log(array[6]);

}
arrayLog();
  //Function 4
  //Create a function that can divide hours by quarters, then add 10 to that result.

  function equation2() {
    var anshq = hour/quarter;
    console.log(anshq);
};
equation2();

  //Function 5
  //Create a function that will multiply the 2nd and 3rd element from the array, then subtract 5 from that result.

  function arrayEquation(){
    console.log(array[1]+array[2]/5);
  
  }
arrayEquation();
  //Function 6
  //Create a function that will subtract the number of car wheels from the number of spaceship wheels.
function wheel(){
  console.log(car.wheels-spaceship.wheels);
}
wheel();
  //PART II

  //Function 7
  //Create a function and using a for loop, iterate through the array. In this loop, increment the count of the variable count.
function add1(){
  for(var i=0 ;i<array.length;i++ ){
    console.log("add1",array[i]+1);
  }
}
add1();
  //Function 8
  //Create a function and using a for loop, iterate through the objectArray. In this loop, increment the count of the passengers for the 1st element in the objectArray.
function objAdd(){
  for(var j = 0;j<objectArray.length;j++){
    console.log("objadd", objectArray[j].passengers+1);
  }
}
objAdd();

  //Function 9
  //Create a function that adds the 1st and 6th element of the array.
function add2(){
  console.log(array[0]+array[5]);

}
add2();