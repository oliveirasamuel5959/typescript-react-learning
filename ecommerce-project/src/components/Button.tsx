import axios from "axios";

export function Button({ product }) {

  function handleSubmit() {
    const postData = async () => {
      const response = await axios.post('/api/cart-items', {
        productId: product.id,
        quantity: 1
      });
    };

    postData();
  }

  return (
    <>
      <button className="add-to-cart-button button-primary"
        onClick={handleSubmit} 
      >
        Add to Cart
      </button>
    </>
  );
}