let end = '30 August 2024';
let setter = document.querySelector('#end-date').innerHTML = end

function clock() {
    let date = new Date(end);
    let curr = new Date();
    let minus = Math.abs(date - curr); // Correct subtraction to get time remaining

    let days = Math.floor(minus / 1000 / 60 / 60 / 24); // Convert milliseconds to days
    let hr = Math.floor((minus / 1000 / 60 / 60) % 24); // Convert milliseconds to hours
    let min = Math.floor((minus / 1000 / 60) % 60); // Convert milliseconds to minutes
    let sec = Math.floor((minus / 1000) % 60); // Convert milliseconds to seconds

    document.querySelectorAll('input')[0].value = days;
    document.querySelectorAll('input')[1].value = hr;
    document.querySelectorAll('input')[2].value = min;
    document.querySelectorAll('input')[3].value = sec;
}

clock();
setInterval(clock, 1000); // Call clock() every second