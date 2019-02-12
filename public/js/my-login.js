var validator = $('#myLogin').validate({
    rules: {
        name: {
            required: true,
            minlength: 3,
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 2
        },

    },
    messages: {
        name: {
            required: 'Please enter Name.',
            minlength: 'Name is too short , please enter minimum {0} characters .',

        },
        email: {
            required: 'Please enter email.',
            email: 'Please enter true email.'
        },
        password: {
            required: 'Please enter password',
            minlength: 'Password is too short , please enter minimum {0} characters .'
        },


    }
});
