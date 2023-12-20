import React from 'react';

import { MainContainerComponent } from '../COMPONENTS/';

//layout
import {Layout} from '../COMPONENTS';

//styles
import '../../SASS/PORTAFOLIO/COMPONENTES/06-MainContainerComponent.scss';

//IMAGES
import  reactLogo from '../../../public/assets/reactNative.png';
import  sassLogo from '../../../public/assets/sass.png';
import computerLogo from '../../../public/assets/software.png';
 



export const TemplateTRHEE = () => {

  
    return (
            
          <Layout>

            <div className='wrapperContainer'>

      
              <MainContainerComponent> 

                <section className='introduction'>

                  <figure>
                     <img alt='image introduction'></img>
                  </figure>

                  <section className='introduction_paragraph'>

                    <p>
                        ¡Hola! Soy Frontend Developer. Hago que todo se vea genial en cualquier pantalla; 
                        mis diseños son versátiles, adaptándose con estilo. Si buscas algo fácil de usar 
                        y con un toque especial, cuenta conmigo.
                    </p>

                  </section>

                </section> 
              
              
              </MainContainerComponent>

              <MainContainerComponent>  
                <section className='knowledge'>

                    <h2>Experiencia</h2>

                    <section className='technologies_wrapper'>
                      
                      <section className='technologies_info'>

                          <figure className='technologies_logo'>
                            <img src={ reactLogo } alt='react_logo' ></img>
                            <h2>React Native</h2>
                          </figure>

                          <p>
                              Experiencia en la creación eficiente de componentes y el desarrollo
                              de aplicaciones web y móviles. Habilidades incluyen la gestión
                              avanzada del estado y la optimización de rendimiento, con experiencia
                              en Progressive Web Apps (PWAs).
                          </p>

                      </section>

                      <section className='technologies_info'>
                          <figure className='technologies_logo'>
                            <img src= { sassLogo } alt='react_logo' ></img>
                            <h2>Sass</h2>
                          </figure>

                          <p> 
                              Experiencia creación de estilos eficientes para aplicaciones 
                              web. Especializado en el uso de variables, mixins y arquitecturas 
                              escalables. Dedicado a perfeccionar interfaces estilizadas y mejorar 
                              el rendimiento en el procesamiento de estilos.
                          </p>

                      </section>

                      <section className='technologies_info'>

                          <figure className='technologies_logo'>
                            <img src={ computerLogo } alt='react_logo' ></img>
                            <h2>JavaScript, Apis, optimización</h2>
                          </figure>

                          <p>
                            Experiencia en JavaScript y conocimientos de ES6, manipulación del DOM, 
                            gestión de eventos, principios de POO para modularidad en proyectos y Git /hub 
                            para control de versiones. Optimizo aplicaciones con AJAX y APIs para un 
                            rendimiento eficiente, utilizando Chrome DevTools y principios de POO para 
                            modularidad en proyectos.
                          </p>

                      </section>
                        

                  
              
                    </section>

                   


                </section> 

              </MainContainerComponent>

              <MainContainerComponent>  
                <section className='projects'>
                  <h3>PROJECTS</h3>

                  <figure className='projects_imagesWrapper'>

                    <a href="" className='projects_image' > <img alt='image projects'></img>  </a>
                    <a href="" className='projects_image' > <img alt='image projects'></img>  </a>
                    <a href="" className='projects_image' > <img alt='image projects'></img>  </a>
                    <a href="" className='projects_image' > <img alt='image projects'></img>  </a>
                    <a href="" className='projects_image' > <img alt='image projects'></img>  </a>
                   
                    
                  </figure>
                </section>
              
              </MainContainerComponent>

              <MainContainerComponent>  

                <footer className='footer' >
                      
                      <div class="column clase1">

                        <section>
                            <h2>Título de la Columna 1</h2>
                            <span>Subtítulo de la Columna 1</span>
                        </section>

                        <p>Contenido de la columna 1</p>

                      </div>

                      <div class="column clase2">

                          <div className="column-wrapperONE">

                              <h3>Encabezado 1</h3>
                              <h3>Encabezado 2</h3>
                              <h3>Encabezado 3</h3>
                              <h3>Encabezado 4</h3>


                          </div>

                          <div className="column-wrapperTWO">
                              <h3>Encabezado 5</h3>
                              <h4>Subencabezado 1</h4>
                              <h4>Subencabezado 2</h4>
                              <h4>Subencabezado 3</h4>
                              <h4>Subencabezado 4</h4>


                          </div>


                      </div>


                      <div class="column clase3">
                      <section>
                        <h2>Título de la Columna 3</h2>

                        <div class="wrapperSocialMedia">

                              <figure>
                                  <img src="imagen1.jpg" alt="Imagen 1" />
                                  <p>Descripción de la Imagen 1</p>

                              </figure>

                              <figure>
                                  <img src="imagen2.jpg" alt="Imagen 2" />
                                  <p>Descripción de la Imagen 2</p>
                              </figure>

                              <figure>
                                  <img src="imagen3.jpg" alt="Imagen 3"/>
                                  <p>Descripción de la Imagen 3</p>
                              </figure>
                        </div>
                      </section>

                        <p>Contenido de la columna 3</p>
                      </div>

                      <div class="column clase4">
                          <div>
                              <h3>Título del Primer Div de Clase 4</h3>
                              <p>Contenido del Primer Div de Clase 4</p>
                          </div>

                          <div> 
                              <section>
                                <h2>Comunícate con nosotros</h2>
                                <p>¿Tienes alguna pregunta? ¡Contáctanos!</p>
                                <a href="pagina-de-contacto.html" class="button">Contacto</a>
                              </section>
                          </div>
                      </div>
                </footer>
              </MainContainerComponent>


            </div>
          
            

           

          </Layout>
        
    );
}