import React from 'react';
import movieApi from '../../services/movie_api';

class Search extends React.Component {
    state = {
        movies: [],
        keyword: this.props.input,
    }

    async componentDidUpdate(){
        if(this.state.keyword !== this.props.input){
            console.log(this.props.input)
            let result = await movieApi.searchMovie(this.props.input);
            console.log(result);
            this.setState({
                movies: result,
                keyword: this.props.input,
            });
        }
        
    }

    async componentDidMount() {
        console.log(this.props.input)
        let result = await movieApi.searchMovie(this.props.input);
        console.log(result);
        this.setState({
            movies: result,
        });
    }

    render() {
        return (
            <div>
                check!
            </div>
        )
    }
}

export default Search;