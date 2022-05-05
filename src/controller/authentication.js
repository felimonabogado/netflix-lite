import React, {Component} from "react";
import accounts from "../data/account";
import Netflix from '../media/img/netflix.png';

export class Authentication extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            singleUser: '',
            formValidate: false,
            formMessage: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: this.state.email})
        this.setState({password: this.state.password})
        this.inputEmail = this.state.email;
        this.user = accounts.find(singleUser => singleUser.email ===  this.inputEmail)
        this.setState({singleUser: this.user})

        if(this.state.email == ''){
            this.setState({formMessage: 'Email is Empty'})
        }else{
           if(this.state.password == ''){
                this.setState({formMessage: 'Password is Empty'})
           }else{
                if(this.user){
                    if(this.user.email === this.state.email && this.user.password != this.state.password){
                        this.setState({formMessage: 'wrong password'})
                   }else  if(this.user.email === this.state.email && this.user.password === this.state.password){
                        this.setState({formValidate: true})
                        sessionStorage.setItem('is_login', true)
                        sessionStorage.setItem('accountName', this.user.name)
                        sessionStorage.setItem('email', this.user.email)
                        window.location.replace('/browse')
                   }
                }else{
                    this.setState({formMessage: 'No account was found'})
                }
           }
        }
    }

    render(){
        if(!this.state.formValidate){
            return(
                <>
                    <form onSubmit={this.handleSubmit}>
                        <div className="logo">
                            <img src={Netflix} width="100"/>
                        </div>
                        <h2>Sign in</h2>
                        <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email or Phone number"/>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
                        <input type="submit" value="Sign In"/>
                        <p>{(this.state.formMessage != '') && this.state.formMessage}</p>
                    </form>
                </>
            )
        }
    }
}