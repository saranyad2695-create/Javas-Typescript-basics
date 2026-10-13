let a = 2
let b = 5
if (b>a){
    console.log("this is valid")
}
if (a>b){
    console.log("invalid")
}
else{
    console.log("this is valid else ")}

    //if else if ladder
    let age =20
    if(age<10){
        console.log("child")}

       else if(age>=13 && age<=19){
            console.log("teenager")
        }
        else if(age >=20 && age<=59){console.log("young")}
else{console.log("senior citizen")}

//switch statement
let day = 2
switch(day){
    case 1: 
    console.log("Monday")
    break
    case 2 :
    console.log("Tuesday")
    break
    case 3 :
        console.log("wednesday")
         break
        case 4 : 
        console.log("Thursday")
        break 
        case 5 :
         console.log("Friday")
         break
           case 6:
                console.log("Saturday")
                break
                default :
                console.log("Invalid")

}

//ternary operator
age>=18?console.log("adult"):console.log("Monior")

let x = 2
let y = 1
let Operator = "+"
switch(Operator){
    case "+": 
    console.log(x+y)
    break
    case "-" :
    console.log(x-y)
    break
    case "*":
        console.log(x*y)
         break
        case "/" : 
        console.log(x/y)
        break 
      

}