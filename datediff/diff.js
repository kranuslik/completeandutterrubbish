const startDateField = document.getElementById('input-startdate');
const endDateField = document.getElementById('input-enddate');
const dateDiffField = document.getElementById('output-datediff');
const form = document.getElementById('datediff');

function calcDateDiff(startDate, endDate) {
  
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((endDate - startDate) / oneDay));
  
  return diffDays;
}

form.addEventListener('input', () => {
  const startDate = Date.parse(startDateField.value);
  const endDate = Date.parse(endDateField.value);
  var dateDiff;  

  if (!isNaN(startDate) && !isNaN(endDate)){
    dateDiff = calcDateDiff(startDate, endDate);
  }  else {
    dateDiff = "";
  }

    
  dateDiffField.value = dateDiff;
});