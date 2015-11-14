Meteor.startup(function() {
    if (Meteor.users.find().count() < 1) {
        //Accounts.createUser("tzivia", "tzivia.b.halperin@gmail.com", "schmoopy");
    }
})