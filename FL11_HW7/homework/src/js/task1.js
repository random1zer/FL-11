const email_min = 6;

const pass_min = 5;

const email = prompt('Enter your email: ');



if (email === '' || email === null) {

    alert('Canceled');

} else if (email.length < email_min) {

    alert('I don’t know any emails having name length less than 6 symbols');

} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {

    const password = prompt('Enter your password: ');

    if (password === '' || password === null) {

        alert('Canceled');

    } else if (email === 'user@gmail.com' && password === 'UserPass' 

        || email === 'admin@gmail.com' && password === 'AdminPass') {

        const conf = confirm('Do you want to change your password?');

        if (conf) {

            const old_password = prompt('Your old password: ');

            if (old_password === '' || old_password === null) {

                alert('Canceled');

            } else if (old_password === password) {

                const new_password1 = prompt('Enter new password: ');

                if (new_password1.length < pass_min) {

                    alert('It’s too short password. Sorry.');

                } else {

                    const new_password2 = prompt('Enter news password again: ');

                    if (new_password2 === new_password1) {

                        alert('You have successfully changed your password.');

                    } else {

                        alert('You wrote the wrong password');

                    }

                }

            } else {

                alert('Wrong password');

            }

        } else {

            alert('You have failed the change.');

        }

    } else {

        alert('Wrong password');

    }

} else {

    alert('I don’t know you');
}