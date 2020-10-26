import React, {Component} from 'react';
import Home from  './HomeComponent';
import { withRouter } from 'react-router-dom';

//Connect with redux



// Connect component with react store

class Main extends Component {
	constructor(props){
		super(props);
    }

    render(){
        const HomePage = () => {
            return(
                <Home/>
            );
        }

        return(
            <div>
                <Header/>
                <Route path="/home" component={HomePage}/>
            </div>
        )
    }

}

export default withRouter((Main));