import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("welcome.ejs");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/search", (req, res) => {
    res.render("search.ejs");
});

app.get("/profile", (req, res) => {
    res.render("profile.ejs");
});

app.get("/list", (req, res) => {
    res.render("list.ejs");
});

app.post("/submit", (req, res) => {
    let Url = req.body.itemUrl;
    console.log(Url);
    res.render("search.ejs")
});

app.listen(port, function(err) {
    if (err) console.log("Error in server setup")
    console.log(`Server running on ${port}`);
});
