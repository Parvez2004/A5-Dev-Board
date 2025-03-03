const today = new Date();
const dateLong = {weekday:'short',year: 'numeric', month: 'long', day: 'numeric' };
const dateToday= today.toLocaleDateString('en-US',dateLong);
document.getElementById('date-today').innerText = dateToday;