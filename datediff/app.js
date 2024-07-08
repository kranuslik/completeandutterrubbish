const inputStart    = document.getElementById('input-startdate');
const inputEnd      = document.getElementById('input-enddate');
const dateDiffField = document.getElementById('output-datediff');

const locale = 
{
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'dd/MM/yyyy',
    timeFormat: 'HH:mm',
    firstDay: 0
};
//initiate datepickers

const datepickerStart = new AirDatepicker(inputStart, 
    {selectedDates:[new Date()], 
    locale: locale,
    autoClose: true,
    onSelect: changeDates}
    );
const datepickerEnd = new AirDatepicker(inputEnd, 
    {locale: locale,
    autoClose: true,
    onSelect: changeDates}
    );

function changeDates(){
    var dateDiff; 

    if (!isNaN(datepickerStart.selectedDates[0]) && !isNaN(datepickerEnd.selectedDates[0])){
    dateDiff = calcDateDiff(datepickerStart.selectedDates[0], datepickerEnd.selectedDates[0]);
    }  
    else {dateDiff = "";}
    
    dateDiffField.value = dateDiff;
}    

function calcDateDiff(startDate, endDate) {

    const oneDay = 86400000;
    const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));
  
    return diffDays;
  }
 