// ==UserScript==
//@include http://libanswers.utsa.edu/record.php*

var qbox = document.getElementById('qpreselect');
var qboxValue = qbox.value;

qbox.addEventListener('click', choiceListener);

function choiceListener() {
    var f1 = document.getElementById('f1').value;
    var f2 = document.getElementById('f2').value;
    var f3 = document.getElementById('f3').value;
    var f4 = document.getElementById('f4').value;
    //laptop/GIFM/Dibs/other tech
    if(qboxValue == 27251 || qboxValue == 27252 || qboxValue == 27249 || qboxValue == 27250 || 
      qboxValue == 27253)
    {
    	f1 = 1;
    	f2 = 1;
    	f3 = 1;
    	f4 = 1;
    }
    //course reserve
    if(qboxValue == 27248)
    {
    	f1 = 1;
    	f2 = 1;
    	f3 = 1;
    	f4 = 1;
    }
}
