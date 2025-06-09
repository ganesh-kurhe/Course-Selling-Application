import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51RGymCD5Qoj5DwN55c62GCXPk4OgjxGhPLJWvOw4zxpn1IaPH3rLRoJf4r1DlErgsFSg4SXl5wksZFvnZ4ZlPQSp00iQkOQEIi");

createRoot(document.getElementById('root')).render(

  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
