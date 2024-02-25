import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import ProductCard from "../product-card/ProductCard";
import {
  useGetProductByIdQuery,
  useAddToCartMutation,
  useGetProductsQuery,
} from "../../api/ApiSlice";
import { addProdToCart } from "../../api/CartSlice";
import "../product-card/ProductCard.css";
import "./Product.css";

function Product() {
  const [qtyValue, setQtyValue] = useState(1);
  const [isProdInCart, setIsProdInCart] = useState(false);
  const [prodCategory, setProdCategory] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const prodIds = useSelector((state) => state.savedToCartReducer.prodIds);
  const {
    isSuccess,
    isLoading,
    isError,
    error,
    data: product,
  } = useGetProductByIdQuery(id);
  const { data: products } = useGetProductsQuery();
  const [similarProducts, setSimilarProducts] = useState([]);
  const [activeImg, setActiveImg] = useState(product?.images?.[0]);
  const [defaultDisplayImg, setDefaultDisplayImg] = useState(null);

  const [addToCartHandler] = useAddToCartMutation();

  // Increament cart value
  const increaseCartVal = () => {
    setQtyValue((qty) => qty + 1);
  };

  // Decreament cart value
  const decreamentCartVal = () => {
    setQtyValue((qty) => qty - 1);
  };

  useEffect(() => {
    if (qtyValue < 1) {
      setQtyValue(1);
    }
  }, [qtyValue]);

  const cartProductProps = async () => {
    try {
      await addToCartHandler({
        id: parseInt(id),
        qty: qtyValue,
      }).unwrap();
    } catch (err) {
      console.error(err.message);
    }
  };

  // The function to add the product to cart
  const addToCart = async (e) => {
    e.preventDefault();
    try {
      await cartProductProps();
      dispatch(addProdToCart(id));
      toast.success("Product added to cart");
    } catch (err) {
      console.error(err.message);
      toast.error("An error occured when adding product to cart.");
    }
  };

  const handleImgClick = (index) => {
    setActiveImg(index);
  };

  // Display other products from the same category
  const filterProducts = () => {
    if (product) {
      const filteredProducts = products?.filter(
        (prod) => prod.category === product?.category && prod.pid !== product.pid
      );
      // Slice, create a shallow copy of the array, removes items based ont starting and ending index.
      
      setSimilarProducts(filteredProducts);
    }
  };


  useEffect(() => {
    // Checks if product is already added to cart
    setIsProdInCart(prodIds?.includes(id));

    const displayImage = product?.images?.[0];
    setDefaultDisplayImg(displayImage);
    filterProducts();
  }, [product, prodIds]);

  useEffect(() => {
    filterProducts();
  }, [product]);

  return (
    <>
      <Navbar />
      <div className="productDetailsParent">
        {/* Loading spinner */}
        {isLoading ? <p>Loading...</p> : null}
        {isError ? <p>{error.message}</p> : null}

        {/* Product Images */}
        <div className="prodImgParent">
          <div className="mainImg">
            <img
              src={activeImg ? product?.images[activeImg] : defaultDisplayImg}
              alt="Product"
              width="auto"
              height="auto"
              className="prodImg"
            />
          </div>
          <div className="moreImages">
            {product?.images?.map((image, index) => (
              <img
                src={image}
                alt="Product"
                width="60px"
                height="60px"
                key={index}
                onClick={() => handleImgClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <section className="prodDetails">
          <p className="prodStock">
            <span className="stock">In Stock</span>
            {product?.stock}
          </p>
          <h1 className="prodName">{product?.prod_name}</h1>
          <p className="prodBrand">
            <span className="bold">Brand : </span> {product?.brand}
          </p>
          <p className="category">
            <span className="bold">Category :</span> {product?.category}
          </p>

          <p className="prodPrice">Price : {product?.price}</p>
          <p className="prodDescription">{product?.prod_desc}</p>
          {/* Add to cart section */}

          <div className="addToCartSection">
            {isProdInCart ? (
              <button disabled className="disabledBtn">
                <MdOutlineShoppingCart />
                Product added to cart
              </button>
            ) : (
              <>
                <div className="quantity">
                  <button className="quantityBtn" onClick={decreamentCartVal}>
                    -
                  </button>
                  <span disabled={isProdInCart} className="prodCount">
                    {qtyValue}
                  </span>
                  <button className="quantityBtn" onClick={increaseCartVal}>
                    +
                  </button>
                </div>
                <div className="addToCartBtnSection">
                  <button
                    type="submit"
                    onClick={addToCart}
                    className="addToCartBtn"
                  >
                    <MdOutlineShoppingCart /> Add to Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      {/* Other reccommende products */}
      {/* Slice, returns a shallow copy of an obj array with the start and end index */}
      <h4 className="otherProdsTitle">YOU MIGHT ALSO LIKE</h4>

      <div className="productList">
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        {isSuccess && products?.length !== 0 ? (
          similarProducts?.slice(0, 6)?.map((product) => {
            return <ProductCard product={product} key={product.pId} />;
          })
        ) : (
          <p>Products not available at the moment</p>
        )}
      </div>
    </>
  );
}

export default Product;
