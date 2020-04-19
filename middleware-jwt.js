require('dotenv').config()
const jwt = require('jsonwebtoken')
const User = require("./api/user/schemaUser.js");

const auth = async(req,res,next) => {

  const token = req.session.accessToken
  const refreshToken = req.session.refreshToken

  //On vérifie l'access Token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(e, data) => {
      if(data){
          //Le token est bon
          const {_id, email, password} = data.user
          User.findOne({_id, email, password}).then(user => {
            if(!user) return res.sendStatus(400)
            next()
          })
      } else {
          //Le token n'est plus valide
          jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,(e, data) => {
              if(data){
                  const {_id, email, password} = data.user
                  User.findOne({_id, email, password}).then(user => {
                    if(!user) return res.sendStatus(400)
                    req.session.accessToken = generateAccessToken(user)
                    next();
                  })
              }else{
                  console.log('Pas trouvé : refreshToken')
                  return res.sendStatus(400)
              }
          })
      }
  })

}

const generateAccessToken = (user) => {
 return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'})
}

exports.generateAccessToken = generateAccessToken;
exports.auth = auth
