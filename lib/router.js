Router.configure({
	layoutTemplate: 'applayout'
});

Router.route('/', function() {
	this.redirect('/login');
});

Router.route('/login', function() {
	this.layout('cleanlayout');
	this.render('login');
});

//route for main admin page
Router.route('/admin', function() {
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

//route for Users management superadmin
Router.route('/admin/users', function() {
	//wait until users are loaded
	this.wait(Meteor.subscribe('AdminUsers'));
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

//Edit one user - subscribe to SingleUser publication
// Router.route('/admin/users/:_id', function() {
// 	//wait until user is loaded
// 	this.wait(Meteor.subscribe('SingleUser'), this.params._id);
// 	this.render('adminmenu', {
// 		to: 'menu'
// 	});
// 	this.render('header', {
// 		to: 'header'
// 	});
// 	this.render('ModalEditClient', {
// 		to: 'content',
// 		data: function() {
// 			return Users.findOne({
// 				_id: this.params._id
// 			});
// 		}
// 	});
// });

Router.onBeforeAction(function() {
	if (!Meteor.user() && !Meteor.loggingIn()) {
		this.redirect('/login');
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