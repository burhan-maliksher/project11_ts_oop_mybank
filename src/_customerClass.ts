import { BankAccount } from "./_bankAccountClass.js";

export  class Customer extends BankAccount {
    public FirstName:string;
    public LastName:string;
    public Gender:string;
    public Age:number;
    public MobileNumber:string;
    // public bankAccount:string;
    
    constructor() {
        super();
        this.FirstName="";
        this.LastName="";
        this.Gender="";
        this.Age=0;
        this.MobileNumber="";
        // this.bankAccount="";
    }
    // getter,setter for first name
    public get _F_Name(){
        return this.FirstName;
    }
    public set _F_Name(value:string){
     this.FirstName=value;
    }
    // getter,setter for last name
    public get _L_Name(){
        return this.LastName;
    }
    public set _L_Name(value:string){
     this.LastName=value;
    }
    // getter,setter for gender
    public get _gender(){
        return this.Gender;
    }
    public set _gender(value:string){
     this.Gender=value;
    }
    // getter,setter for age
    public get _Age(){
        return this.Age;
    }
    public set _Age(value:number){
     this.Age=value;
    }
    // getter,setter for mobile no
    public get _mobileNo(){
        return this.MobileNumber;
    }
    public set _mobileNo(value:string){
        this.MobileNumber=value;
    }
    // // getter,setter for bank account
    // public get _bankAcoount(){
    //     return this.bankAccount;
    // }
    // public set _bankAcoount(value:string){
    //     this.bankAccount=value;
    // }

    // customer data method
    public CustomerInfo():string{
        return `Name:${this.FirstName}  ${this.LastName}\nAge:${this.Age}\nGender:${this.Gender}\nMobile:${this.MobileNumber}\nAccount Balance:${this._AccountBalance}\n`;
    }

//end of class
}