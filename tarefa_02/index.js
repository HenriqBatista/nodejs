const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer.prompt([
  {
    name: "p1",
    message: "Qual é o seu nome?",
  },
  {
    name: "p2", message:"Qual é a sua idade?"
  },
]).then(answers =>{
    console.log(chalk.bgYellow.black(`O seu nome é ${answers.p1} e a sua idade é ${answers.p2}`));
}).catch(err => console.log(err))
