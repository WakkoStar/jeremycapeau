require('dotenv').config()
//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require('express-fileupload');
const session = require('express-session')
const cors = require('cors')
const path = require('path');
const MongoStore = require('connect-mongo')(session);
//Connexion à la base de donnée
mongoose
    .connect("mongodb://localhost/db", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch((e) => {
        console.log("Error while DB connecting");
        console.log(e);
    });

//Avoid deprecations
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//On définit notre objet express nommé app
const app = express();
//Fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
//fileUpload
app.use(fileUpload({createParentPath: true}));
//cors
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
//Body Parser
const urlencodedParser = bodyParser.urlencoded({extended: true});
app.use(urlencodedParser);
app.use(bodyParser.json());

//Session
var sess = {
  store: new MongoStore({mongooseConnection: mongoose.connection}),
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: {maxAge: 999999999999, secure: false} //2 semaines
}
app.use(session(sess))

//Définition du routeur
const router = express.Router();

//user
const user = require(__dirname +"/api/user/userController");
app.use("/api/user", user);

//categories
const category = require(__dirname +"/api/category/categoryController");
app.use("/api/category", category);

//images
const images = require(__dirname +"/api/image/imagesController");
app.use("/api/images", images);

//fichiers
const pdfs = require(__dirname +"/api/file/pdfsController");
app.use("/api/pdfs", pdfs);

//rubrique
const gallerie = require(__dirname +"/api/gallery/galleryController");
app.use("/api/gallery", gallerie);

//contact
const contact = require(__dirname +"/api/contact/contactController");
app.use("/api/contact", contact);

//a propos
const apropos = require(__dirname + "/api/bio/aproposController");
app.use('/api/apropos', apropos);


//react
app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

//Définition et mise en place du port d'écoute
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
