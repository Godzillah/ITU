$(document).ready(function() {

    // na začiatku bude 1.quest dostupny (zeleny)
    $("#button1stQuest").addClass("btn btn-lg btn-green");

    if(localStorage.getItem("firstLevel") == "firstLevelDone"){
        console.log("Prejdeny 1.level");
        // ak sa splni prvy level otvori sa druhy
        $("#button2ndQuest").addClass("btn btn-lg btn-green");
        $("#button2ndQuest").removeAttr("disabled");
    }
    if(localStorage.getItem("secondLevel") == "secondLevelDone"){
        console.log("Prejdeny 2.level");
        // ak sa splni druhy level otvori sa druhy
        $("#button3rdQuest").addClass("btn btn-lg btn-green");
        $("#button3rdQuest").removeAttr("disabled");
    }
    if(localStorage.getItem("thirdLevel") == "thirdLevelDone"){
        console.log("Prejdeny 3.level");
        // ak sa splni prvy level otvori sa druhy
        $("#4").addClass("btn btn-lg btn-green");
        $("#4").removeAttr("disabled");
    }
});

function loadMap() {
    var loadingPosition = {lat: 49.2129874, lng: 16.593002};
    var vutFitPostion = {lat: 49.2266153, lng: 16.59666525};
    var vutFektPosition = {lat: 49.226813, lng: 16.575148};
    var purkynoveKolejePosition = {lat: 49.224132, lng: 16.58243};
    var podPalackymVrchemKolejePosition = {lat: 49.232584, lng: 16.570851};
    var hlavneNadraziPosition = {lat: 49.192742, lng: 16.6096532};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: loadingPosition,
        zoom: 14
    });

    var vutFIT = new google.maps.Marker({
        map: map,
        position: vutFitPostion,
        title: 'FIT',
        icon: 'http://www.stud.fit.vutbr.cz/~xorsak02/images/fitLogoSmall.png'
    });

    vutFIT.addListener('click', function () {
        // priblizenie na dany objekt
        if(!(localStorage.getItem("firstLevel") == "firstLevelDone")){
            $("#successLevel").append("<div class=\"alert alert-success\" role=\"alert\">\n" +
                "                Hura nasiel si FIT!\n" +
                "            </div>");
            window.setTimeout(function(){
                if((map.getZoom() != 19)){
                    $("#button1stQuest").addClass("btn btn-lg btn-green");
                    localStorage.setItem("firstLevel", "firstLevelDone");
                    location.replace("http://www.stud.fit.vutbr.cz/~xorsak02/ITU/src/frontend/html/staryFIT.html");
                }
            }, 2000);
        }
        else{
            if((map.getZoom() != 19)){
                $("#button1stQuest").addClass("btn btn-lg btn-green");
                localStorage.setItem("firstLevel", "firstLevelDone");
                location.replace("http://www.stud.fit.vutbr.cz/~xorsak02/ITU/src/frontend/html/staryFIT.html");
            }
        }
    });

    var vutFEKT = new google.maps.Marker({
        map: map,
        position: vutFektPosition,
        title: 'VUT FEKT SCHOOL!',
        icon: 'http://www.stud.fit.vutbr.cz/~xorsak02/images/fektLogoSmall.png'
    });

    var purkynoveKoleje = new google.maps.Marker({
        map: map,
        position: purkynoveKolejePosition,
        title: 'Purkynove koleje!',
        icon: 'http://www.stud.fit.vutbr.cz/~xorsak02/ITU/src/frontend/img/homeIcon.jpg'
    });

}


