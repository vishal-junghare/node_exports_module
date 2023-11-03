//  1> Exporting a variable while defining




    // module.exports = let value = 5   * this line is code 








// Exporting a variable after defining
   

//    let value =12;
//    module.exports = value;







// Exporting a value or an expression
 

    //  module.exports =5*8







// Exporting a function while defining

//      module.exports =function(a,b){
//     return a+b
//    }





// Exporting a function after defining
// function add(a,b){
//     return a+b
// }
// module.exports=add
        //OR 


 // function add(a,b){
 //     return a+b
 // }
 // module.exports=add


// Exporting a class while defining



//    module.exports =class studendDetails{
//     constructor (name,age){
//         this.name=name;
//         this.age=age;
//     }
//    }




// Exporting a class after defining



const add =class studendDetails{
        constructor (name,age){
             this.name=name;
            this.age=age;
        }
        }
module.exports=add
    
