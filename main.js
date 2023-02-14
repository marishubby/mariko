$(document).ready(function () {

    $('#close').click(function() {
        $('#overlay').addClass('hidden').removeClass('show');
        $('#barrier').addClass('hidden');
        $('#content').empty();
    });

    var cards = [$('#cake'), $('#present'), $('#kith'), $('#kiss'), $('#ass'), $('#duck')];
    for (let i = 0; i < cards.length; i++) {
        cards[i].click(function () {
            if (cards[i].children().length > 0) return;
            $('#overlay').addClass('show').removeClass('hidden');
            $('#barrier').removeClass('hidden');
            $('#content').load(`./contents/${cards[i][0].id}.html`);
            cards[(i+1) % cards.length].empty();
        });
    }

});
