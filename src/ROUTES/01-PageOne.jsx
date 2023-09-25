import React, {useContext} from "react";

//styles
import '../SASS/COMPONENTS/01-PageOne.scss';

//components
import { Layout } from "../COMPONENTS/LAYOUT/Layout";
import {UserContext} from './index'
//hooks
//import { useGetTime } from "../COMPONENTS/CUSTOM_HOOKS/01-DateTime"; countDown

export const PageOne = () => {

    const context = useContext(UserContext);

    //countDown
    /* const { formatTiempoRestante } = useGetTime();
    const {horas, minutos, segundos} = formatTiempoRestante(); */

    return(
        <Layout>
            <section className="testingPage">
                <h1>TestingPage</h1>
                <p>Tiempo restante: {horas} : {minutos} : {segundos}</p>
            </section>

        </Layout>
           
        
    )
}