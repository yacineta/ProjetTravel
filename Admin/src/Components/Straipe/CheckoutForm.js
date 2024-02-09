import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export const  CheckoutForm=()=>{
    const stripe = useStripe();
    const Elements = useElements();

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card:Elements.getElement(CardElement),
        });
        if(!error){
            
        }
        console.log("token Genere:",paymentMethod);
    }

    return(
        <form onSubmit={handleSubmit} style={{maxWidth:400}}>
            <CardElement
                  options={{
                    hidePostalCode: true
                  }}
            />
            <button>Payer</button>
        </form>

    );
};