function formatTime(num){
    var minute = '0' + String(Math.floor(num / 60));
    var second = '0' + String(num % 60);

    return minute.substr(-2) + ':' + second.substr(-2);
}

function count(current, maximum){
    if (current > maximum){
        return;
    }

    var timer = $('#timer');
    timer.innerText = formatTime(current);

    var timeoutId = window.setTimeout(count, 1000, current + 1, maximum);
    $('#stop').addEventListener('click', function(){
        window.clearTimeout(timeoutId);
    });
    if (current === maximum){
        timer.style.color = 'red';
    }
}

function resetTimer(){
    var timer = $('#timer');
    timer.innerText = '00:00';
    timer.style.color = 'lime';
}

$(function(){
    $('#start').addEventListener('click', function(){
        resetTimer();
        var minute = Math.floor($('#minute').value);
        var second = Math.floor($('#second').value);
        count(0, minute * 60 + second);
    });
    $('#reset').addEventListener('click', function(){
        resetTimer();
    })
});
