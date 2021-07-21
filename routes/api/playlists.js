const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Playlist = require('../../models/Playlist');

// router.get("/test", (req, res) => res.json({ msg: "This is the playlists route" }));

// const validateTweetInput = require('../../validation/playlists');

// router.get('/', (req, res) => {
//     Playlist.find()
//         .sort({ date: -1 })
//         .then(playlists => res.json(playlists))
//         .catch(err => res.status(404).json({ noplaylistsfound: 'No playlists found' }));
// });

// router.get('/user/:user_id', (req, res) => {
//     Playlist.find({user: req.params.user_id})
//         .sort({ date: -1 })
//         .then(playlists => res.json(playlists))
//         .catch(err =>
//             res.status(404).json({ noplaylistsfound: 'No playlists found from that user' }
//         )
//     );
// });

// get playlists for a user
router.get('/', (req, res) => {
    Playlist.find({ userId: req.params.userId })
        .then(playlist => res.json(playlist))
        .catch(err =>
            res.status(404).json({ noplaylistfound: 'No playlist found with that ID' })
        );
});

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
    //   const { errors, isValid } = validatePlaylistInput(req.body);
        
    //   if (!isValid) {
    //     return res.status(400).json(errors);
    //   }
      const newPlaylist = new Playlist({
        userId: req.body.userId,
        widget: req.body.widget,
        songs: req.body.songs
      });
      
      newPlaylist.save( (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      })
    }
    
);

module.exports = router;