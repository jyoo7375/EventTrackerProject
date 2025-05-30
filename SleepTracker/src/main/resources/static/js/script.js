console.log('script.js loaded');

window.addEventListener('load', function(e){
	console.log('DOM created');
	init();
})

function init(){
	//TODO
	document.sleepLogForm.submit.addEventListener('click', function(event){
		event.preventDefault();
		let newSleepLog = {
			date: sleepLogForm.date.value,
			bedTime: sleepLogForm.bedTime.value,
			wakeTime: sleepLogForm.wakeTime.value,
			notes: sleepLogForm.notes.value,
			tiredness: parseInt(sleepLogForm.tiredness.value)
		}
		createSleepLog(newSleepLog);
	});
	loadLogForm();
}

function loadLogForm(){
	let url = 'api/sleeplogs';
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === xhr.DONE){
			if(xhr.status === 200){
				let formList = JSON.parse(xhr.responseText);
				displayLogForm(formList);
			}
		
		}
	};
	xhr.send();
}

function displayLogForm(logFormList){
	let tbody = document.getElementById('logFormTableBody');
	tbody.textContent = '';
	if(! Array.isArray(logFormList)){
		return;
	}
	for(let form of logFormList){
		let tr = document.createElement('tr');
		
		let tdDate = document.createElement('td');
		tdDate.textContent = form.date
		tr.appendChild(tdDate);
		
		let tdBed = document.createElement('td');
		tdBed.textContent = form.bedTime;
		tr.appendChild(tdBed);
		
		let tdWake = document.createElement('td');
		tdWake.textContent = form.wakeTime;
		tr.appendChild(tdWake);
		
		let tdNotes = document.createElement('td');
		tdNotes.textContent = form.notes;
		tr.appendChild(tdWake);
		
		let tdTiredness = document.createElement('td');
		tdTiredness.textContent = form.tiredness;
		tr.appendChild(tdNotes);
		
		let tdDelete = document.createElement('td');
		let deleteButton = document.createElement('button')
		deleteButton.textContent = 'Delete';
		deleteButton.addEventListener('click', function(){
			deleteSleepLog(form.id);
		});
		tdDelete.appendChild(deleteButton);
		tr.appendChild(tdDelete);
		tbody.appendChild(tr);
	}
	
}

function createSleepLog(sleepLog){
	let url = 'api/sleeplogs';
		let xhr = new XMLHttpRequest();
		xhr.open('POST', url);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function(){
			if(xhr.readyState === xhr.DONE){
				if(xhr.status === 201){
					let newLog = JSON.parse(xhr.responseText);
					loadLogForm();
				}
			}
		};
		let sleepLogJson = JSON.stringify(sleepLog);
		xhr.send(sleepLogJson);
}

function deleteSleepLog(sleepLogId){
	let url = 'api/sleeplogs/' + sleepLogId;
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', url);
		xhr.onreadystatechange = function(){
			if(xhr.readyState === xhr.DONE){
				if(xhr.status === 204){
					loadLogForm();
				}
			}
		};
		xhr.send();
	
}