const express = require('express');  
const passport = require('passport');  
const OAuth2Strategy = require('passport-oauth2');
require('dotenv').config();  

const app = express();  

passport.use('provider', new OAuth2Strategy({
        authorizationURL: 'https://www.provider.com/oauth2/authorize',
        tokenURL: 'https://www.provider.com/oauth2/token',
        clientID: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/provider/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ providerId: profile.id }, function (err, user) {
        //   return cb(err, user);
        // });
        // Replace the above line with your own logic to get or create the user
    }
));

app.get('/auth/provider',
    passport.authenticate('provider'));

app.get('/auth/provider/callback', 
    passport.authenticate('provider', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

app.get('/', (req, res) => {  
    res.send('Welcome to the GenAI ABT Portal MVP!');  
});  

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
        console.log(`Server is running on port ${PORT}`);
});