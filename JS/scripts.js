function details() {
    //variables and arrays
    var femaleAkanName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleAkanName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
    var gender = document.getElementById("gender");
    var CC = document.getElementById("century");
    var YY = document.getElementById("year");
    var MM = document.getElementById("month");
    var DD = document.getElementById("date");
    //validating date and month of birth
    if (DD <= 0) {
        alert("invalid date");
    } else if (DD > 31) {
        alert("date is invalid");
    }
    if (MM <= 0) {
        alert("invalid month");
    } else if (MM > 12) {
        alert("no such month");
    }