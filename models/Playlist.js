const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  song: [
    
  ]
});

module.exports = Playlist = mongoose.model('Playlist', PlaylistSchema)