$(document).ready(function() {

    // wywołanie zaloguj
    $('.zaloguj__wywolanie').click(function () {
        $('.zaloguj').toggle(500);
        $('.zaloguj__background').toggle(500);

    });
    // zamkniecie zaloguj
    $('.zaloguj__close').click(function () {
        $('.zaloguj').toggle(500);
        $('.zaloguj__background').toggle(500);


    });
});



// ZALOGUJ PO GOOGLE PLUS

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    debugger;
    window.location = 'http://test.app.monuments.jfdd.infoshareaca.nazwa.pl';
};









