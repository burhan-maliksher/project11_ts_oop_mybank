export interface IBankAccount{
    Debit(amount:number):string;
    Credit(amount:number):string;

    // string Credit(number);
    
}