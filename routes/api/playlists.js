const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

router.get("/test", (req, res) => res.json({ msg: "This is the playlists route" }));

const Playlist = require('../../models/Playlist');
// const validateTweetInput = require('../../validation/playlists');

router.get('/', (req, res) => {
    Playlist.find()
        .sort({ date: -1 })
        .then(playlists => res.json(playlists))
        .catch(err => res.status(404).json({ noplaylistsfound: 'No playlists found' }));
});

router.get('/user/:user_id', (req, res) => {
    Playlist.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(playlists => res.json(playlists))
        .catch(err =>
            res.status(404).json({ noplaylistsfound: 'No playlists found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Playlist.findById(req.params.id)
        .then(playlist => res.json(playlist))
        .catch(err =>
            res.status(404).json({ noplaylistfound: 'No playlist found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validatePlaylistInput(req.body);
        
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newPlaylist = new Playlist({
        text: req.body.text,
        user: req.user.id
      });
  
      newPlaylist.save().then(playlist => res.json(playlist));
    }
  );

module.exports = router;