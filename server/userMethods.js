  Meteor.methods({
    updateUser: function(targetUserId, fn, ln) {
      check(targetUserId, String);
      check(fn, String);
      check(ln, String);
      console.log(fn);
      if (Roles.userIsInRole(Meteor.user(), [SUPERADMIN])) {
        Users.update({
          _id: targetUserId
        }, {
          $set: {
            'profile.firstname': fn,
            'profile.lastname': ln
          }
        })
      } else throw new Meteor.Error(403, "Not authorized to create new users");
    }
  });