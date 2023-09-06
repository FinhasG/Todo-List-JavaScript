let inputBox=document.getElementById("input-box");
let notCompleted=document.getElementById("pending");
const completed=document.getElementById("completed");


function addTask(e){
    if(inputBox.value===''){
        alert("What do you want to do?")
    }else{
        let li=document.createElement("li");
        let checkBtn=document.createElement("button");
        let delBtn=document.createElement("button");
        checkBtn.innerHTML='<button><i class="fa fa-check"></i></button>'
        delBtn.innerHTML='<button onclick=kk()><i class="fa fa-trash"></i></button>'
        
        li.innerHTML=inputBox.value;
        notCompleted.appendChild(li);
        li.appendChild(checkBtn)
        li.appendChild(delBtn)
        inputBox.value="";

        delBtn.onclick=function(){
            notCompleted.removeChild(li);
        }

        checkBtn.onclick=function(){
            li.style.display="line-through"
            notCompleted.removeChild(li);
            completed.appendChild(li)
            checkBtn.style.display='none'
            delBtn.onclick=function(){
                completed.removeChild(li);
            }

        }
}
}

