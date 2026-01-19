import axios from 'axios';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { calculateDeliveryProgress } from '../utils/calculation';
import { getStatus } from '../utils/styleHelpers';
import './TrackingPage.css';

export function TrackingPage() {

  const { orderId, productId } = useParams();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrders(response.data);
      // console.log("Data: ", response.data);
    } 

    fetchOrderData();
  }, [orderId]);

  if (!orders) {
    return null;
  }

  const productDetails = orders.products.find(
    p => p.productId === productId
  );

  console.log(productDetails);

  const progressPercent = calculateDeliveryProgress(
    productDetails.product.createdAt,
    productDetails.estimatedDeliveryTimeMs
  );

  const currentStatus = getStatus(progressPercent);

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

          <img className="product-image" src={productDetails.product.image} />

          <div className="progress-labels-container">
            <div className={`progress-label ${currentStatus === 'Preparing' ? 'current-status' : ''}`}>
              Preparing
            </div>
            <div className={`progress-label ${currentStatus === 'Shipped' ? 'current-status' : ''}`}>
              Shipped
            </div>
            <div className={`progress-label ${currentStatus === 'Delivered' ? 'current-status' : ''}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}