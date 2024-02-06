import React from "react";
import "./CartSection.css";
import "../product-page/Product.css";

// function CartSection() {
//   return (
//     <div className="cartSection">
//       <h2 className="cartTitle">My Cart</h2>

//       <div className="cartCard">
//         <div className="imgProduct">
//           <img src="./assets/babies-category.jpeg" alt="" />
//         </div>

//         <div className="productCartDetails">
//           <p className="prodCartTitle">Product Name</p>
//           <div className="quantity">
//             <button className="quantityBtn">-</button>
//             <span className="prodCount">1</span>
//             <button className="quantityBtn">+</button>
//           </div>
//           <p className="prodCartPrice">12,432</p>
//         </div>
//       </div>
//     </div>
//   );
// }

function CartSection() {
  return (
    <div className="cartSection">
      <h2 className="cartTitle">My Cart</h2>
      <div className="cartContainer">
        <div className="cartItem">
          <div className="productImage">
            <img src="./assets/babies-category.jpeg" alt="Product" />
          </div>
          <div className="productDetails">
            <p className="productName">Product Name</p>
            <div className="quantityControl">
              <button className="quantityBtn">-</button>
              <span className="quantity">1</span>
              <button className="quantityBtn">+</button>
            </div>
            <p className="productPrice">$12,432</p>
          </div>
        </div>
        <hr />

        <div className="subtotal">
          <p className="subtotalText">Subtotal:</p>
          <p className="subtotalAmount">$12,432</p>
        </div>
        <div className="deleteBtnSection">
          <button className="deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
// <button className="checkoutBtn">Proceed to Checkout</button>;
