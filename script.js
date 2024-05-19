const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
console.log(listContainer)
function AddTask(){
    if(inputBox.value === ''){
        alert("You Must Write someting");

    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.setAttribute("class", "delete")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")

    }
    else if(EventTarget.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

const deleteBtn = document.querySelectorAll(".delete");
console.log(deleteBtn)
const li = document.querySelectorAll("li");
deleteBtn.forEach(function(v,i){
    v.addEventListener("click", function(e){
       li[i].style.display="none"
    })})