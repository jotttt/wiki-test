$(document).ready(function () {
	//INIT TOC
    $('#toc').toc({
    'smoothScrolling': false, //enable or disable smooth scrolling on click
    'prefix': 'toc', //prefix for anchor tags and class names
    'onHighlight': function(el) {}, //called when a new section is highlighted
    'highlightOnScroll': true, //add class to heading that is currently in focus
    'highlightOffset': 1, //offset to trigger the next headline
});
	//INIT SCROLLBAR FOR MENU
	$(window).load(function(){

			$("#sidebar").mCustomScrollbar({
				theme: "minimal"
			});
        });

	//MOBILE NAVBAR
	var viewportWidth = $(window).width();
	if (viewportWidth <= 768){
		//$("#sidebar").addClass("slidx_menu");
	}

});
