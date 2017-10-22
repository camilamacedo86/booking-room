Meteor.publish('allUsers',function(findOptions){
    return Meteor.users.find({}, findOptions);
});

Meteor.publish('singleUser',function(id){
    check(id, String);
    return Meteor.users.find(id);
});

checkProfile = function checkProfile(user) {
    if (user.profile == undefined) {
        user.profile = {};
        user.profile.active = true;
    }
}

ifEmail = function ifEmail(options, user) {
    if (options.email) {
        if (!user.profile.name) {
            user.profile.name = user.username;
        }
        if (!user.profile.email) {
            user.profile.email = options.email;
        }
    }
}

Accounts.onCreateUser(function(options, user){
    checkProfile(user);
    ifEmail(options, user);
    return user;
});
