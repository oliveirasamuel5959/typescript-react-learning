import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { Header } from '../components/Header';
import './TrackingPage.css';

export function TrackingPage({ cart }) {

  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
      // console.log("Data: ", response.data);
    }

    fetchOrderData();

  }, [orderId]);

  if (!order) {
    return null;
  }

  const productDetails = order.products.find(
    products => products.productId === productId
  );

  console.log(productDetails);  

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/png" href="tracking-favicon.png" />
      {/* <Header cart={cart}/> */}
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>
          <div className="delivery-date">
            Arriving on {dayjs(productDetails.estimatedDeliveryTimeMs).format('MMMM D')}
          </div>

          <div className="product-info">
            {productDetails.product.name}
          </div>

          <div className="product-info">
            Quantity: {productDetails.quantity}
          </div>

          <img className="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

          <div className="progress-labels-container">
            <div className="progress-label">
              Preparing
            </div>
            <div className="progress-label current-status">
              Shipped
            </div>
            <div className="progress-label">
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}