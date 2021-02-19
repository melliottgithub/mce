const mongoose = require('mongoose');

const connectionString = "mongodb+srv://admin:passwordtooweak@mce.ofbft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


module.exports = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log("DB connection works"));
