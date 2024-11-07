//Define Practice 
function printHeart() {
    console.log("<3");
  }
  
  // Execute the function
  printHeart(); // Output: <3
  
  
  
  //Return Value Practice
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Testing the function
  console.log(multiply(2, 3)); // Output: 6
  console.log(multiply(9, 9)); // Output: 81
  console.log(multiply(5, 4)); // Output: 20
  
  
  
  //Scope Practice
  let animal = "Giant Pacific Octopus";
  function observe() {
    let animal = "Pajama Squid";
    console.log(animal);
  }
  
  observe(); // Output: "Pajama Squid"
  
  let deadlyAnimal = "Blue-Ringed Octopus";
  function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
  }
  
  handleAnimal(); // Output: "Scorpionfish"
  console.log(deadlyAnimal); // Output: "Blue-Ringed Octopus"
  
  
  //Arrow Function Exercise
  const sayHello = (name) => `Hello ${name}!`;
  
  // Testing the function
  console.log(sayHello("Hagrid")); // Output: "Hello Hagrid!"
  console.log(sayHello("Luna"));   // Output: "Hello Luna!"
  