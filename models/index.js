var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/feefaa_db")
  .then(() => console.log(('Mongodb connected...'))
  .catch(err => console.log(err)))

module.exports.Banter = require("./banter");
module.exports.Bash = require("./bash");
