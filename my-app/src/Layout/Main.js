import React, { Component } from 'react';
import Movies from '../Components/Movies';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            movies: []
        }
    }


    componentDidMount() {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a9deb32d&s=panda")
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }


    render() {
        return (
            <div className="container content">
            {this.state.movies.length ? <Movies movies={this.state.movies} /> : <h3>Loading...</h3>}
                
            </div>
        );
    }
}

export default Main;