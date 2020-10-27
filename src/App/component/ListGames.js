import React,{Component} from 'react'
import { Media } from 'reactstrap';



class ListGames extends Component{
    constructor(props){
        super(props);

        this.state = {
            games:[
                {
                    id:0,
                    stateGame: 3,
                    player1: "Carlos",
                    player2: "Pedro",
                    boardGame:[
                        {
                            playerNumber: 1,
                            position: 2
                        },
                        {
                            playerNumber: 2,
                            position: 5
                        },
                        {

                        }
                    ]    
                },
                {
                    id:0,
                    stateGame: 3,
                    player1: "Diana",
                    player2: "Peter",
                    boardGame:[
                        {
                            playerNumber: 1,
                            position: 2
                        },
                        {
                            playerNumber: 2,
                            position: 5
                        },
                        {
                            
                        }
                    ]    
                }
            ]
        };

        this.stateGame = this.stateGame.bind(this);


    }

    stateGame(game){
        switch (game.stateGame) {
            case 1:
                return <p>Estado del juego:  {game.player1} ganador</p>
            case 2:
                return <p>Estado del juego:  {game.player2} ganador</p>
            case 3:
                return <p>Estado del juego:  Empate: No hubo ganadores</p>
            case 4:
                return <p>Estado del juego:  Sin terminar</p>
            default:
                break;
        }
    }

    render() {
        const games = this.state.games.map((game) => {
            return (
              <div key={game.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media alt={game.number} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>JUEGO {game.number}</Media>
                    <p>Jugador 1 {game.player1}</p>
                    <p>Jugador 2 {game.player2}</p>
                    {this.stateGame(game)}
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {games}
              </Media>
            </div>
          </div>
        );
    }
}

export default ListGames; 