Meteor.methods({
    updateUser: function(targetUserId, usr) {
        check(targetUserId, String);
        check(usr, {
            profile: {
                firstname: String,
                lastname: String
            }
        });
        if (Roles.userIsInRole(Meteor.user(), [SUPERADMIN])) {
            Users.update({
                _id: targetUserId
            }, {
                $set: {
                    'profile.firstname': usr.profile.firstname,
                    'profile.lastname': usr.profile.lastname
                }
            })
        } else {
          toastr.error("Not authorized");
          throw new Meteor.Error(403, "Not authorized to update users");
        }
    }
});

Meteor.users.deny({
  update: function() {
    return true;
  }
});