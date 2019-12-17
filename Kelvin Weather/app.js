const kelvin = 293;
const celsius = kelvin - 273;

//calculating Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//calculating Newton scale
let newton = celsius * (33/100);

//rounding the fahrenheit and Newton result and reassigning the variables
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');
console.log('The temperature is ' + newton + ' degrees Newton scale.');
