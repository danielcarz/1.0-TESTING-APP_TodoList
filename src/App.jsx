

//styles
import './SASS/Layout.scss';

//components
import { Layout } from './Components/00-Layout';

import { TodoList } from './Components/1.0-TodoList';

function App() {
 

  return (
   
      <Layout className = "layoutContainer" > 
        <TodoList></TodoList>
      </Layout>
  
  )
}

export default App
