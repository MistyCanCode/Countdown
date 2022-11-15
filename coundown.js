// Now in the javascript file, we get each box and assign it to variables. Next, we set the date to which we want to count down to. The format for setting this date is – Date(year, month, day, hour, minute). Here please note that the month is counted from 0 to 11. We calculate endTime using getTime()/

// The function countdown consists of the todayDate variable that stores the current date. Using this we calculate the todayTime variable.


// Next, we have to find if the endDate has already passed. For this reason, we calculate a remaining time variable that is the difference between endTime and todayTime. If todayTime is greater than the endTime, it means that the countdown has expired. We clear the interval in this case.

// If not, we calculate the remaining days, hours, minutes and seconds using the formula as shown in the code below. This function is called every second using the setInterval function.

// Now we format the numbers. If it is a single-digit number we add a ‘zero’ in front of it using the addZeroes function.

let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let dateBox = document.getElementById("event");
dateBox.addEventListener('input', countdown)



function countdown(e) {
    // console.log(e.target.value);
    //Format: Date(year, month, day, hour, minute) - Year is counter from 0 to 11
    let endDate = dateBox.value;
    // console.log(endDate)
    //Output value in milliseconds
    let endTime = new Date(endDate).getTime();
    // console.log(endTime)
    let todayDate = new Date();//Output value in milliseconds
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;//60sec => 1000 milliseconds
    let oneHr = 60 * oneMin;//1hr => 60 minutes
    let oneDay = 24 * oneHr;//1 day => 24 hours
    //Function to format number if it is single digit
    let addZeroes = (num) => (num < 10 ? `0${num}` : num);
    //If end dat is before today date
    if (endTime < todayTime) {
        clearInterval(i);
        document.querySelector(
            ".countdown"
        ).innerHTML = `<h1>Countdown has expired!</h1>`;
    }
    //If end date is not before today date
    else {
        //Calculating remaining days, hrs,mins ,secs
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
        //Displaying Valurs
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}
let i = setInterval(countdown, 1000);
// countdown();