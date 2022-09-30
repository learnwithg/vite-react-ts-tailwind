/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { store } from '#rtkstore/store'
import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Toaster } from 'react-hot-toast'

const persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root')!)

const Main = () => {
  return (
    <React.StrictMode>
      <Auth0Provider
        domain="kmc-erp.jp.auth0.com"
        clientId="2bYyoZLIj60Vi1MplJZGJrR4xtSyf24d"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Toaster position="top-right" />

            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </Auth0Provider>
    </React.StrictMode>
  )
}

root.render(<Main />)
