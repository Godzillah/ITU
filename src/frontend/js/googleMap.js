$(document).ready(function() {
    $('#button1stQuest').addClass("btn btn-lg btn-red");
    if(localStorage.getItem("step1") == "2"){
        $("#button1stQuest").addClass("btn btn-lg btn-green");
        console.log("soommm tu");
    } else{
        $("#button1stQuest").addClass("btn btn-lg btn-red");
        console.log("soommm tu124112");
    }
});

function loadMap() {
    var loadingPosition = {lat: 49.2129874, lng: 16.593002};
    var vutFitPostion = {lat: 49.2266153, lng: 16.59666525};
    var vutFektPosition = {lat: 49.226813, lng: 16.575148};
    var purkynoveKolejePosition = {lat: 49.2231725, lng: 16.58695};
    var podPalackymVrchemKolejePosition = {lat: 49.232584, lng: 16.570851};
    var hlavneNadraziPosition = {lat: 49.192742, lng: 16.6096532};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: loadingPosition,
        zoom: 14
    });

    var vutFIT = new google.maps.Marker({
        map: map,
        position: vutFitPostion,
        title: 'Click to zoom',
        icon: 'http://www.stud.fit.vutbr.cz/~xorsak02/images/fitLogoSmall.png'
    });

    vutFIT.addListener('click', function () {
        // priblizenie na dany objekt
        if((map.getZoom() != 19)){
            alert("Super našiel si FIT");
            $("#button1stQuest").addClass("btn btn-lg btn-green");
            localStorage.setItem("step1", "2");
            window.location.href = "/~xorsak02/ITU/src/frontend/html/staryFIT.html";

        }
    });

    var vutFEKT = new google.maps.Marker({
        map: map,
        position: vutFektPosition,
        title: 'VUT FEKT SCHOOL!',
        icon: 'http://www.stud.fit.vutbr.cz/~xorsak02/images/fektLogoSmall.png'
    });

    vutFEKT.addListener('click', function () {
        // priblizenie na dany objekt
        if((map.getZoom() != 19)) {
            map.setZoom(19);
            map.setCenter(vutFEKT.getPosition());
        }
        // otvorenie FIT skoly
        else if((map.getZoom() == 19)){
            // sem pojde uz do casti fitu... stranku fitu...
            window.location.href = "/~xorsak02/ITU/src/frontend/html/fekt.html";
        }
    });

    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            map.panTo(loadingPosition.getPosition());
        }, 3000);
    });

    var purkynoveKoleje = new google.maps.Marker({
        map: map,
        position: purkynoveKolejePosition,
        title: 'VUT FIT SCHOOL!'
    });

    var palackeKoleje = new google.maps.Marker({
        map: map,
        position: podPalackymVrchemKolejePosition,
        title: 'Palačáky!'
    });

    var hlavneNadrazi = new google.maps.Marker({
        map: map,
        position: hlavneNadraziPosition,
        title: 'VUT FIT SCHOOL!'
    });
}


