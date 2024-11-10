$(document).ready(() => {
  // Toggle menu
  $(".nav-toggle").on("click", function () {
    $(".nav-menu").toggleClass("slide");
    const isExpanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", !isExpanded);
  });

  // Debounce for resize event
  let resizeTimeout;
  $(window).resize(() => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if ($(window).innerWidth() > 700 && $(".nav-menu").hasClass("slide")) {
        $(".nav-menu").removeClass("slide");
      }
    }, 200);
  });

  // Smooth scrolling function
  function smoothScroll(target) {
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top
      },
      1400
    );
  }

  // Smooth scroll on anchor link click
  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    smoothScroll($(this).attr("href"));
  });

  // Smooth scroll on page load with hash
  if ($(window.location.hash).length > 1) {
    smoothScroll(window.location.hash);
  }

  // Close menu on scroll
  $(window).scroll(() => {
    if (window.pageYOffset >= 600) {
      $(".nav-menu").removeClass("slide");
    }
  });

  // Filter works
  const lis = [...document.querySelectorAll(".works-list__content li")];
  const btns = [...document.querySelectorAll(".works-list__options li")];
  btns.forEach(btn => {
    btn.addEventListener("click", e => {
      const btnKey = e.target.dataset.key;
      lis.forEach(li => {
        li.style.display = (btnKey === "all" || li.dataset.key === btnKey) ? "block" : "none";
      });
    });
  });
});

