Meteor.startup(function() {
});

Template.layout.events({
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
    }
});