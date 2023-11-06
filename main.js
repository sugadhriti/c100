var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("input1").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("input1").innerHTML = content;
    console.log(content);

    if(content=="take my selfie")
    {
        console.log("taking selfie----")
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;

    var speech_data = "Taking you Selfie in 5 seconds";
    
    var utterThis = new SpeechSynthesisUtterance(speech_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    },5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:250,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie_image" src='+data_uri+'">'
    }); 
}

function save()
{
    link = document.getElementById("");
    image= document.getElementById("output").src;
    link.href = image;
    link.click();
}
