// Add two number

function sum(numA,numB){
    return numA + numB;
}

let result,expected;

function test(message,cb){
    try{
        cb();
     console.log(`✅`,message)
    } catch(error){
        console.error(error);
        console.log("❌",message)
    }
}

function expect(actual){
    return{
        isEqual: function(expected){
            if(actual !== expected){
                throw (`${result} is not equal to ${expected}`)
            } 
        },
    };
}

function testSum(){
    result = sum(2,4);
    expected = 6;

    expect(result).isEqual(expected);
}

test('adding 2 and 4', testSum);

 test("2 + 3 = 5", () => {
    expect(sum(2, 3)).isEqual(5);
  });
  
  test("12 + 3 = 15", () => {
    expect(sum(12, 3)).isEqual(15);
  });

  test("12.2 + 3.5 = 15.7", () => {
    expect(sum(12.2, 3.5)).isEqual(15.7);
  });

  test("argument is !a number", () => {
    expect(sum(12, hello)).isEqual(12);
  });


 // Multiply two numbers
 
 function multiply(numA,numB){
    return numA * numB;
 }

 test("2 * 3 = 6", () => {
    expect(multiply(2, 3)).isEqual(5);
  });
 
 
  test("12 * 3 = 36", () => {
    expect(multiply(12, 3)).isEqual(36);
  });


  test("2 * 5 = 10", () => {
    expect(multiply(2, 5)).isEqual(10);
  });
 
  
  test("2 * 5 = 10", () => {
    expect(multiply(2, 5)).isEqual(10);
  });
 
  
  test("1 * 0 = 0", () => {
    expect(multiply(1, 0)).isEqual(0);
  });
 
  test("whrn argument is !a number", () => {
    expect(multiply(2, hrll)).isEqual(10);
  });
 
  
  
  
  