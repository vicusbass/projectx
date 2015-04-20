Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'login'});
Router.route('/dashboard', {name: 'dashboard'});

Router.onBeforeAction(function () {
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