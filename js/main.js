var textWrapper = document.querySelector(".home-text .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".home-text .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1000,
  })
  .add({
    targets: ".home-text .line",
    translateX: [
      0,
      document.querySelector(".home-text .letters").getBoundingClientRect()
        .width + 10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".home-text .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".home-text",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

(() => {
  const aboutsection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");
  tabsContainer.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("tab-item") &&
      !e.target.classList.contains("active")
    ) {
      const target = e.target.getAttribute("data-target");
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      e.target.classList.add("active", "outer-shadow");

      aboutsection.querySelector(".tab-content.act").classList.remove("act");
      aboutsection.querySelector(target).classList.add("act");
    }
  });
})();

(() => {
  const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next");
  activeSlide = sliderContainer.querySelector(".testi-item.active");
  let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(
    activeSlide
  );

  slides.forEach((slide) => {
    slide.style.width = slideWidth + "px";
  });
  sliderContainer.style.width = slideWidth * slides.length + "px";
  nextBtn.addEventListener("click", () => {
    if (slideIndex === slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    slider();
  });

  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = slides.length - 1;
    } else {
      slideIndex--;
    }
    slider();
  });

  function slider() {
    sliderContainer
      .querySelector(".testi-item.active")
      .classList.remove("active");
    slides[slideIndex].classList.add("active");
    sliderContainer.style.marginLeft = -(slideWidth * slideIndex) + "px";
  }
})();


function sendEmail() {
  // Email details
  var toEmail = 'tikasah84@gmail.com';
  var subject = 'Job Inquiry';

  // Create the mailto link
  var mailtoLink = 'mailto:' + toEmail + '?subject=' + encodeURIComponent(subject);

  // Open default email client
  window.location.href = mailtoLink;
}