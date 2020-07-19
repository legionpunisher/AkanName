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
    //to show the selected gender whether ,male or female
    //the variable is useful when using it on the if condition
    gender = document.querySelector('input[name="gender"]:checked').value;
    if (gender === "male" && doW === 1) {
        alert("Your AkanName is" + maleAkanName[0] + "and you were born on a" + day[0]);
    } else if (doW === 2) {
        alert("Your AkanName is" + maleAkanName[1] + "and you were born on a" + day[1]);
    } else if (doW === 3) {
        alert("Your AkanName is" + maleAkanName[2] + "and you were born on a" + day[2]);
    } else if (doW === 4) {
        alert("Your AkanName is" + maleAkanName[3] + "and you were born on a" + day[3]);
    } else if (doW === 5) {
        alert("Your AkanName is" + maleAkanName[4] + "and you were born on a" + day[4]);
    } else if (doW === 6) {
        alert("Your AkanName is" + maleAkanName[5] + "and you were born on a" + day[5]);
    } else if (doW === 7) {
        alert("Your AkanName is" + maleAkanName[6] + "and you were born on a" + day[6]);
    } else {
        if (doW === 1) {
            alert("Your AkanName is" + femaleAkanName[0] + "and you were born on a" + day[0]);
        } else if (doW === 2) {
            alert("Your AkanName is" + femaleAkanName[1] + "and you were born on a" + day[1]);

        } else if (doW === 3) {
            alert("Your AkanName is" + maleAkanName[2] + "and you were born on a" + day[2]);

        } else if (doW === 4) {
            alert("Your AkanName is" + femaleAkanName[3] + "and you were born on a" + day[3]);
        } else if (doW === 5) {
            alert("Your AkanName is" + femaleAkanName[4] + "and you were born on a" + day[4]);

        } else if (doW === 6) {
            alert("Your AkanName is" + femaleAkanName[5] + "and you were born on a" + day[5]);

        } else if (doW === 7) {
            alert("Your AkanName is" + femaleAkanName[6] + "and you were born on a" + day[6]);
        }
    }
}