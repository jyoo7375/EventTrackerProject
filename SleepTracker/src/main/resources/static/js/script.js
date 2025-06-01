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
	
	document.updateLogForm.addEventListener('submit', function(event){
		event.preventDefault();
		let id = document.getElementById('updatedId').value
		
		let updatedSleepLog = {
			id: updateLogForm.id.value,
			date: updateLogForm.updatedDate.value,
			bedTime: updateLogForm.updatedBedTime.value,
			wakeTime: updateLogForm.updatedWakeTime.value,
			notes: updateLogForm.updatedNotes.value,
			tiredness: updateLogForm.updatedTiredness.value
		};
		updateSleepLog(id, updatedSleepLog);
	});
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
		tr.appendChild(tdNotes);
		
		let tdTiredness = document.createElement('td');
		tdTiredness.textContent = form.tiredness;
		tr.appendChild(tdTiredness);
		
		let tdAction = document.createElement('td');
		
		let deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.classList.add('btn', 'btn-sm', 'btn-outline-danger', 'me-2')
		deleteButton.addEventListener('click', function(){
			deleteSleepLog(form.id);
		});
		tdAction.appendChild(deleteButton);
		
		let updateButton = document.createElement('button');
		updateButton.textContent = 'Update';
		updateButton.classList.add('btn', 'btn-sm', 'btn-outline-primary');
		updateButton.addEventListener('click', function(){
			gotoUpdate(form.id);
		});
		tdAction.appendChild(updateButton);
		
		tr.appendChild(tdAction);
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

function updateSleepLog(sleepLogId, updatedSleepLog){
	let url = 'api/sleeplogs/' + sleepLogId;
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function(){
		if(xhr.readyState === xhr.DONE){
			if(xhr.status === 200){
			let update = JSON.parse(xhr.responseText);
			console.log(update);
				loadLogForm();
			}
		}
	}
	
	let sleepLogJson = JSON.stringify(updatedSleepLog);
	xhr.send(sleepLogJson);
}

function gotoUpdate(sleepLogId){
	let url = 'api/sleeplogs/' + sleepLogId;
			let xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.onreadystatechange = function(){
				if(xhr.readyState === xhr.DONE){
					if(xhr.status === 200){
						let updatedLog = JSON.parse(xhr.responseText);
						displayUpdateForm(updatedLog);
					}
				}
			};
			xhr.send();
		
}

function displayUpdateForm(sleepLog){
	updateLogForm.id.value = sleepLog.id;
	updateLogForm.date.value = sleepLog.date;
	updateLogForm.wakeTime.value = sleepLog.wakeTime;
	updateLogForm.bedTime.value = sleepLog.bedTime;
	updateLogForm.notes.value = sleepLog.notes;
	updateLogForm.tiredness.value = sleepLog.tiredness;
	
	
}