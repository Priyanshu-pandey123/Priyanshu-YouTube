

import store from './Utils/store';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
  <Provider store={store}>
   <Head/>
   <Body/>
   </Provider>
    </div>
  );
}

export default App;
