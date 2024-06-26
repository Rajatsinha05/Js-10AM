const User = require('../models/User.model')
const bcrypt = require("bcrypt");
const localStrategy = require('passport-local').Strategy

const intializer = (passport) => {

    passport.use(new localStrategy({ usernameField: 'email' }, async (email, password, done) => {
     console.log("Email , password" , email , password);
        let user = await User.findOne({ email: email })
        try {
            if (!user) {
                return done(null, false);
            }
            let isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return done(null, false);
            }

            return done(null, user);
        } catch (error) {
            return done(error, false);
        }

    }))

    passport.serializeUser((user, done) => {

        return done(null, user.id);
    })
    passport.deserializeUser(async (id, done) => {
        let user = await User.findById(id);
        return done(null, user);
    })

}


module.exports =intializer