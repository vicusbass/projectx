Meteor.startup(function() {
   // $('body').attr('class', 'fixed-navbar');
   // Handle minimalize sidebar menu
    // $('.hide-menu').click(function(event){
    //     event.preventDefault();
    //     alert("test");
    //     if ($(window).width() < 769) {
    //         $("body").toggleClass("show-sidebar");
    //     } else {
    //         $("body").toggleClass("hide-sidebar");
    //     }
    // });
});

Template.applayout.events({
	'click .logout': function (event) {
		event.preventDefault();
		Meteor.logout();
	}
});

