//use for loop if we know the iteration limit
//use while loop if we dont know the iterartion limit
// do while loop if statement needs to execute once

//for loop
for (let i=1; i<=10; i++){
    console.log(i)
}

for (let j=1; j<=10; j=j+2){
    console.log(j)
}
for (let i=10; i>=1; i--){
    console.log(i)
}
let fruits = ["apple","orange","Mango"]
    

for (const numvalue of fruits){
    console.log(numvalue)
}
//for in loop
// dictioniers

let student = {name :"John",age:20,gender:"male"}
for(const key in student){
    console.log(key,student[key])
}
//while loop--based on condition and we dont know limit

let name = "saranya"
let count = 0
while
(count< name.length)
{
    console.log(name[count])
    count ++
}
//initialisation,condition,updarte--for,while
//initialisation,statements and update,condition(1st iteration)
//Condition,statements and update

var n = 100
do{
    console.log(n)
    n++
}while (n<=10)

    //character n needs to be skipped

    var str = ""
var string = "Saranya"   
string = string.toLowerCase()
console.log(string)
for(const s of string){
if(s=='n'){
continue
}
 console.log(s)   
 var str = str+s
}
console.log(str)
//continue -- skip