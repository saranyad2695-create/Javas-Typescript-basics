class Student{
    constructor(studentid, studentname,semester,s1mark,s2mark,s3mark){
        this.studentid= studentid
        this.studentname = studentname
        this.semester = semester
        this.s1mark = s1mark
        this.s2mark = s2mark
        this.s3mark = s3mark
    }
    //for privatising put #
    #calculategrade(){
        var add = this.s1mark + this.s2mark + this.s3mark
        if(add >= 500){
            console.log("A+")
        }
else if (add > 400&& add<500) {
    console.log("B+")

    
} else if (add >300 && add <400){
    console.log("c+")
    
}
else{
    console.log("Failed")
}
    }
displaydetails() {
    console.log(this.studentid)
    console.log(this.studentname)
    console.log(this.semester)
    console.log(this.s1mark)
    console.log(this.s2mark)
    console.log(this.s3mark)
    this.#calculategrade()//abstraction
}
    }


let marks = new Student (136,"saranya",3,100,200,300)
marks.displaydetails()
//marks.calculategrade()