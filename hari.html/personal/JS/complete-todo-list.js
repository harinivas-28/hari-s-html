var today = new Date();
let showtask = document.querySelector('.show-tasks');
let showDate = document.querySelector('.date');
let AllTasks = [];
let Dates = [];
function adding(){
    let typetask = document.querySelector('.task-box');
    let task = typetask.value;
    let DATE = showDate.value;
    AllTasks.push(task);
    Dates.push(DATE);
    typetask.value = '';
    showDate.value='';
let todohtml = '';
    for(let i = 0;i<AllTasks.length;i++){
        const todo = AllTasks[i];
        let todate = Dates[i];
        // if(todate ===''){
        //     todate=`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
        //     Dates.push(todate);
        // }
        const html = `
        <div class="tasking">
            <p>${todo}</p>
            <p>${todate}<p>
            <button 
            class="delete-btn" 
            onclick="AllTasks.splice(${i},1);
            Dates.splice(${i},1);
            adding();"
            >Delete</button>
        </div>`;
        todohtml += html;
    }
    showtask.innerHTML = `${todohtml}`;
}
reset=()=>{
    while(AllTasks.length>0){
        AllTasks.pop();
        Dates.pop();
    }
    showtask.innerHTML ='';
};
keydowntask=(event)=>{
    if(event.key === 'Enter'){
        adding();
    }
};