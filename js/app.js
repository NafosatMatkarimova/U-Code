"use strict";
const contact = document.querySelector(".contact"),
numbers = document.querySelectorAll(".contact-numbers");



window.addEventListener("scroll" , function scroll(){
    if (this.scrollY > contact.offsetTop - contact.clientHeight ){
        for(let i = 0; i < numbers.length; i++){
            let count = +numbers[i].getAttribute("count");
            function rec(j = 0){
                numbers[i].innerHTML = j;
                j++;
                if (j <= count){
                    setTimeout(() =>{
                        rec(j);
                    } , 30);
                }
            }
            rec();
        } 
        window.removeEventListener("scroll", scroll);
    }
})
 
 window,addEventListener("DOMContentLoaded",()=>{
    const loader = document.querySelector(".loader");
    console.log(loader);

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    },1000);
})





    // const headerBanner = document.querySelector(".header-banner");
    // const wrapper = document.querySelectorAll(".boxes");
    // window.addEventListener("scroll", () => {
    //     if(window.scrollX > headerBanner.offsetTop - headerBanner.clientHeight /2){
    //        boxes.forEach((item) => {
    //         item.style = `transform: translate (0);
    //         opacity: 1;
    //         z-index: 1;`
    //        });
    //     }
    // });


 
