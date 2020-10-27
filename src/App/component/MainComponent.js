import React, {Component} from 'react';
import Home from  './HomeComponent';
import { withRouter, Switch } from 'react-router-dom';
import { actions } from 'react-redux-form';
import { fetchGames } from '../redux/ActionsCreators';


//Connect with redux
import { connect } from 'react-redux';

// Connect component with react store
const mapStateToProps = state => {
	return {
		games: state.games,
	}	
}

const mapDispatchToProps = (dispatch) => ({
	fetchGames: () => {dispatch(fetchGames())}
});

class Main extends Component {
	constructor(props){
		super(props);
    };

    componentDidMount(){
		this.props.fetchGames();
	};


    render(){


        const HomePage = () => {
            return(
                <Home dish={this.props.games.games.filter((game) => dish.featured)[0]}
                dishesLoading={this.props.games.isLoading}
                dishErrMess={this.props.games.errMess}/>
            );
        };

        return(
            <Switch>
                <Route path="/home" component={HomePage}/>
            </Switch>            
        );
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));