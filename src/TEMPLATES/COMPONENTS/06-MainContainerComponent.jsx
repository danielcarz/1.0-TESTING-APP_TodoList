import React from "react";

//styles
import '../../SASS/MIXINS/MIXINS_COMPONENTS/Index.scss';


export const MainContainerComponent = ( { children } ) => {


    return(
       <div className="mainContainerComponent">

            { children }       
            
       </div>
    )
}