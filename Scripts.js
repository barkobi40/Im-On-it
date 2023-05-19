// handle the button to add task
function AddmyTasks() {
    var task_lable =document.getElementById("taskInput").value;
        document.getElementById("allTasks").innerHTML +='<div class="NewTask"><input onclick="DoneTask(this)" type="checkbox"><p>'+task_lable+'</p><button onclick="UpTaskButtn(this)" class="btnTask">UP<i class="fa-sharp fa-solid fa-angle-up fa-xl"></i></button><button onclick="DownTaskButtn(this)" class="btnTask">DOWN<i class="fa-regular fa-solid fa-angle-down fa-xl"></i></button><button onclick="DelTask(this)" class="btnTask">DEL<i class="fa-regular fa-trash-can fa-xl"></i></button></div>'
        document.getElementById("taskInput").value='';
    }
// press enter will send form as well as the button
document.getElementById("taskInput").addEventListener('keypress',function(event){
    if(event.key ==='Enter'){
        AddmyTasks();
    }
});

function DelTask(btn) {
    var alert = confirm("Are you sure???");
    var ParentDiv = btn.parentNode;
    if(alert){
        ParentDiv.remove();
        updateBar();
    }
}

function UpTaskButtn(btn) {
    var ParentDiv = btn.parentNode;
    var Previous = ParentDiv.previousElementSibling;
    if(Previous){
        document.getElementById('allTasks').insertBefore(ParentDiv , Previous );
    }
}

function DownTaskButtn(button) {
    var ParentDiv = button.parentNode;
    var Next = ParentDiv.nextElementSibling;
    if(Next){
        document.getElementById('allTasks').insertBefore(Next, ParentDiv);
    }
}


// move the task to a Done section if checked
function DoneTask(check_b) {
    var TodoDiv = document.getElementById('allTasks');
    var DoneDiv = document.getElementById('tasksDone');
    var ParentDiv = check_b.parentNode;
    if(check_b.checked){
        DoneDiv.appendChild(ParentDiv);
        updateBar();
    }
    if(!check_b.checked){
        TodoDiv.appendChild(ParentDiv);
        updateBar();
    }
}
