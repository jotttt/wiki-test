$(document).ready(function () {
	//INIT TOC
    $('#toc').toc({
    'selectors': 'h1,h2,h3', //elements to use as headings
    'container': 'body', //element to find all selectors in
    'smoothScrolling': true, //enable or disable smooth scrolling on click
    'prefix': 'toc', //prefix for anchor tags and class names
    'onHighlight': function(el) {}, //called when a new section is highlighted
    'highlightOnScroll': true, //add class to heading that is currently in focus
    'highlightOffset': 100, //offset to trigger the next headline
});

	$(window).load(function(){
            $("#wrapper").mCustomScrollbar({
				theme: "minimal-dark"
			});
			$("#sidebar").mCustomScrollbar({
				theme: "minimal"
			});
        });

});
