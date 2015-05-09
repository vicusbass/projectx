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
        } else throw new Meteor.Error(403, "Not authorized to create new users");
    }
});