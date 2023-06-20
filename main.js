window.addEventListener('load', () =>{
    const form=document.querySelector("#new-task-form");
    const input=document.querySelector("#new-task-input");
    const list_el=document.querySelector("#tasks");
    /*\
    const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")): [];
    localstorage.setItem('task',tasks.innerHTML);
    const savedDivHTML = localStorage.getItem('task');
        if(savedDivHTML){
            tasks.innerHTML=savedDivHTML;

        }
    */ //should work isn't working
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        
        const task=input.value;

        if(!task){
            alert("Please fill out the task");
            return;
        }

        const task_el=document.createElement("div");
        task_el.classList.add("task");

        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_e1 = document.createElement("div");
        task_action_e1.classList.add("actions");
        
        const task_edit_e1=document.createElement("button");
        task_edit_e1.classList.add("edit");
        task_edit_e1.innerHTML="Edit";

        const task_delete_e1=document.createElement("button");
        task_delete_e1.classList.add("delete");
        task_delete_e1.innerHTML="Delete";

        task_action_e1.appendChild(task_edit_e1);
        task_action_e1.appendChild(task_delete_e1);
 
        task_el.appendChild(task_action_e1);  

        list_el.appendChild(task_el);

        input.value='';

        task_edit_e1.addEventListener('click',()=>{
            if(task_edit_e1.innerText.toLowerCase()=="edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_e1.innerText="Save";
            } else {
                task_input_el.setAttribute("readonly","readonly");
                task_edit_e1.innerText="Edit";
            }            
        })

        task_delete_e1.addEventListener('click', ()=>{
            list_el.removeChild(task_el);
        })
        document.onreadystatechange = function() {
            var state = document.readyState
            if (state == 'complete') {
              setTimeout(function() {
                document.getElementById('readonly');
                document.getElementById('text').style.visibility = "hidden";
              }, 2500);
            }
          }
    });
})