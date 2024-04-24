import React, { useEffect, useMemo, useState } from "react";
import "./Pay.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { paymentService } from "_services";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await paymentService.createPayment(id);
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [id]);

  const appearance = useMemo(
    () => ({
      theme: "stripe",
    }),
    []
  );
  const options = useMemo(
    () => ({
      clientSecret,
      appearance,
    }),
    [appearance, clientSecret]
  );

  return (
    <div className="pay">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
