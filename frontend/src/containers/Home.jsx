// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Header from "../components/Common/Header";
// import Footer from "../components/Common/Footer";

// import Item from "../components/Common/Item";
// import { fetchItems } from "../reducks/items/operations";
// import { getItems } from "../reducks/items/selectors";
// import { getCarts, getSubtotal } from "../reducks/carts/selectors";
// import { fetchFromLocalStorage } from "../reducks/carts/operations";
// import ImgMainImage from "../assets/img/background.png";
// import queryString from "query-string";
// import Icon from "../assets/img/icon.svg";


// const Home = () => {
//   const parsed = queryString.parse(window.location.search);
//   const [showWriteReview, setShowWriteReview] = useState(false);
//   const [showReviews, setShowReviews] = useState(false);
//   const [showCartList, setShowCartList] = useState(false);
//   const dispatch = useDispatch();
//   const selector = useSelector((state) => state);
//   const items = getItems(selector);
//   const carts = getCarts(selector);
//   const subtotal = getSubtotal(selector);

//   useEffect(() => {
//     dispatch(fetchFromLocalStorage());
//     dispatch(fetchItems(parsed.category));
//   }, []);

//   const showItem = (item) => {
//     let selected_count = 0;
//     if (carts[item.id] && carts[item.id].selected_count) {
//       selected_count = carts[item.id].selected_count;
//     }

//     if (showCartList && carts[item.id] == undefined) {
//       // if the page is cart page and item is not slected, show nothing.
//       return;
//     }

//     return (
//       <li>
//         <Item key={item.id} item={item} selected_count={selected_count} setShowWriteReview={setShowWriteReview} setShowReviews={setShowReviews} />
//       </li>
//     );
//   };

//   return (
//     <div class="home">
//       <Header />

//       <section class="main-visual">
//         <img src={ImgMainImage} alt="" />
//         <div class="text-area">
//             <span>Menu</span>
//             <div class="title">Sauce n spice</div>


//        </div>

//       </section>
//       <section class="content">
//         {showCartList ? (
//           <>
//             <h1>Selected Items</h1>
//             <p>Please show this page to the waiter.</p>
//           </>
//         ) : (
//           <>
//             <h1>How to order?</h1>
//             <p>
//               Thank you for loading Sauce  Menu by QR code.
//               <br />
//               Now, you can select your items below and show your order to our waiter.
//             </p>


//              <div class="title-search">
//                 <h2>Select your order</h2>
//                 <div class="search-box">
//                     <img src={Icon} alt=""/>
//                     <input type="text" />
//                 </div>
//             </div> 
            
            
//           </>
//         )}
//         <ul class="items">{items && items.map((item) => showItem(item))}</ul>
//       </section>

//       <Footer price={subtotal} showCartList={showCartList} setShowCartList={setShowCartList} />

//       {/* {showWriteReview && <PopupWriteRevew setShowWriteReview={setShowWriteReview} />}
//       {showReviews && <PopupRevews setShowReviews={setShowReviews} />} */}
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { render } from 'react-dom';
import Item from "../components/Common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { getCarts, getSubtotal } from "../reducks/carts/selectors";
import { fetchFromLocalStorage } from "../reducks/carts/operations";
import ImgMainImage from "../assets/img/background.png";
import queryString from "query-string";
import Icon from "../assets/img/icon.svg";
import { push } from "connected-react-router";
const Home = () => {
  const parsed = queryString.parse(window.location.search);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showCartList, setShowCartList] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const items = getItems(selector);
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const setName="";
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
    dispatch(fetchItems(parsed.category));
  }, []);
  const dispatch1 = useDispatch();
  const [search, setSearch] = useState();
  const inputSearch = (event) => {
    setSearch(event.target.value);
  };
  const submitAction = () => {
    dispatch(push("/?search=" + search));
  };
  const showItem = (item) => {
    let selected_count = 0;
    if (carts[item.id] && carts[item.id].selected_count) {
      selected_count = carts[item.id].selected_count;
    }
    if (showCartList && carts[item.id] == undefined) {
      // if the page is cart page and item is not slected, show nothing.
      return;
    }
    return (
      <li>
        <Item key={item.id} item={item} selected_count={selected_count} setShowWriteReview={setShowWriteReview} setShowReviews={setShowReviews} />
      </li>
    );
  };
  return (
    <div class="home">
      <Header />
      <section class="main-visual">
        <img src={ImgMainImage} alt="" />
        <div class="text-area">
            <span>Menu</span>
            <div class="title">Sauce n spice</div>
       </div>
      </section>
      <section class="content">
        {showCartList ? (
          <>
            <h1>Selected Items</h1>
            <p>Please show this page to the waiter.</p>
          </>
        ) : (
          <>
            <h1>How to order?</h1>
            <p>
              Thank you for loading Sauce  Menu by QR code.
              <br />
              Now, you can select your items below and show your order to our waiter.
            </p>
            <div class="title-search">
                <h2>Select your order</h2>
                {/* <div class="search-box">
                    <img src={Icon} alt=""/>
                    <input type="text"
              onChange={inputName}  />
                </div> */}
                <form onSubmit={submitAction} class="searchbox">
      <input
        name="category"
        type="text"
        onChange={inputSearch}
      />
      <img  src={Icon} alt="" />
    </form>
            </div>
          </>
        )}
        <ul class="items">{items && items.map((item) => showItem(item))}</ul>
      </section>
      <Footer price={subtotal} showCartList={showCartList} setShowCartList={setShowCartList} />
      {/* {showWriteReview && <PopupWriteRevew setShowWriteReview={setShowWriteReview} />}
      {showReviews && <PopupRevews setShowReviews={setShowReviews} />} */}
    </div>
  );
};
export default Home;
// white_check_mark
// eyes
// raised_hands
























