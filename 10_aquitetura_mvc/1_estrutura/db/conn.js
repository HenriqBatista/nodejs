const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "", {
  host: "localhost",
  dialect: "mysql",
});


try {
    sequelize.authenticate()
    console.log("Conectado ao banco de dados MySQL")
} catch (error) {
    console.log(`não foi possivel conectar ao banco de dados: ${error}`)

}

exports.default = sequelize