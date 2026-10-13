class Bank{

    constructor(accountnumber,holdername,ifsc,minimumbalance,currentbalance){
        this.accountnumber = accountnumber
        this.holdername = holdername
        this.ifsc = ifsc
        this.minimumbalance  = minimumbalance
        this.currentbalance = currentbalance

    }
    displaydetails(){
        console.log(this.accountnumber)
        console.log(this.holdername)
        console.log(this.ifsc)
        console.log(this.minimumbalance)
        console.log(this.currentbalance)
    }}
    class Sbibank extends Bank{

constructor(bankname,branchname,accountnumber,holdername,ifsc,minimumbalance,currentbalance){
        
    
    //use super keyword to access anything from parent class
    super (accountnumber,holdername,ifsc,minimumbalance,currentbalance)
    this.bankname = bankname
    this.branchname = branchname

}
    displaydetails()
{
    super.displaydetails()
    console.log(this.bankname)
    console.log(this.branchname)
}}

//let bank = new Sbibank ("Sbi","TVM",136,"saranya",327,100,500)
//bank.displaydetails()
//multilevel inheritance

class Sbilife extends Sbibank{
  constructor(accountnumber,holdername,ifsc,minimumbalance,currentbalance,bankname,branchname,lifescheme){
super(accountnumber,holdername,ifsc,minimumbalance,currentbalance,bankname,branchname)
this.lifescheme = lifescheme

    }
displaylifedetails(){
    super.displaydetails()
    console.log(this.lifescheme)
}
}
let life = new Sbilife(13,"saranya",326,100,300,"SBI","TVM","Premium")
life.displaylifedetails()