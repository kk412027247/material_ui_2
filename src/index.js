import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './Avatar';





import registerServiceWorker from './registerServiceWorker';

const Material = () => (
  <MuiThemeProvider>
    <App/>
  </MuiThemeProvider>
);

ReactDOM.render(<Material />, document.getElementById('root'));
registerServiceWorker();
