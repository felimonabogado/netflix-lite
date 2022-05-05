import React from "react";
import '../../theme/css/style.scss';
import '../../theme/css/child-theme.scss';
import Movieitems, {MovieBox} from "../../controller/getMovies";
import MoviePoster from "../../media/img/movie-poster-01 copy.jpg";
import MovieLogo from "../../media/img/movie-logo-01.png";
import {MdPlayArrow} from 'react-icons/md';


export class Dashboard extends React.Component{
    render(){
        return(
           <>

            {/* 
                romantic
                horror
                drama
                comedy
                sci-fi
                action
            */}
                <div className='page-container'>
                    <div className="section page-banner" style={{ backgroundImage: `url("${MoviePoster}")`  }}>
                        <div className="row">
                            <div className="content">
                                <img src={MovieLogo}/>
                                <p>
                                     In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole.
                                </p>
                                <button><MdPlayArrow/>Play Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="section movie-section">
                        <div className="row" id="new-release">
                            <h3>New Release</h3>
                            <Movieitems category="New Release" />
                        </div>
                        <div className="row" id="trending">
                            <h3>Trending Now</h3>
                            <Movieitems category="Trending Now"/>
                        </div>
                        <div className="row" id="my-list">
                            <h3>Continue Watching</h3>
                            <Movieitems category="Continue Watching"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}