import React from "react";
import '../../theme/css/style.scss';
import '../../theme/css/child-theme.scss';
import { Authentication } from "../../controller/authentication";
import MoviePoster from "../../media/img/signin-banner.jpg";

export class SignInPage extends React.Component{
    render(){
        return(
            <>
                 <div style={{ backgroundImage: `url("${MoviePoster}")`  }}>
                     <div className="section sign-in-section">
                         <div className="row">
                            <Authentication/>
                         </div>
                     </div>
                 </div>
             </>
         )
     }
}
