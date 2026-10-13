//overloading example
class Numbers{
  //  add(a,b){
   //     return a+b

   // }

    add(a,b,c){
        if(arguments.length===2){
            return arguments[0]+arguments[1]
        }
        if(arguments.length===3){
            return arguments[0]+arguments[1]+arguments[2]
        }
      
    }
 //default valued functions   
addition(a,b=0,c=0){
    return a+b+c
}
}
let obj = new Numbers()
console.log(obj.add(1,2))
console.log(obj.add(1,2,3))
//default valued functions
console.log(obj.addition(4))
console.log(obj.addition(4,5))
console.log(obj.addition(4,5,6))



