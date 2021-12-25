//console.log(`My name is ${name}, and i am ${age} years old!`);
//console.log('my name is ' + name + ', and i am ' + age + ' years old!');

//const age = 24;
//const name = "Timi";
//const sex = '';
//const nam=kw
const changeButton = document.querySelector('.container');

document.querySelector('.button').addEventListener('click', () =>{ 
    changeButton.classList.add('change');
});

document.querySelector('.button').addEventListener('click', () =>{ 
    changeButton.classList.remove('change');
});
//console.log(typeof age);
//console.log(typeof name);
//console.log(typeof sex);
//console.log(typeof nam);
