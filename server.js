const express = require('express');  
const passport = require('passport');  
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Pinecone = require('pinecone'); // Assuming 'pinecone' is the correct package name
require('dotenv').config();  

const app = express();  

// Google OAuth setup
passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
            // Replace with your own logic to get or create the user
            // Find or create a user in the database
        db.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
    }
));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

// Pinecone Database setup
const db = new Pinecone({
    // Configuration options here
});

// Use the db object to interact with your Pinecone database

app.get('/', (req, res) => {  
    res.send('Welcome to the GenAI ABT Portal MVP!');  
});  

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
    console.log(`Server is running on port ${PORT}`);
});