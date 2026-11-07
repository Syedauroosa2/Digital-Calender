
function updateClock() {
    let now = new Date();
    document.getElementById('time').textContent = now.toLocaleTimeString();
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('full-date').textContent = now.toLocaleDateString(undefined, dateOptions);
} 

setInterval(updateClock, 1000);
updateClock(); 

function renderCalendar() {
    let now = new Date();
    let currentMonth = now.getMonth(); 
    let currentYear = now.getFullYear();   
    let todayDate = now.getDate();       

    let monthNames = ["January", "February", "March", "April", "May", "June", 
                      "July", "August", "September", "October", "November", "December"];
    
    document.getElementById('month-year').textContent = monthNames[currentMonth] + " " + currentYear;

    
    let daysContainer = document.getElementById('calendar-days');
    
    let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (currentMonth === 1 && currentYear % 4 === 0) {
        daysInMonths[1] = 29;
    }

    
    let firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

    
    for (let space = 0; space < firstDayOfWeek; space++) {
        let emptyBox = document.createElement('div');
        daysContainer.appendChild(emptyBox);
    }

    let totalDays = daysInMonths[currentMonth];
    
    for (let day = 1; day <= totalDays; day++) {
        let dayBox = document.createElement('div');
        dayBox.textContent = day; 
        
        if (day === todayDate) {
            dayBox.classList.add('today');
        }
        
        daysContainer.appendChild(dayBox);
    }
}

renderCalendar();