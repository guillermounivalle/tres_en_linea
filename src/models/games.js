const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema ({

});

var Games = mongoose.model('Games', gamesSchema);

module.exports = Games;