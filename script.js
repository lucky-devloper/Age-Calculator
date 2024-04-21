

const submitbtn = document.getElementById("submit")
const Input = document.getElementById("age")
const displayresult = document.querySelector(".display")

submitbtn.addEventListener('click', ()=>{
    let DOB = new Date(Input.value);
    let Now = new Date()

    var years = Now.getFullYear() - DOB.getFullYear()
    var months = Now.getMonth() - DOB.getMonth()
    var days = Now.getDay() - DOB.getDay()


    if (months < 0 || (months === 0 && Now.getDate() < DOB.getDate())) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        var lastMonth = new Date(Now.getFullYear(), Now.getMonth() - 1, 0);
        days += lastMonth.getDate();
    }

    displayresult.innerHTML = `<h3 class="year">${years} Year</h3>
    <h3 class="month">${months} Month</h3>
    <h3 class="day">${days} Day</h3>`

})
