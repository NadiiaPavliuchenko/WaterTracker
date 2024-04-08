import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App.jsx';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import GlobalStyle from './rootStyles';
import ThemeCustomThemeProvider from './components/CustomThemeProvider/CustomThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/WaterTrackerFrontend/">
          <ThemeCustomThemeProvider>
            <GlobalStyle />
            <App />
          </ThemeCustomThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
