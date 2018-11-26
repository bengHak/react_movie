import React from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'

const MovieList = ( { movies } ) => (
    <div className="App">
        {movies.map(movie => (
            <Movie
                key={movie.id}
                {...movie}
                title={movie.title}
                synopsis={movie.overview}
                poster={movie.poster}
                genres="hello"
            />
        ))}
    </div>
)

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(
    mapStateToProps,
)(MovieList);