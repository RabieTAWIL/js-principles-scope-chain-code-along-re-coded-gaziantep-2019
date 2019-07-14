/* Your code goes here */

var customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bob';

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'not bob';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'bob';
  favoriteCustomer = 'not bob';
}
