import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';

const PUBLIC_KEY = "pk_test_51OYlcDKJDXtm98j598fsGAp43aAteplxyyev0VWPj5uB4yjUVuhdBZCuuzIf8edFzhuzGvk7mHoujNKM3IulHb7R00g1MovyXH";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () =>{
    return(
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm/>
        </Elements>
    );
};
export default Stripe;