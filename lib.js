// ==UserScript==
//@include http://libanswers.utsa.edu/record.php*
//@author Marcus Jackson

//TODO: Refactor for cleanliness

var text, client, option, textByLine;

client = new XMLHttpRequest();
client.open('GET', 'https://marajac.github.io/libscript/options.txt');
client.onreadystatechange = function() {
    if (client.readyState == 4 && client.status == 200){
        text = client.responseText.split('\n');
        createOptions(text);
    }
}
client.send();

var qbox = document.getElementById('qpreselect');
qbox.addEventListener('click', choiceListener);

function choiceListener() {
    var qboxValue = qbox.value;
    //laptop/GIFM/Dibs/other tech
    if(qboxValue == 27251 || qboxValue == 27252 || qboxValue == 27249 || qboxValue == 27250 || 
      qboxValue == 27253)
    {
    	setFields(2, 1, 1, 1);
    }
    //course reserve
    else if(qboxValue == 27248)
    {
    	setFields(1, 1, 1, 1);
    }
    //Second Floor
    //Reference
    else if(qboxValue == 2)
    {
        document.getElementById('q').value = "Reference";
    	setFields(1, 1, 1, 1);
        swapFields();
    }
    //Directional
    else if(qboxValue == 3)
    {
        document.getElementById('q').value = "Directional";
    	setFields(2, 1, 1, 1);
        swapFields();
    }
    //Stacks Transaction
    else if(qboxValue == 4)
    {
        document.getElementById('q').value = "Stacks Transaction";
    	setFields(2, 1, 1, 1);
        swapFields();
    }
    //Difficult Reserve
    if(qboxValue == 5)
    {
        document.getElementById('q').value = "Difficult Reserve";
    	setFields(1, 1, 1, 2);
        swapFields();
    }
    //Phone Directional
    if(qboxValue == 6)
    {
        document.getElementById('q').value = "Phone Directional";
    	setFields(2, 2, 1, 1);
        swapFields();
    }
    //Phone Reserve
    if(qboxValue == 7)
    {
        document.getElementById('q').value = "Phone Reserve";
    	setFields(1, 2, 1, 1);
        swapFields();
    }
    //First Floor
    //Directional
    else if(qboxValue == 9)
    {
        document.getElementById('q').value = "Directional";
    	setFields(2, 1, 2, 1);
        swapFields();
    }
}

function setFields(f1, f2, f3, f4) {
    document.getElementById('f1').value = f1;
    document.getElementById('f2').value = f2;
    document.getElementById('f3').value = f3;
    document.getElementById('f4').value = f4;
}

//generate new options
function createOptions(optionsList){  
    var qcombo = document.getElementById('qpreselect');
    for(i=0; i < optionsList.length-1; i++){
        option = document.createElement('option');
        option.text = optionsList[i];
        option.value = i+1;
        qcombo.appendChild(option);
    }
}

function swapFields(){
    showPreDef();
    document.getElementById('qpreselect').value = 0;
}
