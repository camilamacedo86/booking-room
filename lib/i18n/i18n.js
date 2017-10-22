if (Meteor.isClient) {
    Meteor.startup(function () {
        TAPi18n.setLanguage('pt-BR')
            .done(function () {
                Session.set("showLoadingIndicator", false);
            })
            .fail(function (error_message) {
                console.log(error_message);
            });
    });
}