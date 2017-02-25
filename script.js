var fingers = document.getElementById('fingers');
var toes = document.getElementById('toes');


function startCounter()
{
	var inputValue = document.getElementById('input').value;
	initializeCounter(inputValue);
}

function restartCounter()
{
	var inputValue = document.getElementById('input').value;
	document.getElementById('display').innerHTML = "0";
	initializeCounter(inputValue);
}

function resetCounter()
{
	clearIntervals();
	document.getElementById('input').value = "";
	document.getElementById('display').innerHTML = "0";
}

function clearIntervals()
{
	for(var i=1;i<10;i++)
	{
		clearInterval(i);
	}
}

