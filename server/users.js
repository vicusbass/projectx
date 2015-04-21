Meteor.startup(function () {
  console.log("Just started the server");
  if (Meteor.users.find({}).count()===0){
    Accounts.createUser({
                            username: "vasile.pop@gmail.com",
                            email : "vasile.pop@gmail.com",
                            password : "vodafone",
                            profile  : {
                                name: "Vasile Pop"
                            },
                            roles:['superadmin']
    });  
  }
});