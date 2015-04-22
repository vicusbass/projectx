Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'login'
});

//route for main admin page
Router.route('/admin', function() {
	this.layout('applayout');
	this.render('adminmenu', {
		to: 'menu'
	});
	this.render('header', {
		to: 'header'
	});
	this.render('admincontent', {
		to: 'content'
	});
});

//route for Clients management superadmin
Router.route('/admin/clients', function() {
	this.layout('applayout');
	this.render('adminmenu', {
		to: 'menu'
	});
	this.render('header', {
		to: 'header'
	});
	this.render('adminclients', {
		to: 'content'
	});
});

//route for Clients management superadmin
Router.route('/admin/users', function() {
	this.layout('applayout');
	this.render('adminmenu', {
		to: 'menu'
	});
	this.render('header', {
		to: 'header'
	});
	this.render('adminusers', {
		to: 'content'
	});
});


Router.onBeforeAction(function() {
	if (!Meteor.user() && !Meteor.loggingIn()) {
		this.redirect('/');
	} else {
		// required by Iron to process the route handler
		this.next();
	}
}, {
	except: ['login']
});

// Router.route('/(.*)', function () {
//     this.redirect('/catchallpage');
// });