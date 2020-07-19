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
    //calculating the day of the week
    CC = parseInt(document.getElementById("century").value);
    YY = parseInt(document.getElementById("year").value);
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    // variable to calucalte day of the week having the initial doW 
    var doW = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;