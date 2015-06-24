$(document).ready(function() {
    $('.btn-spin').click(function() {
        $.get('/algo', function(data) {
            console.log(data);
            $('.result-numbers').html('');
            $('.result-stats').html('');

            data = JSON.parse(data);

            $('.win-str').html("You win: " + data.winSum + " credits");

            data.numbers.forEach(function(el) {
                $('.result-numbers').append("<h3>" + el + "</h3>");
            });

            data.wins.forEach(function(el) {
                el.winStr = el.winStr === '' ? 'u win nothing:(' : el.winStr;
                $('.result-stats').append("<h3>" + el.winStr + "</h3>");
            });
        });
    });
});