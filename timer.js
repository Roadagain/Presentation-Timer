function formatTime(num){
    var minute = '0' + String(Math.floor(num / 60));
    var second = '0' + String(num % 60);

    return minute.substr(-2) + ':' + second.substr(-2);
}

function resetTimer(){
    var timer = $('#timer');
    timer.text('00:00');
    timer.css('color', 'lime');
}

function count(current, maximum){
    var timer = $('#timer');
    timer.text(formatTime(current));

    var timeoutId = window.setTimeout(count, 1000, current + 1, maximum);
    $('#stop').click('click', function(){
        window.clearTimeout(timeoutId);
    });
    $('#reset').click(function(){
        window.clearTimeout(timeoutId);
        resetTimer();
    })
    if (current === maximum){
        timer.css('color', 'red');
        document.getElementById('finished').play();
    }
    if (current === maximum - 60){
        document.getElementById('finished').play();
    }
}

function extendFontSize(){
    var height = $(window).height();
    var width = $(window).width();
    $('#timer').css('font-size', (Math.min(width / 3 | 0, height)) + 'px');
}

$(function(){
    extendFontSize();
    $(window).resize(extendFontSize);
    $('#start').click(function(){
        resetTimer();
        var minute = Math.floor($('#minute').val());
        var second = Math.floor($('#second').val());
        count(0, minute * 60 + second);
    });
});
