
var validator = $('#loginForm').validate({
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
            minlength: 5
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
$(document).ready(function () {
    $('#registerForm').validate({
        rules: {
            userName: {
                required: true,
                minlength: 3,
            },
            phone: {
                required: true,
                maxlength: 10,
                minlength: 10,
                number: true
            },
            avatar: {
                required: true,

            },
            address: {
                required: true,
                minlength: 2,

            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 2,
            },
            // 'confirm-password':{
            //     equalTo: '[name = "password"]'
            // },
            birthday: {
                required: true,
            },
        },
        messages: {
            userName: {
                required: 'Please enter Name.',
                minlength: 'Name is too short , please enter minimum {0} characters .',
            },
            email: {
                required: 'Please enter email.',
                email: 'Please enter true email.'
            },
            password: {
                required: 'Please enter password.',
                minlength: 'Password is too short , please enter minimum {0} characters .',
            },
            // 'confirm-password': {
            //     equalTo: 'password không giống nhau.'
            // },
            phone: {
                required: 'Please enter phone number.',
                maxlength: 'Please enter true {0} nummber',
                minlength: 'Please enter true {0} nummber',
                number: 'Please enter true phone nummber.'
            },
            avatar: {
                required: 'PLease enter avatar.',

            },
            address: {
                required: 'Please enter address.',
                minlength: 'Please enter true {0} characters ',
            },
            birthday: {
                required: 'Please enter birthday'
            },
        }
    });
});