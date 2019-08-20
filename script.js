document.getElementById('nav-trigger').addEventListener('click', function(e) {
    
var myMenu = document.getElementById('nav-wrapper');
    
myMenu.classList.toggle('show');
   
});



var datePlaceholder = document.getElementById("today-date");
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'-'+mm+'-'+yyyy;

datePlaceholder.innerHTML = today; 

console.log(today);




var countDownDate = new Date("Oct 30, 2019 20:45:25").getTime();

var x = setInterval(function() {
var now = new Date().getTime();

var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(44.779563, 17.206370),
      zoom:17, 
      panControl: true,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      overviewMapControl: true,
      rotateControl: true
    };
    
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    //kreiranje markera za lokaciju koju zelimo naznaciti
    var marker = new google.maps.Marker({position: mapProp.center, animation:google.maps.Animation.BOUNCE});
    marker.setMap(map);
    
    google.maps.event.addListener(marker,'click',function() {
      map.setZoom(20);
      map.setCenter(marker.getPosition());
    });
    
    var infowindow = new google.maps.InfoWindow({
      content:"Ovdje se nalazi ALP Outdoor Shop!"
    });
    infowindow.open(map,marker);
    
    }




function submitQuiz() {
    console.log('submitted');

    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
        // do something with radiosNo
                var answerValue = Number(radiosNo[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6'));
    console.log("CalcScore: " + calcScore);

    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);  
        return ("Tačan odgovor za pitnaje #" + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
        }

    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }
    if (answerScore('q5') === 0) {
        document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
    }
    if (answerScore('q6') === 0) {
        document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
    }

    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

    var showScore = "Tvoj rezultat: " + calcScore +"/" + questionCounter;

    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Odličan rezultat!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}



var odgovorPolje = document.getElementById('zanr');
var tacanOdgovrNiz = document.getElementsByClassName('odgovor');
var tacanOdgovr = tacanOdgovrNiz[0];
var dugmeNiz = document.getElementsByClassName('KvizSubmitDugme'); 
var dugme = dugmeNiz[0];

function provjeriZanr() {
    if (odgovorPolje.value == 'drama') {
        tacanOdgovr.innerHTML = '<strong class=\"tacan-odgovor\">Tačan odgovor!</strong>' 
    } else if (odgovorPolje.value == '') {
        tacanOdgovr.innerHTML = '<strong class=\"pogresan-odgovor\">Unesite tekst!</strong>'
    }
    else {
        tacanOdgovr.innerHTML = '<strong class=\"pogresan-odgovor\">Pogrešan odgovor!</strong>'
    }
};

dugme.addEventListener('click', provjeriZanr);
