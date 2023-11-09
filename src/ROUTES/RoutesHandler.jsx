import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

//components
//import { UserProvider } from './'

//templates
import { Navbar } from '../TEMPLATES/PAGES/02-Navbar';

import { TemplateUNO, TemplateDOS, TemplateTRHEE } from '../TEMPLATES/PAGES/index.js';


export const RoutesHandler = () => {
 

    return(

       
            <BrowserRouter> 

                <Navbar></Navbar>

                
                <Routes>
                    <Route path="/" element={<TemplateUNO></TemplateUNO>}></Route>
                    <Route path="/two" element={<TemplateDOS></TemplateDOS>}></Route>
                    <Route path="/three" element= { <TemplateTRHEE></TemplateTRHEE> } ></Route>

                    

                    
                </Routes>


            </BrowserRouter>

        
       
        
    )
}