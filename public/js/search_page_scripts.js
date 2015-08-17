/*jshint -W117 */
$(document).ready(function() {

	$("body").css("display", "none");
    $("body").fadeIn(2000);

	function redirectPage() {
        window.location = linkLocation;
    }

	$("a.fade").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
});
