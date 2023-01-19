#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { titleTimer } from "./src/_title.js";
import { ageValidation,stringValidation,numberValidation, amountValidation } from "./src/validation_Fucn.js";
import { Customer } from "./src/_customerClass.js";

class MyBank{
    constructor() {
        
    }

         // run the app
  async Run(): Promise<void> {
    await this.AppTitle();
    await this.App();
  }

  // autor watermark on app at the begening
  private async AppTitle(): Promise<void> {
    const title = chalkAnimation.neon(`__________________Welcome to M.B MyBank App__________________`);
    await titleTimer();
    title.stop();
    console.log(chalk.bgRed.italic(`                                                             Autor:"M.B"`));
  }

  //   app
  private async App() {
    // user input about customer
    const CustInfo=await inquirer.prompt([{
      type:"input",
      name:"fname",
      message:"Please enter Customer First Name!",
      validate:stringValidation,
    },
    {
      type:"input",
      name:"lname",
      message:"Please enter Customer Last Name!",
      validate:stringValidation,
    },
    {
      type:"list",
      name:"gender",
      message:"Please enter Customer's gender!",
      choices:["Male","Female"]
    },
    {
      type:"input",
      name:"age",
      message:"Please enter Customer's age!",
      validate:ageValidation,
    },
    {
      type:"input",
      name:"mobileNO",
      message:"Please enter Customer's mobile NO!",
      validate:numberValidation,
    },
    ]);

      let Cust_obj=new Customer();
      Cust_obj._F_Name=CustInfo.fname;
      Cust_obj._L_Name=CustInfo.lname;
      Cust_obj._Age=CustInfo.age;
      Cust_obj._gender=CustInfo.gender;
      Cust_obj._mobileNo=CustInfo.mobileNO;
      // displaying customer info
      console.log(chalk.green(Cust_obj.CustomerInfo()));
      let repeat:boolean=false;
      do {
        const creditORdebit=await inquirer.prompt([{
          type:"list",
          name:"choice",
          message:"Please choose one to Procced!",
          choices:["Credit","Debit"],
        }]);
        if (creditORdebit.choice=="Credit") {
          const input=await inquirer.prompt([{
            type:"input",
            name:"amount",
            message:"Enter Amount to Credit",
            validate:amountValidation,
          }]);
          let amount=parseInt(input.amount);
          console.log(chalk.cyan(Cust_obj.Credit(amount)));
        }
        else if(creditORdebit.choice=="Debit"){
          const input=await inquirer.prompt([{
            type:"input",
            name:"amount",
            message:"Enter Amount to Debit",
            validate:amountValidation,
          }]);
          let amount=parseInt(input.amount);
          console.log(chalk.cyan(Cust_obj.Debit(amount)));
        }  
      // decision for exiting or doing more credit/debit
        const input=await inquirer.prompt([{
          type:"confirm",
          name:"descion",
          message:"Press y to continue",
        }]);
        repeat=input.descion;
      } while (repeat==true);
    
    console.log(chalk.red(chalk.bgCyan(`       Thanks for using M.B MyBank App      `)));
    
  }

//   end of mybank app class
}

let run=new MyBank();
run.Run();