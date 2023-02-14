// Get full name

// 1. Function to concatenate first and last name
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
  
  // 2. Tests for the function
  function testGetFullName() {
    const expected = "John Doe";
    const actual = getFullName("John", "Doe");
    console.log(expected === actual ? "PASS" : "FAIL");
  }
  
  function testGetFullNameWithEmptyLastName() {
    const expected = "John ";
    const actual = getFullName("John", "");
    console.log(expected === actual ? "PASS" : "FAIL");
  }
  
  // 3. Make the first test fail
  function testGetFullNameWithWrongFirstName() {
    const expected = "Jane Doe";
    const actual = getFullName("John", "Doe");
    console.log(expected === actual ? "PASS" : "FAIL");
  }
  
  testGetFullName(); // PASS
  testGetFullNameWithEmptyLastName(); // PASS
  testGetFullNameWithWrongFirstName(); // FAIL
  
  
  //  Calculate total amount

  // 1. Function to calculate total amount
function calculateTotalAmount(amount, taxRate) {
    return amount + (amount * taxRate);
  }
  
  // 2. Tests for the function
  function testCalculateTotalAmount() {
    const expected = 110;
    const actual = calculateTotalAmount(100, 0.1);
    console.log(expected === actual ? "PASS" : "FAIL");
  }
  
  function testCalculateTotalAmountWithZeroTaxRate() {
    const expected = 100;
    const actual = calculateTotalAmount(100, 0);
    console.log(expected === actual ? "PASS" : "FAIL");
  }
  
  // 3. Make the first test fail
  function testCalculateTotalAmountWithWrongAmount() {
    const expected = 120;
    const actual = calculateTotalAmount(100, 0.1);
    console.log(expected === actual ? "PASS" : "FAIL");
  }
  
  testCalculateTotalAmount(); // PASS
  testCalculateTotalAmountWithZeroTaxRate(); // PASS
  testCalculateTotalAmountWithWrongAmount(); // FAIL
  