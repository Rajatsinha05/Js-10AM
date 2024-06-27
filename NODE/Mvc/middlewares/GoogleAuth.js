var GoogleStrategy = require('passport-google-oauth20').Strategy;

const googleAuth = (passport) => {
    // passport.use(new GoogleStrategy({
    //     clientID: "",
    //     clientSecret: "",
    //     callbackURL: "http://localhost:8090/auth/google/callback"
    // },
    //     function (accessToken, refreshToken, profile, cb) {
    //         // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //         //   return cb(err, user);
    //         // });
    //         console.log(profile);
    //         return cb(null, profile)
    //     }
    // ));
}
module.exports = googleAuth