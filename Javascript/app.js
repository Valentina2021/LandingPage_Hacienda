
/*Carousel section plus responsive side, only one image will be displayed and drag option is enabled*/
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel-list'), {
		 // Mobile-first defaults
        slidesToShow: 1,
		slidesToScroll: 1,
        itemWidth: 150,
        draggable: true,
		arrows: {
			prev: '.carousel-prev',
			next: '.carousel-next'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
		]
	});
});

/*Burger menu action to display as a list all the options from the menu*/
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('links')[0];

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
});
