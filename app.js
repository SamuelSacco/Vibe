const passport = require('passport');

app.use(passport.initialize());
require('./config/passport')(passport);