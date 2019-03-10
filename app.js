var express = require("express");
var hbs = require("hbs");
var path = require("path");
var log = require("./middlewares/logger")

var port = process.env.Port || 3000;

var app = express();
var partialsPath = path.join(__dirname, "/templates/partials");
var viewsPath = path.join(__dirname, "/templates/views");

app.use(log.logger);
app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "hbs")
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


function authenticate(req, res, next) {
    console.log("Authenticating..")
    next();
}

app.get("/", (req, res) => {
    res.render("index", { username: "Sumit Khandelwal"});
})
app.get("/about", authenticate, (req, res) => {
    res.render("about", { username: "Sumit Khandelwal" });
})
app.listen(port, () => {
    console.log("Server running on Port "+ port)
})

