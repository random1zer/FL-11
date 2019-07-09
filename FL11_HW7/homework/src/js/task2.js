let ready = confirm('Do you want to play a game?');
let attempts = 3;
let curr_attempt = 3;
let zero = 0;
let tp = 8;
let norm_tp = 8;
let plus_range = 4;
let coeff = 2;
let curr_coeff = 2;

let prize = 0;
let norm_prize = 100;
let curr_prize = 100;


if (!ready) {
  alert('You did not become a billionaire, but can.');
}

while (ready) {

    let num_rand = Math.floor(Math.random() * (tp + 1 - zero) + zero);

    for (let i = 0; i < attempts; i++) {

        let user_number = parseFloat(prompt('Choose a roulette pocket number from ' + zero + ' to ' + tp 

        + '\nAttempts left: ' + curr_attempt 

        + '\nTotal prize: ' + prize 

        + '$ \nPossible prize on current attempt: ' + curr_prize + '$'));

        if (user_number === num_rand) {

            prize += curr_prize;

            conf = confirm('Congratulation, you won!   Your prize is: ' + prize + '$. Do you want to continue?');

            if (conf) {

                tp += plus_range;

                curr_prize = norm_prize * curr_coeff;

                curr_attempt = attempts;

                curr_coeff *= coeff;

            } else {

                curr_attempt = 0;

            }

            break;

        }

        curr_prize = curr_prize / coeff;

        curr_attempt--;

    }

    if (curr_attempt === 0) {

        alert('Thank you for your participation. Your prize is: ' + prize + '$');

        curr_coeff = coeff;

        curr_attempt = attempts;

        prize = 0;

        curr_prize = norm_prize;

        tp = norm_top;

        conf = confirm('Do you want to play again?');

    }

}

