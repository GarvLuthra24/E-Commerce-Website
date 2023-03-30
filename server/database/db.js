// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://garvluthra24:TguCn5LycezAZuCd@amazon-project-server.yvf2cxz.mongodb.net/ServerItems');
  console.log("successfully connected to mongodb server")
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = mongoose