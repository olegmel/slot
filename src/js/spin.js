$(document).ready(function() {
    var bet = 100;

    function updateGamecode(win, currentValue) {
        var result = {};

        result.currentValue = currentValue;

        console.log(win);

        if(win == 0) {
            result.currentValue -= bet;
        } else {
            result.currentValue += win*10;
            result.currentValue -= bet;
        }

        return result;
    }

    $('.btn-spin').click(function() {
        if(+$('[name="currentValue"]').val() <= 100) {
            alert('Not enough money');
            return false;
        }

        $.get('/algo', function(data) {
            console.log(data);
            $('.result-numbers').html('');
            $('.result-stats').html('');

            data = JSON.parse(data);

            $('.win-str').html("You win: " + data.winSum/10 + " $");

            data.numbers.forEach(function(el) {
                $('.result-numbers').append("<h3>" + el + "</h3>");
            });

            data.wins.forEach(function(el) {
                el.winStr = el.winStr === '' ? 'u win nothing:(' : el.winStr;
                $('.result-stats').append("<h3>" + el.winStr + "</h3>");
            });

            var updates = updateGamecode(data.winSum, +$('[name="currentValue"]').val());
            console.log(updates);

            $.post('/algo', updates, function(data) {
                console.log('success' + data);
            })
        });
    });
});