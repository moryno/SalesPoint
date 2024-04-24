import { ORDER_ROUTE } from '_constants';
import { orderService } from '_services';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

 const Success = () => {
    const { search } = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(search);
    const payment_intent = params.get("payment_intent");
  
    useEffect(() => {
      const makeRequest = async () => {
        try {
          await orderService.updateOrders({ payment_intent });
          setTimeout(() => {
            navigate(ORDER_ROUTE);
          }, 5000);
        } catch (err) {
          console.log(err);
        }
      };
  
      makeRequest();
    }, [navigate, payment_intent]);
  
    return (
      <div>
        Payment successful. You are being redirected to the orders page. Please do
        not close the page
      </div>
    );
  };

  export default Success
