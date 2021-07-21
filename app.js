const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const playlists = require("./routes/api/playlists");

const Playlist = require("./models/Playlist");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

//
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//testing

// const newPlaylist = new Playlist({
//   user: "60f715139cb7d0102155256b",
//   songs: [
//     {
//       title: "holy",
//       artist: "justin",
//       preview: "sdf",
//       image: "sdf"
//     },
//     {
//       title: "saved by you",
//       artist: "justin",
//       preview: "sd",
//       image: "sd"
//     }
//   ]
// });

// newPlaylist.save( (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// end testing

app.use("/api/users", users);
app.use("/api/playlists", playlists);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
