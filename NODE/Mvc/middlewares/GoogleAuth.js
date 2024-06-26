var GoogleStrategy = require('passport-google-oauth20').Strategy;

const googleAuth = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: "901419004462-87ld1njutdmnfrteo6u0pn8d4meco4mp.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8090/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, cb) {
            // User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //   return cb(err, user);
            // });
            console.log(profile);
            return cb(null, profile)
        }
    ));
}
module.exports = googleAuth