const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@dicasparadevs.sr1xqez.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Erro:\n Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }
    }
  );
  // const db = mongoose.connect();
};

module.exports = connectToDatabase;
