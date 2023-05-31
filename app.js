const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list-container");

function addingTask(){
    if(inputBox.value === ''){
        alert("Write Something!!");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    inputBox.value="";
    saveInBrowser();
} 

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        saveInBrowser();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveInBrowser();
    }
},false);

function saveInBrowser(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showItems(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showItems();