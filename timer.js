function formatTime(num){
    var minute = '0' + String(Math.floor(num / 60));
    var second = '0' + String(num % 60);

    return minute.substr(-2) + ':' + second.substr(-2);
}

function count(current, maximum){
    if (current > maximum){
        return;
    }

    var timer = document.getElementById('timer');
    timer.innerText = formatTime(current);

    var timeoutId = window.setTimeout(count, 1000, current + 1, maximum);
    document.getElementById('stop').addEventListener('click', function(){
        window.clearTimeout(timeoutId);
    });
    if (current === maximum){
        timer.style.color = 'red';
    }
}

function resetTimer(){
    var timer = document.getElementById('timer');
    timer.innerText = '00:00';
    timer.style.color = 'lime';
}

window.onload = function(){
    document.getElementById('start').addEventListener('click', function(){
        count(0, 60);
    });
    document.getElementById('reset').addEventListener('click', function(){
        resetTimer();
    })
};
