import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductDetail({ cartItems, setCartItems }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/product/" + id)
      .then((response) => response.json())
      .then((json) => setProduct(json.product));
  }, []);

  function AddToCart() {
    const itemExist = cartItems.find((item) => item.product._id == product._id);
    if (!itemExist) {
      const newItem = { product, qty };
      setCartItems((state) => [...state, newItem]);
      toast.success("item added to cart successfully!");
    }
  }
  function increaseQty() {
    if (product.stock == qty) {
      return;
    }
    setQty((state) => {
      return state + 1;
    });
  }
  function decreaseQty() {
    if (qty > 1) {
      setQty((state) => {
        return state - 1;
      });
    }
  }

  return (
    product && (
      <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
          <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img
              className="img-fluid"
              src={product.images[0].image}
              alt={product.name}
              height="500"
              width="500"
            />
          </div>

          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">{product._id}</p>

            <hr />

            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: (product.ratings / 5) * 100 }}
              ></div>
            </div>

            <hr />

            <p id="product_price">${product.price}</p>
            <div className="stockCounter d-inline">
              <span className="btn btn-danger minus" onClick={decreaseQty}>
                -
              </span>

              <input
                type="number"
                className="form-control count d-inline"
                value={qty}
                readOnly
              />

              <span className="btn btn-primary plus" onClick={increaseQty}>
                +
              </span>
            </div>
            <button
              onClick={AddToCart}
              disabled={product.stock == 0}
              type="button"
              id="cart_btn"
              className="btn btn-primary d-inline ml-4"
            >
              Add to Cart
            </button>

            <hr />

            <p>
              Status:{" "}
              <span
                id="stock_status"
                className={product.stock == 0 ? "text-danger" : "text-success"}
              >
                {product.stock == 0 ? "out of stock" : "In stock"}
              </span>
            </p>

            <hr />

            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
            <hr />
            <p id="product_seller mb-3">
              Sold by: <strong>{product.seller}</strong>
            </p>

            <div className="rating w-50"></div>
          </div>
        </div>
      </div>
    )
  );
}
