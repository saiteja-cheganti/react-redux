import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import Cakecontainer from './components/Cakecontainer';
import HookCakeContainer from './components/HookCakeContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <HookCakeContainer/>
        <Cakecontainer />
        <HookIceCreamContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
