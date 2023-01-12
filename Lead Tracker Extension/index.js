let myLeads = []
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const leads = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
if(leads){
    myLeads = leads
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        inputEl.value = " "
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
      

    })
   
function render(newLeads){
    let listItems = " "
    for(let i = 0; i<newLeads.length; i++){
        listItems += `
        <li>
        <a href='${newLeads[i]}' target = '_blank'>
        ${newLeads[i]}
        </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)   
})

deleteBtn.addEventListener("dblclick", function(){
    ulEl.textContent = " " 
    myLeads = []
    localStorage.clear("myLeads")
})

console.log(JSON.parse(localStorage.getItem("courses")))


