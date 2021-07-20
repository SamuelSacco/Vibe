<<<<<<< HEAD
// import Tracks from './frontend/test';
// const passport = require('passport');

// app.use(passport.initialize());
// require('./config/passport')(passport);


// <Tracks />
=======
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const playlists = require("./routes/api/playlists");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

//
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/playlists", playlists);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
>>>>>>> d05be851f896f2a6bad5fa762c86aef894ed074b
