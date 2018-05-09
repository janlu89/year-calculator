function AgeCounter() {
    
    
//  console.log(document.getElementById("year").value);
    
    
    var birthDate = new Date(document.getElementById("year").value);
    var currentdate = new Date(document.getElementById("today").value);

    
//    console.log(currentdate.getFullYear());
//    console.log(birthDate.getFullYear());
    
//    var today= Date.parse("May, 09, 2018");
//    var year;
//    var mm
//    
//    year = Date.parse(document.getElementById("year").value);
//    
//    mm = (today - year);
//    
//    var seconds = mm / 1000;
//    var minutes = seconds / 60;
//    var hours = minutes / 60; 
//    var days = hours / 24;
//    var age = days / 365;
    
    if (birthDate>currentdate){
        document.getElementById("age").innerHTML = "ERROR!!! YOU DIDNT BORN YET";
    }else {
    document.getElementById("age").innerHTML = ("You are " + (currentdate.getFullYear() - birthDate.getFullYear()) + " years old");
    }
    
}

