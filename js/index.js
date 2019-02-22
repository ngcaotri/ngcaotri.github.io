$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<button class='paginate left'><i></i><i></i></button>",
    "<button class='paginate right'><i></i><i></i></button>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 3
    },
    720: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
})