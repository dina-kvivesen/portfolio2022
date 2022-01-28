// mobile-menu toggle:
   
function menuToggle() {
  var nav = document.getElementById('menu-overlay');
  nav.classList.toggle('active');
 
}
var icon = document.getElementById('toggleIcon');
icon.onclick = menuToggle;

// image carousel:

const images = document.querySelectorAll(".image-carousel img");
images.forEach(function(image){
    image.onclick = function(event){
document.querySelector(".selected-image").classList.remove("selected-image");
const clickParent = event.target.parentNode;
clickParent.classList.add("selected-image");
    }
})

// typing effect:

typing_effect(['a front-end web developer'],
            ['black']);

      function typing_effect(words, colors) {

      var cursor = document.getElementById('cursor'); //cursor
      var text = document.getElementById('text') //text

      var blink = true;
      var wait = false;
      var letters_count = 1;
      var temp = 1;

      text.style.color = colors[0]
      window.setInterval(function () { //wait between words when it starts writting
        if (letters_count === 0 && wait === false) {
          wait = true;

          text.innerHTML = '' // leave a blank
          window.setTimeout(function () {
            var usedColor = colors.splice(0, 1)[0] //remove first element and get it as str
            colors.push(usedColor);
            var usedWord = words.splice(0, 1)[0]
            words.push(usedWord);
            temp = 1;
            text.style.color = colors[0]
            letters_count += temp;
            wait = false;
          }, 1000)
        } else if (letters_count === words[0].length + 1 && wait === false) {
          wait = true;
          window.setTimeout(function () { //wait a bit until words finished and start deleting
            temp = -1;
            letters_count += temp;
            wait = false;
          }, 5000)
        } else if (wait === false) { //write words                    
          text.innerHTML = words[0].substr(0, letters_count)
          letters_count += temp;
        }
      }, 150)
      window.setInterval(function () {
        if (blink) {
          cursor.style.opacity = "0";
          blink = false;
        } else {
          cursor.style.opacity = "1";
          blink = true;
        }
      }, 400)
    }