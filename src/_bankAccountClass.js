export class BankAccount {
    AccountBalance;
    constructor() {
        this.AccountBalance = 100;
    }
    // setter,getter for account balance
    set _AccountBalance(value) {
        this.AccountBalance = value;
    }
    get _AccountBalance() {
        return this.AccountBalance;
    }
    // money that goes into an account
    Debit(amount) {
        let statement = "Transaction failed!";
        if (amount > 0) {
            this.AccountBalance = this.AccountBalance + amount;
            if (amount > 100) {
                this.AccountBalance = this.AccountBalance - 1;
            }
            statement = "Your account has been debited successfully!";
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
    Credit(amount) {
        let statement = "Sorry, you have insufficient balance!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.AccountBalance > amount) {
                this.AccountBalance = this.AccountBalance - amount;
                statement = `Transaction successful! New account balance is ${this.AccountBalance}`;
            }
            else {
                statement = "You don't have enough money to do this transaction";
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
}
