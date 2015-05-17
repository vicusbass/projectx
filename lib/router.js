Router.configure({
    layoutTemplate: 'layout'
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
    template: 'admincontent'
});

Router.route('AdminClients', {
    path: '/admin/clients',
    template: 'AdminClients'
});

Router.route('AdminUsers', {
    path: '/admin/users',
    template: 'AdminUsers',
    waitOn: function() {
        return Meteor.subscribe('AdminUsers');
    },
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

Router.onAfterAction(function()
{
    setTimeout(function()
    {
        $('.splash').css('display', 'none')
    })
});