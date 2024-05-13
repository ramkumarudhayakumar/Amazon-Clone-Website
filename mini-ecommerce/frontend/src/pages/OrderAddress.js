import { useState } from "react";
import { toast } from "react-toastify";
import { Fragment } from "react";

export default function OrderAddress({ cartItems, setCartItems }) {
  const [order, setOrder] = useState(false);
  const [address, setAddress] = useState({
    number: 91,
    state: "Tamilnadu",
  });
  function placeItem(e) {
    e.preventDefault();
    if (
      address.fname &&
      address.lname &&
      address.number &&
      address.state &&
      address.district &&
      address.street &&
      address.pincode !== 0
    ) {
      fetch(process.env.REACT_APP_API_URL + "/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems),
      }).then(
        () => setCartItems([]),
        setOrder(true),
        toast.success("Order Complete!"),
        console.log(address)
      );
    } else {
      toast.error("Please enter your address!");
    }
  }
  function updateDetails(e) {
    const name = e.target.name;
    const value = e.target.value;

    setAddress((state) => {
      return { ...state, [name]: value };
    });
  }
  return !order ? (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-body fw-bold px-4">
                <h1 id="products_heading">Enter your Address Here</h1>

                <form onSubmit={placeItem} className="d-flex flex-column ">
                  <label>Enter Your First Name:</label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="fname"
                    placeholder="Enter Your First Name"
                    onChange={updateDetails}
                  />

                  <label>Enter Your Last Name:</label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="lname"
                    placeholder="Enter Your Last Name"
                    onChange={updateDetails}
                  />

                  <label>Enter Your PhoneNumber:</label>
                  <input
                    className="form-control mb-3"
                    type="number"
                    name="number"
                    value={address.number}
                    placeholder="Enter Your Number"
                    onChange={updateDetails}
                  />

                  <label>Enter Your State:</label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="state"
                    value={address.state}
                    placeholder="Enter Your State"
                    onChange={updateDetails}
                  />

                  <label>Enter Your District:</label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="district"
                    placeholder="Enter Your District"
                    onChange={updateDetails}
                  />

                  <label>Enter Your Street:</label>
                  <input
                    className="form-control mb-3"
                    type="text"
                    name="street"
                    placeholder="Enter Your Street"
                    onChange={updateDetails}
                  />

                  <label>Enter Your Pincode:</label>
                  <input
                    className="form-control mb-3"
                    type="number"
                    name="pincode"
                    placeholder="Enter Your Pincode"
                    onChange={updateDetails}
                  />

                  <button id="checkout_btn" className="btn btn-primary mb-3">
                    Submit Your Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <h2 className="mt-5">Order Complete</h2>
      <p>The Order had been placed Successfully !</p>
    </Fragment>
  );
}
