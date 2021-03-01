/*initializing variables and array for program*/
let firstName1 = prompt('Enter first name')
let state1 = prompt('Enter state (2 capitilized letter abbreviation)')
let temp1 = prompt('Enter temperature in degrees fahrenheit (number)')
let messages1 = ['wear a warm coat, hat, scarf and gloves.', "wear a warm coat but you won't need a hat, scarf or gloves.", 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

/*switch statement that outputs messages to console based on user input*/
switch(true) {
  case state1 === 'NE' && temp1 < '32':
    console.log(`${firstName1}, ${messages1[0]}`)
    break;
  case state1 ==='NE' && temp1 >= '32' && temp1 <= '50':
    console.log(`${firstName1}, ${messages1[1]}`)
    break;
  case state1 === 'FL' && temp1 >= '32' && temp1 <= '50':
    console.log(`${firstName1}, ${messages1[2]}`)
    break;
  case state1 === 'FL' && temp1 > '50' && temp1 <= '70':
    console.log(`${firstName1}, ${messages1[3]}`)
    break;
  default:
    console.log(`${firstName1}, accurate advice cannot be given based on the information entered in the prompts. Please try again.`)
}