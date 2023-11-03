// Exporting multiple variables while defining
  const add =require('./sample')

     // then o/p are SyntaxError: Unexpected identifier
    



// Exporting multiple variables after defining


// const add =require('./sample')
// console.log(add)
                  //*  then output are value = 9



// Exporting multiple values and expressions



//    const {sum,sub,value} =require('./sample')
//     console.log(sum)
//     console.log(sub);
//     console.log(value);
          // then the output are 5 -1 undefined
 





// Exporting multiple functions while defining

// const {sum,sub} =require('./sample')
// console.log(sum(3,4))
// console.log(sub(5,6));





// Exporting multiple functions after defining
// const {sum,sub} =require('./sample')
// console.log(sum(3,4))
// console.log(sub(5,6));



// Exporting multiple classes while defining
//  const {studentDetails} = require('./sample.js')
//  const newObject=  new studentDetails("vishal",29);
// console.log(newObject);







// Exporting multiple classes after defining

const {studentDetails} =require('./sample.js')
const newDetailsObject =new studentDetails("Rohan",27)
console.log(newDetailsObject);