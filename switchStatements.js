let names = ["HolySpirit","GOD", "JESUS", "Devil"];
names.push("Savior","Fandango")
function trinity(good,bad){
    if(good == 1) {
        return names[0]
    } else if (good == bad - 1) {
        return names[1]

    }else if (good != bad){
         return names[2]
    }else if (good === bad){
        return names[3]
    }else {
        return names;
    }
 }
 console.log(trinity(10,10));
 



 
 function switchCase(val) {
 var answer = "";
      switch (val) {
     case 1:
         answer = "stop!"
         
         break;

     case 2:
         answer = "Get ready!"
         break;

       case 3:
           answer = "GO!"
           break;  
 }
 return answer;
}
console.log(switchCase(1));
