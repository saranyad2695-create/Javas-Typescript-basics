class Employee {
    #clientlocation = "USA"


    //getlocation
    constructor(id, name, joblevel, salary) {
        //this keyword used to refer current object
        this.id = id
        this.name = name
        this.joblevel = joblevel
        this.salary = salary
    }

    displaydetails() {
        console.log(this.id)
        console.log(this.name)
        console.log(this.joblevel)
        console.log(this.salary)
       console.log(this.getlocation())
    }

    // increment salary
    updatesalary() {
        if (this.joblevel == 1) {
            this.salary += 1000

        }
        else if (this.joblevel == 2) {
            this.salary += 500
        }
        else if (this.joblevel == 3) {
            this.salary += 300
        }
        else {
            this.salary = this.salary
        }
    }

    getlocation() {
        return this.#clientlocation

    }
}
let emply = new Employee(126, "saranya", 2, 1000)
emply.displaydetails()
emply.updatesalary()
emply.displaydetails()
//console.log(emply.getlocation())
//client location should not be out of class--use r/private

