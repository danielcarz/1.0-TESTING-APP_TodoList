import React from "react";

//styles
//import '../../SASS/PORTAFOLIO/COMPONENTES/06-MainContainerComponent.scss';


export const MainContainerComponent = ( { children } ) => {


    return(
       <div className="mainContainerComponent">

            { children }       
            
       </div>
    )
}