var hours = 19;
var minutes = 59;
var seconds = 50;
var str = "";

var prvyTerminCounter = 52;
var druhyTerminCounter = 22;
var tretiTerminCounter = 52;

var isRegistered = false;
var isAppended = true;

function imitatorOfDate(){
    if(localStorage.getItem("thirdLevel") === "thirdLevelDone"){
            if(isAppended){
                $('#thirdLevelDone').append("<a href=\"http://www.stud.fit.vutbr.cz/~xorsak02/ITU/src/frontend/html/main.html\" >\n" +
                    "            <button  class=\"btn btn-success pulse\">\n" +
                    "        Dalej\n" +
                    "        </button>\n" +
                    "        </a>");
            }
        isAppended = false;
    }

    if(seconds === 60){
        seconds = 0;
        seconds = "0" + seconds;
        minutes++;
        // ak sekundy a minuty budu 60
        if(minutes === 60){
            minutes = 0;
            minutes = "0" + minutes;
            hours++;
        }
    }
    if(seconds > 0 && seconds < 10){
        seconds = "0" + seconds;
    }

    str = hours + ":" + minutes + ":" + seconds;
    // ak bude mensi ako 19:59:59 tak sa bude ukazovat registrovat
    if(hours < 20 && minutes < 60 && seconds < 60){
        var registracie = document.getElementsByClassName("registracia"), i, length;
        for (i = 0, len = registracie.length; i < len; i++) {
            registracie[i].innerHTML = "nelze registrovat";
        }
    }
    else {
        if(isRegistered){
            var prvyTermin = document.getElementById("prvyTermin");
            var druhyTermin = document.getElementById("druhyTermin");
            var tretiTermin = document.getElementById("tretiTermin");

            var prvyTerminRegistracia = document.getElementById("registracia1");
            var druhyTerminRegistracia = document.getElementById("registracia2");
            var tretiTerminRegistracia = document.getElementById("registracia3");

            if ((druhyTerminCounter < 52 || tretiTerminCounter < 52)){
                druhyTermin.innerHTML = druhyTerminCounter;
                tretiTermin.innerHTML = tretiTerminCounter;
                druhyTerminCounter = druhyTerminCounter + 15;
                // tretiTerminCounter = tretiTerminCounter + 21;
            }
            if(tretiTerminCounter == 52){
                tretiTerminRegistracia.innerHTML = "nelze(kapacita)";
            }

            // prvy termin hned obsadeny
            prvyTermin.innerHTML = prvyTerminCounter;
            druhyTermin.innerHTML = druhyTerminCounter;
            tretiTermin.innerHTML = tretiTerminCounter;
        }
        else{
            var registracie = document.getElementsByClassName("registracia"), i, length;
            for (i = 0, len = registracie.length; i < len; i++) {
                registracie[i].innerHTML = "registrovat";
            }
            var prvyTermin = document.getElementById("prvyTermin");
            var druhyTermin = document.getElementById("druhyTermin");
            var tretiTermin = document.getElementById("tretiTermin");

            var prvyTerminRegistracia = document.getElementById("registracia1");
            var druhyTerminRegistracia = document.getElementById("registracia2");
            var tretiTerminRegistracia = document.getElementById("registracia3");

            if ((druhyTerminCounter < 52 || tretiTerminCounter < 52)){
                druhyTermin.innerHTML = druhyTerminCounter;
                tretiTermin.innerHTML = tretiTerminCounter;
                druhyTerminCounter = druhyTerminCounter + 15;
                // tretiTerminCounter = tretiTerminCounter + 21;
            }
            // prvy termin hned obsadeny
            prvyTermin.innerHTML = prvyTerminCounter;
            druhyTermin.innerHTML = druhyTerminCounter;
            tretiTermin.innerHTML = tretiTerminCounter;

            if(prvyTerminCounter == 52){
                registracie[0].innerHTML = "nelze(kapacita)";
            }
            if(druhyTerminCounter == 52){
                registracie[1].innerHTML = "nelze(kapacita)";
            }
            if(tretiTerminCounter == 52){
                registracie[2].innerHTML = "nelze(kapacita)";
            }
        }
    }

    document.getElementById("todaysDate").innerHTML = str;
    console.log(str);
    seconds++;
}

function reg2(){
    console.log(prvyTerminCounter);
    if(druhyTerminCounter == 52 || druhyTerminCounter == 22){
        var druhyTerminRegistracia = document.getElementById("registracia2");
        druhyTerminRegistracia.innerHTML = "nelze registrovat";
    }
    else{
        var druhyTerminRegistracia = document.getElementById("registracia2");
        druhyTerminRegistracia.innerHTML = "prihlaseny";
        isRegistered = true;
        localStorage.setItem("thirdLevel", "thirdLevelDone");
    }

}

setInterval(imitatorOfDate, 1000);
