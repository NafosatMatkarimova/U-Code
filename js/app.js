"use strict";
const contact = document.querySelector(".contact"),
numbers = document.querySelectorAll(".contact-numbers");
// console.log(numbers);


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
        console.log("hiii");
        window.removeEventListener("scroll", scroll);
    }
})
 
