var txtbutton1 = document.querySelector("#translate1");
var area1 = document.querySelector("#txtarea2");
var area2 = document.querySelector("#txt1"); 

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" +"text=" + input
}

//function errorHandler(error){
//    console.log("error occured",error);
//    alert("something went wrong")
//}


txtbutton1.addEventListener("click",function talk(){
    var inputtxt = area1.value;

    //calling server for processing
    fetch(getTranslationURL(inputtxt)).then(response => response.json()).then(json => {
        var translatedText = json.contents.translated;
        area2.innerText=translatedText;
    }
})


