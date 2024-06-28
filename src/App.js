

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './Utils/store';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[{
      path:"/",
      element:<MainContainer/>
    },
  {
    path:"/watchv?/:id",
    element:<WatchPage/>
  }]
  }
])



function App() {
  
  return (
    <div className="App">
  <Provider store={store}>
   <Head/>
   <RouterProvider router={appRouter}/>
   </Provider>
    </div>
  );
}

export default App;
