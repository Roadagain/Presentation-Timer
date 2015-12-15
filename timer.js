function count(current, maximum){
    if (current > maximum){
        return;
    }

    var timer = document.getElementById('timer');
    timer.innerText = current / 60 + ':' + current % 60;

    window.setTimeout(count, 1000, current + 1, maximum);
}

window.onload = function(){
    document.getElementById('start').click = function(){
        count(0, 60);
    };
};
