import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './redux';
import {createStore} from 'redux';

// store设计
import {Provider} from 'react-redux';
import reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer);

const Material = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<Material />, document.getElementById('root'));
registerServiceWorker();
