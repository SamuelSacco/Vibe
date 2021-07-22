const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Playlist = require('../../models/Playlist');

// get playlists for a user
router.get('/:user_id', (req, res) => {
  Playlist.find({ userId: req.params.user_id })
    .then(playlists => res.json(playlists))
    .catch(err => res.status(404).json({ noplaylistfound: 'No playlist found with that ID' }));
});
  
// create playlists
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
      
      newPlaylist.save( (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log(res);
        }
      })
  }
);

// delete playlists
router.delete('/:playlist_id', (req, res) => {
  Playlist.remove({ _id: req.params.playlist_id })
    .then(playlist => res.json(playlist))
    // if (err) {
    //   console.log(err)
    // } else {
    //   console.log(res)
    // }
  // });

  // Playlist.remove({ _id: req.params.playlist_id }, (err, res) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log(res)
  //   }
  // });
});

module.exports = router;