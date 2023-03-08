import React from "react";
import theme from "./theme/theme";
import { Box, Grid, ThemeProvider } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "bootswatch/dist/lux/bootstrap.min.css";

const stripePromise = loadStripe("pk_live_51MgxzvBi92DupNzGNwsQTZLDM4iHgQFASw8HTFF0g2hNEXlZyhf3QPRPdM9ZCDtClGXhiblQtU95vH099GIwXWKb00JiCSfIT2")

const CheckoutForm = () =>{

  const stripe = useStripe();
  const elements = useElements();
  
  const handleSumbmit = async(e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  }

  return <form onSubmit={handleSumbmit} className="card">
    <CardElement/>
    <button>
      COMPRAR SUSCRIPCION
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

          </div>
        </div>
      </Elements>
      </Grid>
    </Grid>
  </ThemeProvider>
};
