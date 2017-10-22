Template.bar.helpers({
    nomeFormatado:function() {
        return Meteor.user().profile.name.replace(/ /g,"-");
    }
});