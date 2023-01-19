import { BankAccount } from "./_bankAccountClass.js";
export class Customer extends BankAccount {
    FirstName;
    LastName;
    Gender;
    Age;
    MobileNumber;
    // public bankAccount:string;
    constructor() {
        super();
        this.FirstName = "";
        this.LastName = "";
        this.Gender = "";
        this.Age = 0;
        this.MobileNumber = "";
        // this.bankAccount="";
    }
    // getter,setter for first name
    get _F_Name() {
        return this.FirstName;
    }
    set _F_Name(value) {
        this.FirstName = value;
    }
    // getter,setter for last name
    get _L_Name() {
        return this.LastName;
    }
    set _L_Name(value) {
        this.LastName = value;
    }
    // getter,setter for gender
    get _gender() {
        return this.Gender;
    }
    set _gender(value) {
        this.Gender = value;
    }
    // getter,setter for age
    get _Age() {
        return this.Age;
    }
    set _Age(value) {
        this.Age = value;
    }
    // getter,setter for mobile no
    get _mobileNo() {
        return this.MobileNumber;
    }
    set _mobileNo(value) {
        this.MobileNumber = value;
    }
    // // getter,setter for bank account
    // public get _bankAcoount(){
    //     return this.bankAccount;
    // }
    // public set _bankAcoount(value:string){
    //     this.bankAccount=value;
    // }
    // customer data method
    CustomerInfo() {
        return `Name:${this.FirstName}  ${this.LastName}\nAge:${this.Age}\nGender:${this.Gender}\nMobile:${this.MobileNumber}\nAccount Balance:${this._AccountBalance}\n`;
    }
}
