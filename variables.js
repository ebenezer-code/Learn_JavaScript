//VARIABLES
//VAR
//var life = 200 ;//this is a note..this is a life bar
//life = life - 10;
//life = life - 10;
//var name = 'EBENEZER'; //this is the tab name
//CONST
const life = 200;
console.log(life);
//BOOLEAN
var boolean = true;
boolean = false;
boolean = null;
boolean;

/*const sum = (function () {
    return function sum(x,y,z) {
        const args = [x,y,z]
       return args.reduce((a, b) =>  a + b, 0)
    }

})()
console.log(sum(1,2,3))*/

const sum = function () {
    return function sum(...args) {
        return args.reduce((a,b) => a - b)
    }
}()
console.log(sum(1,2,3,4,5))


