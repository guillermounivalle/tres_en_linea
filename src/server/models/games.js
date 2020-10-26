const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creating subdocument
const positionsPlayersSchema = new Schema({
    playerNumber:{
        type: Number,
        min: 1,
        max: 2,
        require: true
    },
    position:{
        type: Number,
        min: 1,
        max: 9
    }
});

//stateGame: 0 = Inicio , 1 = Ganador Jugador1 , 2 = Ganador Jugador2,  3 = empate
//           4 = en Pausa 
const gamesSchema = new Schema ({
    stateGame: {
        type: Number,
        require: true,
        min: 0,
        max: 4
    },
    player1: {
        type: String,
        require: true,
    },
    player2: {
        type: String,
        require: true,
    },
    boardGame: [
        positionsPlayersSchema
    ]    
},{
    timestamps: true
});

var Games = mongoose.model('Games', gamesSchema);

module.exports = Games;