import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import config from './services/config';
import {EffectorContext} from './services/effector-service';
import ServicesProvider from './services/provider';
import Services from './services/services';

// Менеджер сервисов
const services = new Services(config);

// Корень React приложения
const root = createRoot(document.getElementById('root'));

root.render(
  <EffectorContext.Provider value={services.effector}>
    <Provider store={services.storeRedux}>
      <ServicesProvider services={services}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ServicesProvider>
    </Provider>
  </EffectorContext.Provider>
);
