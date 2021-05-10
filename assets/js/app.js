//BOTTOM BUTTON TO SHOW INDEX
/*function myButton() {
    var x = document.getElementById("click-btns");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
*/

// window.addEventListener('mouseup', function(event){
//   const burger = document.querySelector('#burger');
//   const nav = document.querySelector('.nav-links');
//   var box = document.getElementById('burger');
//   if(event.target != box && event.target.parentNode != box){
//     nav.classList.toggle('nav-active')
//   }
// });

//MOBILE NAVBAR
const navSlide = () => {
  const burger = document.querySelector('#burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.navbar-list .dropdown-item')

  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active')

    // BURGER ANIMATION
    burger.classList.toggle('toggle')
  });
}
navSlide();

// TRACKER MESSAGE
const trackerMessage = () => {
  const tracker = document.querySelector('#tracker-button');
  const error = document.querySelector('.modal-message');
  const emptyError= document.querySelector('.modal-empty-message');
  tracker.addEventListener('click', () =>{
    emptyError.classList.toggle('modal-empty-active')
     });

}
trackerMessage();


// FILTER BAR FOR BRANCHES
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

