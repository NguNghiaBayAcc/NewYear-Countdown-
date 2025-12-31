let day = document.getElementById('day-box');
let hr = document.getElementById('hr-box');
let min = document.getElementById('min-box');
let sec = document.getElementById('sec-box');
let endDate = new Date('January 1, 2026 00:00:00');
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = num => (num < 10 ? `0${num}` : num);

    if (endTime < todayTime) {
        clearInterval(i);
        document.querySelector('.countdown').
        innerHTML = `<h1>Countdown Has Expired</h1>`;
    }
    else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor(((remainingTime % oneDay) % oneHr) / oneMin);
        let secsLeft = Math.floor((((remainingTime % oneDay) % oneHr) % oneMin) / 1000);
   
        day.textContent = addZeroes(daysLeft);
        hr.textContent = addZeroes(hrsLeft);
        min.textContent = addZeroes(minsLeft);
        sec.textContent = addZeroes(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown()
