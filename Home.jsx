import React from 'react';

const Home = () => {
  return (
    <div class="horizontal-scroll">
    <button class="btn-scroll" id="btn-scroll-left" onclick="scrollHorizontally(1)"><i class="fas fa-chevron-left"></i></button>
    <button class="btn-scroll" id="btn-scroll-right"  onclick="scrollHorizontally(-1)"><i class="fas fa-chevron-right"></i></button>
    <div class="storys-container">
        <div class="story-circle">
            <div class="colorb1">
                <div class="wordsb1">
                    <h1>01</h1>                   
                        <img src="yy.jpg" class="rounded float-left" alt="..."></img>
                        <font size="-1" > <h4>
                        Adidas Yeezy 700
                        </h4>
                        <p>R3,750</p>
                        <i class="fa fa-plus" aria-hidden="true" ></i>
                        </font>                                              
                        </div>
                </div>          
            </div>
            <div class="story-circle">
                <div class="colorb2">
                    <div class="wordsb1"> 
                        <h1>02</h1>                
                            <img src="yeye.jpg" class="rounded float-right" alt="..."></img> 
                            <font size="-1" > <h4>
                            Adidas Yeezy 500
                            </h4>
                            <p>R3,400</p>
                            </font>                                          
                    </div>
                </div>          
        </div>
       
    </div>
</div>
  )
}

 let currentScrollPosition = 0;
               let scrollAmount = 400;
               const  sCont = document.querySelector(".storys-container");
               const hScroll = document.querySelector(".horizontal-scroll");
               const btnScrollLeft = document.querySelector("#btn-scroll-left");
               const btnScrollRight = document.querySelector("#btn-scroll-right");
               btnScrollLeft.style.opacity = "0";
              
               let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;
                function scrollHorizontally(val){
                    currentScrollPosition += (val * scrollAmount);
                    sCont.style.left = currentScrollPosition + "px";
                    if(currentScrollPosition >= 0){
                         currentScrollPosition = 0
                         btnScrollLeft.style.opacity = "1";
                    }
                    else{
                      btnScrollLeft.style.opacity = "1";
                    }
                    if(currentScrollPosition <= maxScroll){
                        currentScrollPosition = maxScroll;
                        btnScrollRight.style.opacity = "1";
   
                    }
                    else{
                      btnScrollRight.style.opacity = "1";
                    }
                    sCont.style.left=currentScrollPosition + "px"; 
                }     

export default  Home;