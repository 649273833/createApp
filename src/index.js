import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker';
import Routers from './routers/routers'
import './comjs/rem.conf'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers/>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
