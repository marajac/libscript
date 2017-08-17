// ==UserScript==
//@include http://libanswers.utsa.edu/record.php*

var qbox = document.getElementById('qpreselect');
var qboxValue, client, qcombo, option, textByLine;

getText();
createOptions();
qbox.addEventListener('click', choiceListener);

function choiceListener() {
    qboxValue = qbox.value;
    //laptop/GIFM/Dibs/other tech
    if(qboxValue == 27251 || qboxValue == 27252 || qboxValue == 27249 || qboxValue == 27250 || 
      qboxValue == 27253)
    {
    	setFields(2, 1, 1, 1);
    }
    //course reserve
    if(qboxValue == 27248)
    {
    	setFields(1, 1, 1, 1);
    }
}

function setFields(f1, f2, f3, f4) {
    document.getElementById('f1').value = f1;
    document.getElementById('f2').value = f2;
    document.getElementById('f3').value = f3;
    document.getElementById('f4').value = f4;
}

function getText(){
    client = new XMLHttpRequest();
    client.open('GET', 'https://marajac.github.io/libscript/options.txt');
    /*client.onreadystatechange = function() {
        alert(client.responseText);
    }*/
    client.send();
}

//generate new options
function createOptions(){
    //TODO: parse text file into array  
    textByLine = client.responseText.split('\n');
    qcombo = document.getElementById('qpreselect');
    for(i=0; i < textByLine.length-1; i++){
        option = document.createElement('option');
        option.text = textByLine[i];
        option.value = i+1;
        qcombo.appendChild(option);
    }
}

