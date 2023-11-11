import React from 'react';

import { ContainerSectionTWO } from '../COMPONENTS/';

//layout
import {Layout} from '../COMPONENTS';





export const TemplateTRHEE = () => {
    return (
            
          <Layout>
          
            <ContainerSectionTWO>

              <section className='personal_info'>

                  <h2>TemplateTRHEE tittle</h2>

                  <p> El portafolio de Onyedika se basa en elementos animados sencillos y un 
                      encabezado único para atraer a clientes potenciales. En la sección de 
                      detalles del proyecto, añade botones interactivos y coloridos para animar 
                      a los visitantes a obtener más información.
                  
                  </p>

              </section>

              <figure className='image_portada' >
                  <img alt='iamge_portada'></img>
              </figure>

            </ContainerSectionTWO>

          </Layout>
        
    );
}