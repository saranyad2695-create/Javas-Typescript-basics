//reusable vblick of codes to perform a specefic task
//function definition / declarationi632
//function call/invocation

//  types of functions
//non parameterised
//parameterised
//Non parameterised with return type
//parameterised with return type
//Arrow

//syntax
//function function name(formal parameters if any)
//statements

function welcome(){
console.log("welcome to firm")}
//calling function
welcome()

function addition(a,b){
var c = a+b
console.log(c)
}
addition(2,3)
// return type function
function number(a){

return (a>200)?  true : false

}

console.log(number(500))

// function return type
function multiply(a,b){
    c = a*b
    return (c)
}
console.log(multiply (2,3))

function valid(){
    if(number(500)==true && multiply(2,3)>5){

        console.log("valid")
    }
    else {
        console.log("Invalid")
    }
}
valid()

//arrow functions
const x= () => {
    console.log("arrow function")
}
x()

const square= (y) => y*y ;

    console.log(square(2))
