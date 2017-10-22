Template.bookings.events({
    'click #btnOrderByDate': function (e) {
        Pages.set({sort: {date: 1}});
    },
    'click #btnOrderByFlat': function (e) {
        Pages.set({sort: {flat: 1}});
    },
    'click #btnDelete': function (e) {
        Meteor.call('bookingRemove',this._id,function(error){
            if(!error){
                alert("Operação realizada com sucesso.");
            } else {
                alert("Oops, não foi possível realizar esta operação.");
            }
        });
    },
    'click #btnSaveNewbooking': function (e) {
        var dt = $('#date').val();
        var canSave = true;

        if ( !dt ){
            alert("Informe uma data!");
            canSave = false;
        } else if ( !$('#flat').val()){
            alert("Informe o número do apartamento!");
            canSave = false;
        }

        if ( canSave ) {
            Meteor.call('hasBooking',dt,function(error,res){
                if(!error){
                    if (res) {
                        alert("Você não pode reservar esta data pois ela já esta reservada.");
                    } else {
                        var newBooking = {
                            date : dt,
                            flat : $('#flat').val()
                        };
                        Meteor.call('bookingInsert',newBooking,function(error){
                            if(!error){
                                alert("Reserva cadastrada com sucesso!")
                            } else {
                                alert("Oops, erro ao reservar esta data!")
                            }
                        });
                    }
                } else {
                    alert("Oops, error ao verificar disponibilidade de datas!");
                }
            });
        }
    },
    'click #btnCancelNewbooking': function (e) {
        $('#date').val(null);
        $('#flat').val(null);

        var today = new Date();
        today.setDate(today.getDate());

        $('#datepicker').datepicker({
            format: "dd/mm/yyyy",
            todayHighlight: true,
            startDate: today
        });
    }
});


Template.bookings.rendered = function(){
    var today = new Date();
    today.setDate(today.getDate());

    $('#datepicker').datepicker({
        format: "dd/mm/yyyy",
        todayHighlight: true,
        startDate: today
    });
};

Template.bookingsItem.helpers({
    'isToShow':function(userId) {
        if ( userId == Meteor.userId()){
            return true;
        } else {
            return false;
        }
    }
});



