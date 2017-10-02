import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './Snackbar';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux'

const Material = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App/>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(<Material />, document.getElementById('root'));
registerServiceWorker();
