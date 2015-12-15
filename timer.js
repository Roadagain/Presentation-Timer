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

    window.setTimeout(count, 1000, current + 1, maximum);
}

window.onload = function(){
    document.getElementById('start').click = function(){
        count(0, 60);
    };
};
