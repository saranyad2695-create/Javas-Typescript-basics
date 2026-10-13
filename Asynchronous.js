
async function add (a,b){
   // var result = a + b
    return await Promise.resolve(a+b)
    
}
console.log(add(2,3))

add(1,1).then (result>=(console.log(result)))

