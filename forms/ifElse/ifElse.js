/*initializing variables and array for program*/
let firstName = prompt('Enter first name')
let state = prompt('Enter state (2 capitilized letter abbreviation)')
let temp = prompt('Enter temperature in degrees fahrenheit (number)')
let messages = ['wear a warm coat, hat, scarf and gloves.', "wear a warm coat but you won't need a hat, scarf or gloves.", 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

if (state === 'NE' && temp < '32') {
  console.log(`${firstName}, ${messages[0]}`)
} else if (state ==='NE' && temp >= '32' && temp <= '50') {
  console.log(`${firstName}, ${messages[1]}`)
} else if (state === 'FL' && temp >= '32' && temp <= '50') {
  console.log(`${firstName}, ${messages[2]}`)
} else if (state === 'FL' && temp > '50' && temp <= '70') {
  console.log(`${firstName}, ${messages[3]}`)
} else {
  console.log(`${firstName}, accurate advice cannot be given based on the information entered in the prompts. Please try again.`)
}