import React from "react";
import '../css/style.scss';
import '../css/child-theme.scss';

export class Footer extends React.Component{
    render(){
        return(
           <footer>
               <div className="section">
                   <div className="row">
                       <div className="col-1">
                           <p>React Development 2022</p>
                       </div>
                   </div>
               </div>
           </footer>
        );
    }
}