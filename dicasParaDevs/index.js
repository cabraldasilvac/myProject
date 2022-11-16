const { Person } = require("./person");
const dotenv = require("dotenv");

dotenv.config();

//require ("./modules/path.js");
// require ("./modules/fs.js");
// require ("./modules/http.js");
require("./modules/express.js");

const person = new Person("Wanderley Cabral");

// console.log(person.sayMyName());
