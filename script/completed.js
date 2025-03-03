const completedBtn = document.getElementsByClassName('completed-btn');
for(let i = 0; i < completedBtn.length; i++){
    completedBtn[i].addEventListener('click',function(event){
        // alert
        alert('Board updated Successfully');
        // btn disabled
        this.setAttribute('disabled','true')

        const assignedNum = document.getElementById('assigned-num').innerText;
        const convertedAssignedNum = parseFloat(assignedNum);
        const assignmentRemaining = convertedAssignedNum -1;
        const convertedAssignRemain = parseFloat(assignmentRemaining)
        
        document.getElementById('assigned-num').innerText = convertedAssignRemain;

        if(convertedAssignRemain === 0){
            alert('congrates!!! You have completed all the current task')
        }

        const totalAssignment = document.getElementById('total-submit').innerText;
        const convertedTotalAssignment = parseFloat(totalAssignment);
        const totalSubmit = convertedTotalAssignment + 1;
        const convertedTotalSubmit = parseFloat(totalSubmit);

        document.getElementById('total-submit').innerText = convertedTotalSubmit;

        const activityLog = document.getElementById('activity-log');
        const li =  document.createElement('li');
        const title = document.getElementById('title').innerText;
        const time = new Date().toLocaleTimeString();
        li.innerText = 'You have Complete The Task ' + title + ' at ' + time;
        activityLog.appendChild(li);
        
        
        
    })
}

document.getElementById('clear-history').addEventListener('click',function(){
    const activityLog = document.getElementById('activity-log');
    activityLog.innerHTML = "";
})