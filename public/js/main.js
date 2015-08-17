(function () {

    $('#toc').toc({
        'listType' : '<ul class>',
        'selectors': 'h1,h2,h3', //elements to use as headings
        'container': '#content', //element to find all selectors in
        'smoothScrolling': true, //enable or disable smooth scrolling on click
        'prefix': 'toc', //prefix for anchor tags and class names
        'highlightOnScroll': true, //add class to heading that is currently in focus
        'highlightOffset': 100, //offset to trigger the next headline
    });

})();
