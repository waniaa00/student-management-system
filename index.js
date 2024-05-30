#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.blueBright("*****   WELCOME TO STUDENT MANAGEMENT SYSTEM   *****\n"));
let condition = true;
while (condition) {
    let nameOfStd = await inquirer.prompt([
        {
            name: "stdName",
            type: "input",
            message: "Enter Your Full Name:"
        }
    ]);
    let studentId = Math.floor(1000 + Math.random() * 2000);
    console.log(`Student ${nameOfStd.stdName} added with ID ${studentId}`);
    let courses = await inquirer.prompt([
        {
            name: "course",
            type: "list",
            message: "Kindly Enter Your Course:",
            choices: ["Web Development", "Aritficial Intelligence", "Cloud Computing", "Python Programming", "Mobile App Development"]
        }
    ]);
    let addMoreCourse = await inquirer.prompt([
        {
            name: "AddCourse",
            type: "list",
            message: "Want to More Course:",
            choices: ["Yes", "No"]
        }
    ]);
    let newCourse;
    if (addMoreCourse.AddCourse === "Yes") {
        newCourse = await inquirer.prompt([
            {
                name: "addnew",
                type: "list",
                message: "Enter Additional Course:",
                choices: ["Web Development", "Aritficial Intelligence", "Cloud Computing", "Python Programming", "Mobile App Development"]
            }
        ]);
        console.log("You Added New Course");
    }
    else {
        console.log("No New courses Added!");
    }
    let yourBalance = 10000;
    let amount = await inquirer.prompt([
        {
            name: "payment",
            type: "list",
            message: "What You Want!",
            choices: ["View Balance", "Pay Fees"]
        }
    ]);
    let payPayment;
    if (amount.payment === "View Balance") {
        console.log(`Your Balance is ${yourBalance}`);
    }
    else if (amount.payment === "Pay Fees") {
        payPayment = await inquirer.prompt([
            {
                name: "Amount",
                type: "input",
                message: "Enter Your Amount:"
            }
        ]);
        if (payPayment.Amount < yourBalance) {
            yourBalance -= payPayment.Amount;
            console.log("Your Payment is Successfully Done ");
            console.log(`Now Your Balance is ${yourBalance} `);
        }
        else if (payPayment.Amount > yourBalance) {
            console.log(`Sorry! Your Current Balance is ${yourBalance}`);
        }
    }
    console.log(chalk.bgCyanBright.black("\n*****  Your Status  *****\n"));
    console.log("* Student Name: " + nameOfStd.stdName);
    console.log("* Student ID: " + studentId);
    console.log("* Course: " + chalk.blueBright(courses.course));
    if (newCourse) {
        console.log("* Additional Course:", chalk.blueBright(newCourse.addnew));
    }
    if (payPayment) {
        console.log("* Amount Paid:", payPayment.Amount);
    }
    if (yourBalance) {
        console.log("* Your Remaining Balance:", yourBalance);
    }
    console.log(chalk.italic.blueBright("\n*****THANK YOU*****"));
    break;
}
