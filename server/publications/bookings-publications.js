Meteor.publish('bookings',function(){
    if ( Meteor.user() ){
        return bookings.findAll().fetch({ userId: Meteor.userId()});
    } else {
        return bookings.findAll().fetch({ userId: -1})
    }
});

