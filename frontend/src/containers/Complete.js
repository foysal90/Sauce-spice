import React, { useEffect } from 'react'
import BackgroundImg from "../assets/img/background.png";

import Img1 from "../assets/img/chicken-burger.jpeg";
import Img2 from "../assets/img/CW.jpeg";
import Img3 from "../assets/img/jalfrezi.webp";
import Img4 from "../assets/img/tenders.jpeg";
import Img5 from "../assets/img/beef-bhuna.jpeg";

export default function Complete() {
    return (
        <section>
            <section class="main-visual">
        <img src={BackgroundImg} />
        <div class="text-area">
            <span>Menu</span>
            <div class="title">Sauce n spice</div>
        </div>

    </section >

        <section class="content">
          <h2>Selected Items <br />
              Please show this page to the waiter</h2>

            <ul>
                <li>
                    <img src={Img1} />
                    <div class="right-area">
                        <div class="title">chicken burger</div>
                        <div class="price-add">
                            <div class="price">$15.99</div>
                            
                           <div>
                            <button>-</button>
                            <button>+</button>
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
                            <button>-</button>
                            <button>+</button>
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
                            <button>-</button>
                            <button>+</button>
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
                            <button>-</button>
                            <button>+</button>
                           </div>
                            
                        </div>
                    </div>
                </li>

                <li>
                    <img src={Img3} />
                    <div class="right-area">
                        <div class="title">chicken wings</div>
                        <div class="price-add">
                            <div class="price">$15.99</div>
                         
                           <div>
                            <button>-</button>
                            <button>+</button>
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
        <a href="home.html" target="_black">← Go back to Home</a>
    </footer>

        </section>
    )
}
