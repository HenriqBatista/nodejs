// modulos externos
const inquirer = require("inquirer");

const chalk = require("chalk");

// modulos internos
const fs = require("fs");

console.log("Iniciamos o Accounts");

// inicialização do sistema

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Oque você deseja fazer?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      if (action === "Criar Conta") {
        createAccount();
      } else if (action === "Depositar") {
        deposit();

      } else if (action === "Consultar Saldo") {
        getAccountBalance()

      } else if (action === "Sacar") {
        withdraw()

      } else if (action === "Sair") {
        console.log(chalk.bgYellow.black("Obrigado por usar nosso banco!"));
        process.exit();
      }
    })
    .catch((err) => console.log(err));
}

// create an account

function createAccount() {
  console.log(chalk.bgGreen.black("Parabens por escolher nosso banco!"));
  console.log(chalk.green("Defina as opções da sua conta a seguir"));

  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da sua conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      console.info(accountName);
      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Essa conta já existe, escolha outro nome")
        );
        buildAccount();
        return;
      }
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance":0}',
        function (err) {
          console.log(err);
        }
      );
      console.log(chalk.green("Parabéns, a sua conta foi criada com sucesso!"));
      operation();
    })
    .catch((err) => console.log(err));
}

// ad an amount to user account
function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      // verify if account exist
      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto você deseja depositar?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];
          // add amount to account
          addAmount(accountName, amount);
          operation();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Essa conta não existe, tente novamente"));
    return false;
  }
  return true;
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.bgRed.black("você precisa inserir um valor"));
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);
  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );
  console.log(
    chalk.green(`Foi depositado o valor de R$${amount} na sua conta.`)
  );
}

function getAccount(accountName) {
  const accountJson = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });
  return JSON.parse(accountJson);
}

// show account balance
function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return getAccountBalance();
      }
      const accountData = getAccount(accountName);
      console.log(
        chalk.bgBlue.black(
          `Olá, o saldo da sua conta é de R$${accountData.balance}`
        )
      );
      operation();
    })
    .catch((err) => {
      console.error(err);
    });
}

// get an amount from user account
function withdraw(){

  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta?'
    }
  ])
  .then((answer) => {
    const accountName = answer['accountName']
    if(!checkAccount(accountName)){
      return withdraw()
    }
    inquirer.prompt([
      {
        name:'amount',
        message: "Quanto você deseja sacar?"
      }
    ])
    .then((answer) => {
      const amount = answer['amount']
      
      removeAmount(accountName, amount)
    })
    .catch(err => console.log(err))
  })
  .catch((err) =>console.log(err));
}

function removeAmount(accountName, amount) {
  const accountData =  getAccount(accountName)
  if(!amount){
    console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente."))
    return withdraw()
  }
  if(accountData.balance < amount){
    console.log(chalk.bgRed.black("Valor indisponível para saque nessa conta."))
    return withdraw()
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)
  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), function(err){
    console.log(err)
  })

  console.log(chalk.green(`Foi realizado um saque de R$${amount} na sua conta`))
  operation()
}