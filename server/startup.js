Meteor.startup(function() {

    if ( Meteor.users.find().count() === 0 ) {
        Accounts.createUser({
            username: 'tzivia',
            email: 'tzivia.b.halperin@gmail.com',
            password: 'schmoopy',
            profile: {
                first_name: 'Tzivia',
                last_name: 'Halperin',
            }
        });
    }
})