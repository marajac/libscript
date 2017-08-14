// ==UserScript==
// @include http://libanswers.utsa.edu/record.php
// ==/UserScript==

document.getElementById('qpreselect').addEventListener('click', choiceListener);

function choiceListener() {
    //laptop/GIFM/Dibs/other tech
    if(document.getElementById('qpreselect').value == 26292 || document.getElementById('qpreselect').value == 26293
    	|| document.getElementById('qpreselect').value == 26294 || document.getElementById('qpreselect').value == 26295)
    {
    	document.getElementById('f1').value = 2;
    	document.getElementById('f2').value = 1;
    	document.getElementById('f3').value = 1;
    	document.getElementById('f4').value = 1;
    }
    //course reserve
    if(document.getElementById('qpreselect').value == 26291)
    {
    	document.getElementById('f1').value = 1;
    	document.getElementById('f2').value = 1;
    	document.getElementById('f3').value = 1;
    	document.getElementById('f4').value = 1;
    }
}
