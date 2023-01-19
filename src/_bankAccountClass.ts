import { IBankAccount } from "./interface_IBankAccount.js";
export class BankAccount implements IBankAccount{
    public AccountBalance:number;
    
    constructor() {
        this.AccountBalance=100;
    }
    // setter,getter for account balance
    public set _AccountBalance(value:number){
        this.AccountBalance=value;
    }
    public get _AccountBalance(){
        return this.AccountBalance;
    }
    // money that goes into an account
    public Debit(amount:number):string { 
        let statement:string="Transaction failed!";
        if (amount>0) {
            this.AccountBalance=this.AccountBalance+amount;
            if (amount>100) {
                this.AccountBalance=this.AccountBalance-1;
            }
            statement="Your account has been debited successfully!";
        }
        return statement;
        //   let statement:string ="Sorry, you have insufficient balance!";
    //    if (amount>0) {
    //     statement="The amount you entered is wrong!";
    //     if (this.AccountBalance>amount) {
    //         this.AccountBalance=this.AccountBalance-amount;
    //         statement=`Transaction successful! New account balance is ${this.AccountBalance}`
    //     } else {
    //         statement="You don't have enough money to do this transaction";
    //     }
    //    }
    //    return statement;
    }
    // money that goes out of an account
    public Credit(amount:number):string {
       let statement:string ="Sorry, you have insufficient balance!";
       if (amount>0) {
        statement="The amount you entered is wrong!";
        if (this.AccountBalance>amount) {
            this.AccountBalance=this.AccountBalance-amount;
            statement=`Transaction successful! New account balance is ${this.AccountBalance}`
        } else {
            statement="You don't have enough money to do this transaction";
        }
       }
       return statement;
        // let statement:string="Transaction failed!";
        // if (amount>0) {
        //     this.AccountBalance=this.AccountBalance+amount;
        //     if (amount>100) {
        //         this.AccountBalance=this.AccountBalance-1;
        //     }
        //     statement="Your account has been credited seuccessfully!";
        // }
        // return statement;
    }
 
// end of class 
}