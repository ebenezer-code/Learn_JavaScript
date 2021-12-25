var test = {
    'me': "car",
    'u': "bike",
    'l': "house"
}
test.name = "site"
delete test.l;
console.log(test);
var player = 16;
var playerStep = test[player];
console.log(playerStep);

var testing = {
    "name": 'test',
    "class": "primary 5",
    'term': 1
}
console.log(typeof(testing.name));


const soundLookUp = () =>{
 var lookup = {
     'name': 'Ebenezer Noble',
     'school': 'mc pherson university',
     'nationality': 'nigerian',
     'state': 'rivers state',
     'town': 'portharcourt'
 }
 return lookup["state"];
}
console.log(soundLookUp());

const soundLookUpl = (val) =>{
    var lookup = {
        'name': 'Ebenezer Noble',
        'school': 'mc pherson university',
        'nationality': 'nigerian',
        'state': 'rivers state',
        'town': 'portharcourt'
    }
    return lookup[val];
   }
   console.log(soundLookUpl('town'));
   
