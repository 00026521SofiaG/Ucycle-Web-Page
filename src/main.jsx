import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

 


    <BrowserRouter>
      
    <Auth0Provider domain='dev-eggf5kcq656vwqs6.us.auth0.com'
        clientId='viUYO27L1qdbAF9eJQGJENuTY50KypDj'
        redirectUri={window.location.origin}>
        <App />

        </Auth0Provider>
    
    </BrowserRouter>


)


