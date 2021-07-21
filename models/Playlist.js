const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaylistSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  songs: [{
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      require: true
    },
    preview: String,
    image: String
  }]
});

module.exports = Playlist = mongoose.model('Playlist', PlaylistSchema)



// Workspace.findByIdAndUpdate("60f706f6c1e2732279bddc29",
//         { "$push": { "tweets": {
//             username: 'test4-username',
//             profile_pic: 'test4-pic',
//             user_url: 'test4-userUrl',
//             body: 'test4-body',
//             date: Date.now(),
//             source: 'test4-source',
//         } } },
//         { "new": true, "upsert": true },
//         function (err, managerparent) {
//             if (err) throw err;
//             console.log(managerparent);
//         }
//     );
