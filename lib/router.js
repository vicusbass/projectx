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

Router.route('AdminClients', {
    path: '/admin/clients',
    yieldTemplates: {
        'adminmenu': {
            to: 'menu'
        },
        'header': {
            to: 'header'
        },
        'AdminClients': {
            to: 'content'
        }
    }
});

//route for Users management superadmin
Router.route('/admin/users', function() {
    //wait until users are loaded
    this.render('adminmenu', {
        to: 'menu'
    });
    this.render('header', {
        to: 'header'
    });
    this.render('adminusers', {
        to: 'content'
    });
    this.wait(Meteor.subscribe('AdminUsers'));
});

Router.route('/(.*)', function() {
    this.redirect('login');
});

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
