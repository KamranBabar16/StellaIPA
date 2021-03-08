var box = document.getElementsByClassName('box')[0];

function startDictation() {

  if (window.hasOwnProperty('webkitSpeechRecognition')) {

    var recognition = new webkitSpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(e) {
      var t = setTimeout(function() {
        responsiveVoice.speak(document.getElementById("response").innerHTML);
      }, 1000)

      document.getElementById('transcript').value = e.results[0][0].transcript;
      recognition.stop();
      getword();
      document.getElementById('labnol').submit();

    };

    recognition.onerror = function(e) {
      recognition.stop();
    }

  }
}

var phrasePara = document.querySelector('.phrase');
var resultPara = document.querySelector('.result');
var diagnosticPara = document.querySelector('.output');

//resultPara
  resultPara.textContent = 'Right or wrong?';
  resultPara.style.background = 'rgba(0,0,0,0.2)';
  diagnosticPara.textContent = '...diagnostic messages';




//weather

$(document).ready(function() {
  $.simpleWeather({
    location: 'Washington DC',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<p>' + weather.temp + '&deg;' + weather.units.temp + '</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
});

$(document).ready(function() {

  $(document).bind('keydown', function(e) {
    if (e.keyCode == 13) {
      getword(), box.classList.add('talk');
    }
  });
});


//Remove name






function getword() {

//var transcript = transcript.toLowerCase();
var input = get("transcript").value,
  
    frame = get("frame");
  var res = document.getElementById("response");
  var nlow = input.toLowerCase();


//Name
if(~nlow.indexOf("stella")) {
  //If you call by name
  //alert("Found")

//Remove first word 
var filinput = input.substring( input.indexOf(" ") + 1, input.length );

    


 var filtinput = filinput.toLowerCase();




//////////////////////////////////
///////////Stella Brain//////////
/////////////////////////////////



	/////////////////////////////////
	///////////Stella Profile//////////
	///////////////////////////////


   // Welcome
	  if(filtinput==='hi') {
    res.innerHTML = "Hi there, I'm Stella intelligent Personal Assistant developed by TA.";
    box.classList.add('talk');

 } else  if(filtinput==='hello') {
    res.innerHTML = "Hi there, I'm Stella intelligent Personal Assistant developed by TA.";
    box.classList.add('talk');





/////////////////////////////////
	////////////Switches////////////
	///////////////////////////////
	
    // Turn ON Light
  } else if (filtinput==="turn light on") {
  	resultPara.textContent = 'Light ON';
    resultPara.style.background = 'lime';
    res.innerHTML = "Okay! i'm turning light on!";
    box.classList.add('talk');
    {
	// Submit to PHP SQL
	var x = new XMLHttpRequest();
    x.open("GET","SQL/switch6ON.php",true);
    x.send();
    return false; }
	
	
	// Turn OFF Light
  } else if(filtinput==='turn light off') {
      res.innerHTML = "Okay I'm turning light ON.";
      resultPara.style.background = 'lime';
	  resultPara.textContent = 'Light OFF';
    resultPara.style.background = 'Red';
    res.innerHTML = "I'm turning lights off!";
    box.classList.add('talk');
	// Submit to PHP SQL
	var x = new XMLHttpRequest();
    x.open("GET","SQL/switch6OFF.php",true);
    x.send();
    return false;

    
	// Turn Timer Light
	  }else if(filtinput==='turn on light timer') {
      resultPara.textContent = 'Light Timer ON';
    resultPara.style.background = 'yellow';
    res.innerHTML = "I'm turning lights timer!";
    box.classList.add('talk');
	// Submit to PHP SQL
	var x = new XMLHttpRequest();
    x.open("GET","SQL/switch6TIMER.php",true);
    x.send();
    return false;
	
	
	/////////////////////////////////
	//////////Stella Knowledge//////////
	///////////////////////////////

	}else if(filtinput==='Hi') {
      resultPara.textContent = '';
    resultPara.style.background = 'yellow';
    res.innerHTML = "I'm turning lights timer!";
    box.classList.add('talk');
	
	
	
	
	 ////////////////////////////////
	///////////Stella musics///////////
	///////////////////////////////

    }else if(filtinput==='play') {
    resultPara.textContent = '';
    resultPara.style.background = 'yellow';
    res.innerHTML = "I'm turning lights timer!";
    box.classList.add('talk');



    ////////////////////////////////
	///////////Stella Jokes///////////
	///////////////////////////////




    ////////////////////////////////
	///////////Stella Games///////////
	///////////////////////////////



//////////////////////////////////////////////
	///////////Stella Lyrics Challenge///////////
	/////////////////////////////////////////////



    ////////////////////////////////
	///////////Stella random///////////
	///////////////////////////////


	  	
    ////////////////////////////////
	///////////Stella Events///////////
	///////////////////////////////



////////////////////////////////////////////////////////////////////


//END
}
else {
	
	//If you not call by name
  //alert("Not Found");
 // res.innerHTML = "I dont get what you said, please dont use capital letters.";
  
  res.innerHTML = "I dont get what you said, please use correct commands.";
  //res.innerHTML = "";
}
////////





  }else {
    
    //If wrong word
    
    res.innerHTML = "";
    
 }

}

function get(id) {
  return document.getElementById(id);
}
//CHECK CODE
//var t = setInterval(getword, 20)

function emptytime() {
  document.getElementById('txt').value = "";
  document.getElementById('transcript').value = "";

}

function emptyweather() {
  document.getElementById('txt').value = "";
  document.getElementById('transcript').value = "";

}

function Talkback() {
  responsiveVoice.speak(document.getElementById("response").innerHTML);
}

function Talktime() {
  responsiveVoice.speak(document.getElementById("txt").innerHTML);
}