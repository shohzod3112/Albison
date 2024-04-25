function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const person = { name: 'Jane' };
  greet.apply(['Hi'], person); // Output: Hi, Jane!
  