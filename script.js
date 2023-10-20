document.addEventListener('DOMContentLoaded', function() {
   const starsContainer = document.querySelector('.stars-container');
 
   for (let i = 0; i < 300; i++) { 
     const star = document.createElement('div');
     star.classList.add('star');
     star.style.top = `${Math.random() * 100}%`;
     star.style.left = `${Math.random() * 100}%`;
     const animationDuration = Math.random() * 3 + 1;
     star.style.animation = `twinkling ${animationDuration}s infinite ${Math.random() * animationDuration}s`;
     starsContainer.appendChild(star);
   }
 
   document.body.classList.add("loaded");
 
   document.querySelectorAll('a').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
       e.preventDefault();
 
       document.querySelector('body').style.opacity = 0;
 
       setTimeout(function() {
         window.location = anchor.href;
       }, 1000); // Adjust the delay as needed
     });
   });
 });
