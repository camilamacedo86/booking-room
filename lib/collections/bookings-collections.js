bookings = new Mongo.Collection("bookings");

Meteor.methods({
    bookingInsert: function(newbooking){
        var booking = _.extend(newbooking,{
            createdAt: new Date(),
            userId: Meteor.userId(),
            ownerName: Meteor.user().profile.name
        });

        var bookingId = bookings.insert(booking);

        return {
            _id: bookingId
        }
    },
    bookingRemove: function(bookingId){
        bookings.remove(bookingId);
    },
    hasBooking: function(date){
        return bookings.findOne({'date':date});
    }

});