const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
window.addEventListener("scroll", e => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});

(function () {
  var square = document.querySelector('.square');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(square);
})();



(function () {
  var square = document.querySelector('.square-one');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(square);
})();


(function () {
  var square = document.querySelector('.square-two');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(square);
})();


(function () {
  var square = document.querySelector('.square-three');
  

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square-fo');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(square);
})();







