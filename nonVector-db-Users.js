const User = require('./models/User'); // Assuming you have a User model defined

User.findOrCreate = function findOrCreate(profile, cb) {
    User.findOne({ googleId: profile.id }, function(err, user) {
        if (err) return cb(err);
        if (user) {
            return cb(null, user);
        } else {
            var newUser = new User({
                googleId: profile.id,
                name: profile.displayName,
                // add any other profile information you want to store
            });
            newUser.save(function(err) {
                return cb(err, newUser);
            });
        }
    });
};