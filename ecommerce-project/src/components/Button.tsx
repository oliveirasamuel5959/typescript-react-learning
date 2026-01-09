export function Button() {

  function handleSubmit() {
    console.log("button working")
  }

  return (
    <>
      <button onClick={handleSubmit} className="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </>
  );
}