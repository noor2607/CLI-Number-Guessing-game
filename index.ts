#! /usr/bin/env Node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 8 + 1);
const answer = await inquirer.prompt([{
        name: "userguessedNumber",
        type: "number",
        message: "Plz Guess A Number Between 1-8.",
     },
    ]);
if ( answer.userguessedNumber === randomNumber) {
    console.log("Hurrah!!! You Guessed The Right Number.");
}
else {
    console.log("Sorry! Try Again.");
}


