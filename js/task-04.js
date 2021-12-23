
const counter = {
    value: 0,
    increment() {
        console.log("this -> this", this);
        this.value += 1;
    },
    decrement() {
        console.log("this -> this", this);
        this.value -= 1;
    },
};

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const valueElem = document.querySelector("#value");

decrementBtn.addEventListener("click", function(){
    console.log('Кликнул "-"');
    counter.decrement();
});
incrementBtn.addEventListener("click", function(){
    console.log('Кликнул "+"');
    counter.increment();
});


 
 