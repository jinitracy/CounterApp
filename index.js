let count=0

function increment(){
    count+=1
    document.getElementById("count-el").textContent=count
}

function save(){
    document.getElementById("prev-entered").textContent += count + " - "
}

function reset(){
    count=0
    document.getElementById("count-el").textContent=count
}