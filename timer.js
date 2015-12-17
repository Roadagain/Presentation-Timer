function formatTime(num){
    var minute = '0' + String(Math.floor(num / 60));
    var second = '0' + String(num % 60);

    return minute.substr(-2) + ':' + second.substr(-2);
}

function count(current, maximum){
    var timer = $('#timer');
    timer.text(formatTime(current));

    var timeoutId = window.setTimeout(count, 1000, current + 1, maximum);
    $('#stop').click('click', function(){
        window.clearTimeout(timeoutId);
    });
    if (current === maximum){
        timer.css('color', 'red');
    }
}

function resetTimer(){
    var timer = $('#timer');
    timer.text('00:00');
    timer.css('color', 'lime');
}

$(function(){
    $('#start').click(function(){
        resetTimer();
        var minute = Math.floor($('#minute').val());
        var second = Math.floor($('#second').val());
        count(0, minute * 60 + second);
    });
    $('#reset').click(function(){
        resetTimer();
    })
});
