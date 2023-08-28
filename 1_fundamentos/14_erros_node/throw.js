const x = "10"

//checar se x é numero

if(!Number.isInteger(x)){
    throw new Error("o Valor de x não é um numero inteiro")
}

console.log("continuando o codigo...")