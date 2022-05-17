import React from 'react';
import Movie from './Movie';

function Movies(props) {
    const {movies} = props
    return (
        <div className="movies">
            {movies.map(item => (
                <Movie key={item.imdbID} {...item} />
            ))}
            {/* https://app.getpostman.com/join-team?invite_code=0ae476fa68a93460050eb2774af2f47d */}
        </div>
    );
}

export default Movies;