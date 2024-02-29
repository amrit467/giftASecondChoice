
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const drawer = document.getElementById('drawer');
    const toggleDrawerBtn = document.getElementById('toggleDrawerBtn');
    const faqButtons = document.querySelectorAll('.faq-out-container');
    const faqDivs = document.querySelectorAll('.faq-toggle-div');
    const faqAsides = document.querySelectorAll('.faq-aside');

    adjustFooterPosition();
  
    window.addEventListener("resize", function () {
      adjustFooterPosition();
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { 
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });

    document.addEventListener('click', function (event) {
        if (!drawer.contains(event.target) && drawer.classList.contains('open')) {
            drawer.classList.remove('open');
        }
    });

    toggleDrawerBtn.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from reaching the document
        drawer.classList.toggle('open');
    });

    faqButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            
            faqDivs.forEach(function (div, i) {
                if (i !== index) {
                    div.classList.remove('visible');
                }
            });

            faqDivs[index].classList.toggle('visible');

            if (faqDivs[index].classList.contains('visible')) {
                faqAsides[index].innerHTML = '&uarr;'; // Set the arrow to upward if the div is visible
            } else {
                faqAsides[index].innerHTML = '&darr;'; // Set the arrow to downward if the div is not visible
            }
        });
    });
    
});
  
  function adjustFooterPosition() {
    var wrapper = document.querySelector('.wrapper');
    var footer = document.querySelector('footer');
  
    var wrapperHeight = wrapper.offsetHeight;
    var windowHeight = window.innerHeight;
  
    if (wrapperHeight < windowHeight) {
      var footerHeight = footer.offsetHeight;
      wrapper.style.minHeight = (windowHeight - footerHeight) + 'px';
    } else {
      wrapper.style.minHeight = 'auto';
    }
  }
  













