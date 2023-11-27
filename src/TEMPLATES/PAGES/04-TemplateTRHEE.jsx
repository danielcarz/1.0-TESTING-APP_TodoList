import React from 'react';

import { MainContainerComponent } from '../COMPONENTS/';

//layout
import {Layout} from '../COMPONENTS';




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
                    <p>lorem impsun introduction</p>
                  </section>

                </section> 
              
              
              </MainContainerComponent>

              <MainContainerComponent>  
                <section className='knowledge'>


                    <section className='technologies'>
                      <p>lorem impsun technologies</p>
                    </section>

                    <figure className='technologies_images'>
                      <img alt='image introduction'></img>
                      <img alt='image introduction'></img>
                      <img alt='image introduction'></img>
                      <img alt='image introduction'></img>
                    </figure>


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

                <footer>
                    <h3>footer</h3>
                </footer>
              </MainContainerComponent>


            </div>
          
            

           

          </Layout>
        
    );
}