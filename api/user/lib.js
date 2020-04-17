require('dotenv').config()
const User = require("./schemaUser.js");
const authorization = require('../../middleware-jwt.js')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

let refreshTokens = []
/*
//////SIGN UP
const signup = async(req, res) => {
    const { password, email } = req.body;
    if (!email || !password) {
        //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        return res.status(400).json({
            msg: "Requête invalide"
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Création d'un objet user, dans lequel on hash le mot de passe
    const user = {
        email,
        password: hashedPassword
    };
    // On check en base si l'utilisateur existe déjà
    try {
        const findUser = await User.findOne({
            email
        });
        if (findUser) {
            return res.status(400).json({
                msg: "L'utilisateur existe déjà"
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }

    try {
        // Sauvegarde de l'utilisateur en base
        const userData = new User(user);
        const userObject = await userData.save();
        //Create json web token
        const accessToken = jwt.sign({user : userObject}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})

        return res.status(200).json({
            msg: "Succès",
            accessToken: accessToken
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }
}
*/
////////////////LOGIN
const login = async(req, res) => {

    const { password, email } = req.body;
    if (!email || !password) return res.sendStatus(400)
    try {
        // On check si l'utilisateur existe en base
        const userObject = await User.findOne({ email });
        if (!userObject)
            return res.sendStatus(400)
        //Check if the password is correct
        let isCorrect = await bcrypt.compare(password, userObject.password)

        if(isCorrect){

            //Create json web token
            const accessToken = authorization.generateAccessToken(userObject)
            const refreshToken = jwt.sign({user: userObject}, process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken)

            req.session.regenerate(function(err) {
              if(err) return res.sendStatus(400)
            })
            req.session.email = email
            req.session.accessToken = accessToken
            req.session.refreshToken = refreshToken

            res.sendStatus(200);

        }else{
            return res.sendStatus(400)
        }
    } catch (error) {
      console.log(error)
      return res.sendStatus(500)
    }
}


///LOGOUT
const logout = async(req,res) => {
    req.session.regenerate(function(err) {
      if(err) return res.sendStatus(400)
    })
    refreshTokens = []
    return res.sendStatus(200);
}

///AUTH
const auth = async(req, res) => {
    User.findOne({ email: req.session.email }).then((user) => {
      if(user){
        return res.status(200).json({
          auth : true
        });
      }else{
        return res.sendStatus(400);
      }
    })
}



//On exporte nos deux fonctions
exports.login = login;
exports.logout = logout;
//exports.signup = signup;
exports.auth = auth;
