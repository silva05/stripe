import React from "react";
import theme from "./theme/theme";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "bootswatch/dist/lux/bootstrap.min.css";
import axios from 'axios';
import { useState } from "react";


const stripePromise = loadStripe("pk_test_51MgxzvBi92DupNzGRwdN4ob8tiiJAjJKP4C7sdoS5XfRasnF4e45i19CfGHOcTZXwDaCDOCdkPKst8pbfFMvOlNk00LMFr5oQQ")

const CheckoutForm = () =>{

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSumbmit = async(e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);
  
    if(!error){
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post("http://localhost:3001/api/checkout",
          {
            id,
            amount: 780, //cents
          }
        );
        console.log(data);
        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  }

  return <form onSubmit={handleSumbmit} className="card card-body">
    
    <img
      src="https://media.licdn.com/dms/image/C4D0BAQFbzC2bchZfcA/company-logo_200_200/0/1649842028149?e=2147483647&v=beta&t=SQYmNho_nfub-Ly1fT9EIkVGGYmvNKMzFk-ecOJJUhs"
      alt="SUSCRIPCION WORKFAST"
      className="img-fluid"
      height="50px"
      width="400px"
    />
    <h3 className="text-center"> PRECIO: 7.80$</h3>

    <div className="form-group">
      <CardElement className="form-control"/>
    </div>
    <button className="btn btn-success" disabled={!stripe}> 
      {loading ? (
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        "COMPRAR SUSCRIPCION"
      )}
    </button>
  </form>
}

export default () => {
  return <ThemeProvider theme={theme}>
    <Header></Header>
    <Grid container justify="center">
      <Grid item xs={10}>
      <Elements stripe={stripePromise}>
        <div className="container p-4">
          <div className="row">
            <div className=".col-md-3.offset-md-3">
              <CheckoutForm/>
            </div>
          </div>
        </div>
      </Elements>
      </Grid>
    </Grid>
  </ThemeProvider>
};
