// Can you define the key named let, var, true, or const or any other JavaScript keywords in an object. Explain why?

//ans ==  because all the key inside the object are in the string . so we can define special keyword

// Accessing values from object
let keyValue = 'username';
let charactor = {
  username: 'arya',
};
// 1.
console.log(charactor['keyValue']);
// 2.
console.log(charactor[keyValue]);
// After going through the code above answer the following
// What will be the output of 1 and 2

1. undefined
2. arya

// Why are they different
no1. console keyValue inside a single Quotes so return undefined and no.2 console inside the keyValue inside not single Quotes. 

// Can I use . dot notation to access the value (using variable name). Explain reason?
dot notation is not worked on variable.

// What is the difference between . dot notation and [] bracket notation. Explain
dot notation is used only for Camelcase string in object but [] bracket is used number and string in object

// What are situation where we use dot notation and bracket notation.
dot notation is used for Camelcase string and special keyword access in object and  [] notetion is used number and string between space. 