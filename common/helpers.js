//creating programatically fullname from current user's profile
//USING dburles:collection-helpers package
Meteor.users.helpers({
  fullname: function() {
    return Meteor.user().profile.firstname + ' ' + Meteor.user().profile.lastname;
  }
});