
let connection = require("./config/connection").connection;
let express = require("express");
let port = 4000;
let app = express();
const complaint = require('./routes/complaint');
const register = require('./routes/register');
const renewal = require('./routes/renewal');
const services = require('./routes/services');
const about = require('./routes/about');
const safety = require('./routes/safety');
const acts = require('./routes/acts');
const index = require('./routes/index');
const contact = require('./routes/contact');
const licence = require('./routes/licence');

const path = require('path');
const hbs = require('handlebars');
const { handlebars } = require('hbs');
const { engine } = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './view');
app.use(express.static(__dirname + "/public"));

app.use("/", index);
app.use("/register", register);
app.use("/renewal", renewal);
app.use("/complaint", complaint);
app.use("/acts", acts);
app.use("/services", services);
app.use("/safety", safety);
app.use("/about", about);
app.use("/licence1", licence);
app.use("/contacts1", contact);

// app.set('view ensgine', 'hbs')
// app.set('views', './view');
// app.use(express.static(__dirname + "/public"));
// app.get("/contacts", (req, res) => {
//   const {firstname,lastname,gamename,review } = req.query;
//   let qry = "insert into grizles.contact(firstname,lastname,gamename,gamereview) values (?,?,?,?)";
//   con.query(qry, [firstname,lastname,gamename,review ], (err, result) => {
//       if (err)throw err;
//         else{
//           res.render("contactus")
//       }
//   });
// });
app.listen(port, (err) => {
    if (err)
        throw err
    else
        console.log(`server started on ${port}`);
})


