// import React from "react";
// import IconUser from "../../assets/img/user-icon.jpg";
// import IconSmallMenu from "../../assets/img/icon-small-menu.svg";
// import { deleteFood } from "../../reducks/foods/operations";
// import { useState } from "react";
// import { useDispatch } from "react-redux";

// const Food = ({ food }) => {
//   const dispatch = useDispatch();
//   const [menuToggle, setMenuToggle] = useState(false);

//   return (
//     <li>
//       <img class="menu_icon" onClick={() => setMenuToggle(!menuToggle)} src={IconSmallMenu} />
//       {menuToggle && (
//         <div class="menu">
//           <span onClick={() => dispatch(deleteFood(food.id))}>Delete</span>
//         </div>
//       )}
//       <div class="logo">
//         <img src={IconUser} />
//       </div>
//       <div class="name_body">
//         <div class="name">{food.name}</div>
//         <div class="datetime">{food.created_at}</div>
//         <p>{food.body}</p>
//         {food.image && (
//           <a href={food.image} target="_blank">
//             <img class="food-image" src={food.image} />
//           </a>
//         )}
//       </div>
//     </li>
//   );
// };

// export default Food;
