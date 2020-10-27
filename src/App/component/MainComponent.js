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
            <div >
                <Home/>
                
            </div>
        )
    }

}//<Route path="/home" component={HomePage}/>

export default withRouter((Main));