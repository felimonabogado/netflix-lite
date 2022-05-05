import React, {useEffect} from "react";
import movies from '../data/movies.json';
import Slider from "react-slick/lib/slider";


class Movieitems extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: movies,
            movieIsOpen: false
        }
    }

    onMovieIn = () => {
        this.setState({movieIsOpen: true});
    }

    onMovieOut = () =>{
        this.setState({movieIsOpen: false});
    }

    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 980,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                }
            ]
        };
        
        if(this.props.category){
            return(
                <>
                    <div className="movie-list">
                        <Slider {...settings}>
                            {this.state.data.filter(movie => movie.category == this.props.category).map((filteredMovie, key) => {
                                    return(
                                        <>
                                          <div  key={key} className="movie-card" id={filteredMovie.id} onClick={() => {
                                                        sessionStorage.setItem('movie_image', filteredMovie.image)
                                                        sessionStorage.setItem('movie_title', filteredMovie.title)
                                                        sessionStorage.setItem('movie_description', filteredMovie.description)

                                                    }}>
                                                <div className="movie-banner">
                                                    <img src={filteredMovie.image} />
                                                </div>
                                                <div className="movie-details">
                                                    <h2>{filteredMovie.title}</h2>
                                                    <MovieDetails>
                                                        <p>{filteredMovie.genre}</p>
                                                        <p>{ filteredMovie.description}</p>
                                                    </MovieDetails>
                                                </div>
                                           </div>
                                        </>
                                    )
                                })}
                        </Slider>
                    </div>
                </>
            )
        }else{
            return(
                <>
                    <div className="movie-list">
                        {this.state.data.map((movie, key) => {
                                return (
                                    <>
                                        <div  key={key} className="movie-card" id={movie.id} onClick={() => {
                                            sessionStorage.setItem('movie_title', movie.title)
                                            sessionStorage.setItem('movie_description', movie.description)
                                        }}>
                                            <div className="movie-banner">
                                                <img src={movie.image} />
                                            </div>
                                            <h2>{movie.title}</h2>
                                        </div>
                                    </>
                                )
                        })}
                    </div>
                </>
            )
        }
    }
}

export class MovieDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    toggleButton = () => {
        if(this.state.isOpen == false){
            // alert('Must open');
            let isOpen = true;
            this.setState({isOpen});
        }else{
            // alert('Must Close');
            let isOpen = false;
            this.setState({isOpen});
        }
        console.log(this.state.isOpen);
    }

    render(){
       return(
           <>
            <button onClick={this.toggleButton}>Info</button>
            {(this.state.isOpen) && 
                <div className="movie-modal-box">
                {this.props.children}
            </div>
            }
           </>
       ) 
    }
}

export default Movieitems;