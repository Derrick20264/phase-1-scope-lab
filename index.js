// Write your solution in this file!
// 1. Declare customerName globally with var and assign 'bob'
var customerName = 'bob';

// 2. Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function that declares bestCustomer in global scope and assigns 'not bob'
function setBestCustomer() {
  // Declaring bestCustomer without var, let, or const makes it global
  bestCustomer = 'not bob';
}

// 4. Function to overwrite bestCustomer global variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as a const in global scope
const leastFavoriteCustomer = 'some customer';

// 6. Function to attempt to change leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  // This will throw an error because constants cannot be reassigned
  leastFavoriteCustomer = 'another customer'; 
}
