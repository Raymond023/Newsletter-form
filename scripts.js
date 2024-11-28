'use strict'

window.onload = function () {

    const myForm = $('form');
    const input = $('input[type="email"]');
    const submit = $('input[type="submit"]');
    const success = $('.success');
    const signUp = $('.sign-up');
    const dismissMessage = $('#dismiss');
    const invalidEmail = $('.error');
    var userEmail = document.getElementById('user-email');

    const validRegex = /\S+@\S+\.\S+/;


    myForm.on('submit', function(e) {
        
        e.preventDefault();

        const emailValue = input[0].value.trim();
        
        if (!emailValue.match(validRegex)){

            
            invalidEmail.css({'display': 'inline'});
            input.attr("class", "error-input");
            e.preventDefault();

        } else {

            submit.click(function () {
                userEmail.textContent = input[0].value
                signUp.css({'display': 'none'});
                success.css({'display': 'block'});
            });

            dismissMessage.click(function() {
                signUp.css({'display': 'block'});
                success.css({'display': 'none'});
                location.reload();
            });



        }

    });


}
