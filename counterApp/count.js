let count = 0; //initialize count variable to 0.
let save = document.getElementById('display-info');

function increment() {
    //increment the count by 1.
    count += 1;
    //pass the argument value.
    let counter = document.getElementById('counter').textContent  = count;

}

function decrement() {
    //decrease the count by 1.
    count += -1;
    let decreaseCounter = document.getElementById('counter').textContent = count;

}

function onSave() {
    
    let countInfo = count + ' - ';
    save.textContent += countInfo;

    // onSave button set count to zero(0).
    counter.textContent = 0;
    count = 0;
}