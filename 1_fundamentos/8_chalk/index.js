const chalk = require('chalk')

const nota = 4

if (nota >= 7){
    console.log(chalk.green.bold("Parabens, voce foi aprovado"))
}else{
    console.log(chalk.black.bgRed("Você precisa fazer a prova de recuperação!"))
}