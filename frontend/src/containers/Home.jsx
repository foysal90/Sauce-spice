import React, {  useState, useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux";
import BackgroundImg from "../assets/img/background.png";
import Icon from "../assets/img/icon.svg";
import Img1 from "../assets/img/chicken-burger.jpeg";
import Img2 from "../assets/img/CW.jpeg";
import Img3 from "../assets/img/jalfrezi.webp";
import Img4 from "../assets/img/tenders.jpeg";
import Img5 from "../assets/img/beef-bhuna.jpeg";



const Home = () => {
    const [sendMenuCount, setSendMenuCount] = useState(-1);
    const [counter, setCounter] = useState(0)
    const handleIncrement = () => {
        setCounter(counter +1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }









 

  return (

    <section>
   

       <section class="main-visual">
        {<img src={BackgroundImg}/>}
        <div class="text-area">
            <span>Menu</span>
            <div class="title">Sauce n spice</div>
           
        </div>
        </section>

        <section class="content">

        <h2>How to order?</h2>
        <p>Thank you for loading Sauce n Spice Menu by QR <br/>
            Now, you can select your items below and show your order to our waiter.</p>

            <div class="title-search">
                <h2>Select your order</h2>
                <div class="search-box">
                    <img src={Icon} />
                    <input type="text" />
                </div>
            </div>

            <ul>
                <li>
                    <img src={Img1} />
                    <div class="right-area">
                        <div class="title">chicken burger</div>
                        <div class="price-add">
                            <div class="price">$15.99</div>
                           
                            <div>
                            <button onClick={handleIncrement}>Add +</button> 
                            <button>{counter}</button>

                            <button onClick={handleDecrement} disabled={counter===0 ? true : false}> - </button>
                          </div>
                            
                        </div>
                    </div>
                </li>

                <li>
                    <img src={Img2} />
                    <div class="right-area">
                        <div class="title">chicken wing</div>
                        <div class="price-add">
                            <div class="price">$19.99</div>
                           
                            <div>
                                <button onClick={handleIncrement}> + </button>
                                <button>{counter}</button>


                                <button onClick={handleDecrement} disabled={counter===0 ? true : false}> - </button>
                               </div>
                                
                            
                        </div>
                    </div>
                </li>

                <li>
                    <img src={Img3} />
                    <div class="right-area">
                        <div class="title">chicken jalfrezi</div>
                        <div class="price-add">
                            <div class="price">$19.99</div>
                            
                            <div>
                                <button onClick={handleIncrement}> + </button>
                                <button>{counter}</button>
                                <button onClick={handleDecrement} disabled={counter===0 ? true : false}> - </button>
                               </div>
                                
                            
                        </div>
                    </div>
                </li>

                <li>
                    <img src={Img4}/>
                    <div class="right-area">
                        <div class="title">chicken tenders</div>
                        <div class="price-add">
                            <div class="price">$15.99</div>
                            
                            <div>
                                <button onClick={handleIncrement}> + </button>
                                <button>{counter}</button>
                                <button onClick={handleDecrement} disabled={counter===0 ? true : false}> - </button>
                               </div>
                                
                            
                        </div>
                    </div>
                </li>

                <li>
                    <img src={Img5} />
                    <div class="right-area">
                        <div class="title">beef bhuna</div>
                        <div class="price-add">
                            <div class="price">$21.99</div>
                           
                            <div>
                                <button onClick={handleIncrement}> + </button>
                                <button>{counter}</button>
                                <button onClick={handleDecrement} disabled={counter===0 ? true : false}> - </button>
                               </div>
                                
                            
                        </div>
                    </div>
                </li>



               </ul>



        </section>


        <footer>
        <div class="subtotal">
            subtotal:<span class="price">$770</span>

        </div>
        <button>
            <a href="../container/Complete.js" target="_black">Check Selected items</a>
        </button>
    </footer>

      

        </section>

       
  );
   
};

export default Home;
