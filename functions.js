//FUNCTIONS
//global scope
const pen = 'Timi';

function changeName(){
    //console.log('party');
}
console.log(pen);

changeName();
//Function scope
function changeNamez(){
    const radar = 'zebra';
    //console.log('party');
    //console.log('party');
    //console.log('party');
    //console.log('party');
    console.log(radar);
};
changeNamez();





//function myFunction(checkoutBtn){
    //if (checkoutBtn == true) {
     //   return "Order"
    //} else{
     //   return "not order"
    //};
    //};
  //  console.log(myFunction(true));

  //PAREMETERS
  //function adder(num1,num2) {
     // console.log(num1 + num2);
  //}
  ///adder(2,5);
  //const blink = document.querySelector('.button');
//blink.addEventListener('click', ()=>{
  //  blink.textContent = 'Sabotage';
//})


  function calculus(checkMate,realMate){
      if (checkMate == 5 && realMate == 3) {
        return "Checked";
      }
      else{
        return "Failed"
      }
  }
  console.log(calculus(5,3));

function count(text){
  var text;
   const sums = 12;
   if(sums == `${text}`) {
     return sums
   }
   else{
     return "cannot read value"
   }
}

console.log(count(11+ 1));

  const name = "Temitope";
const age = 24;
const toUpper = (text) =>{
    const upper = text.toUpperCase();
    console.log(upper);
}
toUpper(name);
