import React from 'react';

import { Header } from '../theme/layout/header';
import { Footer } from '../theme/layout/footer';

import { Dashboard } from '../views/pages/dashboard';
import { SignInPage } from '../views/pages/signIn';
import { ContinueToWatchPage } from '../views/pages/continueToWarch';
import { NewReleasePage } from '../views/pages/newRelease';
import { TrendingPage } from '../views/pages/treding';


const user = {
    is_login: sessionStorage.getItem('is_login'),
    name:  sessionStorage.getItem('accountName'),
    email: sessionStorage.getItem('email')
}

export function Signin(){
    return(
        <>
            {(user.is_login) ? 
                (window.location.replace('/browse')
            ) : (
                <>
                     <SignInPage/>
                </>
            )}
        </>
    )
}

export function Browse(){
    return(
        <>
            {(user.is_login) ? ( 
                <>
                    <Header/>
                    <Dashboard/>
                    <Footer/>
                </>
            ) : (<RedirectToSignIn/>)}
        </>
    )
}

export function ContinueToWatch(){
    return(
        <>
            {(user.is_login) ? ( 
                <>
                    <Header/>
                    <ContinueToWatchPage/>
                    <Footer/>
                </>
            ) : (<RedirectToSignIn/>)}
        </>
    )
}

export function NewRelease(){
    return(
        <>
            {(user.is_login) ? ( 
                <>
                    <Header/>
                    <NewReleasePage/>
                    <Footer/>
                </>
            ) : (<RedirectToSignIn/>)}
        </>
    )
}

export function Trending(){
    return(
        <>
            {(user.is_login) ? ( 
                <>
                    <Header/>
                    <TrendingPage/>
                    <Footer/>
                </>
            ) : (<RedirectToSignIn/>)}
        </>
    )
}

function RedirectToSignIn(){
    window.location.replace('/')
}