import React from "react";
import { NavLink} from "react-router-dom";
import '../css/style.scss';
import '../css/child-theme.scss';
import Netflix from '../../media/img/netflix.png';
import {MdMenu, MdSend} from 'react-icons/md';

class Menu extends React.Component{
    
    logout = () => {
        sessionStorage.clear();
        window.location.replace('/')
    }

    render(){
        return(
            <ul>
                <li><a href="#new-release">New Release</a></li>
                <li><a href="#trending">Trending</a></li>
                <li><a href="#my-list">Continue To Watch</a></li>
                <li><button onClick={this.logout}>Logout</button></li>
            </ul>
        )
    }
}

export class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuisOpen: false
        }
    }

    toggleButton = () => {
        if(this.state.menuisOpen == false){
            // alert('Must open');
            let menuisOpen = true;
            this.setState({menuisOpen});
        }else{
            // alert('Must Close');
            let menuisOpen = false;
            this.setState({menuisOpen});
        }
        console.log(this.state.menuisOpen);
    }

    render(){
        return(
            <header className="menu-bar">
                <div className="container">
                    <div className="logo">
                        <img src={Netflix}/>
                    </div>
                    <nav className="menu-items">
                        <div className="desktop-menu">
                            <Menu/>
                        </div>
                        <button className="mobile-menu-button" onClick={this.toggleButton}><MdMenu/></button>
                        {(this.state.menuisOpen) && 
                           <div className="mobile-menu">
                                <Menu/>
                            </div>
                        }
                    </nav>
                </div>
            </header>
        );
    }
}