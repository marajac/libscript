// ==UserScript==
//@include http://libanswers.utsa.edu/record.php*

var qbox = document.getElementById('qpreselect');
var qboxValue = qbox.value;
var f1 = document.getElementById('f1').value;
var f2 = document.getElementById('f2').value;
var f3 = document.getElementById('f3').value;
var f4 = document.getElementById('f4').value;

qbox.addEventListener('click', choiceListener);

function choiceListener() {
    //laptop/GIFM/Dibs/other tech
    if(qboxValue == 26292 || qboxValue == 26293 || qboxValue == 26294 || qboxValue == 26295)
    {
    	f1 = 2;
    	f2 = 1;
    	f3 = 1;
    	f4 = 1;
    }
    //course reserve
    if(qboxValue == 26291)
    {
    	f1 = 1;
    	f2 = 1;
    	f3 = 1;
    	f4 = 1;
    }
}
