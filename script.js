
let cvBtn=document.getElementById('cvbtn');
let submit=document.getElementById('submit');
let bar=document.getElementById('bar');
let scrollBtn=document.getElementById('move-up-btn');

cvBtn.addEventListener("click", function(){
    alert('Succefully Download CV')
})

submit.addEventListener("click", function(){
   let email=document.getElementById('email');
   let password=document.getElementById('password');

   if (email.value== "" && password.value == ""){
      alert('Fill Details')
   }else{
    alert('Logged In')
   }
})


let ul=document.querySelector('ul')
bar.addEventListener("click", function(){
    ul.classList.toggle('showData')

    if(ul.className == "showData" ){
        bar.className="fa-solid fa-xmark"
    } else{
          bar.className="fa-solid fa-bars"
    }
})

// auto-type-js-here
var scriptElement = document.createElement('script');
// Set the src attribute to the CDN URL of the DOM library
scriptElement.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';

// Append the script element to the head or body of the HTML document
document.head.appendChild(scriptElement);
// or
// document.body.appendChild(scriptElement);

// Example: Using the customElements polyfill
scriptElement.onload = function () {
    // Your code using the DOM library goes here
    const typed=new Typed(".auto-type",{
            strings:['Web Designer','Graphic Designer'],
            typeSpeed:150,
            backSpeed:150,
            loop:true,
      })
};



window.addEventListener('load', () => {
    AOS.init({
        duration: 800,
        easing: 'fade-up',
        once: true,
        mirror: false
    })
});


//scroll-btn-js
window.addEventListener('scroll', function () {
   if(window.pageYOffset > 500){
    scrollBtn.style.display ="block";
   }
    else{
           scrollBtn.style.display="none";
          }
});
scrollBtn.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})