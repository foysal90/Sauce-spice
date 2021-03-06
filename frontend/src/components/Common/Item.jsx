import React from "react";
import { useDispatch } from "react-redux";

import { addCart, increaseCart, decreaseCart } from "../../reducks/carts/operations";
import Icon from "../../assets/img/icon.svg";

const Item = ({ item, selected_count, setShowWriteReview, setShowReviews }) => {
  const dispatch = useDispatch();
  const clickAddCart = () => {
    dispatch(addCart(item));
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(item));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(item));
  };
  return (
    <>
      <img src={item.image} class="item-image" alt="" />
      <div class="info">
        <div class="name">{item.name}</div>
        <div class="name-bottom">
          {/* <img src={ImgIconHeart} class="icon-heart" alt="" /> */}
          {/* <div class="count">({item.total_like_count})</div> */}
          {/* <button class="link-button" onClick={() => setShowReviews(true)}>
            Check Reviews
          </button>
          <button class="link-button" onClick={() => setShowWriteReview(true)}>
            Write Reviews
          </button> */}
        </div>
        <div class="info-bottom">
          <div class="price">${item.price}</div>
          {selected_count == 0 ? (
            <div class="add" onClick={clickAddCart}>
              Add +
            </div>
          ) : (
            <div class="number">
              <span class="minus" onClick={clickMinusCart}>
                －
              </span>
              <span class="count">{selected_count}</span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Item;
