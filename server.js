const express = require("express");
const connection = require("./config/connection");
const PORT = process.env.PORT || 9090;
const app = express();

app.use(express.static("public")); // this is so it hits my css and images

app.use(express.urlencoded({ extended: true})); //handle urlencoded 
app.use(express.json()); //parse application body as JSON

var exphbs = require("express-handlebars");

//boilerplate goodies
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view enging", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});