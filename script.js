var fingers = document.getElementById('fingers-block');
var toes = document.getElementById('toes-block');


function startCounter()
{
	var inputValue = document.getElementById('counter1-input').value;
	initializeCounter(inputValue);
}


function restartCounter()
{
	var inputValue = document.getElementById('counter1-input').value;
	document.getElementById('counter2-input').innerHTML = "0";
	initializeCounter(inputValue);
}

function resetCounter()
{
	clearIntervals();
	document.getElementById('counter1-input').value = "";
	document.getElementById('counter2-input').innerHTML = "0";
	fingers.style.color = '#696969';
	fingers.style.backgroundColor = '#FFFFFF';
	toes.style.color = '#696969';
	toes.style.backgroundColor = '#FFFFFF';
}

function clearIntervals()
{
	for(var i=1;i<1000;i++)
	{
		clearInterval(i);
	}
}

function initializeCounter(maxValue)
{
	clearIntervals();
	var startValue = 1;
	var displayValue = document.getElementById('counter2-input');
	var intervalId = setInterval(function()
	{
		var newValue = startValue++;
		if(newValue < maxValue)
		{
			if(newValue % 5 === 0 && newValue % 3 === 0)
			{
				fingers.style.backgroundColor = '#FFA500';
				fingers.style.color = '#696969';
				toes.style.backgroundColor = '#FFA500';
				toes.style.color = '#696969';
				displayValue.innerHTML = newValue.toString();
			}
			else if(newValue % 5 === 0){
				fingers.style.backgroundColor = '#FFFFFF';
				fingers.style.color = '#696969';
				toes.style.backgroundColor = '#FF8C00';
				toes.style.color = '#FFFFFF';
				displayValue.innerHTML = newValue.toString();	
			}
			else if(newValue % 3 === 0){
				fingers.style.backgroundColor = '#FFA500';
				fingers.style.color = '#FFFFFF';
				toes.style.backgroundColor = '#FFFFFF';
				toes.style.color = '#696969';
				displayValue.innerHTML = newValue.toString();		
			}
			else{
				fingers.style.backgroundColor = '#FFFFFF';
				fingers.style.color = '#696969';
				toes.style.backgroundColor = '#FFFFFF';
				toes.style.color = '#696969';
				displayValue.innerHTML = newValue.toString();	
			}
		}
		if(newValue == maxValue){
			if(newValue % 5 === 0 && newValue % 3 === 0){
				fingers.style.backgroundColor = '#FFA500';
				fingers.style.color = '#FFFFFF';
				toes.style.backgroundColor = '#FFA500';
				toes.style.color = '#FFFFFF';
				displayValue.innerHTML = newValue.toString();
			}
			else if(newValue % 5 === 0){
				fingers.style.backgroundColor = '#FFFFFF';
				fingers.style.color = '#696969';
				toes.style.backgroundColor = '#FFA500';
				toes.style.color = '#FFFFFF';
				displayValue.innerHTML = newValue.toString();	
			}
			else if(newValue % 3 === 0){
				fingers.style.backgroundColor = '#FFA500';
				fingers.style.color = '#FFFFFF';
				toes.style.backgroundColor = '#FFFFFF';
				toes.style.color = '#696969';
				displayValue.innerHTML = newValue.toString();		
			}
			else{
				fingers.style.backgroundColor = '#FFFFFF';
				fingers.style.color = '#696969';
				toes.style.backgroundColor = '#FFFFFF';
				toes.style.color = '#696969';
				displayValue.innerHTML = newValue.toString();	
			}
			clearInterval(intervalId);
		}
	},1000)
}

